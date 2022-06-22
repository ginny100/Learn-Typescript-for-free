// Benefits of TypeScript
// challenges:
// - give the screens innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button')!
const firstInput = document.querySelector('#first-input') as HTMLInputElement // TypeScript feature
const secondInput = document.querySelector('#second-input') as HTMLInputElement // TypeScript feature
export const screen = document.querySelector('.screen')! // TypeScript feature

function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString()
}

button.addEventListener('click', () =>
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))