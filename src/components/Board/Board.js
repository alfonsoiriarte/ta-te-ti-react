import React, { useState } from 'react';
import Cuadro from './Cuadro'

function Board (props){
    
    const cuadroCreator = values => (
        values.map(value => (
            <Cuadro 
                color={props.turno === 'X' ? 'red' : 'blue'}
                turno={props.turno}
                onClick={() => props.onClick(value)}
                value={props.cuadros[value]}
                key={`square_${value}`}
            />
        ))
    );

    return( 
        <div className='flex flex-col md:h-full aling-center mt-4 sm:mt-8 md:mt-4 2xl:mt-24'>
            <div className='flex justify-center'>
                {cuadroCreator([0,1,2])}
            </div>
            <div className='flex justify-center'>
                {cuadroCreator([3,4,5])}
            </div>
            <div className='flex justify-center'>
                {cuadroCreator([6,7,8])}
            </div>
        </div>
    )
}

export default Board;
