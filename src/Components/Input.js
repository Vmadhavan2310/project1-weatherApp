import React, { useState } from 'react'
import {TextField,Box, Stack,Button,styled,InputAdornment,IconButton,Typography,Grid} from '@mui/material'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import './SCSS/button.css'
import StoreData from './StoreData'
import Current from './Current'
import LocalTime from './LocalTime'
import HourlyForecast from './HourlyForecast'
import DailyForeCast from './DailyForeCast'
import { Snackbar, Alert } from "@mui/material";


export default function Input() {
  const[input,setInput]=useState('')
  const[city,setCity]=useState('')
  const[temp,setTemp]=useState('Celsius')
  const [open, setOpen] = useState(false);


  const handleChange = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
   
   const updateCity=(e)=>{
    e.preventDefault()
    setCity(input)
    setInput('')
    setOpen(true)
   }
   



  return (
    <>
    <Stack direction='row' justifyContent='center' flexWrap='wrap' my={5}>
      <form onSubmit={updateCity}>
        <TextField variant='outlined' 
        type='text' 
        label='City Name' 
        size='small' 
        InputProps={{
            endAdornment:<InputAdornment position='end'>
                <IconButton>
                <SearchOutlined sx={{marginLeft:'13px'}}/>
                </IconButton>
                </InputAdornment>,
        }}
        sx={{margin:'10px'}}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        required
        autoComplete='off'
        />
        </form>
        <button className='button' type='submit' onClick={updateCity}>Search</button>
        
        <button style={{border:'none',height:'60px',backgroundColor:'lightblue',cursor:'pointer',fontWeight:"400",background:'none'}} onClick={()=>setTemp('Celsius')}>°C</button>
        <Typography variant='h4' sx={{margin:'8px'}}>|</Typography>
        <button style={{border:'none',height:'60px',backgroundColor:'lightblue',cursor:'pointer',fontWeight:"400",background:'none'}} onClick={()=>setTemp('Faren')}>°F</button>
        </Stack>
        <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={handleChange}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant='filled' severity="success">Request Submitted Successfully</Alert>
      </Snackbar>
        <StoreData name={city}/>
        <LocalTime/>
        <Current temp={temp}/>
        <HourlyForecast temp={temp}/>
        <DailyForeCast temp={temp}/>
        </>
        ) 
}
