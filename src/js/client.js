//Ana lucia Diaz 
//151378
//pinta la diagonal


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
  const title = document.createElement('h1');

  title.innerHTML = 'TAREAS';

  const nextBtn = document.createElement('button');

  nextBtn.className = 'nextBtn';

  nextBtn.innerHTML = 'ALL';

  const aceptarturno = document.createElement('button');

  aceptarturno.className = 'aceptarturno';

  aceptarturno.innerHTML = 'COMPLETED';


  const aceptar = document.createElement('button');

  aceptar.className = 'aceptar';

  aceptar.innerHTML = 'ACTIVE';
 

  const ContenedorDeJuego = document.createElement('div');
  
  const totito = document.createElement('div');
  totito.className = 'Totito';
  const nuevo = document.createElement('button');
  nuevo.className= ' nuevo';
  nuevo.innerHTML = 'REINICIAR JUEGO';

  

  // Propiedad para borrar
  if (root.hasChildNodes()) {
      root.innerHTML = null;
  }

  //creacion de containers
  root.appendChild(title);
  root.appendChild(nextBtn);
  root.appendChild(aceptarturno);
  root.appendChild(aceptar);
  root.appendChild(totito);
  
  
  

  
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
                              //verganadorfila(lState.arreglodelmapa);
                              //verganadorcolumna(lState.arreglodelmapa);
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

  nuevo.onclick = () => {
      ganadora = null; 
      render(EstadoInicial(lState.arreglodelmapa.length));
      alert("SE A REINICIADO EL JUEGO");
    };
  
};
render(EstadoInicial(2));
  