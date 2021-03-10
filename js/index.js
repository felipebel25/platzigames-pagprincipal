// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
window.onload = () =>{
  document.querySelector(".boton-left").addEventListener("click", espic2 );
  document.querySelector(".boton-right").addEventListener("click", espic );

}