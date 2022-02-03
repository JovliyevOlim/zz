import axios from "axios";

export const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== "api/apiCall") {
        next(action)
        return
    }
    next(action)
    const {url, method, data, onSuccess, onFail} = action.payload
    axios({
        baseURL: 'http://192.168.0.104:8080/api',
        // baseURL: 'http://localhost:5000',
        url, method, data
    }).then(res => {
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: err.data
        })
    })

}
export default api