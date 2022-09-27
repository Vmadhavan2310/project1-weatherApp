import React, { useState } from 'react'
import {Stack,Button,Container} from '@mui/material'
import {useDispatch} from 'react-redux'
import './HeaderLocation.css'
import StoreData from './StoreData'

export default function HeaderLocation() {
   const[headerLocation,setHeader]=useState('')
    console.log(headerLocation)
    const majorLocation=[
        {
            id:1,
            title:"london"
        },
        {
            id:2,
            title:"Sydney"
        },
        {
            id:3,
            title:"Paris"
        },
        {
            id:4,
            title:'New York'
        },
        {
            id:5,
            title:'Tokyo'
        }
    ]
  return (
        <>
        <Stack direction='row' justifyContent='space-evenly' flexWrap='wrap' my={8}>
            
        {
            majorLocation.map(location=>{    
                return <Button variant='text' key={location.id} sx={{color:'black',
                fontWeight:'600',
                textDecoration:'bold',
                
            
            }} className='headerBtn' onClick={(e)=>setHeader(location.title)}>{location.title}</Button>
            })
        }
        <StoreData name={headerLocation}/>
        </Stack>
        </>
   
  )
}
