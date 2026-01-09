import React from "react";
import { FaPlane, FaStar } from "react-icons/fa";

/* ===== IMPORT IMAGES ===== */
import Tokyo from "../assets/Tokyo.jpg";
import france from "../assets/france.jpg";
import Dubai from "../assets/Dubai.jpg";
import London from "../assets/London.jpg";

const trips = [
  {
    img: Tokyo,
    location: "Tokyo, Japan",
    price: "$746k",
    days: "7 Day Trip",
    rating: 4.5,
  },
  {
    img: france,
    location: "France, Paris",
    price: "$746k",
    days: "7 Day Trip",
    rating: 4.5,
  },
  {
    img: Dubai,
    location: "Dubai, UAE",
    price: "$746k",
    days: "7 Day Trip",
    rating: 4.5,
  },
  {
    img: London,
    location: "UK, London",
    price: "$746k",
    days: "7 Day Trip",
    rating: 4.5,
  },
];

export default function VacationPlan() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* عنوان القسم */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Best <span className="font-normal">Vacation Plan</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
      </div>

      {/* البطاقات */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* الصورة مربعة */}
            <div className="w-full aspect-square">
              <img
                src={trip.img}
                alt={trip.location}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 flex flex-col justify-between flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {trip.location}
                </h3>
                <span className="text-blue-600 font-bold text-sm sm:text-base">
                  {trip.price}
                </span>
              </div>

              <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
                <span className="flex items-center gap-1">
                  <FaPlane className="text-cyan-500" /> {trip.days}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {trip.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}
