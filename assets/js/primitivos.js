//NOTE Strings.

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;
console.log(typeof nombre);

//NOTE Booleanos.

let esMarvel = true;
console.log(typeof esMarvel);

//NOTE Numbers.

let edad = 25;
console.log(typeof edad);

edad = 25.006;
console.log(typeof edad);
console.log(typeof esMarvel);

//NOTE Undefined porque no tiene ningún valor asignado.

let superPoder;
console.log(typeof superPoder);

//NOTE Null.

let soyNull = null;
console.log(typeof soyNull);

//NOTE Symbol.

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);