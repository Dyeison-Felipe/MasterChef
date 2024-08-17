import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navabar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Error from "../components/404";
import Details from "../components/Details";

export default function Router(){

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>  
      <Footer/>
    </BrowserRouter>
  )
}