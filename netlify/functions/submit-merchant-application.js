Here’s your function updated to ES Module syntax and compatible with `"type": "module"`:

```js
import { randomUUID } from "crypto";

/**
 * Netlify Function to handle merchant application submissions.
 *
 * This function accepts a JSON payload representing the form data from the
 * Apply page, maps those values into the structure required by the NMI
 * Merchant Sign-Up API, obtains an access token, creates a new application,
 * and returns the resulting application ID.
 *
 * Environment variables used:
 *   NMI_CLIENT_ID        – your NMI partner client ID
 *   NMI_CLIENT_SECRET    – your NMI partner client secret
 *   NMI_PACKAGE_ID       – the package identifier to use when creating a new application
 *   NMI_AUTH_URL         – optional override for the OAuth token endpoint
 *   NMI_CREATE_APP_URL   – optional override for the application creation endpoint
 *
 * NOTE: This function provides a skeleton implementation. You should review
 * the NMI Sign-Up API documentation and adjust the fieldMapping object
 * below to align your form fields with the exact NMI field identifiers
 * required for your package. Additional steps such as uploading documents
 * (bankVerificationDocument) and submitting the application may also
 * be necessary depending on your onboarding flow.
 */

export const handler = async (event) => {
  try {
    // Ensure we received a POST request with a body
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};

    // Mapping from our front-end field names to NMI API field slugs
    const fieldMapping = {
      company_name: "businessName",
      address: "physicalAddress1",
      address2: "physicalAddress2",
      city: "physicalCity",
      state: "physicalState",
      zip: "physicalPostalCode",
      website: "websiteUrl",
      first_name: "contactFirstName",
      last_name: "contactLastName",
      email: "contactEmail",
      phone: "contactPhone",
      fax: "contactFax",
      username: "username",
      hasCurrentProcessor: "hasCurrentProcessor",
      currentProcessorName: "currentProcessorName",
      bankAccountHolderName: "bankAccountHolderName",
      bankName: "bankName",
      bankAccountType: "bankAccountType",
      bankRoutingNumber: "bankRoutingNumber",
      bankAccountNumber: "bankAccountNumber",
      processing_services: "processingServices",
      value_services: "valueAddedServices",
      agree_to_terms: "agreeToTerms",
      agree_to_security_policy: "agreeToSecurityPolicy",
    };

    // Construct the fields object expected by NMI
    const fields = {};
    Object.keys(fieldMapping).forEach((key) => {
      if (
        Object.prototype.hasOwnProperty.call(body, key) &&
        body[key] !== undefined &&
        body[key] !== null
      ) {
        fields[fieldMapping[key]] = body[key];
      }
    });

    // If a bank verification document is provided, include it as a separate property.
    // For file uploads, the NMI API uses the upload document endpoint. Here we simply
    // include it in the payload so you can handle it in a follow-up step.
    let attachments = [];
    if (body.bankVerificationDocument && body.bankVerificationDocument_name) {
      attachments.push({
        name: body.bankVerificationDocument_name,
        data: body.bankVerificationDocument,
      });
    }

    // Obtain an access token using client credentials
    const authUrl =
      process.env.NMI_AUTH_URL || "https://signup.nmi.com/v1/oauth2/token";
    const authHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.NMI_CLIENT_ID}:${process.env.NMI_CLIENT_SECRET}`
        ).toString("base64"),
    };
    const authBody = new URLSearchParams({
      grant_type: "client_credentials",
    }).toString();

    const authResp = await fetch(authUrl, {
      method: "POST",
      headers: authHeaders,
      body: authBody,
    });

    if (!authResp.ok) {
      const text = await authResp.text();
      throw new Error(
        `Failed to obtain access token: ${authResp.status} ${text}`
      );
    }
    const authJson = await authResp.json();
    const accessToken = authJson.access_token;

    // Create the application
    const createAppUrl =
      process.env.NMI_CREATE_APP_URL || "https://signup.nmi.com/v1/applications";
    const createHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Idempotency-Key": randomUUID(),
    };
    const createPayload = {
      package_id: process.env.NMI_PACKAGE_ID,
      fields,
    };
    const createResp = await fetch(createAppUrl, {
      method: "POST",
      headers: createHeaders,
      body: JSON.stringify(createPayload),
    });

    if (!createResp.ok) {
      const text = await createResp.text();
      throw new Error(
        `Failed to create application: ${createResp.status} ${text}`
      );
    }
    const createData = await createResp.json();
    const applicationId = createData.application_id || createData.id || null;

    // Optionally, submit the application or upload documents here. See the NMI API docs.

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, applicationId }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || "Unknown error",
      }),
    };
  }
};
```
