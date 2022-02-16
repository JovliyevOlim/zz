import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        token: {
            token_name: ''
        },
        gotopage:false,
        businessId:1

    },
    reducers: {
        save: (state, action) => {
            console.log(action.payload.object.business.id)
                state.users = action.payload.object
            state.businessId=action.payload.object.business.id
                localStorage.setItem('tokenname',action.payload.message)
                state.gotopage=true
                console.log('tureeen')


        },
        get: (state, action) => {
            console.log(action.payload.status)
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

export const getusers = () => apiCall({
    url: '/auth/login',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export default slice.reducer
