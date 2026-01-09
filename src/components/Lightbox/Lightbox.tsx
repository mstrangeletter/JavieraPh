import React, { useEffect, useCallback } from "react";
import "../styles/Lightbox.scss";

type Img = { src: string; alt?: string };

type Props = {
  isOpen: boolean;
  onClose: () => void;
  index: number;
  onIndexChange: (n: number) => void;
  images: Img[];
};

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6L6 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Lightbox: React.FC<Props> = ({ isOpen, onClose, index, onIndexChange, images }) => {
  const len = images.length;

  const prev = useCallback(() => onIndexChange((index - 1 + len) % len), [index, len, onIndexChange]);
  const next = useCallback(() => onIndexChange((index + 1) % len), [index, len, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen) return null;

  const { src, alt } = images[index] || {};

  return (
    <div className="lb-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Visor de imágenes">
      <div className="lb-body" onClick={(e) => e.stopPropagation()}>
        {/* Top bar */}
        <div className="lb-topbar">
          <button
            className="lb-close"
            onClick={onClose}
            aria-label="Cerrar"
            title="Cerrar (Esc)"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav izquierda */}
        <button className="lb-nav prev" onClick={prev} aria-label="Anterior" title="Anterior (←)">
          <Chevron dir="left" />
        </button>

        {/* Imagen */}
        <div className="lb-image">
          <img src={src} alt={alt} decoding="async" />
        </div>

        {/* Nav derecha */}
        <button className="lb-nav next" onClick={next} aria-label="Siguiente" title="Siguiente (→)">
          <Chevron dir="right" />
        </button>

        <div className="lb-counter">{index + 1} / {len}</div>
      </div>
    </div>
  );
};

export default Lightbox;
