const carros = [ 'Susuki', 'Ford', 'Mazda', 'Nissan', 'Toyota' ];

let i = 0;

// While.
console.warn( 'While' );

/* while ( i < carros.length ) {
    console.log(carros[i]);
    i++;
} */

while ( carros[ i ] ) {
    if ( i === 1 ) {
        // break;// El ciclo termina ahí.
        i++;
        continue;// Se salta al siguiente ciclo.
    }
    console.log(carros[i]);
    i++;
}


// Do while.
console.warn( 'Do while' );

let j = 10;
do {
    console.log( carros[j] );
    j++;
} while ( carros[j] );// El bloque de código se va a ejecutar al menos una vez.

