## Aula 1

#### O que é jQuery?

 [jQuery](https://jquery.com/) é uma biblioteca open-source com base em JavaScript criada para facilitar o desenvolvimento front-end. Seu lema é _write less, do more_ (Escreva menos, faça mais) 
 
#### Como surgiu? 

 Foi criada em 2006 por John Resig ao perceber que seria possível reduzir a forma de escrita de algumas funções em javascript, criando assim o jQuery.
#### Vantagens

 * Facilidade de leitura e escrita do código
 * Open-source
 * Seleção e manipulação de elementos HTML
 * Manipulação de CSS e semelhança de seletores
 * uso do AJAX* 
 * Navegação pelo DOM
 * Eventos, efeitos e animações
 * 
#### Como instalar no seu projeto?

 Você pode utilizar através de um link direto no seu código html (CDN - minificado)
 
```<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>```

Ou você pode salvar o código no seu projeto, renomeando-o ou não (o link abaixo é minificado)

```https://code.jquery.com/jquery-3.5.1.min.js```


#### Sintaxe
- __$(seletor).ação()__
- $: simbolo de acesso ao jQuery
- __Seletor__: para encontrar os elementos html
- __Ação__: o que eu quero realizar 


#### Métodos de Inicialização

Os métodos de inicialização do jQuery nas nossas páginas são:

```     
$(document).ready(function(){
    //Código vai aqui
});
```

E que a chamada acima equivale a 
```     
$(function(){
    //Código vai aqui 
})
```