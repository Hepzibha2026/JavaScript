var name = 'JavaScript';
function printName() {
    function inner() {
        console.log(name);
        //name = "inside....";
        console.log(this.name);
    }
    inner();

}
printName.call({name: 'Node js'});