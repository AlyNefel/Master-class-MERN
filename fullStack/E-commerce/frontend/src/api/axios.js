import axios from "axios"

// instance men axios create 
const api =axios.create({
    baseURL:"http://localhost:5000/api"
})

//  generate ineterceptor 
api.interceptors.request.use(req=>{
    const token = localStorage.getItem("token");

    if (token) req.headers.Authorization = "Bearer "+token 
    return req
})
export default api