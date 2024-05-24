function showDate() {
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    let out = document.getElementById('current-date');
    let today = new Date();
    
    out.innerHTML = "Дата и время русской локали: " + today.toLocaleString('ru-RU') + "<br>";
    out.innerHTML += "Дата и время английской локали: " + today.toLocaleString('en') + "<br>";
    out.innerHTML += "Дата и время греческой локали: " + today.toLocaleString('el-GR') + "<br>";
    out.innerHTML += "Дата и время испанской локали: " + today.toLocaleString('es') + "<br>";
    out.innerHTML += "Дата и время финской локали: " + today.toLocaleString('fi') + "<br>";
    out.innerHTML += "Дата и время французской локали: " + today.toLocaleString('fr') + "<br><br>";
    
    out.innerHTML += "Текущий год: " + today.getFullYear() + "<br>";
    out.innerHTML += "Текущий месяц: " + months[today.getMonth()] + "<br>";
    out.innerHTML += "Текущая дата: " + today.getDate() + "<br>";
    out.innerHTML += "День недели: " + weekDays[today.getDay()];
}
