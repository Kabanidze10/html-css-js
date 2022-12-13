const board = document.querySelector('#board')
const number = 1200
const colors = [
  '#4eb0ff',
  '#e04eff',
  '#4eff78',
  '#4efff9',
  '#ffba4e',
  '#ff4e6b',
]


const slow2 = document.querySelector('#super') 

for (let i = 0; i < number; i++) {
  const square = document.createElement('div')
  const slow = document.querySelector('#slow')
  const fast = document.querySelector ('#fast')
  const clean = document.querySelector ('#clean')
  square.classList.add('square')



  
  
  


  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  square.addEventListener('click', setColor)

  
  slow.addEventListener('click', function pushButton() { 
  square.classList.toggle('transition_one')
 })
 


  board.append(square)

  clean.addEventListener('click', function pushCleanButton() { 
    square.classList.toggle('clean')
   })


}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#171717'
  element.style.boxShadow = `0 0 2px #171717`
}

 function  getRandomColor()  {
  return colors[Math.floor(Math.random() * colors.length)]
}

function cleanButton (event) {
  const element = event.target;
  element.style.backgroundColor = "#171717"
  element.sytle.boxShadow = `0 0 2px #171717`
}


