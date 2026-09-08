import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  type: z.enum(["wedding", "corporate"]),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(32),
  date: z.string().trim().max(40).optional().default(""),
  guests: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  details: z.string().trim().max(1500).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

/**
 * Mock CRM webhook + WhatsApp auto-reply trigger.
 * Set LEAD_WEBHOOK_URL later to route leads to a real CRM; until then the
 * payload is logged server-side and acknowledged.
 */
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const reference = `AVERA-${Date.now().toString(36).toUpperCase()}`;
    const payload = {
      reference,
      receivedAt: new Date().toISOString(),
      source: "avera-website",
      ...data,
    };

    const webhookUrl = process.env["LEAD_WEBHOOK_URL"];
    let delivered = false;

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event: "lead.created", payload }),
        });
        delivered = res.ok;
      } catch {
        delivered = false;
      }
    } else {
      console.info("[avera] mock CRM webhook", JSON.stringify(payload));
      console.info("[avera] mock WhatsApp auto-reply queued", reference);
      delivered = true;
    }

    return { ok: true, reference, delivered };
  });
