import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const monthlyPriceId = process.env.STRIPE_PRICE_MONTHLY;
const yearlyPriceId = process.env.STRIPE_PRICE_YEARLY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const plan = body.plan as "monthly" | "yearly";

    if (!plan || (plan !== "monthly" && plan !== "yearly")) {
      return new NextResponse("Invalid plan", { status: 400 });
    }

    const priceId = plan === "monthly" ? monthlyPriceId : yearlyPriceId;
    if (!priceId) {
      return new NextResponse("Price ID not configured", { status: 500 });
    }

    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/?success=1`,
      cancel_url: `${origin}/pricing?canceled=1`,
      billing_address_collection: "required",
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
