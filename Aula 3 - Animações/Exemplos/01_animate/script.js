//animate()
//{estilo - css - style}, duração, função

$(document).ready(function() {
    // $("#animate").click(function() {
    //     $("#content").animate({"height": "200px"}, "slow")
    // })

    // $("#animate").click(function() {
    //     $("#content").animate({
    //         "width": "60%",
    //         "padding-top": "100px"
    //     }, 5000)
    // })

    $("#animate").click(function() {
        $("#content").animate({
            "width": "60%",
            "padding-top": "100px",
            "opacity": "0.5",
            "left": "30px"
        }, 
        2000,
        function() {
            alert('Animação terminou')
        });
    })
})

