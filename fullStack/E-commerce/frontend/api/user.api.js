import api from "./axios.js"

// registration backend call 
export const register=async(form)=>{
    try {
         // response 
         const response = await api.post("/users/register",form)
         console.log("from register api token",response.data.token)
         if(response.data.token) localStorage.setItem("token",response.data.token)
            localStorage.setItem("userId",response.data.userId)
         localStorage.setItem("role",response.data.role)
            return response.data
        
    } catch (error) {
        return error.response.data.message?error.response.data.message :"Registration failed"
    }
   
}

//login backend call
export const login=async(form)=>{
   try {
     const response = await api.post("/users/login",form)
     //axios.post("http://localhost:3000/api/users/login",form)
         if(response.data.token) localStorage.setItem("token",response.data.token)
            console.log(response.data)
        localStorage.setItem("userId",response.data.userId)
        localStorage.setItem("role",response.data.role)
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