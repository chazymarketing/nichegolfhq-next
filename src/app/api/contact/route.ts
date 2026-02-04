import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const cleanName = (name || "").trim();
    const cleanEmail = (email || "").trim();
    const cleanMessage = (message || "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM;

    if (!resendKey) {
      return NextResponse.json(
        { ok: false, error: "Server not configured: RESEND_API_KEY missing." },
        { status: 500 }
      );
    }
    if (!toEmail) {
      return NextResponse.json(
        { ok: false, error: "Server not configured: CONTACT_TO_EMAIL missing." },
        { status: 500 }
      );
    }
    if (!fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Server not configured: RESEND_FROM missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const subject = `nichegolfHQ contact: ${cleanName}`;

    const { error } = await resend.emails.send({
      from: `nichegolfHQ <${fromEmail}>`,
      to: [toEmail],
      replyTo: cleanEmail,
      subject,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
