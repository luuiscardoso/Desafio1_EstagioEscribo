function VerificaNumero(numero){
    if(numero % 3 == 0 || numero % 5 == 0){
        return true
    } else {
        return false
    }
}

function Divisiveis3ou5(numero){
    let soma = 0

    for(let i = 1; i < numero; i++){
        if(VerificaNumero(i)){
            soma += i
        }
    }

    return soma
}

console.log(Divisiveis3ou5(11))