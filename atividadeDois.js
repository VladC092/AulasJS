
const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno: ");
let numAulas = parseInt(prompt("Digite o número total de aulas: "));
let faltas = parseInt(prompt("Digite o número de faltas: "));
let p1 = parseFloat(prompt("Digite a nota da P1: "));
let p2 = parseFloat(prompt("Digite a nota da P2: "));

let frequencia = ((numAulas - faltas) / numAulas) * 100;
let media = (p1 + p2) / 2;

console.log("\n=== Resultado ===");
console.log("Aluno:", nome);
console.log("Frequência:", frequencia.toFixed(2) + "%");
console.log("Média:", media.toFixed(2));

if (frequencia < 75) {
  console.log("Situação: REPROVADO por frequência");
} else if (media >= 7) {
  console.log("Situação: APROVADO");
} else if (media >= 5) {
  console.log("Situação: RECUPERAÇÃO");
} else {
  console.log("Situação: REPROVADO por nota");
}