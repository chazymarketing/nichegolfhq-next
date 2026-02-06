"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { getSupabase } from "@/lib/supabaseClient";
import { isCommunityEnabled } from "@/lib/featureFlags";

type Category = { id: string; slug: string; name: string };

type Profile = {
  user_id: string;
  is_moderator: boolean;
  signup_seq: number;
  can_post_at: string;
};

export default function CommunityPage() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isCommunityEnabled()) {
      window.location.href = "/";
      return;
    }

    (async () => {
      try {
        const supabase = getSupabase();
        if (!supabase) throw new Error("Supabase env is not set for this deployment.");

        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData?.session) {
          window.location.href = `/login?next=${encodeURIComponent("/community")}`;
          return;
        }

        const userId = sessionData.session.user.id;

        const { data: prof, error: profErr } = await supabase
          .from("profiles")
          .select("user_id,is_moderator,signup_seq,can_post_at")
          .eq("user_id", userId)
          .maybeSingle();
        if (profErr) throw profErr;
        setProfile((prof as any) || null);

        const { data: cats, error: catErr } = await supabase
          .from("community_categories")
          .select("id,slug,name")
          .order("name");
        if (catErr) throw catErr;
        setCategories((cats as any) || []);

        setLoading(false);
      } catch (e: any) {
        setError(e?.message || "Failed to load community.");
        setLoading(false);
      }
    })();
  }, []);

  async function signOut() {
    const supabase = getSupabase();
    if (!supabase) return;
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  const canPostNow = profile?.can_post_at ? new Date(profile.can_post_at) <= new Date() : false;

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-3xl px-5 py-14">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">community</h1>
            <p className="mt-2 text-sm text-zinc-600">Gated. Free. Owned.</p>
          </div>
          <button
            onClick={signOut}
            className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            sign out
          </button>
        </div>

        {loading ? (
          <div className="mt-8 text-sm text-zinc-600">loading…</div>
        ) : error ? (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
        ) : (
          <>
            <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="text-sm font-semibold text-zinc-900">your access</div>
              <div className="mt-2 text-sm text-zinc-700">
                {profile ? (
                  <>
                    <div>moderator: {profile.is_moderator ? "yes" : "no"}</div>
                    <div>signup #: {profile.signup_seq}</div>
                    <div>can post: {canPostNow ? "yes" : `after ${new Date(profile.can_post_at).toLocaleString()}`}</div>
                  </>
                ) : (
                  <div>No profile row found yet. (Trigger may not have run.)</div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-zinc-900">categories</div>
              <div className="mt-3 grid grid-cols-1 gap-3">
                {categories.map((c) => (
                  <div key={c.id} className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="text-sm font-medium text-zinc-900">{c.name}</div>
                    <div className="mt-1 text-xs text-zinc-500">/{c.slug}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm text-zinc-600">
                Next: threads + posting UI. For now this page confirms auth + DB wiring.
              </div>

              <div className="mt-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
                >
                  back home
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </SiteShell>
  );
}
