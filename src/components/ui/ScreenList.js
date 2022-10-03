import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {weatherOptions} from '../optionsConfig'

//const weatherOptions = {
//    Thunderstorm: {
//        iconName: 'thunderstorm-outline'
//    },
//    Drizzle: {
//        iconName: 'partly-sunny-outline'
//    },
//    Rain: {
//        iconName: 'rainy-outline'
//    },
//    Snow: {
//        iconName: 'snow-outline'
//    },
//    Clear: {
//        iconName: 'sunny-outline'
//    },
//    Clouds: {
//        iconName: 'cloud'
//    }
//    ///weaatherOptions[weather].iconName
//}


export const ScreenList = ({
    name,
    temp,
    tempMax,
    tempMin,
    windSpeed,
    description,
    humidity,
    pressure,
    weather,
    sunrise,
    sunset }) => {

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
                <Ionicons
                    name={weather ? weatherOptions[weather].iconName : null}
                    size={60}
                    color={'white'}
                />
            </View>
            <View style={styles.itemContainer}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.subtitle}> {temp}</Text>
                        <MaterialCommunityIcons
                            name='temperature-celsius'
                            size={30}
                            color={'white'}
                        />
                    </View>

                    <Text style={styles.subtitle}>{description}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around",
                    marginVertical: 10
                }}>
                    <View style={styles.item}>
                        <Text style={styles.text}>tempMax {tempMax}</Text>
                        <Ionicons
                            style={{ bottom: 6 }}
                            name='chevron-up'
                            size={20}
                            color={'white'}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.text}>tempMin {tempMin}</Text>
                        <Ionicons
                            style={{ bottom: 6 }}
                            name='chevron-down'
                            size={20}
                            color={'white'}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.text}>speed {windSpeed}</Text>
                        <Feather
                            name='wind'
                            size={20}
                            color={'white'}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around"
                }}>
                    <View style={styles.item}>
                        <Text style={styles.text}>humidity {humidity}</Text>
                        <Ionicons
                            name='water-outline'
                            size={20}
                            color={'white'}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.text}>pressure {pressure}</Text>
                        <MaterialCommunityIcons
                            name='speedometer'
                            size={20}
                            color={'white'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: 10,
        color: 'white'
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: "center",
    },
    item: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 25,
        padding: 10,
        color: 'white'
    },
    text: {
        fontSize: 15,
        color: 'white'
    },

})


