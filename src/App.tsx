// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import PortafolioIndex from './pages/Portafolio';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0);
    }
  }, [hash, pathname]);
  return null;
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* landing: ya no uses /sobre-mi ni /contacto como páginas si no las necesitas */}
        <Route path="/portafolio" element={<PortafolioIndex />} />
        <Route path="/portafolio/:nombre" element={<Categoria />} />
        {/* si quieres mantener /sobre-mi y /contacto como rutas, puedes dejarlas */}
        <Route path="/sobre-mi" element={<Home />} />
        <Route path="/contacto" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
