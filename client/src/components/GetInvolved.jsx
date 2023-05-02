import { useState } from 'react'
import { formatDistance } from 'date-fns'
import StripeContainer from './StripeContainer'

export default function GetInvolved() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id='involved'>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-20 xl:mb-12 xl:mx-44 mt-12 mx-44 bg-sky-600 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-12'></hr>
      <h2 className='text-4xl text-sky-600 text-center font-bold'>GET INVOLVED</h2>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-12 xl:mx-44 bg-sky-600 xl:mb-20 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4 '></hr>
      <div className="lg:grid xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 md:gap-8  lg:grid-cols-3 xs:grid-cols-1 xs:gap-4 xs:mx-6 xl:ml:8 mb-12">
        <div className='COLUMN flex flex-col gap-4  justify-items-center w-full'>
        <div className='rounded-lg xl:h-auto border-8 border-solid  border-sky-600 text-sky-600 xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-24 xl:text-2xl  p-8 w-full'>
          <h5 className='text-center uppercase font-bold'>Drop off location</h5>
           <p className='text-center'>732 Kannapolis Parkway, Kannapolis, NC 28081 (Office of Allen and Ballard Insurance)</p> 
        </div>
        <div className='google-map  xs:grid xs:grid-cols-1 xs:justify-items-center xs:left-0 xs:p-0 xs:ml-0 md:ml-32 xl:mx-auto xl:w-5/6 my-auto'>
        <iframe className='w-full xs:left-8 xs:ml-0 xs:pl-0 xs:scale-75 md:scale-75 lg:scale-75 xl:scale-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.2113251833807!2d-80.68036822359117!3d35.42479474401709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854045545fe0e1d%3A0x4f21e1941dda756e!2s732%20Kannapolis%20Pkwy%2C%20Concord%2C%20NC%2028027!5e0!3m2!1sen!2sus!4v1682811538285!5m2!1sen!2sus" width="500" height="375" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <iframe className='scale-110 rounded-lg md:max-w-md xs:border-2 xs:w-80 xs:mx-4 xs:py-2 md:w-screen xl:py-0 md:mb-6' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.2113251833807!2d-80.68036822359119!3d35.42479474401709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854045545fe0e1d%3A0x4f21e1941dda756e!2s732%20Kannapolis%20Pkwy%2C%20Concord%2C%20NC%2028027!5e0!3m2!1sen!2sus!4v1682810090633!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div className='COLUMN rounded-lg border-8 border-solid border-sky-400 align-middle xl:h-auto text-sky-400 text-2xl xs:text-lg md:text-base  lg:text-xl xl:text-2xl xl:h-24  p-8 w-full text-center'>
          <h5 className='font-bold uppercase'>Drop off times:</h5> 
          <p className='text-center'> 9am - 5pm, Monday- Friday (excluding holidays)</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 text-center text-white align-middle justify-between xs:mt-12'>
        <div className='rounded-lg align-middle bg-sky-400  md:h-40 xl:h-32  xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl  xl:text-2xl  p-8 w-full'>
          <h5 className=' uppercase font-bold align-middle xl:mt-4 italic'>Goal</h5>
          <p className='text-center xs:visible md:invisible lg:invisible xl:invisible'>We aim to send 2000+ pairs of shoes every March and December</p> 
        </div>
        <div className='rounded-lg bg-sky-600  text-white xl:h-44 xl:h-auto  text-2xl xs:text-lg md:text-base py-auto lg:text-xl xl:text-2xl xl:h-24  p-8 w-full text-center'>
          <h5 className='font-bold uppercase xl:mt-8 italic'>where will your donation do?</h5> 
          <p className='text-center '>It costs around $1 to ship per shoe, with a whole container costing $420. All donations go towards the shipment of donations</p>
          </div>
          <div className='rounded-lg xl:h-auto  bg-sky-400  text-white xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-44 xl:text-2xl  p-8 w-full'>
          <h5 className='uppercase font-bold xl:mt-8 italic'>Unable to get to the dropbox?</h5>
          <p className='text-center '>Contact us at one of through one of the links at the top and bottom of the page and we will come to you!</p> 
        </div>
          <div className='rounded-lg bg-sky-600 text-white xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-44 xl:text-2xl  p-8 w-full'>
          <h5 className='uppercase font-bold xl:mt-8 italic'>reach</h5>
          <p className='text-center xs:visible md:invisible lg:invisible xl:invisible'>Last year, 1,600 children were able to get shoes, with a total attendance of more than 2,000 attendees</p> 
        </div>
        </div>
        <div className='COLUMN flex flex-col gap-4 pr-4 justify-between items-center align-center xs:hidden sm:hidden md:visible lg:visible xl:visible'>
        <div className='rounded-lg items-center xl:h-auto bg-sky-400  text-white xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-24 xl:text-2xl  p-8 w-full'>
           <p className='text-center '>We aim to send 2000+ pairs of shoes every March and December</p> 
        </div>
        <div className='rounded-lg bg-sky-600 border-8 border-solid border-sky-600 xl:h-auto text-white text-2xl xs:text-lg md:text-base  lg:text-xl xl:text-2xl xl:h-24  p-8 w-full text-center'>
          <p className='text-center '>It costs around $1 to ship per shoe, with a whole container costing $420. All donations go towards the shipment of donations</p>
          </div>
          <div className='rounded-lg xl:h-auto  bg-sky-400 border-8 border-solid border-sky-400 text-white xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-24 xl:text-2xl  p-8 w-full'>
          {/* <h5 className='text-center uppercase font-bold '>Unable to get to the dropbox?</h5> */}
           <p className='text-center '>Contact us at one of through one of the links at the top and bottom of the page and we will come to you!</p> 
        </div>
          <div className='rounded-lg xl:h-auto  bg-sky-600 border-8 border-solid border-sky-600 text-white xs:text-lg xs:p-4 sm:text-lg md:text-sm md:p-8 lg:text-xl xl:h-24 xl:text-2xl  p-8 w-full'>
          {/* <h5 className='text-center uppercase font-bold '>Unable to get to the dropbox?</h5> */}
           <p className='text-center '>Last year, 1,600 children were able to get shoes, with a total attendance of more than 2,000 attendees</p> 
        </div>
        </div>
        </div>
        <div className='flex flex-row w-full xl:gap-4 xs:px-4 justify-center xl:place-content-center xl:gap-8 xl:h-full xs:gap-4 xs:items-center md:gap-0 lg:grid-cols-1  md:mt-4 xs:pt-12'>
          <div className='rounded-lg h-40 w-46 xl:ml-32 xs:ml-2  md:w-48 md:h-48 bg-sky-400  border-8 border-double border-white ring-4 ring-sky-600 text-center grid place-content-center'>
          <div className="text-2xl text-white font-bold  md:text-xl xs:text-sm">{formatDistance(new Date(), new Date(2023, 6, 15))} until</div>
          <p className='text-lg text-white uppercase xs:text-base'> spring mission</p>
          </div>
          <div className='grid gap-4 xs:gap-0 xl:place-items-center xs:h-full md:grid md:place-items-center md:text-base md:ml-28 lg:grid xl:place-content-center text-center sm:text-base md:gap-4 md:ml-12  lg:text-xl xl:text-2xl xl:mx-auto  xl:align-items-middle xl:place-content-center xs:mt-4 lg:mt-0 xl:mt-0'>
          <button 
          className='rounded-lg bg-sky-600 text-white text-2xl md:text-base xs:text-lg xs:p-4  lg:text-xl xl:text-2xl md:text-base xl:h-24 xl:w-72 font-semibold p-8 text-center w-full uppercase hover:bg-white hover:border-4 hover:border-solid hover:border-sky-600 hover:text-sky-600'
          onClick={() => setModalOpen(true)}
          >
            Donate
          </button>
        </div>
          <div className='rounded-lg h-40 w-46 xl:ml-32  xs:text-sm  md:w-48 md:h-48 bg-sky-600  border-8 border-double border-white ring-4 ring-sky-400 text-center grid place-content-center'>
          <div className="text-2xl text-white font-bold xs:text-lg md:text-xl xs:text-sm">{formatDistance(new Date(), new Date(2023, 11, 22))} until</div>
          <p className='text-lg text-white uppercase xs:text-base'> winter mission</p>
          </div>
        </div>
      
      <StripeContainer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
//INFO
  //When donations are shipped: countdown timer
  //Amount of shoes donated? -> Amount needed to ship
  //How much shipping costs ~$1/shoe 
  //Shoes are sent ~10 weeks before mission