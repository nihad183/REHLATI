// src/components/HomePage.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import BookingSection from "./BookingSection";
import DestinationSection from "./DestinationSection";
import VacationPlan from "./VacationPlan";
import ExploreMore from "./ExploreMore";
import Footer from "./footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookingSection />
      <DestinationSection />
      <VacationPlan/>
      <ExploreMore />
      <Footer/>
    </div>
  );
}
