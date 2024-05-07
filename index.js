

let $header = document.querySelector("header");

/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let ubicacionPrincipal = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal<=630) {
        
        $header.style.display = "none";

    } else {
        $header.style.display = "block";
    }

});