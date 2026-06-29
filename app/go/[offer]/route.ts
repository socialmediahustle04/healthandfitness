import { NextResponse } from "next/server";
import { site } from "@/lib/design-tokens";

// Affiliate hop links are never hardcoded. Each offer maps to an environment
// variable so links can be rotated without code changes and no secret is committed.
function offerUrl(offer: string): string | undefined {
  switch (offer) {
    case "venus-factor":
      return process.env.AFFILIATE_VENUS_FACTOR_URL;
    case "java-burn":
      return process.env.AFFILIATE_JAVA_BURN_URL;
    case "liv-pure":
      return process.env.AFFILIATE_LIV_PURE_URL;
    default:
      return undefined;
  }
}

// Dynamic so the redirect is resolved per request and reads env at runtime.
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ offer: string }> }
) {
  const { offer } = await params;
  const target = offerUrl(offer);

  // If the offer is unknown or its env var is unset, fall back to an on-site
  // page instead of erroring, so the build and runtime stay safe.
  const fallback = `${site.url}/guides/weight-loss-supplements-guide`;
  const destination = target && target.trim().length > 0 ? target : fallback;

  return NextResponse.redirect(destination, 302);
}
