import React from 'react';

function ButtonPlayAgain (props) {
    return (
        <div className='cursor-pointer animate-bounce font-bold text-xl w-28 mx-auto mt-12 md:mt-0'>
            <p onClick={() => props.onclick()} className="text-white rounded-xl bg-green-500 w-28 text-center px-5 p-2">
                {props.texto}
            </p>
        </div>
        
        
    );
}

export default ButtonPlayAgain;