let boxes = document.querySelectorAll('.box');

boxes.forEach(function(box) {
  box.addEventListener('mouseenter', function() {
    console.log("ppl");
    box.style.filter = 'none';
    box.style.borderColor = 'red';
  });
  box.addEventListener('mouseout', function() {
    box.style.filter = 'blur(10px)';
    box.style.borderColor = 'black';
  });
});

