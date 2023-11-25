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
