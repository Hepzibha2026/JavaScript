const obj = {
    count: 0,
    incrementCount : () => this.count++,
    print: function(){console.log(this.count)}
}
obj.incrementCount();
obj.incrementCount();
obj.print()