$(document).ready(function(){

    $('#flip').click(function(){
        $('#painel').slideToggle('fast');
    })

    $('#button').click(function(){
        $('.div1').slideDown(6000)
        $('.div2').slideDown(3000)
        $('.div3').slideDown(4000)
    })

    $('#button-run').click(funtion(){
        $('.div1').slideUp(6000);
        $('.div2').slideUp(3000);
        $('.div3').slideUp(4000);
    })
})