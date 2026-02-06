import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isCommunityEnabled } from "@/lib/featureFlags";
import { LoginClient } from "./LoginClient";

export default function LoginPage() {
  if (!isCommunityEnabled()) notFound();

  return (
    <Suspense fallback={null}>
      <LoginClient />
    </Suspense>
  );
}
