'use strict'

const arr = ['123', '234', '456', '6565', '45454', '676', '978'];

arr.forEach(item => {
    if (item[0] === '2' || item[0] === '4') console.log(item);
});

for (let i = 1; i <= 100; i++) {
    if (i === 1) continue;

    if (i === 2 || i === 3 || i === 5) {
        console.log(i);
        console.log('Делители этого числа: 1 и ' + i);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        console.log(i);
        console.log('Делители этого числа: 1 и ' + i);
    };
};
