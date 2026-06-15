const obj = {
    name: "JavaScript",
    getName: function(){console.log(this.name)}

}

obj.getName.call({name: 'React js'});