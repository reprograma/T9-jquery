$(document).ready(function(){

    let elementoComAcao = $("#aguardandoAcao")

    $("#hideElement").click(function() {
        elementoComAcao.hide("slow")
        // elementoComAcao.hide("fast")
        // elementoComAcao.hide(10000) //milisegundos
    })

    $("#showElement").click(function() {
        elementoComAcao.show("slow")
        elementoComAcao.show("fast")
        elementoComAcao.show(10000) //milisegundos
    })

    //eventos - o que
    $("#toggleElement").click(function() {
        //efeitos - como
        elementoComAcao.toggle("slow")
        // elementoComAcao.toggle("fast")
        // elementoComAcao.toggle(10000) //milisegundos
    })

    $("input").keyup(function() {
        $(this).val()
        
        if($(this).val() == "hide") {
            elementoComAcao.hide("slow")
        }
        if($(this).val() == "show") {
            elementoComAcao.show("slow")
        }
        if($(this).val() == "toggle") {
            elementoComAcao.toggle("slow")
        }
        
    })

})