let intentos = 6;
let dictionary = "APPLE"
let API = "https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase"

fetch(API).then(response => response.json())
.then(response => {
  palabra = response[0]
  console.log(response)
})

const button = document.getElementById("guess-button")
button.addEventListener("click", intentar)


// COMPARA PALABRA INGRESADA EN MAYUSCULAS CON PALABRAS DECLARADAS
function intentar(){
  const INTENTO = leerIntento()

  if (INTENTO === palabra) {
    terminar("<h1>GANASTE!😀</h1>")
    return
  } 

  if (intentos==0){
    terminar("<h1>PERDISTE!😖</h1>")
}

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
      
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
}

// RETORNA PALABRAS INGRESADAS EN MAYUSCULAS
function leerIntento() {
  let intento = document.getElementById("guess-input")
  intento = intento.value;
  intento = intento.toUpperCase()
  return intento
}

// DESHABILITA CONTROLES DEL JUEGO
function terminar(mensaje){
  const INPUT = document.getElementById("guess-input");
  const BOTON = document.getElementById("guess-button");
  const REFRESH  = document.getElementById('refresh')
  REFRESH.style.display="block"
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
  REFRESH.addEventListener('click', _ => {
    location.reload();
})
}

