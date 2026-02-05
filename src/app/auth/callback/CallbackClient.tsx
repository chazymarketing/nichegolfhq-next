"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { getSupabase } from "@/lib/supabaseClient";

export function CallbackClient() {
  const searchParams = useSearchParams();
  const next = useMemo(() => searchParams.get("next") || "/community", [searchParams]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const supabase = getSupabase();
        if (!supabase) throw new Error("Supabase env is not set for this deployment.");

        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (exchangeError) throw exchangeError;

        window.location.href = next;
      } catch (e: any) {
        setError(e?.message || "Auth callback failed.");
      }
    })();
  }, [next]);

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-xl px-5 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">signing you in…</h1>
        <p className="mt-2 text-sm text-zinc-600">One sec.</p>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}
      </div>
    </SiteShell>
  );
}
