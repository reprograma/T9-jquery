/*
  Biscoito da sorte - Versão JQuery 

  Ao clicar no biscoito da sorte, troque o texto do parágrafo para uma frase aleatória que está guardada na nossa array 'frases'    
    
*/


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



$('.biscoito').click(function() {
  let indexDaFrase = Math.floor(Math.random() * frases.length)
  $('#message').text(frases[indexDaFrase]) 
})










// // ao clicar no biscoito da sorte
// $('.biscoito').click(function() {
    
// })

// // troque o texto do parágrafo para uma frase aleatória que está guardada na nossa array 'frases
// $('.biscoito').click(function() {
//     let indexDaFrae = Math.floor(Math.random() * frases.length)
// })


// acessando as posições ou os elementors
// $('.biscoito').click(function() {
//   let indexDaFrae = Math.floor(Math.random() * frases.length)

//   $('#message').text(frases) //traz todas as frases de uma unica vez(ta errado isso)
// })




//https://api.jquery.com/click/#click-handler


// // JS Brenda

// 1. selecione o parágrafo que receberá a mensagem da sorte.
// 2. crie a função "fraseDaSorte", essa função deve alterar o texto do parágrafo para uma frase randômica do array acima.

// // const biscoito = document.querySelector('img')
// // const mensagem = document.querySelector('#message')

// // function fraseDaSorte() {
// //   const numeroAleatorio = Math.floor(Math.random() * frases.length)
// //   mensagem.innerText = frases[numeroAleatorio]
// // }

// frases.length (é o tamanho da minha array)
// Math.floor
// Math.random