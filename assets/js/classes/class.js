class Persona {

    nombre = '';
    afiliacion = '';
    sable = '';
    rango = '';

    constructor( nombre = 'NA', afiliacion = 'NA', sable = 'NA' ) {
        this.nombre = nombre;
        this.afiliacion = afiliacion;
        this.sable = sable;
    }

    set setRangoObtenido( rango ) {
        this.rango = rango.toUpperCase();
    }

    get getRangoObtenido() {
        return `El rango obtenido por ${ this.nombre } es ${ this.rango }`;
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
// sidious.miFrase();

mace.setRangoObtenido = 'Maestro del consejo jedi';
// mace.cabello = calvo;

console.log(mace.getRangoObtenido);
console.log(mace);

mace.getRangoObtenido;


