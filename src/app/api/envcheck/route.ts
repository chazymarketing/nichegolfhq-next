import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    vercelEnv: process.env.VERCEL_ENV || null,
    hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
    hasContactToEmail: Boolean(process.env.CONTACT_TO_EMAIL),
    hasResendFrom: Boolean(process.env.RESEND_FROM),
  });
}
