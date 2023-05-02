import background from '../assets/main.jpg'
import Nav from './Nav'

export default function About() {
  return (
    <section className='w-screen xl:mb-24 '>
      <div className='relative text-center w-screen'>
        <Nav />
        <img src={background} className='w-screen'  />
        <h1 className='absolute text-white text-7xl w-screen top-1/2 uppercase font-bold xs:invisible lg:visible'>Soles For Christ</h1>
      </div>
    </section>
  )
}
