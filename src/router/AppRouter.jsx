<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
import { Route, Routes } from "react-router-dom";
import { HerosRoutes } from "../heros";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
<<<<<<< HEAD
        <Route path="/*" element={<HerosRoutes />} />
=======
        <Route path="/*" element={ <HerosRoutes/>} />
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
      </Routes>
    </>
  );
};
