
import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/layout/SidebarAdmin";
import { getVendorRequests, approveVendor } from "../../api/vendor.api";

export default function AdminVendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendorRequests().then(res => setVendors(res.data));
  }, []);

  const approve = async (id) => {
    await approveVendor(id);
    setVendors(vendors.filter(v => v._id !== id));
  };

  return (
    <div className="d-flex">
      <SidebarAdmin />
      <div className="p-4">
        <h3>Vendor Requests</h3>
        {vendors.map(v => (
          <div key={v._id} className="card p-2 mb-2">
            {v.email}
            <button className="btn btn-success btn-sm" onClick={()=>approve(v._id)}>
              Approve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
