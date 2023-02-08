'use strict'

let startTime = () => {
    const lessonOne = document.querySelector('.lesson_one');
    const lessonTwo = document.querySelector('.lesson_two');

    const arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const arrWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const date = new Date();
    const todayDay = date.getDate();
    const todayYear = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let hourText;

    const todayMonth = arrMonth.find((item, index) => {
        return date.getMonth() === index;
    });

    const todayWeek = arrWeek.find((item, index) => {
        return date.getDay() === index;
    });

    if (hours === 1 || hours === 13) {
        hourText = 'час';
    } else if (hours >= 2 && hours <= 4)  {
        hourText = 'часа';
    } else {
        hourText = 'часов';
    };

    lessonOne.textContent = 'Сегодня ' + todayWeek + ', ' + todayDay + ' ' + todayMonth + ' ' + todayYear + ' года, ' + hours + ' ' + hourText + ' ' + minutes + ' минут ' + seconds + ' секунды' ;
    lessonTwo.textContent = date.toLocaleString().replace(',', ' -');
};

startTime();

setInterval(() => {
    startTime();
}, 1000);
