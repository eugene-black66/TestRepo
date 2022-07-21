let button1 = document.getElementById ('button1')
button1.addEventListener ('click', changeColor)

function changeColor () { 
    let text1 = document.getElementById ('text1')
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    text1.style.color = '#' + randomColor
    button1.style.color = '#' + randomColor
}

