const user = {
    name: 'John',
    surname: 'Smith'
};
 const name1 = user.name;
 const surname1 = user.surname;
console.log(name1, surname1);

//destructure
const {name, surname} = user;
console.log(user);
