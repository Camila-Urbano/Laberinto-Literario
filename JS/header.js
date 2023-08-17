document.getElementById("icon_menu").addEventListener("click", mostrar_menu_navegacion);

function mostrar_menu_navegacion()
{
    document.querySelector("nav").classList.toggle("mostrar_menu_navegacion");
}

const nav = document.querySelector('header');

window.addEventListener('scroll', function(){

    nav.classList.toggle('active', this.window.scrollY > 0)

})