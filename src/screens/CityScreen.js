import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TextInput, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCity } from '../redux/citySlice'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import useWeatherService from '../service/WeatherService'
import { ScreenList } from '../components/ui/ScreenList';

const CityScreen = () => {
    const [text, onChangeText] = useState("")

    const { getCityWeather } = useWeatherService()
    const {city }= useSelector(state => state.city)
    const dispatch = useDispatch();


    const onRequst = () => [
        getCityWeather(text)
    ]
    console.log(city , 'city1')
    
    //const{payload} = city
    //let x = {...payload}
    //console.log(payload ,'x')
    const handler = () => {

        if (text.trim().length === 0) {
            Alert.alert('Введите название города')
            onChangeText('')
            return
        }
        // dispatch(setCity(text))
        //onChangeText('')
        onRequst()
    }
    const content = city.name ? <ScreenList/> : null
    return (
        <View>
            <View style={styles.container} >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="enter city"
                    />
                    <TouchableOpacity
                        onPress={handler}
                        style={styles.button}
                    >
                        <Text >Search</Text>
                    </TouchableOpacity>
                </View>
            </View >
            {content}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,

    },
    inputContainer: {
        marginHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        right: 40,
        position: 'absolute',
        bottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        padding: 8,
        borderColor: 'black'
    },
    input: {
        flex: 1,
        height: 50,
        color: 'black',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingLeft: 35,
    },
    nameCityContainer: {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingVertical: 15,
        //paddingHorizontal: 10,
        //flexDirection: "row",
        //justifyContent: "center",
        //alignItems: "center"

    },
    nameCity: {
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: 10,
        color: 'white'
    },
    tempAllContainer: {
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: "center",
        //alignItems: 'center',
    },
    tempContainer: {
        backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    tempText: {
        fontSize: 25,
        padding: 10
    },
    tempMaxMinText: {
        fontSize: 15,
        // padding: 10
    },
    tempIconMax: {
        bottom: 7
    }

})

export default CityScreen;