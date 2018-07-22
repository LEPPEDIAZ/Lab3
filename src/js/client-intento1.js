//Ana lucia Diaz Leppe
//151378
let winner = null;
const solicitud =
fetch ( 'https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json' );
solicitud
. then (resultado => resultado . json ())
. then (resultadoJSON => console . log ( "Tarea" ,
resultadoJSON [ 1 ].title))
. catch (error => console . log ( "error" , error ));

const state = {

  quierover: ['h1', 'h2', 'h3','h4','h5', 'h6'],

  currentLight: 0,

};

const buildInitialState = (len) => {

  return ({

      statusMap: Array.from({length: len}, (x, i) => Array.from({length: len}, (y, j) => null)),

      currentPlayer: 0,

      winner: null

  });

};

const render = lState => {

  const title = document.createElement('h1');

  title.innerHTML = 'TAREAS';



  const nextBtn = document.createElement('button');

  nextBtn.className = 'nextBtn';

  nextBtn.innerHTML = 'ALL';



  const aceptarturno = document.createElement('button');

  aceptarturno.className = 'aceptarturno';

  aceptarturno.innerHTML = 'COMPLETED';



  const nuevo = document.createElement('button');

  nuevo.className = 'nuevo';

  nuevo.innerHTML = 'ACTIVE';


  const search = document.createElement('button');

  search.className = 'search';

  search.innerHTML = 'Agregar nueva tarea';



  const totito = document.createElement('div');

  totito.className = 'totito';

  const turnoContainer = document.createElement('input');

  turnoContainer.className = 'turnoContainer';
  


  const next = document.createElement('button');

  next.className = 'next';

  next.innerHTML = 'presionar para escoger casilla';




  // Clear previous root content

  if (root.hasChildNodes()) {

    root.innerHTML = null;

  }

  // creacion de containers

  root.appendChild(title);

  root.appendChild(nextBtn);

  root.appendChild(aceptarturno);

  root.appendChild(nuevo);

  root.appendChild(next);

  root.appendChild(totito);

  //root.appendChild(turnoContainer);

  //root.appendChild(search);

  



  const lightElements = lState.quierover.map(

    (lightColor, i, j) => {

      const lightElement = document.createElement('ul');

      lightElement.className = `light ${lightColor}`;
      const tablero = document.createElement('div');
      if (winner === null){
        lightElement.onclick = () => {
          lightElement.classList.add((lState.currentPlayer) ? 'o' : 'x');
          lState.currentPlayer = (lState.currentPlayer === 0) ? 1 : 0;
          render(lState);
        }
      }


  

      if (i === lState.currentLight) {

        lightElement.classList.add('on');
      
      }

      return lightElement;

    }

  );



  



  lightElements.forEach(

    lightElement => totito.appendChild(lightElement)

  );


  // Events

  nextBtn.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };
  search.onclick = () => {
    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;
    addItem();
    myFunction();
    //const texto = prompt('Esciba lo que desea enviar al sistema');
    render(lState);
  };

  aceptarturno.onclick = () => {

    render(lState);

  };

  nuevo.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };
  next.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };



}

  





render(state);
  