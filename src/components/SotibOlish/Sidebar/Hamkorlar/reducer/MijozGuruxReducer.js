import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozgurux',
    initialState: {
        mijozgurux: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.taminot = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.taminot.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.taminot.map((item,index)=>{
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

export const getTMijozGurux=()=>apiCall({
    url: '/user',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMijozGurux=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMijozGurux=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMijozGurux=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer