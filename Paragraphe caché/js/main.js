document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey) {
      document.getElementById('message').style.display = 'block';
      if(event.altKey) {
        document.getElementById('message').style.color = 'red';
      }
    }
});