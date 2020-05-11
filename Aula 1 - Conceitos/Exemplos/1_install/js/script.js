
function helloJavascript() {
    alert("Hello Word")
    
}

helloJavascript()


DOM
$(document).ready(function () {
    alert("Hello Word em Jquery")
    
});

$(document).ready(helloJavascript);

ou
$(function(){
    alert("Eu sou um hello World de uma função anonima")
})