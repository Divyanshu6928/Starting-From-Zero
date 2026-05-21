var btn = document.querySelector('button');
var percent = document.querySelector('h2');
var inner = document.querySelector('#inner');
var p = document.querySelector('p');
var c = 0;

btn.addEventListener('click',function(){
    console.log("Hlo");
    // inner.style.backgroundColor = 'red';
    var num = 50 + Math.floor(Math.random()*50)
    console.log(num);
    
    var int = setInterval(function(){
        c++;
        console.log(c);
        percent.innerHTML = c + '%';
        inner.style.width = c + '%';
        btn.style.pointerEvents = 'none';
        p.innerHTML = 'Downloading.....'
    },num)

    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
        // btn.style.backgroundColor = 'green';
        btn.style.opacity = 0.6
        p.innerHTML = `Downloaded in <b style='color:red'>${num/10}</b> seconds`;
        console.log(`Downloaded in ${num/10} seconds`);
        
    },num*100)
})