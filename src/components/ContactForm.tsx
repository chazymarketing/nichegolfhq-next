"use client";

import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "sending") return;

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString();
    const email = (fd.get("email") || "").toString();
    const message = (fd.get("message") || "").toString();

    setState({ status: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
      (e.currentTarget as HTMLFormElement).reset();
      setState({ status: "sent" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send";
      setState({ status: "error", message: msg });
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-200 bg-white p-8 text-center">
      <div className="grid grid-cols-1 gap-4">
        <label className="grid gap-2 text-center">
          <span className="text-sm font-medium text-zinc-900">Name</span>
          <input
            name="name"
            required
            className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-center text-sm outline-none focus:border-zinc-400"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-center">
          <span className="text-sm font-medium text-zinc-900">Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-center text-sm outline-none focus:border-zinc-400"
            placeholder="you@company.com"
          />
        </label>

        <label className="grid gap-2 text-center">
          <span className="text-sm font-medium text-zinc-900">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm outline-none focus:border-zinc-400"
            placeholder="What are you looking to do?"
          />
        </label>

        <button
          type="submit"
          disabled={state.status === "sending"}
          className="mx-auto mt-2 inline-flex h-11 w-fit items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
        >
          {state.status === "sending" ? "Sending…" : "Send"}
        </button>

        {state.status === "sent" ? (
          <div className="text-sm text-emerald-700">Sent — we’ll reply shortly.</div>
        ) : null}
        {state.status === "error" ? (
          <div className="text-sm text-red-700">{state.message}</div>
        ) : null}
      </div>
    </form>
  );
}
