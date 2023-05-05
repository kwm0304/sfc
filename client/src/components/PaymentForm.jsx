import { useState } from 'react'
import {  useStripe } from '@stripe/react-stripe-js'
import { fetchFromAPI } from '../helpers'

export default function PaymentForm() {
  const stripe = useStripe()
  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
   const response = await fetchFromAPI('payment', {
    body: { line_items: [{ price: amount, quantity: 1}], customer_email: email  }
   })
   const { sessionId } = response;
   console.log(typeof { sessionId: sessionId })
   console.log('sessionId', {sessionId})
   
   
   const { error } = await stripe.redirectToCheckout({ sessionId });
   console.log('response', response)
   if (error) {
    console.log('error', error)
   }
  } 
  
  //records?
  const first = name.split(" ").shift()
  const last = name.split(" ").pop()
  
  //frog on a log
  console.log("amount", amount)
  console.log("email", email)
  console.log("name", name)
  console.log('first', first)
  console.log('last', last)
  
  return (
    <>
  
      <form onSubmit={handleSubmit} id='payment-form'>
              <div className="grid grid-cols-5 pt-10  text-sky-600 font-semibold rounded-xl place-content-center w-3/4 mx-auto px-24 xs:px-0 xs:gap-16">
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20CNDQgz4EcSauRVxxX3dw'} onClick={() => setAmount('price_1N20CNDQgz4EcSauRVxxX3dw')} />
            <label>$50</label>
            <p className='text-sky-400 italic'>25 Pairs</p>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20EQDQgz4EcSauT2PT3uiA'} onClick={() => setAmount('price_1N20EQDQgz4EcSauT2PT3uiA')} />
            <label>$100</label>
            <p className='text-sky-400 italic'>50 Pairs</p>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20mADQgz4EcSaurCmD5qXQ'} onClick={() => setAmount('price_1N20mADQgz4EcSaurCmD5qXQ')} />
            <label>$200</label>
            <p className='text-sky-400 italic'>100 Pairs</p>
          </div>
          <div className='grid grid-cols-1 justify-items-center '>
            <input type='radio' name='amount'  value={'price_1N20FvDQgz4EcSauB8MZ33H4'} onClick={() => setAmount('price_1N20FvDQgz4EcSauB8MZ33H4')} className='border-2 border-solid border-sky-600'/>
            <label>$420</label>
            <p className='text-sky-400 italic'>Whole Container</p>
          </div>
          <div className='grid grid-cols-1 justify-items-center '>
            <input type='radio' name='amount'  value={'price_1N20H7DQgz4EcSauhloKyAvv'} onClick={() => setAmount('price_1N20H7DQgz4EcSauhloKyAvv')} className='border-2 border-solid border-sky-600'/>
            <label>Other</label>
          </div>
          
          
        </div>
        <div className="flex xs:grid xs:grid-cols-1 xs:mt-12">
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='First Last' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Name</label>
        </div>
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@email.com' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Email</label>
        </div>
        </div>
        <div className="flex justify-center py-12">
        <button  id="submit" className='bg-sky-600 text-white rounded p-2 font-bold uppercase text-xl '>
        SUBMIT
       
      </button>
        </div>
      </form>
    </>
  )
}