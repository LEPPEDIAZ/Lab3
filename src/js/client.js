//Ana lucia Diaz Leppe
//151378
const state = {
    quierover: ['h1', 'h2', 'h3'],
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
  
    const totito = document.createElement('div');
    totito.className = 'totito';
  
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nextBtn';
    nextBtn.innerHTML = 'ALL';
  
    const aceptarturno = document.createElement('button');
    aceptarturno.className = 'aceptarturno';
    aceptarturno.innerHTML = 'COMPLETED';
  
    const nuevo = document.createElement('button');
    nuevo.className = 'nuevo';
    nuevo.innerHTML = 'ACTIVE';

    const turnoContainer = document.createElement('input');
    turnoContainer.className = 'turno';
    turnoContainer.innerHTML = 'es el turno de:';
    

    const search = document.createElement('button');
    search.className = 'search';
    search.innerHTML = 'ADD';

    


    
    


  
  
    // Clear previous root content
    if (root.hasChildNodes()) {
      root.innerHTML = null;
    }
  
    // Main rendering
    root.appendChild(title);
    root.appendChild(totito);
    root.appendChild(nextBtn);
    root.appendChild(aceptarturno);
    root.appendChild(nuevo);
    root.appendChild(search);
    root.appendChild(turnoContainer);
    
  
    lightElements.forEach(
      lightElement => totito.appendChild(lightElement)
    );
  
  
    // Events
    nextBtn.onclick = () => {
      lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;
      render(lState);
    };
    aceptarturno.onclick = () => {
      lState.currentLight = (lState.currentLight) % lState.quierover.length;
      render(lState);
    };
    nuevo.onclick = () => {
      lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;
      render(lState);
    };
  }
    
  
  
  render(state);
  