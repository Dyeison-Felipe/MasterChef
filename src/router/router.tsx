import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navabar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Error from '../components/404';
import ModalDetails from '../components/ModalDetails';
import RegisterRecipe from '../pages/RegisterRecipe';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ModalDetails />} />
        <Route path="/register" element={<RegisterRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
