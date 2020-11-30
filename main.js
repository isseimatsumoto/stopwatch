const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds1000 = 0;
let seconds100 = 0;
let seconds10 = 0;
let seconds = 0;

function stopWatch(){
    seconds++;
    if(seconds / 10 == 1){
        seconds10++;
        seconds=0;
        if(seconds10 / 10 == 1){
            seconds100++;
            seconds10=0;
            if(seconds100 / 10 == 1){
                seconds1000++;
                seconds100=0;
            }
        }
    }
    
    timer.innerHTML = seconds1000 + ":" + seconds100 + ":" + seconds10 + ":" + seconds;
}


let interval;

start.addEventListener("click",function(){
    interval = setInterval(stopWatch,100);
});

stop.addEventListener("click",function(){
    clearInterval(interval);
});

reset.addEventListener("click",function(){
    clearInterval(interval);
    timer.innerHTML ="0:0:0:0";
    seconds1000 = 0;
    seconds100 = 0;
    seconds10 = 0;
    seconds = 0;
});
