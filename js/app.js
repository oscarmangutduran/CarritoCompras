// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];


// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

}

// Funciones

function agregarCurso(evt) {
     evt.preventDefault();
     
     if(evt.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = evt.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
     }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    //console.log(curso)

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src, 
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


//Agrega elementos al array del carrito
articulosCarrito = [...articulosCarrito, infoCurso];


console.log(articulosCarrito);

carritoHTML();


}

//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    LimpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML= `
            <td>
                ${curso.titulo}
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);

    })
}

//Elimina los cursos del tbody
function LimpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}