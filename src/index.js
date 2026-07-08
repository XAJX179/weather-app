import "./style.css";
import { Weather } from "./weather.js";
import { Display } from "./display.js";

// getWeatherData().then((result) => console.log(result));
//
// structure of returned data:
//
// {
//     "queryCost": 1,
//     "latitude": 28.61,
//     "longitude": 77.23,
//     "resolvedAddress": "delhi",
//     "address": "delhi",
//     "timezone": "Asia/Kolkata",
//     "tzoffset": 5.5,
//     "days": [
//         {
//             "datetime": "2026-07-08",
//             "tempmax": 32.2,
//             "tempmin": 26,
//             "temp": 27.7
//         }
//     ],
//     "currentConditions": {
//         "datetime": "18:40:13",
//         "temp": 27.2
//     }
// }

Display.getForm().addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = e.target.elements.location.value;
  let location;
  if (inputValue) {
    location = inputValue;
  }

  Weather.getData(location).then((result) => {
    Display.weatherReport(result);
  });
  Display.addLoader();
});
