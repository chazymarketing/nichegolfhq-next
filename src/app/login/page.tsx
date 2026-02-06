import { Suspense } from "react";
import { redirect } from "next/navigation";
import { isCommunityEnabled } from "@/lib/featureFlags";
import { LoginClient } from "./LoginClient";

export default function LoginPage() {
  if (!isCommunityEnabled()) redirect("/");

  return (
    <Suspense fallback={null}>
      <LoginClient />
    </Suspense>
  );
}
