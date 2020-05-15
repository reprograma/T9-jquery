/*

1. Crie uma funcionalidade que armazena o valor do input e apresenta esse valor na tela, preenchendo
o elemento <h2> do texto.

1.2. O texto replicado inicial é: "A desenvolvedora mais incrível desse ano será a...", e o valor
do input deve completar a frase.

2. Não esqueça de validar o input de forma a não replicar valores vazios


*/

$(document).ready(function () {
  $("#botao-replicar").click(function () {
      //'guardar' meus elementos em variáveis
    let input = $("#campo-nome");
    //tratar o input, pegando apenas o seu valor e tratando os espaços em branco
    //utilizando o método trim()
    let nome = input.val().trim();

    //validação: nome ! = "" => "se não houver input de valor vazio"
    if (nome != "") {
    //'limpa' o que estiver escrito no input, 
    // e agora seu valor é igual a vazio ("")
      input.val("");
      +$("#texto-replicado").text(
        "A desenvolvedora mais incrível desse ano será a " + nome
      );
    }
  });
});
