function alunosTurma (name, n1, n2) {
    return {
        name: name,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;

        }
    }
}

var turma = [
    alunosTurma("Pedro", 10, 10),
    alunosTurma("Gabriel", 8, 7),
    alunosTurma("Bruno", 10, 3),
    alunosTurma("João", 4, 8)

]


turma.forEach(function (a) {
    console.log(a);

})