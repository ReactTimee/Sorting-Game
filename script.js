document.getElementById('start').addEventListener('click', function() {
  document.getElementById('rulesModal').style.display = 'block';
});


var close = document.getElementsByClassName("close")[0];


close.onclick = function() {
  document.getElementById('rulesModal').style.display = "none";
}


window.onclick = function(event) {
  var modal = document.getElementById('rulesModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var start = document.getElementById("start");
  var body = document.body;
  var inputs = document.createElement("input");
  var inputPoga = document.createElement("button");
  var poga1 = document.createElement("button");
  var poga2 = document.createElement("button");
  var poga3 = document.createElement("button");


  inputs.placeholder = "Ievadiet savu vārdu";
  inputPoga.innerText = "Submit";
  poga1.innerText = "Vēsture";
  poga2.innerText = "Sportisti";
  poga3.innerText = "Pilsētas";


  inputs.className = 'user-input';
  inputPoga.className = 'submit-button';
  poga1.className = 'option-button';
  poga2.className = 'option-button';
  poga3.className = 'option-button';


  inputs.style.display = "none";
  inputPoga.style.display = "none";
  poga1.style.display = "none";
  poga2.style.display = "none";
  poga3.style.display = "none";

  body.appendChild(inputs);
  body.appendChild(inputPoga);
  body.appendChild(poga1);
  body.appendChild(poga2);
  body.appendChild(poga3);

  function vardaIevade() {
      start.style.display = "none";
      inputs.style.display = "block";
      inputPoga.style.display = "block";
  }

  function sendName() {
      if (inputs.value.trim() === "") {
          alert("Lūdzu, ievadiet savu vārdu!");
      } else {
          sendUserNameToServer(inputs.value);
      }
  }
  function sendUserNameToServer(userName) {
    fetch('http://localhost:3000/send-name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: userName })
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok.');
        return response.json();
    })
    .then(data => {
        console.log("Server response:", data);
        localStorage.setItem('playerName', userName);  // Store the name in localStorage
        spelesIzvele();  // Proceed to game category selection
    })
    .catch(error => {
        console.error('Error sending username:', error);
        alert("Failed to send name. Please try again.");  // Improved user feedback
    });
}



  function spelesIzvele() {
      inputs.style.display = "none";
      inputPoga.style.display = "none";
      poga1.style.display = "block";
      poga2.style.display = "block";
      poga3.style.display = "block";
  }
  
  start.addEventListener("click", vardaIevade);
  inputPoga.addEventListener("click", sendName);

  // Redirect to category pages
  poga1.addEventListener("click", function() { window.location.href = 'index2.html'; });
  poga2.addEventListener("click", function() { window.location.href = 'index3.html'; });
  poga3.addEventListener("click", function() { window.location.href = 'index4.html'; });
});
