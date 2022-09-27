import {Stack,Typography,Divider} from '@mui/material'
import moment from 'moment'
import {useSelector} from 'react-redux'

export default function DailyForeCast(props:any) {
  const inputData=useSelector((state:any)=>state.WeatherReducer)

  let avgTempDay1='';
  let avgTempDay2='';
  let avgTempDay3='';
  let avgTempDay4='';
  let avgTempDay5='';
let signature='°C'
  if(!inputData.loading&&!inputData.errorMsg){
    if(props.temp=='Celsius'){
      avgTempDay1=inputData.weatherData.forecast.forecastday[0].day.avgtemp_c 
      avgTempDay2=inputData.weatherData.forecast.forecastday[1].day.avgtemp_c
      avgTempDay3=inputData.weatherData.forecast.forecastday[2].day.avgtemp_c
      avgTempDay4=inputData.weatherData.forecast.forecastday[3].day.avgtemp_c
      avgTempDay5=inputData.weatherData.forecast.forecastday[4].day.avgtemp_c
       signature='°C'
    }else{
      avgTempDay1=inputData.weatherData.forecast.forecastday[0].day.avgtemp_f
      avgTempDay2=inputData.weatherData.forecast.forecastday[1].day.avgtemp_f 
      avgTempDay3=inputData.weatherData.forecast.forecastday[2].day.avgtemp_f
      avgTempDay4=inputData.weatherData.forecast.forecastday[3].day.avgtemp_f
      avgTempDay5=inputData.weatherData.forecast.forecastday[4].day.avgtemp_f
      signature='°F'
    }
}
 
  return (
    <>
    {!inputData.loading&&!inputData.errorMsg?
      <div>
    <Stack>
        <Typography variant='h5' sx={{marginBottom:'16px'}}>DAILY FORECAST</Typography>
        <Divider/>
        <Stack direction='row' flexWrap='wrap' alignItems='center' justifyContent='space-evenly'>
        <Stack direction='column' alignItems='center' justifyContent='space-evenly' my={2}>
        <Typography variant='h6'>{moment(inputData.weatherData.forecast.forecastday[0].date).format('dddd').slice(0,3)}</Typography>
        <img src={'https://'+inputData.weatherData.forecast.forecastday[0].day.condition.icon} alt="icon" />
        <Typography variant='h6'>{avgTempDay1}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{moment(inputData.weatherData.forecast.forecastday[1].date).format('dddd').slice(0,3)}</Typography>
        <img src={'https://'+inputData.weatherData.forecast.forecastday[1].day.condition.icon} alt="icon" />
        <Typography variant='h6'>{avgTempDay2}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{moment(inputData.weatherData.forecast.forecastday[2].date).format('dddd').slice(0,3)}</Typography>
        <img src={'https://'+inputData.weatherData.forecast.forecastday[2].day.condition.icon} alt="icon" />
        <Typography variant='h6'>{avgTempDay3}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{moment(inputData.weatherData.forecast.forecastday[3].date).format('dddd').slice(0,3)}</Typography>
        <img src={'https://'+inputData.weatherData.forecast.forecastday[3].day.condition.icon} alt="icon" />
        <Typography variant='h6'>{avgTempDay4}{signature}</Typography>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h6'>{moment(inputData.weatherData.forecast.forecastday[4].date).format('dddd').slice(0,3)}</Typography>
        <img src={'https://'+inputData.weatherData.forecast.forecastday[4].day.condition.icon} alt="icon" />
        <Typography variant='h6'>{avgTempDay5}{signature}</Typography>
        </Stack>
        </Stack>
    </Stack>
     </div>:null}
     </>
  )
}
