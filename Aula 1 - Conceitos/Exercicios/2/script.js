/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

//jquery

$(document).ready(function() {

  //coloco o meu elemento 'body' em uma variável
  const bodyColor = $('body')
  //a cor do fundo do meu body será a base para a validação 
  //da mudança de ligado para desligado. Por isso, eu determino
  //um valor inicial para ele antes da minha condição.
  //Nesse caso, determinei que meu background começasse com a cor amarela.
  bodyColor.css('background', 'yellow')

  function changeBg() {
    //condição de mudança
    //se o meu background for amarelo
    if(bodyColor[0].style.background == 'yellow') {
      $('body').css('background', 'black');
      $('h1')
        .css('color', 'white')
        .text('Desligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/N4a7e1ftdbQWc/giphy.gif" )
    } else {
      //se o meu background não for amarelo, ou seja, ele recebeu
      //outras cores e comandos, atrelados a situação de "desligado"
      $('body').css('background', 'yellow');
      $('h1')
        .css('color', 'black')
        .text('Ligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif" )

    }
  }

//chamo a função changeBg() em um evento de click do meu botão
$('#botao').click(function() {
    changeBg()
})

//outra solução:

//passo minha função changeBg como parâmetro para a minha função de click no botão
$('#botao').click(changeBg)

})