const numeros = [1,2,3,4,5,6,7,8]

function sum (numeros) {
    return numeros.reduce(function(acumulador, elemento){
        return acumulador + elemento 
    }, 0) //o 0 é o valor inicial do acumulador
}


function sumOdds (numeros) {
    return numeros.reduce(function(acumulador, elemento){
        return (elemento%2 == 0)? acumulador: acumulador + elemento 
    }, 0)
}

function product (numeros) {
    return numeros.reduce(function(acumulador, elemento){
        return acumulador * elemento
    }, 1)
}

function primos(param1, param2) {
    if(param2) {

    }
} 

