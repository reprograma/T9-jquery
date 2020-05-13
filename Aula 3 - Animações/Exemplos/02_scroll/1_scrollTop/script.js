//problema - eu quero ir pro topo 

$(document).ready(function() {

    $("#buttonTop").click(function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 3000)
    })
});


