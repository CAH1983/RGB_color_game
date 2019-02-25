let numSquares = 6;
let colors = generateRandomColors(numSquares);

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i=0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = 'none';
        }
    }
});


hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.background = 'block';
    }
});


resetButton.addEventListener('click', function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplya to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = 'new colors';
    // change colors of squares
    for(let i=0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
    messageDisplay.textContent = '';

})


colorDisplay.textContent = pickedColor;
// loop each square to assign one color from the array colors 
for(let i=0; i<squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener('click', function() {
        // grab color of clicked sq
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        //compare color to pickedColor, if user wins / else
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play again!';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again';
        }
    });   
}

function changeColors(color) {
    // loop through all squares
    for(let i=0; i< squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // repeat num of times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr; 
}

function randomColor() {
    // pick a 'red' from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // green
    let g = Math.floor(Math.random() * 256);
    // blue
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' +b + ')';
}