// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import backgroundImages from "./assets/data/backgroundImages";
// import countryCode from "./assets/data/countryCode";
// import "weather-icons/css/weather-icons.css";
// import { Spinner } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const idKey = "0c5cfcfe9fc145d412e30508b4a89137";

// function App() {
//   const [data, setData] = useState({});
//   const [units, setUnits] = useState("metric");
//   const [icon, setIcon] = useState();
//   const [temp, setTemp] = useState(0);
//   const [tempFeelsLike, setTempFeelsLike] = useState(0);
//   const [currentDate, setCurrentDate] = useState(0);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       let lat = pos.coords.latitude;
//       let lon = pos.coords.longitude;

//       axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idKey}&units=${units}`
//         )
//         .then((response) => setData(response.data))
//         .then(console.log(data))
//         .catch((error) => console.log("error", error));
//     });
//   }, []);

//   useEffect(() => {
//     if (data) {
//       console.log(data);
//       setIcon(data?.weather?.[0].icon);
//       setTemp(data.main?.temp.toFixed(0));
//       setTempFeelsLike(data?.main?.feels_like.toFixed(0));
//       setCurrentDate(new Date(data.dt * 1000).toLocaleString('en-us', {  weekday: 'long', year: "numeric", month: "long", day: "numeric" }));
      // createDate()
  //   }
  // }, [data]);

  // Date
  // function createDate() {
  //   let day = new Date(data.dt * 1000).toLocaleString('en-us', {  weekday: 'long', year: "numeric", month: "long", day: "numeric" });
  //   setCurrentDate(day);
  // }

  // °C to °F
  // function changeUnits() {
  //   let currentTemp;
  //   let feelsLikeTemp;
  //   if (units === "metric") {
  //     currentTemp = (temp * 9) / 5 + 32;
  //     feelsLikeTemp = (tempFeelsLike * 9) / 5 + 32;
  //     setTemp(currentTemp.toFixed());
  //     setTempFeelsLike(feelsLikeTemp.toFixed());
  //     setUnits("imperial");
  //   } else {
  //     currentTemp = (temp - 32) * (5 / 9);
  //     feelsLikeTemp = (tempFeelsLike - 32) * (5 / 9);
  //     setTemp(currentTemp.toFixed());
  //     setTempFeelsLike(feelsLikeTemp.toFixed());
  //     setUnits("metric");
  //   }
  // }

  // return (
  //   <>
  //     {!icon ? (
  //       <div className="app__spinner" style={{ backgroundColor: "#eff4f8", alignContent: 'center' }}>
  //         <Spinner type="grow" color="info" style={{width: '4rem', height: '4rem'}}/>
  //       </div>
  //     ) : (
  //       <div
  //         className="app"
  //         style={{
  //           backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.45), rgba(30, 30, 30, 0.45)), url(${backgroundImages[icon]})`,
  //           backgroundPosition: "center",
  //           backgroundSize: "cover",
  //           backgroundRepeat: "no-repeat",
  //         }}
  //       >
  //         <div className="container">
  //           <div className="top">
  //             <div className="buttons__container">
  //               <button onClick={changeUnits}>
  //                 {units === "imperial" ? "°C" : "°F"}
  //               </button>
  //             </div>
  //             <div className="location">
  //               <p>{`${data?.name}, ${countryCode[data.sys?.country]}`}</p>
                {/* {icon && (
                  <p>{`${data?.name}, ${countryCode[data.sys?.country]}`}</p>
                )} */}
              // </div>
              // <div className="date">
              //   <p>{currentDate}</p>
              //   {/* {icon && (
              //     <p>{currentDate}</p>
              //   )} */}
              // </div>
              // <div className="temp">
              //   <h1>
              //       {temp}
              //       {units === "imperial" ? "°F" : "°C"}
              //     </h1>
                {/* {icon && (
                  <h1>
                    {temp}
                    {units === "imperial" ? "°F" : "°C"}
                  </h1>
                )} */}
                // <img
                //     className="iconImage"
                //     src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                //     alt="weather icon"
                //   />
                {/* {icon && (
                  <img
                    className="iconImage"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="weather icon"
                  />
                )} */}
//               </div>
//               <div className="despcription">
//                 <p>{data?.weather?.[0].description}</p>
//               </div>
//             </div>
//             <div className="bottom">
//               <div className="feels">
//                 <i className="wi wi-thermometer-exterior"></i>
//                 <p className="bold">
//                   {tempFeelsLike}
//                   {units === "imperial" ? "°F" : "°C"}
//                 </p>
//                 <p>Feels</p>
//               </div>
//               <div className="clouds">
//                 <i className="wi wi-cloud"></i>
//                 <p className="bold">{data.clouds?.all}%</p>
//                 <p>Clouds</p>
//               </div>
//               <div className="humidity">
//                 <i className="wi wi-sprinkle"></i>
//                 <p className="bold">{data?.main?.humidity}%</p>
//                 <p>Humidity</p>
//               </div>
//               <div className="wind">
//                 <i
//                   className="wi wi-strong-wind"
//                   style={{ fontWeight: "bold" }}
//                 ></i>
//                 <p className="bold">{data?.wind?.speed.toFixed()}m/s</p>
//                 <p>Wind Speed</p>
//               </div>
//             </div>
//           </div>
//           <div className="footer">
//             <p>Built by <a href="https://www.linkedin.com/in/noraelisacamacho/" target="_blank">Nora Camacho</a> for <a href="https://www.academlo.com" target="_blank">Academlo</a> Bootcamp:</p>
//             <p>Programación Web Full-Stack y Ciencias de Computación</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
