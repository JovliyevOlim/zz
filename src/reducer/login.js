import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";


export const slice = createSlice({
    name: 'login',
    initialState: {
        login: [ ],
        active:false,
        remember:false
    },
    reducers: {
        save: (state, action) => {
            state.login = action.payload
            console.log(action.payload)
            console.log(action.payload)
            console.log(action.payload)
        },
        get: (state, action) => {
            console.log(action.payload)
            state.login = action.payload
        }
    }
})

export const savelogin=(data) => apiCall({
    url: '/auth/login',
    method: 'post',
    data,
    onSuccess: slice.actions.save.type
})

export const getlogin = () => apiCall({
    url: '/auth/login',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export default slice.reducer