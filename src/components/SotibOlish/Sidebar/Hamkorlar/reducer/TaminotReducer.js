import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";
import {useEffect,useState} from "react";

const slice = createSlice({
    name: 'taminot',
    initialState: {
        taminot: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.taminot = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.taminot.unshift(action.payload)
            console.log('SAQLANDI_TAMINOT')
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.taminot.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            console.log('EDITED_TAMINOT');
        },
        deletefrom:(state,action)=>{
            console.log('DELETE_TAMINOT')
            console.log(action.payload.object.id)
            console.log(typeof action.payload)
        }

    }
});

export const getTaminot=()=>apiCall({
    url: '/supplier/get-by-business/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveTaminot=(data)=>apiCall({
    url: '/supplier',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editTaminot=(data)=>apiCall({
    url: '/supplier',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteTaminot=(data)=>apiCall({
    url: '/supplier/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer