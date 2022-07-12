const color0 = document.getElementsByClassName('color')[0];
color0.style.backgroundColor = 'black';
const color1 = document.getElementsByClassName('color')[1];
color1.style.backgroundColor = 'red';
const color2 = document.getElementsByClassName('color')[2];
color2.style.backgroundColor = 'blue';
const color3 = document.getElementsByClassName('color')[3];
color3.style.backgroundColor = 'green';

function mudaCor(event) {
  const function0 = document.getElementsByClassName('selected')[0];
  function0.classList.remove('selected');
  const function1 = event.target.classList.add('selected');
}
color0.addEventListener('click', mudaCor);
color1.addEventListener('click', mudaCor);
color2.addEventListener('click', mudaCor);
color3.addEventListener('click', mudaCor);

function clicou(event) {
  if (event.target.classList.contains('pixel')) {
    const click1 = document.querySelector('.selected');
    const click2 = window.getComputedStyle(click1).getPropertyValue('background-Color');
    event.target.style.backgroundColor = click2;
  }
}
document.addEventListener('click', clicou);
