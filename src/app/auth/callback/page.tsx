import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isCommunityEnabled } from "@/lib/featureFlags";
import { CallbackClient } from "./CallbackClient";

export default function AuthCallbackPage() {
  if (!isCommunityEnabled()) notFound();

  return (
    <Suspense fallback={null}>
      <CallbackClient />
    </Suspense>
  );
}
