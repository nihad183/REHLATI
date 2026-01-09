import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import safari1 from "../assets/safari1.jpg";
import safari2 from "../assets/safari2.jpg";
import safari3 from "../assets/safari3.jpg";
import safari4 from "../assets/safari4.jpg";
import safari5 from "../assets/safari5.jpg";
import safari6 from "../assets/safari6.jpg";
import safari7 from "../assets/safari7.jpg";
import safari8 from "../assets/safari8.jpg";
import safari9 from "../assets/safari9.jpg";
import safari10 from "../assets/safari10.jpg";

export default function Safari() {
  const navigate = useNavigate();

  const images = [
    safari1, safari2, safari3, safari4, safari5, safari7, safari8, safari9, safari10
  ];

  const [currentIndex, setCurrentIndex] = useState(4); // safari6 أولًا

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">

      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <img
          src={safari6}
          alt="Safari Hero"
          className="absolute w-full h-full object-cover brightness-50"
        />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 bg-[#D9CBA3] hover:bg-[#C7B58A] text-[#4B3B2B] px-4 py-2 rounded-full font-bold shadow-lg transition flex items-center gap-2 z-30"
        >
          ← Back
        </button>
        <div className="relative text-center px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-widest uppercase mb-6 text-yellow-100">
            SAFARI
          </h1>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center bg-[#f0e6d2]/20">
        <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl tracking-widest uppercase font-serif leading-relaxed">
          Embark on an unforgettable adventure! Explore the wild landscapes, majestic animals, 
          and breathtaking sunsets. Your journey to discovery and excitement starts here.
        </p>
      </section>

      {/* GALLERY */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentIndex]})`, filter: "brightness(0.3)" }}
        ></div>

        <div className="relative z-20 w-full max-w-7xl px-6 py-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-100">
            Safari Gallery
          </h2>

          <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] w-full">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Safari ${idx + 1}`}
                className={`absolute w-64 h-80 object-cover rounded-xl transition-all duration-500
                  ${idx === currentIndex ? "opacity-100 z-20 scale-105" : "opacity-0 z-10 scale-95"}
                `}
              />
            ))}

            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#8B5E3C] hover:bg-[#A67C52] text-white p-4 rounded-full shadow-lg z-30"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#8B5E3C] hover:bg-[#A67C52] text-white p-4 rounded-full shadow-lg z-30"
            >
              <FaArrowRight />
            </button>
          </div>

          <p className="text-center text-gray-200 mt-12 max-w-2xl leading-relaxed text-lg">
            Explore the majestic beauty of African Savannas, wild animals, and breathtaking landscapes.
            Each photo tells a story of adventure and excitement. Join us to make your own unforgettable journey!
          </p>
        </div>
      </section>

      {/* INFO & BOOKING */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-[#4B3B2B] p-8 rounded-2xl shadow-2xl flex flex-col gap-4">
          <h3 className="text-3xl font-serif font-bold text-[#D9CBA3] mb-4">Safari Details</h3>
          <ul className="text-[#E0D8C3] list-disc ml-6 space-y-2 text-lg font-serif">
            <li>Destination: African Savannas</li>
            <li>Best Season: June - September</li>
            <li>Duration: 7-10 days</li>
            <li>Price: $2000+</li>
            <li>Included: Accommodation, Meals, Guided Tours</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="mb-6 text-center">
            <p className="text-[#291e02] text-lg font-serif mb-4">Ready for your adventure?</p>
            <button
              onClick={() => alert("Redirect to booking page")}
              className="bg-[#D9CBA3] hover:bg-[#C7B58A] text-[#4B3B2B] px-8 py-4 rounded-full font-serif font-bold text-lg shadow-lg transition flex items-center gap-4"
            >
              Book your trip now
              <span className="text-2xl animate-bounce">→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
