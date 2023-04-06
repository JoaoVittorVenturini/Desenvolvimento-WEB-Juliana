const numero = document.querySelector('.input-box input');
const result = document.querySelector('#result');

//1 modo
function showResult() {
  let num = numero.value;
  result.innerHTML = '';
  if( num != '' && num != 0 ) {
    for( let i = 1; i <= 10; i++ ) {
      result.innerHTML += `<p> ${num} x ${i} = ${num * i} </p>`;
    };
  } else {
    result.innerHTML = 'Digite um número válido!';
  }
}

//2 modo
function showResult2() {
  for( let i = 1; i <= 10; i++ ) {
    let num = numero.value;
    let calc = num * i;
    const node = document.createElement('p');
    const text = document.createTextNode(`${num} x ${i} = ${calc}`);
    node.appendChild(text);
    result.appendChild(node);
  }
}