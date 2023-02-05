'use strict'

const text = 'ffggjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';

const a = function (b) {
    if (typeof(b) !== 'string') {
        alert('В функцию передан другой тип данных'); 
    } else {
        b = b.trim();
        if (b.length > 30) b = b.substring(30, 0) + '...';
        console.log(b);
    };
};

a(text);