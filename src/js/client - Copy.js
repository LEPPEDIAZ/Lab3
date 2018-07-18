//Ana lucia Diaz 
//151378
//pinta la diagonal
const verganadordiagonal = (matriz) => {
    for(var i=0; i<3; i++){
        matriz[i][3-1-i] = 1; 
        ganadora = matriz[i][0];
    }
    for (var i=0; i<3 ; i++){
        for (var j=0; j <3 ; j++){
            (matriz[i][j]);
            ganadora = matriz[j][0]; 
        }
    }
}

//const verganadordiagonal = (matriz) => {
//    matriz.forEach(
//        (column, matriz) => {
//            diagonal(matriz);
//        }
//    )
//}

//chequea que exista un ganador en la fila respectiva
const verganadorfila = (matriz) => {
    matriz.forEach(
        (column, colIndice) => {
            columna(colIndice, matriz);
        }
    )
}
//chequea para ver que exista un ganador en la columna respectiva
const verganadorcolumna = (matriz) => {
    matriz.forEach(
        (column, filaI) => {
            fila(filaI, matriz);
        }
    )
}
//chequea para ver que exista un ganar en diagonal 
//se define el estado inicial
const EstadoInicial = (len) => {
    return ({
        arreglodelmapa: Array.from({length: len}, (x, i) => Array.from({length: len}, (y, j) => null)),
        ganadora: null,
        jugadoractual: 0
       
    });
};
const columna = (colIndice, matriz) => {
  const memoria = matriz.map((column) => {
      return column[colIndice]
  });
  console.log(memoria);

  if (memoria.reduce((a, b) => {
          return (a === b) ? a : null;
      }) !== null) {
      ganadora = memoria[0];
  }
};
const fila = (filaI, matriz) => {
    console.log(matriz[filaI]);
    if (!matriz[filaI].includes(null)) {
        if (matriz[filaI].reduce((a, b) => {
                return (a === b) ? a : null;
            }) !== null) {
            ganadora = matriz[filaI][0];
        }
    }
};


let ganadora = null;

const render = (lState) => {
    const ContenedorDeJuego = document.createElement('div');
    ContenedorDeJuego.className = 'jugador';
    ContenedorDeJuego.innerHTML = 'TURNO DE:  ';
    const totito = document.createElement('div');
    totito.className = 'Totito';
    const nuevo = document.createElement('button');
    nuevo.className= ' nuevo';
    nuevo.innerHTML = 'REINICIAR JUEGO';
    const imagendeturno = document.createElement(`img`);
    imagendeturno.src = (lState.jugadoractual) ? "../img/firstplayer.JPG": "../img/secondplayer.JPG";
    ContenedorDeJuego.appendChild(imagendeturno);
    
    

    // Propiedad para borrar
    if (root.hasChildNodes()) {
        root.innerHTML = null;
    }

    //creacion de containers
    root.appendChild(totito);
    root.appendChild(ContenedorDeJuego);
    root.appendChild(nuevo);
    

    
    lState.arreglodelmapa.forEach(
        (column, filaI) => {
            //se crea el div del tamano definido
            const rowElement = document.createElement('div');
            column.forEach(
                (col, colIndice) => {
                    //se crea el div del tablero y se definen las lineas
                    const tablero = document.createElement('div');
                    if (ganadora === null) {
                      tablero.onclick = () => {
                          //se crea la opcion de x y y, para el cambio de variables
                            if (lState.arreglodelmapa[filaI][colIndice] === null) {
                                //se define el div.o y div.x para sacar la imagen
                                tablero.classList.add((lState.jugadoractual) ? 'o' : 'x');
                                lState.arreglodelmapa[filaI][colIndice] = lState.jugadoractual;
                                lState.jugadoractual = (lState.jugadoractual === 0) ? 1 : 0;
                                render(lState); //valida el cambio de x a y 
                                verganadorfila(lState.arreglodelmapa);
                                verganadorcolumna(lState.arreglodelmapa);
                                //verganadordiagonal(lState.arreglodelmapa);

                    
                            } 
                        };
                    }
                    if (lState.arreglodelmapa[filaI][colIndice] !== null) {
                        tablero.classList.add((lState.arreglodelmapa[filaI][colIndice]) ? 'o' : 'x');
                      }
                    rowElement.appendChild(tablero);
                }
            );
            totito.appendChild(rowElement);
        }
    );
    if (ganadora!== null){
        alert ("ya han ganado el juego");
        

    }
    nuevo.onclick = () => {
        ganadora = null; 
        render(EstadoInicial(lState.arreglodelmapa.length));
        alert("SE A REINICIADO EL JUEGO");
      };
    
};
render(EstadoInicial(3));