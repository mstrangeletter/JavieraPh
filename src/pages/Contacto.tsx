"use client";

import React from "react";
import styles from "../components/styles/Contacto.module.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, User, MessageCircle } from "lucide-react";

const Contacto: React.FC = () => {
  return (
    <section className={styles.contacto}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>Contáctame</h1>
      </motion.div>

      <motion.div
        className={styles.subtitulo}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <TypeAnimation
          sequence={[
            "¿Quieres una sesión única?",
            1500,
            "¿Tienes dudas o ideas?",
            1500,
            "¡Hablemos y creemos algo juntos!",
            2000,
          ]}
          speed={50}
          wrapper="p"
          repeat={Infinity}
        />
      </motion.div>

      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.inputGroup}>
          <User className={styles.icon} />
          <input type="text" placeholder="Nombre" required />
        </div>

        <div className={styles.inputGroup}>
          <Mail className={styles.icon} />
          <input type="email" placeholder="Correo electrónico" required />
        </div>

        <div className={styles.inputGroup}>
          <MessageCircle className={styles.icon} />
          <textarea placeholder="Mensaje" rows={5} required />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Enviar mensaje
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contacto;
