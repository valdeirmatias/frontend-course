function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // scopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

//console.log("Media: " + calcularMedia([8, 8]))
//console.log(aprovacao (calcularMedia([8, 8])))
console.log(aprovacao([8, 8, 7]));

console.log(aprovacao([7, 5]));

// Função Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

contagemRegressiva(10);

