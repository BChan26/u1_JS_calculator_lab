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

let array = []
let inputNumbers = document.querySelectorAll(`.number`)
let inputMath = document.querySelectorAll(`.math`)
let inputEqualTo = document.querySelector(`.answer`)

let cell = document.querySelectorAll(`.cell-number`)
//
for (let i=0; i<cell.length; i++){
    cell[i].addEventListener('click', (event) => {
    // console.log(`Please please work I'm so tired ${i}`)
let selectedNumber = event.currentTarget.innerText 
    console.log(selectedNumber)
    array.push(selectedNumber)
    console.log(array)
    })
}






console.log(cell)

// const button = document.getElementsByClassName(`cell`)
// button.addEventListener('click', () => {
//     console.log(`Element clicked through function`)
// })

// addEventListener(`click`, console.log(`hello`))

// input.forEach(button => {
//     button.addEventListener(`click`, function getValue({
//         currentTarget.innerText = arrayNewValue
//         array.push(arrayNewValue)}
// )})

