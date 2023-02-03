'use strict'

const lang = document.documentElement.lang;
let counter;
let nameG = 'Анзор';

if (lang == 'ru') {
    counter = 0;
} else {
    counter = 1;
};

let arr = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];

switch (counter) {
    case 0:
    console.log(String(arr[0]));    
    break;

    case 1: 
    console.log(String(arr[1]));
    break;

    default:
    break;
};

nameG == 'Артем' ? console.log('директор')  : nameG == 'Александр' ? console.log('преподавватель') : console.log('студент');
