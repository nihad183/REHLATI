import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// images
import tropic from "../assets/tropic.jpg";
import tropic1 from "../assets/tropic1.jpg";
import tropic2 from "../assets/tropic2.jpg";
import tropic3 from "../assets/tropic3.jpg";
import tropic4 from "../assets/tropic4.jpg";
import tropic5 from "../assets/tropic5.jpg";
import tropic6 from "../assets/tropic6.jpg";
import tropic7 from "../assets/tropic7.jpg";
import tropic8 from "../assets/tropic8.jpg";

export default function TropicalAdventure() {
  const navigate = useNavigate();
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ===== HERO ===== */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <img
          src={tropic}
          alt="Tropical Hero"
          className="absolute w-full h-full object-cover brightness-50"
        />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 bg-yellow-200 hover:bg-yellow-300 text-[#3B2B1F] px-4 py-2 rounded-full font-bold shadow-lg z-30"
        >
          ← Back
        </button>
        <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold tracking-widest text-yellow-200">
          Tropical Adventure
        </h1>
      </section>

      {/* ===== FIRST 4 IMAGES ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[tropic1, tropic2, tropic3, tropic4].map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={img}
              alt={`Tropic ${idx + 1}`}
              className="w-full h-64 sm:h-64 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* ===== FIRST TEXT ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <p className="text-gray-800 text-lg sm:text-xl font-serif leading-relaxed">
          Explore pristine beaches, lush jungles, and crystal-clear waters.
          Each image is a glimpse into your tropical adventure.
        </p>
      </section>

      {/* ===== NEXT 4 IMAGES ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[tropic5, tropic6, tropic7, tropic8].map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={img}
              alt={`Tropic ${idx + 5}`}
              className="w-full h-64 sm:h-64 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* ===== SECOND TEXT ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-gray-800 text-lg sm:text-xl font-serif leading-relaxed">
          Discover hidden lagoons, enjoy thrilling boat tours, and witness breathtaking sunsets.
        </p>
      </section>

      {/* ===== DETAILS & BOOKING ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-12 items-center">
        <div className="bg-[#3B2B1F] p-8 rounded-2xl shadow-2xl flex-1 text-white">
          <h3 className="text-3xl font-bold mb-4 font-serif">Trip Details</h3>
          <ul className="list-disc list-inside space-y-2 text-lg font-serif">
            <li>Destination: Tropical Islands</li>
            <li>Best Season: June - September</li>
            <li>Duration: 7-10 days</li>
            <li>Price: $2000+</li>
            <li>Included: Accommodation, Excursions, Meals</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-gray-800 text-lg font-serif mb-4">Ready for your tropical adventure?</p>
          <button
            onClick={() => alert("Redirect to booking page")}
            className="bg-yellow-200 text-[#3B2B1F] px-10 py-4 rounded-full font-serif font-bold text-lg shadow-lg transition flex items-center gap-3"
          >
            Book your trip now
            <span className="text-2xl animate-bounce">→</span>
          </button>
        </div>
      </section>

    </div>
  );
}
