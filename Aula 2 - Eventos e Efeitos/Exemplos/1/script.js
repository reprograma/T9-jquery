/* Filtros customizados e por DOM */

$('div > p'); // <p>s imediatamente filhos de <div>
$('p + p'); // <p>s imediatamente precedidos por outro <p>
$('div:first-child'); // um elemento <div> que seja o primeiro filho
$('div:last-child'); // um elemento <div> que seja o último filho
$('div > *:first-child'); // um elemento que seja o primeiro filho direto de uma <div>
$('div > *:last-child'); // um elemento que seja o último filho direto de uma <div>
$('div p:nth(0)'); // o primeiro elemento <p> filho de uma <div>
$('div:empty'); // <div>s vazias