document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  const rulesModal = document.getElementById('rulesModal');
  const closeButton = document.getElementsByClassName('closeButton')[0];
  const acknowledgeRules = document.getElementById('acknowledgeRules');
  const usernameInput = document.getElementById('usernameInput');
  const submitName = document.getElementById('submitName');

  startButton.addEventListener('click', function() {
    rulesModal.style.display = 'block';
    startButton.style.display = 'none';
  });

  closeButton.addEventListener('click', function() {
    rulesModal.style.display = 'none';
  });

  acknowledgeRules.addEventListener('click', function() {
    rulesModal.style.display = 'none';
    usernameInput.style.display = 'inline';
    submitName.style.display = 'inline';
  });

  submitName.addEventListener('click', function() {
    const name = usernameInput.value.trim();
    if (name) {
      document.getElementById('gameOptions').style.display = 'block';
      usernameInput.style.display = 'none';
      submitName.style.display = 'none';
    } else {
      alert('Please enter a name.');
    }
  });
});

function test() {
  const username = document.getElementById('usernameInput').value.trim();
  if (username) {
    localStorage.setItem('playerName', username);
    console.log('Username saved:', username);
  } else {
    alert('Please enter your name.');
  }
}



document.getElementById('historyButton').addEventListener('click', function() {
  window.location.href = 'index2.html';
});
document.getElementById('sportsButton').addEventListener('click', function() {
  window.location.href = 'index3.html';
});
document.getElementById('citiesButton').addEventListener('click', function() {
  window.location.href = 'index4.html';
});
