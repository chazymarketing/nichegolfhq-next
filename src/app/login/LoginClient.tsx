"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { getSupabase } from "@/lib/supabaseClient";

export function LoginClient() {
  const searchParams = useSearchParams();

  const next = useMemo(() => searchParams.get("next") || "/community", [searchParams]);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    // If already logged in, bounce.
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session) window.location.href = next;
    });
  }, [next]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error("Supabase env is not set for this deployment.");

      const origin = window.location.origin;
      const { error: err } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${origin}${next}`,
        },
      });
      if (err) throw err;
      setStatus("sent");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Something went wrong.");
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-xl px-5 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">login</h1>
        <p className="mt-2 text-sm text-zinc-600">Magic link sign-in. No password.</p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
          <label className="text-sm font-medium text-zinc-900" htmlFor="email">
            email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
          />

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-950 px-5 text-base font-medium text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "sending…" : status === "sent" ? "check your email" : "send magic link"}
          </button>

          {error ? <div className="text-sm text-red-600">{error}</div> : null}
          {status === "sent" ? (
            <div className="text-sm text-zinc-600">
              We sent a sign-in link to <span className="font-medium text-zinc-900">{email}</span>.
            </div>
          ) : null}

          <div className="mt-4 text-xs text-zinc-500">
            <Link className="underline" href="/">
              back home
            </Link>
          </div>
        </form>
      </div>
    </SiteShell>
  );
}
