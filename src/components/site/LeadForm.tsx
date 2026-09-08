import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import { whatsappLink } from "@/lib/brand";

type Kind = "wedding" | "corporate";

export function LeadForm({ kind }: { kind: Kind }) {
  const send = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    company: "",
    details: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const wedding = kind === "wedding";

  const waMessage = wedding
    ? `Hello AVERA, I'd like to plan my wedding.\nName: ${form.name || "-"}\nDate: ${form.date || "-"}\nGuests: ${form.guests || "-"}\nNotes: ${form.details || "-"}`
    : `Hello AVERA Events, I'd like to request a proposal.\nName: ${form.name || "-"}\nCompany: ${form.company || "-"}\nDate: ${form.date || "-"}\nAttendees: ${form.guests || "-"}\nScope: ${form.details || "-"}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await send({ data: { type: kind, ...form } });
      setReference(res.reference);
      setStatus("done");
    } catch {
      setStatus("error");
      setError("We couldn't send that. Please check your details and try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-border bg-card p-10 text-center">
        <p className="text-eyebrow">Enquiry Received</p>
        <h3 className="mt-4 text-3xl text-ivory">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Your reference is <span className="text-champagne">{reference}</span>. A planner
          replies within one business day — or continue the conversation now on WhatsApp.
        </p>
        <a
          className="btn-luxe-solid mt-7"
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-8 md:p-10">
      <p className="text-eyebrow">{wedding ? "Wedding Enquiry" : "Corporate RFP"}</p>
      <h3 className="mt-3 text-3xl text-ivory">
        {wedding ? "Tell us about the two of you" : "Tell us about the brief"}
      </h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <input
          required
          maxLength={100}
          className="field-luxe"
          placeholder="Full name"
          value={form.name}
          onChange={set("name")}
        />
        <input
          required
          type="email"
          maxLength={255}
          className="field-luxe"
          placeholder="Email"
          value={form.email}
          onChange={set("email")}
        />
        <input
          required
          maxLength={32}
          className="field-luxe"
          placeholder="Phone / WhatsApp"
          value={form.phone}
          onChange={set("phone")}
        />
        <input
          maxLength={40}
          className="field-luxe"
          placeholder={wedding ? "Preferred date" : "Event date"}
          value={form.date}
          onChange={set("date")}
        />
        <input
          maxLength={40}
          className="field-luxe"
          placeholder={wedding ? "Guest count" : "Expected attendees"}
          value={form.guests}
          onChange={set("guests")}
        />
        {wedding ? (
          <input
            maxLength={120}
            className="field-luxe"
            placeholder="Venue or city (optional)"
            value={form.company}
            onChange={set("company")}
          />
        ) : (
          <input
            maxLength={120}
            className="field-luxe"
            placeholder="Company"
            value={form.company}
            onChange={set("company")}
          />
        )}
      </div>

      <textarea
        rows={4}
        maxLength={1500}
        className="field-luxe mt-6 resize-none"
        placeholder={
          wedding
            ? "Your vision, mood, must-haves…"
            : "Scope: staging, LED, booths, logistics, production dates…"
        }
        value={form.details}
        onChange={set("details")}
      />

      {error && <p className="mt-4 text-xs text-destructive">{error}</p>}

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="submit" className="btn-luxe-solid" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : wedding ? "Send Enquiry" : "Submit RFP"}
        </button>
        <a
          className="btn-luxe"
          href={whatsappLink(waMessage, !wedding)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp Instead
        </a>
      </div>
      <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        Routed instantly to our CRM &amp; WhatsApp desk
      </p>
    </form>
  );
}
