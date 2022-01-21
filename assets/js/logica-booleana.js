const regresaTrue = () => {
    console.log('Regresa true.');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false.');
    return false;
}

console.warn('Not o la negación');
console.log( true );// true
console.log( !false );// true
console.log( !true );// false

console.log( !regresaFalse() );// true


console.warn('And');// true si todos los valores son verdaderos.
console.log( true && true );// true
console.log( true && false );// false
console.log( true && !false );// true
console.log( false && false );// false

console.log('===========');
console.log( regresaFalse() && regresaTrue() );// false se ejecuta solo la primera función porque da false.
console.log( regresaTrue() && regresaFalse() );// false se ejecutan ambas funciones.

console.log('===== && =====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false );// false


console.warn('OR');//Con que alguno sea verdadero retorna verdadero.

console.log( true || false );// true
console.log( false || true );// true

console.log( regresaFalse() || regresaTrue() );// true se ejecutan todas las funciones porque la primera da false.
console.log( regresaTrue() || regresaFalse() );// true se ejecuta solo la primera función porque da true.

console.log( '4 condiciones', true || true || true || false );// true


