import { Container, Box, Paper, Stack, Grid } from '@mui/material'
import './Main.css'
import Current from './Current'
import DailyForeCast from './DailyForeCast'
import HeaderLocation from './HeaderLocation'
import HourlyForecast from './HourlyForecast'
import Input from './Input'
import LocalTime from './LocalTime'
import StoreData from './StoreData'
import LoadingBar from './LoadingBar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'




export default function Main() {
    const [loading, setLoading] = useState(true)
    const inputData = useSelector(state => state.WeatherReducer)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>


            {
                loading && !inputData.errorMsg ? <LoadingBar /> :

                    <Container maxWidth='lg' sx={{ marginTop: '80px', marginBottom: '80px', minHeight: '800px' }} className='main_container'>
                        <HeaderLocation />
                        <Input />
                        <StoreData />
                        {inputData.errorMsg && <div style={{textAlign:'center'}}>

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6119/6119820.png"
                                alt="network Error"
                                height="100vh" width='100vw'
                            />
                            <h1><span style={{ fontSize: '50px' }}>O</span>OPS!! An Error cccured while fetching the weather report</h1>
                            <h3><li>Please make sure you entered the valid location</li></h3>
                            <h3><li>Check you Internet Connection is working</li></h3>
                            <h3><li>Please refresh the page if everything is correct</li></h3>

                        </div>}
                    </Container>
            }

        </>

    )
}
