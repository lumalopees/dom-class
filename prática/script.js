// funções

function createTitle() {
  const getTitle = document.getElementById('title')
  const createH1 = document.createElement('h1');
  createH1.innerText = 'Adivinhe a cor'
  getTitle.appendChild(createH1)

  return createH1
}

console.log(createTitle());

// chamada