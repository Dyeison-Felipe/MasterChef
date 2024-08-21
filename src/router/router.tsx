import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navabar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Error from '../components/404';
import RegisterRecipe from '../pages/RegisterRecipe';
import Details from '../components/Details';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/register" element={<RegisterRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
