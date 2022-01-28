class Persona {

    static porObjeto({nombre, apellido, estado}) {// Ayuda a simular una sobrecarga de constructores.
        return new Persona( nombre, apellido, estado );
    }

    constructor( nombre, apellido, estado ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estado = estado;
    }

    getInfo() {
        console.log(`Info: ${ this.nombre }, ${ this.apellido }, ${ this.estado }`);
    }

}

const nombre1   = 'Mariana',
      apellido1 = 'Jiménez',
      estado1     = 'Guerrero';

const alex = {
    nombre: 'Alejandro',
    apellido: 'Paredes',
    estado: 'Puebla'
}

const persona1 = new Persona( nombre1, apellido1, estado1 );
const persona2 = Persona.porObjeto( alex );// Se crea una instancia nueva de otra forma.

persona1.getInfo(); 
persona2.getInfo();


