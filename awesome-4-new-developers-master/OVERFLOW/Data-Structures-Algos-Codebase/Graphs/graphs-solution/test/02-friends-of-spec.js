const chai = require( 'chai' );
const names = Array.from( require( './names' ).keys() );
const solution = require( '../problems/friends-of' );

const {
  expect
} = chai;
const {
  friendsOf
} = solution;

function randomInteger( min, max ) {
  return Math.floor( Math.random() * ( max - min ) ) + min;
}

function randomName() {
  return names[ randomInteger( 0, names.length ) ];
}

function randomFriends( without ) {
  const friends = new Set();
  const listSize = randomInteger( 1, 6 );
  for ( let i = 0; i < listSize; i += 1 ) {
    friends.add( randomName() );
  }
  friends.delete( without );
  return Array.from( friends );
}

function cloneList( list ) {
  return JSON.parse( JSON.stringify( list ) );
}

function buildFriendsList( seed, distance, list ) {
  const friendsLists = [];
  frie ndsLists[ 0 ] = seed;

  for ( let i = 1; i < distance; i += 1 ) {
    const previous = friendsLists[ i - 1 ];
    friendsLists[ i ] = [];
    for ( let name of previous ) {
      friendsLists[ i ] = Array.from( new Set( friendsLists[ i ].concat( list[ name ] ) ) );
    }
  }

  return friendsLists;
}
/* Above function obfuscated into following code below using obfuscator.io. */
// const _0x35c1=['from','concat'];(function(_0x14133d,_0x35c145){const _0x33f76e=function(_0x8eaf13){while(--_0x8eaf13){_0x14133d['push'](_0x14133d['shift']());}};_0x33f76e(++_0x35c145);}(_0x35c1,0xb8));const _0x33f7=function(_0x14133d,_0x35c145){_0x14133d=_0x14133d-0x0;let _0x33f76e=_0x35c1[_0x14133d];return _0x33f76e;};function buildFriendsList(_0x2ed3fc,_0x5d7a0c,_0x33182e){const _0x30d82b=[];_0x30d82b[0x0]=_0x2ed3fc;for(let _0x47a018=0x1;_0x47a018<_0x5d7a0c;_0x47a018+=0x1){const _0x3f9a4c=_0x30d82b[_0x47a018-0x1];_0x30d82b[_0x47a018]=[];for(let _0x55707d of _0x3f9a4c){_0x30d82b[_0x47a018]=Array[_0x33f7('0x0')](new Set(_0x30d82b[_0x47a018][_0x33f7('0x1')](_0x33182e[_0x55707d])));}}return _0x30d82b;}

describe( 'friendsOf()', () => {
      context( 'when called with an empty adjacency list', () => {
            it( 'returns undefined', () => {
      const name = randomName();
      const distance = randomInteger( 1, names.length );
      const list = {};

      const result = friendsOf( list, name, distance );

      expect( result ).to.be.undefined;
      } );
      } );

  context( 'when called with a name that does not exist in the adjacency list', () => {
        it( 'returns undefined', () => {
      const name = Math.random().toString();
      const distance = randomInteger( 1, names.length );
      const list = {
        [ names[ 0 ] ]: []
      };

      const result = friendsOf( list, name, distance );

      expect( result ).to.be.undefined;
      } );
      } );

  context( 'when called with a name that exists in the dependency list', () => {
        for ( let distance = 1; distance <= names.length; distance += 20 ) {
          it( `returns an empty list for distances ${distance} - ${distance + 19} for someone with no friends`, () => {
                const list = names.reduce( ( acc, name, i ) => {
                      acc[ name ] = [ names[ ( i + 1 ) % names.length ] ];
          return acc;
        }, {} );
        const friendless = randomName();
        list[ friendless ] = [];

        for ( let d = distance; d <= distance + 20; d += 1 ) {
          const result = friendsOf( cloneList( list ), friendless, distance );

          expect( result ).to.eql( [] );
        }
      } );
    }

    it( 'returns an empty list for someone only friends with them self for an arbitrarily large distance', function () {
          const list = names.reduce( ( acc, name, i ) => {
                acc[ name ] = [ names[ ( i + 1 ) % names.length ] ];
        return acc;
      }, {} );
      const target = randomName();
      list[ target ] = [ target ];

      const result = friendsOf( cloneList( list ), target, names.length + 1 );

      expect( result ).to.eql( [] );
      } );

    it( 'returns a single name if Person A is friends with only Person B and Person B is friends with only Person A', function () {
          const list = names.reduce( ( acc, name, i ) => {
                acc[ name ] = [ names[ ( i + 1 ) % names.length ] ];
        return acc;
      }, {} );
      const target1 = randomName();
      let target2 = randomName();
      while ( target1 === target2 ) {
        target2 = randomName();
      }
      list[ target1 ] = [ target2 ];
      list[ target2 ] = [ target1 ];

      const result = friendsOf( cloneList( list ), target1, 10 );

      expect( result ).to.eql( [ target2 ] );
      } );

    it( 'returns the persons immediate list of friends for distance 1', () => {
          const list = names.reduce( ( acc, name ) => {
                acc[ name ] = randomFriends( name );
        return acc;
      }, {} );
      const target = randomName();
      const expected = list[ target ].filter( x => x !== target );

      const result = friendsOf( cloneList( list ), target, 1 );

      expect( result ).to.eql( expected );
      } );

    it( 'returns the persons friends and friends of friends for distance 2', () => {
      const target = randomName();
      const friendsList = new Set( randomFriends( target ) );
      const secondList = new Set();
      const list = names.reduce( ( acc, name ) => {
            if ( name === target ) {
              acc[ name ] = Array.from( friendsList );
        } else {
          acc[ name ] = randomFriends( name );
          if ( friendsList.has( name ) ) {
            for ( let n of acc[ name ] ) {
              secondList.add( n );
            }
            if ( !acc[ name ].includes( target ) ) {
              acc[ name ].push( target );
            }
          }
        }
        return acc;
      }, {} );
      friendsList.delete( target );
      secondList.delete( target );
      const expected = Array.from( new Set( Array.from( friendsList ).concat( Array.from( secondList ) ) ) );
      expected.sort();

      const result = friendsOf( cloneList( list ), target, 2 );
      result.sort();

      expect( result ).to.eql( expected );
      } );

    it( 'returns all reachable people for an arbitrarily large distance', function () {
          this.timeout( 10000 );

      const target = randomName();
      const distance = randomInteger( 10, 15 );
      const list = names.reduce( ( acc, name ) => {
            acc[ name ] = randomFriends( name );
        return acc;
      }, {} );

      const friendsLists = buildFriendsList( list[ target ], distance, list );

      const expectedSet = new Set( Array.prototype.concat.apply( [], friendsLists ) );
      expectedSet.delete( target );
      const expected = Array.from( expectedSet );
      expected.sort();

      const result = friendsOf( cloneList( list ), target, distance );
      result.sort();

      expect( result ).to.eql( expected );
      } );

    it( 'returns all people for a fully-connected graph for a number larger than the number of people in the graph', function () {
          this.timeout( 10000 );
          const list = names.reduce( ( acc, name, i ) => {
                acc[ name ] = [ names[ ( i + 1 ) % names.length ] ];
        return acc;
      }, {} );
      const target = randomName();
      const expected = names.filter( x => x !== target );
      expected.sort()

      const result = friendsOf( cloneList( list ), target, names.length + 1 );
      result.sort();

      expect( result ).to.eql( expected );
      } );
      } );
      } );
