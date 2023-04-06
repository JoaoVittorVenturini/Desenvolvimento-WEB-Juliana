const result = document.querySelector('#result');
const numero = document.querySelector('.input-box input');

function showResult() {
  let num = numero.value;
  let lista = [];
  
  for( let i = 0; i <= 100; i++ ) {
    if( num % i == 0 ) {
      lista.push(" " + i);
    }
  }
  
  if(num == 0) result.innerText = "Número invalido!";
  else if(num != "") result.innerText = lista;
}