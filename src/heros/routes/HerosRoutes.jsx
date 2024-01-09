<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
=======
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroByIdPage, MarvelPage, SearchPage } from "../pages"

export const HerosRoutes = () => {
    
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="hero" element={<HeroByIdPage/>} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
>>>>>>> 34fd7d54c45b94f92dea9fd4b197b6a4b45bdb08
