import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { FiveDaysList } from '../ui/FiveDaysList'


export const FiveDaysWeather = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Weather for the next five days
                </Text>
            </View>
            <View style={styles.listContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FiveDaysList />
                    <FiveDaysList />
                    <FiveDaysList />
                    <FiveDaysList />
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop: 30 
    },
    titleContainer: {
        paddingTop: 20, 
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 20,
        fontWeight: '600',
        color: 'white'
    },
    listContainer:{
        height: 130,
        marginTop: 20 
    }
})