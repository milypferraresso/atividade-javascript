const nomes = ["Alice", "Aline", "Davi", "Kamily", "Karol", "Lívia", "Malu", "Matheus", "Paulo"];

const idades = [15, 16, 15, 15, 15, 17, 15, 14, 14];

alert("--- Listagem de Pessoas Menores de Idade ---");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert("Nome: " + nomes[i] + " | Idade: " + idades[i]);
    }
}