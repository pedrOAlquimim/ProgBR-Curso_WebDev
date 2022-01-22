var a = {nome: "Pedro", sobrenome: "Alquimim"}

console.log(a);

function obj(n, s) {
    return {nome: n, sobrenome: s}

}

var b = obj("Igor", "Oliveira");
console.log(b);


function obj2 (n, s) {
    this.nome = n;
    this.sobrenome = s;

}

var c = new obj2("Gabriel", "Alves");
console.log(c);