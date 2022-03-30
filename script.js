const inputText = document.getElementById('text-input');
const insideText = document.getElementById('meme-text');
const btnStyleFIre = document.getElementById('fire');
const btnStyleWater = document.getElementById('water');
const btnStyleEarth = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');

function changeInputText() {
  insideText.innerText = inputText.value;
  // console.log(insideText);
}

// function removeClassList(){
//   var lista = imgContainer.classList.length;
//   for(var i = lista - 1; i >= 0; i--)
//   {
//       lista[i].remove()
//   }
// }

// function changeBorder(borderStyle) {
//   imgContainer.style.border = borderStyle;
// }

function changeBorderToStyleFire() {
  // changeBorder("3px dashed red");
  imgContainer.classList = '';
  imgContainer.classList.add('fire');
}

function changeBorderToStyleWater() {
  // changeBorder("5px double blue");
  imgContainer.classList = '';
  imgContainer.classList.add('water');
}

function changeBorderToStyleEarh() {
  // changeBorder("6px groove green");
  imgContainer.classList = '';
  imgContainer.classList.add('earth');
}

function changeImage(event) {
  const image = event.target.src;
  const imageTag = document.querySelector('#meme-image');
  imageTag.src = image;
}

window.onload = () => {
  inputText.addEventListener('keyup', changeInputText);
  btnStyleFIre.addEventListener('click', changeBorderToStyleFire);
  btnStyleWater.addEventListener('click', changeBorderToStyleWater);
  btnStyleEarth.addEventListener('click', changeBorderToStyleEarh);
  document.querySelector('#meme-1').addEventListener('click', changeImage);
  document.querySelector('#meme-2').addEventListener('click', changeImage);
  document.querySelector('#meme-3').addEventListener('click', changeImage);
  document.querySelector('#meme-4').addEventListener('click', changeImage);
};
