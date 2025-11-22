/*
 * Netlify Function: create-gateway-account
 *
 * This function is invoked whenever a merchant application reaches the
 * "ready to process" state. It uses the NMI “Gateway Accounts” API (often
 * referred to as API B) to provision an actual gateway account for the
 * merchant. You can call this function from your `nmi-webhook` handler
 * after receiving a `merchant_ready_to_process` event.
 *
 * Environment Variables required:
 * - NMI_B_API_KEY: Your Affiliate API key used for the API B calls. You can
 *   find this in your NMI portal under the API credentials section. Do
 *   not commit the actual key to source control.
 * - NMI_FEE_PLAN (optional): The fee schedule ID to assign to the
 *   gateway account. Leave undefined or omit this environment variable
 *   if you want to use your default fee schedule.
 *
 * Usage:
 *   Call this handler with the merchant data you want to use to create
 *   the gateway account. See the example in nmi-webhook.js for how to
 *   integrate it.
 */

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Helper to build the request body for the Gateway Accounts API
function buildGatewayRequestBody(merchant) {
  return {
    company: merchant.company_name,
    address_1: merchant.address,
    address_2: merchant.address2 || undefined,
    city: merchant.city,
    state: merchant.state,
    postal: merchant.zip,
    country: merchant.country || 'US',
    url: merchant.website || undefined,
    timezone_id: merchant.timezone_id || 6, // Default to Pacific time; adjust as needed
    contact_first_name: merchant.first_name,
    contact_last_name: merchant.last_name,
    contact_phone: merchant.phone,
    contact_email: merchant.email,
    account_number: merchant.bankAccountNumber,
    routing_number: merchant.bankRoutingNumber,
    username: merchant.username,
    fee_plan: process.env.NMI_FEE_PLAN || undefined,
    features: {
      capture_higher_than_authed: false,
    },
  };
}

exports.handler = async function (event) {
  try {
    // Parse the merchant object from the event body.
    const data = JSON.parse(event.body);
    const merchant = data.merchant;
    if (!merchant) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing merchant object in request.' }),
      };
    }

    const requestBody = buildGatewayRequestBody(merchant);

    const apiKey = process.env.NMI_B_API_KEY;
    if (!apiKey) {
      throw new Error('NMI_B_API_KEY environment variable is not set.');
    }

    const response = await fetch('https://secure.nmi.com/api/v3/affiliate/gateways', {
      method: 'POST',
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NMI Gateway API error:', errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to create gateway account', details: errorText }),
      };
    }

    const result = await response.json();
    console.log('Gateway account created successfully:', result);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, gateway: result }),
    };
  } catch (err) {
    console.error('Error in create-gateway-account:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};