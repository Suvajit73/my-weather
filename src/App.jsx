import {useState } from "react";
import Result from "./Result";
import Search from "./Search";
import axios from "axios";
import Experts from "./Experts";


function App() {
  const [search,setSerach] = useState(" ");
  const [weather,setWeather] = useState([]);
  const [history,setHistory] = useState([]);

const changeSearch = (value) => {
    setSerach(value);
}


const searchWeatherHandler = () => {

  if(search !== ""){
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f9cd2466de03397027650633e13d2a6&units=metric`
    )
      .then(
        (response) => {
          if(history.indexOf(search) === -1){
            setHistory(
              [
                ...history,
                search
              ]
            )
          }
            
            setWeather(response.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
  }

}

const historySearchHandler = async(data) => {
  setSerach(data)
  if(data !== ""){
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=1f9cd2466de03397027650633e13d2a6&units=metric`
    )
      .then(
        (response) => {
          if(history.indexOf(data) === -1){
            setHistory(
              [
                ...history,
                data
              ]
            )
          }
            
            setWeather(response.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )

  }
 

}

  return (

    <div className="bg-blue-950 h-screen p-8">
      <h3 className="text-center pb-7 text-3xl font-bold text-white ">Welcome to Suvajit World</h3>
      <div className="max-w-[1240px] mx-auto mt-2 p-3 bg-blue-300 rounded-md">
      
        <Experts/>
        <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
        <Result weatherData={weather} historyData={history} historySearch={historySearchHandler}/>
      </div>
      
    </div>
    
  );
}

export default App;
