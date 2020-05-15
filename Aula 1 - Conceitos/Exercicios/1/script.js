/*

  Biscoito da sorte - Versão JQuery 

  Ao clicar no biscoito da sorte, troque o texto do parágrafo para uma frase aleatória que está guardada na nossa array 'frases'
    
*/

//frases é a minha lista de elementos que serão acessados através 
//de seus indexes, pois frases é uma array
const frases = [
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vai mais longe do que muito conhecimento.",
]


//jQuery

$('.biscoito').click(function() {
  //math.floor() arredonda o número 
  //math.random() fornece um número aleatório entre 0 e 1, por isso é todo decimal
  //multiplicar pelo tamanho do meu array (frases) estabelece o limite que quero
  //para que eu possa achar os indexes, e consequentemente as minhas frases
  let indexDaFrase = Math.floor(Math.random() * frases.length)
  
  //no elemento message, mostro a frase aleatória selecionada, puxando 
  //o valor da array pelo seu index
  $('#message').text(frases[indexDaFrase])
})