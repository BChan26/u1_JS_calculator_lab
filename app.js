//clear button - repurposed from Tic-Tac-Toe
document.querySelector(`.clearButton`).addEventListener('click', () => {
    location.reload();
});

//Logic of information input into the calculator
//Example: 2 + 3 = 5
//Input1: 2
//Input2: +
//Input3: 3
//Input4: =
//Output: 5
//Code needs to take in input, via event listener
//Code needs to store those values somewhere, either object/array
//code needs to connect inputs 1-3
//Code needs end the math with = to calculate
//Code needs to display result in output

let arrayNumber = []
let arrayMath = []
// let inputNumbers = document.querySelectorAll(`.number`)
// let inputMath = document.querySelectorAll(`.math`)
// let inputEqualTo = document.querySelector(`.answer`)

let cell = document.querySelectorAll(`.cell-number`)

for (let i=0; i<cell.length; i++){
    cell[i].addEventListener('click', (event) => {
    // console.log(`Please please work I'm so tired ${i}`)
let selectedNumber = event.currentTarget.innerText 
    console.log(selectedNumber)
    arrayNumber.push(selectedNumber)
    console.log(arrayNumber)
    })
}

let math = document.querySelectorAll(`.cell-math`)
for (let i=0; i<math.length; i++) {
    math[i].addEventListener('click', (event) => {
let selectedMath = event.currentTarget.innerText
    console.log(selectedMath)
    arrayMath.push(selectedMath)
    console.log(arrayMath)
    })
}

let equal = document.querySelector(`.cell-answer`)
equal.addEventListener