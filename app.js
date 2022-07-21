
let bn39 = document.getElementById ('bn39')
bn39.addEventListener ('click', changeColor)

function changeColor () { 
    let text1 = document.getElementById ('text1')
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    text1.style.color = '#' + randomColor
    bn39.style.color = '#' + randomColor
}

FuckYou()