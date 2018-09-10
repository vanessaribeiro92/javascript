// Duas condicionais são equivalentes
// quando, dado um mesmo input, devolvem
// o mesmo output. Qual das próximas
// condicionais são equivalentes? Porque?
const rand = Math.floor(Math.random() * 21) - 10 /*gera numero randômico entre -10 e 10 */

// 1
// A -> valor positivo : 1
// B -> valor é positivo: 1 && valor igual a zero
// C -> o valor é ositivo : 1
// 0 
// A -> o valor é zero
// B -> o valor é zero
// C -> o valor é zero
// -1 
// A -> o valor é negativo: -1
// B -> o valor é negativo: -1
// C -> o valor é negatico: -1

//A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

// B
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}

// o A e C fazem a mesma coisa