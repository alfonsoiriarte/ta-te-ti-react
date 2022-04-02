import React from 'react';

function ButtonPlayAgain ({ texto, onClick}) {
    return (
        <div className='cursor-pointer shadow-2xl font-bold text-xl w-28 mx-auto mt-12 md:mt-0 transition ease-in-ou hover:-translate-y-1 hover:scale-110 duration-400'>
            <p onClick={() => onClick()} className="text-white rounded-xl bg-green-500 w-28 text-center px-5 p-2">
                {texto}
            </p>
        </div>
        
        
    );
}

export default ButtonPlayAgain;