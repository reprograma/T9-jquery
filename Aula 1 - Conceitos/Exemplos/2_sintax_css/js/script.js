$(document).ready(function () {
    $('h1').css('color', '#f66')
    $('h1').hide()
    $('h1').delay('3000') //2000ms =2s
    $('h1').fadeIn('slow')
    $('h1').text('Surpresa')

//encadeamento de bloco
$('h1')
.css('color', '#f66')
.hide()
.delay('3000') //2000ms =2s
.fadeIn('slow')
.text('Surpresa')


//chamado pela classe
$('.item1').click(function() {
    $('body').css('background','blue')
    $('h1').css('color', '#fff')
});

//objeto
$('li').css({
    color:'red',
    display: 'flex',
    padding: '20px',
})

$('#item2').css('color','yellow')

// O * chama todos os elementos de uma vez (* é uma TAG UNIVERSAL)
//https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
$('*').css('margin-left', '200px')

$('h1, #item2, .item1').css('border-bottom','3px solid blue')

//exemplos css de parentesco
// $('div > p')
// $()

})
