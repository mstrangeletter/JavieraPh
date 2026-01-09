import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import styles from "../components/styles/Footer.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.socials}>
        
          <a href="https://www.instagram.com/j4vis.ph/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/javiera-cartagena-28a13a125/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:jbetzavalos@gmail.com">
            <Mail />
          </a>
        </div>

        <p className={styles.copy}>
          © {year} BigBro Developers — Todos los derechos reservados
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
