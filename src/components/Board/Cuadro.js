import React, { useState } from 'react';

function Cuadro (props) {
    const [color, setColor] = useState('text-red-600')

    const handleClick = () => {
    (props.turno !== null && props.value === null) && props.onClick();
    console.log(props.color)
    props.turno == 'X' ? setColor('text-red-600') : setColor('text-blue-600');
    }

    return (
        <div onClick={() => handleClick()} className='flex-item rounded-full bg-white w-20 h-20 sm:w-20 sm:h-20 md:h-24 md:w-24 2xl:w-32 2xl:h-32 m-3 text-center select-none'>
            <p className={`mt-2 md:mt-2 2xl:mt-3 text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl ${color}`}>{props.value}</p>
        </div>
    )

}


export default Cuadro;