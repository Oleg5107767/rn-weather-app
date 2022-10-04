import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import userLocation from '../redux/locationSlice'
import town from '../redux/citySlice'


const reducer = combineReducers({
    userLocation,
    town
})
const store = configureStore({
    reducer,
})

export default store





