import "../../style/view/WeatherView.css";

import { useState, useEffect } from "react";

function WeatherView() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [_emptyData, _setEmptyData] = useState(false);
  const [data, setData] = useState(false);

  const _ZIP_CODE = "11101";
  const _COUNTRY_CODE = "US";
  const API_KEY = "5ef94009a4802f5e6d4329ab7d7a1025";

  // Long Island City, Queens, NY 11101
  let lat = "40.7446";
  let lon = "-73.9345";

  let content = null;

  const KtoCandRound = (K) => {
    return Math.round(K - 273.15);
  }

  useEffect(() => {
    /*
    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`
    )
    .then((response) => response.json())
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });
    */

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    // handling responses
    .then((response) => response.json())
    // handling normal data state
    .then((actualData) => {
      setLoadingData(false);
      setError(false);
      setData(actualData);
    })
    // handling errors
    .catch((err) => {
      console.log(err.message);
      setLoadingData(false);
      setError(true);
    });
  }, []); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!

  if (loadingData || error) {
    content = (
      <div>
        loading: {loadingData ? "loading" : "loading complete"}
        <br />
        error: {error ? "error" : "no error"}
        <br />
      </div>
    );
  }

  if (!error && !data && !loadingData) {
    content = (
      <p>No data found!</p>
    );
  }

  if (!error && data && !loadingData) {
    content = (
      <div>
        <p>Location: {data.name}</p>
        <p>Temperature: {KtoCandRound(data.main.temp)}°C</p>
        <p>Min Temperature: {KtoCandRound(data.main.temp_min)}°C</p>
        <p>Max Temperature: {KtoCandRound(data.main.temp_max)}°C</p>
        <p>Description: {data.weather[0].description}</p>
        <p>Wind Speed: {data.wind.speed} miles/hour</p>
        <p>Wind Degree: {data.wind.deg}°</p>
      </div>
    );
  }

  return (
    <>
      <div className="weather-main">
        {content}
      </div>
    </>
  );
}

export default WeatherView;
