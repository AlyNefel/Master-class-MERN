
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div className="bg-primary text-white p-3 vh-100">
      <h4>Admin</h4>
      <Link to="/admin/vendors" className="d-block text-white">Vendors</Link>
      <Link to="/admin/orders" className="d-block text-white">Orders</Link>
    </div>
  );
}
