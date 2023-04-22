let min = document.getElementById("low");
let max = document.getElementById("high");

function generate() {
  let sorte = parseInt(Math.random() * (parseInt(max.value)  - parseInt(min.value) + 1) + parseInt(min.value));
  document.getElementById("result").innerHTML = sorte;
}