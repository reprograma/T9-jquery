/*
  OK 1. Mude o estilo do body para que a font-family seja "Arial, sans-serif" 

  OK 2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  OK 3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

  OK 4. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo

  OK 5. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
  
  OK 6. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/

$(document).ready(function() {
  
  //2.
  let nickname = "Bru"
  let cidade = "São Paulo"
  let favoritos = "Os Miseráveis, Mulan"
  //3.
  let favDoMomento = "Parasita"

  //1.
  $("body").css("font-family", "Arial, sans-serif")

  //2.
  $("#nickname").text(nickname)
  $("#cidade").text(cidade)
  //o método text() pode receber mais de um argumento/parâmetro
  $("#favoritos").text([favoritos, favDoMomento])

  $("h1")
    .text("Sobre mim")
    .addClass("titulo")


  //addClass() adiciona uma classe CSS no elemento selecionado. O nome da 
  //classe é passado como parâmetro
  $("li").addClass("list")
  $("span").addClass("item-list")

  //resolução 1

  //removeClass() adiciona uma classe CSS no elemento selecionado. O nome da 
  //classe é passado como parâmetro
  $("li").removeClass("wrongClass")

  //resolução 2
  $("li").eq(0).removeClass("wrongClass")

})