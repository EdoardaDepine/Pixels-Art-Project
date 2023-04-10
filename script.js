const paletaCores = document.querySelector('#color-palette');
const pixels = document.querySelectorAll('.pixel');

paletaCores.addEventListener('click', function (event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
});

for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', function (event) {
    const corSelecionada = document.querySelector('.selected');
    const estilosCSS = window.getComputedStyle(corSelecionada);
    const background = estilosCSS.getPropertyValue('background-color');
    event.target.style.backgroundColor = background;
  });
}
