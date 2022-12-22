// On récupère toutes les images et le bouton
const button = document.querySelector('#show-image');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const image4 = document.querySelector('#image4');

// On créé un tableau d'images
const images = [image1, image2, image3, image4]

button.addEventListener('click', function(e) {
  
  image1.classList.remove('invisible')
  image1.classList.add('visible')
  console.log("Click")
  images.forEach(function(image) {
    console.log("L'image : " + image.src)
    image.addEventListener('click', function(e) {
      const x = e.clientX;  // Coordonnée x du clic
      if (x > 180) {  // Vérifie si le clic a eu lieu à droite de l'image
        switch(image) {
          case image1:
            image1.style.display = 'none'
            image1.classList.remove('visible')
            image2.style.display = 'block'
            image2.classList.remove('invisible')
            image2.classList.add('visible')
            break;
          case image2:
            image2.style.display = 'none'
            image2.classList.toggle('visible')
            image3.style.display = 'block'
            image3.classList.remove('invisible')
            image3.classList.add('visible')
            break;
          case image3:
            image3.style.display = 'none'
            image3.classList.toggle('visible')
            image4.style.display = 'block'
            image4.classList.remove('invisible')
            image4.classList.add('visible')
            break;
          case image4:
            image4.style.display = 'none'
            image4.classList.toggle('visible')
            image1.style.display = 'block'
            image1.classList.remove('invisible')
            image1.classList.add('visible')
            break;
        }
      } else if (x < 25) {  // Vérifie si le clic a eu lieu à gauche de l'image
        switch(image) {
          case image1:
            image1.style.display = 'none'
            image1.classList.remove('visible')
            image4.style.display = 'block'
            image4.classList.add('visible')
            break;
          case image4:
            image4.style.display = 'none'
            image4.classList.remove('visible')
            image3.style.display = 'block'
            image3.classList.add('visible')
            break;
          case image3:
            image3.style.display = 'none'
            image3.classList.remove('visible')
            image2.style.display = 'block'
            image2.classList.add('visible')
            break;
          case image2:
            image2.style.display = 'none'
            image2.classList.remove('visible')
            image1.style.display = 'block'
            image1.classList.add('visible')
            break;
        }
      }
    })
  });
  
  
});