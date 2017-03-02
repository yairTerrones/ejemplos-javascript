function saludar() {
    alert('Hola como estas??')
}

function saludar2() {
    alert('Hola como estas??')
}

var btnSaluda = document.getElementById('btn-saluda')
btnSaluda.onclick = saludar


var btnSaluda2 = document.getElementById('btn-saluda-v2')
 btnSaluda2.addEventListener('click',saludar)