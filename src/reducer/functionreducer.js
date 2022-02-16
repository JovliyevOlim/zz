import {createSlice} from "@reduxjs/toolkit";


const slice1 =createSlice({
    name:'functionlar',
    initialState:{
        func:{
                actives:false,
                class1:'homepageone',
                class2:'homepagetwo',
                class3:'sidebar',
                class4:'',
        }
    },
    reducers:{
        active:(state,action)=>     {
             state.func.class4=''
            state.func.actives = !state.func.actives
            if(state.func.class1 ==="homepageone"){
                state.func.class1='homepage1'
                state.func.class2='homepage2'
                state.func.class3='sidebar2'
            }
            else{
                state.func.class1='homepageone'
                state.func.class2='homepagetwo'
                state.func.class3='sidebar'

            }
        },
        activemedia:(state,action)=>     {
            state.func.actives = !state.func.actives
            if(state.func.class1 ==="homepageone"){
                state.func.class1='homepage1'
                state.func.class2='homepage2'
                state.class4='d-none'
            }
            else{
                state.func.class1='homepageone'
                state.func.class2='homepagetwo'
                state.func.class4=''
            }
        },
    }
})

export const {active,activemedia} = slice1.actions
export default slice1.reducer
