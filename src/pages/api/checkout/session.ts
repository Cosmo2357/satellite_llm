import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2022-11-15",
      });

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price:   "price_1HsokoKdOWDqZe0Pez0nhPaC",
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
if (session) { console.log("FINISHED", session); }
      if (session.url) {

        res.redirect(303, session.url);
      } else {
        throw new Error("!session.url");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}