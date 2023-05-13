import React, { useEffect, useState } from 'react'
import { loadStripe, StripeElementsOptions, Appearance } from '@stripe/stripe-js'
import CheckoutForm2 from '@/components/CheckoutForm2'
import { Elements } from '@stripe/react-stripe-js';

type Props = {}

function Payment({ }: Props) {
  const [stripePromise, setStripePromise] = useState<any>(null)
  const [clientSecret, setClientSecret] = useState<string>('')

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!))
  }, [])

  useEffect(() => {
    fetch("/api/checkout/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance: Appearance = {
    theme:  'stripe',
  };
  const options: StripeElementsOptions = {
     clientSecret,
    appearance
  };

  return (
    <>
      <div>Payment</div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={ options }>
          <CheckoutForm2 />
        </Elements>
      )}

    </>

  )
}

export default Payment