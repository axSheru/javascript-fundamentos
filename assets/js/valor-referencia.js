// Los primitivos se pasan por valor.
// Los objetos se pasan por referencia.

let a = 10;
let b = a;
a = 30;

console.log({a, b});


let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';

// El nombre de Juan cambia a Ana porque se pasan por referencia.
console.log({ juan, ana });

let juan1 = { nombre: 'Juan' };
let ana1 = { ...juan1 };// El operador spread ... rompe la referencia.
ana1.nombre = 'Ana';

console.log({ juan1, ana1 });


const cambiaNombre = ( persona ) => {
    persona.nombre = 'Luke';
    return persona;
};

let ahsoka = { nombre: 'Ahsoka' };
let luke = cambiaNombre( ahsoka );

// Se pasa por referencia por eso ahsoka también cambia.
console.log({ ahsoka, luke });


const cambiaNombre1 = ({ ...persona }) => {// El operador spread ... rompe la referencia.
    persona.nombre = 'Luke';
    return persona;
};

let ahsoka1 = { nombre: 'Ahsoka' };
let luke1 = cambiaNombre1( ahsoka1 );

console.log({ ahsoka1, luke1 });


// Arreglos

const frutas = [ 'Manzana', 'Pera', 'Piña' ];

const otrasFrutas = frutas;

otrasFrutas.push( 'Mango' );// El cambio afecta a ambos arreglos.

console.table({ frutas, otrasFrutas });

// Solución 1
const frutas1 = [ 'Manzana', 'Pera', 'Piña' ];

const otrasFrutas1 = [ ...frutas1 ];// Se usa el operador spread para romper la referencia.

console.time('spread');
otrasFrutas1.push( 'Mango' );
console.timeEnd('spread');

console.table({ frutas1, otrasFrutas1 });

// Solución 2

const frutas2 = [ 'Manzana', 'Pera', 'Piña' ];

const otrasFrutas2 = frutas2.slice();

console.time('slice');
otrasFrutas2.push( 'Mango' );// El cambio afecta a ambos arreglos.
console.timeEnd('slice');

console.table({ frutas2, otrasFrutas2 });
