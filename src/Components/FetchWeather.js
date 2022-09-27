import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

import {useSelector} from 'react-redux'

/* const baseURL='http://api.weatherapi.com/v1/forecast.json?'
const APIKey='key=9c717bde8f5847cf80751959220409&q='
const URL=baseURL+APIKey+location+'&days=7' */
const initialState={
    loading:true,
    weatherData:[],
    errorMsg:'',
    
}



export const fetchAPI=createAsyncThunk('Weather/fetchAPI',(test)=>{
    return axios.get('https://api.weatherapi.com/v1/forecast.json?key=9c717bde8f5847cf80751959220409&q='+test+'&days=7')
    .then(res=>res.data)
    
})

  






/* http://api.weatherapi.com/v1/forecast.json?key=9c717bde8f5847cf80751959220409&q=new york&days=7  link+APIkey+'&q='+location+'&days=7'*/



const sliceData=createSlice({
    name:"Weather",
    initialState:initialState,
    extraReducers:builder=>{
        builder.addCase(fetchAPI.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchAPI.fulfilled,(state,action)=>{
            state.loading=false;
            state.weatherData=action.payload;
            state.errorMsg=''
        })
        builder.addCase(fetchAPI.rejected,(state,action)=>{
            state.loading=false;
            state.weatherData=[];
            state.errorMsg=action.error.message
        })
    }
})
 
export default sliceData.reducer