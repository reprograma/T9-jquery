// BY KAREN GRIGORYAN

/*
    Instruções

    1. Animar os elementos do menu lateral de modo que quando cada um dos links for clicado,
    o scroll acontecerá de forma lenta, direcionado o scroll para o heading correspondente 
        ex. se eu clicar no link 3, o scroll deve me direcionar para o heading 3

    2. Criar o botão de scroll até o topo da página. Lembrando que esse botão só deve aparecer 
    a partir do momento que o scroll começou a ir para baixo. 

    //Extra: fazerem o máximo de efeitos e eventos possível! 

*/

$(document).ready(function () {
  /*************************
    MENU DA ESQUERDA COM SCROLL ANIMADO 
    ***********************/

  //Posso colocar todos os meus "endereços" em variáveis para deixar
  //meu código mais organizado. Aqui, o offset().top de cada elemento
  //de título corresponde a sua posição/localização com relação ao scroll da página

  //Também poderia utilizar position() no lugar do offset(); O que muda é que 
  //position() tem outra referência de posicionamento - verificar documentação
  let h1TopPosition = $("#h1").offset().top
  let h2TopPosition = $("#h2").offset().top 
  let h3TopPosition = $("#h3").offset().top

  //ao clicar no link1, o meu html/body recebe um efeito/ação de animação, onde
  // o scroll procura o novo "andar" a ser acessado. Logo, utilizando o método
  //'scrollTop', o scroll ficará na posição/offset do elemento relacionado.
  $(".link1").click(function () {
    $("html, body").animate(
      {
        
        scrollTop: h1TopPosition,
      },
      1000
    );
  });
  $(".link2").click(function () {
    $("html, body").animate(
      {
        scrollTop: h2TopPosition
      },
      1000
    );
  });

  $(".link3").click(function () {
    $("html, body").animate(
      {
        scrollTop: h3TopPosition,
      },
      1000
    );
  });
});

/********************
 LÓGICA DE FAZER O BOTÃO APARECER 
              + 
  SCROLL TOP NO BOTÃO "TOP" 
***********************/

//evento de scroll no meu window/document
$(document).scroll(function () {
  let topPosition = $(this).scrollTop();


  //se eu fizer scroll, passando de 100px com relação ao topo, o botão 'TOP' aparece
  if (topPosition > 50) {
    //opacidade é 1, logo ele fica visível
    $(".scrollTop").css("opacity", "1");
  } else {
    //opacidade é 0, logo ele fica invisível
    $(".scrollTop").css("opacity", "0");
  }

  //animação no meu botão 'TOP'
  $(".scrollTop").click(function () {
    $("html, body").animate(
      {
        //volta para a referência inicial do html/body, que é a posição 0
        scrollTop: 0,
      },
      1000
    );
  });
});
