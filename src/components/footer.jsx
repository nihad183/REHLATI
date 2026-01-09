// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2f2f2f] text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <Link
            to="/about"
            className="text-white font-semibold mb-4 inline-block hover:text-cyan-400 transition"
          >
            About Us
          </Link>

          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-cyan-400">REH</span>LATI
          </h2>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Discover unforgettable journeys and adventures worldwide. Explore the world with us!
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a className="w-9 h-9 bg-blue-600 flex items-center justify-center rounded text-white hover:opacity-80 transition">
              <FaFacebookF />
            </a>

            <a className="w-9 h-9 bg-pink-500 flex items-center justify-center rounded text-white hover:opacity-80 transition">
              <FaInstagram />
            </a>

            <a className="w-9 h-9 bg-blue-700 flex items-center justify-center rounded text-white hover:opacity-80 transition">
              <FaLinkedinIn />
            </a>

            <a className="w-9 h-9 bg-sky-500 flex items-center justify-center rounded text-white hover:opacity-80 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Travel Categories */}
        <div>
          <h3 className="footer-title text-white font-semibold mb-4">Travel Categories</h3>
          <ul className="footer-list space-y-2">
            <li
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => navigate("/safarii")}
            >
              Safari Season
            </li>
            <li
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => navigate("/CultureTrips")}
            >
              Culture Trips
            </li>
            <li className="cursor-pointer hover:text-cyan-400 transition"
            onClick={() => navigate("/TropicalAdventure")}
            >
              Tropical Adventure
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-white font-semibold mb-4">Quick Links</h3>
          <ul className="footer-list space-y-2">
<li
  className="cursor-pointer hover:text-cyan-400 transition"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
>
  Home
</li>
<li
  className="cursor-pointer hover:text-cyan-400 transition"
  onClick={() => navigate("/offers")}
>
  Special Offers
</li>
            <li className="cursor-pointer hover:text-cyan-400 transition">FAQs</li>
            <li className="cursor-pointer hover:text-cyan-400 transition">Privacy Policy</li>
            <li className="cursor-pointer hover:text-cyan-400 transition">Terms & Conditions</li>
            
          </ul>
        </div>

    {/* Contact Us */}
<div>
  <h3 className="footer-title text-white font-semibold mb-4">Contact Us</h3>

  {/* Email */}
  <div className="flex items-center gap-3 mb-3">
    <FaEnvelope className="text-cyan-500" />
    <span className="text-gray-300">rehlati@gmail.com</span>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3 mb-3">
    <FaPhoneAlt className="text-cyan-500" />
    <span className="text-gray-300">+213 000 000 000</span>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3 mb-3">
    <FaMapMarkerAlt className="text-cyan-500" />
    <span className="text-gray-300">Algeria, Oran</span>
  </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 py-4 text-center text-sm text-gray-400">
        © 2026 REHLATI. All Rights Reserved
      </div>
    </footer>
  );
}
