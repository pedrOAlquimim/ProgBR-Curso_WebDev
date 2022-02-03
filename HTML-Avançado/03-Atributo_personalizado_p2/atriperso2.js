let lista = document.querySelector(".lista");
let num = parseInt(lista.dataset.num);
num = 10;

let conteudo = "";

for (let i = 0; i < num; i++) {
  conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;
