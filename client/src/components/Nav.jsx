import  { useState } from 'react';
import StripeContainer from './StripeContainer';

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='fixed flex items-center justify-between w-screen absolute left-0 px-6 py-8 '>
      
        <a href='/' className=''>
          <span className=' text-white font-semibold outline-none no-underline md:text-2xl xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>SOLES FOR CHRIST</span>
        </a>
        <nav>
        <section className='MOBILE_MENU flex md:hidden '>
          <div className="HAMBURGER-ICON space-y-2 hover:font-bold hover:cursor-pointer hover:font-bold" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-white'></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div className="absolute top-0 right-0 p-4" onClick={() => setIsNavOpen(false)}>
            <svg
            className='h-8 w-8 text-white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
            <li className='border-b border-white my-8 uppercase no-underline hover:text-lg'>
              <a onClick={() => setModalOpen(true)} >Donate</a>
            </li>
            <li className='border-b border-white my-8 uppercase no-underline'>
              <a href='#involved' className='no-underline'>Get Involved</a>
            </li>
            <li className='border-b border-white my-8 uppercase'>
              <a href='https://m.facebook.com/profile.php?id=100088427994089&locale2=hi_IN&_rdr'>Connect</a>
            </li>
          </ul>
          </div>
          </section>
          <ul className='DESKTOP-MENU hidden space-x-1 md:flex md:gap-0  md:items-center'>
            <li className='text-white text-2xl font-bold md:text-xl'>
              <button onClick={() => setModalOpen(true)} className='rounded-lg border-2 border-solid border-white p-2'>
                Donate
              </button>
            </li>
            <li className='text-white text-2xl font-bold  md:text-xl'>
              <button className='rounded-lg p-2'><a href='#involved'>
                Get Involved
                </a>
              </button>
            </li>
            <li className='text-white text-4xl  list-none px-2'>
            <a href='https://m.facebook.com/profile.php?id=100088427994089&locale2=hi_IN&_rdr'><i className="fa-brands fa-facebook text-white"></i></a>
          </li>  
          </ul>
        </nav>
        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100vw;
          height: 30vh;
          top: 0;
          left: 0;
          background: #0284c7;
          color: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          padding-bottom: 1em;
          font-weight: 700;
          text-decoration: none;
        }
        `}
        </style>
      <StripeContainer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}