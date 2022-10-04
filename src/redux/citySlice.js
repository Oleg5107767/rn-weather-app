import { createSlice } from "@reduxjs/toolkit";


export const citySlice = createSlice({
    name: 'town',
    initialState: {
        city: '',
        fiveDaysWeather: []
        
    },
    reducers: {
        addCity: (state, action) => {
            state.city =  action.payload
        },
        addFiveDaysCity: (state, action) => {
            state.fiveDaysWeather =  action.payload
        }

    }
})
export const { addCity , addFiveDaysCity} = citySlice.actions
export default citySlice.reducer






//export const {actions, reducer} = citySlice;
//export default reducer;
//export const {
//    addCity
//} = actions;