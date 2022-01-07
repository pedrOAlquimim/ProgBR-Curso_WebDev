var n1 = prompt("Qual foi o valor da Nota 1?: ");
var n2 = prompt("Qual foi o valor da Nota 2?: ");

var media = (parseInt(n1) + parseInt(n2)) / 2;
var concept = "";

if (media >= 9) {
    concept = "Ótimo"
    console.log(concept);

} else if (media >=7) {
    concept = "Bom";
    console.log(concept);

} else if (media >= 5) {
    concept = "Satisfatório";
    console.log(concept);

} else {
    concept = "Insatisfatório";
    console.log(concept);
}

console.log(media);
console.log(concept);

switch (concept) {
    case "Ótimo":
        console.log("Parabéns, você tirou o maior conceito com nota " + media + ".");
        break;

    case "Bom":
        console.log("Parabéns, você passou com nota " + media + ".");
        break;

    case "Satisfatório":
        console.log("Parabéns, você passou com nota " + media + ", mas poderia ser melhor.");
        break;

    case "Insatisfatório":
        console.log("Você não passou e sua nota foi " + media + ", estude mais da próxima.");
        break;

    default:
        console.log("Houve um erro, por favor digite um valor válido.");
        break;
}