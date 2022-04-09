import React from "react";

function Stats({onClick, setPuntaje, puntaje}) {

  return (
    <div>
      <div className="flex cursor-default justify-center mt-20 2xl:mt-20">
        <div className="text-white font-bold text-xl p-1 w-32 bg-blue-500 hover:bg-blue-700" >Blue: {puntaje.O}</div>
        <div className="text-white font-bold text-xl p-1 w-32 bg-red-500 hover:bg-red-700" >Red: {puntaje.X}</div>
      </div>
      <div className="flex justify-center">
        <div onClick={() => {
          onClick()
          setPuntaje ({
            X: 0,
            O: 0
        })
        }} className="flex justify-center font-bold w-64 cursor-pointer bg-green-400 text-white text-2xl border-green-500 hover:bg-green-500 border-b-4 p-1">RESET SCORE</div>
      </div>
    </div>
    
  );
}

export default Stats;