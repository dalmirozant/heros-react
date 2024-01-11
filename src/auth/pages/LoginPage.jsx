import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Dalmiro Zantleifer Ojeda");
    const redirecturi = localStorage.getItem("REDIRECT_URI") ?? "/";
    navigate(redirecturi, { replace: true });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        LOGIN
      </button>
    </div>
  );
};
