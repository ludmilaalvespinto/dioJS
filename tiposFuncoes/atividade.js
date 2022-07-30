const alunos =[
    {
        nome: `João`,
        nota: 3,
        turma:`1B`,
    },
    {
        nome:`Maria`,
        nota: 9,
        turma:`1A`,
    },
    {
        nome:`Guilherme`,
        nota: 10,
        Turma:`3C`
    },

];

function alunosAprovados (arr,media){
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
         const { nota,nome } = arr [i];  

        if ( nota >= media){
            aprovados.push (nome);
        }

    }

    return aprovados;
    
}

console.log(alunosAprovados(alunos,5));