import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        LOGIN
      </button>
    </div>
=======

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{replace: true})
  }



  return (
  <div className="container mt-5">
    <h1>Login</h1>
    <hr/>
    <button className="btn btn-primary" onClick={onLogin}>LOGIN</button>
  </div>
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
  );
};
