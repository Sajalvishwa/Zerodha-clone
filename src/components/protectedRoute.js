import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("supabase_token");

  if (!token) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;