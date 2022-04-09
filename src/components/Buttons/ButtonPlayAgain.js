import React from 'react';

function ButtonPlayAgain ({ onClick, finDelJuego }) {
        
    return (
        <div onClick={() => onClick()} className={`flex items-center space-x-2 absolute left-1/2 translate-x-[-50%] ${finDelJuego === 0 ? 'mt-[1rem] md:mt-[1rem]' : 'mt-[-900px]'} cursor-pointer text-white text-xl p-2 transition-all ease-in-out duration-500 outline outline-white outline-1 hover:text-xl hover:outline-offset-8 hover:outline-transparent`}>
            <svg xmlns="http://www.w3.org/2000/svg" className='flex h-6 w-6 rounded-3xl animate-spin-slow transition-all duration-300' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <p>
                Play Again
            </p> 
        </div>
        
        
    );
}

export default ButtonPlayAgain;