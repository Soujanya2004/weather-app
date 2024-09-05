import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../src/searchbar.css';

export default function SearchBar({ onSearch }) {  //recieving of data
  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "c698b259176efd1377cafea65e651074";

  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      const url = `${api_url}?q=${city}&appid=${api_key}&units=metric`;
      const response = await fetch(url);
      const jsonResponse = await response.json();

      const results = {
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        realTemp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        name: jsonResponse.name,
       
      };
      console.log(jsonResponse);
      onSearch(results); // giving back data---- Pass the results object to the parent component (onSearch is a function)
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (city.trim()) {
      fetchWeather();
      setCity("");
    }
  };

  return (
    <div className='searchbox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
