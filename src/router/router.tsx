import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navabar";
import Home from "../components/Home";

export default function Router(){

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>  
    </BrowserRouter>
  )
}