var h3 = document.querySelector('h3');
var p = document.querySelector('p');
// console.log(text);
var text = h3.innerText;
var text2 = p.innerText;
// console.log(text2);

// console.log(text);
var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

h3.addEventListener('mouseenter',function(){
    // console.log(text.split(''));
    var int = setInterval(function(){
        var str = text.split('').map((char,index) => {
            // console.log('jk');
            return characters.split('')[Math.floor(Math.random() * 53)];
            
        });

        h3.innerText = str.join('');
    },30)
    // console.log(str);

    setTimeout(function(){
        clearInterval(int);
        h3.innerText = text;
        h3.style.backgroundColor = 'rgb(45, 52, 45)'
        h3.style.padding = '20px';
        h3.style.borderRadius = '10px'
    },1000)
    
})

p.addEventListener('mouseenter',function(){
    console.log(text2.split(''));
    var int = setInterval(function(){
        var str = text2.split('').map((char,index) => {
            // console.log('jk');
            return characters.split('')[Math.floor(Math.random() * 53)];
            
        });

        p.innerText = str.join('');
    },30)
    // console.log(str);

    setTimeout(function(){
        clearInterval(int);
        p.innerText = text2;
        p.style.backgroundColor = 'rgb(45, 52, 45)'
        p.style.padding = '20px';
        p.style.borderRadius = '10px'
    },1000)
    
})


