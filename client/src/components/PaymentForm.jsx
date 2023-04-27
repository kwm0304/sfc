import { useState } from 'react'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentElement } from '@stripe/react-stripe-js'

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#0284C7",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#0284C7",
// 			color: "#38BDF8"
// 		}
// 	}
// }

export default function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()

  // const [success, setSuccess] = useState(false)
  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState(null)

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      //TODO: disable form submission until stripe is loaded
      return
    }
    setIsProcessing(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`
      },
      redirect: "if_required"
    })
    if (error === 'card_error' || error === 'validation_error') {
      setMessage(error.message)
    }  else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage("Payment status: " + paymentIntent.status)
    } else {
      setMessage("Unexpected error")
    }
    setIsProcessing(false)
  }
  //records?
  const first = name.split(" ").shift()
  const last = name.split(" ").pop()
  const inCents = amount * 100;
  //frog on a log
  console.log("amount", amount)
  console.log("email", email)
  console.log("name", name)
  console.log('first', first)
  console.log('last', last)
  console.log("Amount in cents", inCents)
  return (
    <>
    
      <form onSubmit={handleSubmit} id='payment-form'>
              <div className="grid grid-cols-6 pt-10   rounded-xl place-content-center w-3/4 mx-auto px-24">
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={amount} onClick={() => setAmount(5)}/>
            <label>$5</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={amount} onClick={() => setAmount(10)}/>
            <label>$10</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={amount} onClick={() => setAmount(20)}/>
            <label>$20</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center '>
            <input type='radio' name='amount'  value={amount} onClick={() => setAmount(50)} className='border-2 border-solid border-sky-600'/>
            <label>$50</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={amount} onClick={() => setAmount(100)}/>
            <label>$100</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center py-8'>
          <input type='number' placeholder='75' value={amount} onChange={(e) => setAmount((e.target.value))} name='amount' className='border-4 border-solid border-sky-600 rounded-full w-28  h-10 text-center'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2' >Other</label>
        </div>
        </div>
        <div className="flex">
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='First Last' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Name</label>
        </div>
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@email.com' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Email</label>
        </div>
        </div>
        <PaymentElement id='payment-element' />
        <div className="flex justify-center py-12">
        <button disabled={isProcessing || !stripe || !elements} id="submit" className='bg-sky-600 text-white rounded p-2 font-bold uppercase text-xl'>
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
        </div>
      </form>
    </>
  )
}
