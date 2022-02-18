import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        token: {
            token_name: ''
        },
        businessId:1,
        payload:[]
    },
    reducers: {
        save: (state, action) => {
              console.log(state.payload)
            state.payload = action.payload
            console.log(state.payload)
            console.log('olm')

        },
        get: (state, action) => {
            state.users = action.payload
            console.log(state.users)
        }
    }
})

export const saveusers=(data) => apiCall({
    url: '/auth/login',
    method: 'post',
    data,
    onSuccess: slice.actions.save.type,
    onFail: slice.actions.save.type
})

export const  getusers = () => apiCall({
    url: '/auth/login',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export default slice.reducer
