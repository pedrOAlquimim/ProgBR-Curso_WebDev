// let image = document.querySelector(".passaro");

// image.addEventListener("click", () => {
//     image.setAttribute("src", "../../images/crop.jpg")

// });

let lista = document.querySelector(".lista")
let num = parseInt(lista.getAttribute("num"));

let conteudo = ""

for(let i = 0; i < num ; i++) {
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;