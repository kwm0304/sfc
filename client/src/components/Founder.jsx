import { useState } from 'react'
//assets
import joe from '../assets/Joe.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import StripeContainer from './StripeContainer';

const Founder = () => {
  const [counterOn, setCounterOn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
<>
    <section className='pt-12 xs:justify-center  text-center'>
    <h1 className='text-sky-600 lg:text-4xl xl:text-4xl font-bold mx-24 xl:leading-loose lg:leading-loose xs:mx-1 xs:text-lg  sm:mx-2 sm:text-lg md:text-3xl  md:mx-1 md:text-center md:mx-20 '>
        "THE HARVEST IS PLENTIFUL, BUT THE WORKERS ARE FEW. ASK THE LORD OF THE HARVEST, THEREFORE, TO SEND OUT WORKERS INTO HIS HARVEST FIELD."
      </h1>
      <h3 className='text-sky-600 text-2xl font-bold mx-12 py-8 xs:py-4 xs:text-lg md:py-6 md:text-2xl lg:text-2xl xl:text-4xl'>LUKE 10:2</h3>
      <button onClick={() => setModalOpen(true)} className='rounded-full bg-sky-600 text-white font-medium px-3 py-2 text-xl w-36 xs:w-24 md:w-40 md:text-2xl md:py-4 xs:text-lg outline-white border-none hover:drop-shadow-lg hover:translate-y-2 hover:bg-sky-400 hover:font-bold hover:cursor-pointer'>DONATE</button>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-20 xl:mb-12 xl:mx-44 bg-sky-600 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4'></hr>
      <h2 className='text-4xl text-sky-600 font-bold xs:py-4 xs:text-3xl md:text-4xl'>WHO WE ARE</h2>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-12 xl:mx-44 bg-sky-600 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4'></hr>

      <figure className='py-12 grid xl:gap-4 xs:grid xs:grid-cols-1 xs:place-content-center md:align-items-center lg:place-items-center xl:align-items-center'>
        <div className='grid grid-cols-2  xs:grid-cols-1 xs:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>

          <div className='col xs:mx-6 xl:mx-0 relative p ml-20 md:pt-20 md:mx-32 lg:mx-8'>
            <div className=" w-full yo xs:justify-center md:ml-14">
            <div className=' bg-sky-400 pic p-4 w-64 h-24 xs:w-40 md:w-48 xs:h-16 xs:text-base  rounded-lg text-white flex justify-center items-center font-bold text-3xl absolute'>Joe McCutcheon</div>
            <img src={joe} width={650} className='rounded-lg md:w-5/6'/>
          </div>
          </div>

          <div className='col text-white  xl:pt-36 place-content-center xs:mr-0 xl:mr-40 mr-24 xs:pt-4'>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className='grid grid-col gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:text-base xs:mx-auto xs:pl-2 xs:gap-0 xs:grid-cols-3 xs:justify-items-between md:pl-20 xl:pl-0 w-screen xl:w-full'>
          
          <div className='inline-block  rounded-full h-64 w-64 md:h-40 xs:w-32 xs:h-32 md:w-40 md:text-xl s:w-32 xs:flex xs:flex-col xs:p-0 xs:h-32 text-center bg-sky-400 p-2  shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white xs:pt-3'>Donated</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2 xs:m-0 xs:py-0'>
            <i className="fa-solid fa-dollar-sign text-center pt-2 md:text-md md:p-0 xs:pt-0" />
            </span>
            <div className='text-white pt-2 text-3xl xs:text-xl xs:p-0 font-bold md:text-xl md:p-4 '>{counterOn && <CountUp start={0} end={1000} delay={0}/>} +</div>
          </div>

          <div className='inline-block  rounded-full h-64 w-64 md:h-40 xs:w-32 xs:h-32 md:w-40 md:text-xl s:w-32 xs:flex xs:flex-col xs:p-0 xs:h-32 text-center bg-sky-400 p-2  shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white xs:pt-3'>Raised</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2 xs:m-0 xs:py-0'>
            <i className="fa-solid fa-dollar-sign text-center pt-2 md:text-md md:p-0 xs:pt-0"></i>
            </span>
            <div className='text-white pt-2 text-3xl xs:text-xl font-bold md:text-xl xs:p-0 md:p-4'>${counterOn && <CountUp start={0} end={1000} delay={0}/>}</div>
          </div>

          <div className='inline-block  rounded-full h-64 w-64 md:h-40 xs:w-32 xs:h-32 md:w-40 md:text-xl s:w-32 xs:flex xs:flex-col xs:p-0 xs:h-32 text-center bg-sky-400 p-2  shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white xs:pt-3'>Missions</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2 xs:m-0 xs:py-0'>
            <i className="fa-solid fa-dollar-sign text-center pt-2 md:text-md md:p-0 xs:pt-0 xs:m-0"></i>
            </span>
            <div className='text-white pt-2 text-3xl xs:text-xl font-bold md:text-xl xs:p-0 md:p-4'>{counterOn && <CountUp start={0} end={1000} delay={0}/>} trips</div>
          </div>
        </div>
        </ScrollTrigger>
            <span className='text-4xl text-sky-600 xs:text-3xl xs:pt-3 xs:mx-2'><i className="fa-solid fa-quote-left float-left pb-4"></i></span>
            <div className='rounded-lg bg-sky-400 p-6 xs:mx-6 xl:mx-0'>
              <p className='text-2xl xs:text-lg xs:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <span className='text-4xl text-sky-600 xs:text-3xl xs:pb-3 xs:mx-2 xl:mx-0'><i className="fa-solid fa-quote-right float-right pt-4"></i></span>
          </div>
        </div>
      </figure>
      <StripeContainer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
    </>
  )
}

export default Founder