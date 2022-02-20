const inputText = document.getElementById('text-input');
const insideText = document.getElementById('meme-text');
//const inputImage = document.getElementById('meme-insert');
//const imageUpload = document.getElementById('meme-image');


function changeInputText (){
  insideText.innerText = inputText.value;
  console.log(insideText)
}

window.onload = function () {
    inputText.addEventListener('keyup', changeInputText)
}
