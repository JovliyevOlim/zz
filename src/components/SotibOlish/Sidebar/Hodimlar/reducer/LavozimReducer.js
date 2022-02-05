import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'lavozimlar',
    initialState: {
        lavozimlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.lavozimlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.lavozimlar.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.lavozimlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
        },
        deletefrom:(state,action)=>{

        }

    }
});

export const getLavozim=()=>apiCall({
    url: '/role',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveLavozim=(data)=>apiCall({
    url: '/role',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editLavozim=(data)=>apiCall({
    url: '/role',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteLavozim=(data)=>apiCall({
    url: '/role',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer