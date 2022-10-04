import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice({
    name: 'userLocation',
    initialState: {
        user: '',
        userFiveDays: [],
        userLoading: false,
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.user = action.payload
        },
        addUserFiveDays: (state, action) => {
            state.userFiveDays = action.payload
        },
        indicatorLoadUser: (state, action) => {
            state.userLoading = action.payload
        },
    }
})
export const { addUserInfo, addUserFiveDays, indicatorLoadUser } = locationSlice.actions
export default locationSlice.reducer