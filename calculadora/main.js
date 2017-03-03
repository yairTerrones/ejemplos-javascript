
var btnPress = ""
var anterior =""

function agregaApantalla(){
    var contenedor = document.getElementById('textoEnPantalla')
    contenedor.textContent = btnPress + anterior
    anterior = contenedor.textContent
}

//Nueve
btnPress ='9'
var btnNueve = document.getElementById('nueve')
btnNueve.onclick = function () {
    agregaApantalla()
}
//Ocho
btnPress ='8'
var btnOcho = document.getElementById('ocho')
btnOcho.addEventListener('click',agregaApantalla)
//Siete
btnPress ='7'
var btnSiete = document.getElementById('siete')
btnSiete.addEventListener('click',agregaApantalla)
//Mas
btnPress ='+'
var btnMas = document.getElementById('mas')
btnSiete.addEventListener('click',agregaApantalla)