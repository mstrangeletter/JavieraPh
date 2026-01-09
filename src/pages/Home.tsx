// src/pages/Home.tsx
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import Servicios from './Servicios';
import SobreMi from './SobreMi';
import Contacto from './Contacto';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HeroCarousel />

      <section id="servicios" className="scroll-anchor">
        <Servicios />
      </section>

      <section id="sobre-mi" className="scroll-anchor">
        <SobreMi />
      </section>

      <section id="contacto" className="scroll-anchor">
        <Contacto />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
