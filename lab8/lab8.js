const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    
    let content = "";
    content += "Дата и время русской локали: " + today.toLocaleString('ru-RU') + "<br>";
    content += "Дата и время английской локали: " + today.toLocaleString('en') + "<br>";
    content += "Дата и время греческой локали: " + today.toLocaleString('el-GR') + "<br>";
    content += "Дата и время испанской локали: " + today.toLocaleString('es') + "<br>";
    content += "Дата и время финской локали: " + today.toLocaleString('fi') + "<br>";
    content += "Дата и время французской локали: " + today.toLocaleString('fr') + "<br><br>";
    
    content += "Текущий год: " + today.getFullYear() + "<br>";
    content += "Текущий месяц: " + months[today.getMonth()] + "<br>";
    content += "Текущая дата: " + today.getDate() + "<br>";
    content += "День недели: " + weekDays[today.getDay()];
    
    out.innerHTML = content;
}

function showDayOfWeek() {
    const dayInput = document.getElementById('input-day').value;
    const monthInput = document.getElementById('input-month').value;
    const yearInput = document.getElementById('input-year').value;
    
    // Проверяем, что все поля заполнены
    if (dayInput && monthInput && yearInput) {
        const day = parseInt(dayInput);
        const month = parseInt(monthInput) - 1; // В JavaScript месяцы начинаются с 0
        const year = parseInt(yearInput);
        
        const date = new Date(year, month, day);
        const dayOfWeek = weekDays[date.getDay()];
        
        document.getElementById('day-of-week').innerHTML = "День недели: " + dayOfWeek;
    } else {
        // Выводим сообщение об ошибке, если не все поля заполнены
        document.getElementById('day-of-week').innerHTML = "Ошибка: Введите дату, месяц и год";
    }
}
