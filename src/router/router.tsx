import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navabar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Error from '../components/404';
import Details from '../components/Details';
import RegisterRecipe from '../pages/RegisterRecipe';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[calc(100vh-6rem-6rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/register" element={<RegisterRecipe />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
