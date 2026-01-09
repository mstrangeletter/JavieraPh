import { useState } from "react";
import styles from "../components/styles/Servicios.module.scss";
import { motion } from "framer-motion";
import {
  Camera,
  Users,
  Heart,
  Images,
  Buildings,
  Printer,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const serviciosData = [
  {
    title: "Retratos Profesionales",
    description: "Sesiones personalizadas para imagen profesional.",
    icon: Camera,
    accent: "#E6B98E",
    slug: "retrato",
  },
  {
    title: "Fotografía de Eventos",
    description: "Captura de momentos únicos y espontáneos.",
    icon: Users,
    accent: "#7AA2F7",
    slug: "matrimonios",
  },
  {
    title: "Maternidad & Familia",
    description: "Sesiones íntimas y emotivas.",
    icon: Heart,
    accent: "#F2A6B3",
    slug: "maternidad",
  },
  {
    title: "Pre-bodas & Love Stories",
    description: "Historias auténticas antes del gran día.",
    icon: Images,
    accent: "#C792EA",
    slug: "pre-bodas",
  },
  {
    title: "Fotografía Estudio",
    description: "Iluminación controlada y estética limpia.",
    icon: Buildings,
    accent: "#6FCF97",
    slug: "interiores",
  },
  {
    title: "Impresiones Fine Art",
    description: "Obras listas para exhibición.",
    icon: Printer,
    accent: "#F6C177",
    slug: "vinedo",
  },
];

type CardStyle = {
  boxShadow: string;
  backgroundPosition: string;
};

const Servicios = () => {
  const [hoverStyles, setHoverStyles] = useState<{ [key: number]: CardStyle }>(
    {}
  );
  const nav = useNavigate();

  const handleMouseMove = (
  e: React.MouseEvent<HTMLElement>,
  index: number
) => {
  const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
  const { offsetX: x, offsetY: y } = e.nativeEvent as any;

  const moveX = (x / width - 0.5) * 20;
  const moveY = (y / height - 0.5) * 20;

  setHoverStyles((prev) => ({
    ...prev,
    [index]: {
      boxShadow: `${-moveX}px ${-moveY}px 28px rgba(0,0,0,.45)`,
      backgroundPosition: `${50 + moveX / 2}% ${50 + moveY / 2}%`,
    },
  }));
};


  const handleMouseLeave = (index: number) => {
    setHoverStyles((prev) => ({
      ...prev,
      [index]: {
        boxShadow: "0 0 18px rgba(0,0,0,.35)",
        backgroundPosition: "50% 50%",
      },
    }));
  };

  return (
    <main className={styles.main}>
      <h1>Servicios</h1>

      <ul className={styles.serviciosList}>
        {serviciosData.map(
          ({ title, description, icon: Icon, slug, accent }, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <article
  role="button"
  tabIndex={0}
  onClick={() => nav(`/portafolio/${slug}`)}
  onKeyDown={(e) =>
    (e.key === "Enter" || e.key === " ") &&
    nav(`/portafolio/${slug}`)
  }
  onMouseMove={(e) => handleMouseMove(e, i)}
  onMouseLeave={() => handleMouseLeave(i)}
  style={{
    "--accent": accent,
    cursor: "pointer",
    boxShadow:
      hoverStyles[i]?.boxShadow ||
      "0 0 18px rgba(0,0,0,.35)",
    backgroundPosition:
      hoverStyles[i]?.backgroundPosition || "50% 50%",
  } as React.CSSProperties}
>

                <Icon size={44} weight="duotone" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </motion.li>
          )
        )}
      </ul>
    </main>
  );
};

export default Servicios;