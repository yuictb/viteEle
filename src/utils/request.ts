import axios from "axios";

export const server=axios.create({
    baseURL:'/api',
    timeout:5000

})
server.interceptors.response.use(function(response){
    return response.data
}),function(error:any){
    return Promise.reject(error)
}