import React, { useState } from 'react';
import Searchbar from './searchbar';
import Infobox from './infobox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState("");
    const handleSearch = (results) => {
        setWeatherInfo(results); // Update state with the search results
      };
//  passing weather info as prop so that info can be displayed in child component-infobox
    return (
        <>
            <Searchbar onSearch={handleSearch}/> 
            <Infobox info={weatherInfo} />      
        </>
    );
}
