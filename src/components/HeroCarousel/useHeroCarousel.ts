import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

type Destination = {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export const useHeroCarousel = (categories: Destination[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = useCallback(() => {
    if (!bgRef.current || !textRef.current || !previewRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    // Salida (nunca baja a negro total)
    tl.to(bgRef.current, { opacity: 0.3, duration: 0.4 }, 0)
      .to(textRef.current, { opacity: 0, y: 20, duration: 0.4 }, 0)
      .to(previewRef.current, { opacity: 0, x: 20, duration: 0.4 }, 0)

      // Cambiar slide antes de quedar en negro total
      .add(() => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
      })

      // Entrada (superpuesta para suavizar)
      .to(bgRef.current, { opacity: 1, duration: 0.5 }, '<0.05')
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '<'
      )
      .fromTo(
        previewRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5 },
        '<'
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // cada 5 segundos

    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return { currentIndex, setCurrentIndex, bgRef, textRef, previewRef, goToNextSlide };
};
