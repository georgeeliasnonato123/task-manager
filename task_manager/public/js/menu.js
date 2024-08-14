 //função para mostrar o menu na tela mobile
 $(document).ready(function() {
    $('#mobile-menu-button').click(function() {
        $('nav').toggleClass('hidden');
    });
});
// Oculta as notificações após 5 segundos
$(document).ready(function() {
    setTimeout(function() {
        $('#sucess-not').fadeOut('slow');
    }, 5000);

    setTimeout(function() {
        $('#error-not').fadeOut('slow');
    }, 5000);
});


