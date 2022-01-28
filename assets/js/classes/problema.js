const alex = {
    nombre: 'Alex',
    edad: 26,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const andy = {
    nombre: 'Andy',
    edad: 24,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function Persona( nombre, edad ) {

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
    
}

const laura = new Persona( 'Laura', 55 );
laura.imprimir();

const mariana = new Persona( 'Mariana', 27 );
mariana.imprimir();

