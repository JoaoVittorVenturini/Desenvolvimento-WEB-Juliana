let min = document.getElementById("low");
let max = document.getElementById("high");
let qty = document.getElementById("quantity");

function raffle() {
  let list = [];
  for(let i = 0; i < qty.value; i++) {
    let lucky = parseInt(Math.random() * (parseInt(max.value)  - parseInt(min.value) + 1) + parseInt(min.value));
    list.push(" " + lucky);
  }
  document.getElementById("result").innerHTML = list;
}