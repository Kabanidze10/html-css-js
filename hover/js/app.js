const board = document.querySelector('#board')
const number =1200
const colors = [
'#4900ff',
'#ae0001',
'#80FF99',
'#ffcf17',
'#9600FF',
'#6ed24c',
'#7f32cc',
'#da00a'

]   

for (let i = 0; i < number; i++) {

    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(event) {
    const element = event.target
    element. style.backgroundColor = '#171717'
    element.style.boxShadow = ` 0 0 2px #171717`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}