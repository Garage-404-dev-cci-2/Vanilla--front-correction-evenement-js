// Variable pour enregistrer l'état de la combinaison de touches
let keysPressed = {};

// Gestionnaire d'événements pour enregistrer les touches appuyées
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;
  // console.log(keysPressed);
  // Si les touches 'a' et 'b' sont appuyées en même temps
  if (keysPressed["a"] && keysPressed["b"]) {
    document.querySelector('.message').style.display = 'block';
  }
});

// Gestionnaire d'événements pour enlever les touches lorsqu'elles ne sont plus appuyées
document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});

// Gestionnaire d'événements pour changer la couleur du texte lorsqu'une touche est appuyée
document.addEventListener("keydown", () => {
   // Si la touche q est pressée
   if (keysPressed["q"]){
    document.querySelector('.message').style.color = 'red';
  }
});