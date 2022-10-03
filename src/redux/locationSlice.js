import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        addUserInfo: (state, action) => {
           // console.log(action)
            state.user = action.payload
        },
    }

})
export const { addUserInfo } = locationSlice.actions
export default locationSlice.reducer