import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { weatherOptions } from '../optionsConfig'
import { LinearGradient } from 'expo-linear-gradient'


export const FiveDaysList = ({ dt, description, temp, weather }) => {
    return (
        <LinearGradient
            colors={weather ? weatherOptions[weather].colorGradient : ['#3D7EAA', '#FFE47A']}
            color={['#3D7EAA', '#FFE47A']}
            style={styles.container}
        >
            <Text style={styles.titleText}>{dt.slice(0, 10)}</Text>
            <View style={styles.imgConatiner}>
                <Ionicons
                    name={weather ? weatherOptions[weather].iconName : null}
                    size={60}
                    color={'white'}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.text}>{Math.round(temp)}</Text>
                    <MaterialCommunityIcons
                        name='temperature-celsius'
                        size={16}
                        color={'white'}
                    />
                </View>
                <Text style={styles.text} >{description}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
        borderRadius: 15
    },
    titleText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700'
    },
    imgConatiner: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
