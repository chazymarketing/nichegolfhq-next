import { Suspense } from "react";
import { redirect } from "next/navigation";
import { isCommunityEnabled } from "@/lib/featureFlags";
import { CallbackClient } from "./CallbackClient";

export default function AuthCallbackPage() {
  if (!isCommunityEnabled()) redirect("/");

  return (
    <Suspense fallback={null}>
      <CallbackClient />
    </Suspense>
  );
}
