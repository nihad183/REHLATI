import React, { useEffect } from "react"; // أضف useEffect
import { FaShieldAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

import hero from "../assets/travel4.jpg";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import travel3 from "../assets/travel3.jpg";
import office from "../assets/office1.jpg";

// =================== HERO STAT COMPONENT ===================
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-3xl font-bold">{number}</p>
      <p className="text-gray-300 text-sm sm:text-base">{label}</p>
    </div>
  );
}

// =================== FEATURE COMPONENT ===================
function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          border border-cyan-400
          flex items-center justify-center
          text-cyan-400
          text-lg sm:text-xl
          mb-3 sm:mb-4
        "
      >
        {icon}
      </div>
      <p className="text-xs sm:text-sm text-gray-300">{title}</p>
    </div>
  );
}

// =================== MAIN COMPONENT ===================
export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#041C2F] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] sm:h-[75vh] lg:h-[85vh]">
          <img src={hero} alt="Hero" className="w-full h-full object-cover" />

          <button
            onClick={() => navigate(-1)} 
            className="
              absolute top-6 left-6
              bg-cyan-500 hover:bg-cyan-600
              text-white p-3 rounded-full
              shadow-lg transition
              flex items-center justify-center
            "
          >
            ← Back
          </button>

          {/* WAVE */}
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1205 130"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#041C2F"
              d="M0,80 C120,120 240,40 360,40 C480,40 600,120 720,120 C840,120 960,40 1080,40 C1200,40 1320,100 1440,80 L1440,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 font-serif">
              Discover The World <br />
              With <span className="text-cyan-400">REHLATI</span>
            </h1>

            <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8 flex-wrap">
              <Stat number="3+" label="Years" />
              <Stat number="60+" label="Clients" />
              <Stat number="25+" label="Trips" />
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              We create unforgettable travel experiences with comfort,
              safety and elegance. Travel is not a destination, it’s a feeling.
            </p>
          </div>

          <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[420px] flex justify-center items-center mt-6 lg:mt-0">

            <img
              src={travel1}
              alt=""
              className="
                absolute
                w-56 h-80
                object-cover
                rounded-xl
                border-4 border-white
                shadow-lg
                opacity-90
                -translate-x-40
                scale-95
                z-10
              "
            />

            <img
              src={travel2}
              alt=""
              className="
                absolute
                w-64 h-88
                object-cover
                rounded-xl
                border-4 border-white
                shadow-xl
                -translate-x-6
                scale-105
                z-20
              "
            />

            <img
              src={travel3}
              alt=""
              className="
                absolute
                w-72 h-96
                object-cover
                rounded-xl
                border-4 border-white
                shadow-2xl
                translate-x-20
                scale-105
                z-30
              "
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative mb-8 lg:mb-0">
            <img
              src={office}
              alt="Office"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              About <span className="text-cyan-400">Us</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 sm:mb-12">
              REHLATI Travel Agency is committed to delivering premium travel
              experiences worldwide. We focus on quality, trust, and comfort
              to ensure every journey becomes an unforgettable memory.
            </p>

            <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
              <Feature icon={<FaShieldAlt />} title="Security" />
              <Feature icon={<FaClock />} title="24/7 Support" />
              <Feature icon={<FaDollarSign />} title="Best Pricing" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
