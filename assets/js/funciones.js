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
  


saludar();
saludar2();
saludar3( 'Alex' );
saludar4( 'Alex' );
saludar5( 'Alex', 26, false, 'México' );
saludarFlecha();
saludarFlecha2( 'Alex' );