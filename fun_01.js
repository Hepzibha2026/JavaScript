var name = 'JavaScript';
function doSomething() {
    setTimeout(() => {
        name = 'ReactJS';
    });
    console.log(name)
    var name = 'Angular'
}
doSomething();
console.log(name);
// output should be 
// undefined,  JavaScript
//if console.log(Name)  throws error