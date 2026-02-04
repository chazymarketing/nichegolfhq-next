import { SiteShell } from "@/components/SiteShell";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-600">
          Want to work together? Send a quick note and we’ll get back to you.
        </p>

        <div className="mt-10 max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </SiteShell>
  );
}
