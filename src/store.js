import {configureStore} from "@reduxjs/toolkit";
import {api} from './middleware';
import users from "./reducer/users";
import functionreducer from "./reducer/functionreducer";
export default configureStore({
    reducer:{
        users,functionreducer
    },
        middleware:[api]
})