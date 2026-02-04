import { NextResponse } from "next/server";

export const runtime = "nodejs";

function pickEnv(brand: string) {
  const token = process.env.IG_GRAPH_ACCESS_TOKEN || "";

  const idMap: Record<string, string | undefined> = {
    midamgolfhq: process.env.IG_BUSINESS_ID_MIDAMGOLFHQ,
    juniorgolfhq: process.env.IG_BUSINESS_ID_JUNIORGOLFHQ,
    seniorgolfhq: process.env.IG_BUSINESS_ID_SENIORGOLFHQ,
  };

  return {
    token,
    igBusinessId: idMap[brand],
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const brand = (searchParams.get("brand") || "").toLowerCase();

  if (!brand) {
    return NextResponse.json({ ok: false, error: "missing brand" }, { status: 400 });
  }

  const { token, igBusinessId } = pickEnv(brand);

  if (!token || !igBusinessId) {
    return NextResponse.json({
      ok: false,
      error: "instagram not configured",
      brand,
      hasToken: Boolean(token),
      hasBusinessId: Boolean(igBusinessId),
    });
  }

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
  ].join(",");

  const url = new URL(`https://graph.facebook.com/v19.0/${igBusinessId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", "6");
  url.searchParams.set("access_token", token);

  const res = await fetch(url.toString(), {
    // cache at the edge/server; Vercel will revalidate
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, error: "instagram fetch failed", status: res.status, details: text.slice(0, 500) },
      { status: 500 }
    );
  }

  const json = await res.json();
  const items = Array.isArray(json?.data) ? json.data : [];

  return NextResponse.json({ ok: true, brand, items });
}
