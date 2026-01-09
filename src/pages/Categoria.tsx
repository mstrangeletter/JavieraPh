import React from "react";
import { useParams } from "react-router-dom";
import { galleries } from "../pages/galleries";
import GalleryCarousel from "../pages/GalleryCarousel";

const Categoria: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const gallery = galleries.find((g) => g.slug === nombre);

  if (!gallery) {
    return <p>Galería no encontrada.</p>;
  }

  return <GalleryCarousel images={gallery.items} title={gallery.title} />;
};

export default Categoria;
