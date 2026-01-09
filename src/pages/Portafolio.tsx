import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { galleries } from "../pages/galleries";
import "../components/styles/Portafolio.scss";

const PortafolioIndex: React.FC = () => {
  return (
    <section className="portafolio">
      <h1>Portafolio</h1>
      <p className="sub">Selección de categorías y series destacadas.</p>

      <div className="portafolio-grid">
        {galleries.map((g, i) => (
          <motion.article
            key={g.slug}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <Link to={`/portafolio/${g.slug}`} className="link">
              <img src={g.coverUrl || g.items[0]?.url} alt={g.title} loading="lazy" />
              <div className="overlay">
                <h2>{g.title}</h2>
                {g.description && <p>{g.description}</p>}
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default PortafolioIndex;
