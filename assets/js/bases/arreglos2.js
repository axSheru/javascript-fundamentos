let juegos = ['Mario', 'Horizon', 'GoW', 'TLOU'];
console.log('Largo:', juegos.length)

let primero = juegos[ 2 - 2];
let ultimo = juegos[ juegos.length - 1 ];

console.log({primero, ultimo});

juegos.forEach( ( elemento, indice, arr ) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push( 'Spiderman' );
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift( 'Kingdom Hearts' );
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;
console.log( juegos )
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos });

let gowIndex = juegos.indexOf('GoW');// CaseSensitive.
console.log({ gowIndex, juegos });