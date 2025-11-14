const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const option = document.getElementById('color');
const drawButton = document.getElementById('draw__button');

const colors = {
    green: 'green',
    red: 'red',
    blue: 'blue',
    orange: 'orange',
    gray: 'gray',
    black: 'black',
    yellow: 'yellow'
};

function drawSquare(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = colors.black;
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, w, h);
}

function draw() {
    const { red, green, blue } = colors;

    drawSquare(10, 10, 100, 100, red);
    drawSquare(10, 110, 100, 100, green);
    drawSquare(110, 10, 200, 200, blue);
}
draw();

function changeColorToAge(age) {
    if (age <= 18) drawSquare(10, 10, 100, 100, colors.orange);
    else if (age <= 30) drawSquare(10, 10, 100, 100, colors.green);
    else if (age <= 50) drawSquare(10, 10, 100, 100, colors.yellow);
}

function changeColorToName() {
    const colorArray = Object.values(colors);
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    drawSquare(10, 110, 100, 100, randomColor);
}

function changeColorToOption(value) {
    if (value !== 'None') {
        drawSquare(110, 10, 200, 200, value);
    }
}

drawButton.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    changeColorToAge(age);
    changeColorToName();
    changeColorToOption(option.options[option.selectedIndex].text);
});
