import api from "./axios.js"
export const createCategory=(data)=>api.post("/categories",data)
export const getShopCategories=()=>api.get("categories/myCategories")
export const deleteCategory=(id)=>api.delete(`/categories/${id}`)