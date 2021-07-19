// Reproductor Streaming
$('#opcion1 , #opcion2').click(function() {

    Swal.fire({
        title: 'MUSICA LIBRE',
        imageUrl: 'img/musica-libre-80.jpg',
        html: '<p>Suscripción Mensual</p>' +
            '<br> musica libre<br>' +
            'CLP $9.900 + $80000' +
            '<h5>LIBRE DE PAGO DE DERECHOS DE AUTOR</h5>',

        footer: '<img class = "logo-webpayplusS"src="img/webpay-logo.png">',
        backdrop: true,
        showCloseButton: true,

        confirmButtonText: '<a  class= "Ircomprarbtn" href="prueba.html">Ir al pago</a>'


    })


});