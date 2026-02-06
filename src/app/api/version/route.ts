export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    now: new Date().toISOString(),
    vercel: {
      env: process.env.VERCEL_ENV || null,
      url: process.env.VERCEL_URL || null,
      gitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
      gitCommitRef: process.env.VERCEL_GIT_COMMIT_REF || null,
      gitCommitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
      deploymentId: process.env.VERCEL_DEPLOYMENT_ID || null,
    },
  });
}
