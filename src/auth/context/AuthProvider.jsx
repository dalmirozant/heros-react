import { useReducer } from "react";
import { AuthContext } from "./";
import { authReducer } from "./";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("USER"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const payload = {
      id: "asdfsadfasd",
      name,
    };
    const action = {
      type: types.login,
      payload,
    };

    localStorage.setItem("USER", JSON.stringify(payload));

    dispatch(action);
  };

  const logout = () => {
    const action = {
      types: types.logout,
    };

    localStorage.removeItem("USER");

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
