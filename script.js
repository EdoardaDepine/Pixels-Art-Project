const paletaCores = document.querySelector('#color-palette');
const quadroPixels = document.querySelector('#pixel-board');

paletaCores.addEventListener('click', function (event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
});

//adicionar a classe selected paleta cores ->
//e remover do elemento anterior
