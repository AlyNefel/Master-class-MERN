// Middleware to verify user roles for protected routes
import User from "../models/userModel.js";

// Check if user has required role
export const requireRole = (roles) => {
    return async (req, res, next) => {
        try {
            // req.user is set by auth middleware
            if (!req.user || !req.user.id) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // Fetch user from database to get current role
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Check if user role is in allowed roles
            if (!roles.includes(user.role)) {
                return res.status(403).json({
                    message: "Access denied. Insufficient permissions."
                });
            }

            // User has required role, proceed
            next();
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    };
};

// Convenience middleware for specific roles
export const requireAdmin = requireRole(["admin"]);
export const requireSeller = requireRole(["seller", "admin"]);
export const requireUser = requireRole(["user", "seller", "admin"]);
