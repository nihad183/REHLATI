import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DestinationGallery from "./components/DestinationGallery";
import AboutUs from "./components/AboutUs";
import Safari from "./components/Safarii";
import CultureTrips from "./components/CultureTrips";
import TropicalAdventure from "./components/TropicalAdventure";
import SpecialOffers from "./components/SpecialOffers";
import OfferDetails from "./components/OfferDetails";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/:name" element={<DestinationGallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/safarii" element={<Safari />} />
        <Route path="/CultureTrips" element={<CultureTrips />} />
        <Route path="/TropicalAdventure" element={<TropicalAdventure />} />
        <Route path="/offers" element={<SpecialOffers />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
      </Routes>
    </HashRouter>
  );
}
