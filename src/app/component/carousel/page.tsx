"use client";

import { useState, useEffect } from "react";

const images = [
  "https://www.khmer24.ws/www/delivery/ai.php?filename=web_5.png%20(2)&contenttype=png",
  "https://www.khmer24.ws/www/delivery/ai.php?filename=en_khmer24-(1).gif&contenttype=gif",
  "https://www.khmer24.ws/www/delivery/ai.php?filename=khmer24-970x250.gif%20(10)&contenttype=gif",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-scroll using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <div className="max-w-screen-lg mx-auto body xl:mt-20 lg:w-full w-[1060px] md:px-0 px-8">
      <div className="relative  overflow-hidden lg:w-full w-[1160px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full object-cover  h-72"
            />
          ))}
        </div>
        {/* Navigation */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 opacity-40 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &larr;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white opacity-40 p-2 rounded-full"
          onClick={nextSlide}
        >
          &rarr;
        </button>
      
      </div>
    </div>
  );
}
