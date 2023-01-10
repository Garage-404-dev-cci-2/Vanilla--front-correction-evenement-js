const bouton = document.querySelector('.button');
const box = document.querySelector('.box');
const body = document.querySelector('body');

bouton.addEventListener('click', function(event) {
  // on stop la propagation : méthode utilisée pour empêcher l'événement de se propager au niveau supérieur de la hiérarchie d'éléments
  event.stopPropagation(); 
  box.style.display = "block";
  body.style.backgroundColor = "grey";
})

document.addEventListener('click', function() {
  body.style.backgroundColor = "white";
  box.style.display = "none";
});