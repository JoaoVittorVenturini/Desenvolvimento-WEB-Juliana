let min = document.getElementById("x");
let max = document.getElementById("y");
let button = document.getElementById("btn-b");

function sortearAleatorio() {
  let aleatorio = parseInt(Math.random() * 99999);
  document.getElementById("resultA").innerHTML = aleatorio;
}

function sortearEntre() {
  let sorte = parseInt(Math.random() * (parseInt(max.value)  - parseInt(min.value) + 1) + parseInt(min.value));
  document.getElementById("resultB").innerHTML = sorte;
  button.innerText = `Entre ${min.value} e ${max.value}`;
}