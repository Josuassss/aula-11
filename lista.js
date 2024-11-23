// mais prático
const nomes = ["Josué", "Junior"];

// mais chato
const notas = [];
notas[0] = 8;
notas[1] = 9;

const listaDeFrutas = ["Laranja", "Maça", "Manga"];

/* for (i = 0; i < listaDeFrutas.length; i++) {
    console.log(listaDeFrutas[i]);
} */

listaDeFrutas.push("abacaxi") // insere um novo item ao final

console.log(listaDeFrutas)

listaDeFrutas.unshift("morango") // insere um novo item ao inicio

console.log(listaDeFrutas)

listaDeFrutas.pop() // Tira um item do final da lista

listaDeFrutas.shift() // Tira o primeiro item da lista

listaDeFrutas.splice() // Tira e coloca em qualquer posição