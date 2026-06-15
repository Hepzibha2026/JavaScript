// guess the output
const obj = {
    name: 'hello'
}

obj.__proto__ = Array.prototype;
console.log(obj instanceof Array);
console.log(Array.isArray(obj));

//true, false
