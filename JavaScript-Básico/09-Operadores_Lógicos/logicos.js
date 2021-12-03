// && E / And
// || Ou / Or
// ! Negativo (Negar/inverter o valor final)


var idade = 9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;

console.log("Idade ", idade);
console.log("Maior que 65 ", maior65);
console.log("Menor que 10 ", menor10);
console.log("Tem direito a gratuidade? ", gratuidade);