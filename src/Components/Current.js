import {Stack,Typography,Grid} from '@mui/material'
import { WiThermometer ,WiHumidity,WiStrongWind,WiDaySunny,WiSunset,WiDirectionUp,WiDirectionDown} from "weather-icons-react";
import {useSelector} from 'react-redux'
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Current(props) {
 const inputData=useSelector(state=>state.WeatherReducer)

let tempc='';
let signature='°C'
let feelsLike=''
let high=''
let low=''
if(!inputData.loading&&!inputData.errorMsg){
    if(props.temp=='Celsius'){
        tempc=inputData.weatherData.current.temp_c
        signature='°C'
        feelsLike=inputData.weatherData.current.feelslike_c
        high=inputData.weatherData.forecast.forecastday[0].day.maxtemp_c
        low=inputData.weatherData.forecast.forecastday[0].day.mintemp_c
    }else{
        tempc=inputData.weatherData.current.temp_f
        signature='°F'
        feelsLike=inputData.weatherData.current.feelslike_f
        high=inputData.weatherData.forecast.forecastday[0].day.maxtemp_f
        low=inputData.weatherData.forecast.forecastday[0].day.mintemp_f
    }
}


  return (
    <>
    {!inputData.loading&&!inputData.errorMsg?
    <div>
        <ThemeProvider theme={theme}>
    <Grid container>
        <Grid item xs={12} sx={{textAlign:'center'}}>
        <Typography variant='h4'>{inputData.weatherData.current.condition.text}</Typography>
        </Grid>
    </Grid>
    <Stack  flexWrap='wrap' direction='row' justifyContent='space-evenly' alignItems='center'>
        <img src={'https://'+inputData.weatherData.current.condition.icon} alt="icon" />
        
        <Typography variant='h5'>Temperature {tempc}{signature}</Typography>
        
        <Stack direction='column' alignItems='center' flexWrap='wrap' justifyContent='center' my={1}>
            <Typography variant='h6'><WiThermometer size={27} color='#000' style={{position:'relative',top:'5'}}/>Real fell:{feelsLike}{signature}</Typography>
            <Typography variant='h6'><WiHumidity size={27} color='#000' style={{position:'relative',top:'5'}}/>Humidity:{inputData.weatherData.current.humidity}%</Typography>
            <Typography variant='h6'><WiStrongWind size={27} color='#000' style={{position:'relative',top:'5'}}/>Wind:{inputData.weatherData.current.wind_kph} km/h</Typography>
        </Stack>

    </Stack>
    <Stack direction='row' justifyContent='space-evenly' flexWrap='wrap' alignItems='center' my={2}>
    <Typography variant='h6'><WiDaySunny size={27} color='#000' style={{position:'relative',top:'5'}}/>Rise:{inputData.weatherData.forecast.forecastday[0].astro.sunrise}</Typography>
    <span>|</span>
    <Typography variant='h6'><WiSunset size={27} color='#000' style={{position:'relative',top:'5'}}/>set:{inputData.weatherData.forecast.forecastday[0].astro.sunset}</Typography>
    <span>|</span>
    <Typography variant='h6'><WiDirectionUp size={27} color='#000' style={{position:'relative',top:'5'}}/>High:{high}{signature}</Typography>
    <span>|</span>
    <Typography variant='h6'><WiDirectionUp size={27} color='#000' style={{position:'relative',top:'5', transform: 'rotate(180deg)'}}/>Low:{low}{signature}</Typography>
    </Stack>
    </ThemeProvider >
    </div>:null}

    
    </>
  )
}
