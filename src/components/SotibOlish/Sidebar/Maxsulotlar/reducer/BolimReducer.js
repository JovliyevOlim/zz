import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'bolimlar',
    initialState: {
        bolimlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.bolimlar = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.bolimlar.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.bolimlar.map((item,index)=>{
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

export const getBolim=()=>apiCall({
    url: '/user',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveBolim=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editBolim=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteBolim=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer