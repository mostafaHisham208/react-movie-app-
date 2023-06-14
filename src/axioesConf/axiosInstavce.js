import axios from "axios"
import store from "../store/store"
import { changeLoader } from './../store/actions/loader';

const axiosInstance= axios.create({
    baseURL:"https://api.themoviedb.org/3",

    // params:{api_key:"b328928619278c66403779d6d97e8635",page:"1"}
})


// axiosInstance.interceptors.request.use((req) => {

      
//     console.log("request interceptor");
//        store.dispatch(changeLoader(true))
//     return req

// }, (err) => {

//     return Promise.reject(err)
// })


// axiosInstance.interceptors.response.use((res) => {



//     console.log("response interceptor");
//     store.dispatch(changeLoader(false))

//     return res


// }, (err) => {
//     return Promise.reject(err)

// })

export default axiosInstance


