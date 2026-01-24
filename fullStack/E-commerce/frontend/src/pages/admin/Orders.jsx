
import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/layout/SidebarAdmin";
import { getAdminOrders } from "../../api/order.api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAdminOrders().then(res => setOrders(res.data));
  }, []);

  return (
    <div className="d-flex">
      <SidebarAdmin />
      <div className="p-4">
        <h3>All Orders</h3>
        {orders.map(o => (
          <div key={o._id}>{o._id} - {o.status}</div>
        ))}
      </div>
    </div>
  );
}
