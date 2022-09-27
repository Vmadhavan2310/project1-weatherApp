import {Divider, Stack} from '@mui/material'
import {useSelector} from 'react-redux'
import moment from 'moment'
import Spinner from './Spinner'
export default function LocalTime() {
  const inputData=useSelector((state:any)=>state.WeatherReducer)
 
  let timeString;
  if(!inputData.loading&&!inputData.errorMsg){
    timeString=inputData.weatherData.location.localtime.slice(11)
    if(timeString.length===4){
      timeString='0'.concat(inputData.weatherData.location.localtime.slice(11))
    } 
  }
  const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
  .toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  );

 
 
  return (
    <>
    {inputData.loading&&
    
  <div className='spinner'>
<Spinner/>
  </div>
    }
    {!inputData.loading&&!inputData.errorMsg?
    <div>
    <Stack direction='column' alignItems='center' justifyContent='center' my={5}>
        <Stack flexWrap='wrap' alignItems='center' justifyContent='center' direction='row' spacing={2}>
        <h2>{moment(inputData.weatherData.forecast.forecastday[0].date).format('dddd')},{moment(inputData.weatherData.forecast.forecastday[0].date).format('DD')} {moment(inputData.weatherData.forecast.forecastday[0].date).format('MMM')} {moment(inputData.weatherData.forecast.forecastday[0].date).format('YYYY')} |</h2> <h2>Local Time {timeString12hr}</h2>
        </Stack>
        <h2>{inputData.weatherData.location.name}, {inputData.weatherData.location.country}</h2>
    </Stack>
    </div>:null}
    </>
  )
}
