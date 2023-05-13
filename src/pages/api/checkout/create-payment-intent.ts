import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 200,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret });

  } catch (error: any) {
    console.log(error)
    return res.status(400).json({ error: error.message });
  }

  

  }
