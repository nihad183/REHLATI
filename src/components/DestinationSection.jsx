import { useState } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

/* ====== IMPORT IMAGES (src/assets) ====== */

// default images
import tokyoImg from "../assets/Tokyo.jpg";
import parisImg from "../assets/paris2.jpg";
import dubaiImg from "../assets/Dubai.jpg";
import londonImg from "../assets/London.jpg";

// Paris
import france1 from "../assets/france.jpg";
import france2 from "../assets/france2.jpg";
import paris1 from "../assets/paris1.jpg";
import france3 from "../assets/france3.jpg";

// Tokyo
import tokyo1 from "../assets/tokyo1.jpg";
import tokyo2 from "../assets/tokyo2.jpg";
import tokyo3 from "../assets/tokyo3.jpg";
import tokyo4 from "../assets/tokyo4.jpg";

// Dubai
import dubai1 from "../assets/dubai1.jpg";
import dubai2 from "../assets/dubai2.jpg";
import dubai3 from "../assets/dubai3.jpg";
import dubai4 from "../assets/dubai4.jpg";

// London
import London1 from "../assets/London1.jpg";
import London2 from "../assets/London2.jpg";
import London3 from "../assets/London3.jpg";
import London4 from "../assets/London4.jpg";

/* ====== DATA ====== */

const destinations = ["Paris", "Tokyo", "Dubai", "London"];

const defaultImages = [tokyoImg, parisImg, dubaiImg, londonImg];

const destinationImages = {
  Paris: [france1, france2, paris1, france3],
  Tokyo: [tokyo1, tokyo2, tokyo3, tokyo4],
  Dubai: [dubai1, dubai2, dubai3, dubai4],
  London: [London1, London2, London3, London4],
};

export default function DestinationSection() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [currentImages, setCurrentImages] = useState(defaultImages);

  const navigate = useNavigate();

  return (
    <section className="w-full px-5 md:px-10 py-24 bg-gray-50 flex flex-col items-center gap-8">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
        Find Your Best Destination
      </h2>

      {/* Paragraph */}
      <p className="text-center text-gray-500 max-w-xl text-lg">
        We have more than <span className="font-semibold">2000</span> destinations
      </p>

      {/* Search */}
      <div className="relative w-full max-w-lg">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="w-full flex items-center justify-between bg-[#1E2A47] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-xl" />
            {selectedDestination || "Search Destination"}
          </div>
          <MdSearch className="text-xl" />
        </button>

        {openDropdown && (
          <ul className="absolute z-20 mt-3 w-full bg-white rounded-xl shadow-xl overflow-hidden">
            {destinations.map((dest, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedDestination(dest);
                  setCurrentImages(destinationImages[dest] || defaultImages);
                  setOpenDropdown(false);
                }}
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
              >
                {dest}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image Boxes */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-5 mt-14">
        {currentImages.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-36 h-52 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-xl transform
              ${idx % 2 === 0 ? "rotate-[6deg]" : "rotate-[-6deg]"}
              hover:rotate-0 hover:scale-105 transition-all duration-300`}
          >
            <img
              src={img}
              alt="destination"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* See more */}
      {selectedDestination && (
        <button
          onClick={() => navigate(`/destination/${selectedDestination}`)}
          className="mt-10 text-gray-600 hover:text-gray-900 font-medium underline"
        >
          See more
        </button>
      )}
    </section>
  );
}
