// funções

function createTitle () {
  const getTitle = document.getElementById('title');
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Adivinhe a Cor';
  getTitle.appendChild(createH1)
};

function createCircle () {
  const createDiv = document.createElement('div');
  createDiv.style.width = '50px';
  createDiv.style.height = '50px';
  return createDiv;
}

// chamada das funções

createTitle();
console.log(createCircle());