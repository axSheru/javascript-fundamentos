/**
 * Entre semana abrimos a las 11.
 * Los fines de semana abrimos a las 9.
 */


// Entra a un sitio web para consultar si está abierto hoy...

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;// Está abierto. Está cerrado, hoy abrimos a las XX.

// Comparación clásica.

// if ( dia === 0 || dia === 6 ) {
/* if ( [0, 6].includes( dia ) ) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de la semana.');
    horaApertura = 11;
}

if ( horaActual >= horaApertura ) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
} */

// Comparación utilizando el operador ternario.
horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura )
        ? 'Está abierto'
        : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });

