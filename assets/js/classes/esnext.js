class Rectangulo {

    #area = 0;

    constructor( base = 0, altura = 0 ) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #duplicarArea() {
        console.log( this.#area * 2 );
    }

    llamarMetodoPrivado() {
        this.#duplicarArea();
    }

}

const rectangulo = new Rectangulo( 10, 15 );
// rectangulo.#area = 90;
rectangulo.llamarMetodoPrivado();
console.log(rectangulo);


