"use client";

import { useMemo, useState } from "react";

export function SponsorInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("website sponsor");
  const [message, setMessage] = useState("");

  const href = useMemo(() => {
    const subject = `nichegolfHQ sponsorship inquiry (${category})`;
    const body = [
      `Name: ${name || ""}`,
      `Email: ${email || ""}`,
      `Category: ${category}`,
      "",
      message || "",
    ].join("\n");

    return `mailto:sponsor@nichegolfhq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, category, message]);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black">
      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Contact us</div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:border-zinc-800 dark:bg-black dark:text-zinc-50"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:border-zinc-800 dark:bg-black dark:text-zinc-50"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:border-zinc-800 dark:bg-black dark:text-zinc-50 sm:col-span-2"
        >
          <option value="website sponsor">website sponsor</option>
          <option value="newsletter sponsor">newsletter sponsor</option>
          <option value="social media sponsor">social media sponsor</option>
        </select>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you’re promoting"
          className="min-h-28 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/40 dark:border-zinc-800 dark:bg-black dark:text-zinc-50 sm:col-span-2"
        />

        <a
          href={href}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white sm:col-span-2"
        >
          Contact us
        </a>
      </div>

      <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        This opens your email app. If you prefer, email sponsor@nichegolfhq.com.
      </div>
    </div>
  );
}
