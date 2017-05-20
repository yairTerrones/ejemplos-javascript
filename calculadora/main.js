var contenido;

function agregaApantalla(unBoton){
    console.log(unBoton)
    var contenedor = document.getElementById('textoEnPantalla');
    contenedor.textContent = contenedor.textContent + unBoton
}

//Igual
BtnIgual = document.getElementById('igual');
BtnIgual.addEventListener('click', function(){ 
    //Interaccion con php.
    contenido = document.getElementById('textoEnPantalla');
});

//Nueve
BtnNueve = document.getElementById('nueve');
BtnNueve.addEventListener('click', function(){ 
    agregaApantalla('9');
});

//Ocho
BtnOcho = document.getElementById('ocho');
BtnOcho.addEventListener('click', function(){ 
    agregaApantalla('8');
});

//Siete
BtnSiete = document.getElementById('siete');
BtnSiete.addEventListener('click', function(){ 
    agregaApantalla('7');
});

//Seis
BtnSeis = document.getElementById('seis');
BtnSeis.addEventListener('click', function(){ 
    agregaApantalla('6');
});

//Cinco
BtnCinco = document.getElementById('cinco');
BtnCinco.addEventListener('click', function(){ 
    agregaApantalla('5');
});

//Cuatro
BtnCuatro = document.getElementById('cuatro');
BtnCuatro.addEventListener('click', function(){ 
    agregaApantalla('4');
});

//Tres
BtnTres = document.getElementById('tres');
BtnTres.addEventListener('click', function(){ 
    agregaApantalla('3');
});

//Dos
BtnDos = document.getElementById('dos');
BtnDos.addEventListener('click', function(){ 
    agregaApantalla('2');
});

//Uno
BtnUno = document.getElementById('uno');
BtnUno.addEventListener('click', function(){ 
    agregaApantalla('1');
});

//Cero
BtnCero = document.getElementById('cero');
BtnCero.addEventListener('click', function(){ 
    agregaApantalla('0');
});

//Mas
BtnMas = document.getElementById('mas');
BtnMas.addEventListener('click', function(){ 
    agregaApantalla('+');
});

//Menos
BtnMenos = document.getElementById('menos');
BtnMenos.addEventListener('click', function(){ 
    agregaApantalla('-');
});

//Asterisco
BtnAsterisco = document.getElementById('asterisco');
BtnAsterisco.addEventListener('click', function(){ 
    agregaApantalla('*');
});

//Parentesis Abre
BtnParAbre = document.getElementById('parAbr');
BtnParAbre.addEventListener('click', function(){ 
    agregaApantalla('(');
});

//Parentesis que cierra.
BtnParCierr = document.getElementById('parCierr');
BtnParCierr.addEventListener('click', function(){ 
    agregaApantalla(')');
});

//Slash
BtnSlash = document.getElementById('slash');
BtnSlash.addEventListener('click', function(){ 
    agregaApantalla('/');
});