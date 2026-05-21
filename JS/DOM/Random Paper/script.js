var btn = document.querySelector('button');
var main = document.querySelector('#main');

btn.addEventListener('click',function(){
    // console.log("Clicked");
    var ele = document.createElement('div');
    // console.log(ele);
    var x = Math.random()*100;
    var y = Math.random()*100;
    var rot = Math.random()*361;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    

    ele.style.height = '50px';
    ele.style.width = '50px';
    ele.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    ele.style.position = 'absolute';
    ele.style.left = x + '%';
    ele.style.top = y + '%';
    ele.style.rotate = rot + 'deg';
    ele.style.border = '1px solid black';

    main.appendChild(ele);
    
})