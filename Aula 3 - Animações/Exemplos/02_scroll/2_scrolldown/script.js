$(document).ready(function() {
    console.log($("#button").offset(), 'quem é o offset')

   $("#button").click(function() {
       alert("Left:" + $(this).offset().left)
   })
})
