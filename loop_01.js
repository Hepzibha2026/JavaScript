// for(const i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i))
// }
// Error

for(var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i))
}
// if change var  output should be 4, 4, 4, 4