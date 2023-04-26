import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import Modal from 'react-modal'

const PUBLIC_KEY= "pk_live_51MYxIlDQgz4EcSauWvHKyhrKkvh3S8L0CoJJoTm4bh2JKDgwshqFZtyQ3TY0xfwH4t03kspmUOmE3cvfgGO39GKs00vcRlSMdM"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({isOpen, onClose}) {
  return (
    <>
    <Modal isOpen={isOpen} onRequestClose={onClose}>
    <Elements stripe={stripeTestPromise}>
    <div className='flex justify-between'>
        <h1 className='text-sky-600 font-bold text-5xl text-center pt-8 ml-[47%] '>Donate</h1>
        <button onClick={onClose}><i className='fa-solid fa-xmark text-gray-300 text-5xl pr-4'></i></button>
        </div>
      <PaymentForm />
    </Elements>
    </Modal>
    </>
  )
}
