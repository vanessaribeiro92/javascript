// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
let matriz = []
for (let j = 0 ; j > 5 ; j++){
  let linha = []
  for (let i = 0; i < 5; i++){
    linha.push(0)
  }
  matriz.push(linha)
}
//ou
let linha = []
for (let i = 0; i < 5; i++) {
  linha.push (0)
}
let matriz = []
for (let i = 0; i < 5; i++) {
  matriz.push(linha)
}

//ou

var i;
var matriz = new Array();

for (i=0;i<matriz.length;i++){
	document.write(matriz[i] + "<br>");
}

function multiply(a) {
  var aNumRows = a.length, aNumCols = a[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i];
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write('  '+m[r].join(' ')+'<br />');
  }
}

var   a = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

document.write('matriz a:<br />');
display(a);

// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

let matriz = []
for (let j = 0 ; j > 5 ; j++){
  let linha = []
  for (let i = 0; i < 5; i++) {
    linha.push(Math.abs(i - j))
  }
  matriz.push(linha)
}

//ou

var i;
var matriz = new Array();

for (i=0;i<matriz.length;i++){
	document.write(matriz[i] + "<br>");
}

function multiply(a) {
  var aNumRows = a.length, aNumCols = a[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i];
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write('  '+m[r].join(' ')+'<br />');
  }
}

var   a = [[0, 1, 2, 3, 4], [1, 0, 1, 2, 3], [2, 1, 0, 1, 2], [3, 2, 1, 0, 1], [4, 3, 2, 1, 0]];

document.write('matriz a:<br />');
display(a);

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *

for (let j = 0; j < 7; j++) {
  let asteriscos = ""
  for (let i = 0; i < (7 - j); i++) {
  asteriscos += "*"
  }
  console.log(asteriscos)
}

//ou

for (let j = 0; j < 7; j++) {
  let asteriscos = ""
  for (let i = j; i < 7; i++) {
  asteriscos += "*"
  }
  console.log(asteriscos)
}

//ou 

let asteriscos = "*******"
while (asteriscos.length > 1) {
  asteriscos = asteriscos.substr(1,(asteriscos.length - 1))
  console.log(asteriscos)
}

//ou

let asteriscos = ["*", "*", "*", "*", "*", "*", "*" ]
for (let i = 0; i < 7 ; i++) {
  //asterisco.pop()
  asteriscos = asteriscos.slice(1)
  console.log(asteriscos.join(""))
}

//ou 

var i;
var matriz = new Array();

for (i=0;i<matriz.length;i++){
	document.write(matriz[i] + "<br>");
}

function multiply(a) {
  var aNumRows = a.length, aNumCols = a[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i];
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write('  '+m[r].join(' ')+'<br />');
  }
}

var   a = [["*","*","*","*","*","*","*"], ["*", "*","*", "*","*","*"], ["*","*","*","*","*"], ["*","*","*","*"], ["*","*","*"], ["*","*"], ["*"]];

document.write('matriz a:<br />');
display(a);

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let j = 1; j <= 7; j++) {
  let linha = ""
  for (let k = 1; k <= j; k++){
    linha += k
  }
  for (let i = j; i < 7; i++) {
  linha += "*"
  }
  console.log(linha)
}
//ou

let digitos = ""
for (let i = 1; i <=7; i++) {
  digitos += i
  let numero_com_asteriscos = digitos
  for (let j = 7; j > i; j--) {
    numero_com_asteriscos += "*"
  }
  console.log(numero_com_asteriscos)
}

//ou
var i;
var matriz = new Array();

for (i=0;i<matriz.length;i++){
	document.write(matriz[i] + "<br>");
}

function multiply(a) {
  var aNumRows = a.length, aNumCols = a[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i];
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write('  '+m[r].join(' ')+'<br />');
  }
}

var   a = [[1,"*","*","*","*","*","*"], [1, 2,"*","*","*","*","*"], [1,2,3,"*","*","*","*"], [1,2,3,4,"*","*","*"], [1,2,3,4,5,"*","*"], [1,2,3,4,5,6,"*"], [1,2,3,4,5,6,7]];

document.write('matriz a:<br />');
display(a);
