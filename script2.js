document.getElementById('fetchQuestion').addEventListener('click', function() {
  fetch('/generate-question')
      .then(response => response.json())
      .then(data => {
          document.getElementById('question').innerText = data.question;
      })
      .catch(error => console.error('Error fetching question:', error));
});