import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/Navbar.scss';
import logo from '/Javilogo.png';

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToAnchor = (id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(doScroll, 0);
    } else {
      doScroll();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>Portafolio ▾</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/portafolio">Todas las galerías</Link></li>
              <li><Link to="/portafolio/retrato">Retratos</Link></li>
              <li><Link to="/portafolio/recien-nacidos">Recién nacidos</Link></li>
              <li><Link to="/portafolio/maternidad">Maternidad</Link></li>
              <li><Link to="/portafolio/matrimonios">Bodas</Link></li>
              <li><Link to="/portafolio/pre-bodas">Pre-bodas</Link></li>
              <li><Link to="/portafolio/interiores">Interiores</Link></li>
              <li><Link to="/portafolio/san-pedro">San Pedro</Link></li>
              <li><Link to="/portafolio/vinedo">Viñedos</Link></li>
            </ul>
          )}
        </li>

        {/* Scroll interno del Home */}
        <li><button className="as-link" onClick={() => goToAnchor('servicios')}>Servicios</button></li>
        <li><button className="as-link" onClick={() => goToAnchor('sobre-mi')}>Sobre mí</button></li>
        <li><button className="as-link" onClick={() => goToAnchor('contacto')}>Contacto</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
