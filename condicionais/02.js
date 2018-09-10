// Escreva a expressão em
// Javascript que atribui o
// valor `1` a `x` se `x`
// for maior do que `y`.

let x = 1
let y = 0
if ( x > y ){
  console.log (x)
}
// if (x > y ) {
  //(x=1)
//}

// Escreva a expressão em
// Javascript que aumenta o
// valor da variável `score`
// em 5 unidades caso o valor
// inicial de `score` esteja
// entre 80 e 90.
let score = prompt("Digite um numero")
if ( 80 >= score <= 90) {
   (score += 5)
}
console.log (score)
// if (score >= 80 && score <= 90)


// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )
let i = 12
let v = 30
item = ( i  < 10 && v >= 50 ) {
console.log (`${i} ${v}`)
}
// item = ( i < 10 || v >= 50 ) === false

// Escreva a expressão em
// Javascript que retorna `true`
// se um número é par e `false`
// se um número é impar.
let n = 10
//ou
let n = prompt("Digite um numero")

if ( n % 2 === 0 ) {
 console.log ("Par")
} else {
  console.log ("Ímpar")
}

/* if (n % 2 ===0) {
  console.log (true) }
  else if (n % 2 ===1) {
    console.log(false)
  } else {
    throw "integer number only"
  } 
*/

// Escreva a expressão em
// Javascript que retorna `true` 
// se dois números forem positivos
// e `false` se dois números 
// forem negativos.
let x = prompt("Digite um numero para X")
let y = prompt("Digite um numero Y")

//if ( ( a > 0 && b > 0 ) || (a < 0 && b < 0) ) {
if (x > 0 && y > 0 ) {
  console.log(true)
}  else if ( x < 0 && y < 0 ) {
  console.log (false)
}

// Escreva a expressão em
// Javascript que retorna `true`
// dois números tiverem os mesmo
// sinal (+ / -) e `false` 
// se dois números tiverem sinais
// diferentes.
var a = prompt("Digite um numero para A")
var b = prompt("Digite um numero B")

if ( (a > 0 && b > 0) || (a < 0 && b < 0 ) ) {
  console.log (true) 
} else {
  console.log (false)
}
// ou....
// if (a*b=0) { console.log ("TRUE")}