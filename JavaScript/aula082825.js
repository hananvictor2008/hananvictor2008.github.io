const salvarEstilo = () => {
    localStorage.setItem("bgcolor", document.getElementById("bgcolor").value)
    localStorage.setItem("image", document.getElementById("image").value)
    localStorage.setItem("font", document.getElementById("font").value)
}

const pegarEstilo = () => {
    document.body.style.backgroundColor = localStorage.getItem("bgcolor")
    document.querySelector("p").style.fontFamily = localStorage.getItem("font")
    document.querySelector("img").setAttribute('src', localStorage.getItem('image'))
}

function setStyle() {
    salvarEstilo()
    pegarEstilo()
}

const botao = document.querySelector("p")
botao.addEventListener("mouseup", setStyle)

/*
function setStyles () {
    let currentColor = localStorage.getItem('bgcolor')
    let currentFont = localStorage.getItem('font')
    let currenImage = localStorage.getItem('image')
    document.getElementById('bgcolor').value = currentColor
    document.getElementById('font').value = currentFont
    document.getElementById('image').value = currenImage
    document.body.style.backgroundColor = '#' + currentColor
    document.querySelector("p").style.fontFamily = currentFont
    document.querySelector("img").setAttribute('src', currentImage)
}
*/