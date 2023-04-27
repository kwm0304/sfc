import React from 'react'
import StripeContainer from './StripeContainer'

export default function Test() {
  return (
    <div className='bg-sky-400 bg-opacity-30'>
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-3">
          <button className='bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl'>
            Open Modal
          </button>
        </div>
        <p className='text-lg'>

        </p>
      </div>
      <StripeContainer />
    </div>
  )
}
