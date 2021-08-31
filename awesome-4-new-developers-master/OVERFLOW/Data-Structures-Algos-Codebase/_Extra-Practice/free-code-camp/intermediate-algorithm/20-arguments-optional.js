function addTogether( x ) {
  const args = arguments;

  function numOrWhat( x ) {
    if ( Number.isInteger( x ) === false ) {
      return undefined;
    } else
      return x;
  }

  if ( arguments.length > 1 ) {
    const a = numOrWhat( arguments[ 0 ] );
    const b = numOrWhat( arguments[ 1 ] );
    if ( a === undefined || b === undefined ) {
      return undefined;
    } else
      return a + b;
  } else
    const c = arguments[ 0 ];
  if ( numOrWhat( c ) ) {
    return missingArg => {
      if ( c === undefined || numOrWhat( missingArg ) === undefined ) {
        return undefined;
      } else
        return c + missingArg;
    };
  }
}

console.log( 'answer: ', addTogether( 2 ) );
