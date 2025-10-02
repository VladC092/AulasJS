
//1//
const prompt = require("prompt-sync")();

let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (populacaoA <= populacaoB) {
  populacaoA += populacaoA * taxaA;
  populacaoB += populacaoB * taxaB;
  anos++;
}
console.log(`Serão necessários ${anos} anos para que o país A ultrapasse ou iguale o país B.`);





//2//
const prompt = require("prompt-sync")();

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro: `));
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);



//3//
const prompt = require("prompt-sync")();

let n = parseInt(prompt("Quantos números deseja informar? "));
let numeros = [];

for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt(`Digite o ${i+1}º número: `)));
}
let menor = Math.min(...numeros);
let maior = Math.max(...numeros);
let soma = numeros.reduce((acc, val) => acc + val, 0);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);



//4//
let salario = 1000;
let ano = 1996;
let percentual = 0.015;

while (ano <= new Date().getFullYear()) {
  salario += salario * percentual;
  percentual *= 2;
  ano++;
}

console.log(`O salário atual do funcionário é R$ ${salario.toFixed(2)}`);





//5//
const prompt = require("prompt-sync")();

function calcularCirculo() {
  let raio = parseFloat(prompt("Digite o raio do círculo: "));
  let area = Math.PI * Math.pow(raio, 2);
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área do círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularCirculo();





//6//
const prompt = require("prompt-sync")();

function calcularInvestimento() {
  let capital = parseFloat(prompt("Digite o capital inicial: "));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %): ")) / 100;
  let tempo = parseInt(prompt("Digite o tempo do investimento (em meses): "));

  let montante = capital * Math.pow((1 + taxa), tempo);

  console.log(`O montante após ${tempo} meses será de R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();
