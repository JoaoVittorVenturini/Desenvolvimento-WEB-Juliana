function register(){
  let table = document.getElementById("table");
  let row = table.insertRow();

  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let birth_date =  document.getElementById("birth_date").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let childrens = document.querySelector("input[type=radio]:checked").value;

  let col1 = row.insertCell(0);
  let col2 = row.insertCell(1);
  let col3 = row.insertCell(2);
  let col4 = row.insertCell(3);
  let col5 = row.insertCell(4);

  col1.innerHTML = `${first_name} ${last_name}`;
  col2.innerHTML = email;
  col3.innerHTML = phone_number;
  col4.innerHTML = birth_date;
  col5.innerHTML = childrens;
}