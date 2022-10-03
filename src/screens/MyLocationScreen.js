import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import useWeatherService from '../service/WeatherService'
import { ScreenList } from '../components/ui/ScreenList';

const MyLocationScreen = () => {
    const navigation = useNavigation();
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { getLocation } = useWeatherService()

    useEffect(() => {
        getLocation()
    }, [])

    console.log(user, 'user')

    return (
        <View style={styles.container}>
            <ScreenList
                name={user.name}
                temp={user.temp}
                tempMax={user.tempMax}
                tempMin={user.tempMin}
                windSpeed={user.windSpeed}
                description={user.description}
                //main={user.main}
                humidity={user.humidity}
                pressure={user.pressure}
                sunrise={user.sunrise}
                sunset={user.sunset}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        marginVertical: 30,
    },
});

export default MyLocationScreen;