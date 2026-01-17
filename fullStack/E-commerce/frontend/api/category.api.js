import api from "./axios.js"
export const createCategory=(data)=>api.post("/categories",data)