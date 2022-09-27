import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from '../FetchWeather'

const Store=configureStore({
    reducer:{
        WeatherReducer:sliceReducer
    }
})

export default Store;