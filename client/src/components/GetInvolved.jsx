import { useState } from 'react'
import { formatDistance } from 'date-fns'
import StripeContainer from './StripeContainer'

export default function GetInvolved() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id='involved'>
      <hr className='h-px mt-24 mb-12 mx-44 bg-sky-600 border-0'></hr>
      <h2 className='text-4xl text-sky-600 text-center font-bold'>GET INVOLVED</h2>
      <hr className='h-px my-12 mx-44 bg-sky-600 border-0'></hr>
      <div className="grid grid-cols-3 justify-items-center mb-12">
        <div>
          <iframe className='border border-8 border-sky-600 rounded-lg md:max-w-md ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.7311708315237!2d-80.67542842363561!3d35.387122972683805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885405293de8f13d%3A0xdd8af2a23ce360ce!2s5774%20Monticello%20Dr%20NW%2C%20Concord%2C%20NC%2028027!5e0!3m2!1sen!2sus!4v1681687073835!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='grid gap-4 place-items-center'>
          <div className='rounded-lg bg-sky-600 text-white text-md font-semibold p-8 w-full'>
            Click on the directions link in the map to find the nearest donation box
          </div>
          <div className='rounded-lg bg-sky-400 text-white text-md font-semibold p-8 w-full text-center'>
            New or lightly worn shoes are highly preferred
          </div>
          <button 
          className='rounded-lg bg-sky-600 text-white text-2xl font-semibold p-8 text-center w-full uppercase hover:bg-white hover:border-4 hover:border-solid hover:border-sky-600 hover:text-sky-600'
          onClick={() => setModalOpen(true)}
          >
            Donate
          </button>
        </div>
        <div className='grid gap-32'>
          <div className='rounded-lg h-40 w-46 bg-sky-400 p-4 border-8 border-double border-white ring-4 ring-sky-600 text-center grid place-content-center'>
          <div className="text-2xl text-white font-bold">{formatDistance(new Date(), new Date(2023, 6, 15))} until</div>
          <p className='text-lg text-white uppercase'> spring mission</p>
          </div>
          <div className='rounded-lg h-40 w-46 bg-sky-600 p-4 border-8 border-double border-white ring-4 ring-sky-600 text-center grid place-content-center'>
          <div className="text-2xl text-white font-bold">{formatDistance(new Date(), new Date(2023, 11, 22))} until</div>
          <p className='text-lg text-white uppercase'> winter mission</p>
          </div>
        </div>
      </div>
      <StripeContainer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
