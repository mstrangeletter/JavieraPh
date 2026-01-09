import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";

// Estilos Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../components/styles/GalleryCarousel.scss";

type Props = {
  images: { url: string; alt?: string }[];
  title?: string;
};

const GalleryCarousel: React.FC<Props> = ({ images }) => {
  return (
    <section className="gallery-carousel">
      

      <div className="gallery-carousel-inner">
        <Swiper
          modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="gallery-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="gallery-slide">
              <img
                src={img.url}
                alt={img.alt || `Foto ${i + 1}`}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
