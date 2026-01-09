// src/data/offersData.js
import SouthAfrica from "../assets/SouthAfrica.jpg";
import SouthAfrica1 from "../assets/SouthAfrica1.jpg";
import SouthAfrica2 from "../assets/SouthAfrica2.jpg";
import SouthAfrica3 from "../assets/SouthAfrica3.jpg";
import SouthAfrica4 from "../assets/SouthAfrica4.jpg";
import SouthAfrica5 from "../assets/SouthAfrica5.jpg";

import id from "../assets/id.jpg";
import id1 from "../assets/id1.jpg";
import id2 from "../assets/id2.jpg";
import id3 from "../assets/id3.jpg";
import id4 from "../assets/id4.jpg";
import id5 from "../assets/id5.jpg";

import mt from "../assets/mt.jpg";
import mt1 from "../assets/mt1.jpg";
import mt2 from "../assets/mt2.jpg";
import mt3 from "../assets/mt3.jpg";
import mt4 from "../assets/mt4.jpg";
import mt5 from "../assets/mt5.jpg";

export const offers = [
  {
    id: 1,
    country: "South Africa",
    title: "Safari & Luxury Stay",
    hotel: "Kruger Park Lodge",
    location: "Kruger National Park – South Africa",
    promo: SouthAfrica,
    images: [SouthAfrica, SouthAfrica1, SouthAfrica2, SouthAfrica3, SouthAfrica4, SouthAfrica5],
    duration: "6 Days • 5 Nights",
    oldPrice: "$2500",
    newPrice: "$1800",
    discount: "-28%",
    activities: ["Safari Game Drives", "Sunset Photography", "Bush Walks"],
    places: ["Kruger National Park", "Blyde River Canyon"],
    food: { breakfast: true, lunch: true, dinner: true },
  },
  {
    id: 2,
    country: "Indonesia",
    title: "Tropical Adventure",
    hotel: "Bali Beach Resort",
    location: "Bali – Indonesia",
    promo: id,
    images: [id, id1, id2, id3, id4, id5],
    duration: "7 Days • 6 Nights",
    oldPrice: "$2200",
    newPrice: "$1650",
    discount: "-25%",
    activities: ["Snorkeling", "Temple Tours", "Balinese Dance Night"],
    places: ["Ubud", "Tanah Lot Temple", "Mount Batur"],
    food: { breakfast: true, lunch: false, dinner: true },
  },
  {
    id: 3,
    country: "Malta",
    title: "Historical Escape",
    hotel: "Valletta Heritage Hotel",
    location: "Valletta – Malta",
    promo: mt,
    images: [mt, mt1, mt2, mt3, mt4, mt5],
    duration: "5 Days • 4 Nights",
    oldPrice: "$1800",
    newPrice: "$1350",
    discount: "-25%",
    activities: ["City Tours", "Harbor Cruise", "Historical Museums"],
    places: ["Valletta", "Mdina", "Blue Lagoon"],
    food: { breakfast: true, lunch: false, dinner: false },
  },
];
