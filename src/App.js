import React from "react";
import Navbar from "./components/Navbar";
import Juego from "./components/Juego";
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="h-screen text-black bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <Juego />
      <Footer/>
    </main>
  );
}