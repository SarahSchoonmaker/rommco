// app/api/checkout/route.ts
import { NextResponse } from "next/server";

/**
 * TEMPORARY PLACEHOLDER CHECKOUT ROUTE
 * ---------------------------------------------------
 * This allows your site to build on Vercel WITHOUT:
 * - STRIPE_SECRET_KEY
 * - STRIPE_PRICE_MONTHLY
 * - STRIPE_PRICE_YEARLY
 * - The Stripe SDK
 *
 * When you're ready, we will replace this with a real
 * Stripe Checkout session creator.
 */

export async function POST() {
  return NextResponse.json(
    {
      message: "Checkout not enabled yet.",
      error:
        "Stripe is not set up. Please email srschoonmaker@gmail.com to subscribe.",
    },
    { status: 501 }
  );
}
