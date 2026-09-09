window.document.write("Alô Mundo") //window é o dominio de todo navegador, porem não é necessario, documente representa a pagina
console.log("teste") //"defer" paralisa a execução do código até a pagina toda ser carregada
document.body.style.backgroundColor = "rgb(23,54,6)"
const botao = document.getElementById("cor")
let i

function coresAleatorias(){
    let numAleatorio = Math.random()*256
    let inteiroAleatorio = parseInt(numAleatorio)
    return inteiroAleatorio
}

    function mudarParaCorAleatoria() {
    let vermelho = coresAleatorias()
    let verde = coresAleatorias()
    let azul = coresAleatorias()
    let corSorteada = "rgb(" + vermelho + "," + verde + "," + azul + ")"
    document.body.style.backgroundColor = corSorteada
}

for(i = 0;(i<99999);i++){
    setInterval(mudarParaCorAleatoria,1000)  
}