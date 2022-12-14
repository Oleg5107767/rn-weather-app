import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Platform } from 'react-native'
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
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black',
            }
        },
        androidConfig: {
            barStyle: { backgroundColor: 'black', showLabel: false }
        },
        MyLocationOptions: {
            tabBarLabel: 'My',
            tabBarLabel: null,
            tabBarIcon: ({ focused }) => (focused ? <Ionicons name='location' size={25} color={'white'} /> : <Ionicons name='location-outline' size={25} color={'white'} />)
        },
        CityOptions: {
            tabBarLabel: 'cities',
            tabBarLabel: null,
            tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name='city-variant' size={25} color={'white'} /> : <MaterialCommunityIcons name='city-variant-outline' size={25} color={'white'} />)
        },
    }
    return (
        <Tab.Navigator
            initialRouteName='MyLocationScreen'
            screenOptions={bottomConfig.screenOptions}
            barStyle={Platform.OS === 'android' ? bottomConfig.androidConfig.barStyle : null}
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
