import React from 'react'

export default function Result({weatherData,historyData,historySearch}) {

  const historyItems = historyData.map(
    (item,index) => {
      return <li onClick={() => historySearch(item)} className='text-xl cursor-pointer' key={index}>{item}</li>
    }
  )
  return (
    <div className=' grid grid-cols-4 shadow-xl mt-5 p-3 bg-slate-400 rounded-xl'>
      <div className='col-span-1 '>
        <span className='text-center block font-bold text-4xl'>history</span>
        <ul className='text-center pt-5 text-blue-950 text-2xl'>
          {historyItems}
        </ul>
      </div>
      <div className='col-span-3'>
        {
          weatherData.length !== 0
            ?
            <>
              <h2 className='text-4xl text-center font-bold'>{weatherData.name}</h2>
              <div className='flex justify-around my-2 text-2x'>
                <div className='text-2xl font-bold'>Max temp: {weatherData.main.temp_max} deg</div>
                <div className='text-2xl font-bold'>Min temp: {weatherData.main.temp_min} deg</div>
              </div>

              <div className='flex justify-around my-2 text-2xl items-center'>
                <div> <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" /></div>
                <div className=' font-bold'>{weatherData.weather[0].main}</div>
              </div>
            </>
            :
            <>
              <h3 className='text-4xl text-center font-bold p-3'>Please Enter City name</h3>
            </>
        }

      </div>
      
      
    </div>
  )
}
