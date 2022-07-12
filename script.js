function palleteColor() {
  const colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.style.backgroundColor = 'black';

  const colorBlue = document.getElementsByClassName('color')[1];
  colorBlue.style.backgroundColor = 'blue';

  const colorRed = document.getElementsByClassName('color')[2];
  colorRed.style.backgroundColor = 'red';

  const colorGreen = document.getElementsByClassName('color')[3];
  colorGreen.style.backgroundColor = 'green';
}
function Class() {
  const addSelectedClass = document.getElementsByClassName('color')[0];
  addSelectedClass.classList.add('selected');
}

function classSelected(event) {
  const selected1 = document.getElementsByClassName('selected')[0];
  selected1.classList.remove(selected1);
  event.target.classList.add(selected1);

  const plusSelected = document.getElementsByClassName('selected')[0];
  return plusSelected;
}

const colorAll = document.querySelectorAll('.color');
console.log(colorAll);

for (let index = 0; index < colorAll.length; index += 1) {
  colorAll[index].addEventListener('click, plusSelected');
}
function colorPixel(event) {
  const choose0 = document.getElementsByClassName('selected')[0];
  const choose1 = window.getComputedStyle(choose0).backgroundColor;
  event.target.style.backgroundColor = choose1;
}




















window.onload = function all() {
  palleteColor();
  Class();
};
