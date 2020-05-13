// Faça com que os elementos dentro do menu aparecerem quando o mouse passar por eles
// Faça os elementos dentro do menu desaparecerem quando o mouse não passar por eles

$(document).ready(function(){

    $('li').hover(function(){

        $(this).find('.menu2').slideToggle();
    })
})