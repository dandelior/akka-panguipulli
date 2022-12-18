import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";

import styles from "../styles/parts/Gallery.module.sass";

const images = [
  {
    src: "./images/gal_1.jpg",
    id: 1,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_12.jpeg",
    id: 2,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_6.jpeg",
    id: 3,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_4.jpeg",
    id: 4,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_5.jpeg",
    id: 5,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_3.jpeg",
    id: 6,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_7.jpeg",
    id: 7,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_8.jpeg",
    id: 8,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_9.jpeg",
    id: 9,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_10.jpeg",
    id: 10,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_11.jpeg",
    id: 11,
    alt: "Foto de galería",
  },
  {
    src: "./images/gal_2.jpeg",
    id: 12,
    alt: "Foto de galería",
  },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const closeTheLightbox = () => setIsOpen(false);

  return (
    <div className={styles.gallery} id="gallery">
      <div className={`centeredContent ${styles.galleryInner}`}>
        <div className={styles.galleryHeader}>
          <h2>Galería de imágenes</h2>
        </div>
        <div className={styles.galleryContent}>
          <div className={styles.galleryContentInner}>
            {images.slice(0, 5).map((image) => (
              <div
                key={image.id}
                className={styles.galleryItem}
                style={{ backgroundImage: `url(${image.src})` }}
                onClick={() => {
                  setIsOpen(true);
                  setCurrentIndex(image.id - 1);
                }}
              ></div>
            ))}
          </div>
          <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            renderHeader={() => (
              <div
                onClick={() => setIsOpen(false)}
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ✕
              </div>
            )}
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClose={closeTheLightbox}
          />
        </div>
        <p className={styles.galleryCredits}>
          Imágenes del loteo y sus alrededores.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
