"use client";

import { useState } from "react";

const images = [
  "https://www.khmer24.ws/www/delivery/ai.php?filename=web_5.png%20(2)&contenttype=png",
  "https://www.khmer24.ws/www/delivery/ai.php?filename=web_5.png%20(2)&contenttype=png",
  "https://www.khmer24.ws/www/delivery/ai.php?filename=web_5.png%20(2)&contenttype=png",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full  overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-full object-cover" />
        ))}
      </div>
      {/* Navigation */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &rarr;
      </button>
    </div>
  );
}
