var start = document.getElementById("start");
var body = document.body;
var inputs = document.createElement("input");
var inputPoga = document.createElement("button");
var poga1 = document.createElement("button");
var poga2 = document.createElement("button");
var poga3 = document.createElement("button");
poga1.innerText = "vēsture";
poga2.innerText = "sportisti";
poga3.innerText = "pilsētas";
start.addEventListener("click", vardaIevade);


function vardaIevade() {
  start.classList.add("neredzams");
  body.appendChild(inputs);
  inputPoga.addEventListener("click", spelesIzvele)
  body.appendChild(inputPoga);
}
function spelesIzvele() {
  inputs.classList.add("neredzams");
  inputPoga.classList.add("neredzams");
  poga1.addEventListener("click", vesture);
  poga2.addEventListener("click", sportisti);
  poga3.addEventListener("click", pilsetas);
  body.appendChild(poga1);
  body.appendChild(poga2);
  body.appendChild(poga3);
}
function vesture() {
  alert("sveiki");
}
function sportisti() {
  alert("sveiki");
}
function pilsetas() {
  alert("sveiki");
}
