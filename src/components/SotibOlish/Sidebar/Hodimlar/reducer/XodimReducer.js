import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xodimlar',
    initialState: {
        xodimlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xodimlar = <action className="payload object"></action>
            console.log(action.payload.object);
        },
        savefrom: (state, action) => {
            state.xodimlar.unshift(action.payload)

        },
        editfrom: (state, action) => {
            state.xodimlar.map((item, index) => {
                if (item.id === action.payload.id) {
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom: (state, action) => {

            // toast.info('O`chirildi')
        }

    }
});

export const getXodim = () => apiCall({
    url: '/user',
    method: 'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXodim = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXodim = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXodim = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer
