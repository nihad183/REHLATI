import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center px-5 md:px-10 py-6 bg-transparent z-50 fixed top-0 left-0">
      <h1 className="text-3xl md:text-4xl font-extrabold font-sans">
        <span className="text-black">REH</span>
        <span className="text-cyan-500">LATI</span>
      </h1>
    </nav>
  );
}
