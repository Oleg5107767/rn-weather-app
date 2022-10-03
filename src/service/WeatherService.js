import React, { useState } from 'react'
import { Alert } from 'react-native'
import * as Location from 'expo-location'
import { useSelector, useDispatch } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { addUserInfo } from '../redux/locationSlice'
import { addCity } from '../redux/citySlice'

const useWeatherService = () => {
    const { loading, request, error, clearError } = useHttp()
    const dispatch = useDispatch();
    const apiBase = 'https://api.openweathermap.org/data/2.5/'
    const apiKey = '8f38a4cf6bad0a115627b9731c12150e'

    const getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync()
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
            getUserWeather(latitude, longitude)
        } catch (error) {
            Alert.alert('Не могу определить местоположение')
        }

    }
    const getUserWeather = async (latitude, longitude) => {
        const res = await request(`${apiBase}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        //console.log(latitude, longitude)
        return dispatch(addUserInfo(_tranformSaveObj(res)))
    }

    const getCityWeather = async (text) => {
        const res = await request(`${apiBase}find?q=${text}&type=like&APPID=${apiKey}&units=metric`)
        return dispatch(addCity(_transformSaveCityObj(res)))

    }
    const getWeatherFiveDay = async (city) => {
        const res = await request(`${apiBase}forecast?q=${city},us&appid=${apiKey}`)
        return res
    }

    const _tranformSaveObj = (obj) => {
        const { description, icon, main } = obj.weather[0]
        const { speed } = obj.wind
        const { temp, temp_max, temp_min, humidity, pressure } = obj.main
        const { sunrise, sunset } = obj.sys
        return {
            name: obj.name,
            temp: temp,
            tempMax: temp_max,
            tempMin: temp_min,
            description: description,
            icon: icon,
            //main: main,
            windSpeed: speed,
            humidity: humidity,
            pressure: pressure,
            sunrise: sunrise,
            sunset: sunset
        }
    }
    const _transformSaveCityObj = (obj) => {
        const { name, main, wind, weather } = obj.list[0]
        const { temp, temp_max, temp_min } = main
        const { description, icon } = weather[0]
        const { speed } = wind


        return (
            dispatch(addCity(
                {
                    name: name,
                    temp: temp,
                    tempMax: temp_max,
                    tempMin: temp_min,
                    description: description,
                    icon: icon,
                    //main: weather[0].main,
                    windSpeed: speed
                }
            )
            )
        )
    }


    return { getLocation, getCityWeather, getUserWeather, getWeatherFiveDay }
}
export default useWeatherService;