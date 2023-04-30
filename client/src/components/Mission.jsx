import { useState } from 'react'
import distributingshoes1 from '../assets/distributingshoes.jpg'
import smilinggirls from '../assets/smilinggirlsaswell.jpg'
import shoePhoto from '../assets/shoePhoto.jpg'

export default function Mission() {
  const slides = [
    {
      url: distributingshoes1,
      text: 'The ongoing mission of SOLES FOR CHRIST is to collect, package, and ship new or like new footwear to Iglesia de Jesucristo Columna de Amor in El Salvador for distribution to impoverished women and children in the surrounding rural areas. The footwear is handed out during the church’s bi-annul outreach event called “Dia del Nino”. The Dia del Nino events are held in June/July and December of each year. ',
      textTitle: 'What We Do'
    },
    {
      url: smilinggirls,
      text: 'Our current goal is to send 2,000+ pairs of shoes every March and August in order to allow for the 10-12 week transit time from North Carolina to El Salvador. The Dia del Nino event held in December of 2022 had approximately 1,600 children attend, with a total attendance of over 2,000 locals.',
      textTitle: 'Goals'
    },
    {
      url: shoePhoto,
      text: 'YOUR help is greatly needed and profoundly appreciated. We are in constant demand of new or lightly used infant- young adult shoes, sandals, slippers, boots, etc. as well as all types of adult women’s footwear. Adult men’s footwear can be used but they have the lowest priority.',
      textTitle: 'Your Impact'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  };

  const next = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
    <section className='bg-sky-600 py-2'>
    <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-20 xl:mb-12 xl:mx-44 mt-12 mx-44 bg-white border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-12'></hr>
      <h2 className='text-4xl text-white text-center font-bold'>THE MISSION</h2>
      <hr className='h-px lg:mt-12 lg:mx-44 xl:mt-12 xl:mx-44 bg-white border-0 xs:mt-12 xs:mx-4 xs:mb-2 xs:mt-4'></hr>
    <div className='max-w-[1400px] xl:h-[780px] lg:h-[700px] h-[780px] xs:h-[390px] md:h-[700px] w-full xl:mx-auto xl:place-content-center  py-12 relative group '>
      <img 
      src={`${slides[currentIndex].url}`}      
      className="w-full h-full rounded-2xl bg-center bg-cover  duration-500 px-8">
      </img>
      <div className='bg-sky-400 absolute w-2/3 bottom-14 xl:pt-12 xl:px-8 left-[18%] opacity-70 hover:opacity-100 rounded-lg items-center p-2 mb-2 pb-2 text-center text-xl absolute text-white xs:left-0 xs:h-1/3 xs:w-5/6 xs:mx-8 xs:text-clip xs:overflow-auto xs:text-base md:left-10 md:h-1/3 md:text-xl lg:left-12'>
        <h5 className='text-center py-2 md:font-semibold xl:text-2xl uppercase'>{slides[currentIndex].textTitle}</h5>
        {slides[currentIndex].text}
      </div>
      {/*arrows*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <i className="fa-solid fa-chevron-left text-4xl" onClick={prev}></i>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <i className="fa-solid fa-chevron-right text-4xl text-white" onClick={next}></i>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'>
            <i className="fa-solid fa-circle-dot text-sky-400 "></i>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  )
}
