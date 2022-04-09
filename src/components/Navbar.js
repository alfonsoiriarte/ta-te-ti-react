import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 top-0 shadow-xl shadow-black-900">
      <div className="flex p-5 md:p-3 flex-col md:flex-row items-center">
        <div className="text-white">
          <a href="#about" className="text-base md:text-xl">
            Alfonso Iriarte
          </a>
          <a href="#" className="text-sm ml-20 content-center">
            Ta te ti
          </a>
        </div>
      </div>
    </header>
  );
}