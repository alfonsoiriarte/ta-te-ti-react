import React from "react";

function Stats({onClick, setPuntaje, puntaje}) {
  const claseStats = "text-white font-bold text-xl py-1 px-[0.39rem]";

  return (
    <div>
      <div className="flex cursor-default justify-center mt-20 2xl:mt-20">
        <div className={`${claseStats} bg-blue-500 hover:bg-blue-700 `}>Blue score: {puntaje.O}</div>
        <div className={`${claseStats} bg-red-500 hover:bg-red-700 `}>Red score: {puntaje.X}</div>
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