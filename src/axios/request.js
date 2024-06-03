import router from "@/router";
import axios from "axios";

const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL
})

requestAxios.interceptors.response.use(null, (error) => {
    if(error.response.status === 401) {
        router.push('/auth?message=auth')
    }
    return Promise.reject(error);
});

export default requestAxios