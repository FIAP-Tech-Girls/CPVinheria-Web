const btnScroll = document.getElementById('scroll-botao');
const secaoAlvo = document.getElementById('conteudo-home');

btnScroll.addEventListener('click', function() {
  secaoAlvo.scrollIntoView({ behavior: 'smooth' });
});

function duvidasFrequentes(){
  window.open("#")
}


//Função sujeitas a mudanças futuras
function alertaBotaoAmelie(){
  alert("Amélie em construção")
}

// Tentar fazer validação depois
function alertaBotaoCadastro(){
    alert("Seja bem vindo(a)!")
}