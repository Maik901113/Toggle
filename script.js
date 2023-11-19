// guarda los valores de body para que el fondo cambie tambien//
const body =document.querySelector("body");
// se cra la constante del toggle para que cuando se mueva cambiel el fondo y el boton //
const toggle=document.getElementById("toggle");

// se llama la variable se cra para que escuche el click //
toggle.addEventListener('click', () =>{
    // continua haciendo un clss list para variar entre valores on /off//
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
    // para cambien tambien el body cuando escuche el click//

})