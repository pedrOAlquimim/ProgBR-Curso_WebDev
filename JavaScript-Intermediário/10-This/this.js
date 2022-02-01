const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");

function upperCase () {
    this.innerHTML = this.innerHTML.toUpperCase();
}

t1.addEventListener("click", upperCase);
t2.addEventListener("click", upperCase);