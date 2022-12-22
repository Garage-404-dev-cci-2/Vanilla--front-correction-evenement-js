var cases = document.querySelectorAll('div[id^="case"]');

cases.forEach(function(c) {
  c.addEventListener('mouseover', function() {
    this.style.filter = 'none';
    this.style.borderColor = 'red';
  });
});

cases.forEach(function(c) {
    c.addEventListener('mousedown', function() {
      this.style.width = '400px';
      this.style.height = '200px';
    });
});

cases.forEach(function(c) {
    c.addEventListener('mouseup', function() {
      this.style.width = '200px';
      this.style.height = '200px';
    });
});