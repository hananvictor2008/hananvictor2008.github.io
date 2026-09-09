<<<<<<< HEAD
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
=======
const lista = document.querySelector("#lista");
let resultados = []

    for (let i = 1; i <= 1025; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error(`Erro ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(pokemon => {
            let linha = pokemon.name
            resultados.push({ id: i, nome: pokemon.name, sprite: pokemon.sprites.front_default});

            if (resultados.length == 1025) {
                resultados.sort((a,b) => a.id - b.id)

                resultados.forEach(value => {
                    const liObj = document.createElement("li")
                    const imgObj = document.createElement("img")
                    const pObj = document.createElement("p")

                    imgObj.src = value.sprite
                    pObj.textContent = `#${value.id} ${value.nome}`

                    liObj.appendChild(imgObj)
                    liObj.appendChild(pObj)
                    lista.appendChild(liObj)
                })
            }
        })
        .catch(erro => {
            console.error(`Erro ao buscar Pokémon #${i}:`, erro.message);
        });
    }

console.dir(resultados)
>>>>>>> 7ce6b3754a7ea8a0a1f0c9df504b1a73d793e912
