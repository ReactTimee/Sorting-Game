var start = document.getElementById("start");
var body = document.body;
var inputs = document.createElement("input");
var inputPoga = document.createElement("button");
var poga1 = document.createElement("button");
var poga2 = document.createElement("button");
var poga3 = document.createElement("button");

inputs.placeholder = "Enter your name"; // Add placeholder to input
inputPoga.innerText = "Submit";
poga1.innerText = "Vēsture";
poga2.innerText = "Sportisti";
poga3.innerText = "Pilsētas";

start.addEventListener("click", vardaIevade);

function vardaIevade() {
  start.style.display = "none"; // Hide start button
  body.appendChild(inputs);
  body.appendChild(inputPoga);
  inputPoga.addEventListener("click", spelesIzvele);
}

function spelesIzvele() {
  inputs.style.display = "none";
  inputPoga.style.display = "none";
  body.appendChild(poga1);
  body.appendChild(poga2);
  body.appendChild(poga3);

  poga1.addEventListener("click", function() { window.location.href = 'index2.html'; }); // Redirect to index2.html
  poga2.addEventListener("click", function() { window.location.href = 'index3.html'; }); // Redirect to index2.html
  poga3.addEventListener("click", function() { window.location.href = 'index4.html'; }); // Redirect to index2.html
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('container').style.display = 'block'; // Show quiz container
  updateLivesDisplay();
  loadQuestion();
});
