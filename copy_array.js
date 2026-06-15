// spread syntax
const arr = [1, 5, 7, 2];
const arr2 = [...arr];
console.log(arr2);

// map() method
const arr1 = arr.map(el => el);
console.log(arr1);

// slice() method
const arr3 = arr.slice();
console.log(arr3);

// Array.from method
const arr4 = Array.from(arr);
console.log(arr4);

// concat() method
const arr5 = arr.concat();
console.log(arr5);

// filter() method
const arr6 = arr.filter(el => true);
console.log(arr6);

// for loop
const arr7 = [];
for(let i=0; i<arr.length; i++) {
    arr8 = arr7.push(arr[i]);
    console.log('arr8 : ', arr8, ' i :', i);
}
console.log(arr7);