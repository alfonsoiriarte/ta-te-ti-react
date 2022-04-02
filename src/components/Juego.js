import React, {  useState, useEffect } from 'react';
import Board from './Board/Board';
import Stats from './Stats';
import ButtonPlayAgain from './Buttons/ButtonPlayAgain'

const casillasGanadoras = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

export default function Juego() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [turno, setTurno] = useState('X');
    const [finDelJuego, setFinDelJuego] = useState(1);
    const [puntaje, setPuntaje] = useState({
        X: 0,
        O: 0
    }); 

    const checkForWinner = cuadros => {
        let flagWinner = 0;

        for (var i=0; i < casillasGanadoras.length; i++) {
            const [a,b,c] = casillasGanadoras[i];
            if(cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
                endGame(cuadros[a]);
                flagWinner = 1;
                return
              }
        }

        if(!cuadros.includes(null)) {
            endGame(null, Array.from(Array(9).keys()));
            return
        }
        
        setTurno(turno === 'X' ? 'O' : 'X');
    }

    const handleClick = cuadro => {
        let newCuadros = [...cuadros];
        newCuadros[cuadro] = turno;
        setCuadros(newCuadros);        
    }

    useEffect(() => {
        checkForWinner(cuadros);
    }, [cuadros]);

    const endGame = (resultado) => {
        setTurno(null);
        if(resultado !== null) {
            setPuntaje ({
                ...puntaje,
                [resultado]: puntaje[resultado] + 1,
            })
        }
        setFinDelJuego(0);
        
    }

    const playAgain = () => {
        let newCuadros = Array(9).fill(null);
        setCuadros(newCuadros);
        setFinDelJuego(1);
    }

    return (
        <div>
            <Board turno={turno} cuadros={cuadros} onClick={handleClick} />
            <Stats puntaje={puntaje} className={finDelJuego} />
            {finDelJuego === 1 || <ButtonPlayAgain onclick={playAgain} texto="PLAY AGAIN" />}
        </div>
    )
}