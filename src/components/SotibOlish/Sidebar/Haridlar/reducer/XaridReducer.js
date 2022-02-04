import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xaridlar',
    initialState: {
        xaridlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xodimlar = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.xodimlar.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.xodimlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{

            // toast.info('O`chirildi')
        }

    }
});

export const getXarid=()=>apiCall({
    url: '/user',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarid=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarid=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarid=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer