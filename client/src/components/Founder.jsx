import React, { useState } from 'react'
//assets
import lebron from '../assets/lebron.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
const Founder = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
<>
    <section className='pt-12   text-center'>
    <h1 className='text-sky-600 text-4xl font-bold mx-24 leading-loose'>
        "THE HARVEST IS PLENTIFUL, BUT THE WORKERS ARE FEW. ASK THE LORD OF THE HARVEST, THEREFORE, TO SEND OUT WORKERS INTO HIS HARVEST FIELD. "
      </h1>
      <h3 className='text-sky-600 text-2xl font-bold mx-12 py-8'>LUKE 10:2</h3>
      <button className='rounded-full bg-sky-600 text-white font-medium px-3 py-2 text-xl w-36 outline-white border-none hover:drop-shadow-lg hover:translate-y-2 hover:bg-sky-400 hover:font-bold hover:cursor-pointer' type='btn'>DONATE</button>
      <hr className='h-px mt-32 mb-12 mx-44 bg-sky-600 border-0'></hr>
      <h2 className='text-4xl text-sky-600'>MEET THE FOUNDER</h2>
      <hr className='h-px mt-12 mx-44 bg-sky-600 border-0'></hr>

      <figure>
        <div className='grid grid-cols-2   '>
          <div className='col  py-12 ml-20'>
            <div className="relative w-full "></div>
            <div className=' bg-sky-400 p-4 w-64 h-24 mt-12 rounded-lg text-white flex justify-center items-center font-bold text-3xl absolute'>Lebron James</div>
            <img src={lebron} width={400} className='rounded-lg '/>
          </div>
          <div className='col text-white  grid place-content-center mr-24'>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className='grid grid-col border-4 border-sky-900 gap-4 sm:grid-cols- justify-items-center'>
          <div className='h-64 w-64 md:h-40 md:w-40 md:text-sm rounded-full text-center bg-sky-400 border border-sky-200 p-2 shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8  font-bold text-white'>Donated</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2'>
            <i className="fa-solid fa-shoe-prints text-center pt-2 md:text-md md:p-0" />
            </span>
            <div className='text-white pt-3 text-3xl font-bold md:text-base md:p-0'>{counterOn && <CountUp start={0} end={1000} delay={0}/>} +</div>
          </div>
          <div className='inline-block  rounded-full h-64 w-64 md:h-40 md:w-40 md:text-sm text-center bg-sky-400  p-2  shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white'>Raised</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2'>
            <i className="fa-solid fa-dollar-sign text-center pt-2 md:text-md md:p-0"></i>
            </span>
            <div className='text-white pt-2 text-3xl font-bold md:text-base md:p-0'>${counterOn && <CountUp start={0} end={1000} delay={0}/>}</div>
          </div>
          <a className='inline-block rounded-full h-64 w-64 md:h-40 md:w-40 md:text-sm text-center bg-sky-400 border border-sky-200 p-2 shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white '>Missions</h2>
            <span className='inline-block rounded-full text-white text-4xl pt-6 p-3 md:pt-2'>
            <i className="fa-solid fa-cross text-center pt-2 md:text-md md:p-0"></i>
            </span>
            <div className='text-white pt-3 text-3xl font-bold md:text-base md:p-0'>{counterOn && <CountUp start={0} end={1000} delay={0}/>} trips</div>
          </a>
        </div>
        </ScrollTrigger>
            <span className='text-4xl text-sky-600'><i className="fa-solid fa-quote-left float-left pb-4"></i></span>
            <div className='rounded-lg bg-sky-400 p-6'>
              <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <span className='text-4xl text-sky-600'><i className="fa-solid fa-quote-right float-right pt-4"></i></span>
          </div>
        </div>
      </figure>
    </section>
    </>
  )
}

export default Founder