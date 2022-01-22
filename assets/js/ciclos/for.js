const siths = [ 'Darth Maul', 'Darth Sidious', 'Darth Vader', 'Darth Tyranus' ];

console.warn( 'For clásico' );

for (let i = 0; i < siths.length; i++) {
    console.log( siths[i] );    
}


console.warn( 'For in' );

for (const i in siths) {
    console.log( siths[i] );
}


console.warn( 'For of' );

for (const sith of siths) {
    console.log( sith );
}

