var h1 = document.querySelector('h1');
var incBtn = document.querySelector('#inc');
var decBtn = document.querySelector('#dec');

var a = 0;

incBtn.addEventListener('click',function(){
    a++;
    h1.innerHTML = a;    
})

decBtn.addEventListener('click',function(){
    a--;
    h1.innerHTML = a;    
})