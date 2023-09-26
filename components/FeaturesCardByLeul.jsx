import React from 'react'

const FeaturesCardByLeul = (props) => {
  return (
      <div className='bg-stone-200  text-[#912c2c] py-3 px-2 rounded-xl'>
          {/* icon */}
          <div className='w-full flex justify-center items-center'>
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white shadow-xl">
            <img src={props.icon} alt="" />
          </div>
          </div>
          <div className='text-center py-4'>
            <p className='text-lg font-semibold'>{ props.title}</p>
          <p className='text-sm '>{ props.description}</p>
          </div>
    </div>
  )
}

export default FeaturesCardByLeul