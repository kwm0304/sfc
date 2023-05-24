import { useState } from 'react'
//assets
import joe from '../assets/Joe.jpg'
import allens from '../assets/allens.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import StripeContainer from './StripeContainer';

const Founder = () => {
  const [counterOn, setCounterOn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
<>
    <section className='pt-12 xs:justify-center  text-center'>
    <h1 className='text-sky-600 uppercase lg:text-4xl xl:text-4xl font-bold mx-24 xl:leading-loose lg:leading-loose xs:mx-1 xs:text-lg  sm:mx-2 sm:text-lg md:text-3xl  md:mx-1 md:text-center md:mx-20 '>
    “‘I tell you the truth, when you did it to one of the least of these my brothers and sisters, you were doing it to me!”

      </h1>
      <h3 className='text-sky-600 text-2xl font-bold mx-12 py-8 xs:py-4 xs:text-lg md:py-6 md:text-2xl lg:text-2xl xl:text-4xl uppercase'>Matthew 25:40</h3>
      <button onClick={() => setModalOpen(true)} className='rounded-full bg-sky-600 text-white font-medium px-3 py-2 text-xl w-36 xs:w-24 md:w-40 md:text-2xl md:py-4 xs:text-lg outline-white border-none hover:drop-shadow-lg hover:translate-y-2 hover:bg-sky-400 hover:font-bold hover:cursor-pointer'>DONATE</button>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-20 xl:mb-12 xl:mx-44 bg-sky-600 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4'></hr>
      <h2 className='text-4xl text-sky-600 font-bold xs:py-4 xs:text-3xl md:text-4xl'>WHO WE ARE</h2>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-12 xl:mx-44 bg-sky-600 border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4'></hr>

      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 place-content-between gap-4">
      <div className='col text-white items-center xl:pt-40 place-content-center xs:mr-0 xs:mx-6 xl:ml-12 xs:pt-4'>
        <span className='text-4xl xl:pl-4 text-sky-600 xs:text-3xl xs:pt-3 xs:right-12  xs:mx-2'><i className="fa-solid fa-quote-left float-left pb-4"></i></span>
        <div className='rounded-lg bg-sky-400 p-6 xs:mx-6 xl:ml-12'>
          <p className='text-2xl xs:text-lg xs:font-semibold'>SOLES FOR CHRIST was formed in September of 2022 by Jonathan & Lauren Hayes, and Josiah & Francesca Allen, but the mission itself was going on LONG before that.  
          For almost a decade prior to the formation of Soles for Christ, the late Joe McCutcheon faithfully spearheaded the collection and shipment of used and like new footwear to El Salvador. <br/><br/>
          His love of the Lord, a servant’s heart, and an ultra-relational personality led him to become deeply connected with a local church in El Salvador, “Iglesia de Jesucristo Columna de Amor” (Church of Jesus Christ Pillar of Love). During his many visits to El Salvador, he saw how active the church was in outreach to poorer communities in the surrounding areas. Joe offered to help the church by collecting and shipping shoes from NC to them in order to support one of their annual outreach events “Dia del Nino” (Day of the Child). But why shoes? 
          </p>
        </div>
      </div>
      <div className="relative">
        <div></div>
      <div className="col xl:pt-40 xl:ml-40 md:pt-24 md:r-32 lg:mr-20 xs:mx-6 flex items-center ">
      <div className=' bg-sky-400 pic p-4 w-64 h-24 xl:ml-32 xs:w-40 md:w-48 md:mr-24  xs:h-16 xs:text-base  xs:left-6 xl:mr-6  rounded-lg text-white flex justify-center items-center font-bold text-3xl absolute'>Joe McCutcheon</div>
        <img src={joe} width={500} height={200} className='rounded-lg '/>
      </div>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className='pt-24'>
          <div className='flex flex-col align-content-center items-center align-center gap-4 my-auto   xs:my-6 xl:grid-cols-1 xl:justify-items-center   px-2 xs:text-base xs:mx-auto xs:pl-2 xs:gap-0  xs:justify-items-center md:pl-20 xl:ml-14 xl:mr-28 '>         
          <div className='inline-block  rounded-lg  w-1/2  md:mr-8 md:text-xl  xs:flex xs:flex-col xs:p-0 border-4 border-dashed border-sky-600 text-center bg-sky-300 p-2  shadow-xl hover:border hover:border-sky-400 hover:ring-1 hover:ring-sky-400 focus:outline-none focus:ring'>
            <h2 className='pt-8 font-bold text-white xs:pt-3 xl:text-3xl xl:pt-12 xl:pb-6'>Shoes Shipped</h2>
            <span className='inline-block rounded-full text-sky-600 text-4xl xl:text-6xl p-3 xs:m-0 xs:py-0 '>
            <i className="fa-solid fa-box-open text-center pt-2 md:text-md md:p-0 xs:pt-0 " />
            </span>
            <div className='text-white  text-3xl xl:text-2xl xs:text-xl xs:p-0 font-bold md:text-xl md:p-4 break-words mb-8'> {counterOn && <CountUp start={0} end={2000} delay={0}/>}+ Containers</div>
          </div>
        </div>
        </ScrollTrigger>
      </div>
      </div>
      <figure className='py-12 grid xl:gap-4 xs:grid xs:grid-cols-1 xs:place-content-center md:align-items-center lg:place-items-center xl:align-items-center'>
        <div className='grid grid-cols-2 items-center xs:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xs:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>

          <div className='col xs:mx-6  xl:mx-0 relative  ml-20  md:mx-32 lg:mx-8'>
            <div className=" w-full yo xs:justify-center md:ml-14">
            <div className=' bg-sky-400 pic p-4 w-64 h-24 xs:w-40 md:w-48 xs:h-16 xs:text-base  rounded-lg text-white flex justify-center items-center font-bold text-3xl absolute'>The Allen's</div>
            <img src={allens} width={400} className='rounded-lg md:w-5/6'/>
          </div>
          </div>
          
          <div className='col text-white xs:mr-8 lg:ml-12 md:mr-24 xs:mr-0 xl:mr-40 md:pl-8 xl:mr-24 xs:pt-4 xl:pt-0'>
            <div className='rounded-lg bg-sky-400 p-6 xs:mx-6 xl:mx-0 xl:mt-24 lg:mt-0  md:mt-0 lg:mt-0'>
              <p className='text-2xl xs:text-lg xs:font-semibold '>
                Firstly, good footwear is pricey and hard to come by for a lot of children growing up in the impoverished rural areas surrounding San Salvador. Being able to distribute a continuous supply of free footwear to the growing children in these communities would be a huge blessing to them! And secondly, Joe was the late owner of Camerakidz, which does a lot of photography work for local schools. Already having working relationships with the directors of these schools, he asked them for support with collecting shoes from their respective student bodies. Thankfully, many were glad to lend a helping hand. From there, the mission was off and running.<br/><br/>  
                With the help of innumerable people along the way, Joe oversaw and coordinated the collection and shipment of approximately 10,000 pairs of footwear to El Salvador. Along with the shoe mission, Joe would regularly travel to visit Iglesia de Jesucristo Columna de Amor. He always extended an invitation to anyone he encountered to join him on his travels if they were interested. On what would end up being his last visit to El Salvador in December of 2021, Jonathan Hayes and Josiah Allen joined Joe for their first trip there. The experience was so powerful to them both that they decided they wanted to continue to aid Joe any way they could in providing support to the church and people of El Salvador. <br/><br/>
                Unfortunately, in early 2022, Joe McCutcheon developed Covid and passed away on March 1st, 2022.For almost a decade prior to the formation of Soles for Christ, the late Joe McCutcheon faithfully spearheaded the collection and shipment of new and like new footwear to El Salvador.
              </p>
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