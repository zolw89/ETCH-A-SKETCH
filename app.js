let nums = document.querySelectorAll('.size');
let reset = document.querySelector('#reset')
let num = 16;
let color = 'transparent'

// color pick depend of which color button was clicked

function handleHover() {
      if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        this.style.backgroundColor = color;
      }
  }

  function colorChoice(userpick) {
    color = userpick
}

// set num depends of which butotn user clicked

nums.forEach(num => num.addEventListener('click', (e) => {
    num = e.target.id;
    handleReset()
    sketchBox = boxSize(num);
}))



// create number of divs depends on user choice

function boxSize(num) {
    for(let i = 0; i < Math.pow(num, 2); i++ ) {
        let sketchBox = document.querySelector('.sketch-box');
        let div = document.createElement('div')
        div.classList.add(`s${num}`)
        sketchBox.appendChild(div)
        div.addEventListener('mouseover', handleHover)
    }
}

// reset button resets whole board

let handleReset = function() {    
    let sketchBox = document.querySelector('.sketch-box');
    let div = sketchBox.querySelectorAll('div')
    div.forEach((item) => item.remove())
}

reset.addEventListener('click', handleReset)

