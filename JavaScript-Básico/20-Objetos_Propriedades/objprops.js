var alunoPedro = {
    name: "Pedro",
    age : 18,
    course: "Computer Science"
}

// LENDO DE DAS DUAS FORMAS
console.log(alunoPedro.name);
console.log(alunoPedro["age"]);

// Como implementar uma nova propriedade de duas formas
alunoPedro.grades = [10, 9]
var newProp = "lastname"
alunoPedro[newProp] = "Alquimim"


console.log(alunoPedro.grades[0]);
console.log(alunoPedro["grades"][1]);