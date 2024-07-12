/* 

Un sistema web esta compuesto de 3 elementos:
CSS = Estilo (Parte visual) Separa presentación de estructura
HTML = Estructura (Jerarquia) 
JavaScript = Funcional (Interactiva) 

Selectores: Se usa en JavaScript para encontrar elementos específicos dentro de tu página web
Son las etiquetas que ayudan a identificar cada elemento

"document" sirve como un puente entre JavaScript y HTML
"Query.selector" de todos los elementos le comparto el nombre de un elemento y 
que lo traiga a este codigo y se lo atribuya a la variable titulo

Una función es un proceso que realiza una tarea
Para usar una función se pone "function", encapsula una acción que quiero que se haga

Hoisting: es como si las funciones fueran "elevados" a la cima del código.
Esto significa que puedes llamar a una función antes de que se declare en el código, 
porque JavaScript ya la "conoce" por adelantado.

Arrays o arreglos = Caja mayor para manejar una caja menor
Son similiares a una lista para efectuar operaciones de recorrido y de mutación.
En los arreglos el primer elemento siempre es la posición 0
se usan []

Buleano es es un tipo de dato que solo puede tener dos valores: 
verdadero (true) o falso (false).
Los booleanos son muy útiles para tomar decisiones. 
Por ejemplo, si quieres que un programa ejecute una acción solo si una condición es verdadera, 
puedes usar un booleano para comprobar esa condición.

Recursividad = que la funcion se llame a si misma
Hay que tener una salida, ya que puede quedarse en loop y llegara a fallar

*/

let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

console.log(intentos);
//Es para saber cual es el numero y hacer pruebas - "trampa" xd - borrar luego
console.log(numeroSecreto);

//"return" es útil para devolver valores desde las funciones, pero no es obligatorio usarlo en todas las funciones. 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
    //Ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", 'Ya se sortearon todos los numeros posibles');

    } else { 


   if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {   
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

/* 
Aplicando CamelCase: convención de nomenclatura que se utiliza 
para escribir nombres de variables, funciones y clases de código
*/

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//document.getElementById retorna una referencia al primer objeto con el valor específico del atributo ID
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`); 
    /* 
    Reemplace el codigo de abajo con "asignarTextoElemento ("p")...
    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Indica un numero del 1 al 10';
    */
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
