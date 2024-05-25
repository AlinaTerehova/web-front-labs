function showFullTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time-header').innerHTML = currentTime;
}
setInterval(showFullTime, 1000);

function showSeconds() {
    let today = new Date();
    let seconds = today.getSeconds();
    document.getElementById('time-body').innerHTML = seconds < 10 ? '0' + seconds : seconds;
}
setInterval(showSeconds, 1000);

function rotateSecondHand() {
    let today = new Date();
    let seconds = today.getSeconds();
    let degree = seconds * 6; 
    document.getElementById('second-hand').style.transform = `rotate(${degree}deg)`;
}
setInterval(rotateSecondHand, 1000);
rotateSecondHand(); 