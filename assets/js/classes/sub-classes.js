class Persona {

    static _conteo = 0;
    static get getConteo() {
        return `${ Persona._conteo } instancias creadas.`;
    }

    static mensaje() {
        console.log( this.nombre );
        console.log('Hola a todos soy un método estático.');
    }

    nombre = '';
    afiliacion = '';
    sable = '';
    rango = '';

    constructor( nombre = 'NA', afiliacion = 'NA', sable = 'NA' ) {
        this.nombre = nombre;
        this.afiliacion = afiliacion;
        this.sable = sable;

        Persona._conteo++;
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

class Jedi extends Persona{

    clan = 'Sin clan';

    constructor( nombre, afiliacion, sable, clan ) {
        // Debe de llamarse antes de cualquier uso del this.
        super( nombre, afiliacion, sable );// Hace referencia al constructor de la clase padre.
        this.clan = clan;
    }

    quienSoy() {
        console.log( `Soy ${ this.nombre }, pertenezco al ${ this.clan }` );
        super.quienSoy();// Se utiliza super para llamar a la clase padre.
    }

}

// const mace = new Persona( 'Mace Windu', 'Jedi', 'Morado' );
const mace = new Jedi( 'Mace Windu', 'Jedi', 'Morado', 'Consejo jedi' );

console.log(mace);
mace.quienSoy();

