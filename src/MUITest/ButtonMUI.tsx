import axios from 'axios'
import { useEffect, useState } from "react";
import {TextField,Button} from '@mui/material'
import  '../logo.svg'
import './Child.css'

import { Stack } from "@mui/system";

import Parent from './Parent'
export default function ButtonMUI() {
    const[place,setPlace]=useState('')
  const[test,setTest]=useState(false)
  const [data, setData] = useState<any>([]);
  const[location,setLocation]=useState('Delhi')
  const[error,setError]=useState<any>('')
  const link="http://api.weatherapi.com/v1/forecast.json?"
  const APIkey="key=9c717bde8f5847cf80751959220409"
 

  
  useEffect(() => {      axios
      .get(link+APIkey+'&q='+location+'&days=7')
      .then((res:any) => setData(res.data))
      .catch((err:any) => setError(err));
    setTimeout(() => {
      setTest(true)
      
      
    }, 2000);
    if(place){
      setLocation(place)
      setTest(!test)
    }
    
  },[location]);
  
  const changePlace=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPlace(event.target.value)  
  }

  const locationChange=()=>{
    setLocation(place)
    setPlace('')
    setTest(false)
  }

  console.log(error)
  
  return (
    <>
    <Stack className="weatherContainer" spacing={2} display='block' sx={{heigth:'100vh'}}>
      <Stack display='inline' sx={{height:'40px'}}>
    <TextField variant="outlined" type='text' value={place} onChange={changePlace} placeholder='eg:- london' color='secondary' label='Enter the Place'
      size="small"
    />
    <button  onClick={locationChange}>Search</button>
    
    </Stack>
      {
        test?<Stack className="App">
      
        <h1>Climate in {location} is now {data.current.temp_c}<sup className="degree">°C</sup><img src="https://cdn.weatherapi.com/weather/64x64/night/116.png"/></h1>
        <h1>{location} time: {data.location.localtime}</h1>
        <h1>Last Updated time: {data.current.last_updated}</h1>
        {
          data.location.region?<h1>Region - {data.location.region}</h1>:<h1>Region - {data.location.tz_id}</h1>
        }
        <h1>Humidity - {data.current.humidity}!</h1>
        <h1>Feels like - {data.current.feelslike_c}</h1>
        <h1>Wind KPH - {data.current.wind_kph}</h1>
        
     
      </Stack>:<Parent/>
      }
    </Stack>
    
    </>
  );
}
