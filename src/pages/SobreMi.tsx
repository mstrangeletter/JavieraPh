"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "../components/styles/SobreMi.module.scss";
import SignatureReveal from "../components/SignatureRevealWipe";

// trae TODAS las imágenes desde tus galerías
import { galleries } from "../pages/galleries";

type Img = { url: string; alt?: string };

function useRandomImages(count = 8): Img[] {
  return useMemo(() => {
    const all: Img[] = galleries.flatMap(g => g.items);
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, count);
  }, [count]);
}

const SobreMi: React.FC = () => {
  const textos = [
    "¡Hola! Soy Javiera, fotógrafa apasionada por capturar momentos que transmitan emociones reales y auténticas.",
    "Mi estilo se enfoca en lo natural, lo íntimo y lo humano, con especial atención a la luz y los detalles.",
    "Desde retratos personales hasta grandes celebraciones, me dedico a contar historias visuales que permanezcan en el tiempo.",
    "Si buscas una experiencia cercana y creativa, ¡estoy aquí para acompañarte!",
  ];

  const fotos = useRandomImages(10);

  return (
    <section id="sobre-mi" className={styles.hero}>
      <div className={styles.inner}>

        {/* IZQUIERDA: MURO DE FOTOS */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.photoWall} aria-label="Muro de fotografías">
            {fotos.map((img, i) => (
              <figure className={styles.photoCard} key={i}>
                <img
                  src={img.url}
                  alt={img.alt || `Foto ${i + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </motion.div>

        {/* DERECHA: TEXTO + FIRMA */}
<motion.div
  className={styles.right}
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className={styles.rightInner}>
    <span className={styles.kicker}>Sobre mí</span>
    <h1 className={styles.title}>Javiera Cartagena</h1>
    <hr className={styles.rule} />

    {/* TEXTO (animación única, no cascada) */}
    <motion.div
      className={styles.textBlocks}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {textos.map((texto, i) => (
        <p key={i}>{texto}</p>
      ))}
    </motion.div>

    {/* FIRMA */}
    <motion.div
      className={styles.signature}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      viewport={{ once: true }}
    >
      <SignatureReveal
        image="/javilogoblackletter.png"
        duration={6.2}
        strokeWidth={0.12}
        maxWidthPx={460}
        maxWidthVw={60}
      />
    </motion.div>
  </div>
</motion.div>


      </div>
    </section>
  );
};

export default SobreMi;
