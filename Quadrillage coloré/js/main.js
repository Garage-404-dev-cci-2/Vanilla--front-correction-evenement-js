const boxes = document.querySelectorAll('.box');
for (const box of boxes) {
  box.addEventListener('click', function() {
    this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  });
}