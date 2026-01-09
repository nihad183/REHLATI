import React from "react";
import { useNavigate } from "react-router-dom";
import { offers } from "../data/offersData";

export default function SpecialOffers() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[86vh] flex items-center justify-center text-center">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 bg-black/50 text-white px-4 py-2 rounded hover:bg-black transition"
        >
          ← Back
        </button>
        <img
          src={offers[0].promo}
          alt="promo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Special Travel Offers
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto text-lg">
            Explore our top destinations with exclusive discounts.
          </p>
        </div>
      </section>

      {/* ===== OFFERS GRID ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Limited Time Deals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition min-h-[520px] flex flex-col"
              >
                <div className="relative">
                  <img
                    src={offer.images[0]}
                    alt={offer.title}
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    {offer.discount}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-xl mb-2">{offer.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{offer.duration}</p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="line-through text-gray-400">{offer.oldPrice}</span>
                    <span className="text-cyan-500 font-bold text-2xl">{offer.newPrice}</span>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button className="w-1/2 bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition">
                      Book Now
                    </button>
                    <button
                      onClick={() => navigate(`/offers/${offer.id}`)}
                      className="w-1/2 border border-cyan-500 text-cyan-500 py-2 rounded hover:bg-cyan-500 hover:text-white transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
