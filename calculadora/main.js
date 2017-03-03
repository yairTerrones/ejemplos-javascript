
function agregaApantalla(unaTecla){
    //Paso 1: Crear el nuevo elemento ( createElement() )
    var elementoNuevo = document.createElement('p')
    //paso 2: Crear el contenido( createTextNode() )
    var nodoContenido = document.createTextNode(unaTecla)
    //Paso 3: Añadir el contenido al documento ( appendChild() )
    elementoNuevo.appendChild(nodoContenido)
    //Paso 4: Agregar atributos al elemento ( setAttribute() )
    elementoNuevo.setAttribute('class')
    //Paso 5: Agregar el elemento a documento ( appendChild() )
    var contenedor = document.getElementById('contenedor')
    contenedor.appendChild(elementoNuevo)//aqui obtenemos la section
}

var nueve = document.getElementById('nueve')
btnSaluda.onclick = agregaApantalla('nueve')