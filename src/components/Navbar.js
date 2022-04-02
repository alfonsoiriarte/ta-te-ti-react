import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="text-xl">
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