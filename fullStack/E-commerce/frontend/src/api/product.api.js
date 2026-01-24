import api from "./axios.js"
export const createProduct = (data) => api.post("/products", data)
export const getSellerProducts = (shopId) => api.get(`/products/myProducts/${shopId}`)
export const deleteProduct = (id) => api.delete(`/products/${id}`)