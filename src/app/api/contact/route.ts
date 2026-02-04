import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SPONSOR_TO_EMAIL;
  const from = process.env.SPONSOR_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
  }
  if (!to || !from) {
    return NextResponse.json(
      { ok: false, error: "Missing SPONSOR_TO_EMAIL or SPONSOR_FROM_EMAIL" },
      { status: 500 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = "nichegolfHQ contact";
  const text = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      to,
      from,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
