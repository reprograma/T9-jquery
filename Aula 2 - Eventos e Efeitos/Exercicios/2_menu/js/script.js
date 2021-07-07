//1. faça com que o menu lateral apareça
//2. faça com que o menu lateral desapareça

//1° Resolução

$(document).ready(function(){
    $('#botaoAbrir').click(function(){
        $('menuLateral').css('display', 'block');
        $('.div-botao').css('margin-left', '250px')
    })
    $('#botaoFechar').click(function(){
        $('#menuLateral').css('display', 'none');
        $('.div-botao').css('margin-left', '0px');
    })
})

//2° Resolução
$(document).ready(function(){
    $('#botaoAbrir').click(function(){
        $('#menuLateral').toggle()
        $('.div-botao').css('margin-left', '250px')
    })

    $('#menualateral').hide()
    $('.div-botao').css('margin-left', '0px')
})