
export default function Nav() {
  return (
    <nav className='fixed w-screen absolute left-0 p-0 py-8'>
      <div className='flex justify-between px-12'>
        <a href='/' className='flex items-center no-underline'>
          <span className='text-4xl text-white font-semibold outline-none no-underline'>SOLES FOR CHRIST</span>
        </a>
        <div className=''>
          <ul className='flex gap-2 items-center'>
            <li className='text-white text-2xl font-bold'>
              <button className='rounded-lg border-2 border-solid border-white p-2'>
                Donate
              </button>
            </li>
            <li className='text-white text-2xl font-bold'>
              <button className='rounded-lg p-2'>
                Get Involved
              </button>
            </li>
            <li className='text-white text-4xl  list-none px-2'>
            <a href='https://m.facebook.com/profile.php?id=100088427994089&locale2=hi_IN&_rdr'><i className="fa-brands fa-facebook text-white"></i></a>
          </li>  
          </ul>
        </div>
      </div>
    </nav>
  )
}
