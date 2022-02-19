import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        token: {
            token_name: ''
        },
        businessId:'',
        link:'401'
    },
    reducers: {
        save: (state, action) => {

            state.payload = action.payload.object
            console.log(state.payload)

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
