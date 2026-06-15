// Nullish coalescing

// most devs write: - wrong way
const name = user.name || "Guest";

// better way
const name = user.name ?? "Guest";

//handles null/undefined properly.
//have you tried ?? yet ?

// Array methods
// Most devs write :  wrong way
const doubled = [];
for (let i=0; i<array.length; i++) {
    doubled.push(arr[i]*2);
}

// Better way
const doubled = arr.map(x => x*2);
// one-liner elegance.
// map, filter, reduce -
// which one do you love most?
