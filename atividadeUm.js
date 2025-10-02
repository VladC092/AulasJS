const prompt = require("prompt-sync")();

let alturas = [];
let generos = [];

for (let i = 1; i <= 15; i++) {
  console.log(`\nPessoa ${i}:`);
  let altura = parseFloat(prompt("Digite a altura (em metros, ex: 1.75): "));
  let genero = prompt("Digite o gênero (M para Masculino, F para Feminino): ").toUpperCase();

  alturas.push(altura);
  generos.push(genero);
}

// Maior e menor altura
let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);

// Média de altura dos homens
let alturasHomens = alturas.filter((_, i) => generos[i] === "M");
let mediaHomens = alturasHomens.length > 0 ?
  (alturasHomens.reduce((a, b) => a + b, 0) / alturasHomens.length) : 0;

// Número de mulheres
let qtdMulheres = generos.filter(g => g === "F").length;

console.log("\n=== Resultados ===");
console.log("Maior altura:", maiorAltura.toFixed(2));
console.log("Menor altura:", menorAltura.toFixed(2));
console.log("Média altura homens:", mediaHomens.toFixed(2));
console.log("Quantidade de mulheres:", qtdMulheres);