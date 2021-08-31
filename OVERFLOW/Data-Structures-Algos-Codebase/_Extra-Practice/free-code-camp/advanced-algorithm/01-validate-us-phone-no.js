function telephoneCheck( str ) {
  const count = ( str.match( /\({1}|\){1}/g ) || [] ).length;

  if ( count == 1 ) {
    return false;
  } else
    // doesn't need to use an array, but I originally had more than one regex
    const valid = [
      /^\+?1?\s?\-?(\D{1})?\d{3}\D*\d{3}\D?\d{4}$/,
    ];
  const verdict = [];
  for ( i in valid ) {
    if ( valid[ i ].test( str ) === true ) {
      verdict.push( true );
    } else verdict.push( false );
  }

  for ( boolean in verdict ) {
    if ( verdict.indexOf( true ) == -1 ) {
      return false;
    }
    return true;
  }

}

console.log( telephoneCheck( "(555)-555-5555" ) );
