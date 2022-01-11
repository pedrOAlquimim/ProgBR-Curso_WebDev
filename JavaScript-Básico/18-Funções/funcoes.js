function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;

}

var num1 = 2;
var num2 = 10;

var media_ = media(num1, num2);
console.log(media_);

console.log("-------------------------------------");

// Arrow funtion

var double = (no1) => {
    return no1 * 2;

}

var dobro = 5;

console.log(double(dobro));