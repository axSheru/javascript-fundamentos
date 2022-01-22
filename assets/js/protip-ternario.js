const elMayor = ( a, b ) => ( a > b ) ? a : b;

console.log( elMayor( 10, 20 ) );


const tieneMembresia = ( miembro ) => miembro ? '2 dólares' : '10 dólares';

console.log( tieneMembresia( false ) );


const amigo = true
const amigosArr = [
    'Luke',
    'Rex',
    'Wrecker',
    amigo ? 'Tech' : 'Crosshair',
    (() => 'Hunter')(),// Función anónima auto invocada.
    elMayor(89, 32),
]

console.log( amigosArr );


const nota = 100;// A+, A, B+, ...
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });

