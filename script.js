// variáveis globais

const getResult = document.getElementById('result');

// funções

function createTitle () {
  const getTitle = document.getElementById('title');
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Adivinhe a Cor';
  getTitle.appendChild(createH1)
};

function createCircle () {
  const getPallete = document.getElementById('pallete')
  getPallete.style.display = 'flex'
  const randomClass = Math.floor(Math.random() * 8)
  
  for (let index = 0; index < 8; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.borderRadius = '50%';
    createDiv.className = 'colourPallete';
    createDiv.style.marginLeft = '1rem';
    if (index === randomClass) {
      createDiv.className = 'colourPallete guess'
    }
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

// Exemplo arrow function

const paintCircles = () => {
  const getColourPallete = document.getElementsByClassName('colourPallete');
  for (let index = 0; index < getColourPallete.length; index += 1) {
    getColourPallete[index].style.backgroundColor = createRandomColour();
    
  }
}

function showRGBColour () {
  const getGuess = document.querySelector('.guess').style.backgroundColor;

  const creatH1 = document.createElement('h1');
  creatH1.innerHTML = getGuess;
  getResult.appendChild(creatH1);
}

function createScore () {
  const createDiv = document.createElement('div');
  createDiv.className = 'score';
  const createH2 = document.createElement('h2');
  createH2.innerHTML = 0;
  createH2.className = 'valor';
  createDiv.appendChild(createH2);
  getResult.appendChild(createDiv);
}

function updateColours () {
  const getPallete = document.getElementById('pallete');
}

function createEventListener () {
  const getGuess = document.querySelector('.guess')
  const getCircles = document.querySelectorAll('.colourPallete')
  const getH2 = document.querySelector('.valor');
  let score = 0;

  for (let index = 0; index < getCircles.length; index += 1) {
    getCircles[index].addEventListener('click', () => {
      if(getCircles[index].className.includes('guess')) {
        getH2.innerHTML = score += 1;
      }
    });
    
  }
}

// chamada das funções

createTitle();
createCircle();
createRandomColour();
paintCircles();
showRGBColour();
createScore();
createEventListener();
updateColours();