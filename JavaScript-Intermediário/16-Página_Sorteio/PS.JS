let pessoas = ["Pedro", "Bruno", "João", "Gabriel"];

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let np = pessoas.length

    let ns = Math.floor(Math.random() * np);
    document.querySelector(".d").innerHTML = pessoas[ns]
});