// MOSTRAR IMAGENES EN GRANDE

function mostrarImagenes(num) {

    imagen = document.images[num].src

    comentario = document.images[num].alt

    grande = document.images["pantalla"]

    grande.src = imagen

    texto.innerHTML = comentario

}

// -------