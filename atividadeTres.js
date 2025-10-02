let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
console.log("Terceiro nome:", nomes[2]);

// 2. Adicionar um nome no início e no final
nomes.push("Fernanda");
nomes.unshift("Zilda");
console.log("Após adições:", nomes);

// 3. Remover último nome
nomes.pop();
console.log("Após remoção:", nomes);

// 4. map() dobrando valores
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(n => n * 2);
console.log("Dobrados:", dobrados);

// 5. filter() números maiores que 5
let lista = [1, 3, 5, 7, 9];
let maioresQue5 = lista.filter(n => n > 5);
console.log("Maiores que 5:", maioresQue5);