import { useState } from 'react'
import {  useStripe } from '@stripe/react-stripe-js'
import { fetchFromAPI } from '../helpers'

export default function PaymentForm() {
  const stripe = useStripe()
  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [address, setAddress] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const firstName = first;
    const lastName = last;
    const streetAddress = address;
    
   const response = await fetchFromAPI('payment', {
    body: { line_items: [{ price: amount, quantity: 1}], customer_email: email, customer_first_name: firstName, customer_last_name: lastName, address: streetAddress  }
   })
   const { sessionId } = response;
   
   
   
   const { error } = await stripe.redirectToCheckout({ sessionId });
   
   if (error) {
    console.log('error', error)
   }
  } 
  
  return (
    <>
  
      <form onSubmit={handleSubmit} id='payment-form'>
              <div className="grid grid-cols-6 pt-10  text-sky-600 font-semibold rounded-xl place-content-center w-3/4 mx-auto px-24 xs:px-0 xs:gap-12">
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20CNDQgz4EcSauRVxxX3dw'} onClick={() => setAmount('price_1N4UnMFmz5447qTkIea1qr9F')} />
            <label>$20</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20CNDQgz4EcSauRVxxX3dw'} onClick={() => setAmount('price_1N4UnyFmz5447qTkIacw0w9J')} />
            <label>$50</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20EQDQgz4EcSauT2PT3uiA'} onClick={() => setAmount('price_1N4UoMFmz5447qTkkPy2XXtZ')} />
            <label>$100</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center'>
            <input type='radio' name='amount' value={'price_1N20mADQgz4EcSaurCmD5qXQ'} onClick={() => setAmount('price_1N4UosFmz5447qTkesn3WLKh')} />
            <label>$200</label>
          </div>
          <div className='grid grid-cols-1 xs:justify-items-center text-center '>
            <input type='radio' name='amount'  value={'price_1N20FvDQgz4EcSauB8MZ33H4'} onClick={() => setAmount('price_1N4UpVFmz5447qTkU3c9WulB')} className=' border-2 border-solid border-sky-600 '/>
            <label>$420</label>
          </div>
          <div className='grid grid-cols-1 justify-items-center '>
            <input type='radio' name='amount'  value={'price_1N20H7DQgz4EcSauhloKyAvv'} onClick={() => setAmount('price_1N4Uq9Fmz5447qTk7TCZfP9u')} className='border-2 border-solid border-sky-600'/>
            <label>Other</label>
          </div>
        </div>
        <p className='text-sky-600 text-center'>* Highest amount is entire shipping container price</p>
        <div className="flex xs:grid xs:grid-cols-1 xs:mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 justify-items-center xs:grid xs:grid-cols-1">
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='text' value={first} onChange={(e) => setFirst(e.target.value)} placeholder='First' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>First Name</label>
        </div>
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='text' value={last} onChange={(e) => setLast(e.target.value)} placeholder='Last' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Last Name</label>
        </div>
        </div>  
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 justify-items-center xs:grid xs:grid-cols-1">

        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@email.com' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Email</label>
        </div>
        <div className='grid grid-cols-1 text-center mx-auto rounded-xl justify-items-center  '>
          <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='1234 5th St.' className='border-4 border-solid border-sky-600 rounded-full text-center w-72 h-10 active:border-2 active:border-solid active:border-sky-600'/>
          <label className='text-xl text-sky-600 font-semibold text-center py-2'>Address</label>
        </div>
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