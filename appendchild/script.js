/*
//1

const ad_texto = document.getElementById("botao-texto");

let negoco = document.querySelector("#negoco");
let texto = document.createElement("p");
texto.innerText = "ola mundo";

ad_texto.addEventListener("click", () => {
    negoco.appendChild(texto);
});

//2
const ad_item = document.getElementById("ad-item");

let lista = document.querySelector("#lista");
let item = document.createElement("li");
item.innerText = "Novo item";

ad_item.addEventListener("click", () => {
    lista.appendChild(item);
});


//3 //ver depois com o sor
const ad_item_cont = document.getElementById("ad-item-cont");

let lista_el = document.querySelector("#lista-el");

let i = 1;

ad_item_cont.addEventListener("click", () => {
    let item_cont = document.createElement("li");
    item_cont.innerText = "item" + i;
    lista_el.appendChild(item_cont);
    i++;
})

//4 ou //5 mesmo principio
const ad_item_texto = document.getElementById("ad-input");

ad_item_texto.addEventListener("click", () => {
    let input = document.querySelector("#input");
    let item_input = document.createElement("li");
    item_input.innerText = input.value;
    let lista_input = document.querySelector("#lista-texto");
    lista_input.appendChild(item_input);
})

//6

const tt_desc = document.getElementById("t-button");

let tt_desc_cont = document.querySelector("#tt-desc-div");

tt_desc.addEventListener("click", () => {
    let t_input = document.querySelector("#t-input");
    let tit_input = document.createElement("h1");
    tit_input.innerText = t_input.value;
    tt_desc_cont.appendChild(tit_input);
    let d_input = document.querySelector("#d-input");
    let desc_input = document.createElement("p");
    desc_input.innerText = d_input.value;
    tt_desc_cont.appendChild(desc_input);
})

*/

//7

/*
campo titulo
campo gênero
campo ano

div
	borda simples solida
	titulo:
	gênero:
	ano:
*/

const b_card = document.getElementById("b-card");

let cards_div = document.querySelector("#cards");

b_card.addEventListener("click", () => {
    //titulo input
    //criar elemento titulo (h1)
    //genero input
    //criar elemento genero (p)
    //ano input
    //criar elemento ano (p)

})
