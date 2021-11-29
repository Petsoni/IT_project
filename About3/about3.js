function goBack() {
  window.history.back();
}

const section = document.querySelector('section');
const imgContainer = document.createElement('div');

function displayImg(imgUrl){

  section.appendChild(imgContainer);

  imgContainer.innerHTML = `<img src = '$ {imgUrl}'>`;

  imgContainer.classList.add('displayMe');
  //
  // imgContainer.style.top = (elt.offsetTop + 40) + 'px';
  // imgContainer.style.left = (elt.offsetLeft + 40) + 'px';


function removeImg(){
  body.removeChild(imgContainer);
}
