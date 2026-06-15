const obj = { name: 'JavaScript' };
const obj1 = Object.create(obj);
delete obj1.name;
console.log(obj1.name);