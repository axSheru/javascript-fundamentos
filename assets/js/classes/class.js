class Persona {

    nombre = '';
    afiliacion = '';
    sable = '';

    constructor( nombre = 'NA', afiliacion = 'NA', sable = 'NA' ) {
        this.nombre = nombre;
        this.afiliacion = afiliacion;
        this.sable = sable;
    }

}

const mace = new Persona( 'Mace Windu', 'Jedi', 'Morado' );
const sidious = new Persona( 'Darth Sidious', 'Sith', 'Rojo' );
console.log(mace);
console.log(sidious);


