
import { useEffect, useState } from "react";
import SidebarSeller from "../../components/layout/SidebarSeller";
import { getSellerOrders } from "../../api/order.api";

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getSellerOrders().then(res => setOrders(res.data));
  }, []);

  return (
    <div className="d-flex">
      <SidebarSeller />
      <div className="p-4">
        <h3>Orders</h3>
        {orders.map(o => (
          <div key={o._id}>{o._id} - {o.status}</div>
        ))}
      </div>
    </div>
  );
}
