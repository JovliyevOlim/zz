import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [ ],
        token: {
            token_name: ''
        },
    },
    reducers: {
        save: (state, action) => {
            state.users=action.payload.object
            console.log(action.payload.object)
            localStorage.setItem('tokenname',action.payload.message)
        },
        get: (state, action) => {
            console.log(action.payload)
            state.users = action.payload
            console.log(state.users)
        }
    }
})

export const saveusers=(data) => apiCall({
    url: '/auth/login',
    method: 'post',
    data,
    onSuccess: slice.actions.save.type
})

export const getusers = () => apiCall({
    url: '/auth/login',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export default slice.reducer