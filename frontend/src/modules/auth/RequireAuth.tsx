import React, {useState} from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/shared/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading></Loading>;
  
  if (!user) {
    return <Navigate to="/connect" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;