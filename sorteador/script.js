const x = document.getElementById("x");
const y = document.getElementById("y");
const button = document.getElementById("btn-b");

function sortearAleatorio() {
  let aleatorio = parseInt(Math.random() * 99999);
  document.getElementById("resultA").innerHTML = aleatorio;
}


function sortearEntre() {
  let sorte = Math.floor(Math.random() * (y.value - x.value + 1) + x.value);
  document.getElementById("resultB").innerHTML = sorte;
  button.innerText = `Entre ${x.value} e ${y.value}`;
}