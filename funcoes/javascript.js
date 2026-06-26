/*
//1
function mostrarMensagem() {
    console.log("Olá, javascript");
}

mostrarMensagem();
*/


//2
/*
function cumprimentar(nome) {
    console.log("Olá,", nome);
}

cumprimentar("Maria");
*/

//3
/*
function apresentarAluno(nome, idade) {
    console.log("meu nome é ", nome, " e tenho ", idade, " anos.");
}

apresentarAluno("joão", 16);
*/

//4
/*
function somar(n1, n2) {
    console.log(n1 + n2);
}

somar(4, 1);
*/

//5
/*
function dobro(n) {
    console.log(n*2);
}

dobro(7);
*/

//6
/*
function calcMedia(nota1, nota2) {
    console.log((nota1 + nota2)/2)
}

calcMedia(8, 7);
*/

//7
/*
function verifNumero(n) {
    if (n > 0) {
        console.log("positivo");
    }
    else if (n === 0) {
        console.log("zero");
    }
    else {
        console.log("negativo");
    }
}

verifNumero(0);
*/

//8
/*
function verifAprovacao(media) {
    if (media >= 6) {
        console.log("aprovado");
    }
    else if (media < 6) {
        console.log("reprovado");
    }
}

verifAprovacao(5.9);
*/

//9
/*
function calculadora(n1, n2, op) {
    if (op === "+") {
        console.log(n1 + n2);
    }
    else if (op === "-") {
        console.log(n1 - n2);
    }
    else if (op === "*") {
        console.log(n1 * n2);
    }
    else if (op === "/") {
        console.log(n1 / n2);
    }
}

calculadora(10, 10, "/");
*/

//10
/*
let saldo = 1000;
function sacar(valor) {
    if (valor <= 1000) {
        console.log("saldo realizado, resta: R$", saldo - valor);
    }
    else if (valor > 1000) {
        console.log("saldo insuficiente");
    }
}

sacar(1000);
*/

//extra
/*
function pedrappltesoura(ply1, ply2) {
    if (ply1 === "pedra" && ply2 === "tesoura") {
        console.log("Jogador 1 venceu");
    }
    else if (ply1 === "tesoura" && ply2 === "papel") {
        console.log("Jogador 1 venceu");
    }
    else if (ply1 === "papel" && ply2 === "pedra") {
        console.log("Jogador 1 venceu");
    }

    else if (ply2 === "tesoura" && ply1 === "papel") {
        console.log("Jogador 2 venceu");
    }
    else if (ply2 === "papel" && ply1 === "pedra") {
        console.log("Jogador 2 venceu");
    }
    else if (ply2 === "tesoura" && ply1 === "papel") {
        console.log("Jogador 2 venceu");
    }

    else if (ply1 === ply2) {
        console.log("empate");
    }
}

*/
