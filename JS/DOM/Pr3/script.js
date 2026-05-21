var arr = [
    {
        team : 'MI',
        primary : 'blue',
        secondary : 'gold',
        captain : 'Hardik Pandya',
        trophies : 5
    },
    {
        team : 'CSK',
        primary : 'yellow',
        secondary : 'blue',
        captain : 'Ruturaj Gaikwad',
        trophies : 5
    },
    {
        team : 'RCB',
        primary : 'red',
        secondary : 'black',
        captain : 'Rajat Patidar',
        trophies : 1
    },
    {
        team : 'SRH',
        primary : 'orange',
        secondary : 'brown',
        captain : 'Pat Cummins',
        trophies : 1
    },
    {
        team : 'KKR',
        primary : 'purple',
        secondary : 'gold',
        captain : 'Ajinkya Rahane',
        trophies : 3
    }
]

var team = document.querySelector('h3');
var captain = document.querySelector('#captain');
var trophies = document.querySelector('#trophies');
var box = document.querySelector('#box');
var btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var winner = arr[Math.floor(Math.random()*arr.length)];

    team.innerHTML = winner.team;
    captain.innerHTML = winner.captain;
    trophies.innerHTML = winner.trophies;
    box.style.color = `${winner.primary}`;
    box.style.backgroundColor = `${winner.secondary}`;
})