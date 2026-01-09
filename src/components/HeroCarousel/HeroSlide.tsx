import React from "react";
import styles from "../styles/HeroCarousel.module.scss";

type Props = {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const HeroSlide: React.FC<Props> = ({ category, title, description, image, link }) => {
  return (
    <>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.details}>
        <div className={styles["place-box"]}>
          <div className={styles.text}>{category}</div>
        </div>
        <div className={styles["title-1"]}>{title.toUpperCase()}</div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.cta}>
          <button
            className={styles.discover}
            onClick={() => (window.location.href = link)}
          >
            VER GALERÍA
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSlide;
