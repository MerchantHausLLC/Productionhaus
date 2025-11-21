/**
 * Netlify Function to receive webhook events from NMI's Merchant Sign‑Up API.
 *
 * This endpoint should be configured as the target URL when registering a
 * webhook subscription via the NMI API. NMI will send various event
 * notifications (underwriter requests, approvals, declines, merchant ready to
 * process, etc.) to this endpoint. Currently it simply logs the incoming
 * payload and returns a 200 response. You can extend this handler to
 * verify request signatures (if provided), persist events to a database,
 * trigger notifications, or update your own merchant records.
 */

exports.handler = async (event) => {
  // NMI will send a POST request with a JSON payload
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    console.warn("Failed to parse webhook payload", err);
    return { statusCode: 400, body: "Invalid JSON" };
  }
  // Optional: verify signature header here using your webhook signing secret
  // const signature = event.headers["nmi-signature"] || event.headers["x-nmi-signature"];
  console.log("Received NMI webhook:", JSON.stringify(payload, null, 2));

  // TODO: handle specific event types (e.g., underwriterRequestedInfo, applicationApproved)
  // and update your database or notify relevant systems.

  return { statusCode: 200, body: "OK" };
};
