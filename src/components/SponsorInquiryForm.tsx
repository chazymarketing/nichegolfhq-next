"use client";

import { useState } from "react";

export function SponsorInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("website sponsor");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/sponsor-inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, category, message }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setCategory("website sponsor");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8">
      <div className="text-sm font-semibold text-zinc-900">Contact us</div>

      <form onSubmit={onSubmit} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 sm:col-span-2"
        >
          <option value="website sponsor">website sponsor</option>
          <option value="newsletter sponsor">newsletter sponsor</option>
          <option value="social media sponsor">social media sponsor</option>
        </select>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you’re promoting"
          className="min-h-28 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 sm:col-span-2"
          required
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
        >
          {status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Contact us"}
        </button>

        {status === "error" ? (
          <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error || "Failed to send."}
          </div>
        ) : null}

        {status === "sent" ? (
          <div className="sm:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Got it — we’ll reply soon.
          </div>
        ) : null}
      </form>

      <div className="mt-3 text-xs text-zinc-500">
        If you prefer, DM us on social (links in the footer).
      </div>
    </div>
  );
}
