import {configureStore} from "@reduxjs/toolkit";
import {api} from './middleware';
import login from "./reducer/login";
import functionreducer from "./reducer/functionreducer";
export default configureStore({
    reducer:{
        login,functionreducer
    },
        middleware:[api]
})