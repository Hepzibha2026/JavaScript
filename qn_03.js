async function fn1() {
    for(let i = 0; i < 4; i++) {
        Promise.resolve(i)
        .then((res) => console.log(res))
    }
}
fn1();