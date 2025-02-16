import React, { useState } from 'react';
import './Carousel.scss';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Vue ${currentIndex + 1}`} />
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={goToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="carousel-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;