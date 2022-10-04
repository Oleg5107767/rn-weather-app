import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from '../../navigation/AppNavigation'


const LayOut = () => {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    )
}

export default LayOut