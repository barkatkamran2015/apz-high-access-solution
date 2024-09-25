import React, { useState, useEffect } from "react";
import "../Carousel.css"; // Carousel CSS

// Import images from the assets folder
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const images = [
  {
    src: image1,
    caption: "High-Pressure Cleaning"
  },
  {
    src: image2,
    caption: "Rope Access Painters"
  },
  {
    src: image3,
    caption: "Trusted Painting Company in Sydney"
  }
];

export const CleaningServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clear timer when component unmounts
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="cleaning-services">
    
      <div className="carousel">
        <div className="carousel-images">
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
          <div className="caption">{images[currentIndex].caption}</div> {/* Caption Text */}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};
