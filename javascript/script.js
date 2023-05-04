var scrollCount = 0;
document.getElementById('scroll-icon').addEventListener('click',function(){
  window.requestAnimationFrame(function(){
        scrollCount = window.pageYOffset;
   scrollDown() 
  });
});

/*
document.getElementById('scroll-botao').addEventListener('click',function(){
  window.requestAnimationFrame(function(){
        scrollCount = window.onpageshow;
   scrollDown() 
  });
});

*/

function scrollDown(){
  scrollCount += 25;
  if (window.pageYOffset < document.getElementById('scroll').clientHeight){
  window.scrollTo(0,scrollCount);
  window.requestAnimationFrame(function(){
    scrollDown();
  });
  }
  else {
  }
};

window.onscroll = function(){
  if (window.pageYOffset > 500) {
        document.getElementById('conteudo').classList.add('fade-in-left')
       window.setTimeout(function(){
          document.getElementById('conteudo').classList.add('fade-in-bottom')
       },500)
  }
}