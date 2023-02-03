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

function foo(i) {
    console.log(String(arr[i]));
};

foo(counter);

nameG == 'Артем' ? console.log('директор')  : nameG == 'Александр' ? console.log('преподавватель') : console.log('студент');
