'use strict'

const num = 266219;
let num2 = String(num.toString().split('').reduce((elem, item) => elem * item));
console.log(num2);

num2 = String((num2)**3);
console.log(num2.slice(0,2));
