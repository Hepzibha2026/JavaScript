// Array methods
// most devs write : - wrong way
const doubled = [];
arr = [1, 2, 3];

for (let i=0; i<arr.length; i++) {
   arr1 = doubled.push(arr[i]*2);
   console.log(arr1);

}
console.log(doubled);

// Better way
const doubled1 = arr.map(x => x*2);
console.log(doubled1);
//one-liner elegance.
// map, filter, reduce -
// which one do you love most?