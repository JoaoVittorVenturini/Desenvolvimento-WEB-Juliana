let student = document.getElementById("studentName"),
    test1 = document.getElementById("p1"),
    test2 = document.getElementById("p2"),
    work3 = document.getElementById("t1"),
    work4 = document.getElementById("t2");

function calculateAverage() {
  let average = (parseFloat(test1.value) + parseFloat(test2.value) + parseFloat(work3.value) + parseFloat(work4.value)) / 4;
  let situation;
  let color;

  if (average >= 6) {
    situation = "aprovado";
    color = "bg-success";
  } else if(average < 6 && average > 2) {
    situation = "em recuperação";
    color = "bg-warning";
  } else {
    situation = "reprovado";
    color = "bg-danger";
  }
  document.getElementById("result").innerHTML = `<h4 class="fs-4 text-light">A media do aluno "<span id="student">${student.value}</span>" está <span id="situation" class="${color}">${situation}</span> com média: <span id="average">${average.toFixed(1)}</span></h4>`;
}