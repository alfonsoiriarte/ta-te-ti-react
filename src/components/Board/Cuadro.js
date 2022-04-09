import React, { useState } from 'react';

function Cuadro ({ turno, value, onClick}) {
    const [item, setItem] = useState('./cruz.png');

    const handleClick = () => {
    (turno !== null && value === null) && onClick();
    turno == 'X' ? setItem('./cruz.png') : setItem('./circulo.png');
    }

    return (
        <div onClick={() => handleClick()} className='flex-item rounded-full shadow-2xl bg-white w-20 h-20 sm:w-20 sm:h-20 md:h-24 md:w-24 2xl:w-32 2xl:h-32 m-2 text-center select-none'>
            {value === null ? '' : <img className='flex h-12 md:h-16 2xl:h-20 m-auto mt-4 md:mt-4 2xl:mt-6' src={item} alt="cruz" />}
        </div>
    )

}


export default Cuadro;