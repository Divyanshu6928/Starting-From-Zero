var body = document.body;
var h2 = document.querySelector('h2');

// Audio files
var q1 = new Audio('./Salamander_A0v16.mp3');
var q2 = new Audio('./Salamander_A1v16.mp3');
var q3 = new Audio('./Salamander_A2v16.mp3');
var q4 = new Audio('./Salamander_A3v16.mp3');
var q5 = new Audio('./Salamander_A4v16.mp3');
var q6 = new Audio('./Salamander_A5v16.mp3');
var q7 = new Audio('./Salamander_A6v16.mp3');
var q8 = new Audio('./Salamander_A7v16.mp3');

var q9 = new Audio('./Salamander_C1v16.mp3');
var q10 = new Audio('./Salamander_C2v16.mp3');
var q11 = new Audio('./Salamander_C3v16.mp3');
var q12 = new Audio('./Salamander_C4v16.mp3');
var q13 = new Audio('./Salamander_C5v16.mp3');
var q14 = new Audio('./Salamander_C6v16.mp3');
var q15 = new Audio('./Salamander_C7v16.mp3');
var q16 = new Audio('./Salamander_C8v16.mp3');

var q17 = new Audio('./Salamander_Ds1v16.mp3');
var q18 = new Audio('./Salamander_Ds2v16.mp3');
var q19 = new Audio('./Salamander_Ds3v16.mp3');
var q20 = new Audio('./Salamander_Ds4v16.mp3');
var q21 = new Audio('./Salamander_Ds5v16.mp3');
var q22 = new Audio('./Salamander_Ds6v16.mp3');
var q23 = new Audio('./Salamander_Ds7v16.mp3');

var q24 = new Audio('./Salamander_Fs1v16.mp3');
var q25 = new Audio('./Salamander_Fs2v16.mp3');
var q26 = new Audio('./Salamander_Fs3v16.mp3');


// Key press event
body.addEventListener('keydown', function(dets){

    h2.innerHTML = dets.code;

    if(dets.code == 'KeyA'){
        q1.currentTime = 0;
        q1.play();
    }

    else if(dets.code == 'KeyB'){
        q2.currentTime = 0;
        q2.play();
    }

    else if(dets.code == 'KeyC'){
        q3.currentTime = 0;
        q3.play();
    }

    else if(dets.code == 'KeyD'){
        q4.currentTime = 0;
        q4.play();
    }

    else if(dets.code == 'KeyE'){
        q5.currentTime = 0;
        q5.play();
    }

    else if(dets.code == 'KeyF'){
        q6.currentTime = 0;
        q6.play();
    }

    else if(dets.code == 'KeyG'){
        q7.currentTime = 0;
        q7.play();
    }

    else if(dets.code == 'KeyH'){
        q8.currentTime = 0;
        q8.play();
    }

    else if(dets.code == 'KeyI'){
        q9.currentTime = 0;
        q9.play();
    }

    else if(dets.code == 'KeyJ'){
        q10.currentTime = 0;
        q10.play();
    }

    else if(dets.code == 'KeyK'){
        q11.currentTime = 0;
        q11.play();
    }

    else if(dets.code == 'KeyL'){
        q12.currentTime = 0;
        q12.play();
    }

    else if(dets.code == 'KeyM'){
        q13.currentTime = 0;
        q13.play();
    }

    else if(dets.code == 'KeyN'){
        q14.currentTime = 0;
        q14.play();
    }

    else if(dets.code == 'KeyO'){
        q15.currentTime = 0;
        q15.play();
    }

    else if(dets.code == 'KeyP'){
        q16.currentTime = 0;
        q16.play();
    }

    else if(dets.code == 'KeyQ'){
        q17.currentTime = 0;
        q17.play();
    }

    else if(dets.code == 'KeyR'){
        q18.currentTime = 0;
        q18.play();
    }

    else if(dets.code == 'KeyS'){
        q19.currentTime = 0;
        q19.play();
    }

    else if(dets.code == 'KeyT'){
        q20.currentTime = 0;
        q20.play();
    }

    else if(dets.code == 'KeyU'){
        q21.currentTime = 0;
        q21.play();
    }

    else if(dets.code == 'KeyV'){
        q22.currentTime = 0;
        q22.play();
    }

    else if(dets.code == 'KeyW'){
        q23.currentTime = 0;
        q23.play();
    }

    else if(dets.code == 'KeyX'){
        q24.currentTime = 0;
        q24.play();
    }

    else if(dets.code == 'KeyY'){
        q25.currentTime = 0;
        q25.play();
    }

    else if(dets.code == 'KeyZ'){
        q26.currentTime = 0;
        q26.play();
    }

});