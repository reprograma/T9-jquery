$(document).ready(function(){

    $("#flip").click(function(){
        $("#painel").slideToggle("fast"); // up e down// cima e baixo
    })

    //fazer o elemento aparecer efeito em slide de cima para baixo
    $("#button").click(function(){
        $(".div1").slideDown(6000)
        $(".div2").slideDown(3000)
        $(".div3").slideDown(4000)
    })

    //Fazer um elemento desaparecer de baixo para cima
    $("#button-run").click(function(){
        $(".div1").slideUp(6000)
        $(".div2").slideUp(3000)
        $(".div3").slideUp(4000)
    })
})