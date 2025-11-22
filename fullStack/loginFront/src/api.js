import axios from "axios"

// instance men axios create 
const api =axios.create({
    baseURL:"http://localhost:3000/api/users"
})

//  generate ineterceptor 
api.interceptors.request.use(req=>{
    const token = localStorage.getItem("token");

    if (token) req.headers.Authorization = "Bearer "+token 
    return req
})

// registration backend call 
export const register=async(form)=>{
    try {
         // response 
         const response = await api.post("/register",form)
         console.log("from register api token",response.data.token)
         if(response.data.token) localStorage.setItem("token",response.data.token)
            return response.data
        
    } catch (error) {
        return error.response.data.message?error.response.data.message :"Registration failed"
    }
   
}

//login backend call
export const login=async(form)=>{
   try {
     const response = await api.post("/login",form)
         if(response.data.token) localStorage.setItem("token",response.data.token)
            consolelog(response.data)
            return response.data
   } catch (error) {
    return error.response.data.message?error.response.data.message :"Login failed"
   }
}

// get profile 
export const profile=async()=>{
    try {
        const response = await api.get("/profile")
        console.log("from api .js",response.data)
        return response.data
    } catch (error) {
        return error.response.data.message?error.response.data.message :"Get profile failed"
    }
}

export default api;