import { Alert } from 'react-native'
import * as Location from 'expo-location'
import { useDispatch } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { addUserInfo, addUserFiveDays, indicatorLoadUser } from '../redux/locationSlice'
import { addCity, addFiveDaysCity, indicatorLoadCity } from '../redux/citySlice'

const useWeatherService = () => {
    const {  request, error } = useHttp()
    const dispatch = useDispatch()
    const apiBase = 'https://api.openweathermap.org/data/2.5/'
    const apiKey = '8f38a4cf6bad0a115627b9731c12150e'

    const getLocation = async () => {
        dispatch(indicatorLoadUser(true))
        try {
            await Location.requestForegroundPermissionsAsync()
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
            getUserWeather(latitude, longitude)
        } catch (error) {
            Alert.alert("Can't determine location")
        }

    }
    const getUserWeather = async (latitude, longitude) => {
        const res = await request(`${apiBase}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        getUserFiveDay(latitude, longitude)
        return dispatch(addUserInfo(_tranformSaveObj(res)))
    }

    const getCityWeather = async (text) => {
        dispatch(indicatorLoadCity(true))
        const res = await request(`${apiBase}find?q=${text}&type=like&APPID=${apiKey}&units=metric`)
        getWeatherFiveDay(text)
        return dispatch(addCity(_transformSaveCityObj(res)))

    }
    const getWeatherFiveDay = async (text) => {
        const res = await request(`${apiBase}forecast?q=${text}&appid=${apiKey}&units=metric`)
        dispatch(indicatorLoadCity(false))
        return dispatch(addFiveDaysCity(_transormSaveFiveDaysWeather(res)))//_transormSaveFiveDaysWeather(res)
    }
    const getUserFiveDay = async (latitude, longitude) => {
        const res = await request(`${apiBase}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        dispatch(indicatorLoadUser(false))
        return dispatch(addUserFiveDays(_transormSaveFiveDaysWeather(res)))//_transormSaveFiveDaysWeather(res)
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
            weather: main,
            windSpeed: speed,
            humidity: humidity,
            pressure: pressure,
            sunrise: sunrise,
            sunset: sunset
        }
    }

    const _transformSaveCityObj = (obj) => {
        const { name, main, wind, weather } = obj.list[0]
        const { temp, temp_max, temp_min, humidity, pressure } = main
        const { description } = weather[0]
        const { speed } = wind
        return {
            name: name,
            temp: temp,
            tempMax: temp_max,
            tempMin: temp_min,
            description: description,
            weather: weather[0].main,
            windSpeed: speed,
            humidity: humidity,
            pressure: pressure
        }
    }

    const _transormSaveFiveDaysWeather = (data) => {
        const { list } = data
        const filterData = []
        for (let i = 0; i < list.length; i += 8) {
            filterData.push(list[i])
        }
        const data_clean = filterData.map((i) => ({
            dt: i.dt_txt,
            temp: i.main.temp,
            description: i.weather[0].description,
            weather: i.weather[0].main,
            speed: i.wind.speed,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
        }))
        return data_clean
    }

    return { getLocation, getCityWeather, getUserWeather, getWeatherFiveDay }
}
export default useWeatherService;