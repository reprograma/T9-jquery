$(document).ready(function() {
    //evento disparado 
    $("h2").click(function() {
        //aquele elemento que 
        //está sendo afetado pelo evento
        $(this).css({
        "background-color":"black",
        "color": "white"
        })
    })
    $("h3").dblclick(function() {
        alert('fui clicado duas vezes!');
        $(this).hide("slow");
        $(this).show("slow");
    })
    $("#div").mouseenter(function() {
        alert("Você entrou em um div!")
    })
    $("#div").mouseleave(function(){
        alert("VOLTAAAAAAAAA!")
    })
    $("input").focus(function() {
        $(this).css("background-color", "red")
    })
    $("input").blur(function(){
        $(this).css("background-color", "blue")
    })
})
