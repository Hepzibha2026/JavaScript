// Create debounce function in javascript
function debounce(func, wait) {
    let timerId;
    return function(...args) {
        let context = this;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}
//uses
function handleInput() {
    console.log("Input event triggered", );
    // your actual function logic goes here
}
const debouncedInputHandler = debounce(handleInput, 500);

document.getElementById('btn')
.addEventListener('click', debounceInputHandler)

