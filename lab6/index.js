const input = document.getElementById("transfer__input");
const fButton = document.querySelector(".F_button");
const cButton = document.querySelector(".C_button");
const output = document.querySelector(".output");

fButton.addEventListener('click', () => {
    toC(input.value)
})
cButton.addEventListener('click', () => {
    toF(input.value)
})

function toC(value) {
    let result = 5/9 * (value - 32);
    output.textContent = `OUTPUT: ${result}°C`
}
function toF(value) {
    let result = 9/5 * value + 32;
    output.textContent = `OUTPUT: ${result}°F`
}
