function getRadio() {
  let e = document.getElementsByName("gender");
  for(let i=0; e.length; i++){
    if(e[i].checked){
      document.getElementById("genderResult").innerHTML = `O genero selecionado foi ${e[i].value}`
    }
  }
}

function getOption(){
  let selectE = document.querySelector("#plan");
  let text = selectE.value;
  document.querySelector(".palnResult").textContent = text;
}

function getCheckedbox(){
let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let text = "";
  for(i=0; i<checkBoxes.length; i++){
    text = `${text}, ${checkBoxes[i].value}`;
  }
  document.getElementById("pri").innerHTML = text;
}