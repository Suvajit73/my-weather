import React from 'react'
import logo1 from "./image/logo.png";
export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto    grid grid-cols-9'>
      <div className='  col-span-1 '>
        <img src={logo1} alt="" />
      </div>
      <div className='  col-span-8 flex justify-end text-4xl items-center font-bold pr-5 text-blue-950'>My Weather</div>
    </div>
  )
}
