import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [ ],
        token: {
            token_name: ''
        }
    },
    reducers: {
        save: (state, action) => {
            console.log(action.payload)
            state.token.token_name=action.payload
             console.log(state.token.token_name)

            localStorage.setItem('tokenname',action.payload)
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