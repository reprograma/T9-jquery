//1. Faça com que os elementos dentro do menu aparecem quando o mouse passar por eles.
//2. Os elementos devem desaparecer quando o mouse não estiver passando por eles

$(document).ready(function(){
    //1ª resolução - utilizando o evento de Hover
    $('li').hover(function(){
        //this => qualquer elemento li que foi clicado. 
        //find() => método que busca dentro do elemento selecionado a classe indicada
        $(this).find('.menu2').slideDown();
    },
    function(){
        $(this).find('.menu2').slideUp();
    });

    //1ª resolução - Utilizando o evento de Click
    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        //siblings => os parentes do elemento li clicado
        $(this).siblings().find('.menu2').slideUp();
    })
});