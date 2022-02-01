function refresh(element) {
    let valor = element.value;
    let h1 = document.querySelector("#nome");
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor)
}

onload = function() {
    let nome = localStorage.getItem("nome");
    let h1 = document.querySelector("#nome");
    h1.innerHTML = nome;
    localStorage.removeItem("nome");
}