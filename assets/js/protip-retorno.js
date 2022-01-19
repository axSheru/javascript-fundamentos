function crearPersona( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido,
    };
}

// propiedades con mismo nombre que valor no necesitan poner la key.
// Return de una línea con {} necesita ir entre paréntesis para no confundir con el cuerpo de la función.
const crearPersonaPro = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona( 'Alex', 'Paredes' );
console.log( persona );
const personaPro = crearPersonaPro( 'Alex', 'Paredes' );
console.log( personaPro );


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    console.log( edad, args );

    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2( 10, true, false, 'Alex', 'México' );
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersonaPro( 'Alex', 'Paredes' );
console.log({ nuevoApellido });


const luke = {
    nombre: 'Luke Skywalker',
    codeName: 'Jedi',
    vivo: false,
    // edad: 50,
    poderes: [
        'Levitar cosas',
        'Sable boomerang',
        'Cambio de pensamientos',
        'Sanación',
    ],
};

const imprimePropiedades = ( personaje ) => {
    console.log( 'nombre', personaje.nombre );
    console.log( 'codeName', personaje.codeName );
    console.log( 'vivo', personaje.vivo );
    console.log( 'edad', personaje.edad );
    console.log( 'poderes', personaje.poderes );
}

imprimePropiedades( luke );

const imprimePropiedadesPro = ({ nombre, codeName, vivo, edad = 12, poderes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ poderes });
}

imprimePropiedadesPro( luke );
