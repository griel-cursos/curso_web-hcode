$(document).ready(function(){ <!-- Executa o comando jQuery somente após a página ser carregada -->
                
    $("#logotipo").on("mouseover", function(){
        console.log("Passou o mouse no logotipo");

        $("#banner h1").addClass("efeito");
    }).on("mouseout", function(){
        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function(){
        $("li.search").addClass("ativo");
    }).on("blur", function (){
        $("li.search").removeClass("ativo");
    });

    $(".thumbnails").owlCarousel({
        loop:true,
        margin: 10,
        /*nav:true,
        navText: ["Anterior", "Próximo"],*/
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768:{
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
})