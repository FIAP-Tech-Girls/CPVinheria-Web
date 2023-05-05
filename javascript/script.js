const btnScroll = document.getElementById('scroll-botao');
const secaoAlvo = document.getElementById('conteudo-home');

btnScroll.addEventListener('click', function() {
  secaoAlvo.scrollIntoView({ behavior: 'smooth' });
});

function alertaBotao(){
  alert("Amélie em construção")
}