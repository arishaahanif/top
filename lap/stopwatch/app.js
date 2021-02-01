var hour = 0
var min = 0
var sec = 0
var millisec = 0
var displayHour = document.getElementById('hour')
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMillisec = document.getElementById('milli')

function timer(){
    millisec++
    displayMillisec.innerHTML = millisec
    if(millisec == 100){
        sec++
        displaySec.innerHTML = sec
        millisec = 0 
    }if(sec == 60){
        min++
        dislayMin.innerHTML = min
        sec = 0 
    }
}if(min == 60){
    hour++
    dislayHour.innerHTML = hour
    min = 0 
}
function start(){
     var btn = document.getElementById('start').disabled = true
    timerplay = setInterval(timer , 10)
}
function pause(){
 var btn = document.getElementById('start').disabled = false
    clearInterval(timerplay)
}
function reset(){
    millisec = 0
    sec = 0
    min = 0
    hour = 0
    displayHour.innerHTML = hour
    displayMillisec.innerHTML = millisec
    displaySec.innerHTML = sec
    dislayMin.innerHTML = min
}
