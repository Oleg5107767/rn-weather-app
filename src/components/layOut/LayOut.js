import React, { useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import useWeatherService from '../../service/WeatherService'
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '../../navigation/AppNavigation';


const LayOut = () => {

    return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LayOut;