const prompt = require("prompt-sync")();

function exibirResumo(total, totalComDesconto) {
  console.log("\n=== Resumo da Compra ===");
  console.log("Valor total antes do desconto: R$ " + total.toFixed(2));
  console.log("Valor final com desconto: R$ " + totalComDesconto.toFixed(2));
}

let preco = parseFloat(prompt("Digite o preço do produto: R$ "));
let qtd = parseInt(prompt("Digite a quantidade: "));

let total = preco * qtd;
let desconto = total >= 100 ? total * 0.10 : 0;
let totalComDesconto = total - desconto;

exibirResumo(total, totalComDesconto);