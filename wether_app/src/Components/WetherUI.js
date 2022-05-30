import React, { useState, useEffect } from "react";
import "./CSS/WetherUI.css";

function WetherUI() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchapi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f4accb15ba2ea34332f2c5e165f43e6c`;
      const response = await fetch(URL);
      // console.log(response)
      const response_json = await response.json();
      console.log(response_json);
      setCity(response_json.main);
    };

    fetchapi();
  }, [search]);

  return (
    <div className="wether">
        <div className="user">
            <h1>Wether App</h1>
            <h2>By Vishal Chaurasia<sub>a.k.a error_at_night</sub></h2>
        </div>
        <br></br>
      <div className="input">
        <input
          type="text"
          className="inputfiled"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
      {!city ? (
        <p>Data Not Found</p>
      ) : (
        <div className="display">
          <h2 className="location">
            {search}
            {}
          </h2>
          <h1 className="data">{city.temp}°C</h1>
          <h4 className="min_max">
            Max_Temp: {city.temp_max}°C || Min_Temp: {city.temp_min}°C<br></br>
            Humidity : {city.humidity}g.kg-1 || Pressure: {city.pressure}Pa
          </h4>
        </div>
      )}
    </div>
  );
}

export default WetherUI;

// key ==  f4accb15ba2ea34332f2c5e165f43e6c
// Api   https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f4accb15ba2ea34332f2c5e165f43e6c
