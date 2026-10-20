import { Nitrosend } from "@nitrosend/sdk";

const apiKey = process.env.NITROSEND_API_KEY;
if (!apiKey) {
  throw new Error("NITROSEND_API_KEY environment variable is required");
}

const ns = new Nitrosend(apiKey);

async function main(): Promise<void> {
  const idempotencyKey = `idemp-${Date.now()}`;
  const res = await ns.messages.send(
    {
      channel: "email",
      from: "hello@bindacs-agent.nitrosend.net",
      to: "proof@dogfood.nitrosend.net",
      subject: "First Send Verification - BinDacs Agent",
      html: "<p>Automated first send verification from hosted sender.</p>"
    },
    idempotencyKey
  );
  console.log("Send result:", JSON.stringify(res));
}

main().catch((err: unknown) => {
  console.error("Failed to send message:", err);
  process.exit(1);
});
