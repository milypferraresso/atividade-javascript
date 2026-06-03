const nomes = ["Alice", "Amanda", "Davi", "Livía", "Malu", "Matheus", "Paulo"];

const nomesInvertidos = [];
let posicaoOriginal = 6; 
for (let i = 0; i < 7; i++) {
    nomesInvertidos[i] = nomes[posicaoOriginal];
    posicaoOriginal--; 
}
alert("--- Listagem na Ordem Inversa ---");
for (let i = 0; i < 7; i++) {
    alert(nomesInvertidos[i]);
}