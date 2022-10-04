import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice({
    name: 'userLocation',
    initialState: {
        user: '',
        userFiveDays: ''
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.user = action.payload
        },        
        addUserFiveDays: (state, action) => {
            state.userFiveDays =  action.payload
        }
    }

})
export const { addUserInfo,addUserFiveDays } = locationSlice.actions
export default locationSlice.reducer