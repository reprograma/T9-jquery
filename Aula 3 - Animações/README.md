## Scroll 
O evento de scroll (rolagem) ocorre quando o usuário faz scroll em um elemento especificado.

O evento de rolagem funciona para todos os elementos roláveis ​​e o objeto de janela (janela do navegador).

O método scroll() aciona o evento scroll ou anexa uma função que irá executar quando ocorrer um evento scroll.

```
$(selector).scroll()

//ou 

$(selector).scroll(function)
```

## ScrollTop

O método scrollTop() define ou retorna a posição vertical da barra de rolagem para os elementos selecionados.

- __Dica__: Quando a barra de rolagem está na parte superior, a sua posição é 0.

- __Quando usado para retornar a posição__:
Este método retorna a posição vertical da barra de rolagem para o PRIMEIRO elemento correspondente. 

## offset()

O método offset() define ou retorna as coordenadas para os elementos selecionados, em relação ao documento/window.

```

$(selector).offset(retorna o objeto: {top:valor,left:valor})

```

- __Quando usado para retornar o deslocamento__:
Este método retorna as coordenadas de deslocamento do PRIMEIRO elemento correspondente. Ele retorna um objeto com 2 propriedades: as posições superior (top) e esquerda (left) em pixels.


## animate ()

O método animate() executa uma animação personalizada de um conjunto de propriedades CSS.

```
$(selector).animate({parâmetros de estilo css}, tempo, callback);

```

Este método __altera um elemento de um estado para outro com estilos CSS__. O valor da propriedade CSS é alterado gradualmente, para criar um efeito animado.

__Somente valores numéricos podem ser animados__ (como "margem: 30px"). Os valores das strings não podem ser animados (como "cor de fundo: vermelho"), exceto pelas strings "show", "hide" e "toggle". Esses valores permitem ocultar e mostrar o elemento animado.

- Pra matar a curiosidade: uma biblioteca para interações de interface usando animate e outros efeitos: https://jqueryui.com/animate/ 


## Próximos passos

Agora que vocês já viram os diversos eventos, efeitos e animações em jQuery, há alguns outros métodos legais de conhecer. Além disso, há vários tutoriais e artigos que podem ajudar no entendimento dessa senhora biblioteca :) 

- Visão geral sobre o [jQuery](https://www.devmedia.com.br/jquery-basico-visao-geral-da-biblioteca/28565)
- Para que serve o [jQuery](https://www.hostinger.com.br/tutoriais/o-que-e-jquery/)
- [TUTORIAL](https://www.youtube.com/watch?v=e3NhP1nt-lY) Animar o scroll com jQuery
- [TUTORIAL](https://www.youtube.com/watch?v=kYXUgw27EqM) Scroll suave para links internos


// obrigada por acompanhar a aula até aqui! 