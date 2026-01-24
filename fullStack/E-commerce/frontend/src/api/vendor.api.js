
import api from "./axios";

export const getVendorRequests = () => api.get("/vendor/requests");
export const approveVendor = (id) => api.put(`/vendor/approve/${id}`);
