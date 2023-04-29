import  React, { useState } from 'react'

export default function Mission() {
  const slides = [
    {
      url: 'https://s.hdnux.com/photos/10/02/17/2106329/6/1200x0.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Commodo quis imperdiet massa tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque id. Ac odio tempor orci dapibus ultrices in iaculis. Eu augue ut lectus arcu. Ullamcorper morbi tincidunt ornare massa eget egestas. Viverra orci sagittis eu volutpat odio. Tempor nec feugiat nisl pretium fusce id. Scelerisque fermentum dui faucibus in. Laoreet id donec ultrices tincidunt arcu non sodales neque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Quis vel eros donec ac odio. Augue neque gravida in fermentum et. Aliquet sagittis id consectetur purus ut faucibus. Porta non pulvinar neque laoreet suspendisse interdum consectetur.',
      textTitle: 'Slide1'
    },
    {
      url: 'https://www.familysearch.org/en/wiki/img_auth.php/thumb/c/cf/El_Salvador_Map.png/600px-El_Salvador_Map.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Commodo quis imperdiet massa tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque id. Ac odio tempor orci dapibus ultrices in iaculis. Eu augue ut lectus arcu. Ullamcorper morbi tincidunt ornare massa eget egestas. Viverra orci sagittis eu volutpat odio. Tempor nec feugiat nisl pretium fusce id. Scelerisque fermentum dui faucibus in. Laoreet id donec ultrices tincidunt arcu non sodales neque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Quis vel eros donec ac odio. Augue neque gravida in fermentum et. Aliquet sagittis id consectetur purus ut faucibus. Porta non pulvinar neque laoreet suspendisse interdum consectetur.',
      textTitle: 'Slide2'
    },
    {
      url: 'https://www.gannett-cdn.com/-mm-/2af50627e08a54ba924c070db49cc7d9956a7f02/c=0-61-600-399/local/-/media/2020/08/24/Erie/ghows-PA-200619423-633b8cb2.jpg?width=1200&disable=upscale&format=pjpg&auto=webp',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Commodo quis imperdiet massa tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque id. Ac odio tempor orci dapibus ultrices in iaculis. Eu augue ut lectus arcu. Ullamcorper morbi tincidunt ornare massa eget egestas. Viverra orci sagittis eu volutpat odio. Tempor nec feugiat nisl pretium fusce id. Scelerisque fermentum dui faucibus in. Laoreet id donec ultrices tincidunt arcu non sodales neque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Quis vel eros donec ac odio. Augue neque gravida in fermentum et. Aliquet sagittis id consectetur purus ut faucibus. Porta non pulvinar neque laoreet suspendisse interdum consectetur.',
      textTitle: 'Slide3'
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
    <div className='max-w-[1400px] xl:h-[780px] h-[780px] xs:h-[390px] md:h-[600px] w-full m-auto px-4 py-12 relative group '>
      <div 
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}      
      className="w-full h-full rounded-2xl bg-center bg-cover  duration-500 ">
      </div>
      <div className='bg-sky-400 absolute w-2/3 bottom-14 left-[18%] opacity-70 hover:opacity-100 rounded-lg p-2 mb-2 pb-2 text-center text-xl absolute text-white xs:left-0 xs:h-1/3 xs:w-5/6 xs:mx-8 xs:text-clip xs:overflow-auto xs:text-base md:left-10 md:h-1/3 md:text-xl lg:left-12'>
        <h5 className='text-center py-2 md:font-semibold'>{slides[currentIndex].textTitle}</h5>
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
