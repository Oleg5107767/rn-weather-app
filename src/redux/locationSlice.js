import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        userFiveDays: ''
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.user = action.payload
        },
    }

})
export const { addUserInfo } = locationSlice.actions
export default locationSlice.reducer