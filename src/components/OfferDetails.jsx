import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaRunning,
  FaShieldAlt,
  FaCouch,
  FaSmile,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { offers } from "../data/offersData";

export default function OfferDetails() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const offer = offers.find((o) => o.id.toString() === id);
  if (!offer) return <p className="text-center mt-20 text-xl">Offer not found</p>;

  const nextSlide = () => setCurrent((prev) => prev === offer.images.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrent((prev) => prev === 0 ? offer.images.length - 1 : prev - 1);

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">

        {/* ===== TITLE ===== */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold">{offer.hotel}</h1>
          <p className="text-gray-500 mt-2 text-lg flex justify-center items-center gap-1">
            <FaMapMarkerAlt className="text-cyan-500" /> {offer.location}
          </p>
        </div>

        {/* ===== GALLERY ===== */}
        <div className="relative w-full h-[76vh] rounded-xl overflow-hidden shadow-lg mb-10">
          <img
            src={offer.images[current]}
            alt="hotel"
            className="w-full h-full object-cover rounded-xl"
          />
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-4 py-2 rounded-full hover:bg-black transition"
          >‹</button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-4 py-2 rounded-full hover:bg-black transition"
          >›</button>
        </div>

        {/* ===== DETAILS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow min-h-[200px]" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaRunning className="text-cyan-500" /> Activities
            </h3>
            <ul className="space-y-2 text-gray-600">{offer.activities.map((a,i)=> <li key={i}>• {a}</li>)}</ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow min-h-[200px]" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-500" /> Places
            </h3>
            <ul className="space-y-2 text-gray-600">{offer.places.map((p,i)=> <li key={i}>• {p}</li>)}</ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow min-h-[200px]" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaUtensils className="text-cyan-500" /> Food
            </h3>
            <p className="text-gray-600">
              {offer.food.breakfast && "✔ Breakfast Included"} <br />
              {offer.food.lunch && "✔ Lunch Included"} <br />
              {offer.food.dinner && "✔ Dinner Included"}
            </p>
          </div>
        </div>

        {/* ===== SAFETY / COMFORT / ENJOYMENT ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up">
            <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
              <FaShieldAlt className="text-cyan-500" /> Safety
            </h3>
            <p className="text-gray-600 mt-2">High security & professional guides</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
              <FaCouch className="text-cyan-500" /> Comfort
            </h3>
            <p className="text-gray-600 mt-2">Luxury hotel & premium services</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
              <FaSmile className="text-cyan-500" /> Enjoyment
            </h3>
            <p className="text-gray-600 mt-2">Unique moments & unforgettable memories</p>
          </div>
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="flex gap-5 justify-center mb-10 flex-wrap">
          <button className="bg-cyan-500 text-white px-8 py-3 rounded hover:bg-cyan-600 transition">
            Book Now
          </button>
          <button onClick={() => navigate(-1)} className="border px-8 py-3 rounded hover:bg-gray-200 transition">
            Back
          </button>
        </div>

      </div>
    </section>
  );
}
