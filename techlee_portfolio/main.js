var start = document.getElementById('start'); //id from <button>
var pause = document.getElementById('pause');//id from <button>
var reset = document.getElementById('reset');//id from <button>

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

let alarm_25m = new Audio ('long-bell.mp3');
let alarm_5 = new Audio ('our-chimes.mp3');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if (startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {alert("Timer is running")}
    alarm_25m.play();
})

reset.addEventListener('click', function(){
    location.reload();
})

pause.addEventListener('click', function(){
    clearInterval(startTimer);
    startTimer = undefined; 
})




function timer(){
    //Work Timer
    if(ws.innerText != 0){
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }


    //Break Timer
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Icremenet counter by one when cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;

    }

    //Alarms
    if(wm.innerText == 25){
        alarm_25m.play();
    } else {
        console.log("not playing bells");
    }

    if(bm.innerText == 5 && wm.innerText == 0 && ws.innerText == 0){
        alarm_5.play();
    }else{
        console.log("not playing chimes");
    }

    
}

