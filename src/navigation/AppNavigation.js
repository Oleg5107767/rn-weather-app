import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MyLocationScreen from '../screens/MyLocationScreen'
import CityScreen from '../screens/CityScreen'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const AppNavigation = (props) => {
    const Stack = createNativeStackNavigator()
    const Tab = (Platform.OS === 'android') ? createMaterialBottomTabNavigator() : createBottomTabNavigator()


    const MyLocationNavigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="MyLocationScreen"
                    component={MyLocationScreen}
                />
            </Stack.Navigator>
        )
    }

    const CityNavigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="CityScreen"
                    component={CityScreen}
                />
            </Stack.Navigator>
        )
    }
    const bottomConfig = {
        screenOptions: {
            headerShown: false,
        },
        MyLocationOptions: {
            tabBarLabel: 'My',
            tabBarIcon: ({ focused }) => (<Ionicons name='ios-location-outline' size={25} color={focused ? 'black' : "#4d5156"} />)
        },
        CityOptions: {
            tabBarLabel: 'cities',
            tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name='city-variant-outline' size={25} color={focused ? 'black' : "#4d5156"} />)
        },
    }
    return (
        <Tab.Navigator
            initialRouteName='MyLocationScreen'
            screenOptions={{ headerShown: false }}
        // barStyle={AndroidConfig.barStyle}
        //shifting={AndroidConfig.shifting}
        >
            <Tab.Screen
                name="MyLocation"
                component={MyLocationNavigator}
                options={bottomConfig.MyLocationOptions}
            />

            <Tab.Screen name="City"
                component={CityNavigator}
                options={bottomConfig.CityOptions}
            />
        </Tab.Navigator>
    )
}
