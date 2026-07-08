const ad_texto = document.getElementById("botao-texto");
const ad_item = document.getElementById("ad-item");
const ad_item_cont = document.getElementById("ad-item-cont");

//
let negoco = document.querySelector("#negoco");
let texto = document.createElement("p");
texto.innerText = "ola mundo";

ad_texto.addEventListener("click", () => {
    negoco.appendChild(texto);
});

//
let lista = document.querySelector("#lista");
let item = document.createElement("li");
item.innerText = "Novo item";

ad_item.addEventListener("click", () => {
    lista.appendChild(item);
});


//
let lista_el = document.querySelector("#lista-el");

let i = 1;

ad_item_cont.addEventListener("click", () => {
    let item_el = document.createElement("li");
    item_el.innerText = `Item ${i}`;
    lista.appendChild(item_el);
    i++;
});

