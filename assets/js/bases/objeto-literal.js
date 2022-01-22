const personaje = {
    nombre: 'Luke Skywalker',
    codeName: 'Jedi',
    vivo: false,
    edad: 50,
    coords: {
        lat: 98.174,
        lng: 18.899,
    },
    poderes: [
        'Levitar cosas',
        'Sable boomerang',
        'Cambio de pensamientos',
        'Sanación',
    ],
    direccion: {
        zip: '72580',
        ubicacion: 'Tatoine',
    },
    'ultima-pelicula': 'Rise of Skywalker',
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );

console.log( 'Coords', personaje.coords );
console.log( 'Lat', personaje.coords.lat );

console.log( 'No. Poderes', personaje.poderes.length );
console.log( 'Ultimo poder', personaje.poderes[ personaje.poderes.length - 1 ] );

const x = 'vivo'
console.log( 'Vivo', personaje[x] );
console.log( 'Última película', personaje['ultima-pelicula'] );

// Más detalles.

delete personaje.edad;
console.log( personaje );

personaje.casado = false;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true; // No se puede reasignar un valor general porque es una constante pero sí se pueden modificar sus valores.


Object.freeze( personaje );// Bloquea la modificación de las propiedades del objeto.

personaje.dinero = 1000;
personaje.casado = true;
personaje.direccion.ubicacion = 'Kamino';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ propiedades });
console.log({ valores });