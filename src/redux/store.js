//import { createStore, combineReducer, applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'
//import userReducer from './reducer'

import cityReducer from '../redux/citySlice'
import usersReducer from '../redux/locationSlice'
import locationSlice from "./locationSlice";
//import user from '../redux/locationSlice'
//import city from '../redux/citySlice'

import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import user from '../redux/locationSlice'
import city from '../redux/citySlice'


const reducer = combineReducers({
    user,
    city
})
const store = configureStore({
    reducer,
})

export default store



//const store = configureStore({
//    reducer: {
//        user: usersReducer,
//        city: cityReducer
//    },
//})



//const rootReducer = combineReducer({userReducer})
//export const Store = createStore(rootReducer, applyMiddleware(thunk))

//const reducer = {
//    userLoc: locationSlice,
//}
//const stringMiddleware = () => (next) => (action) => {
//    if (typeof action === 'string') {
//        return next({
//            type: action
//        })
//    }
//    return next(action)
//}
//const store = configureStore({
//    reducer:reducer,
//    devTools: true
//})


//onst store = configureStore({
//   reducer: {
//       user: usersReducer,
//       city: cityReducer
//   },
   //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
   //devTools: process.env.NODE_ENV !== 'production',
//})
