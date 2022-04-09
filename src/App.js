import React from "react";
import Navbar from "./components/Navbar";
import Juego from "./components/Juego";
import Footer from './components/Footer';

export default function App() {
  const [grandientColor, setGradientColor] = React.useState('bg-gradient-to-r from-blue-500 to-red-500')

  const handlerGradient = puntaje => {
    puntaje.X > puntaje.O ? setGradientColor('bg-gradient-to-r from-red-300 to-red-700') : setGradientColor('bg-gradient-to-r from-cyan-500 to-blue-500');
    puntaje.X === puntaje.O && setGradientColor('bg-gradient-to-r from-blue-500 to-red-500');

  }

  return (
    <main className={`h-screen text-black ${grandientColor}`}>
      <Navbar />
      <Juego handlerGradient={handlerGradient} />
      <Footer/>
    </main>
  );
}