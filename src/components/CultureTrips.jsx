import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CultureTrips() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroimg ="https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992254/culture1_khdq4o.jpg";
  const images = [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992254/culture1_khdq4o.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992269/culture7_ve7lqm.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992263/culture2_qepmak.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992260/culture8_lgxadp.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992270/culture3_p0i2pr.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992263/culture9_wszp7r.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992255/culture4_vpxsad.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992277/culture10_gcxz5c.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992253/culture5_ye3oc7.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992281/culture11_jnktmc.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992262/culture6_iup0tr.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992465/culture12_kncvug.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src={heroimg}
          className="absolute w-full h-full object-cover brightness-50"
          alt=""
          loading="lazy"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-yellow-200 hover:bg-yellow-300 text-[#3B2B1F] px-4 py-2 rounded-full font-bold shadow-lg transition flex items-center gap-2 z-30"
        >
          ← Back
        </button>
        <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold tracking-widest text-yellow-200">
          CULTURE TRIPS
        </h1>
      </section>

      {/* ===== PINTEREST / MASONRY GALLERY ===== */}
      <section className="max-w-7xl mx-auto px-3 py-10">
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`culture-${index}`}
                loading="lazy" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEXT ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed tracking-wide font-serif">
          Discover the rich cultural heritage of different destinations.
          Explore traditions, historical landmarks, arts, and cuisine.
          Every trip is a deep cultural immersion.
        </p>
      </section>

      {/* ===== DETAILS & BOOKING ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Details Box */}
        <div className="bg-[#3B2B1F] p-8 rounded-2xl shadow-2xl flex-1 text-white">
          <h3 className="text-3xl font-bold mb-4 font-serif">Trip Details</h3>
          <ul className="list-disc list-inside space-y-2 text-lg font-serif">
            <li>Destination: Historical Cities & Villages</li>
            <li>Best Season: Year-round</li>
            <li>Duration: 5-8 days</li>
            <li>Price: $1500+</li>
            <li>Included: Accommodation, Guided Tours, Cultural Activities</li>
          </ul>
        </div>

        {/* Booking Button */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-gray-800 text-lg font-serif mb-4">Ready to explore culture?</p>
          <button
            onClick={() => alert("Redirect to booking page")}
            className="bg-yellow-200 hover:bg-yellow-300 text-[#3B2B1F] px-10 py-4 rounded-full font-serif font-bold text-lg shadow-lg transition flex items-center gap-3"
          >
            Book Your Trip
            <span className="text-2xl animate-bounce">→</span>
          </button>
        </div>

      </section>

    </div>
  );
}