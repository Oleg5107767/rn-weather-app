import { createSlice } from "@reduxjs/toolkit";


export const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: '',
        cityFiveDays: ''
    },
    reducers: {
        addCity: (state, action) => {
            //console.log(action.payload.payload, 'action')
            state.city =  action.payload
        },
        addCityFiveDays: (state, action) => {
            state.cityFiveDays =  action.payload
        },
    }
})
export const { addCity } = citySlice.actions
export default citySlice.reducer






//export const {actions, reducer} = citySlice;
//export default reducer;
//export const {
//    addCity
//} = actions;