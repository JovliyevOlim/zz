import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xarajatlar',
    initialState: {
        xarajatlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xarajatlar = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.xarajatlar.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.xarajatlar.map((item,index)=>{
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

export const getXarajatlar=()=>apiCall({
    url: '/user',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarajatlar=(data)=>apiCall({
    url: '/get-by-businessId/1',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarajatlar=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarajatlar=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer