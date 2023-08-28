// funções

function createTitle () {
  const getTitle = document.getElementById('title');
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Adivinhe a Cor';
  getTitle.appendChild(createH1)
};

function createCircle () {
  const getPallete = document.getElementById('pallete')
  
  for (let index = 0; index < 8; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.borderRadius = '50%';
    createDiv.className = 'colourPallete';
    getPallete.appendChild(createDiv);
    
  }
  return getPallete;
}

//rgb(12, 19, 136)

function createRandomColour () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// chamada das funções

createTitle();
createCircle();
console.log(createRandomColour());