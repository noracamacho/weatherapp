import React, { useState, useEffect } from 'react'
import axios from 'axios'
import img04d from './images/04d.jpg'
import backgroundImages from './helpers/backgroundImages'
import './App.css'

const idKey = '0c5cfcfe9fc145d412e30508b4a89137';
// let imageBack = (`${data?.weather?.[0].description}${icon}`).replace(' ', '');
// const scatteredclouds03n = new URL('./images/scatteredclouds03n.jpg', import.meta.url)
// console.log(imageBack);
// document.body.style.backgroundImage = `url(${backgroundImages[icon]})`;


function App() {
  const [data, setData] = useState({});
  const [units, setUnits] = useState('metric'); 
  const [icon, setIcon] = useState('');
  const [temp, setTemp] = useState(0);
  const [img, setImg] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idKey}&units=${units}`)
      .then(response => setData(response.data))
      .then(console.log(data))
      .catch(error => console.log('error', error));
    });

  }, []);

  useEffect(() => {
    if(data) {
      console.log(data);
      setIcon(data?.weather?.[0].icon);
      setTemp(data.main?.temp.toFixed());
      setImg(data?.weather?.[0].main + data?.weather?.[0].icon);
      console.log(img);
    }
  }, [data]);

  console.log(backgroundImages[icon])

   // metric
 function changeUnits() {
  let currentTemp;
    if(units === 'metric') {
      currentTemp = (temp * 9 / 5) +32;
      setTemp(currentTemp.toFixed());
      console.log('f',temp);
      setUnits('imperial');
    } else {
      currentTemp = (temp - 32) * (5/9);
      setTemp(currentTemp.toFixed());
      console.log('c', temp);
      setUnits('metric');
    }
  }

  let date = new Date();
  console.log(date.toISOString().split('T')[0])
  
  return (
    <div className='app' style={{  
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)), url(${backgroundImages[icon]})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <div className="top">
          <div className="buttons__container">
            <button onClick={changeUnits}>{units === 'imperial' ? '°C' : '°F'}</button>
         </div>
          <div className="location">
            <p>{`${data?.name}, ${data.sys?.country}`}</p>
          </div>
          <div className="temp">
            <h1>{temp}{units === 'imperial' ? '°F' : '°C'}</h1>
            {
              icon && (<img className='iconImage' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />)
            }
          </div>
            <div className="despcription">
              <p>{data?.weather?.[0].description}</p>
            </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>{data.clouds?.all}%</p>
            <p>Clouds</p>
          </div>
          <div className="humidity">
            <p className='bold'>{data?.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>{data?.wind?.speed.toFixed()}{units === 'imperial' ? 'm/h' : 'm/s'}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
