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

function alertaBotaoCadastro(){
  
  let nomeUsuario = document.getElementsById("emailUsuario").value;
  let senhaUsuario = document.getElementsById("senhaUsuario").value;

  // Pequena validação, sujeita a mudanças
  if (nomeUsuario == "" || senhaUsuario == ""){
    alert("Por favor, preencha todos os campos solicitados!")
  }else{ 
    alert("Seja bem vindo(a)!")
  }

}