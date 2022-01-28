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

const mace = new Persona( 'Mace Windu', 'Jedi', 'Morado' );
const sidious = new Persona( 'Darth Sidious', 'Sith', 'Rojo' );
console.log(mace);

mace.miFrase();
// sidious.miFrase();

mace.setRangoObtenido = 'Maestro del consejo jedi';
// mace.cabello = calvo;

console.log(mace.getRangoObtenido);
console.log(mace);


// El acceso a las propiedades y métodos estáticos se acceden directo sin instanciar la clase.
console.log('Conteo estático', Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola soy externa.'
console.log(Persona.propiedadExterna);
console.log(Persona);

