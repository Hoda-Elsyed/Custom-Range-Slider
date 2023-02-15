const outputEl = document.querySelector('output')
const inputEl  = document.querySelector('input')

const outputWidth = getComputedStyle(outputEl).getPropertyValue('width')
const outputWidthWithoutPx = +outputWidth.slice(0, 2)/2
console.log(outputWidthWithoutPx);

const inputValue =  inputEl.value;
outputEl.style.left = `calc(${inputValue}% - ${outputWidthWithoutPx}px)`
outputEl.innerText = inputValue

moveSlider()

function moveSlider(){
    inputEl.addEventListener('input', (e)=>{
        outputEl.style.left = `calc(${e.target.value}% - ${outputWidthWithoutPx}px)`
        outputEl.innerText = e.target.value
    })
}

