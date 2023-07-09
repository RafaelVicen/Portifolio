var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var link=document.querySelector(".navlink li");

togglebtn.addEventListener("click", function(){
  this.classList.toggle("click");
  nav.ClassList.toggle("open");
});

var typed = new Typed('#element', {
  strings: ['<i>Desenvolvedor:</i> Front-end.', 'Desenvolvedor: web.'],
  typeSpeed: 70,
  loop:true
});