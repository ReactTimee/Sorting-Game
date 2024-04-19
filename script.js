var start = document.getElementById("start");
var body = document.body;
start.addEventListener("click", vardaIevade);


function vardaIevade() {
  start.classList.add("neredzams");
  var inputs = document.createElement("input");
  body.appendChild(inputs);
  var inputPoga = document.createElement("button");
  inputPoga.addEventListener("click", spelesIzvele)
  body.appendChild(inputPoga);
}
function spelesIzvele() {
  inputs.classList.add("neredzams");
  inputPoga.classList.add("neredzams");
  var poga1 = document.createElement("button");
  var poga2 = document.createElement("button");
  var poga2 = document.createElement("button");
  poga1.addEventListener("click", vesture);
  poga2.addEventListener("click", sportisti);
  poga3.addEventlistener("click", pilsetas);
  body.appendChild(poga1);
  body.appendChild(poga2);
  body.appendChild(poga3);
}
