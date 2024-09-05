import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../src/infobox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Infobox({ info }) {   //flow of weatherinfo throughout 2 child components
  const sun_url="https://media.istockphoto.com/id/815712236/photo/golden-wheat-field-under-beautiful-sunset-sky.jpg?s=1024x1024&w=is&k=20&c=FO40BqAEnLRzzdFQZRsvToYYv_o8evKdTBYmNcQ4O8w=";
  const rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
  const wind_url="https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
  let imageUrl;

  if (info.humidity > 80) {
    imageUrl = rain_url;
  } else if (info.maxTemp > 24) {
    imageUrl = wind_url;
  } else {
    imageUrl = sun_url;
  }
  
  return (
    
    <div>
      <Card sx={{ maxWidth: 500 }} className='box'>
        <CardActionArea>
          <CardMedia className='img'
            component="img"
            height="140"
            image={imageUrl}
            alt="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}  {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 20 ? <AcUnitIcon/> : <WbSunnyIcon/>)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Weather: {info.weather}</p>
              <p>Temperature: {info.realTemp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temperature: {info.minTemp}°C</p>
              <p>Max Temperature: {info.maxTemp}°C</p>
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
