let numeros = [];
let soma = 0;
let media;

for (let i = 0; i < 8; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
    soma = soma + numeros[i];
}

media = soma / 8;

alert("Média: " + media);
alert("Valores acima da média:");

for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        alert(numeros[i]);
    }
}