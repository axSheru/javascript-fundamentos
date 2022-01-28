class Persona {

    nombre = '';
    afiliacion = '';
    sable = '';

    constructor( nombre = 'NA', afiliacion = 'NA', sable = 'NA' ) {
        this.nombre = nombre;
        this.afiliacion = afiliacion;
        this.sable = sable;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi afiliación es ${ this.afiliacion }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`El sable de ${ this.nombre } es de tono ${ this.sable }`);
    }

}

const mace = new Persona( 'Mace Windu', 'Jedi', 'Morado' );
const sidious = new Persona( 'Darth Sidious', 'Sith', 'Rojo' );
console.log(mace);
console.log(sidious);

mace.miFrase();
sidious.miFrase();


