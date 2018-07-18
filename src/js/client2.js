const state = {
    lights: ['red', 'yellow', 'green','red1', 'yellow1', 'green1','red2', 'yellow2', 'green2','seleccionado'],
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
    title.innerHTML = 'TOTITO';
  
    const totito = document.createElement('div');
    totito.className = 'totito';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nextBtn';
    nextBtn.innerHTML = 'siguiente posicion';
  
    const aceptarturno = document.createElement('button');
    aceptarturno.className = 'aceptarturno';
    aceptarturno.innerHTML = 'seleccionar';
  
    const nuevo = document.createElement('button');
    nuevo.className = 'nuevo';
    nuevo.innerHTML = 'siguiente turno';

          
  
   

  
  
    // Clear previous root content
    if (root.hasChildNodes()) {
      root.innerHTML = null;
    }
  
    // Main rendering
    root.appendChild(title);
    root.appendChild(totito);
    rott.appendChild(addmas);
    root.appendChild(nextBtn);
    root.appendChild(aceptarturno);
    root.appendChild(nuevo);
 
  
    const lightElements = lState.lights.map(
      (lightColor, i, j) => {
        const lightElement = document.createElement('div');
        lightElement.className = `light ${lightColor}`;
  
        if (i === lState.currentLight) {
          lightElement.classList.add('on');
          
        }
        
        //if (i !== j) {
        //  lightElement.classList.add('off');
        //  if (j === lState.currentLight) {
        //    lightElement.classList.add('off');
        //  }
        //}
       
      
      
  
        return lightElement;
      }
    );
  
    
  
    
   
  
   
  
    lightElements.forEach(
      lightElement => totito.appendChild(lightElement)
    );
  
  
    // Events
    nextBtn.onclick = () => {
      lState.currentLight = (lState.currentLight + 1) % lState.lights.length;
      render(lState);
    };
    aceptarturno.onclick = () => {
      lState.currentLight = (lState.currentLight) % lState.lights.length;
      render(lState);
    };
    nuevo.onclick = () => {
      lState.currentLight = (lState.currentLight + 1) % lState.lights.length;
      render(lState);
    };

  }
    
  
  
  render(state);
  