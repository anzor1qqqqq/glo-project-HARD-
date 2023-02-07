'use strict'

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const weekToday = new Date().getDay();

for (let i = 0; i < week.length; i++) {
    if (i === 0 || i === 6) {
        console.log(`%c${week[i]}\n`, 'font-style: italic;');
        continue;
    };

    if (i === weekToday) {
        console.log(`%c${week[i]}\n`, 'font-weight: bold;');
        continue; 
    };

    console.log(`${week[i]}\n`);
};