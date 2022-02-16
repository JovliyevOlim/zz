import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xodimlar',
    initialState: {
        xodimlar: [],
        id:''
    },
    reducers: {
        getFrom: (state, action) => {
            state.xodimlar = action.payload.object
            console.log(action.payload.object);
            toast.success('Get')
        },
        savefrom: (state, action) => {
            state.xodimlar.unshift(action.payload)
            console.log(action.payload)
            console.log('save')
            toast.success('SAQLANDI_XODIM')
        },
        editfrom: (state, action) => {
           console.log('edit')
            toast.success('TAXRIRLANDI')
        },
        deletefrom: (state, action) => {
            console.log('ochirildi')
            console.log(action.payload.object.id)
            console.log(typeof action.payload)
            toast.success('O`chirildi')
        }
    }
});

export const getXodim = (data) => apiCall({
    url: '/user/get-by-business/'+data,
    method: 'get',
    data,
    onSuccess: slice.actions.getFrom.type
});

export const saveXodim = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXodim = (data) => apiCall({
    url: '/user/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXodim = (data) => apiCall({
    url: '/user/'+data,
    method: 'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})


export default slice.reducer
