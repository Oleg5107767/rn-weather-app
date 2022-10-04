import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import useWeatherService from '../service/WeatherService'
import { ScreenList } from '../components/ui/ScreenList'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FiveDaysWeather } from '../components/fiveDaysWeather/FiveDaysWeather'
import { LinearGradient } from 'expo-linear-gradient'
import { weatherOptions } from '../components/optionsConfig'
import { Preloader } from '../components/ui/Preloader'


const MyLocationScreen = () => {
    const { user, userFiveDays, userLoading } = useSelector(state => state.userLocation)
    const { getLocation } = useWeatherService()

    useEffect(() => {
        getLocation()
    }, [])

    const content = !userLoading ?
        <ScrollView
            scrollEventThrottle={1}
        >
            <View style={{ marginTop: 130 }}>
                <ScreenList
                    name={user.name}
                    weather={user.weather}
                    temp={user.temp}
                    tempMax={user.tempMax}
                    tempMin={user.tempMin}
                    windSpeed={user.windSpeed}
                    description={user.description}
                    humidity={user.humidity}
                    pressure={user.pressure}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-around",
                marginVertical: 10
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.text}>sunrise {new Date(user.sunrise).toLocaleTimeString("en-US")}</Text>
                    <MaterialCommunityIcons
                        name='weather-sunset-up'
                        size={20}
                        color={'white'}
                    />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.text}>sunset {new Date(user.sunset).toLocaleTimeString("en-US")}</Text>
                    <MaterialCommunityIcons
                        name='weather-sunset-down'
                        size={20}
                        color={'white'}
                    />
                </View>
            </View>
            <FiveDaysWeather data={userFiveDays} />
        </ScrollView>
        :
        <Preloader />

    return (
        <LinearGradient
            colors={user.weather ? weatherOptions[user.weather].colorGradient : ['#232526', '#414345']}
            style={styles.container}
        >
            {content}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',//'lightgray',
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})

export default MyLocationScreen