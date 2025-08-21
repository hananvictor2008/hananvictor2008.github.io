const lista = querySelector("#lista")

for(let i = 1; i<1303; i++){

    let url = `https://pokeapi.co/api/v2/pokemon/"${i}`
    fetch(url).then(resposta => resposta.json)
    .then(resposta => {
        const liObj = document.createElement("li")
        const imgObj = document.createElement("img")
        const h1OBj = document.createElement("h1");
        const pObj = document.createElement("p");

        imgObj.src = resposta.sprites.front_default
        liObj.appendChild(imgObj)

        h1OBj.textContent = resposta.name
        liObj.appendChild(h1OBj)

        pObj.textContent = resposta
    })
}