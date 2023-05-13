import { useEffect, useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { PaymentElement } from "@stripe/react-stripe-js"
import { redirect } from "next/dist/server/api-utils"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setIsProcessing(true)
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success`,
      },
      redirect: "if_required"
    })

    if (error) {
      setIsProcessing(false)
      error.message && setMessage(error.message)
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Success! Your payment is confirmed.")
    } else {
      setMessage("Something went wrong")
    }

    setIsProcessing(false)
  }


  const paymentElementOptions = {
    
  };



  return (
    <>
    <div className={`container  width-4/12  mx-auto`}>
      <form  id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement  id="payment-element" options={paymentElementOptions} />
        <button disabled={isProcessing} id='submit' className={'btn bg-black text-white h-10 rounded w-3/12  m-12'}>
          <span id='button-text'>
            {isProcessing ? ("Processing...") : ("Pay now")}
          </span>
        </button>
      </form>
      </div>
    </>
  )
}
