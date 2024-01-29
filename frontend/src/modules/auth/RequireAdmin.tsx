import React, {useState} from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../../hooks/useRole";
import Loading from "../../components/shared/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(false);
  const [role, roleLoading] = useRole(user);
  // console.log(admin);
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (!user || role !== "admin") {
    toast.error("This is Protected for only Admin", { id: "requireAdmin" });
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
