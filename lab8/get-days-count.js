function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let bitrhday = new Date (inputDate.value);
    let daysCount = (today - bitrhday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let outputDiv = document.getElementById('days-count');
    outputDiv.innerHTML = `Количество дней с даты рождения: ${daysCount}`;
}

function clearDaysCount() {
    document.getElementById('birthday').value = '';
    document.getElementById('days-count').innerHTML = '';
}