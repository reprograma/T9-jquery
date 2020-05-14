$(document).ready(function(){

    $("button").click(function(){
        $("#div1").fadeIn(5000); //nascer do sol
        $("#div2").fadeOut(5000); //pôr do sol
        $("#div3").fadeToggle(2000); //os dois
    })

})