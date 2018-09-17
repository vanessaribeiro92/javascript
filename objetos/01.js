// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

№ Nacional = 012	Nome = Butterfree	Nome japonês = Butterfree	№ em Johto = 026	Evolui de = Metapod

const pokemon = {
  nNacional: 012,
  nome: "Butterfree",
  nomeJaponês: "Butterfree",
  nJohto: 026,
  evoluiDe: "Metapod"
}

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
const frase = {
  nome: "Vanessa",
  nomeJapones: "Vanessachan"
}
console.log(`Hello, my name is ${frase.nome} and my name in Japanese is ${frase.nomeJapones}`)
//ou
pokemon.frase = function() {
  console.log (`Hello, my name is ${this.nome}. And my name in Japonese is ${this.nomeJapones}.`)
}

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

pokemon["can_fly"] = true

//ou

pokemon.can_fly = true

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

pokemon["fly"] = function () {
  if (this.can_fly === true) {
    return "Flyyyyiinnngggg!"
  } else {
    return "Sorry, i can't fly"
  }
}
//ou
pokemon.fly = function () {
  if (this.can_fly) {
    return "Flyyyyiinnngggg!"
  } else {
    return "Sorry, i can't fly"
  }
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon["do_something"] = function () {

    if (Math.floor(Math.random() * 3 ) === 0) {
      return "FIGHT"
     } else if (Math.floor(Math.random() * 3 ) === 1) {
      return "BAG"
    } else { 
    return "RUN"
  }
}
// ou
pokemon.do_something = function () {
	const rand = Math.floor(Math.random() * 3)
	if (rand === 0) {
		return "FIGHT"
	} else if (rand === 1) {
		return "BAG"
	} else {
		return "RUN"
	}
}
// ou
pokemon.do_something = function () {
  let acoes = ["FIGHT","BAG","RUN"]
  return acoes[Math.floor(Math.random()* acoes.length)]
}

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

pokemon["ask"] = function () {
  console.log(`What will ${this.nome} do?`)
  return this.do_something()
}

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.

console.log(pokemon)

// ou

for (const prop in pokemon) {
  console.log(prop)
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const info in pokemon) {
  console.log(info, pokemon[info])
}

//ou

for (const prop in pokemon) {
  console.log(`${prop}: ${pokemon[prop]}`)
}

// 9.
//Crie uma funcao construtora de um pokemon generico.
// convenção, construtor sempre começa com letra maiúscula
//function (nome, nomeJapones), {}

function Pokemon (nome, nomeJapones, fly) {
  this.nome = nome
  this.nomeJapones = nomeJapones
  this.fly = function () {
    if (this.can_fly) {
      return "Flyyyyiinnngggg!"
    } else {
      return "Sorry, i can't fly"
    }
  }
	this.diga_ola = function () {
		console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
	}
	this.voe = function () {
		if (this.pode_voar) {
			return "É nóis que voa bruxão!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.manda_ver = function () {
		let acoes = [
			"Desce a porrada", 
			"Deu ruim", 
			"Ash, vambora daqui"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}
