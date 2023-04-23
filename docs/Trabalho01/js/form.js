function createCard() {
  let name = document.getElementById("carName").value;
  let year = new Date(document.getElementById("year").value).getFullYear();
  let price = document.getElementById("price").value;
  let url = document.getElementById("url").value;
  let dors = getDors();
  let itensList = getItens();

  document.getElementById("title").innerText = `Card`;
  document.getElementById("content").innerHTML = `
    <div id="card" class="px-4 py-3 d-flex flex-column">
      <div class="image w-100 h-100">
        <img class="rounded-4" src="${url}" alt="Imagem do carro ${name}">
      </div>
      <div class="d-flex justify-content-between">
        <h2 class="name fs-1 my-3">${name}</h2>
        <h3 class="price fs-2 my-3">R$: ${price}</h3>
      </div>
      
      <p class="info fs-3">Modelo ${year} de ${dors}. Equipado com ${itensList}.</p>
    </div>
  `;
}

function getDors(){
  let dors = document.querySelectorAll("input[type=radio]:checked");
  for(let i=0; i<dors.length; i++){
    if(dors[i].checked){
      return dors[i].value;
    }
  }
}

function getItens(){
  let itens = document.querySelectorAll("input[type=checkbox]:checked");
  let itensList = [];
  for(let i=0; i<itens.length; i++){
    itensList.push(" " + itens[i].value);
  }
  return itensList;
}

