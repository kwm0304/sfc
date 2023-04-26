import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useState } from 'react'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    if (!error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post("https://localhost:4000/payment", {
          amount: 1000,
          id
        })
        if (response.data.success) {
          console.log("Successful payment")
          setSuccess(true)
        }
      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <>
    {!success ?
      <form onSubmit={handleSubmit} className=''>
        
        <div className='border-2 border-solid border-sky-400 py-8 my-8 rounded-xl w-3/4 mx-auto'>
        <div className="grid grid-cols-6 pt-10   rounded-xl place-content-center w-3/4 mx-auto px-24">
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' />
            <label>$5</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount'/>
            <label>$10</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount'/>
            <label>$20</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center '>
            <input type='radio' name='amount' className='border-2 border-solid border-sky-600'/>
            <label>$50</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' />
            <label>$100</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center py-8'>
          <input type='number' placeholder='75' name='amount' className='border-4 border-solid border-sky-600 rounded-full w-28  h-10 text-center'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2' >Other</label>
        </div>
        </div>
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  w-2/3'>
          <input type='email' placeholder='email@email.com' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Email</label>
        </div>
        <div className='my-12 border-solid border-4 border-sky-600 rounded-full mx-12 px-8 w-2/3 mx-auto'>
        <CardElement options={CARD_OPTIONS} className='h-10 my-2 pt-2'/>
        </div>
        <div className="flex justify-center">
        <button className='bg-sky-600 text-white rounded-full font-semibold py-2 px-4'>Submit</button>
        </div>
        </div>
      </form>
    :
    <div>yup</div>
    } 
    </>
  )
}
