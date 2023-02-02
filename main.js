'use strict'

const num = 266219;
const num2 = String(num);
let resul = 1;
let degree = 1;
let resul2 = 1;

for (let i = 0; i < num2.length; i++) {
    resul *= num2[i];  
};

console.log(resul);

function foo() {
    resul2 *= resul;
    if (degree === 3) return;
    degree++;
    foo();
};

foo();