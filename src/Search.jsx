import React, { useRef } from 'react'

export default function Search(props) {
    const serachInput = useRef();
  return (
    <div className='flex shadow-xl'>
      <input type='search' value={props.searchData} className='border border-black w-full text-slate-500 p-4 text-2xl rounded-lg'
      onChange={() => props.eventHandler(serachInput.current.value)} ref={serachInput}/>
      <button onClick={props.searchWeather} className='bg-cyan-800 text-white font-bold text-2xl p-2 rounded-lg'>Search</button>
    </div>
  )
}
