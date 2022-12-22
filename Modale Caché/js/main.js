const bouton = document.getElementById('show-case');
const texte = document.getElementById('case');

bouton.addEventListener('click', function() {
  texte.style.display = "block";
  document.body.style.backgroundColor = "grey";
})

// on stop la propagation
bouton.addEventListener('click', function(event) {
  event.stopPropagation();
})

document.addEventListener('click', function(e) {

  if (!texte.contains(e.target)) {
    // Déclencher l'événement ici
    texte.style.display = "none";
    document.body.style.backgroundColor = "white";
  }
  
});