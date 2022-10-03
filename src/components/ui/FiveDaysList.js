import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


export const FiveDaysList = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Image
                    source={require('../../../assets/adaptive-icon.png')}
                    style={{ flex: 1, width: null, height: null, resize: 'cover' }}
                />
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text >hkhkh</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    }
})
