import React, { useState, useMemo } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const destinations = ["Paris", "Tokyo", "Dubai", "London"];

const destinationImages = {
  Paris: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992359/paris1_lm7az7.jpg", 
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992314/france3_nnyiqc.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992304/france_nqpojg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992290/france2_qiobwt.jpg",
  ],
  Tokyo: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992427/tokyo3_cdki8i.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992415/tokyo1_v1jgmm.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992414/tokyo4_r4t0cv.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992405/tokyo2_k4mmhz.jpg",
  ],
  Dubai: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992283/dubai4_jx1m9j.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992279/dubai3_svbkpi.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992471/dubai2_lc07ja.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992469/dubai1_vccn4i.jpg",
  ],
  London: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992333/London1_dcozfg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992332/London2_vypsfg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992327/London4_wp5dxf.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992323/London3_bgxg84.jpg",
  ],
};

// Default images عند عدم اختيار وجهة
const defaultImages = [
  "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992398/Tokyo_wci8fi.jpg", 
  "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992350/paris2_fyw1q7.jpg",
  "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992276/Dubai_criorr.jpg",
  "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992319/London_sv2cou.jpg",
];

export default function DestinationSection() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;

  const currentImages = useMemo(() => {
    if (!selectedDestination) return defaultImages;
    return destinationImages[selectedDestination] || defaultImages;
  }, [selectedDestination]);

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

      {/* Search Dropdown */}
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

      {/* Image Gallery */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-5 mt-14">
        {currentImages.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-36 h-52 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-xl transform
              ${!isMobile && (idx % 2 === 0 ? "rotate-[6deg]" : "rotate-[-6deg]")}
              hover:rotate-0 hover:scale-105 transition-all duration-300`}
          >
            <img
              src={img}
              alt="destination"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* See More Button */}
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