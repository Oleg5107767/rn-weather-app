import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const ScreenList = ({ name, temp, tempMax, tempMin, windSpeed, description, main, humidity, pressure, sunrise, sunset }) => {
    return (
        <View>
            <View style={styles.nameCityContainer}>
                <Text style={styles.nameCity}>{name}</Text>
                <Ionicons
                    name='rainy-outline'
                    size={60}
                    color={'black'}
                />
            </View>
            <View style={styles.tempAllContainer}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.tempText}>temp {temp}</Text>
                    <Text style={styles.tempText}>{description}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around",
                    marginVertical: 10
                }}>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>tempMax {tempMax}</Text>
                        <Ionicons
                            style={{ bottom: 6 }}
                            name='chevron-up'
                            size={20}
                            color={'black'}
                        />
                    </View>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>tempMin {tempMin}</Text>
                        <Ionicons
                            style={{ bottom: 6 }}
                            name='chevron-down'
                            size={20}
                            color={'black'}
                        />
                    </View>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>speed {windSpeed}</Text>
                        <Feather
                            name='wind'
                            size={20}
                            color={'black'}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around",
                    marginVertical: 10
                }}>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>sunrise {sunrise}</Text>
                        <MaterialCommunityIcons
                            name='weather-sunset-up'
                            size={20}
                            color={'black'}
                        />
                    </View>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>sunset {sunset}</Text>
                        <MaterialCommunityIcons
                            name='weather-sunset-down'
                            size={20}
                            color={'black'}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-around"
                }}>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>humidity {humidity}</Text>
                        <Ionicons
                            name='water-outline'
                            size={20}
                            color={'black'}
                        />
                    </View>
                    <View style={styles.tempContainer}>
                        <Text style={styles.tempMaxMinText}>pressure {pressure}</Text>
                        <MaterialCommunityIcons
                            name='speedometer'
                            size={20}
                            color={'black'}
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
        //backgroundColor: 'white',
        borderColor: 'black',
        paddingLeft: 35,
    },
    nameCityContainer: {
        flexDirection: 'row',
        //backgroundColor: 'lightgray',
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
        //backgroundColor: 'lightgray',
        flexDirection: 'column',
        justifyContent: "center",

    },
    tempContainer: {
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


