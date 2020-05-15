// BY KAREN GRIGORYAN

/*
    1. Animar os elementos do menu lateral de modo que quando cada um dos links for clicado,
    o scroll acontecerá de forma lenta, direcionado o scroll para o heading correspondente 
        ex. se eu clicar no link 3, o scroll deve me direcionar para o heading 3

    2. Criar o botão de scroll até o topo da página. Lembrando que esse botão só deve aparecer 
    a partir do momento que o scroll começou a ir para baixo. 

    //Extra: fazerem o máximo de efeitos e eventos possível! 

*/

$(document).ready(function () {
  /********************

     MENU DA ESQUERDA COM SCROLL ANIMADO 

    ***********************/

  $(".link1").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#h1").offset().top,
      },
      1000
    );
  });
  $(".link2").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#h2").offset().top,
      },
      1000
    );
  });

  $(".link3").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#h3").offset().top,
      },
      1000
    );
  });
});
/********************

 SCROLL TOP NO BOTÃO TOPS 

***********************/

$(document).scroll(function () {
  let topPosition = $(this).scrollTop();

  if (topPosition > 50) {
    $(".scrollTop").css("opacity", "1");
  } else {
    $(".scrollTop").css("opacity", "0");
  }

  $(".scrollTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
