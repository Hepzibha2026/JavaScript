console.log('It is a log');
console.error('It is a error');
console.warn('It is a warn');

// console.assert
const x = 5;
const y = 3;
console.assert(x + y > 10, 'Expression returned false');

// console.time, console.timeEnd
console.time('timer');
console.timeEnd('timer');

// console.table
function Product(name, count) {
    this.name = name;
    this.count = count;
}

const phone = new Product('Phone', '15');
const pc = new Product('PC', '30');

console.table([phone, pc]);