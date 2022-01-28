class Singleton {

    static instancia;// undefined
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) {// La doble negación de undefined es false.
            return Singleton.instancia;// Ya existe una instancia de este Singleton.
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;// Por default retorna el this.

    }

}

const instancia1 = new Singleton( 'Loki' );
const instancia2 = new Singleton( 'Silvie' );
const instancia3 = new Singleton( 'Mobius' );

console.log(`Nombre en la instancia1: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3: ${ instancia3.nombre }`);


