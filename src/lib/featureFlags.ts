export function isCommunityEnabled(): boolean {
  // Default OFF unless explicitly enabled.
  const v = process.env.COMMUNITY_ENABLED;
  if (!v) return false;
  return v === "1" || v.toLowerCase() === "true" || v.toLowerCase() === "yes";
}
