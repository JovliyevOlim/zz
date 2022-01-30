import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [ ]
    },
    reducers: {
        save: (state, action) => {
            console.log(action.payload)
            state.users.push(action.payload)
            console.log(state.users)


        },
        get: (state, action) => {
            console.log(action.payload)
            state.users = action.payload
            console.log(action.payload)
        }
    }
})

export const saveusers=(data)=>apiCall({
    url: '/users',
    method: 'post',
    data,
    onSuccess: slice.actions.save.type

})

export const getusers = () => apiCall({
    url: '/users',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export default slice.reducer