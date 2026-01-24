
import api from "./axios";

export const getSellerOrders = () => api.get("/orders/seller");
export const getAdminOrders = () => api.get("/orders");
