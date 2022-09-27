import {Stack,Typography,Divider} from '@mui/material'
import {useSelector} from 'react-redux'


export default function HourlyForecast(props:any) {
  const inputData=useSelector((state:any)=>state.WeatherReducer)
  
  /* Converting 24hrs to 12hrs format */

let signature='°C'
 
    if(props.temp=='Celsius'){
      signature='°C'
    }else{ 
      signature='°F'
    }


  let timeString='00:00 AM';
  if(!inputData.loading&&!inputData.errorMsg){
    timeString=inputData.weatherData.location.localtime.slice(11)
    if(timeString.length===4){
      timeString='0'.concat(inputData.weatherData.location.localtime.slice(11))
    }
    if(!timeString){
      timeString='00:00 AM'
    }
  }

  const timeString12hr=(timeString:any)=>{
    let time=new Date('1970-01-01T' + timeString + 'Z')
    .toLocaleTimeString('en-US',
      {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    return time
  }
/* Global Variables */

let currentIndex=0;
let presentDay=0;
let nextDay=1;

if(!inputData.loading&&!inputData.errorMsg){
  currentIndex=+(inputData.weatherData.location.localtime.slice(11,13))
  if(!currentIndex){
    currentIndex=0
  }
}

  /* Hour 1 Session */
let hourlyTime1='12:00 AM'  
let hour1Icon='//cdn.weatherapi.com/weather/64x64/night/116.png'
let hour1Temp_c='24°C'
if(!inputData.loading&&!inputData.errorMsg){
  if(currentIndex==23){
    hourlyTime1=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11))
    hour1Icon=inputData.weatherData.forecast.forecastday[nextDay].hour[0].condition.icon
    if(props.temp=='Celsius'){
      hour1Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_c
    }else{
      hour1Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_f
    }
    if(hourlyTime1.length===4){
      hourlyTime1=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11)))
    }
  }else{
    hourlyTime1=timeString12hr(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+1].time.slice(11))
    hour1Icon=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+1].condition.icon
    if(props.temp=='Celsius'){
      hour1Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+1].temp_c
    }else{
      hour1Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+1].temp_f
    }
    if(hourlyTime1.length===4){
      hourlyTime1=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+1].time.slice(11)))
    }
  }
}



/* Hour 2 Session */
let hourlyTime2='02:00 AM';
let hour2Icson='//cdn.weatherapi.com/weather/64x64/night/119.png'
let hour2Temp_c='22°C'
if(!inputData.loading&&!inputData.errorMsg){

  if(currentIndex==22){
    hourlyTime2=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11))
    hour2Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[0].condition.icon
    if(props.temp=='Celsius'){
      hour2Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_c
    }else{
      hour2Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_f
    }
    
    if(hourlyTime2.length===4){
      hourlyTime2=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11)))
    }
  }else if(currentIndex==23){
    hourlyTime2=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11))
    hour2Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[1].condition.icon
    if(props.temp=='Celsius'){
      hour2Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_c
    }else{
      hour2Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_f
    }
  
    if(hourlyTime2.length===4){
      hourlyTime2=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11)))
    }
  }else{
    hourlyTime2=timeString12hr(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+2].time.slice(11))
    hour2Icson=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+2].condition.icon
    if(props.temp=='Celsius'){
      hour2Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+2].temp_c
    }else{
      hour2Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+2].temp_f
    }
    
    if(hourlyTime2.length===4){
      hourlyTime2=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+2].time.slice(11)))
    }
  }
}

/* Hour 3 Session */
let hourlyTime3='04:00 AM';
let hour3Icson='//cdn.weatherapi.com/weather/64x64/night/119.png'
let hour3Temp_c='25°C'
if(!inputData.loading&&!inputData.errorMsg){

  if(currentIndex==21){
    hourlyTime3=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11))
    hour3Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[0].condition.icon
    if(props.temp=='Celsius'){
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_c
    }else{
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_f
    }
    
    if(hourlyTime3.length===4){
      hourlyTime3=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11)))
    }
  }else if(currentIndex==22){
    hourlyTime3=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11))
    hour3Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[1].condition.icon
    if(props.temp=='Celsius'){
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_c
    }else{
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_f
    }
   
    if(hourlyTime3.length===4){
      hourlyTime3=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11)))
    }
  }else if(currentIndex==23){
    hourlyTime3=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11))
    hour3Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[2].condition.icon
    if(props.temp=='Celsius'){
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_c
    }else{
      hour3Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_f
    }
    
    if(hourlyTime3.length===4){
      hourlyTime3=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11)))
    }
}else{
  hourlyTime3=timeString12hr(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+3].time.slice(11))
  hour3Icson=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+3].condition.icon
  if(props.temp=='Celsius'){
    hour3Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+3].temp_c
  }else{
    hour3Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+3].temp_f
  }
    
  if(hourlyTime3.length===4){
    hourlyTime3=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+3].time.slice(11)))
  }
}
}

