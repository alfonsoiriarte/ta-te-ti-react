import React from "react";

function Stats(props) {
  const claseStats = "text-white font-bold text-xl py-1 px-2 md:rounded shadow-lg shadow-slate-500";

  return (
    <div className="flex cursor-default md:space-x-60 justify-center mx-10 mt-12 md:mt-4 2xl:mt-20">
      <div className={`${claseStats} bg-blue-500 hover:bg-blue-700 `}>Blue score: {props.puntaje.O}</div>
      <div className={`${claseStats} bg-red-500 hover:bg-red-700 `}>Red score: {props.puntaje.X}</div>
    </div>
  );
}

export default Stats;