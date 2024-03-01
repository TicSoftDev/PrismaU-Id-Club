import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            return action.payload
        },
        updateUser: (state, action) => {
            state.clave = action.payload
        },
        resetUser: () => {
            return initialState
        }
    },
})

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;