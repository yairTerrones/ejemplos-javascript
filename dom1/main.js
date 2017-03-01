var cajas = document.getElementsByTagName('div')
//var cajas = document.getElementsByClassName('div')//para una caja.
cajas[0].textContent = 'Hola mundo'
cajas[1].innerHTML = '<b>Hola JavaScript</b>'

//no se recomeinda agrgar elementos con el metodo write()
//document.write('<div class ="caja">Nuevo elemento</div>')

//5 Pasos para agregar elementos al DOM
//Paso 1: Crear el nuevo elemento ( createElement() )
var elementoNuevo = document.createElement('div')

//paso 2: Crear el contenido( createTextNode() )
var nodoContenido = document.createTextNode('Nuevo elemento')

//Paso 3: Añadir el contenido al documento ( appendChild() )
elementoNuevo.appendChild(nodoContenido)

//Paso 4: Agregar atributos al elemento ( setAttribute() )
elementoNuevo.setAttribute('class','caja colorCoral')

//Paso 5: Agregar el elemento a documento ( appendChild() )

//Agrega el elemento al final.
//var contenedor = document.getElementById('contenedor')
//document.appendChild(elementoNuevo)//asi no lo mete al section
//contenedor.appendChild(elementoNuevo)//aqui obtenemos la section 
//--------------------------------------------------------------

//Agrega el nuevo elemnto al inicio.
//var contenedor = document.getElementById('contenedor')
//var primera = document.getElementById('primera')
//contenedor.insertBefore(elementoNuevo,primera)

//Agrega el nuevo elemnto en la posicion 2.
var contenedor = document.getElementById('contenedor')
var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo,segunda)

//Eliminar la caja con el id="tercera"
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)