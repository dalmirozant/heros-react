import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const redirectUri = pathname + search;
  localStorage.setItem("REDIRECT_URI", redirectUri);
  return logged ? children : <Navigate to="/login" />;
};
