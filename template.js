let user = { name: 'Hepzibha',
    surname: 'Sundar'
}
const str = 'Welcome ' + user.name + ' ' + user.surname + '!';

console.log(str);

// template literals

const str1 = `Welcome ${user.name} ${user.surname}!`;
console.log(str1);
