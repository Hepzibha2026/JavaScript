// join() method
const arr = ['JavaScript', 'TypeScript'];
const str = arr.join(' ');
console.log(str); 

// map() method
const arr2 = arr.map(e1 => e1.toUpperCase());
console.log(arr2);

// reverse() method
const arr3 = arr.reverse();
console.log(arr3);

// find() method
const arr4 = [1, 6, 10, 4];
const el = arr4.find(el => el > 5);
console.log(el);

// findIndex() method
const index = arr4.findIndex(el => el > 5);
console.log(index);

// filter() method
const arr5 = arr4.filter(el => el > 5);
console.log(arr5);

// some() method
const result = arr4.some(el => el > 5);
console.log(result);

// every() method
const result1 = arr4.every(el => el > 5);
console.log(result1);

// concat() method
const array1 = [1, 2];
const array2 = [3, 4];

const result2 = array1.concat(array2);
console.log(result2);

// reduce() method
const array3 = [1, 3, 4, 2];
const result3 = array3.reduce((sum, el) => sum += el, 0);
console.log(result3);