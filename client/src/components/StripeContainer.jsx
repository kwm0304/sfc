import   { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
import { loadStripe } from '@stripe/stripe-js'

function StripeContainer({isOpen, onClose}) {
  const [stripePromise, setStripePromise] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/config").then(async (r) => {
      const { publishableKey } = await r.json();
      console.log('PK', publishableKey)
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  const modalStyle = {
    content: {
      height: '70vh'
    }
  }
  return (
    <>
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
    <div className='flex justify-between '>
        <h1 className='text-sky-600 font-bold text-5xl text-center pt-8 ml-[47%] xs:ml-0 xs:pt-2 xs:text-3xl'>Donate</h1>
        <button onClick={onClose}><i className='fa-solid fa-xmark text-gray-300 text-5xl pr-4 xs:pr-1 xs:text-3xl'></i></button>
    </div>
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
    </Modal>
    </>
  )
}

export default StripeContainer;