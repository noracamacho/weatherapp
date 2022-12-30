// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css'


function App() {
  const [data, setData] = useState({});
  const [currentData, setCurrentData] = useState({});
  const [location, setLocation] = useState('');
  const [units, setUnits] = useState('metric'); 

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // metric
  // const changeUnits = () => {
  //   if(units === 'metric') {
  //     setUnits('imperial')
  //   } else {
  //     setUnits('metric')
  //   }
  // }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=0c5cfcfe9fc145d412e30508b4a89137`;

// +++++++++++
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log('response', response.data);
      })
      setLocation('')
    }
  }
// ++++++++++++

  // useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  // }, []);

  
  useEffect(() => {
    // const finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&units=${units}&exclude=hourly,daily&appid=${apiKey}`;
    // const finalAPIEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&exclude=hourly,daily&appid=0c5cfcfe9fc145d412e30508b4a89137`;
    const finalAPIEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=0c5cfcfe9fc145d412e30508b4a89137`;
    axios.get(finalAPIEndPoint)
      .then((response) => {
        setCurrentData(response.data);
        console.log(response.data);
      })
    }, [units]);

  // console.log('final', finalAPIEndPoint); 

  return (
    <div className='app'>
      <div className="search">
        <input value={location} 
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="buttons">
            <button onClick={() => setUnits('metric')}>°C</button>
            <button onClick={() => setUnits('imperial')}>°F</button>
         </div>
          <div className="location">
            <p>{`${currentData?.name}, ${currentData.sys?.country}`}</p>
          </div>
          <div className="temp">
            <h1>{currentData.main?.temp.toFixed()}{units === 'imperial' ? '°F' : '°C'}</h1>
            {/* <p>{currentData?.weather?.[0].icon}</p> */}
            <img src={`http://openweathermap.org/img/wn/${currentData?.weather?.[0].icon}@2x.png`} alt="" />
            {/* {currentData.main ? <h1>{currentData?.main?.temp.toFixed()}{units === 'imperial' ? '°F' : '°C'}</h1> : null} */}
            {/* <h1>{data.main?.temp}°F</h1> */}
          </div>
            <div className="despcription">
              <p>{currentData?.weather?.[0].description}</p>
              {/* {currentData.weather ? <p>{currentData?.weather[0]?.main}</p> : null} */}
              {/* <p>Clouds</p> */}
            </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {/* <p className='bold'>{currentData?.main?.feels_like.toFixed()}</p> */}
            <p className='bold'>{currentData.clouds?.all}%</p>
            {/* {currentData.main ? <p className='bold'>{currentData?.main?.feels_like.toFixed()}</p> : null} */}
            <p>Clouds</p>
          </div>
          {/* <div className="humidity"> */}
            {/* <p className='bold'>{currentData?.main?.humidity}%</p> */}
            {/* {currentData.main ? <p className='bold'>{currentData?.main?.humidity}%</p> : null} */}
            {/* <p className='bold'>20%</p> */}
            {/* <p>Humidity</p> */}
          {/* </div> */}
          <div className="humidity">
            <p className='bold'>{currentData?.main?.pressure}mb</p>
            {/* {currentData.main ? <p className='bold'>{currentData?.main?.humidity}%</p> : null} */}
            {/* <p className='bold'>20%</p> */}
            <p>Pressure</p>
          </div>
          <div className="wind">
            <p className='bold'>{currentData?.wind?.speed.toFixed()}{units === 'imperial' ? 'm/h' : 'm/s'}</p>
            {/* {currentData.main ? <p className='bold'>{currentData?.wind?.speed.toFixed()}MPH</p> : null} */}
            {/* <p className='bold'>12MPH</p> */}
            <p>Wind Speed</p>
          </div>
        </div>

        {/* {data.name != undefined && 
          <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        } */}

      </div>
    </div>
  )
}

export default App
