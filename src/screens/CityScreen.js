import React, { useState } from 'react'
import { StyleSheet, Dimensions, View, TextInput,Alert, ScrollView} from 'react-native'
import { useSelector} from 'react-redux'
import useWeatherService from '../service/WeatherService'
import { ScreenList } from '../components/ui/ScreenList'
import { FiveDaysWeather } from '../components/fiveDaysWeather/FiveDaysWeather'
import { LinearGradient } from 'expo-linear-gradient'
import { weatherOptions } from '../components/optionsConfig'
const CityScreen = () => {
    const [text, onChangeText] = useState("")

    const { getCityWeather } = useWeatherService()
    const { city, fiveDaysWeather } = useSelector(state => state.town)

    const onRequst = () => [
        getCityWeather(text)
    ]

    const handler = () => {

        if (text.trim().length === 0) {
            Alert.alert('Введите название города')
            onChangeText('')
            return
        }
        onRequst()
        onChangeText('')
    }
    const content = city.name ?
        <ScreenList
            name={city.name}
            temp={city.temp}
            tempMax={city.tempMax}
            tempMin={city.tempMin}
            description={city.description}
            icon={city.icon}
            windSpeed={city.windSpeed}
            humidity={city.humidity}
            weather={city.weather}
            pressure={city.pressure} /> : null

    const fiveDay = city.name ?
        <FiveDaysWeather data={fiveDaysWeather} /> : null

    return (
        <LinearGradient
            colors={city.weather ? weatherOptions[city.weather].colorGradient : ['#3D7EAA', '#FFE47A']}
            color={['#3D7EAA', '#FFE47A']}
            style={styles.container}
        >
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="enter city"
                        placeholderTextColor="white"
                        onSubmitEditing={() =>{
                            handler()
                        }}
                    />
                </View>
                {content}
                <View style={{ marginTop: 20 }}>
                    {fiveDay}
                </View>
            </ScrollView>
        </LinearGradient>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        marginHorizontal: 50,
        marginVertical: 50,
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
        borderColor: 'white'
    },
    input: {
        flex: 1,
        height: 50,
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white',
        placeholderTextColor: "red",
        paddingLeft: Dimensions.get('window').width > 400 ? 150 : 100,
    }
})

export default CityScreen;