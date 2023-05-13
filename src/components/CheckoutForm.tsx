import React, {useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // ここで支払い処理を実行しま
    setIsLoading(true);


  };

  return (
    <>
        <form >
      <PaymentElement  />
      <button className={'w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'}>Submit</button>
    </form>
    </>

  );
};

export default CheckoutForm;
