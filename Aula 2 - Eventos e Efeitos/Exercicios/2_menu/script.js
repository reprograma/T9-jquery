// 1. Faça com que o menu lateral apareça
// 2. Faça com que o menu lateral desapareça


//1ª resolução - Utilizando apenas modificações no CSS

$(document).ready(function(){
    $("#botaoAbrir").click(function() {
        $("#menulateral").css("display", "block");
        //"afasta" visualmente os elementos da div para 
        //longe do menu
        $(".div-botao").css("margin-left", "250px")
    })
    $("#botaoFechar").click(function() {
        $("#menulateral").css("display", "none");
        $(".div-botao").css("margin-left", "0px")
    })
})

//2ª resolução - Utilizando efeitos de aparecer/desaparecer
$("#botaoAbrir").click(function(){
    $("#menulateral").toggle()
    $(".div-botao").css("margin-left", "250px")
})

$("#botaoFechar").click(function(){
    $("#menulateral").hide()
    $(".div-botao").css("margin-left", "0px")
})