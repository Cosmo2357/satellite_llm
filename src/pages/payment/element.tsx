import React, {useEffect, useState} from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import  CheckoutForm from '@/components/CheckoutForm';



export default function Element() {

const stripePromise = loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {

 fetch("/api/checkout/create-payment", {
  method: "GET",
 })
  .then((res) => res.json())
  .then((data) => {
    setClientSecret(data.clientSecret);
  });
  }, [])

  const appearance : Appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#efefef',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '2px',
      borderRadius: '4px',
    }
  };

  const options: StripeElementsOptions = {
    clientSecret: clientSecret || "",
    appearance,
  
  };


  return (
    <>
    <h1>HELLO</h1>aa
    <div style={{'height': '60vh', 'width': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
<div style={{'width': '400px', 'padding': '18px'}}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}   >
            <div  >
          <CheckoutForm />
          </div>
        </Elements>
      )}
      </div>
      </div>
    </>
  )
}
