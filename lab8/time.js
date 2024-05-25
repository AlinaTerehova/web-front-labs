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
