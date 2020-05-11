#### JQUERY DOCUMENTAÇÃO: Manipulation: https://api.jquery.com/category/manipulation/


1. Manipulação do DOM
2. Manipulando via tags
3. Manipulando elementos
3. Travesing

### O que é uma travessia?
jQuery travessia, que significa "movimento", de acordo com a sua relação com outros elementos para "Localizar" (ou selecione) elementos HTML. Seleccione um item para começar, e a opção de se mover até que os elementos que você espera para chegar.

A figura abaixo mostra uma árvore genealógica. Por jQuery travessia, você pode escolher entre o (atual) elemento inicial, mover facilmente (ancestral) na árvore genealógica para cima, movimento descendente (filhos), o movimento horizontal (compatriotas). Este movimento é chamado a travessia DOM.



Análise do ícone:

<Div> elemento é o <ul> elemento pai, que também é o ancestral de todos os conteúdos.
<Ul> elemento é o elemento pai do <li> elementos, enquanto o <div> elemento filho
<Li> elemento esquerdo é o <span> elemento pai, <ul> elemento filho, enquanto o <div> prole.
<Span> elemento é o elemento <li> criança, enquanto o <ul> e <div> prole.
Duas <li> elementos são irmãos (tem o mesmo elemento pai).
<Li> elemento à direita é <b> elemento pai, <ul> elemento filho, enquanto o <div> prole.
<B> elemento é o elemento <li> para a direita da criança, enquanto o <ul> e <div> prole.

lâmpada	pai antepassados, avô, bisavô e assim por diante. Descendente é uma criança, neto, bisnetos e assim por diante. Compatriotas têm o mesmo pai.


DOM travessia
jQuery fornece vários métodos DOM de passagem.

métodos de passagem maior espécie é a passagem de árvore (árvore-travessia).

O próximo capítulo irá explicar como em cima da árvore DOM, e sob medida similar.



ai antepassados, avô ou bisavô, e assim por diante.

Por jQuery, você é capaz de percorrer até a árvore DOM para elementos ancestrais.

Até percorrer a árvore DOM
Estes métodos jQuery são úteis, eles são usados ​​para percorrer a árvore DOM:

parent ()
pais ()
parentsUntil ()
jQuery método parent ()
parent () retorna o elemento pai imediato do elemento selecionado.

Este método só até um par passagem de árvore DOM.

O exemplo a seguir retorna elemento pai imediato cada elemento <span> de:

Exemplos
$(document).ready(function(){
$("span").parent();
});

tente »

pais jQuery () Método
pais () retorna o ancestral de todos os elementos do elemento selecionado, é todo o caminho até o elemento raiz do documento (<html>).

O exemplo a seguir retorna todo o ancestral de toda a <span> elemento:

Exemplos
$(document).ready(function(){
$("span").parents();
});

tente »
Você também pode usar os parâmetros opcionais para filtrar a busca por elementos ancestrais.

O exemplo a seguir retorna todo o ancestral de toda a <span> elemento, e é o elemento <ul>:

Exemplos
$(document).ready(function(){
$("span").parents("ul");
});

tente »

jQuery parentsUntil () Método
parentsUntil () retorna o ancestral de todos os elementos entre dois elementos dados.

O exemplo a seguir retorna o ancestral entre todos os elementos <span> e elemento <div> entre:

Exemplos
$(document).ready(function(){
$("span").parentsUntil("div");
});


Descendente é uma criança, neto, bisnetos e assim por diante.

Por jQuery, você atravessar para baixo da árvore DOM para encontrar os elementos descendentes.

Percorrer a árvore DOM para baixo
Aqui estão dois para percorrer a árvore DOM estabelece métodos jQuery:

crianças ()
find ()
jQuery método children ()
crianças () retorna o elemento selecionado todos os elementos filhos diretos.

Este método só para baixo um par passagem de árvore DOM.

O exemplo a seguir retorna cada elemento <div> de todos os elementos filhos diretos:

Exemplos
$(document).ready(function(){
$("div").children();
});

tente »
Você também pode usar o parâmetro opcional para filtrar a pesquisa para os sub-elementos.

O exemplo a seguir retorna o nome da classe "1" em todos os elementos <p>, e eles são <div> elementos filhos diretos:

Exemplos
$(document).ready(function(){
$("div").children("p.1");
});

tente »

