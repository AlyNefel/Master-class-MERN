import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BecomeSeller from "./pages/auth/BecomeSeller";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerProducts from "./pages/seller/Products";
import NewProduct from "./pages/seller/NewProduct";
import SellerCategories from "./pages/seller/Categories";
import SellerOrders from "./pages/seller/Orders";
import SellerProfile from "./pages/seller/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminVendors from "./pages/admin/Vendors";
import AdminOrders from "./pages/admin/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from './pages/auth/Profile'
import Home from "./pages/public/Home";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/seller" element={
            <ProtectedRoute role="seller"><SellerDashboard /></ProtectedRoute>
          } />
          <Route path="/seller/products/new" element={
            <ProtectedRoute role="seller"><NewProduct /></ProtectedRoute>
          } />
          <Route path="/seller/products" element={
            <ProtectedRoute role="seller"><SellerProducts /></ProtectedRoute>
          } />
          <Route path="/seller/categories" element={
            <ProtectedRoute role="seller"><SellerCategories /></ProtectedRoute>
          } />
          <Route path="/seller/orders" element={
            <ProtectedRoute role="seller"><SellerOrders /></ProtectedRoute>
          } />
          <Route path="/seller/profile" element={
            <ProtectedRoute role="seller"><SellerProfile /></ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute role="user"><Profile /></ProtectedRoute>
          } />
          <Route path="/become-seller" element={
            <ProtectedRoute role="user"><BecomeSeller /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="/admin/vendors" element={
            <ProtectedRoute role="admin"><AdminVendors /></ProtectedRoute>
          } />
          <Route path="/admin/orders" element={
            <ProtectedRoute role="admin"><AdminOrders /></ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
