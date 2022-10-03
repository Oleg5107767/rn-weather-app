import { createSlice } from "@reduxjs/toolkit";


export  const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: ''
    },
    reducers: {
        addCity: (state, action) => {
            //console.log(action.payload.payload, 'action')
            state.city = action.payload.payload || action.payload
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