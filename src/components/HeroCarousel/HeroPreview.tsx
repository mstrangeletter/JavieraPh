import React from "react";
import styles from "../styles/HeroCarousel.module.scss";

type Props = {
  category: string;
  title: string;
  image: string;
  link: string;
  previewRef: React.RefObject<HTMLDivElement | null>; // <-- Aquí acepta null
  onClick: () => void;
};

const HeroPreview: React.FC<Props> = ({ category, title, image, onClick, previewRef }) => {
  return (
    <div
      ref={previewRef}
      className={styles["preview-card"]}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className={styles["preview-text"]}>
        <small>{category}</small>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default HeroPreview;
