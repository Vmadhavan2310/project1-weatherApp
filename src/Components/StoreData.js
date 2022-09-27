import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchAPI } from './FetchWeather'
import {moment} from 'moment'



export default function StoreData(props) { 

  let test; 
 if(props.name){
  test=props.name
 }else{
  test='india'
 }
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchAPI(test))
    },[props.name])

   return(
    <></>
   )
}