jQuery find () Método
find () retorna os elementos elemento descendentes selecionados, todo o caminho até o último descendente.

O exemplo a seguir retorna pertencem <div> todas <span> descendentes elementos:

Exemplos
$(document).ready(function(){
$("div").find("span");
});

tente »
O exemplo a seguir retorna <div> todas as gerações:

Exemplos
$(document).ready(function(){
$("div").find("*");
});



Compatriotas têm o mesmo elemento pai.

Por jQuery, você é capaz de atravessar compatriotas do elemento na árvore DOM.

Nível na passagem de árvore DOM
Há muitas maneiras úteis para chegar no nível DOM árvore de travessia:

irmãos ()
next ()
nextAll ()
nextUntil ()
prev ()
prevAll ()
prevUntil ()
jQuery irmãos () Método
irmãos () retorna o elemento selecionado todos os elementos compatriotas.

O exemplo a seguir retorna o <h2> elemento de todos os compatriotas:

Exemplos
$(document).ready(function(){
$("h2").siblings();
});

tente »
Você também pode usar os parâmetros opcionais para filtrar a busca por elemento compatriotas.

O exemplo a seguir retorna pertencem <h2> elemento todos os compatriotas <p> elemento:

Exemplos
$(document).ready(function(){
$("h2").siblings("p");
});

tente »

seguinte) método (jQuery
próximo método () retorna o elemento selecionado para os próximos compatriotas elemento.

Esse método retorna apenas um elemento.

O exemplo a seguir retorna o <h2> elemento próxima compatriotas:

Exemplos
$(document).ready(function(){
$("h2").next();
});

tente »

jQuery nextAll () Método
nextAll () retorna todos os elementos siga companheiro do elemento selecionado.

O exemplo a seguir retorna o <h2> elemento todos os compatriotas a seguir:

Exemplos
$(document).ready(function(){
$("h2").nextAll();
});

tente »

jQuery nextUntil () Método
nextUntil () retorna entre todos os elementos das duas compatriotas de seguir os parâmetros dados.

O exemplo a seguir retorna entre <h2> e <h6> elemento de todos os compatriotas entre elementos:

Exemplos
$(document).ready(function(){
$("h2").nextUntil("h6");
});

tente »

jQuery prev (), prevAll () & prevUntil () Método
Voltar Trabalho (), prevAll () e prevUntil () método é semelhante ao método acima referido, mas apenas no sentido oposto: eles retornam em frente de elementos compatriota (na passagem de árvore DOM para trás ao longo elemento compatriotas vez para a frente).




O escopo dos elementos de busca sigla
Três métodos básicos de filtragem são: primeiro (), última () e eq (), que permite que você com base em sua localização em um elemento do grupo para selecionar um elemento específico.

Outros métodos de filtragem, tais como filter () e não () permite-lhe seleccionar um determinado jogo ou não coincidem com os elementos critérios especificados.

jQuery primeiro () Método
primeiro método () retorna o primeiro elemento do elemento seleccionado.

Os exemplos a seguir selecione o primeiro elemento <div> dentro do primeiro elemento <p>:

Exemplos
$(document).ready(function(){
$("div p").first();
});

tente »

passado) método (jQuery
último método () retorna o último elemento do elemento selecionado.

O exemplo a seguir seleciona o último elemento <div> no último elemento <p>:

Exemplos
$(document).ready(function(){
$("div p").last();
});

tente »

jQuery eq) método (
eq () retorna o elemento selecionado é o elemento com o número de índice especificado.

Os números de índice iniciar a 0, de modo que o índice do primeiro elemento é 0, em vez de um. Os exemplos a seguir selecione o segundo elemento <p> (índice número 1):

Exemplos
$(document).ready(function(){
$("p").eq(1);
});

tente »

filtro jQuery () Método
filter () método permite que você especifique um padrão. Esta norma não corresponde ao elemento será removido da coleção, elemento correspondente será devolvido.

O exemplo a seguir retorna todos os elementos <p> com o nome da classe "url" de:

Exemplos
$(document).ready(function(){
$("p").filter(".url");
});

tente »

jQuery não () Método
Não () retorna todos os elementos que não correspondem aos critérios.

Dica: Não () filtro () método em vez disso.

O exemplo a seguir retorna todos os elementos <p> sem um nome de classe "url" de:

Exemplos
$(document).ready(function(){
$("p").not(".url");
});
