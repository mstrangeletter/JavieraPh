import React from 'react';
import { useHeroCarousel } from './useHeroCarousel';
import styles from '../styles/HeroCarousel.module.scss';

type Destination = {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const categories: Destination[] = [
  {
    category: 'Paisajes',
    title: 'San Pedro de Atacama',
    description: 'Arbustos del desierto de Atacama cubiertos por delicadas gotas de camanchaca.',
    image: '/img/sanpedro/sanpedro1.jpg',
    link: '/categoria/paisajes',
  },
  {
    category: 'Interiores',
    title: 'Casona Patronal',
    description: 'Reencuentro con la historia y la vida en la colonia.',
    image: '/img/interiores/Interiores1.jpg',
    link: '/categoria/interiores',
  },
  {
    category: 'Pre - Bodas',
    title: 'Matrimonio de Equis y De',
    description: 'Se disfruta el comienzo de un nuevo viaje y el recuerdo perdura.',
    image: '/img/preboda/Preboda1.jpg',
    link: '/categoria/pre-bodas',
  },
  {
    category: 'Bodas',
    title: 'Matrimonio de Jeremy y Mel',
    description: 'Retratos llenos de personalidad y misticismo.',
    image: '/img/matrimonios/Matris1.jpg',
    link: '/categoria/matrimonios',
  },
];

const HeroCarousel: React.FC = () => {
  const { currentIndex, bgRef, textRef, previewRef, goToNextSlide } = useHeroCarousel(categories);

  const current = categories[currentIndex];
  const next = categories[(currentIndex + 1) % categories.length];

  return (
    <div className={styles['hero-carousel']}>
      {/* Fondo principal */}
      <div
        ref={bgRef}
        className={styles.card}
        style={{ backgroundImage: `url(${current.image})` }}
      />

      {/* Contenido textual */}
      <div ref={textRef} className={styles.details}>
        <div className={styles['place-box']}>
          <div className={styles.text}>{current.category}</div>
        </div>
        <div className={styles['title-1']}>{current.title.toUpperCase()}</div>
        <p className={styles.desc}>{current.description}</p>
        <div className={styles.cta}>
          <button
            className={styles.discover}
            onClick={() => (window.location.href = current.link)}
          >
            VER GALERÍA
          </button>
        </div>
      </div>

      {/* Vista previa del siguiente slide */}
      <div
        ref={previewRef}
        className={styles['preview-card']}
        style={{ backgroundImage: `url(${next.image})` }}
        onClick={goToNextSlide} // manual y sincronizado
      >
        <div className={styles['preview-text']}>
          <small>{next.category}</small>
          <strong>{next.title}</strong>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
