import { createSlice } from "@reduxjs/toolkit"


export const citySlice = createSlice({
    name: 'town',
    initialState: {
        city: '',
        fiveDaysWeatherCity: [],
        cityLoading: false,
    },
    reducers: {
        addCity: (state, action) => {
            state.city = action.payload
        },
        addFiveDaysCity: (state, action) => {
            state.fiveDaysWeatherCity = action.payload
        },
        indicatorLoadCity: (state, action) => {
            state.cityLoading = action.payload
        },
    }
})
export const { addCity, addFiveDaysCity, indicatorLoadCity } = citySlice.actions
export default citySlice.reducer
