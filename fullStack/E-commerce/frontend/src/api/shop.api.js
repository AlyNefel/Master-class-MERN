import api from "./axios.js"
export const getMyShop=()=>api.get("/shops/myShop")
