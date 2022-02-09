import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'maxsulotruyxati',
    initialState: {
        maxsulotruyxati: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.maxsulotruyxati = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.maxsulotruyxati.unshift(action.payload)
        },
        editfrom: (state,action) => {
            state.maxsulotruyxati.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
        },
        deletefrom:(state,action)=>{


        }

    }
});

export const getMaxsulotRuyxati=()=>apiCall({
    url: '/product/get-by-branch/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer