/*
 * Netlify Function: nmi-webhook
 *
 * This function is configured as the callback URL for NMI Merchant
 * Sign‑Up webhooks. It listens for various application lifecycle events
 * such as “underwriter requested information”, “application approved”,
 * and “merchant ready to process”. When a merchant is ready to
 * process, this function invokes the create-gateway-account helper to
 * provision a live gateway account via the API B “Gateway Accounts” endpoint.
 *
 * NOTE: Adjust the event field names in the payload to match the format
 * sent by NMI. Commonly the event name is provided in `event` or
 * `event_type` and the merchant’s application details are nested in
 * `application` or a similar property. Update the key names below if
 * your payload uses different property names.
 */

const createGateway = require('./create-gateway-account.js');

exports.handler = async function (event) {
  try {
    // NMI sends payloads as JSON. If it sends form-encoded or another
    // format, adjust parsing accordingly.
    const data = JSON.parse(event.body || '{}');

    // Determine event type; NMI may use different field names.
    const eventType = data.event || data.event_type || data.type;
    console.log('Received NMI webhook event:', eventType);

    // Example: handle when merchant is ready to process. Adjust the
    // comparison to the exact string your NMI account sends. Some
    // implementations use uppercase or spaces.
    const isReadyToProcess =
      eventType &&
      (eventType.toLowerCase() === 'merchant ready to process' ||
        eventType.toLowerCase() === 'merchant_ready_to_process');

    if (isReadyToProcess) {
      // Extract merchant details from the payload. Update these property
      // names to match NMI’s webhook payload structure.
      const merchant = data.merchant || data.application || {};
      console.log('Processing ready-to-process merchant:', merchant);

      // Invoke the create-gateway-account helper. It expects an event
      // object with a `body` containing a JSON string with a `merchant`
      // property.
      await createGateway.handler({ body: JSON.stringify({ merchant }) });
    }

    // Always return 200 to acknowledge receipt. NMI will retry on
    // non-2xx responses.
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.error('Error handling NMI webhook:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
