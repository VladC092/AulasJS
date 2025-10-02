const jsonData = `
[
  { "nome": "Fernanda", "notas": [9, 10, 9], "curso": "Engenharia" },
  { "nome": "Amelia", "notas": [6, 6, 7], "curso": "Direito" },
  { "nome": "Vladimir", "notas": [8, 6, 9], "curso": "Sistemas de Informação" }
]
`;

const alunos = JSON.parse(jsonData);

function exibirAprovados(lista) {
  lista.forEach(aluno => {
    let soma = aluno.notas.reduce((acc, n) => acc + n, 0);
    let media = soma / aluno.notas.length;

    if (media >= 7) {
      console.log("=== Aluno Aprovado ===");
      console.log("Nome:", aluno.nome);
      console.log("Média:", media.toFixed(2));
      console.log("Curso:", aluno.curso);
      console.log("----------------------");
    }
  });
}

exibirAprovados(alunos);