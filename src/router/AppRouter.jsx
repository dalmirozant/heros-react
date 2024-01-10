import { Route, Routes } from "react-router-dom";
import { HerosRoutes } from "../heros";
import { LoginPage } from "../auth";
import { PrivateRoutes } from "./";
import { PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HerosRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
