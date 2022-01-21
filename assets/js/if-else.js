let a = 10;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10.');
} else {
    console.log('A es menor a 10');
}

console.log('Fin del ejercicio.');


const hoy = new Date();

let dia = hoy.getDay();

console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo.');
} else if(dia === 1) {
    console.log('Lunes.');
} else if(dia === 2) {
    console.log('Martes.');
} else {
    console.log('Hoy no es domingo, lunes o martes.');
}

const diasSemanaArr = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
];

const diasSemanaObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

let diaSemana = 3;

console.log( diasSemanaArr[ diaSemana ] ||  'Día no válido.');
console.log( diasSemanaObj[ diaSemana ] ||  'Día no válido.');