/* Hour 4 Session */
let hourlyTime4='06:00 AM'
let hour4Icson='//cdn.weatherapi.com/weather/64x64/night/119.png'
let hour4Temp_c='30°C'
if(!inputData.loading&&!inputData.errorMsg){
  if(currentIndex==20){
    hourlyTime4=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11))
    hour4Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[0].condition.icon
    if(props.temp=='Celsius'){
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_c
    }else{
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_f
    }
    
    if(hourlyTime4.length===4){
      hourlyTime4=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11)))
    }
  }else if(currentIndex==21){
    hourlyTime4=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11))
    hour4Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[1].condition.icon
    if(props.temp=='Celsius'){
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_c
    }else{
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_f
    }
    
    if(hourlyTime4.length===4){
      hourlyTime4=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11)))
    }
  }else if(currentIndex==22){
    hourlyTime4=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11))
    hour4Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[2].condition.icon
    if(props.temp=='Celsius'){
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_c
    }else{
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_f
    }
    
    if(hourlyTime4.length===4){
      hourlyTime4=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11)))
    }
  }else if(currentIndex==23){
    hourlyTime4=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[3].time.slice(11))
    hour4Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[3].condition.icon
    if(props.temp=='Celsius'){
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[3].temp_c
    }else{
      hour4Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[3].temp_f
    }
    
    if(hourlyTime4.length===4){
      hourlyTime4=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[3].time.slice(11)))
    }
}else{
  hourlyTime4=timeString12hr(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+4].time.slice(11))
  hour4Icson=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+4].condition.icon
  if(props.temp=='Celsius'){
    hour4Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+4].temp_c
  }else{
    hour4Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+4].temp_f
  }
    
  if(hourlyTime4.length===4){
    hourlyTime4=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+4].time.slice(11)))
  }
}
}

/* Hourly 5 Session */
let hourlyTime5='08:00 AM'
let hour5Icson='//cdn.weatherapi.com/weather/64x64/night/119.png'
let hour5Temp_c='28°C'
if(!inputData.loading&&!inputData.errorMsg){

  if(currentIndex==19){
     /* Accessing Next day 12:00AM */
    hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11))
    hour5Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[0].condition.icon
    if(props.temp=='Celsius'){
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_c
    }else{
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[0].temp_f
    }
   
    if(hourlyTime5.length===4){
      hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[0].time.slice(11)))
    }
  }else if(currentIndex==20){
    hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11))
    hour5Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[1].condition.icon
    if(props.temp=='Celsius'){
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_c
    }else{
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[1].temp_f
    }
   
    if(hourlyTime5.length===4){
      hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[1].time.slice(11)))
    }
  }else if(currentIndex==21){
    hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11))
    hour5Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[2].condition.icon
    if(props.temp=='Celsius'){
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_c
    }else{
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[2].temp_f
    }
    
    if(hourlyTime5.length===4){
      hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[2].time.slice(11)))
    }
  }else if(currentIndex==22){
    hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[3].time.slice(11))
    hour5Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[3].condition.icon
    if(props.temp=='Celsius'){
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[3].temp_c
    }else{
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[3].temp_f
    }
    
    if(hourlyTime5.length===4){
      hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[3].time.slice(11)))
    }
  }else if(currentIndex==23){
    hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[nextDay].hour[4].time.slice(11))
    hour5Icson=inputData.weatherData.forecast.forecastday[nextDay].hour[4].condition.icon
    if(props.temp=='Celsius'){
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[4].temp_c
    }else{
      hour5Temp_c=inputData.weatherData.forecast.forecastday[nextDay].hour[4].temp_f
    }
    
    if(hourlyTime5.length===4){
      hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[nextDay].hour[4].time.slice(11)))
    }
}else{
  hourlyTime5=timeString12hr(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+5].time.slice(11))
  hour5Icson=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+5].condition.icon
  if(props.temp=='Celsius'){
    hour5Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+5].temp_c
  }else{
    hour5Temp_c=inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+5].temp_f
  }
 
  if(hourlyTime5.length===4){
    hourlyTime5=timeString12hr('0'.concat(inputData.weatherData.forecast.forecastday[presentDay].hour[currentIndex+5].time.slice(11)))
  }
} 
}

  
 
  return (
    <>
    {!inputData.loading&&!inputData.errorMsg?
      <div>
    <Stack my={3}>
        <Typography variant='h5' sx={{marginBottom:'16px'}}>HOURLY FORECAST</Typography>
        <Divider/>
        <Stack direction='row' flexWrap='wrap' alignItems='center' justifyContent='space-evenly'>
        <Stack direction='column' alignItems='center' justifyContent='space-evenly' my={2}>
        <Typography variant='h6'>{hourlyTime1}</Typography>
        <img src={'https://'+hour1Icon} alt="icon" />
        <Typography variant='h6'>{hour1Temp_c}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{hourlyTime2}</Typography>
        <img src={'https://'+hour2Icson} alt="icon" />
        <Typography variant='h6'>{hour2Temp_c}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{hourlyTime3}</Typography>
        <img src={'https://'+hour3Icson} alt="icon" />
        <Typography variant='h6'>{hour3Temp_c}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{hourlyTime4}</Typography>
        <img src={'https://'+hour4Icson} alt="icon" />
        <Typography variant='h6'>{hour4Temp_c}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{hourlyTime5}</Typography>
        <img src={'https://'+hour5Icson} alt="icon" />
        <Typography variant='h6'>{hour5Temp_c}{signature}</Typography>
        </Stack>
        </Stack>
    </Stack>
    </div>:null}
    </>
  )
}
