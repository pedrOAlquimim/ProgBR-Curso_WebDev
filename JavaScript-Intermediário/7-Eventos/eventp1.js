const h1 = document.querySelector(".h1");

// h1.addEventListener("click", event => {
//     h1.style.backgroundColor = "red"
// })

function styleH1() {
    h1.style.backgroundColor = "red";
}

function changeH1() {
    let input = document.querySelector("#texto");
    h1.innerText = input.value;
}