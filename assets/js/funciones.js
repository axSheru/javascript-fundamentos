function saludar() {
    console.log('Hola mundo');
}

const saludar2 = function () {
    console.log('Hola mundo 2');
}

function saludar3( nombre ) {
    console.log( 'Hola ' + nombre );
}

const saludar4 = function ( nombre ) {
    console.log( 'Hola ' + nombre );
}

function saludar5() {
    console.log( arguments );
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola ' + nombre );
}

function saludar6() {
    console.log('Hola mundo');

    return 10;

    // Esto nunca se va a ejecutar porque va después del return.
    console.log('Soy un código posterior al return.');
}
  


saludar();
saludar2();
saludar3( 'Alex' );
saludar4( 'Alex' );
saludar5( 'Alex', 26, false, 'México' );
saludarFlecha();
saludarFlecha2( 'Alex' );

const retornoDeSaludar6 = saludar6();
console.log( retornoDeSaludar6 );

// Sumar.

function sumar( a, b ) {
    return a + b;
}

const sumar2 = ( a, b ) => {
    return a + b;
}

const sumar3 = ( a, b ) => a + b;

console.log( sumar( 1, 2 ) );
console.log( sumar2( 1, 3 ) );
console.log( sumar3( 1, 4 ) );

// Aleatorio.

function getAleatiorio() {
    return Math.random();
}

const getAleatiorio2 = () => Math.random();

console.log( getAleatiorio() );
console.log( getAleatiorio2() );
