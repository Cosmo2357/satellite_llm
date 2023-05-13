import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret });
}