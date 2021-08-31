( function () {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m;

    function aa( a ) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[ b++ ]
        } : {
          done: !0
        }
      }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function ( a, b, c ) {
      if ( a == Array.prototype || a == Object.prototype ) return a;
      a[ b ] = c.value;
      return a
    };

    function ca( a ) {
      a = [ "object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global ];
      for ( var b = 0; b < a.length; ++b ) {
        var c = a[ b ];
        if ( c && c.Math == Math ) return c
      }
      throw Error( "Cannot find global object" );
    }
    var ea = ca( this );

    function t( a, b ) {
      if ( b ) a: {
        for ( var c = ea, d = a.split( "." ), e = 0; e < d.length - 1; e++ ) {
          var f = d[ e ];
          if ( !( f in c ) ) break a;
          c = c[ f ]
        }
        d = d[ d.length - 1 ];e = c[ d ];f = b( e );f != e && null != f && ba( c, d, {
          configurable: !0,
          writable: !0,
          value: f
        } )
      }
    }
    t( "Symbol", function ( a ) {
      function b( e ) {
        if ( this instanceof b ) throw new TypeError( "Symbol is not a constructor" );
        return new c( "jscomp_symbol_" + ( e || "" ) + "_" + d++, e )
      }

      function c( e, f ) {
        this.h = e;
        ba( this, "description", {
          configurable: !0,
          writable: !0,
          value: f
        } )
      }
      if ( a ) return a;
      c.prototype.toString = function () {
        return this.h
      };
      var d = 0;
      return b
    } );
    t( "Symbol.iterator", function ( a ) {
      if ( a ) return a;
      a = Symbol( "Symbol.iterator" );
      for ( var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split( " " ), c = 0; c < b.length; c++ ) {
        var d = ea[ b[ c ] ];
        "function" === typeof d && "function" != typeof d.prototype[ a ] && ba( d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return fa( aa( this ) )
          }
        } )
      }
      return a
    } );

    function fa( a ) {
      a = {
        next: a
      };
      a[ Symbol.iterator ] = function () {
        return this
      };
      return a
    }

    function u( a ) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[ Symbol.iterator ];
      return b ? b.call( a ) : {
        next: aa( a )
      }
    }

    function ha( a ) {
      for ( var b, c = []; !( b = a.next() ).done; ) c.push( b.value );
      return c
    }
    var ia = "function" == typeof Object.create ? Object.create : function ( a ) {
        function b() {}
        b.prototype = a;
        return new b
      },
      ja = function () {
        function a() {
          function c() {}
          new c;
          Reflect.construct( c, [], function () {} );
          return new c instanceof c
        }
        if ( "undefined" != typeof Reflect && Reflect.construct ) {
          if ( a() ) return Reflect.construct;
          var b = Reflect.construct;
          return function ( c, d, e ) {
            c = b( c, d );
            e && Reflect.setPrototypeOf( c, e.prototype );
            return c
          }
        }
        return function ( c, d, e ) {
          void 0 === e && ( e = c );
          e = ia( e.prototype || Object.prototype );
          return Function.prototype.apply.call( c, e, d ) || e
        }
      }(),
      ka;
    if ( "function" == typeof Object.setPrototypeOf ) ka = Object.setPrototypeOf;
    else {
      var la;
      a: {
        var ma = {
            a: !0
          },
          na = {};
        try {
          na.__proto__ = ma;
          la = na.a;
          break a
        } catch ( a ) {}
        la = !1
      }
      ka = la ? function ( a, b ) {
        a.__proto__ = b;
        if ( a.__proto__ !== b ) throw new TypeError( a + " is not extensible" );
        return a
      } : null
    }
    var oa = ka;

    function v( a, b ) {
      a.prototype = ia( b.prototype );
      a.prototype.constructor = a;
      if ( oa ) oa( a, b );
      else
        for ( var c in b )
          if ( "prototype" != c )
            if ( Object.defineProperties ) {
              var d = Object.getOwnPropertyDescriptor( b, c );
              d && Object.defineProperty( a, c, d )
            } else a[ c ] = b[ c ];
      a.H = b.prototype
    }

    function pa() {
      this.o = !1;
      this.i = null;
      this.m = void 0;
      this.h = 1;
      this.D = this.l = 0;
      this.j = null
    }

    function qa( a ) {
      if ( a.o ) throw new TypeError( "Generator is already running" );
      a.o = !0
    }
    pa.prototype.u = function ( a ) {
      this.m = a
    };

    function ra( a, b ) {
      a.j = {
        za: b,
        Ya: !0
      };
      a.h = a.l || a.D
    }
    pa.prototype[ "return" ] = function ( a ) {
      this.j = {
        "return": a
      };
      this.h = this.D
    };

    function sa( a, b, c ) {
      a.h = c;
      return {
        value: b
      }
    }

    function ta( a ) {
      a.l = 0;
      var b = a.j.za;
      a.j = null;
      return b
    }

    function ua( a ) {
      this.h = new pa;
      this.i = a
    }

    function wa( a, b ) {
      qa( a.h );
      var c = a.h.i;
      if ( c ) return xa( a, "return" in c ? c[ "return" ] : function ( d ) {
        return {
          value: d,
          done: !0
        }
      }, b, a.h[ "return" ] );
      a.h[ "return" ]( b );
      return ya( a )
    }

    function xa( a, b, c, d ) {
      try {
        var e = b.call( a.h.i, c );
        if ( !( e instanceof Object ) ) throw new TypeError( "Iterator result " + e + " is not an object" );
        if ( !e.done ) return a.h.o = !1, e;
        var f = e.value
      } catch ( g ) {
        return a.h.i = null, ra( a.h, g ), ya( a )
      }
      a.h.i = null;
      d.call( a.h, f );
      return ya( a )
    }

    function ya( a ) {
      for ( ; a.h.h; ) try {
        var b = a.i( a.h );
        if ( b ) return a.h.o = !1, {
          value: b.value,
          done: !1
        }
      } catch ( c ) {
        a.h.m = void 0, ra( a.h, c )
      }
      a.h.o = !1;
      if ( a.h.j ) {
        b = a.h.j;
        a.h.j = null;
        if ( b.Ya ) throw b.za;
        return {
          value: b[ "return" ],
          done: !0
        }
      }
      return {
        value: void 0,
        done: !0
      }
    }

    function za( a ) {
      this.next = function ( b ) {
        qa( a.h );
        a.h.i ? b = xa( a, a.h.i.next, b, a.h.u ) : ( a.h.u( b ), b = ya( a ) );
        return b
      };
      this[ "throw" ] = function ( b ) {
        qa( a.h );
        a.h.i ? b = xa( a, a.h.i[ "throw" ], b, a.h.u ) : ( ra( a.h, b ), b = ya( a ) );
        return b
      };
      this[ "return" ] = function ( b ) {
        return wa( a, b )
      };
      this[ Symbol.iterator ] = function () {
        return this
      }
    }

    function Aa( a, b ) {
      var c = new za( new ua( b ) );
      oa && a.prototype && oa( c, a.prototype );
      return c
    }
    t( "Reflect", function ( a ) {
      return a ? a : {}
    } );
    t( "Reflect.construct", function () {
      return ja
    } );
    t( "Reflect.setPrototypeOf", function ( a ) {
      return a ? a : oa ? function ( b, c ) {
        try {
          return oa( b, c ), !0
        } catch ( d ) {
          return !1
        }
      } : null
    } );

    function Ba( a, b, c ) {
      if ( null == a ) throw new TypeError( "The 'this' value for String.prototype." + c + " must not be null or undefined" );
      if ( b instanceof RegExp ) throw new TypeError( "First argument to String.prototype." + c + " must not be a regular expression" );
      return a + ""
    }
    t( "String.prototype.endsWith", function ( a ) {
      return a ? a : function ( b, c ) {
        var d = Ba( this, b, "endsWith" );
        b += "";
        void 0 === c && ( c = d.length );
        for ( var e = Math.max( 0, Math.min( c | 0, d.length ) ), f = b.length; 0 < f && 0 < e; )
          if ( d[ --e ] != b[ --f ] ) return !1;
        return 0 >= f
      }
    } );
    t( "String.prototype.startsWith", function ( a ) {
      return a ? a : function ( b, c ) {
        var d = Ba( this, b, "startsWith" );
        b += "";
        for ( var e = d.length, f = b.length, g = Math.max( 0, Math.min( c | 0, d.length ) ), h = 0; h < f && g < e; )
          if ( d[ g++ ] != b[ h++ ] ) return !1;
        return h >= f
      }
    } );
    t( "Object.setPrototypeOf", function ( a ) {
      return a || oa
    } );

    function Ca( a, b ) {
      return Object.prototype.hasOwnProperty.call( a, b )
    }
    var Da = "function" == typeof Object.assign ? Object.assign : function ( a, b ) {
      for ( var c = 1; c < arguments.length; c++ ) {
        var d = arguments[ c ];
        if ( d )
          for ( var e in d ) Ca( d, e ) && ( a[ e ] = d[ e ] )
      }
      return a
    };
    t( "Object.assign", function ( a ) {
      return a || Da
    } );
    t( "Promise", function ( a ) {
      function b( g ) {
        this.h = 0;
        this.j = void 0;
        this.i = [];
        this.u = !1;
        var h = this.l();
        try {
          g( h.resolve, h.reject )
        } catch ( k ) {
          h.reject( k )
        }
      }

      function c() {
        this.h = null
      }

      function d( g ) {
        return g instanceof b ? g : new b( function ( h ) {
          h( g )
        } )
      }
      if ( a ) return a;
      c.prototype.i = function ( g ) {
        if ( null == this.h ) {
          this.h = [];
          var h = this;
          this.j( function () {
            h.m()
          } )
        }
        this.h.push( g )
      };
      var e = ea.setTimeout;
      c.prototype.j = function ( g ) {
        e( g, 0 )
      };
      c.prototype.m = function () {
        for ( ; this.h && this.h.length; ) {
          var g = this.h;
          this.h = [];
          for ( var h = 0; h < g.length; ++h ) {
            var k = g[ h ];
            g[ h ] = null;
            try {
              k()
            } catch ( l ) {
              this.l( l )
            }
          }
        }
        this.h = null
      };
      c.prototype.l = function ( g ) {
        this.j( function () {
          throw g;
        } )
      };
      b.prototype.l = function () {
        function g( l ) {
          return function ( n ) {
            k || ( k = !0, l.call( h, n ) )
          }
        }
        var h = this,
          k = !1;
        return {
          resolve: g( this.J ),
          reject: g( this.m )
        }
      };
      b.prototype.J = function ( g ) {
        if ( g === this ) this.m( new TypeError( "A Promise cannot resolve to itself" ) );
        else if ( g instanceof b ) this.S( g );
        else {
          a: switch ( typeof g ) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1
          }
          h ? this.I( g ) : this.o( g )
        }
      };
      b.prototype.I = function ( g ) {
        var h = void 0;
        try {
          h = g.then
        } catch ( k ) {
          this.m( k );
          return
        }
        "function" == typeof h ? this.T( h, g ) : this.o( g )
      };
      b.prototype.m = function ( g ) {
        this.D( 2, g )
      };
      b.prototype.o = function ( g ) {
        this.D( 1, g )
      };
      b.prototype.D = function ( g, h ) {
        if ( 0 != this.h ) throw Error( "Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h );
        this.h = g;
        this.j = h;
        2 === this.h && this.K();
        this.B()
      };
      b.prototype.K = function () {
        var g = this;
        e( function () {
          if ( g.G() ) {
            var h = ea.console;
            "undefined" !== typeof h && h.error( g.j )
          }
        }, 1 )
      };
      b.prototype.G = function () {
        if ( this.u ) return !1;
        var g = ea.CustomEvent,
          h = ea.Event,
          k = ea.dispatchEvent;
        if ( "undefined" === typeof k ) return !0;
        "function" === typeof g ? g = new g( "unhandledrejection", {
          cancelable: !0
        } ) : "function" === typeof h ? g = new h( "unhandledrejection", {
          cancelable: !0
        } ) : ( g = ea.document.createEvent( "CustomEvent" ), g.initCustomEvent( "unhandledrejection", !1, !0, g ) );
        g.promise = this;
        g.reason = this.j;
        return k( g )
      };
      b.prototype.B = function () {
        if ( null != this.i ) {
          for ( var g = 0; g < this.i.length; ++g ) f.i( this.i[ g ] );
          this.i = null
        }
      };
      var f = new c;
      b.prototype.S = function ( g ) {
        var h = this.l();
        g.ha( h.resolve, h.reject )
      };
      b.prototype.T = function ( g, h ) {
        var k = this.l();
        try {
          g.call( h, k.resolve, k.reject )
        } catch ( l ) {
          k.reject( l )
        }
      };
      b.prototype.then = function ( g, h ) {
        function k( q, r ) {
          return "function" == typeof q ? function ( y ) {
            try {
              l( q( y ) )
            } catch ( z ) {
              n( z )
            }
          } : r
        }
        var l, n, p = new b( function ( q, r ) {
          l = q;
          n = r
        } );
        this.ha( k( g, l ), k( h, n ) );
        return p
      };
      b.prototype[ "catch" ] = function ( g ) {
        return this.then( void 0, g )
      };
      b.prototype.ha = function ( g, h ) {
        function k() {
          switch ( l.h ) {
            case 1:
              g( l.j );
              break;
            case 2:
              h( l.j );
              break;
            default:
              throw Error( "Unexpected state: " + l.h );
          }
        }
        var l = this;
        null == this.i ? f.i( k ) : this.i.push( k );
        this.u = !0
      };
      b.resolve = d;
      b.reject = function ( g ) {
        return new b( function ( h, k ) {
          k( g )
        } )
      };
      b.race = function ( g ) {
        return new b( function ( h, k ) {
          for ( var l = u( g ), n = l.next(); !n.done; n = l.next() ) d( n.value ).ha( h, k )
        } )
      };
      b.all = function ( g ) {
        var h = u( g ),
          k = h.next();
        return k.done ? d( [] ) : new b( function ( l, n ) {
          function p( y ) {
            return function ( z ) {
              q[ y ] = z;
              r--;
              0 == r && l( q )
            }
          }
          var q = [],
            r = 0;
          do q.push( void 0 ), r++, d( k.value ).ha( p( q.length - 1 ), n ), k = h.next(); while ( !k.done )
        } )
      };
      return b
    } );
    t( "Object.is", function ( a ) {
      return a ? a : function ( b, c ) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
      }
    } );
    t( "Array.prototype.includes", function ( a ) {
      return a ? a : function ( b, c ) {
        var d = this;
        d instanceof String && ( d = String( d ) );
        var e = d.length,
          f = c || 0;
        for ( 0 > f && ( f = Math.max( f + e, 0 ) ); f < e; f++ ) {
          var g = d[ f ];
          if ( g === b || Object.is( g, b ) ) return !0
        }
        return !1
      }
    } );
    t( "String.prototype.includes", function ( a ) {
      return a ? a : function ( b, c ) {
        return -1 !== Ba( this, b, "includes" ).indexOf( b, c || 0 )
      }
    } );
    t( "Object.entries", function ( a ) {
      return a ? a : function ( b ) {
        var c = [],
          d;
        for ( d in b ) Ca( b, d ) && c.push( [ d, b[ d ] ] );
        return c
      }
    } );

    function Ea( a, b ) {
      a instanceof String && ( a += "" );
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if ( !d && c < a.length ) {
              var f = c++;
              return {
                value: b( f, a[ f ] ),
                done: !1
              }
            }
            d = !0;
            return {
              done: !0,
              value: void 0
            }
          }
        };
      e[ Symbol.iterator ] = function () {
        return e
      };
      return e
    }
    t( "Array.prototype.entries", function ( a ) {
      return a ? a : function () {
        return Ea( this, function ( b, c ) {
          return [ b, c ]
        } )
      }
    } );
    t( "Array.prototype.keys", function ( a ) {
      return a ? a : function () {
        return Ea( this, function ( b ) {
          return b
        } )
      }
    } );
    t( "Array.prototype.values", function ( a ) {
      return a ? a : function () {
        return Ea( this, function ( b, c ) {
          return c
        } )
      }
    } );
    t( "WeakMap", function ( a ) {
      function b( k ) {
        this.h = ( h += Math.random() + 1 ).toString();
        if ( k ) {
          k = u( k );
          for ( var l; !( l = k.next() ).done; ) l = l.value, this.set( l[ 0 ], l[ 1 ] )
        }
      }

      function c() {}

      function d( k ) {
        var l = typeof k;
        return "object" === l && null !== k || "function" === l
      }

      function e( k ) {
        if ( !Ca( k, g ) ) {
          var l = new c;
          ba( k, g, {
            value: l
          } )
        }
      }

      function f( k ) {
        var l = Object[ k ];
        l && ( Object[ k ] = function ( n ) {
          if ( n instanceof c ) return n;
          Object.isExtensible( n ) && e( n );
          return l( n )
        } )
      }
      if ( function () {
          if ( !a || !Object.seal ) return !1;
          try {
            var k = Object.seal( {} ),
              l = Object.seal( {} ),
              n = new a( [
                [ k, 2 ],
                [ l, 3 ]
              ] );
            if ( 2 != n.get( k ) || 3 != n.get( l ) ) return !1;
            n[ "delete" ]( k );
            n.set( l, 4 );
            return !n.has( k ) && 4 == n.get( l )
          } catch ( p ) {
            return !1
          }
        }() ) return a;
      var g = "$jscomp_hidden_" + Math.random();
      f( "freeze" );
      f( "preventExtensions" );
      f( "seal" );
      var h = 0;
      b.prototype.set = function ( k, l ) {
        if ( !d( k ) ) throw Error( "Invalid WeakMap key" );
        e( k );
        if ( !Ca( k, g ) ) throw Error( "WeakMap key fail: " + k );
        k[ g ][ this.h ] = l;
        return this
      };
      b.prototype.get = function ( k ) {
        return d( k ) && Ca( k, g ) ? k[ g ][ this.h ] : void 0
      };
      b.prototype.has = function ( k ) {
        return d( k ) && Ca( k, g ) && Ca( k[ g ], this.h )
      };
      b.prototype[ "delete" ] = function ( k ) {
        return d( k ) && Ca( k, g ) && Ca( k[ g ], this.h ) ? delete k[ g ][ this.h ] : !1
      };
      return b
    } );
    t( "Number.isNaN", function ( a ) {
      return a ? a : function ( b ) {
        return "number" === typeof b && isNaN( b )
      }
    } );
    t( "Map", function ( a ) {
      function b() {
        var h = {};
        return h.previous = h.next = h.head = h
      }

      function c( h, k ) {
        var l = h.h;
        return fa( function () {
          if ( l ) {
            for ( ; l.head != h.h; ) l = l.previous;
            for ( ; l.next != l.head; ) return l = l.next, {
              done: !1,
              value: k( l )
            };
            l = null
          }
          return {
            done: !0,
            value: void 0
          }
        } )
      }

      function d( h, k ) {
        var l = k && typeof k;
        "object" == l || "function" == l ? f.has( k ) ? l = f.get( k ) : ( l = "" + ++g, f.set( k, l ) ) : l = "p_" + k;
        var n = h.i[ l ];
        if ( n && Ca( h.i, l ) )
          for ( var p = 0; p < n.length; p++ ) {
            var q = n[ p ];
            if ( k !== k && q.key !== q.key || k === q.key ) return {
              id: l,
              list: n,
              index: p,
              F: q
            }
          }
        return {
          id: l,
          list: n,
          index: -1,
          F: void 0
        }
      }

      function e( h ) {
        this.i = {};
        this.h = b();
        this.size = 0;
        if ( h ) {
          h = u( h );
          for ( var k; !( k = h.next() ).done; ) k = k.value, this.set( k[ 0 ], k[ 1 ] )
        }
      }
      if ( function () {
          if ( !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal ) return !1;
          try {
            var h = Object.seal( {
                x: 4
              } ),
              k = new a( u( [
                [ h, "s" ]
              ] ) );
            if ( "s" != k.get( h ) || 1 != k.size || k.get( {
                x: 4
              } ) || k.set( {
                x: 4
              }, "t" ) != k || 2 != k.size ) return !1;
            var l = k.entries(),
              n = l.next();
            if ( n.done || n.value[ 0 ] != h || "s" != n.value[ 1 ] ) return !1;
            n = l.next();
            return n.done || 4 != n.value[ 0 ].x || "t" != n.value[ 1 ] || !l.next().done ? !1 : !0
          } catch ( p ) {
            return !1
          }
        }() ) return a;
      var f = new WeakMap;
      e.prototype.set = function ( h, k ) {
        h = 0 === h ? 0 : h;
        var l = d( this, h );
        l.list || ( l.list = this.i[ l.id ] = [] );
        l.F ? l.F.value = k : ( l.F = {
          next: this.h,
          previous: this.h.previous,
          head: this.h,
          key: h,
          value: k
        }, l.list.push( l.F ), this.h.previous.next = l.F, this.h.previous = l.F, this.size++ );
        return this
      };
      e.prototype[ "delete" ] = function ( h ) {
        h = d( this, h );
        return h.F && h.list ? ( h.list.splice( h.index, 1 ), h.list.length || delete this.i[ h.id ], h.F.previous.next = h.F.next, h.F.next.previous = h.F.previous, h.F.head = null, this.size--, !0 ) : !1
      };
      e.prototype.clear = function () {
        this.i = {};
        this.h = this.h.previous = b();
        this.size = 0
      };
      e.prototype.has = function ( h ) {
        return !!d( this, h ).F
      };
      e.prototype.get = function ( h ) {
        return ( h = d( this, h ).F ) && h.value
      };
      e.prototype.entries = function () {
        return c( this, function ( h ) {
          return [ h.key, h.value ]
        } )
      };
      e.prototype.keys = function () {
        return c( this, function ( h ) {
          return h.key
        } )
      };
      e.prototype.values = function () {
        return c( this, function ( h ) {
          return h.value
        } )
      };
      e.prototype.forEach = function ( h, k ) {
        for ( var l = this.entries(), n; !( n = l.next() ).done; ) n = n.value, h.call( k, n[ 1 ], n[ 0 ], this )
      };
      e.prototype[ Symbol.iterator ] = e.prototype.entries;
      var g = 0;
      return e
    } );
    t( "Set", function ( a ) {
      function b( c ) {
        this.h = new Map;
        if ( c ) {
          c = u( c );
          for ( var d; !( d = c.next() ).done; ) this.add( d.value )
        }
        this.size = this.h.size
      }
      if ( function () {
          if ( !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal ) return !1;
          try {
            var c = Object.seal( {
                x: 4
              } ),
              d = new a( u( [ c ] ) );
            if ( !d.has( c ) || 1 != d.size || d.add( c ) != d || 1 != d.size || d.add( {
                x: 4
              } ) != d || 2 != d.size ) return !1;
            var e = d.entries(),
              f = e.next();
            if ( f.done || f.value[ 0 ] != c || f.value[ 1 ] != c ) return !1;
            f = e.next();
            return f.done || f.value[ 0 ] == c || 4 != f.value[ 0 ].x || f.value[ 1 ] != f.value[ 0 ] ? !1 : e.next().done
          } catch ( g ) {
            return !1
          }
        }() ) return a;
      b.prototype.add = function ( c ) {
        c = 0 === c ? 0 : c;
        this.h.set( c, c );
        this.size = this.h.size;
        return this
      };
      b.prototype[ "delete" ] = function ( c ) {
        c = this.h[ "delete" ]( c );
        this.size = this.h.size;
        return c
      };
      b.prototype.clear = function () {
        this.h.clear();
        this.size = 0
      };
      b.prototype.has = function ( c ) {
        return this.h.has( c )
      };
      b.prototype.entries = function () {
        return this.h.entries()
      };
      b.prototype.values = function () {
        return this.h.values()
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[ Symbol.iterator ] = b.prototype.values;
      b.prototype.forEach = function ( c, d ) {
        var e = this;
        this.h.forEach( function ( f ) {
          return c.call( d, f, f, e )
        } )
      };
      return b
    } );
    t( "Object.values", function ( a ) {
      return a ? a : function ( b ) {
        var c = [],
          d;
        for ( d in b ) Ca( b, d ) && c.push( b[ d ] );
        return c
      }
    } );
    var w = this || self;

    function x( a, b, c ) {
      a = a.split( "." );
      c = c || w;
      a[ 0 ] in c || "undefined" == typeof c.execScript || c.execScript( "var " + a[ 0 ] );
      for ( var d; a.length && ( d = a.shift() ); ) a.length || void 0 === b ? c[ d ] && c[ d ] !== Object.prototype[ d ] ? c = c[ d ] : c = c[ d ] = {} : c[ d ] = b
    }

    function Fa( a ) {
      if ( a && a != w ) return Ga( a.document );
      null === Ha && ( Ha = Ga( w.document ) );
      return Ha
    }
    var Ia = /^[\w+/_-]+[=]{0,2}$/,
      Ha = null;

    function Ga( a ) {
      return ( a = a.querySelector && a.querySelector( "script[nonce]" ) ) && ( a = a.nonce || a.getAttribute( "nonce" ) ) && Ia.test( a ) ? a : ""
    }

    function A( a, b ) {
      for ( var c = a.split( "." ), d = b || w, e = 0; e < c.length; e++ )
        if ( d = d[ c[ e ] ], null == d ) return null;
      return d
    }

    function Ja() {}

    function Ka( a ) {
      a.ra = void 0;
      a.getInstance = function () {
        return a.ra ? a.ra : a.ra = new a
      }
    }

    function La( a ) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray( a ) ? "array" : b : "null"
    }

    function Ma( a ) {
      var b = La( a );
      return "array" == b || "object" == b && "number" == typeof a.length
    }

    function B( a ) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }

    function Na( a ) {
      return Object.prototype.hasOwnProperty.call( a, Oa ) && a[ Oa ] || ( a[ Oa ] = ++Pa )
    }
    var Oa = "closure_uid_" + ( 1E9 * Math.random() >>> 0 ),
      Pa = 0;

    function Qa( a, b, c ) {
      return a.call.apply( a.bind, arguments )
    }

    function Ra( a, b, c ) {
      if ( !a ) throw Error();
      if ( 2 < arguments.length ) {
        var d = Array.prototype.slice.call( arguments, 2 );
        return function () {
          var e = Array.prototype.slice.call( arguments );
          Array.prototype.unshift.apply( e, d );
          return a.apply( b, e )
        }
      }
      return function () {
        return a.apply( b, arguments )
      }
    }

    function C( a, b, c ) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf( "native code" ) ? C = Qa : C = Ra;
      return C.apply( null, arguments )
    }

    function Sa( a, b ) {
      var c = Array.prototype.slice.call( arguments, 1 );
      return function () {
        var d = c.slice();
        d.push.apply( d, arguments );
        return a.apply( this, d )
      }
    }

    function E() {
      return Date.now()
    }

    function Ta( a, b ) {
      x( a, b, void 0 )
    }

    function F( a, b ) {
      function c() {}
      c.prototype = b.prototype;
      a.H = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.Ak = function ( d, e, f ) {
        for ( var g = Array( arguments.length - 2 ), h = 2; h < arguments.length; h++ ) g[ h - 2 ] = arguments[ h ];
        return b.prototype[ e ].apply( d, g )
      }
    }

    function Ua( a ) {
      return a
    };

    function Va( a ) {
      if ( Error.captureStackTrace ) Error.captureStackTrace( this, Va );
      else {
        var b = Error().stack;
        b && ( this.stack = b )
      }
      a && ( this.message = String( a ) )
    }
    F( Va, Error );
    Va.prototype.name = "CustomError";

    function Wa( a ) {
      a = a.url;
      var b = /[?&]dsh=1(&|$)/.test( a );
      this.j = !b && /[?&]ae=1(&|$)/.test( a );
      this.l = !b && /[?&]ae=2(&|$)/.test( a );
      if ( ( this.h = /[?&]adurl=([^&]*)/.exec( a ) ) && this.h[ 1 ] ) {
        try {
          var c = decodeURIComponent( this.h[ 1 ] )
        } catch ( d ) {
          c = null
        }
        this.i = c
      }
    };

    function Xa( a ) {
      var b = !1,
        c;
      return function () {
        b || ( c = a(), b = !0 );
        return c
      }
    };
    var Ya = Array.prototype.indexOf ? function ( a, b ) {
        return Array.prototype.indexOf.call( a, b, void 0 )
      } : function ( a, b ) {
        if ( "string" === typeof a ) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf( b, 0 );
        for ( var c = 0; c < a.length; c++ )
          if ( c in a && a[ c ] === b ) return c;
        return -1
      },
      G = Array.prototype.forEach ? function ( a, b, c ) {
        Array.prototype.forEach.call( a, b, c )
      } : function ( a, b, c ) {
        for ( var d = a.length, e = "string" === typeof a ? a.split( "" ) : a, f = 0; f < d; f++ ) f in e && b.call( c, e[ f ], f, a )
      },
      Za = Array.prototype.filter ? function ( a, b ) {
        return Array.prototype.filter.call( a, b, void 0 )
      } : function ( a, b ) {
        for ( var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split( "" ) : a, g = 0; g < c; g++ )
          if ( g in f ) {
            var h = f[ g ];
            b.call( void 0, h, g, a ) && ( d[ e++ ] = h )
          } return d
      },
      $a = Array.prototype.map ? function ( a, b ) {
        return Array.prototype.map.call( a, b, void 0 )
      } : function ( a, b ) {
        for ( var c = a.length, d = Array( c ), e = "string" === typeof a ? a.split( "" ) : a, f = 0; f < c; f++ ) f in e && ( d[ f ] = b.call( void 0, e[ f ], f, a ) );
        return d
      },
      ab = Array.prototype.reduce ? function ( a, b, c ) {
        return Array.prototype.reduce.call( a, b, c )
      } : function ( a, b, c ) {
        var d = c;
        G( a, function ( e, f ) {
          d = b.call( void 0, d, e, f, a )
        } );
        return d
      };

    function bb( a, b ) {
      a: {
        var c = a.length;
        for ( var d = "string" === typeof a ? a.split( "" ) : a, e = 0; e < c; e++ )
          if ( e in d && b.call( void 0, d[ e ], e, a ) ) {
            c = e;
            break a
          } c = -1
      }
      return 0 > c ? null : "string" === typeof a ? a.charAt( c ) : a[ c ]
    }

    function cb( a, b ) {
      var c = Ya( a, b ),
        d;
      ( d = 0 <= c ) && Array.prototype.splice.call( a, c, 1 );
      return d
    }

    function db( a ) {
      var b = a.length;
      if ( 0 < b ) {
        for ( var c = Array( b ), d = 0; d < b; d++ ) c[ d ] = a[ d ];
        return c
      }
      return []
    }

    function eb( a, b ) {
      for ( var c = 1; c < arguments.length; c++ ) {
        var d = arguments[ c ];
        if ( Ma( d ) ) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for ( var g = 0; g < f; g++ ) a[ e + g ] = d[ g ]
        } else a.push( d )
      }
    };

    function fb( a, b ) {
      for ( var c in a ) b.call( void 0, a[ c ], c, a )
    }

    function gb( a ) {
      var b = hb,
        c;
      for ( c in b )
        if ( a.call( void 0, b[ c ], c, b ) ) return c
    }

    function ib( a ) {
      for ( var b in a ) return !1;
      return !0
    }

    function jb( a, b ) {
      if ( null !== a && b in a ) throw Error( 'The object already contains the key "' + b + '"' );
      a[ b ] = !0
    }

    function kb() {
      var a = H( "PLAYER_VARS", {} );
      return null !== a && "privembed" in a ? a.privembed : !1
    }

    function lb( a, b ) {
      for ( var c in a )
        if ( !( c in b ) || a[ c ] !== b[ c ] ) return !1;
      for ( var d in b )
        if ( !( d in a ) ) return !1;
      return !0
    }

    function mb( a ) {
      var b = {},
        c;
      for ( c in a ) b[ c ] = a[ c ];
      return b
    }

    function nb( a ) {
      if ( !a || "object" !== typeof a ) return a;
      if ( "function" === typeof a.clone ) return a.clone();
      var b = Array.isArray( a ) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView( a ) || a instanceof DataView ? {} : new a.constructor( a.length ),
        c;
      for ( c in a ) b[ c ] = nb( a[ c ] );
      return b
    }
    var ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split( " " );

    function pb( a, b ) {
      for ( var c, d, e = 1; e < arguments.length; e++ ) {
        d = arguments[ e ];
        for ( c in d ) a[ c ] = d[ c ];
        for ( var f = 0; f < ob.length; f++ ) c = ob[ f ], Object.prototype.hasOwnProperty.call( d, c ) && ( a[ c ] = d[ c ] )
      }
    };
    var qb;

    function rb() {
      if ( void 0 === qb ) {
        var a = null,
          b = w.trustedTypes;
        if ( b && b.createPolicy ) {
          try {
            a = b.createPolicy( "goog#html", {
              createHTML: Ua,
              createScript: Ua,
              createScriptURL: Ua
            } )
          } catch ( c ) {
            w.console && w.console.error( c.message )
          }
          qb = a
        } else qb = a
      }
      return qb
    };

    function sb( a, b ) {
      this.h = b === tb ? a : ""
    }
    m = sb.prototype;
    m.W = !0;
    m.V = function () {
      return this.h.toString()
    };
    m.qa = !0;
    m.ma = function () {
      return 1
    };
    m.toString = function () {
      return this.h + ""
    };

    function ub( a ) {
      if ( a instanceof sb && a.constructor === sb ) return a.h;
      La( a );
      return "type_error:TrustedResourceUrl"
    }
    var tb = {};
    var vb = String.prototype.trim ? function ( a ) {
      return a.trim()
    } : function ( a ) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec( a )[ 1 ]
    };

    function wb( a, b ) {
      if ( b ) a = a.replace( xb, "&amp;" ).replace( yb, "&lt;" ).replace( zb, "&gt;" ).replace( Ab, "&quot;" ).replace( Bb, "&#39;" ).replace( Cb, "&#0;" );
      else {
        if ( !Db.test( a ) ) return a; - 1 != a.indexOf( "&" ) && ( a = a.replace( xb, "&amp;" ) ); - 1 != a.indexOf( "<" ) && ( a = a.replace( yb, "&lt;" ) ); - 1 != a.indexOf( ">" ) && ( a = a.replace( zb, "&gt;" ) ); - 1 != a.indexOf( '"' ) && ( a = a.replace( Ab, "&quot;" ) ); - 1 != a.indexOf( "'" ) && ( a = a.replace( Bb, "&#39;" ) ); - 1 != a.indexOf( "\x00" ) && ( a = a.replace( Cb, "&#0;" ) )
      }
      return a
    }
    var xb = /&/g,
      yb = /</g,
      zb = />/g,
      Ab = /"/g,
      Bb = /'/g,
      Cb = /\x00/g,
      Db = /[\x00&<>"']/;

    function I( a, b ) {
      this.h = b === Eb ? a : ""
    }
    m = I.prototype;
    m.W = !0;
    m.V = function () {
      return this.h.toString()
    };
    m.qa = !0;
    m.ma = function () {
      return 1
    };
    m.toString = function () {
      return this.h.toString()
    };

    function Fb( a ) {
      if ( a instanceof I && a.constructor === I ) return a.h;
      La( a );
      return "type_error:SafeUrl"
    }
    var Gb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
      Hb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
      Ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Jb( a ) {
      if ( a instanceof I ) return a;
      a = "object" == typeof a && a.W ? a.V() : String( a );
      Ib.test( a ) || ( a = "about:invalid#zClosurez" );
      return new I( a, Eb )
    }
    var Eb = {},
      Kb = new I( "about:invalid#zClosurez", Eb );
    var Lb;
    a: {
      var Mb = w.navigator;
      if ( Mb ) {
        var Nb = Mb.userAgent;
        if ( Nb ) {
          Lb = Nb;
          break a
        }
      }
      Lb = ""
    }

    function J( a ) {
      return -1 != Lb.indexOf( a )
    };

    function Ob( a, b, c ) {
      this.h = c === Pb ? a : "";
      this.i = b
    }
    m = Ob.prototype;
    m.qa = !0;
    m.ma = function () {
      return this.i
    };
    m.W = !0;
    m.V = function () {
      return this.h.toString()
    };
    m.toString = function () {
      return this.h.toString()
    };
    var Pb = {};

    function Qb( a, b ) {
      var c = rb();
      c = c ? c.createHTML( a ) : a;
      return new Ob( c, b, Pb )
    };

    function Rb( a, b ) {
      var c = b instanceof I ? b : Jb( b );
      a.href = Fb( c )
    }

    function Sb( a, b ) {
      a.src = ub( b );
      var c = Fa( a.ownerDocument && a.ownerDocument.defaultView );
      c && a.setAttribute( "nonce", c )
    };

    function Tb( a ) {
      return a = wb( a, void 0 )
    }

    function Ub( a ) {
      for ( var b = 0, c = 0; c < a.length; ++c ) b = 31 * b + a.charCodeAt( c ) >>> 0;
      return b
    };
    var Vb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Wb( a ) {
      return a ? decodeURI( a ) : a
    }

    function Xb( a ) {
      return Wb( a.match( Vb )[ 3 ] || null )
    }

    function Yb( a, b, c ) {
      if ( Array.isArray( b ) )
        for ( var d = 0; d < b.length; d++ ) Yb( a, String( b[ d ] ), c );
      else null != b && c.push( a + ( "" === b ? "" : "=" + encodeURIComponent( String( b ) ) ) )
    }

    function Zb( a ) {
      var b = [],
        c;
      for ( c in a ) Yb( c, a[ c ], b );
      return b.join( "&" )
    }

    function $b( a, b ) {
      var c = Zb( b );
      if ( c ) {
        var d = a.indexOf( "#" );
        0 > d && ( d = a.length );
        var e = a.indexOf( "?" );
        if ( 0 > e || e > d ) {
          e = d;
          var f = ""
        } else f = a.substring( e + 1, d );
        d = [ a.substr( 0, e ), f, a.substr( d ) ];
        e = d[ 1 ];
        d[ 1 ] = c ? e ? e + "&" + c : c : e;
        c = d[ 0 ] + ( d[ 1 ] ? "?" + d[ 1 ] : "" ) + d[ 2 ]
      } else c = a;
      return c
    }
    var ac = /#|$/;

    function bc( a, b ) {
      var c = void 0;
      return new( c || ( c = Promise ) )( function ( d, e ) {
        function f( k ) {
          try {
            h( b.next( k ) )
          } catch ( l ) {
            e( l )
          }
        }

        function g( k ) {
          try {
            h( b[ "throw" ]( k ) )
          } catch ( l ) {
            e( l )
          }
        }

        function h( k ) {
          k.done ? d( k.value ) : ( new c( function ( l ) {
            l( k.value )
          } ) ).then( f, g )
        }
        h( ( b = b.apply( a, void 0 ) ).next() )
      } )
    };

    function cc() {
      return J( "iPhone" ) && !J( "iPod" ) && !J( "iPad" )
    };

    function dc( a ) {
      dc[ " " ]( a );
      return a
    }
    dc[ " " ] = Ja;
    var ec = J( "Opera" ),
      fc = J( "Trident" ) || J( "MSIE" ),
      gc = J( "Edge" ),
      hc = J( "Gecko" ) && !( -1 != Lb.toLowerCase().indexOf( "webkit" ) && !J( "Edge" ) ) && !( J( "Trident" ) || J( "MSIE" ) ) && !J( "Edge" ),
      ic = -1 != Lb.toLowerCase().indexOf( "webkit" ) && !J( "Edge" );

    function jc() {
      var a = w.document;
      return a ? a.documentMode : void 0
    }
    var kc;
    a: {
      var lc = "",
        mc = function () {
          var a = Lb;
          if ( hc ) return /rv:([^\);]+)(\)|;)/.exec( a );
          if ( gc ) return /Edge\/([\d\.]+)/.exec( a );
          if ( fc ) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec( a );
          if ( ic ) return /WebKit\/(\S+)/.exec( a );
          if ( ec ) return /(?:Version)[ \/]?(\S+)/.exec( a )
        }();
      mc && ( lc = mc ? mc[ 1 ] : "" );
      if ( fc ) {
        var nc = jc();
        if ( null != nc && nc > parseFloat( lc ) ) {
          kc = String( nc );
          break a
        }
      }
      kc = lc
    }
    var pc = kc,
      qc;
    if ( w.document && fc ) {
      var rc = jc();
      qc = rc ? rc : parseInt( pc, 10 ) || void 0
    } else qc = void 0;
    var sc = qc;
    var tc = J( "Firefox" ) || J( "FxiOS" ),
      uc = cc() || J( "iPod" ),
      vc = J( "iPad" ),
      wc = J( "Safari" ) && !( ( J( "Chrome" ) || J( "CriOS" ) ) && !J( "Edge" ) || J( "Coast" ) || J( "Opera" ) || J( "Edge" ) || J( "Edg/" ) || J( "OPR" ) || J( "Firefox" ) || J( "FxiOS" ) || J( "Silk" ) || J( "Android" ) ) && !( cc() || J( "iPad" ) || J( "iPod" ) );
    var xc = {},
      yc = null;

    function zc( a ) {
      var b = 3;
      Ma( a );
      void 0 === b && ( b = 0 );
      if ( !yc ) {
        yc = {};
        for ( var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split( "" ), d = [ "+/=", "+/", "-_=", "-_.", "-_" ], e = 0; 5 > e; e++ ) {
          var f = c.concat( d[ e ].split( "" ) );
          xc[ e ] = f;
          for ( var g = 0; g < f.length; g++ ) {
            var h = f[ g ];
            void 0 === yc[ h ] && ( yc[ h ] = g )
          }
        }
      }
      b = xc[ b ];
      c = [];
      for ( d = 0; d < a.length; d += 3 ) {
        var k = a[ d ],
          l = ( e = d + 1 < a.length ) ? a[ d + 1 ] : 0;
        h = ( f = d + 2 < a.length ) ? a[ d + 2 ] : 0;
        g = k >> 2;
        k = ( k & 3 ) << 4 | l >> 4;
        l = ( l & 15 ) << 2 | h >> 6;
        h &= 63;
        f || ( h = 64, e || ( l = 64 ) );
        c.push( b[ g ], b[ k ], b[ l ] || "", b[ h ] || "" )
      }
      return c.join( "" )
    };
    var K = window;
    var Ac = !fc || 9 <= Number( sc );

    function Bc( a, b ) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0
    }
    m = Bc.prototype;
    m.clone = function () {
      return new Bc( this.x, this.y )
    };
    m.equals = function ( a ) {
      return a instanceof Bc && ( this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1 )
    };
    m.ceil = function () {
      this.x = Math.ceil( this.x );
      this.y = Math.ceil( this.y );
      return this
    };
    m.floor = function () {
      this.x = Math.floor( this.x );
      this.y = Math.floor( this.y );
      return this
    };
    m.round = function () {
      this.x = Math.round( this.x );
      this.y = Math.round( this.y );
      return this
    };

    function Cc( a, b ) {
      this.width = a;
      this.height = b
    }
    m = Cc.prototype;
    m.clone = function () {
      return new Cc( this.width, this.height )
    };
    m.aspectRatio = function () {
      return this.width / this.height
    };
    m.isEmpty = function () {
      return !( this.width * this.height )
    };
    m.ceil = function () {
      this.width = Math.ceil( this.width );
      this.height = Math.ceil( this.height );
      return this
    };
    m.floor = function () {
      this.width = Math.floor( this.width );
      this.height = Math.floor( this.height );
      return this
    };
    m.round = function () {
      this.width = Math.round( this.width );
      this.height = Math.round( this.height );
      return this
    };

    function Dc( a ) {
      var b = document;
      return "string" === typeof a ? b.getElementById( a ) : a
    }

    function Ec( a, b ) {
      fb( b, function ( c, d ) {
        c && "object" == typeof c && c.W && ( c = c.V() );
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Fc.hasOwnProperty( d ) ? a.setAttribute( Fc[ d ], c ) : 0 == d.lastIndexOf( "aria-", 0 ) || 0 == d.lastIndexOf( "data-", 0 ) ? a.setAttribute( d, c ) : a[ d ] = c
      } )
    }
    var Fc = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    };

    function Gc( a, b, c ) {
      var d = arguments,
        e = document,
        f = String( d[ 0 ] ),
        g = d[ 1 ];
      if ( !Ac && g && ( g.name || g.type ) ) {
        f = [ "<", f ];
        g.name && f.push( ' name="', Tb( g.name ), '"' );
        if ( g.type ) {
          f.push( ' type="', Tb( g.type ), '"' );
          var h = {};
          pb( h, g );
          delete h.type;
          g = h
        }
        f.push( ">" );
        f = f.join( "" )
      }
      f = Hc( e, f );
      g && ( "string" === typeof g ? f.className = g : Array.isArray( g ) ? f.className = g.join( " " ) : Ec( f, g ) );
      2 < d.length && Ic( e, f, d );
      return f
    }

    function Ic( a, b, c ) {
      function d( h ) {
        h && b.appendChild( "string" === typeof h ? a.createTextNode( h ) : h )
      }
      for ( var e = 2; e < c.length; e++ ) {
        var f = c[ e ];
        if ( !Ma( f ) || B( f ) && 0 < f.nodeType ) d( f );
        else {
          a: {
            if ( f && "number" == typeof f.length ) {
              if ( B( f ) ) {
                var g = "function" == typeof f.item || "string" == typeof f.item;
                break a
              }
              if ( "function" === typeof f ) {
                g = "function" == typeof f.item;
                break a
              }
            }
            g = !1
          }
          G( g ? db( f ) : f, d )
        }
      }
    }

    function Hc( a, b ) {
      b = String( b );
      "application/xhtml+xml" === a.contentType && ( b = b.toLowerCase() );
      return a.createElement( b )
    }

    function Jc( a, b ) {
      for ( var c = 0; a; ) {
        if ( b( a ) ) return a;
        a = a.parentNode;
        c++
      }
      return null
    };

    function Kc( a ) {
      var b = Lc;
      if ( b )
        for ( var c in b ) Object.prototype.hasOwnProperty.call( b, c ) && a.call( void 0, b[ c ], c, b )
    }

    function Mc() {
      var a = [];
      Kc( function ( b ) {
        a.push( b )
      } );
      return a
    }
    var Lc = {
        Db: "allow-forms",
        Eb: "allow-modals",
        Fb: "allow-orientation-lock",
        Gb: "allow-pointer-lock",
        Hb: "allow-popups",
        Ib: "allow-popups-to-escape-sandbox",
        Jb: "allow-presentation",
        Kb: "allow-same-origin",
        Lb: "allow-scripts",
        Mb: "allow-top-navigation",
        Nb: "allow-top-navigation-by-user-activation"
      },
      Nc = Xa( function () {
        return Mc()
      } );

    function Oc() {
      var a = Hc( document, "IFRAME" ),
        b = {};
      G( Nc(), function ( c ) {
        a.sandbox && a.sandbox.supports && a.sandbox.supports( c ) && ( b[ c ] = !0 )
      } );
      return b
    };
    var Pc = {};

    function Qc( a ) {
      if ( a !== Pc ) throw Error( "Bad secret" );
    };

    function Rc() {
      var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
      return null !== a && void 0 !== a ? a : null
    };
    var Sc;

    function Tc() {}

    function Uc( a, b ) {
      Qc( b );
      this.h = a
    }
    v( Uc, Tc );
    Uc.prototype.toString = function () {
      return this.h.toString()
    };
    var Vc = null === ( Sc = Rc() ) || void 0 === Sc ? void 0 : Sc.emptyHTML;
    new Uc( null !== Vc && void 0 !== Vc ? Vc : "", Pc );
    var Wc;

    function Xc() {}

    function Yc( a, b ) {
      Qc( b );
      this.h = a
    }
    v( Yc, Xc );
    Yc.prototype.toString = function () {
      return this.h.toString()
    };
    var Zc = null === ( Wc = Rc() ) || void 0 === Wc ? void 0 : Wc.emptyScript;
    new Yc( null !== Zc && void 0 !== Zc ? Zc : "", Pc );

    function $c() {}

    function ad( a, b ) {
      Qc( b );
      this.h = a
    }
    v( ad, $c );
    ad.prototype.toString = function () {
      return this.h
    };
    new ad( "about:blank", Pc );
    new ad( "about:invalid#zTSz", Pc );

    function bd( a ) {
      cd();
      var b = rb();
      a = b ? b.createScriptURL( a ) : a;
      return new sb( a, tb )
    }
    var cd = Ja;

    function dd( a ) {
      "number" == typeof a && ( a = Math.round( a ) + "px" );
      return a
    };

    function ed( a ) {
      var b = A( "window.location.href" );
      null == a && ( a = 'Unknown Error of type "null/undefined"' );
      if ( "string" === typeof a ) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
      };
      var c = !1;
      try {
        var d = a.lineNumber || a.line || "Not available"
      } catch ( g ) {
        d = "Not available", c = !0
      }
      try {
        var e = a.fileName || a.filename || a.sourceURL || w.$googDebugFname || b
      } catch ( g ) {
        e = "Not available", c = !0
      }
      b = fd( a );
      if ( !( !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ) ) {
        c = a.message;
        if ( null ==
          c ) {
          if ( a.constructor && a.constructor instanceof Function ) {
            if ( a.constructor.name ) c = a.constructor.name;
            else if ( c = a.constructor, gd[ c ] ) c = gd[ c ];
            else {
              c = String( c );
              if ( !gd[ c ] ) {
                var f = /function\s+([^\(]+)/m.exec( c );
                gd[ c ] = f ? f[ 1 ] : "[Anonymous]"
              }
              c = gd[ c ]
            }
            c = 'Unknown Error of type "' + c + '"'
          } else c = "Unknown Error of unknown type";
          "function" === typeof a.toString && Object.prototype.toString !== a.toString && ( c += ": " + a.toString() )
        }
        return {
          message: c,
          name: a.name || "UnknownError",
          lineNumber: d,
          fileName: e,
          stack: b || "Not available"
        }
      }
      a.stack =
        b;
      return a
    }

    function fd( a, b ) {
      b || ( b = {} );
      b[ hd( a ) ] = !0;
      var c = a.stack || "",
        d = a.Bk;
      d && !b[ hd( d ) ] && ( c += "\nCaused by: ", d.stack && 0 == d.stack.indexOf( d.toString() ) || ( c += "string" === typeof d ? d : d.message + "\n" ), c += fd( d, b ) );
      return c
    }

    function hd( a ) {
      var b = "";
      "function" === typeof a.toString && ( b = "" + a );
      return b + a.stack
    }
    var gd = {};

    function id( a ) {
      this.h = a || {
        cookie: ""
      }
    }
    m = id.prototype;
    m.isEnabled = function () {
      return navigator.cookieEnabled
    };
    m.set = function ( a, b, c ) {
      var d = !1;
      if ( "object" === typeof c ) {
        var e = c.Jk;
        d = c.secure || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.Aa
      }
      if ( /[;=\s]/.test( a ) ) throw Error( 'Invalid cookie name "' + a + '"' );
      if ( /[;\r\n]/.test( b ) ) throw Error( 'Invalid cookie value "' + b + '"' );
      void 0 === h && ( h = -1 );
      this.h.cookie = a + "=" + b + ( f ? ";domain=" + f : "" ) + ( g ? ";path=" + g : "" ) + ( 0 > h ? "" : 0 == h ? ";expires=" + ( new Date( 1970, 1, 1 ) ).toUTCString() : ";expires=" + ( new Date( Date.now() + 1E3 * h ) ).toUTCString() ) + ( d ? ";secure" : "" ) + ( null != e ? ";samesite=" + e : "" )
    };
    m.get = function ( a, b ) {
      for ( var c = a + "=", d = ( this.h.cookie || "" ).split( ";" ), e = 0, f; e < d.length; e++ ) {
        f = vb( d[ e ] );
        if ( 0 == f.lastIndexOf( c, 0 ) ) return f.substr( c.length );
        if ( f == a ) return ""
      }
      return b
    };
    m.remove = function ( a, b, c ) {
      var d = void 0 !== this.get( a );
      this.set( a, "", {
        Aa: 0,
        path: b,
        domain: c
      } );
      return d
    };
    m.isEmpty = function () {
      return !this.h.cookie
    };
    m.clear = function () {
      for ( var a = ( this.h.cookie || "" ).split( ";" ), b = [], c = [], d, e, f = 0; f < a.length; f++ ) e = vb( a[ f ] ), d = e.indexOf( "=" ), -1 == d ? ( b.push( "" ), c.push( e ) ) : ( b.push( e.substring( 0, d ) ), c.push( e.substring( d + 1 ) ) );
      for ( a = b.length - 1; 0 <= a; a-- ) this.remove( b[ a ] )
    };
    var jd = new id( "undefined" == typeof document ? null : document );
    var kd = ( new Date ).getTime();

    function ld( a ) {
      if ( !a ) return "";
      a = a.split( "#" )[ 0 ].split( "?" )[ 0 ];
      a = a.toLowerCase();
      0 == a.indexOf( "//" ) && ( a = window.location.protocol + a );
      /^[\w\-]*:\/\//.test( a ) || ( a = window.location.href );
      var b = a.substring( a.indexOf( "://" ) + 3 ),
        c = b.indexOf( "/" ); - 1 != c && ( b = b.substring( 0, c ) );
      c = a.substring( 0, a.indexOf( "://" ) );
      if ( !c ) throw Error( "URI is missing protocol: " + a );
      if ( "http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c ) throw Error( "Invalid URI scheme in origin: " + c );
      a = "";
      var d = b.indexOf( ":" );
      if ( -1 != d ) {
        var e = b.substring( d + 1 );
        b = b.substring( 0, d );
        if ( "http" === c && "80" !== e || "https" === c && "443" !== e ) a = ":" + e
      }
      return c + "://" + b + a
    };

    function md() {
      function a() {
        e[ 0 ] = 1732584193;
        e[ 1 ] = 4023233417;
        e[ 2 ] = 2562383102;
        e[ 3 ] = 271733878;
        e[ 4 ] = 3285377520;
        n = l = 0
      }

      function b( p ) {
        for ( var q = g, r = 0; 64 > r; r += 4 ) q[ r / 4 ] = p[ r ] << 24 | p[ r + 1 ] << 16 | p[ r + 2 ] << 8 | p[ r + 3 ];
        for ( r = 16; 80 > r; r++ ) p = q[ r - 3 ] ^ q[ r - 8 ] ^ q[ r - 14 ] ^ q[ r - 16 ], q[ r ] = ( p << 1 | p >>> 31 ) & 4294967295;
        p = e[ 0 ];
        var y = e[ 1 ],
          z = e[ 2 ],
          D = e[ 3 ],
          da = e[ 4 ];
        for ( r = 0; 80 > r; r++ ) {
          if ( 40 > r )
            if ( 20 > r ) {
              var va = D ^ y & ( z ^ D );
              var oc = 1518500249
            } else va = y ^ z ^ D, oc = 1859775393;
          else 60 > r ? ( va = y & z | D & ( y | z ), oc = 2400959708 ) : ( va = y ^ z ^ D, oc = 3395469782 );
          va = ( ( p << 5 | p >>> 27 ) & 4294967295 ) + va + da + oc + q[ r ] & 4294967295;
          da = D;
          D = z;
          z = ( y << 30 | y >>> 2 ) & 4294967295;
          y = p;
          p = va
        }
        e[ 0 ] = e[ 0 ] + p & 4294967295;
        e[ 1 ] = e[ 1 ] +
          y & 4294967295;
        e[ 2 ] = e[ 2 ] + z & 4294967295;
        e[ 3 ] = e[ 3 ] + D & 4294967295;
        e[ 4 ] = e[ 4 ] + da & 4294967295
      }

      function c( p, q ) {
        if ( "string" === typeof p ) {
          p = unescape( encodeURIComponent( p ) );
          for ( var r = [], y = 0, z = p.length; y < z; ++y ) r.push( p.charCodeAt( y ) );
          p = r
        }
        q || ( q = p.length );
        r = 0;
        if ( 0 == l )
          for ( ; r + 64 < q; ) b( p.slice( r, r + 64 ) ), r += 64, n += 64;
        for ( ; r < q; )
          if ( f[ l++ ] = p[ r++ ], n++, 64 == l )
            for ( l = 0, b( f ); r + 64 < q; ) b( p.slice( r, r + 64 ) ), r += 64, n += 64
      }

      function d() {
        var p = [],
          q = 8 * n;
        56 > l ? c( h, 56 - l ) : c( h, 64 - ( l - 56 ) );
        for ( var r = 63; 56 <= r; r-- ) f[ r ] = q & 255, q >>>= 8;
        b( f );
        for ( r = q = 0; 5 > r; r++ )
          for ( var y = 24; 0 <= y; y -= 8 ) p[ q++ ] = e[ r ] >> y & 255;
        return p
      }
      for ( var e = [], f = [], g = [], h = [ 128 ], k = 1; 64 > k; ++k ) h[ k ] = 0;
      var l, n;
      a();
      return {
        reset: a,
        update: c,
        digest: d,
        Ka: function () {
          for ( var p = d(), q = "", r = 0; r < p.length; r++ ) q += "0123456789ABCDEF".charAt( Math.floor( p[ r ] / 16 ) ) + "0123456789ABCDEF".charAt( p[ r ] % 16 );
          return q
        }
      }
    };

    function nd( a, b, c ) {
      var d = String( w.location.href );
      return d && a && b ? [ b, od( ld( d ), a, c || null ) ].join( " " ) : null
    }

    function od( a, b, c ) {
      var d = [],
        e = [];
      if ( 1 == ( Array.isArray( c ) ? 2 : 1 ) ) return e = [ b, a ], G( d, function ( h ) {
        e.push( h )
      } ), pd( e.join( " " ) );
      var f = [],
        g = [];
      G( c, function ( h ) {
        g.push( h.key );
        f.push( h.value )
      } );
      c = Math.floor( ( new Date ).getTime() / 1E3 );
      e = 0 == f.length ? [ c, b, a ] : [ f.join( ":" ), c, b, a ];
      G( d, function ( h ) {
        e.push( h )
      } );
      a = pd( e.join( " " ) );
      a = [ c, a ];
      0 == g.length || a.push( g.join( "" ) );
      return a.join( "_" )
    }

    function pd( a ) {
      var b = md();
      b.update( a );
      return b.Ka().toLowerCase()
    };
    var qd = {};

    function rd( a ) {
      return !!qd.FPA_SAMESITE_PHASE2_MOD || !( void 0 === a || !a )
    }

    function sd( a, b, c, d ) {
      ( a = w[ a ] ) || ( a = ( new id( document ) ).get( b ) );
      return a ? nd( a, c, d ) : null
    }

    function td( a ) {
      var b = void 0 === b ? !1 : b;
      var c = ld( String( w.location.href ) ),
        d = [];
      var e = b;
      e = void 0 === e ? !1 : e;
      var f = w.__SAPISID || w.__APISID || w.__3PSAPISID || w.__OVERRIDE_SID;
      rd( e ) && ( f = f || w.__1PSAPISID );
      if ( f ) e = !0;
      else {
        var g = new id( document );
        f = g.get( "SAPISID" ) || g.get( "APISID" ) || g.get( "__Secure-3PAPISID" ) || g.get( "SID" );
        rd( e ) && ( f = f || g.get( "__Secure-1PAPISID" ) );
        e = !!f
      }
      e && ( e = ( c = 0 == c.indexOf( "https:" ) || 0 == c.indexOf( "chrome-extension:" ) || 0 == c.indexOf( "moz-extension:" ) ) ? w.__SAPISID : w.__APISID, e || ( e = new id( document ),
        e = e.get( c ? "SAPISID" : "APISID" ) || e.get( "__Secure-3PAPISID" ) ), ( e = e ? nd( e, c ? "SAPISIDHASH" : "APISIDHASH", a ) : null ) && d.push( e ), c && rd( b ) && ( ( b = sd( "__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a ) ) && d.push( b ), ( a = sd( "__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a ) ) && d.push( a ) ) );
      return 0 == d.length ? null : d.join( " " )
    };

    function ud() {
      this.h = [];
      this.i = -1
    }
    ud.prototype.set = function ( a, b ) {
      b = void 0 === b ? !0 : b;
      0 <= a && 52 > a && 0 === a % 1 && this.h[ a ] != b && ( this.h[ a ] = b, this.i = -1 )
    };
    ud.prototype.get = function ( a ) {
      return !!this.h[ a ]
    };

    function vd( a ) {
      -1 == a.i && ( a.i = ab( a.h, function ( b, c, d ) {
        return c ? b + Math.pow( 2, d ) : b
      }, 0 ) );
      return a.i
    };

    function wd( a, b ) {
      this.j = a;
      this.l = b;
      this.i = 0;
      this.h = null
    }
    wd.prototype.get = function () {
      if ( 0 < this.i ) {
        this.i--;
        var a = this.h;
        this.h = a.next;
        a.next = null
      } else a = this.j();
      return a
    };

    function xd( a, b ) {
      a.l( b );
      100 > a.i && ( a.i++, b.next = a.h, a.h = b )
    };
    var yd;

    function zd() {
      var a = w.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !J( "Presto" ) && ( a = function () {
        var e = Hc( document, "IFRAME" );
        e.style.display = "none";
        document.documentElement.appendChild( e );
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = C( function ( k ) {
          if ( ( "*" == h || k.origin == h ) && k.data == g ) this.port1.onmessage()
        }, this );
        f.addEventListener( "message", e, !1 );
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage( g, h )
          }
        }
      } );
      if ( "undefined" !== typeof a && !J( "Trident" ) && !J( "MSIE" ) ) {
        var b = new a,
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if ( void 0 !== c.next ) {
            c = c.next;
            var e = c.wa;
            c.wa = null;
            e()
          }
        };
        return function ( e ) {
          d.next = {
            wa: e
          };
          d = d.next;
          b.port2.postMessage( 0 )
        }
      }
      return function ( e ) {
        w.setTimeout( e, 0 )
      }
    };

    function Ad( a ) {
      w.setTimeout( function () {
        throw a;
      }, 0 )
    };

    function Bd() {
      this.i = this.h = null
    }
    Bd.prototype.add = function ( a, b ) {
      var c = Cd.get();
      c.set( a, b );
      this.i ? this.i.next = c : this.h = c;
      this.i = c
    };
    Bd.prototype.remove = function () {
      var a = null;
      this.h && ( a = this.h, this.h = this.h.next, this.h || ( this.i = null ), a.next = null );
      return a
    };
    var Cd = new wd( function () {
      return new Dd
    }, function ( a ) {
      return a.reset()
    } );

    function Dd() {
      this.next = this.scope = this.h = null
    }
    Dd.prototype.set = function ( a, b ) {
      this.h = a;
      this.scope = b;
      this.next = null
    };
    Dd.prototype.reset = function () {
      this.next = this.scope = this.h = null
    };

    function Ed( a, b ) {
      Fd || Gd();
      Hd || ( Fd(), Hd = !0 );
      Id.add( a, b )
    }
    var Fd;

    function Gd() {
      if ( w.Promise && w.Promise.resolve ) {
        var a = w.Promise.resolve( void 0 );
        Fd = function () {
          a.then( Jd )
        }
      } else Fd = function () {
        var b = Jd;
        "function" !== typeof w.setImmediate || w.Window && w.Window.prototype && !J( "Edge" ) && w.Window.prototype.setImmediate == w.setImmediate ? ( yd || ( yd = zd() ), yd( b ) ) : w.setImmediate( b )
      }
    }
    var Hd = !1,
      Id = new Bd;

    function Jd() {
      for ( var a; a = Id.remove(); ) {
        try {
          a.h.call( a.scope )
        } catch ( b ) {
          Ad( b )
        }
        xd( Cd, a )
      }
      Hd = !1
    };

    function Kd() {
      this.i = -1
    };

    function Ld() {
      this.i = 64;
      this.h = [];
      this.o = [];
      this.u = [];
      this.l = [];
      this.l[ 0 ] = 128;
      for ( var a = 1; a < this.i; ++a ) this.l[ a ] = 0;
      this.m = this.j = 0;
      this.reset()
    }
    F( Ld, Kd );
    Ld.prototype.reset = function () {
      this.h[ 0 ] = 1732584193;
      this.h[ 1 ] = 4023233417;
      this.h[ 2 ] = 2562383102;
      this.h[ 3 ] = 271733878;
      this.h[ 4 ] = 3285377520;
      this.m = this.j = 0
    };

    function Md( a, b, c ) {
      c || ( c = 0 );
      var d = a.u;
      if ( "string" === typeof b )
        for ( var e = 0; 16 > e; e++ ) d[ e ] = b.charCodeAt( c ) << 24 | b.charCodeAt( c + 1 ) << 16 | b.charCodeAt( c + 2 ) << 8 | b.charCodeAt( c + 3 ), c += 4;
      else
        for ( e = 0; 16 > e; e++ ) d[ e ] = b[ c ] << 24 | b[ c + 1 ] << 16 | b[ c + 2 ] << 8 | b[ c + 3 ], c += 4;
      for ( e = 16; 80 > e; e++ ) {
        var f = d[ e - 3 ] ^ d[ e - 8 ] ^ d[ e - 14 ] ^ d[ e - 16 ];
        d[ e ] = ( f << 1 | f >>> 31 ) & 4294967295
      }
      b = a.h[ 0 ];
      c = a.h[ 1 ];
      var g = a.h[ 2 ],
        h = a.h[ 3 ],
        k = a.h[ 4 ];
      for ( e = 0; 80 > e; e++ ) {
        if ( 40 > e )
          if ( 20 > e ) {
            f = h ^ c & ( g ^ h );
            var l = 1518500249
          } else f = c ^ g ^ h, l = 1859775393;
        else 60 > e ? ( f = c & g | h & ( c | g ), l = 2400959708 ) :
          ( f = c ^ g ^ h, l = 3395469782 );
        f = ( b << 5 | b >>> 27 ) + f + k + l + d[ e ] & 4294967295;
        k = h;
        h = g;
        g = ( c << 30 | c >>> 2 ) & 4294967295;
        c = b;
        b = f
      }
      a.h[ 0 ] = a.h[ 0 ] + b & 4294967295;
      a.h[ 1 ] = a.h[ 1 ] + c & 4294967295;
      a.h[ 2 ] = a.h[ 2 ] + g & 4294967295;
      a.h[ 3 ] = a.h[ 3 ] + h & 4294967295;
      a.h[ 4 ] = a.h[ 4 ] + k & 4294967295
    }
    Ld.prototype.update = function ( a, b ) {
      if ( null != a ) {
        void 0 === b && ( b = a.length );
        for ( var c = b - this.i, d = 0, e = this.o, f = this.j; d < b; ) {
          if ( 0 == f )
            for ( ; d <= c; ) Md( this, a, d ), d += this.i;
          if ( "string" === typeof a )
            for ( ; d < b; ) {
              if ( e[ f ] = a.charCodeAt( d ), ++f, ++d, f == this.i ) {
                Md( this, e );
                f = 0;
                break
              }
            } else
              for ( ; d < b; )
                if ( e[ f ] = a[ d ], ++f, ++d, f == this.i ) {
                  Md( this, e );
                  f = 0;
                  break
                }
        }
        this.j = f;
        this.m += b
      }
    };
    Ld.prototype.digest = function () {
      var a = [],
        b = 8 * this.m;
      56 > this.j ? this.update( this.l, 56 - this.j ) : this.update( this.l, this.i - ( this.j - 56 ) );
      for ( var c = this.i - 1; 56 <= c; c-- ) this.o[ c ] = b & 255, b /= 256;
      Md( this, this.o );
      for ( c = b = 0; 5 > c; c++ )
        for ( var d = 24; 0 <= d; d -= 8 ) a[ b ] = this.h[ c ] >> d & 255, ++b;
      return a
    };

    function Nd( a ) {
      a && "function" == typeof a.dispose && a.dispose()
    };

    function Od( a ) {
      for ( var b = 0, c = arguments.length; b < c; ++b ) {
        var d = arguments[ b ];
        Ma( d ) ? Od.apply( null, d ) : Nd( d )
      }
    };

    function L() {
      this.i = this.i;
      this.D = this.D
    }
    L.prototype.i = !1;
    L.prototype.dispose = function () {
      this.i || ( this.i = !0, this.A() )
    };

    function Pd( a, b ) {
      a.i ? b() : ( a.D || ( a.D = [] ), a.D.push( b ) )
    }
    L.prototype.A = function () {
      if ( this.D )
        for ( ; this.D.length; ) this.D.shift()()
    };

    function Qd( a ) {
      return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute( "class" ) || ""
    }

    function Rd( a, b ) {
      "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute( "class", b )
    }

    function Sd( a, b ) {
      if ( a.classList ) var c = a.classList.contains( b );
      else c = a.classList ? a.classList : Qd( a ).match( /\S+/g ) || [], c = 0 <= Ya( c, b );
      return c
    }

    function Td() {
      var a = document.body;
      a.classList ? a.classList.remove( "inverted-hdpi" ) : Sd( a, "inverted-hdpi" ) && Rd( a, Za( a.classList ? a.classList : Qd( a ).match( /\S+/g ) || [], function ( b ) {
        return "inverted-hdpi" != b
      } ).join( " " ) )
    };
    var Ud = "StopIteration" in w ? w.StopIteration : {
      message: "StopIteration",
      stack: ""
    };

    function Vd() {}
    Vd.prototype.next = function () {
      throw Ud;
    };
    Vd.prototype.L = function () {
      return this
    };

    function Wd( a ) {
      if ( a instanceof Vd ) return a;
      if ( "function" == typeof a.L ) return a.L( !1 );
      if ( Ma( a ) ) {
        var b = 0,
          c = new Vd;
        c.next = function () {
          for ( ;; ) {
            if ( b >= a.length ) throw Ud;
            if ( b in a ) return a[ b++ ];
            b++
          }
        };
        return c
      }
      throw Error( "Not implemented" );
    }

    function Xd( a, b ) {
      if ( Ma( a ) ) try {
        G( a, b, void 0 )
      } catch ( c ) {
        if ( c !== Ud ) throw c;
      } else {
        a = Wd( a );
        try {
          for ( ;; ) b.call( void 0, a.next(), void 0, a )
        } catch ( c ) {
          if ( c !== Ud ) throw c;
        }
      }
    }

    function Yd( a ) {
      if ( Ma( a ) ) return db( a );
      a = Wd( a );
      var b = [];
      Xd( a, function ( c ) {
        b.push( c )
      } );
      return b
    };

    function Zd( a, b ) {
      this.i = {};
      this.h = [];
      this.N = this.j = 0;
      var c = arguments.length;
      if ( 1 < c ) {
        if ( c % 2 ) throw Error( "Uneven number of arguments" );
        for ( var d = 0; d < c; d += 2 ) this.set( arguments[ d ], arguments[ d + 1 ] )
      } else if ( a )
        if ( a instanceof Zd )
          for ( c = $d( a ), d = 0; d < c.length; d++ ) this.set( c[ d ], a.get( c[ d ] ) );
        else
          for ( d in a ) this.set( d, a[ d ] )
    }

    function $d( a ) {
      ae( a );
      return a.h.concat()
    }
    m = Zd.prototype;
    m.equals = function ( a, b ) {
      if ( this === a ) return !0;
      if ( this.j != a.j ) return !1;
      var c = b || be;
      ae( this );
      for ( var d, e = 0; d = this.h[ e ]; e++ )
        if ( !c( this.get( d ), a.get( d ) ) ) return !1;
      return !0
    };

    function be( a, b ) {
      return a === b
    }
    m.isEmpty = function () {
      return 0 == this.j
    };
    m.clear = function () {
      this.i = {};
      this.N = this.j = this.h.length = 0
    };
    m.remove = function ( a ) {
      return Object.prototype.hasOwnProperty.call( this.i, a ) ? ( delete this.i[ a ], this.j--, this.N++, this.h.length > 2 * this.j && ae( this ), !0 ) : !1
    };

    function ae( a ) {
      if ( a.j != a.h.length ) {
        for ( var b = 0, c = 0; b < a.h.length; ) {
          var d = a.h[ b ];
          Object.prototype.hasOwnProperty.call( a.i, d ) && ( a.h[ c++ ] = d );
          b++
        }
        a.h.length = c
      }
      if ( a.j != a.h.length ) {
        var e = {};
        for ( c = b = 0; b < a.h.length; ) d = a.h[ b ], Object.prototype.hasOwnProperty.call( e, d ) || ( a.h[ c++ ] = d, e[ d ] = 1 ), b++;
        a.h.length = c
      }
    }
    m.get = function ( a, b ) {
      return Object.prototype.hasOwnProperty.call( this.i, a ) ? this.i[ a ] : b
    };
    m.set = function ( a, b ) {
      Object.prototype.hasOwnProperty.call( this.i, a ) || ( this.j++, this.h.push( a ), this.N++ );
      this.i[ a ] = b
    };
    m.forEach = function ( a, b ) {
      for ( var c = $d( this ), d = 0; d < c.length; d++ ) {
        var e = c[ d ],
          f = this.get( e );
        a.call( b, f, e, this )
      }
    };
    m.clone = function () {
      return new Zd( this )
    };
    m.L = function ( a ) {
      ae( this );
      var b = 0,
        c = this.N,
        d = this,
        e = new Vd;
      e.next = function () {
        if ( c != d.N ) throw Error( "The map has changed since the iterator was created" );
        if ( b >= d.h.length ) throw Ud;
        var f = d.h[ b++ ];
        return a ? f : d.i[ f ]
      };
      return e
    };
    var ce = function () {
      if ( !w.addEventListener || !Object.defineProperty ) return !1;
      var a = !1,
        b = Object.defineProperty( {}, "passive", {
          get: function () {
            a = !0
          }
        } );
      try {
        w.addEventListener( "test", Ja, b ), w.removeEventListener( "test", Ja, b )
      } catch ( c ) {}
      return a
    }();

    function de( a, b ) {
      this.type = a;
      this.h = this.target = b;
      this.defaultPrevented = this.j = !1
    }
    de.prototype.stopPropagation = function () {
      this.j = !0
    };
    de.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    };

    function ee( a, b ) {
      de.call( this, a ? a.type : "" );
      this.relatedTarget = this.h = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.i = null;
      a && this.init( a, b )
    }
    F( ee, de );
    var fe = {
      2: "touch",
      3: "pen",
      4: "mouse"
    };
    ee.prototype.init = function ( a, b ) {
      var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[ 0 ] : null;
      this.target = a.target || a.srcElement;
      this.h = b;
      var e = a.relatedTarget;
      if ( e ) {
        if ( hc ) {
          a: {
            try {
              dc( e.nodeName );
              var f = !0;
              break a
            } catch ( g ) {}
            f = !1
          }
          f || ( e = null )
        }
      } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && ( e = a.toElement );
      this.relatedTarget = e;
      d ? ( this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
        0 ) : ( this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0 );
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ( "keypress" == c ? a.keyCode : 0 );
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : fe[ a.pointerType ] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && ee.H.preventDefault.call( this )
    };
    ee.prototype.stopPropagation = function () {
      ee.H.stopPropagation.call( this );
      this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !0
    };
    ee.prototype.preventDefault = function () {
      ee.H.preventDefault.call( this );
      var a = this.i;
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var ge = "closure_listenable_" + ( 1E6 * Math.random() | 0 );
    var he = 0;

    function ie( a, b, c, d, e ) {
      this.listener = a;
      this.h = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ia = e;
      this.key = ++he;
      this.Y = this.ga = !1
    }

    function je( a ) {
      a.Y = !0;
      a.listener = null;
      a.h = null;
      a.src = null;
      a.ia = null
    };

    function ke( a ) {
      this.src = a;
      this.listeners = {};
      this.h = 0
    }
    ke.prototype.add = function ( a, b, c, d, e ) {
      var f = a.toString();
      a = this.listeners[ f ];
      a || ( a = this.listeners[ f ] = [], this.h++ );
      var g = le( a, b, d, e ); - 1 < g ? ( b = a[ g ], c || ( b.ga = !1 ) ) : ( b = new ie( b, this.src, f, !!d, e ), b.ga = c, a.push( b ) );
      return b
    };
    ke.prototype.remove = function ( a, b, c, d ) {
      a = a.toString();
      if ( !( a in this.listeners ) ) return !1;
      var e = this.listeners[ a ];
      b = le( e, b, c, d );
      return -1 < b ? ( je( e[ b ] ), Array.prototype.splice.call( e, b, 1 ), 0 == e.length && ( delete this.listeners[ a ], this.h-- ), !0 ) : !1
    };

    function me( a, b ) {
      var c = b.type;
      c in a.listeners && cb( a.listeners[ c ], b ) && ( je( b ), 0 == a.listeners[ c ].length && ( delete a.listeners[ c ], a.h-- ) )
    }

    function le( a, b, c, d ) {
      for ( var e = 0; e < a.length; ++e ) {
        var f = a[ e ];
        if ( !f.Y && f.listener == b && f.capture == !!c && f.ia == d ) return e
      }
      return -1
    };
    var ne = "closure_lm_" + ( 1E6 * Math.random() | 0 ),
      oe = {},
      pe = 0;

    function qe( a, b, c, d, e ) {
      if ( d && d.once ) re( a, b, c, d, e );
      else if ( Array.isArray( b ) )
        for ( var f = 0; f < b.length; f++ ) qe( a, b[ f ], c, d, e );
      else c = se( c ), a && a[ ge ] ? te( a, b, c, B( d ) ? !!d.capture : !!d, e ) : ue( a, b, c, !1, d, e )
    }

    function ue( a, b, c, d, e, f ) {
      if ( !b ) throw Error( "Invalid event type" );
      var g = B( e ) ? !!e.capture : !!e,
        h = ve( a );
      h || ( a[ ne ] = h = new ke( a ) );
      c = h.add( b, c, d, g, f );
      if ( !c.h ) {
        d = we();
        c.h = d;
        d.src = a;
        d.listener = c;
        if ( a.addEventListener ) ce || ( e = g ), void 0 === e && ( e = !1 ), a.addEventListener( b.toString(), d, e );
        else if ( a.attachEvent ) a.attachEvent( xe( b.toString() ), d );
        else if ( a.addListener && a.removeListener ) a.addListener( d );
        else throw Error( "addEventListener and attachEvent are unavailable." );
        pe++
      }
    }

    function we() {
      function a( c ) {
        return b.call( a.src, a.listener, c )
      }
      var b = ye;
      return a
    }

    function re( a, b, c, d, e ) {
      if ( Array.isArray( b ) )
        for ( var f = 0; f < b.length; f++ ) re( a, b[ f ], c, d, e );
      else c = se( c ), a && a[ ge ] ? a.h.add( String( b ), c, !0, B( d ) ? !!d.capture : !!d, e ) : ue( a, b, c, !0, d, e )
    }

    function ze( a, b, c, d, e ) {
      if ( Array.isArray( b ) )
        for ( var f = 0; f < b.length; f++ ) ze( a, b[ f ], c, d, e );
      else( d = B( d ) ? !!d.capture : !!d, c = se( c ), a && a[ ge ] ) ? a.h.remove( String( b ), c, d, e ) : a && ( a = ve( a ) ) && ( b = a.listeners[ b.toString() ], a = -1, b && ( a = le( b, c, d, e ) ), ( c = -1 < a ? b[ a ] : null ) && Ae( c ) )
    }

    function Ae( a ) {
      if ( "number" !== typeof a && a && !a.Y ) {
        var b = a.src;
        if ( b && b[ ge ] ) me( b.h, a );
        else {
          var c = a.type,
            d = a.h;
          b.removeEventListener ? b.removeEventListener( c, d, a.capture ) : b.detachEvent ? b.detachEvent( xe( c ), d ) : b.addListener && b.removeListener && b.removeListener( d );
          pe--;
          ( c = ve( b ) ) ? ( me( c, a ), 0 == c.h && ( c.src = null, b[ ne ] = null ) ) : je( a )
        }
      }
    }

    function xe( a ) {
      return a in oe ? oe[ a ] : oe[ a ] = "on" + a
    }

    function ye( a, b ) {
      if ( a.Y ) var c = !0;
      else {
        c = new ee( b, this );
        var d = a.listener,
          e = a.ia || a.src;
        a.ga && Ae( a );
        c = d.call( e, c )
      }
      return c
    }

    function ve( a ) {
      a = a[ ne ];
      return a instanceof ke ? a : null
    }
    var Be = "__closure_events_fn_" + ( 1E9 * Math.random() >>> 0 );

    function se( a ) {
      if ( "function" === typeof a ) return a;
      a[ Be ] || ( a[ Be ] = function ( b ) {
        return a.handleEvent( b )
      } );
      return a[ Be ]
    };

    function Ce() {
      L.call( this );
      this.h = new ke( this );
      this.B = this;
      this.m = null
    }
    F( Ce, L );
    Ce.prototype[ ge ] = !0;
    Ce.prototype.addEventListener = function ( a, b, c, d ) {
      qe( this, a, b, c, d )
    };
    Ce.prototype.removeEventListener = function ( a, b, c, d ) {
      ze( this, a, b, c, d )
    };

    function De( a, b ) {
      var c = a.m;
      if ( c ) {
        var d = [];
        for ( var e = 1; c; c = c.m ) d.push( c ), ++e
      }
      c = a.B;
      e = b;
      var f = e.type || e;
      if ( "string" === typeof e ) e = new de( e, c );
      else if ( e instanceof de ) e.target = e.target || c;
      else {
        var g = e;
        e = new de( f, c );
        pb( e, g )
      }
      g = !0;
      if ( d )
        for ( var h = d.length - 1; !e.j && 0 <= h; h-- ) {
          var k = e.h = d[ h ];
          g = Ee( k, f, !0, e ) && g
        }
      e.j || ( k = e.h = c, g = Ee( k, f, !0, e ) && g, e.j || ( g = Ee( k, f, !1, e ) && g ) );
      if ( d )
        for ( h = 0; !e.j && h < d.length; h++ ) k = e.h = d[ h ], g = Ee( k, f, !1, e ) && g
    }
    Ce.prototype.A = function () {
      Ce.H.A.call( this );
      if ( this.h ) {
        var a = this.h,
          b = 0,
          c;
        for ( c in a.listeners ) {
          for ( var d = a.listeners[ c ], e = 0; e < d.length; e++ ) ++b, je( d[ e ] );
          delete a.listeners[ c ];
          a.h--
        }
      }
      this.m = null
    };

    function te( a, b, c, d, e ) {
      a.h.add( String( b ), c, !1, d, e )
    }

    function Ee( a, b, c, d ) {
      b = a.h.listeners[ String( b ) ];
      if ( !b ) return !0;
      b = b.concat();
      for ( var e = !0, f = 0; f < b.length; ++f ) {
        var g = b[ f ];
        if ( g && !g.Y && g.capture == c ) {
          var h = g.listener,
            k = g.ia || g.src;
          g.ga && me( a.h, g );
          e = !1 !== h.call( k, d ) && e
        }
      }
      return e && !d.defaultPrevented
    };

    function Fe( a ) {
      var b = [];
      Ge( new He, a, b );
      return b.join( "" )
    }

    function He() {}

    function Ge( a, b, c ) {
      if ( null == b ) c.push( "null" );
      else {
        if ( "object" == typeof b ) {
          if ( Array.isArray( b ) ) {
            var d = b;
            b = d.length;
            c.push( "[" );
            for ( var e = "", f = 0; f < b; f++ ) c.push( e ), Ge( a, d[ f ], c ), e = ",";
            c.push( "]" );
            return
          }
          if ( b instanceof String || b instanceof Number || b instanceof Boolean ) b = b.valueOf();
          else {
            c.push( "{" );
            e = "";
            for ( d in b ) Object.prototype.hasOwnProperty.call( b, d ) && ( f = b[ d ], "function" != typeof f && ( c.push( e ), Ie( d, c ), c.push( ":" ), Ge( a, f, c ), e = "," ) );
            c.push( "}" );
            return
          }
        }
        switch ( typeof b ) {
          case "string":
            Ie( b, c );
            break;
          case "number":
            c.push( isFinite( b ) &&
              !isNaN( b ) ? String( b ) : "null" );
            break;
          case "boolean":
            c.push( String( b ) );
            break;
          case "function":
            c.push( "null" );
            break;
          default:
            throw Error( "Unknown type: " + typeof b );
        }
      }
    }
    var Je = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
      },
      Ke = /\uffff/.test( "\uffff" ) ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Ie( a, b ) {
      b.push( '"', a.replace( Ke, function ( c ) {
        var d = Je[ c ];
        d || ( d = "\\u" + ( c.charCodeAt( 0 ) | 65536 ).toString( 16 ).substr( 1 ), Je[ c ] = d );
        return d
      } ), '"' )
    };

    function Le( a ) {
      if ( !a ) return !1;
      try {
        return !!a.$goog_Thenable
      } catch ( b ) {
        return !1
      }
    };

    function M( a ) {
      this.h = 0;
      this.u = void 0;
      this.l = this.i = this.j = null;
      this.m = this.o = !1;
      if ( a != Ja ) try {
        var b = this;
        a.call( void 0, function ( c ) {
          Me( b, 2, c )
        }, function ( c ) {
          Me( b, 3, c )
        } )
      } catch ( c ) {
        Me( this, 3, c )
      }
    }

    function Ne() {
      this.next = this.context = this.onRejected = this.i = this.h = null;
      this.j = !1
    }
    Ne.prototype.reset = function () {
      this.context = this.onRejected = this.i = this.h = null;
      this.j = !1
    };
    var Oe = new wd( function () {
      return new Ne
    }, function ( a ) {
      a.reset()
    } );

    function Pe( a, b, c ) {
      var d = Oe.get();
      d.i = a;
      d.onRejected = b;
      d.context = c;
      return d
    }

    function Qe( a ) {
      return new M( function ( b, c ) {
        c( a )
      } )
    }
    M.prototype.then = function ( a, b, c ) {
      return Re( this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c )
    };
    M.prototype.$goog_Thenable = !0;

    function Se( a, b ) {
      return Re( a, null, b, void 0 )
    }
    M.prototype.cancel = function ( a ) {
      if ( 0 == this.h ) {
        var b = new Te( a );
        Ed( function () {
          Ue( this, b )
        }, this )
      }
    };

    function Ue( a, b ) {
      if ( 0 == a.h )
        if ( a.j ) {
          var c = a.j;
          if ( c.i ) {
            for ( var d = 0, e = null, f = null, g = c.i; g && ( g.j || ( d++, g.h == a && ( e = g ), !( e && 1 < d ) ) ); g = g.next ) e || ( f = g );
            e && ( 0 == c.h && 1 == d ? Ue( c, b ) : ( f ? ( d = f, d.next == c.l && ( c.l = d ), d.next = d.next.next ) : Ve( c ), We( c, e, 3, b ) ) )
          }
          a.j = null
        } else Me( a, 3, b )
    }

    function Xe( a, b ) {
      a.i || 2 != a.h && 3 != a.h || Ye( a );
      a.l ? a.l.next = b : a.i = b;
      a.l = b
    }

    function Re( a, b, c, d ) {
      var e = Pe( null, null, null );
      e.h = new M( function ( f, g ) {
        e.i = b ? function ( h ) {
          try {
            var k = b.call( d, h );
            f( k )
          } catch ( l ) {
            g( l )
          }
        } : f;
        e.onRejected = c ? function ( h ) {
          try {
            var k = c.call( d, h );
            void 0 === k && h instanceof Te ? g( h ) : f( k )
          } catch ( l ) {
            g( l )
          }
        } : g
      } );
      e.h.j = a;
      Xe( a, e );
      return e.h
    }
    M.prototype.B = function ( a ) {
      this.h = 0;
      Me( this, 2, a )
    };
    M.prototype.G = function ( a ) {
      this.h = 0;
      Me( this, 3, a )
    };

    function Me( a, b, c ) {
      if ( 0 == a.h ) {
        a === c && ( b = 3, c = new TypeError( "Promise cannot resolve to itself" ) );
        a.h = 1;
        a: {
          var d = c,
            e = a.B,
            f = a.G;
          if ( d instanceof M ) {
            Xe( d, Pe( e || Ja, f || null, a ) );
            var g = !0
          } else if ( Le( d ) ) d.then( e, f, a ),
          g = !0;
          else {
            if ( B( d ) ) try {
              var h = d.then;
              if ( "function" === typeof h ) {
                Ze( d, h, e, f, a );
                g = !0;
                break a
              }
            } catch ( k ) {
              f.call( a, k );
              g = !0;
              break a
            }
            g = !1
          }
        }
        g || ( a.u = c, a.h = b, a.j = null, Ye( a ), 3 != b || c instanceof Te || $e( a, c ) )
      }
    }

    function Ze( a, b, c, d, e ) {
      function f( k ) {
        h || ( h = !0, d.call( e, k ) )
      }

      function g( k ) {
        h || ( h = !0, c.call( e, k ) )
      }
      var h = !1;
      try {
        b.call( a, g, f )
      } catch ( k ) {
        f( k )
      }
    }

    function Ye( a ) {
      a.o || ( a.o = !0, Ed( a.D, a ) )
    }

    function Ve( a ) {
      var b = null;
      a.i && ( b = a.i, a.i = b.next, b.next = null );
      a.i || ( a.l = null );
      return b
    }
    M.prototype.D = function () {
      for ( var a; a = Ve( this ); ) We( this, a, this.h, this.u );
      this.o = !1
    };

    function We( a, b, c, d ) {
      if ( 3 == c && b.onRejected && !b.j )
        for ( ; a && a.m; a = a.j ) a.m = !1;
      if ( b.h ) b.h.j = null, af( b, c, d );
      else try {
        b.j ? b.i.call( b.context ) : af( b, c, d )
      } catch ( e ) {
        bf.call( null, e )
      }
      xd( Oe, b )
    }

    function af( a, b, c ) {
      2 == b ? a.i.call( a.context, c ) : a.onRejected && a.onRejected.call( a.context, c )
    }

    function $e( a, b ) {
      a.m = !0;
      Ed( function () {
        a.m && bf.call( null, b )
      } )
    }
    var bf = Ad;

    function Te( a ) {
      Va.call( this, a )
    }
    F( Te, Va );
    Te.prototype.name = "cancel";

    function N( a ) {
      L.call( this );
      this.o = 1;
      this.l = [];
      this.m = 0;
      this.h = [];
      this.j = {};
      this.u = !!a
    }
    F( N, L );
    m = N.prototype;
    m.subscribe = function ( a, b, c ) {
      var d = this.j[ a ];
      d || ( d = this.j[ a ] = [] );
      var e = this.o;
      this.h[ e ] = a;
      this.h[ e + 1 ] = b;
      this.h[ e + 2 ] = c;
      this.o = e + 3;
      d.push( e );
      return e
    };

    function cf( a, b, c, d ) {
      if ( b = a.j[ b ] ) {
        var e = a.h;
        ( b = bb( b, function ( f ) {
          return e[ f + 1 ] == c && e[ f + 2 ] == d
        } ) ) && a.X( b )
      }
    }
    m.X = function ( a ) {
      var b = this.h[ a ];
      if ( b ) {
        var c = this.j[ b ];
        0 != this.m ? ( this.l.push( a ), this.h[ a + 1 ] = Ja ) : ( c && cb( c, a ), delete this.h[ a ], delete this.h[ a + 1 ], delete this.h[ a + 2 ] )
      }
      return !!b
    };
    m.O = function ( a, b ) {
      var c = this.j[ a ];
      if ( c ) {
        for ( var d = Array( arguments.length - 1 ), e = 1, f = arguments.length; e < f; e++ ) d[ e - 1 ] = arguments[ e ];
        if ( this.u )
          for ( e = 0; e < c.length; e++ ) {
            var g = c[ e ];
            df( this.h[ g + 1 ], this.h[ g + 2 ], d )
          } else {
            this.m++;
            try {
              for ( e = 0, f = c.length; e < f; e++ ) g = c[ e ], this.h[ g + 1 ].apply( this.h[ g + 2 ], d )
            } finally {
              if ( this.m--, 0 < this.l.length && 0 == this.m )
                for ( ; c = this.l.pop(); ) this.X( c )
            }
          }
        return 0 != e
      }
      return !1
    };

    function df( a, b, c ) {
      Ed( function () {
        a.apply( b, c )
      } )
    }
    m.clear = function ( a ) {
      if ( a ) {
        var b = this.j[ a ];
        b && ( G( b, this.X, this ), delete this.j[ a ] )
      } else this.h.length = 0, this.j = {}
    };
    m.A = function () {
      N.H.A.call( this );
      this.clear();
      this.l.length = 0
    };

    function ef( a ) {
      this.h = a
    }
    ef.prototype.set = function ( a, b ) {
      void 0 === b ? this.h.remove( a ) : this.h.set( a, Fe( b ) )
    };
    ef.prototype.get = function ( a ) {
      try {
        var b = this.h.get( a )
      } catch ( c ) {
        return
      }
      if ( null !== b ) try {
        return JSON.parse( b )
      } catch ( c ) {
        throw "Storage: Invalid value was encountered";
      }
    };
    ef.prototype.remove = function ( a ) {
      this.h.remove( a )
    };

    function ff( a ) {
      this.h = a
    }
    F( ff, ef );

    function gf( a ) {
      this.data = a
    }

    function hf( a ) {
      return void 0 === a || a instanceof gf ? a : new gf( a )
    }
    ff.prototype.set = function ( a, b ) {
      ff.H.set.call( this, a, hf( b ) )
    };
    ff.prototype.i = function ( a ) {
      a = ff.H.get.call( this, a );
      if ( void 0 === a || a instanceof Object ) return a;
      throw "Storage: Invalid value was encountered";
    };
    ff.prototype.get = function ( a ) {
      if ( a = this.i( a ) ) {
        if ( a = a.data, void 0 === a ) throw "Storage: Invalid value was encountered";
      } else a = void 0;
      return a
    };

    function jf( a ) {
      this.h = a
    }
    F( jf, ff );
    jf.prototype.set = function ( a, b, c ) {
      if ( b = hf( b ) ) {
        if ( c ) {
          if ( c < E() ) {
            jf.prototype.remove.call( this, a );
            return
          }
          b.expiration = c
        }
        b.creation = E()
      }
      jf.H.set.call( this, a, b )
    };
    jf.prototype.i = function ( a ) {
      var b = jf.H.i.call( this, a );
      if ( b ) {
        var c = b.creation,
          d = b.expiration;
        if ( d && d < E() || c && c > E() ) jf.prototype.remove.call( this, a );
        else return b
      }
    };

    function kf() {};

    function lf() {}
    F( lf, kf );
    lf.prototype.clear = function () {
      var a = Yd( this.L( !0 ) ),
        b = this;
      G( a, function ( c ) {
        b.remove( c )
      } )
    };

    function mf( a ) {
      this.h = a
    }
    F( mf, lf );
    m = mf.prototype;
    m.isAvailable = function () {
      if ( !this.h ) return !1;
      try {
        return this.h.setItem( "__sak", "1" ), this.h.removeItem( "__sak" ), !0
      } catch ( a ) {
        return !1
      }
    };
    m.set = function ( a, b ) {
      try {
        this.h.setItem( a, b )
      } catch ( c ) {
        if ( 0 == this.h.length ) throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
      }
    };
    m.get = function ( a ) {
      a = this.h.getItem( a );
      if ( "string" !== typeof a && null !== a ) throw "Storage mechanism: Invalid value was encountered";
      return a
    };
    m.remove = function ( a ) {
      this.h.removeItem( a )
    };
    m.L = function ( a ) {
      var b = 0,
        c = this.h,
        d = new Vd;
      d.next = function () {
        if ( b >= c.length ) throw Ud;
        var e = c.key( b++ );
        if ( a ) return e;
        e = c.getItem( e );
        if ( "string" !== typeof e ) throw "Storage mechanism: Invalid value was encountered";
        return e
      };
      return d
    };
    m.clear = function () {
      this.h.clear()
    };
    m.key = function ( a ) {
      return this.h.key( a )
    };

    function nf() {
      var a = null;
      try {
        a = window.localStorage || null
      } catch ( b ) {}
      this.h = a
    }
    F( nf, mf );

    function of ( a, b ) {
      this.i = a;
      this.h = null;
      if ( fc && !( 9 <= Number( sc ) ) ) {
        pf || ( pf = new Zd );
        this.h = pf.get( a );
        this.h || ( b ? this.h = document.getElementById( b ) : ( this.h = document.createElement( "userdata" ), this.h.addBehavior( "#default#userData" ), document.body.appendChild( this.h ) ), pf.set( a, this.h ) );
        try {
          this.h.load( this.i )
        } catch ( c ) {
          this.h = null
        }
      }
    }
    F( of , lf );
    var qf = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
      },
      pf = null;

    function rf( a ) {
      return "_" + encodeURIComponent( a ).replace( /[.!~*'()%]/g, function ( b ) {
        return qf[ b ]
      } )
    }
    m = of .prototype;
    m.isAvailable = function () {
      return !!this.h
    };
    m.set = function ( a, b ) {
      this.h.setAttribute( rf( a ), b );
      sf( this )
    };
    m.get = function ( a ) {
      a = this.h.getAttribute( rf( a ) );
      if ( "string" !== typeof a && null !== a ) throw "Storage mechanism: Invalid value was encountered";
      return a
    };
    m.remove = function ( a ) {
      this.h.removeAttribute( rf( a ) );
      sf( this )
    };
    m.L = function ( a ) {
      var b = 0,
        c = this.h.XMLDocument.documentElement.attributes,
        d = new Vd;
      d.next = function () {
        if ( b >= c.length ) throw Ud;
        var e = c[ b++ ];
        if ( a ) return decodeURIComponent( e.nodeName.replace( /\./g, "%" ) ).substr( 1 );
        e = e.nodeValue;
        if ( "string" !== typeof e ) throw "Storage mechanism: Invalid value was encountered";
        return e
      };
      return d
    };
    m.clear = function () {
      for ( var a = this.h.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b-- ) a.removeAttribute( a.attributes[ b - 1 ].nodeName );
      sf( this )
    };

    function sf( a ) {
      try {
        a.h.save( a.i )
      } catch ( b ) {
        throw "Storage mechanism: Quota exceeded";
      }
    };

    function tf( a, b ) {
      this.i = a;
      this.h = b + "::"
    }
    F( tf, lf );
    tf.prototype.set = function ( a, b ) {
      this.i.set( this.h + a, b )
    };
    tf.prototype.get = function ( a ) {
      return this.i.get( this.h + a )
    };
    tf.prototype.remove = function ( a ) {
      this.i.remove( this.h + a )
    };
    tf.prototype.L = function ( a ) {
      var b = this.i.L( !0 ),
        c = this,
        d = new Vd;
      d.next = function () {
        for ( var e = b.next(); e.substr( 0, c.h.length ) != c.h; ) e = b.next();
        return a ? e.substr( c.h.length ) : c.i.get( e )
      };
      return d
    };

    function uf( a, b ) {
      1 < b.length ? a[ b[ 0 ] ] = b[ 1 ] : 1 === b.length && Object.assign( a, b[ 0 ] )
    };
    var vf = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    x( "yt.config_", vf, void 0 );

    function O( a ) {
      uf( vf, arguments )
    }

    function H( a, b ) {
      return a in vf ? vf[ a ] : b
    };
    var wf = [];

    function xf( a ) {
      wf.forEach( function ( b ) {
        return b( a )
      } )
    }

    function yf( a ) {
      return a && window.yterr ? function () {
        try {
          return a.apply( this, arguments )
        } catch ( b ) {
          zf( b ), xf( b )
        }
      } : a
    }

    function zf( a ) {
      var b = A( "yt.logging.errors.log" );
      b ? b( a, "ERROR", void 0, void 0, void 0 ) : ( b = H( "ERRORS", [] ), b.push( [ a, "ERROR", void 0, void 0, void 0 ] ), O( "ERRORS", b ) )
    }

    function Af( a ) {
      var b = A( "yt.logging.errors.log" );
      b ? b( a, "WARNING", void 0, void 0, void 0 ) : ( b = H( "ERRORS", [] ), b.push( [ a, "WARNING", void 0, void 0, void 0 ] ), O( "ERRORS", b ) )
    };
    var Bf = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    x( "yt.msgs_", Bf, void 0 );

    function Cf( a ) {
      uf( Bf, arguments )
    };

    function P( a ) {
      a = Df( a );
      return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function Ef( a, b ) {
      var c = Df( a );
      return void 0 === c && void 0 !== b ? b : Number( c || 0 )
    }

    function Df( a ) {
      var b = H( "EXPERIMENTS_FORCED_FLAGS", {} );
      return void 0 !== b[ a ] ? b[ a ] : H( "EXPERIMENT_FLAGS", {} )[ a ]
    };
    var Ff = 0;
    x( "ytDomDomGetNextId", A( "ytDomDomGetNextId" ) || function () {
      return ++Ff
    }, void 0 );
    var Gf = {
      stopImmediatePropagation: 1,
      stopPropagation: 1,
      preventMouseEvent: 1,
      preventManipulation: 1,
      preventDefault: 1,
      layerX: 1,
      layerY: 1,
      screenX: 1,
      screenY: 1,
      scale: 1,
      rotation: 1,
      webkitMovementX: 1,
      webkitMovementY: 1
    };

    function Hf( a ) {
      this.type = "";
      this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
      this.clientY = this.clientX = 0;
      this.changedTouches = this.touches = null;
      try {
        if ( a = a || window.event ) {
          this.event = a;
          for ( var b in a ) b in Gf || ( this[ b ] = a[ b ] );
          var c = a.target || a.srcElement;
          c && 3 == c.nodeType && ( c = c.parentNode );
          this.target = c;
          var d = a.relatedTarget;
          if ( d ) try {
            d = d.nodeName ? d : null
          } catch ( e ) {
            d = null
          } else "mouseover" ==
            this.type ? d = a.fromElement : "mouseout" == this.type && ( d = a.toElement );
          this.relatedTarget = d;
          this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
          this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
          this.keyCode = a.keyCode ? a.keyCode : a.which;
          this.charCode = a.charCode || ( "keypress" == this.type ? this.keyCode : 0 );
          this.altKey = a.altKey;
          this.ctrlKey = a.ctrlKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.h = a.pageX;
          this.i = a.pageY
        }
      } catch ( e ) {}
    }

    function If( a ) {
      if ( document.body && document.documentElement ) {
        var b = document.body.scrollTop + document.documentElement.scrollTop;
        a.h = a.clientX + ( document.body.scrollLeft + document.documentElement.scrollLeft );
        a.i = a.clientY + b
      }
    }
    Hf.prototype.preventDefault = function () {
      this.event && ( this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault() )
    };
    Hf.prototype.stopPropagation = function () {
      this.event && ( this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation() )
    };
    Hf.prototype.stopImmediatePropagation = function () {
      this.event && ( this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation() )
    };
    var hb = w.ytEventsEventsListeners || {};
    x( "ytEventsEventsListeners", hb, void 0 );
    var Jf = w.ytEventsEventsCounter || {
      count: 0
    };
    x( "ytEventsEventsCounter", Jf, void 0 );

    function Kf( a, b, c, d ) {
      d = void 0 === d ? {} : d;
      a.addEventListener && ( "mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && ( b = "MozMousePixelScroll" ) : b = "mouseout" : b = "mouseover" );
      return gb( function ( e ) {
        var f = "boolean" === typeof e[ 4 ] && e[ 4 ] == !!d,
          g = B( e[ 4 ] ) && B( d ) && lb( e[ 4 ], d );
        return !!e.length && e[ 0 ] == a && e[ 1 ] == b && e[ 2 ] == c && ( f || g )
      } )
    }
    var Lf = Xa( function () {
      var a = !1;
      try {
        var b = Object.defineProperty( {}, "capture", {
          get: function () {
            a = !0
          }
        } );
        window.addEventListener( "test", null, b )
      } catch ( c ) {}
      return a
    } );

    function Mf( a, b, c, d ) {
      d = void 0 === d ? {} : d;
      if ( !a || !a.addEventListener && !a.attachEvent ) return "";
      var e = Kf( a, b, c, d );
      if ( e ) return e;
      e = ++Jf.count + "";
      var f = !( "mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document );
      var g = f ? function ( h ) {
        h = new Hf( h );
        if ( !Jc( h.relatedTarget, function ( k ) {
            return k == a
          } ) ) return h.currentTarget = a, h.type = b, c.call( a, h )
      } : function ( h ) {
        h = new Hf( h );
        h.currentTarget = a;
        return c.call( a, h )
      };
      g = yf( g );
      a.addEventListener ? ( "mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && ( b = "MozMousePixelScroll" ), Lf() || "boolean" === typeof d ? a.addEventListener( b, g, d ) : a.addEventListener( b, g, !!d.capture ) ) : a.attachEvent( "on" + b, g );
      hb[ e ] = [ a, b, c, g, d ];
      return e
    }

    function Nf( a ) {
      a && ( "string" == typeof a && ( a = [ a ] ), G( a, function ( b ) {
        if ( b in hb ) {
          var c = hb[ b ],
            d = c[ 0 ],
            e = c[ 1 ],
            f = c[ 3 ];
          c = c[ 4 ];
          d.removeEventListener ? Lf() || "boolean" === typeof c ? d.removeEventListener( e, f, c ) : d.removeEventListener( e, f, !!c.capture ) : d.detachEvent && d.detachEvent( "on" + e, f );
          delete hb[ b ]
        }
      } ) )
    };
    var Of = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function () {
      return window.performance.timing.navigationStart + window.performance.now()
    } : function () {
      return ( new Date ).getTime()
    };

    function Q( a, b ) {
      "function" === typeof a && ( a = yf( a ) );
      return window.setTimeout( a, b )
    }

    function Pf( a ) {
      window.clearTimeout( a )
    };

    function Qf( a ) {
      this.B = a;
      this.h = null;
      this.m = 0;
      this.u = null;
      this.o = 0;
      this.j = [];
      for ( a = 0; 4 > a; a++ ) this.j.push( 0 );
      this.l = 0;
      this.I = Mf( window, "mousemove", C( this.J, this ) );
      a = C( this.G, this );
      "function" === typeof a && ( a = yf( a ) );
      this.K = window.setInterval( a, 25 )
    }
    F( Qf, L );
    Qf.prototype.J = function ( a ) {
      void 0 === a.h && If( a );
      var b = a.h;
      void 0 === a.i && If( a );
      this.h = new Bc( b, a.i )
    };
    Qf.prototype.G = function () {
      if ( this.h ) {
        var a = Of();
        if ( 0 != this.m ) {
          var b = this.u,
            c = this.h,
            d = b.x - c.x;
          b = b.y - c.y;
          d = Math.sqrt( d * d + b * b ) / ( a - this.m );
          this.j[ this.l ] = .5 < Math.abs( ( d - this.o ) / this.o ) ? 1 : 0;
          for ( c = b = 0; 4 > c; c++ ) b += this.j[ c ] || 0;
          3 <= b && this.B();
          this.o = d
        }
        this.m = a;
        this.u = this.h;
        this.l = ( this.l + 1 ) % 4
      }
    };
    Qf.prototype.A = function () {
      window.clearInterval( this.K );
      Nf( this.I )
    };

    function Rf() {}

    function Sf( a, b ) {
      return Tf( a, 1, b )
    };

    function Uf() {
      Rf.apply( this, arguments )
    }
    v( Uf, Rf );

    function Tf( a, b, c ) {
      void 0 !== c && Number.isNaN( Number( c ) ) && ( c = void 0 );
      var d = A( "yt.scheduler.instance.addJob" );
      return d ? d( a, b, c ) : void 0 === c ? ( a(), NaN ) : Q( a, c || 0 )
    }

    function Vf( a ) {
      if ( void 0 === a || !Number.isNaN( Number( a ) ) ) {
        var b = A( "yt.scheduler.instance.cancelJob" );
        b ? b( a ) : Pf( a )
      }
    }
    Uf.prototype.start = function () {
      var a = A( "yt.scheduler.instance.start" );
      a && a()
    };
    Uf.prototype.pause = function () {
      var a = A( "yt.scheduler.instance.pause" );
      a && a()
    };
    Ka( Uf );
    Uf.getInstance();
    var Wf = {};

    function Xf( a ) {
      var b = void 0 === a ? {} : a;
      a = void 0 === b.Qa ? !0 : b.Qa;
      b = void 0 === b.gb ? !1 : b.gb;
      if ( null == A( "_lact", window ) ) {
        var c = parseInt( H( "LACT" ), 10 );
        c = isFinite( c ) ? E() - Math.max( c, 0 ) : -1;
        x( "_lact", c, window );
        x( "_fact", c, window ); - 1 == c && Yf();
        Mf( document, "keydown", Yf );
        Mf( document, "keyup", Yf );
        Mf( document, "mousedown", Yf );
        Mf( document, "mouseup", Yf );
        a && ( b ? Mf( window, "touchmove", function () {
          Zf( "touchmove", 200 )
        }, {
          passive: !0
        } ) : ( Mf( window, "resize", function () {
          Zf( "resize", 200 )
        } ), Mf( window, "scroll", function () {
          Zf( "scroll", 200 )
        } ) ) );
        new Qf( function () {
          Zf( "mouse", 100 )
        } );
        Mf( document, "touchstart", Yf, {
          passive: !0
        } );
        Mf( document, "touchend", Yf, {
          passive: !0
        } )
      }
    }

    function Zf( a, b ) {
      Wf[ a ] || ( Wf[ a ] = !0, Sf( function () {
        Yf();
        Wf[ a ] = !1
      }, b ) )
    }

    function Yf() {
      null == A( "_lact", window ) && Xf();
      var a = E();
      x( "_lact", a, window ); - 1 == A( "_fact", window ) && x( "_fact", a, window );
      ( a = A( "ytglobal.ytUtilActivityCallback_" ) ) && a()
    }

    function $f() {
      var a = A( "_lact", window );
      return null == a ? -1 : Math.max( E() - a, 0 )
    };

    function ag() {
      var a = bg;
      A( "yt.ads.biscotti.getId_" ) || x( "yt.ads.biscotti.getId_", a, void 0 )
    }

    function cg( a ) {
      x( "yt.ads.biscotti.lastId_", a, void 0 )
    };
    var dg = /^[\w.]*$/,
      eg = {
        q: !0,
        search_query: !0
      };

    function fg( a, b ) {
      for ( var c = a.split( b ), d = {}, e = 0, f = c.length; e < f; e++ ) {
        var g = c[ e ].split( "=" );
        if ( 1 == g.length && g[ 0 ] || 2 == g.length ) try {
          var h = gg( g[ 0 ] || "" ),
            k = gg( g[ 1 ] || "" );
          h in d ? Array.isArray( d[ h ] ) ? eb( d[ h ], k ) : d[ h ] = [ d[ h ], k ] : d[ h ] = k
        } catch ( q ) {
          var l = q,
            n = g[ 0 ],
            p = String( fg );
          l.args = [ {
            key: n,
            value: g[ 1 ],
            query: a,
            method: hg == p ? "unchanged" : p
          } ];
          eg.hasOwnProperty( n ) || Af( l )
        }
      }
      return d
    }
    var hg = String( fg );

    function ig( a ) {
      var b = [];
      fb( a, function ( c, d ) {
        var e = encodeURIComponent( String( d ) ),
          f;
        Array.isArray( c ) ? f = c : f = [ c ];
        G( f, function ( g ) {
          "" == g ? b.push( e ) : b.push( e + "=" + encodeURIComponent( String( g ) ) )
        } )
      } );
      return b.join( "&" )
    }

    function jg( a ) {
      "?" == a.charAt( 0 ) && ( a = a.substr( 1 ) );
      return fg( a, "&" )
    }

    function kg( a, b, c ) {
      var d = a.split( "#", 2 );
      a = d[ 0 ];
      d = 1 < d.length ? "#" + d[ 1 ] : "";
      var e = a.split( "?", 2 );
      a = e[ 0 ];
      e = jg( e[ 1 ] || "" );
      for ( var f in b ) !c && null !== e && f in e || ( e[ f ] = b[ f ] );
      return $b( a, e ) + d
    }

    function gg( a ) {
      return a && a.match( dg ) ? a : decodeURIComponent( a.replace( /\+/g, " " ) )
    };

    function lg( a ) {
      var b = mg;
      a = void 0 === a ? A( "yt.ads.biscotti.lastId_" ) || "" : a;
      var c = Object,
        d = c.assign,
        e = {};
      e.dt = kd;
      e.flash = "0";
      a: {
        try {
          var f = b.h.top.location.href
        } catch ( da ) {
          f = 2;
          break a
        }
        f = f ? f === b.i.location.href ? 0 : 1 : 2
      }
      e = ( e.frm = f, e );
      e.u_tz = -( new Date ).getTimezoneOffset();
      var g = void 0 === g ? K : g;
      try {
        var h = g.history.length
      } catch ( da ) {
        h = 0
      }
      e.u_his = h;
      e.u_java = !!K.navigator && "unknown" !== typeof K.navigator.javaEnabled && !!K.navigator.javaEnabled && K.navigator.javaEnabled();
      K.screen && ( e.u_h = K.screen.height, e.u_w = K.screen.width,
        e.u_ah = K.screen.availHeight, e.u_aw = K.screen.availWidth, e.u_cd = K.screen.colorDepth );
      K.navigator && K.navigator.plugins && ( e.u_nplug = K.navigator.plugins.length );
      K.navigator && K.navigator.mimeTypes && ( e.u_nmime = K.navigator.mimeTypes.length );
      h = b.h;
      try {
        var k = h.screenX;
        var l = h.screenY
      } catch ( da ) {}
      try {
        var n = h.outerWidth;
        var p = h.outerHeight
      } catch ( da ) {}
      try {
        var q = h.innerWidth;
        var r = h.innerHeight
      } catch ( da ) {}
      k = [ h.screenLeft, h.screenTop, k, l, h.screen ? h.screen.availWidth : void 0, h.screen ? h.screen.availTop : void 0, n, p, q,
        r
      ];
      l = b.h.top;
      try {
        var y = ( l || window ).document,
          z = "CSS1Compat" == y.compatMode ? y.documentElement : y.body;
        var D = ( new Cc( z.clientWidth, z.clientHeight ) ).round()
      } catch ( da ) {
        D = new Cc( -12245933, -12245933 )
      }
      y = D;
      D = {};
      z = new ud;
      w.SVGElement && w.document.createElementNS && z.set( 0 );
      l = Oc();
      l[ "allow-top-navigation-by-user-activation" ] && z.set( 1 );
      l[ "allow-popups-to-escape-sandbox" ] && z.set( 2 );
      w.crypto && w.crypto.subtle && z.set( 3 );
      w.TextDecoder && w.TextEncoder && z.set( 4 );
      z = vd( z );
      D.bc = z;
      D.bih = y.height;
      D.biw = y.width;
      D.brdim = k.join();
      b = b.i;
      b = ( D.vis = {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      } [ b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || "" ] || 0, D.wgl = !!K.WebGLRenderingContext, D );
      c = d.call( c, e, b );
      c.ca_type = "image";
      a && ( c.bid = a );
      return c
    }
    var mg = new function () {
      var a = window.document;
      this.h = window;
      this.i = a
    };
    x( "yt.ads_.signals_.getAdSignalsString", function ( a ) {
      return ig( lg( a ) )
    }, void 0 );
    var ng = "XMLHttpRequest" in w ? function () {
      return new XMLHttpRequest
    } : null;

    function og() {
      if ( !ng ) return null;
      var a = ng();
      return "open" in a ? a : null
    }

    function pg( a ) {
      switch ( a && "status" in a ? a.status : -1 ) {
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 205:
        case 206:
        case 304:
          return !0;
        default:
          return !1
      }
    };
    var qg = {
        Authorization: "AUTHORIZATION",
        "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
        "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
        "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
        "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
        "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
        "X-YouTube-Device": "DEVICE",
        "X-Youtube-Identity-Token": "ID_TOKEN",
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
      },
      rg = "app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split( " " ),
      sg = !1;

    function tg( a, b ) {
      b = void 0 === b ? {} : b;
      if ( !c ) var c = window.location.href;
      var d = a.match( Vb )[ 1 ] || null,
        e = Xb( a );
      d && e ? ( d = c, c = a.match( Vb ), d = d.match( Vb ), c = c[ 3 ] == d[ 3 ] && c[ 1 ] == d[ 1 ] && c[ 4 ] == d[ 4 ] ) : c = e ? Xb( c ) == e && ( Number( c.match( Vb )[ 4 ] || null ) || null ) == ( Number( a.match( Vb )[ 4 ] || null ) || null ) : !0;
      d = P( "web_ajax_ignore_global_headers_if_set" );
      for ( var f in qg ) e = H( qg[ f ] ), !e || !c && Xb( a ) || d && void 0 !== b[ f ] || ( b[ f ] = e );
      if ( c || !Xb( a ) ) b[ "X-YouTube-Utc-Offset" ] = String( -( new Date ).getTimezoneOffset() );
      ( c || !Xb( a ) ) && ( f = "undefined" != typeof Intl ?
        ( new Intl.DateTimeFormat ).resolvedOptions().timeZone : null ) && ( b[ "X-YouTube-Time-Zone" ] = f );
      if ( c || !Xb( a ) ) b[ "X-YouTube-Ad-Signals" ] = ig( lg( void 0 ) );
      return b
    }

    function ug( a ) {
      var b = window.location.search,
        c = Xb( a ),
        d = Wb( a.match( Vb )[ 5 ] || null );
      d = ( c = c && ( c.endsWith( "youtube.com" ) || c.endsWith( "youtube-nocookie.com" ) ) ) && d && d.startsWith( "/api/" );
      if ( !c || d ) return a;
      var e = jg( b ),
        f = {};
      G( rg, function ( g ) {
        e[ g ] && ( f[ g ] = e[ g ] )
      } );
      return kg( a, f || {}, !1 )
    }

    function vg( a, b ) {
      if ( window.fetch && "XML" != b.format ) {
        var c = {
          method: b.method || "GET",
          credentials: "same-origin"
        };
        b.headers && ( c.headers = b.headers );
        a = wg( a, b );
        var d = xg( a, b );
        d && ( c.body = d );
        b.withCredentials && ( c.credentials = "include" );
        var e = b.context || w,
          f = !1,
          g;
        fetch( a, c ).then( function ( h ) {
          if ( !f ) {
            f = !0;
            g && Pf( g );
            var k = h.ok,
              l = function ( n ) {
                n = n || {};
                k ? b.onSuccess && b.onSuccess.call( e, n, h ) : b.onError && b.onError.call( e, n, h );
                b.onFinish && b.onFinish.call( e, n, h )
              };
            "JSON" == ( b.format || "JSON" ) && ( k || 400 <= h.status && 500 > h.status ) ? h.json().then( l, function () {
              l( null )
            } ): l( null )
          }
        } )[ "catch" ]( function () {
          b.onError && b.onError.call( e, {}, {} )
        } );
        b.onFetchTimeout && 0 < b.timeout && ( g = Q( function () {
          f || ( f = !0, Pf( g ), b.onFetchTimeout.call( b.context || w ) )
        }, b.timeout ) )
      } else yg( a, b )
    }

    function yg( a, b ) {
      var c = b.format || "JSON";
      a = wg( a, b );
      var d = xg( a, b ),
        e = !1,
        f = zg( a, function ( k ) {
            if ( !e ) {
              e = !0;
              h && Pf( h );
              var l = pg( k ),
                n = null,
                p = 400 <= k.status && 500 > k.status,
                q = 500 <= k.status && 600 > k.status;
              if ( l || p || q ) n = Ag( a, c, k, b.convertToSafeHtml );
              if ( l ) a: if ( k && 204 == k.status ) l = !0;
                else {
                  switch ( c ) {
                    case "XML":
                      l = 0 == parseInt( n && n.return_code, 10 );
                      break a;
                    case "RAW":
                      l = !0;
                      break a
                  }
                  l = !!n
                } n = n || {};
              p = b.context || w;
              l ? b.onSuccess && b.onSuccess.call( p, k, n ) : b.onError && b.onError.call( p, k, n );
              b.onFinish && b.onFinish.call( p, k, n )
            }
          }, b.method,
          d, b.headers, b.responseType, b.withCredentials );
      if ( b.onTimeout && 0 < b.timeout ) {
        var g = b.onTimeout;
        var h = Q( function () {
          e || ( e = !0, f.abort(), Pf( h ), g.call( b.context || w, f ) )
        }, b.timeout )
      }
      return f
    }

    function wg( a, b ) {
      b.includeDomain && ( a = document.location.protocol + "//" + document.location.hostname + ( document.location.port ? ":" + document.location.port : "" ) + a );
      var c = H( "XSRF_FIELD_NAME", void 0 ),
        d = b.urlParams;
      d && ( d[ c ] && delete d[ c ], a = kg( a, d || {}, !0 ) );
      return a
    }

    function xg( a, b ) {
      var c = H( "XSRF_FIELD_NAME", void 0 ),
        d = H( "XSRF_TOKEN", void 0 ),
        e = b.postBody || "",
        f = b.postParams,
        g = H( "XSRF_FIELD_NAME", void 0 ),
        h;
      b.headers && ( h = b.headers[ "Content-Type" ] );
      b.excludeXsrf || Xb( a ) && !b.withCredentials && Xb( a ) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[ g ] || ( f || ( f = {} ), f[ c ] = d );
      f && "string" === typeof e && ( e = jg( e ), pb( e, f ), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify( e ) : Zb( e ) );
      f = e || f && !ib( f );
      !sg && f &&
        "POST" != b.method && ( sg = !0, zf( Error( "AJAX request with postData should use POST" ) ) );
      return e
    }

    function Ag( a, b, c, d ) {
      var e = null;
      switch ( b ) {
        case "JSON":
          try {
            var f = c.responseText
          } catch ( g ) {
            throw d = Error( "Error reading responseText" ), d.params = a, Af( d ), g;
          }
          a = c.getResponseHeader( "Content-Type" ) || "";
          f && 0 <= a.indexOf( "json" ) && ( ")]}'\n" === f.substring( 0, 5 ) && ( f = f.substring( 5 ) ), e = JSON.parse( f ) );
          break;
        case "XML":
          if ( a = ( a = c.responseXML ) ? Bg( a ) : null ) e = {}, G( a.getElementsByTagName( "*" ), function ( g ) {
            e[ g.tagName ] = Cg( g )
          } )
      }
      d && Dg( e );
      return e
    }

    function Dg( a ) {
      if ( B( a ) )
        for ( var b in a ) {
          var c;
          ( c = "html_content" == b ) || ( c = b.length - 5, c = 0 <= c && b.indexOf( "_html", c ) == c );
          if ( c ) {
            c = b;
            var d = Qb( a[ b ], null );
            a[ c ] = d
          } else Dg( a[ b ] )
        }
    }

    function Bg( a ) {
      return a ? ( a = ( "responseXML" in a ? a.responseXML : a ).getElementsByTagName( "root" ) ) && 0 < a.length ? a[ 0 ] : null : null
    }

    function Cg( a ) {
      var b = "";
      G( a.childNodes, function ( c ) {
        b += c.nodeValue
      } );
      return b
    }

    function zg( a, b, c, d, e, f, g ) {
      function h() {
        4 == ( k && "readyState" in k ? k.readyState : 0 ) && b && yf( b )( k )
      }
      c = void 0 === c ? "GET" : c;
      d = void 0 === d ? "" : d;
      var k = og();
      if ( !k ) return null;
      "onloadend" in k ? k.addEventListener( "loadend", h, !1 ) : k.onreadystatechange = h;
      P( "debug_forward_web_query_parameters" ) && ( a = ug( a ) );
      k.open( c, a, !0 );
      f && ( k.responseType = f );
      g && ( k.withCredentials = !0 );
      c = "POST" == c && ( void 0 === window.FormData || !( d instanceof FormData ) );
      if ( e = tg( a, e ) )
        for ( var l in e ) k.setRequestHeader( l, e[ l ] ), "content-type" == l.toLowerCase() && ( c = !1 );
      c && k.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
      k.send( d );
      return k
    };
    var Eg = uc || vc;

    function Fg( a ) {
      var b = Lb;
      return b ? 0 <= b.toLowerCase().indexOf( a ) : !1
    };
    var Gg = {},
      Hg = 0;

    function Ig( a, b, c, d, e ) {
      e = void 0 === e ? "" : e;
      if ( a )
        if ( c && !Fg( "cobalt" ) ) {
          if ( a ) {
            a instanceof I || ( a = "object" == typeof a && a.W ? a.V() : String( a ), Ib.test( a ) ? a = new I( a, Eb ) : ( a = String( a ), a = a.replace( /(%0A|%0D)/g, "" ), a = ( b = a.match( Hb ) ) && Gb.test( b[ 1 ] ) ? new I( a, Eb ) : null ) );
            a = Fb( a || Kb );
            if ( "about:invalid#zClosurez" === a || a.startsWith( "data" ) ) a = "";
            else {
              if ( !( a instanceof Ob ) ) {
                b = "object" == typeof a;
                var f = null;
                b && a.qa && ( f = a.ma() );
                a = Qb( wb( b && a.W ? a.V() : String( a ) ), f )
              }
              a instanceof Ob && a.constructor === Ob ? a = a.h : ( La( a ), a = "type_error:SafeHtml" );
              a = encodeURIComponent( String( Fe( a.toString() ) ) )
            }
            /^[\s\xa0]*$/.test( a ) || ( a = Gc( "IFRAME", {
              src: 'javascript:"<body> 


                <
                a href = "https://github.com/bgoonz/DS-ALGO-OFFICIAL"
              class = "github-corner"
              aria - label = "View source on Github" > < svg width = "80"
              height = "80"
              viewBox = "0 0 250 250"
              style = "z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
              aria - hidden = "true" >
              <
              path d = "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" > < /path> <
              path
              d = "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill = "currentColor"
              style = "transform-origin: 130px 106px;"
              class = "octo-arm" >
              <
              /path> <
              path
              d = "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill = "currentColor"
              class = "octo-body" > < /path> < /
              svg > < /a >



              <
              img src = \\"" + '+a+' + "\\" > < /body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)zg(a,b,"POST",e,d);else if(H("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)zg(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk
              "))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("
              ri ",
              c ) ) && c < l; ) {
              var n = a.charCodeAt( c - 1 );
              if ( 38 == n || 63 == n ) {
                var p = a.charCodeAt( c + 2 );
                if ( !p || 61 == p || 38 == p || 35 == p ) {
                  var q = c;
                  break d
                }
              }
              c += 3
            }
            q = -1
          }
          if ( 0 > q ) var r = null;
          else {
            var y = a.indexOf( "&", q );
            if ( 0 > y || y > l ) y = l;
            q += 3;
            r = decodeURIComponent( a.substr( q, y - q ).replace( /\+/g, " " ) )
          }
          k = "1" !== r
        } f = !k;
      break b
    }
  } catch ( z ) {}
  f = !1
}
f ? Jg( a ) ? ( b && b(), f = !0 ) : f = !1 : f = !1;
f || Kg( a, b )
}
}

function Lg( a ) {
  var b = void 0 === b ? "" : b;
  Jg( a, b ) || Ig( a, void 0, void 0, void 0, b )
}

function Jg( a, b ) {
  try {
    if ( window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon( a, void 0 === b ? "" : b ) ) return !0
  } catch ( c ) {}
  return !1
}

function Kg( a, b ) {
  var c = new Image,
    d = "" + Hg++;
  Gg[ d ] = c;
  c.onload = c.onerror = function () {
    b && Gg[ d ] && b();
    delete Gg[ d ]
  };
  c.src = a
};
var Mg = w.ytPubsubPubsubInstance || new N,
  Ng = w.ytPubsubPubsubSubscribedKeys || {},
  Og = w.ytPubsubPubsubTopicToKeys || {},
  Pg = w.ytPubsubPubsubIsSynchronous || {};

function Qg( a, b ) {
  var c = Rg();
  if ( c && b ) {
    var d = c.subscribe( a, function () {
      var e = arguments;
      var f = function () {
        Ng[ d ] && b.apply && "function" == typeof b.apply && b.apply( window, e )
      };
      try {
        Pg[ a ] ? f() : Q( f, 0 )
      } catch ( g ) {
        zf( g )
      }
    }, void 0 );
    Ng[ d ] = !0;
    Og[ a ] || ( Og[ a ] = [] );
    Og[ a ].push( d );
    return d
  }
  return 0
}

function Sg( a ) {
  var b = Rg();
  b && ( "number" === typeof a ? a = [ a ] : "string" === typeof a && ( a = [ parseInt( a, 10 ) ] ), G( a, function ( c ) {
    b.unsubscribeByKey( c );
    delete Ng[ c ]
  } ) )
}

function Tg( a, b ) {
  var c = Rg();
  c && c.publish.apply( c, arguments )
}

function Ug( a ) {
  var b = Rg();
  if ( b )
    if ( b.clear( a ), a ) Vg( a );
    else
      for ( var c in Og ) Vg( c )
}

function Rg() {
  return w.ytPubsubPubsubInstance
}

function Vg( a ) {
  Og[ a ] && ( a = Og[ a ], G( a, function ( b ) {
    Ng[ b ] && delete Ng[ b ]
  } ), a.length = 0 )
}
N.prototype.subscribe = N.prototype.subscribe;
N.prototype.unsubscribeByKey = N.prototype.X;
N.prototype.publish = N.prototype.O;
N.prototype.clear = N.prototype.clear;
x( "ytPubsubPubsubInstance", Mg, void 0 );
x( "ytPubsubPubsubTopicToKeys", Og, void 0 );
x( "ytPubsubPubsubIsSynchronous", Pg, void 0 );
x( "ytPubsubPubsubSubscribedKeys", Ng, void 0 );
var Wg = window,
  R = Wg.ytcsi && Wg.ytcsi.now ? Wg.ytcsi.now : Wg.performance && Wg.performance.timing && Wg.performance.now && Wg.performance.timing.navigationStart ? function () {
    return Wg.performance.timing.navigationStart + Wg.performance.now()
  } : function () {
    return ( new Date ).getTime()
  };
var Xg = Ef( "initial_gel_batch_timeout", 1E3 ),
  Yg = Math.pow( 2, 16 ) - 1,
  Zg = null,
  $g = 0,
  ah = void 0,
  bh = 0,
  ch = 0,
  dh = 0,
  eh = !0,
  fh = w.ytLoggingTransportGELQueue_ || new Map;
x( "ytLoggingTransportGELQueue_", fh, void 0 );
var gh = w.ytLoggingTransportTokensToCttTargetIds_ || {};
x( "ytLoggingTransportTokensToCttTargetIds_", gh, void 0 );

function hh( a, b ) {
  if ( "log_event" === a.endpoint ) {
    var c = "";
    a.C && ( gh[ a.C.token ] = ih( a.C ), c = a.C.token );
    var d = fh.get( c ) || [];
    fh.set( c, d );
    d.push( a.payload );
    b && ( ah = new b );
    c = Ef( "web_logging_max_batch" ) || 100;
    var e = R();
    d.length >= c ? jh( {
      writeThenSend: !0
    } ) : 10 <= e - dh && ( kh(), dh = e )
  }
}

function lh( a, b ) {
  if ( "log_event" === a.endpoint ) {
    var c = "";
    a.C && ( gh[ a.C.token ] = ih( a.C ), c = a.C.token );
    var d = new Map;
    d.set( c, [ a.payload ] );
    b && ( ah = new b );
    return new M( function ( e ) {
      ah && ah.isReady() ? mh( d, e, {
        bypassNetworkless: !0
      } ) : e()
    } )
  }
}

function jh( a ) {
  a = void 0 === a ? {} : a;
  return new M( function ( b ) {
    Pf( bh );
    Pf( ch );
    ch = 0;
    ah && ah.isReady() ? ( mh( fh, b, a ), fh.clear() ) : ( kh(), b() )
  } )
}

function kh() {
  P( "web_gel_timeout_cap" ) && !ch && ( ch = Q( jh, 6E4 ) );
  Pf( bh );
  var a = H( "LOGGING_BATCH_TIMEOUT", Ef( "web_gel_debounce_ms", 1E4 ) );
  P( "shorten_initial_gel_batch_timeout" ) && eh && ( a = Xg );
  bh = Q( function () {
    jh( {
      writeThenSend: !0
    } )
  }, a )
}

function mh( a, b, c ) {
  var d = ah;
  c = void 0 === c ? {} : c;
  var e = Math.round( R() ),
    f = a.size;
  a = u( a );
  for ( var g = a.next(); !g.done; g = a.next() ) {
    var h = u( g.value );
    g = h.next().value;
    var k = h.next().value;
    h = nb( {
      context: nh( d.h || oh() )
    } );
    h.events = k;
    ( k = gh[ g ] ) && ph( h, g, k );
    delete gh[ g ];
    qh( h, e );
    P( "send_beacon_before_gel" ) && window.navigator && window.navigator.sendBeacon && !c.writeThenSend && Lg( "/generate_204" );
    rh( d, "log_event", h, {
      retry: !0,
      onSuccess: function () {
        f--;
        f || b();
        $g = Math.round( R() - e )
      },
      onError: function () {
        f--;
        f || b()
      },
      Ca: c
    } );
    eh = !1
  }
}

function qh( a, b ) {
  a.requestTimeMs = String( b );
  P( "unsplit_gel_payloads_in_logs" ) && ( a.unsplitGelPayloadsInLogs = !0 );
  var c = H( "EVENT_ID", void 0 );
  if ( c ) {
    var d = H( "BATCH_CLIENT_COUNTER", void 0 ) || 0;
    d || ( d = Math.floor( Math.random() * Yg / 2 ) );
    d++;
    d > Yg && ( d = 1 );
    O( "BATCH_CLIENT_COUNTER", d );
    c = {
      serializedEventId: c,
      clientCounter: String( d )
    };
    a.serializedClientEventId = c;
    Zg && $g && P( "log_gel_rtt_web" ) && ( a.previousBatchInfo = {
      serializedClientEventId: Zg,
      roundtripMs: String( $g )
    } );
    Zg = c;
    $g = 0
  }
}

function ph( a, b, c ) {
  if ( c.videoId ) var d = "VIDEO";
  else if ( c.playlistId ) d = "PLAYLIST";
  else return;
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [ {
    token: b,
    scope: d
  } ]
}

function ih( a ) {
  var b = {};
  a.videoId ? b.videoId = a.videoId : a.playlistId && ( b.playlistId = a.playlistId );
  return b
};
var sh = w.ytLoggingGelSequenceIdObj_ || {};
x( "ytLoggingGelSequenceIdObj_", sh, void 0 );

function th( a, b, c, d ) {
  d = void 0 === d ? {} : d;
  var e = {};
  e.eventTimeMs = Math.round( d.timestamp || R() );
  e[ a ] = b;
  a = $f();
  e.context = {
    lastActivityMs: String( d.timestamp || !isFinite( a ) ? -1 : a )
  };
  P( "log_sequence_info_on_gel_web" ) && d.M && ( a = e.context, b = d.M, sh[ b ] = b in sh ? sh[ b ] + 1 : 0, a.sequence = {
    index: sh[ b ],
    groupKey: b
  }, d.La && delete sh[ d.M ] );
  ( d.Kk ? lh : hh )( {
    endpoint: "log_event",
    payload: e,
    C: d.C
  }, c )
};

function uh( a, b, c, d ) {
  jd.set( "" + a, b, {
    Aa: c,
    path: "/",
    domain: void 0 === d ? "youtube.com" : d,
    secure: !1
  } )
};
var S = A( "ytglobal.prefsUserPrefsPrefs_" ) || {};
x( "ytglobal.prefsUserPrefsPrefs_", S, void 0 );

function vh() {
  this.h = H( "ALT_PREF_COOKIE_NAME", "PREF" );
  this.i = H( "ALT_PREF_COOKIE_DOMAIN", "youtube.com" );
  var a = jd.get( "" + this.h, void 0 );
  if ( a ) {
    a = decodeURIComponent( a ).split( "&" );
    for ( var b = 0; b < a.length; b++ ) {
      var c = a[ b ].split( "=" ),
        d = c[ 0 ];
      ( c = c[ 1 ] ) && ( S[ d ] = c.toString() )
    }
  }
}
m = vh.prototype;
m.get = function ( a, b ) {
  wh( a );
  xh( a );
  var c = void 0 !== S[ a ] ? S[ a ].toString() : null;
  return null != c ? c : b ? b : ""
};
m.set = function ( a, b ) {
  wh( a );
  xh( a );
  if ( null == b ) throw Error( "ExpectedNotNull" );
  S[ a ] = b.toString()
};
m.remove = function ( a ) {
  wh( a );
  xh( a );
  delete S[ a ]
};
m.save = function () {
  var a = this.h,
    b = [],
    c;
  for ( c in S ) b.push( c + "=" + encodeURIComponent( String( S[ c ] ) ) );
  uh( a, b.join( "&" ), 63072E3, this.i )
};
m.clear = function () {
  for ( var a in S ) delete S[ a ]
};

function xh( a ) {
  if ( /^f([1-9][0-9]*)$/.test( a ) ) throw Error( "ExpectedRegexMatch: " + a );
}

function wh( a ) {
  if ( !/^\w+$/.test( a ) ) throw Error( "ExpectedRegexMismatch: " + a );
}

function yh( a ) {
  a = void 0 !== S[ a ] ? S[ a ].toString() : null;
  return null != a && /^[A-Fa-f0-9]+$/.test( a ) ? parseInt( a, 16 ) : null
}
Ka( vh );
var zh = {
  bluetooth: "CONN_DISCO",
  cellular: "CONN_CELLULAR_UNKNOWN",
  ethernet: "CONN_WIFI",
  none: "CONN_NONE",
  wifi: "CONN_WIFI",
  wimax: "CONN_CELLULAR_4G",
  other: "CONN_UNKNOWN",
  unknown: "CONN_UNKNOWN",
  "slow-2g": "CONN_CELLULAR_2G",
  "2g": "CONN_CELLULAR_2G",
  "3g": "CONN_CELLULAR_3G",
  "4g": "CONN_CELLULAR_4G"
};

function Ah() {
  return "INNERTUBE_API_KEY" in vf && "INNERTUBE_API_VERSION" in vf
}

function oh() {
  return {
    innertubeApiKey: H( "INNERTUBE_API_KEY", void 0 ),
    innertubeApiVersion: H( "INNERTUBE_API_VERSION", void 0 ),
    Ra: H( "INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO" ),
    Sa: H( "INNERTUBE_CONTEXT_CLIENT_NAME", "WEB" ),
    innertubeContextClientVersion: H( "INNERTUBE_CONTEXT_CLIENT_VERSION", void 0 ),
    Ua: H( "INNERTUBE_CONTEXT_HL", void 0 ),
    Ta: H( "INNERTUBE_CONTEXT_GL", void 0 ),
    Va: H( "INNERTUBE_HOST_OVERRIDE", void 0 ) || "",
    Xa: !!H( "INNERTUBE_USE_THIRD_PARTY_AUTH", !1 ),
    Wa: !!H( "INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
      !1 ),
    appInstallData: H( "SERIALIZED_CLIENT_CONFIG_DATA", void 0 )
  }
}

function nh( a ) {
  var b = {
      client: {
        hl: a.Ua,
        gl: a.Ta,
        clientName: a.Sa,
        clientVersion: a.innertubeContextClientVersion,
        configInfo: a.Ra
      }
    },
    c = window.devicePixelRatio;
  c && 1 != c && ( b.client.screenDensityFloat = String( c ) );
  c = H( "EXPERIMENTS_TOKEN", "" );
  "" !== c && ( b.client.experimentsToken = c );
  c = [];
  var d = H( "EXPERIMENTS_FORCED_FLAGS", {} );
  for ( e in d ) c.push( {
    key: e,
    value: String( d[ e ] )
  } );
  var e = H( "EXPERIMENT_FLAGS", {} );
  for ( var f in e ) f.startsWith( "force_" ) && void 0 === d[ f ] && c.push( {
    key: f,
    value: String( e[ f ] )
  } );
  0 < c.length && ( b.request = {
    internalExperimentFlags: c
  } );
  a.appInstallData && ( b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData );
  H( "DELEGATED_SESSION_ID" ) && !P( "pageid_as_header_web" ) && ( b.user = {
    onBehalfOfUser: H( "DELEGATED_SESSION_ID" )
  } );
  if ( P( "web_log_connection_in_gel" ) ) {
    a: {
      if ( f = ( a = w.navigator ) ? a.connection : void 0 ) {
        a = zh[ f.type || "unknown" ] || "CONN_UNKNOWN";
        f = zh[ f.effectiveType || "unknown" ] || "CONN_UNKNOWN";
        "CONN_CELLULAR_UNKNOWN" === a && "CONN_UNKNOWN" !== f && ( a = f );
        if ( "CONN_UNKNOWN" !== a ) break a;
        if ( "CONN_UNKNOWN" !== f ) {
          a =
            f;
          break a
        }
      }
      a = void 0
    }
    a && ( b.client.connectionType = a )
  }
  a = Object;
  f = a.assign;
  e = b.client;
  c = {};
  d = u( Object.entries( jg( H( "DEVICE", "" ) ) ) );
  for ( var g = d.next(); !g.done; g = d.next() ) {
    var h = u( g.value );
    g = h.next().value;
    h = h.next().value;
    "cbrand" === g ? c.deviceMake = h : "cmodel" === g ? c.deviceModel = h : "cbr" === g ? c.browserName = h : "cbrver" === g ? c.browserVersion = h : "cos" === g ? c.osName = h : "cosver" === g ? c.osVersion = h : "cplatform" === g && ( c.platform = h )
  }
  b.client = f.call( a, e, c );
  return b
}

function Bh( a, b, c ) {
  c = void 0 === c ? {} : c;
  var d = {
    "X-Goog-Visitor-Id": c.visitorData || H( "VISITOR_DATA", "" )
  };
  if ( b && b.includes( "www.youtube-nocookie.com" ) ) return d;
  ( b = c.zk || H( "AUTHORIZATION" ) ) || ( a ? b = "Bearer " + A( "gapi.auth.getToken" )().yk : b = td( [] ) );
  b && ( d.Authorization = b, d[ "X-Goog-AuthUser" ] = H( "SESSION_INDEX", 0 ), P( "pageid_as_header_web" ) && ( d[ "X-Goog-PageId" ] = H( "DELEGATED_SESSION_ID" ) ) );
  return d
};

function Ch( a ) {
  a = Object.assign( {}, a );
  delete a.Authorization;
  var b = td();
  if ( b ) {
    var c = new Ld;
    c.update( H( "INNERTUBE_API_KEY", void 0 ) );
    c.update( b );
    a.hash = zc( c.digest() )
  }
  return a
};

function Dh( a ) {
  var b = new nf;
  ( b = b.isAvailable() ? a ? new tf( b, a ) : b : null ) || ( a = new of ( a || "UserDataSharedStore" ), b = a.isAvailable() ? a : null );
  this.h = ( a = b ) ? new jf( a ) : null;
  this.i = document.domain || window.location.hostname
}
Dh.prototype.set = function ( a, b, c, d ) {
  c = c || 31104E3;
  this.remove( a );
  if ( this.h ) try {
    this.h.set( a, b, E() + 1E3 * c );
    return
  } catch ( f ) {}
  var e = "";
  if ( d ) try {
    e = escape( Fe( b ) )
  } catch ( f ) {
    return
  } else e = escape( b );
  uh( a, e, c, this.i )
};
Dh.prototype.get = function ( a, b ) {
  var c = void 0,
    d = !this.h;
  if ( !d ) try {
    c = this.h.get( a )
  } catch ( e ) {
    d = !0
  }
  if ( d && ( c = jd.get( "" + a, void 0 ) ) && ( c = unescape( c ), b ) ) try {
    c = JSON.parse( c )
  } catch ( e ) {
    this.remove( a ), c = void 0
  }
  return c
};
Dh.prototype.remove = function ( a ) {
  this.h && this.h.remove( a );
  var b = this.i;
  jd.remove( "" + a, "/", void 0 === b ? "youtube.com" : b )
};
var Eh;

function Fh() {
  Eh || ( Eh = new Dh( "yt.innertube" ) );
  return Eh
}

function Gh( a, b, c, d ) {
  if ( d ) return null;
  d = Fh().get( "nextId", !0 ) || 1;
  var e = Fh().get( "requests", !0 ) || {};
  e[ d ] = {
    method: a,
    request: b,
    authState: Ch( c ),
    requestTime: Math.round( R() )
  };
  Fh().set( "nextId", d + 1, 86400, !0 );
  Fh().set( "requests", e, 86400, !0 );
  return d
}

function Hh( a ) {
  var b = Fh().get( "requests", !0 ) || {};
  delete b[ a ];
  Fh().set( "requests", b, 86400, !0 )
}

function Ih( a ) {
  var b = Fh().get( "requests", !0 );
  if ( b ) {
    for ( var c in b ) {
      var d = b[ c ];
      if ( !( 6E4 > Math.round( R() ) - d.requestTime ) ) {
        var e = d.authState,
          f = Ch( Bh( !1 ) );
        lb( e, f ) && ( e = d.request, "requestTimeMs" in e && ( e.requestTimeMs = Math.round( R() ) ), rh( a, d.method, e, {} ) );
        delete b[ c ]
      }
    }
    Fh().set( "requests", b, 86400, !0 )
  }
};

function Jh( a, b ) {
  this.version = a;
  this.args = b
};

function Kh( a, b ) {
  this.topic = a;
  this.h = b
}
Kh.prototype.toString = function () {
  return this.topic
};
var Lh = A( "ytPubsub2Pubsub2Instance" ) || new N;
N.prototype.subscribe = N.prototype.subscribe;
N.prototype.unsubscribeByKey = N.prototype.X;
N.prototype.publish = N.prototype.O;
N.prototype.clear = N.prototype.clear;
x( "ytPubsub2Pubsub2Instance", Lh, void 0 );
var Mh = A( "ytPubsub2Pubsub2SubscribedKeys" ) || {};
x( "ytPubsub2Pubsub2SubscribedKeys", Mh, void 0 );
var Nh = A( "ytPubsub2Pubsub2TopicToKeys" ) || {};
x( "ytPubsub2Pubsub2TopicToKeys", Nh, void 0 );
var Oh = A( "ytPubsub2Pubsub2IsAsync" ) || {};
x( "ytPubsub2Pubsub2IsAsync", Oh, void 0 );
x( "ytPubsub2Pubsub2SkipSubKey", null, void 0 );

function Ph( a, b ) {
  var c = Qh();
  c && c.publish.call( c, a.toString(), a, b )
}

function Rh( a ) {
  var b = Sh,
    c = Qh();
  if ( !c ) return 0;
  var d = c.subscribe( b.toString(), function ( e, f ) {
    var g = A( "ytPubsub2Pubsub2SkipSubKey" );
    g && g == d || ( g = function () {
      if ( Mh[ d ] ) try {
        if ( f && b instanceof Kh && b != e ) try {
          var h = b.h,
            k = f;
          if ( !k.args || !k.version ) throw Error( "yt.pubsub2.Data.deserialize(): serializedData is incomplete." );
          try {
            if ( !h.N ) {
              var l = new h;
              h.N = l.version
            }
            var n = h.N
          } catch ( p ) {}
          if ( !n || k.version != n ) throw Error( "yt.pubsub2.Data.deserialize(): serializedData version is incompatible." );
          try {
            f = Reflect.construct( h,
              db( k.args ) )
          } catch ( p ) {
            throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
          }
        } catch ( p ) {
          throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
        }
        a.call( window, f )
      } catch ( p ) {
        zf( p )
      }
    }, Oh[ b.toString() ] ? A( "yt.scheduler.instance" ) ? Sf( g ) : Q( g, 0 ) : g() )
  } );
  Mh[ d ] = !0;
  Nh[ b.toString() ] || ( Nh[ b.toString() ] = [] );
  Nh[ b.toString() ].push( d );
  return d
}

function Th() {
  var a = Uh,
    b = Rh( function ( c ) {
      a.apply( void 0, arguments );
      Vh( b )
    } );
  return b
}

function Vh( a ) {
  var b = Qh();
  b && ( "number" === typeof a && ( a = [ a ] ), G( a, function ( c ) {
    b.unsubscribeByKey( c );
    delete Mh[ c ]
  } ) )
}

function Qh() {
  return A( "ytPubsub2Pubsub2Instance" )
};
var Wh = [],
  Xh = !1;

function Yh( a, b ) {
  Xh || ( Wh.push( {
    type: "EVENT",
    eventType: a,
    payload: b
  } ), 10 < Wh.length && Wh.shift() )
};

function T( a, b ) {
  for ( var c = [], d = 1; d < arguments.length; ++d ) c[ d - 1 ] = arguments[ d ];
  d = Error.call( this, a );
  this.message = d.message;
  "stack" in d && ( this.stack = d.stack );
  this.args = [].concat( c instanceof Array ? c : ha( u( c ) ) )
}
v( T, Error );
var Zh = {},
  $h = ( Zh.AUTH_INVALID = "No user identifier specified.", Zh.EXPLICIT_ABORT = "Transaction was explicitly aborted.", Zh.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", Zh.MISSING_OBJECT_STORE = "Object store not created.", Zh.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.", Zh.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", Zh.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", Zh.EXECUTE_TRANSACTION_ON_CLOSED_DB =
    "Can't start a transaction on a closed database", Zh ),
  ai = {},
  bi = ( ai.AUTH_INVALID = "ERROR", ai.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", ai.EXPLICIT_ABORT = "IGNORED", ai.IDB_NOT_SUPPORTED = "ERROR", ai.MISSING_OBJECT_STORE = "ERROR", ai.QUOTA_EXCEEDED = "WARNING", ai.QUOTA_MAYBE_EXCEEDED = "WARNING", ai.UNKNOWN_ABORT = "WARNING", ai );

function U( a, b, c, d ) {
  b = void 0 === b ? {} : b;
  c = void 0 === c ? $h[ a ] : c;
  d = void 0 === d ? bi[ a ] : d;
  T.call( this, c, Object.assign( {
    name: "YtIdbKnownError",
    isSw: void 0 === self.document,
    isIframe: self !== self.top,
    type: a,
    level: d
  }, b ) );
  this.type = a;
  this.message = c;
  this.level = d;
  Object.setPrototypeOf( this, U.prototype )
}
v( U, T );

function ci( a ) {
  U.call( this, "MISSING_OBJECT_STORE", {
    Fk: a
  }, $h.MISSING_OBJECT_STORE );
  Object.setPrototypeOf( this, ci.prototype )
}
v( ci, U );
var di = [ "The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations" ];

function ei( a, b, c ) {
  if ( a instanceof U || a instanceof T ) return a;
  if ( "QuotaExceededError" === a.name ) return new U( "QUOTA_EXCEEDED", {
    objectStoreNames: c,
    dbName: b
  } );
  if ( wc && "UnknownError" === a.name ) return new U( "QUOTA_MAYBE_EXCEEDED", {
    objectStoreNames: c,
    dbName: b
  } );
  if ( "InvalidStateError" === a.name && di.some( function ( d ) {
      return a.message.includes( d )
    } ) ) return new U( "EXECUTE_TRANSACTION_ON_CLOSED_DB", {
    objectStoreNames: c,
    dbName: b
  } );
  Object.setPrototypeOf( a, T.prototype );
  a.args = [ {
    name: "IdbError",
    Gk: a.name,
    dbName: b,
    objectStoreNames: c
  } ];
  return a
};

function fi( a ) {
  if ( !a ) throw Error();
  throw a;
}

function gi( a ) {
  return a
}

function V( a ) {
  function b( e ) {
    if ( "PENDING" === d.state.status ) {
      d.state = {
        status: "REJECTED",
        reason: e
      };
      e = u( d.onRejected );
      for ( var f = e.next(); !f.done; f = e.next() ) f = f.value, f()
    }
  }

  function c( e ) {
    if ( "PENDING" === d.state.status ) {
      d.state = {
        status: "FULFILLED",
        value: e
      };
      e = u( d.h );
      for ( var f = e.next(); !f.done; f = e.next() ) f = f.value, f()
    }
  }
  var d = this;
  this.i = a;
  this.state = {
    status: "PENDING"
  };
  this.h = [];
  this.onRejected = [];
  try {
    this.i( c, b )
  } catch ( e ) {
    b( e )
  }
}
V.all = function ( a ) {
  return new V( function ( b, c ) {
    var d = [],
      e = a.length;
    0 === e && b( d );
    for ( var f = {
        R: 0
      }; f.R < a.length; f = {
        R: f.R
      }, ++f.R ) hi( V.resolve( a[ f.R ] ).then( function ( g ) {
      return function ( h ) {
        d[ g.R ] = h;
        e--;
        0 === e && b( d )
      }
    }( f ) ), function ( g ) {
      c( g )
    } )
  } )
};
V.resolve = function ( a ) {
  return new V( function ( b, c ) {
    a instanceof V ? a.then( b, c ) : b( a )
  } )
};
V.reject = function ( a ) {
  return new V( function ( b, c ) {
    c( a )
  } )
};
V.prototype.then = function ( a, b ) {
  var c = this,
    d = null !== a && void 0 !== a ? a : gi,
    e = null !== b && void 0 !== b ? b : fi;
  return new V( function ( f, g ) {
    "PENDING" === c.state.status ? ( c.h.push( function () {
      ii( c, c, d, f, g )
    } ), c.onRejected.push( function () {
      ji( c, c, e, f, g )
    } ) ) : "FULFILLED" === c.state.status ? ii( c, c, d, f, g ) : "REJECTED" === c.state.status && ji( c, c, e, f, g )
  } )
};

function hi( a, b ) {
  return a.then( void 0, b )
}

function ii( a, b, c, d, e ) {
  try {
    if ( "FULFILLED" !== a.state.status ) throw Error( "calling handleResolve before the promise is fulfilled." );
    var f = c( a.state.value );
    f instanceof V ? ki( a, b, f, d, e ) : d( f )
  } catch ( g ) {
    e( g )
  }
}

function ji( a, b, c, d, e ) {
  try {
    if ( "REJECTED" !== a.state.status ) throw Error( "calling handleReject before the promise is rejected." );
    var f = c( a.state.reason );
    f instanceof V ? ki( a, b, f, d, e ) : d( f )
  } catch ( g ) {
    e( g )
  }
}

function ki( a, b, c, d, e ) {
  b === c ? e( new TypeError( "Circular promise chain detected." ) ) : c.then( function ( f ) {
    f instanceof V ? ki( a, b, f, d, e ) : d( f )
  }, function ( f ) {
    e( f )
  } )
};

function li( a, b, c ) {
  function d() {
    c( a.error );
    f()
  }

  function e() {
    b( a.result );
    f()
  }

  function f() {
    try {
      a.removeEventListener( "success", e ), a.removeEventListener( "error", d )
    } catch ( g ) {}
  }
  a.addEventListener( "success", e );
  a.addEventListener( "error", d )
}

function mi( a ) {
  return new Promise( function ( b, c ) {
    li( a, b, c )
  } )
}

function W( a ) {
  return new V( function ( b, c ) {
    li( a, b, c )
  } )
};

function ni( a, b ) {
  return new V( function ( c, d ) {
    function e() {
      var f = a ? b( a ) : null;
      f ? f.then( function ( g ) {
        a = g;
        e()
      }, d ) : c()
    }
    e()
  } )
};

function oi( a, b ) {
  this.h = a;
  this.options = b;
  this.transactionCount = 0;
  this.j = Math.round( R() );
  this.i = !1
}
m = oi.prototype;
m.add = function ( a, b, c ) {
  return pi( this, [ a ], {
    mode: "readwrite",
    U: P( "ytidb_transaction_enable_retries_core_and_nwl" )
  }, function ( d ) {
    return qi( d, a ).add( b, c )
  } )
};
m.clear = function ( a ) {
  return pi( this, [ a ], {
    mode: "readwrite",
    U: P( "ytidb_transaction_enable_retries_core_and_nwl" )
  }, function ( b ) {
    return qi( b, a ).clear()
  } )
};
m.close = function () {
  var a;
  this.h.close();
  ( null === ( a = this.options ) || void 0 === a ? 0 : a.closed ) && this.options.closed()
};
m.count = function ( a, b ) {
  return pi( this, [ a ], {
    mode: "readonly",
    U: P( "ytidb_transaction_enable_retries_core_and_nwl" )
  }, function ( c ) {
    return qi( c, a ).count( b )
  } )
};
m[ "delete" ] = function ( a, b ) {
  return pi( this, [ a ], {
    mode: "readwrite",
    U: P( "ytidb_transaction_enable_retries_core_and_nwl" )
  }, function ( c ) {
    return qi( c, a )[ "delete" ]( b )
  } )
};
m.get = function ( a, b ) {
  return pi( this, [ a ], {
    mode: "readonly",
    U: P( "ytidb_transaction_enable_retries_core_and_nwl" )
  }, function ( c ) {
    return qi( c, a ).get( b )
  } )
};

function pi( a, b, c, d ) {
  var e = {
    mode: "readonly",
    U: !1
  };
  "string" === typeof c ? e.mode = c : e = c;
  a.transactionCount++;
  try {
    var f = a.h.transaction( b, e.mode );
    var g = ri( f, d, e )[ "catch" ]( function ( h ) {
      throw ei( h, a.h.name, b.join() );
    } )
  } catch ( h ) {
    g = h instanceof Error ? Promise.reject( ei( h, a.h.name, b.join() ) ) : Promise.reject( ei( Error( "unexpected transaction error: " + h ), a.h.name, b.join() ) )
  }
  si( a, g, b.join(), e );
  return g
}

function si( a, b, c, d ) {
  bc( a, function f() {
    var g, h, k = this,
      l, n, p;
    return Aa( f, function ( q ) {
      if ( 1 == q.h ) return g = Math.round( R() ), q.l = 2, sa( q, b, 4 );
      2 != q.h ? ( h = Math.round( R() ), ti( k, !0, c, h - g ), q.h = 0, q.l = 0 ) : ( l = ta( q ), n = Math.round( R() ), p = n - g, l instanceof U && ( "QUOTA_EXCEEDED" === l.type || "QUOTA_MAYBE_EXCEEDED" === l.type ) && Yh( "QUOTA_EXCEEDED", {
        dbName: k.h.name,
        objectStoreNames: c,
        transactionCount: k.transactionCount,
        transactionMode: d.mode
      } ), l instanceof U && "UNKNOWN_ABORT" === l.type && ( Yh( "TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: c,
        transactionDuration: p,
        transactionCount: k.transactionCount,
        dbDuration: n - k.j
      } ), k.i = !0 ), ti( k, !1, c, p ), Xh || ( Wh.push( {
        type: "ERROR",
        payload: l
      } ), 10 < Wh.length && Wh.shift() ), q.h = 0 )
    } )
  } )
}

function ti( a, b, c, d ) {
  Yh( "TRANSACTION_ENDED", {
    objectStoreNames: c,
    connectionHasUnknownAbortedTransaction: a.i,
    duration: d,
    isSuccessful: b
  } )
}

function ui( a ) {
  this.h = a
}
m = ui.prototype;
m.add = function ( a, b ) {
  return W( this.h.add( a, b ) )
};
m.clear = function () {
  return W( this.h.clear() ).then( function () {} )
};
m.count = function ( a ) {
  return W( this.h.count( a ) )
};

function vi( a, b ) {
  return wi( a, {
    query: b
  }, function ( c ) {
    return c[ "delete" ]().then( function () {
      return c[ "continue" ]()
    } )
  } ).then( function () {} )
}
m[ "delete" ] = function ( a ) {
  return a instanceof IDBKeyRange ? vi( this, a ) : W( this.h[ "delete" ]( a ) )
};
m.get = function ( a ) {
  return W( this.h.get( a ) )
};
m.index = function ( a ) {
  return new xi( this.h.index( a ) )
};
m.getName = function () {
  return this.h.name
};

function wi( a, b, c ) {
  a = a.h.openCursor( b.query, b.direction );
  return yi( a ).then( function ( d ) {
    return ni( d, c )
  } )
}

function zi( a ) {
  var b = this;
  this.h = a;
  this.i = new Map;
  this.aborted = !1;
  this.done = new Promise( function ( c, d ) {
    b.h.addEventListener( "complete", function () {
      c()
    } );
    b.h.addEventListener( "error", function ( e ) {
      e.currentTarget === e.target && d( b.h.error )
    } );
    b.h.addEventListener( "abort", function () {
      var e = b.h.error;
      if ( e ) d( e );
      else if ( !b.aborted ) {
        e = U;
        for ( var f = b.h.objectStoreNames, g = [], h = 0; h < f.length; h++ ) {
          var k = f.item( h );
          if ( null === k ) throw Error( "Invariant: item in DOMStringList is null" );
          g.push( k )
        }
        e = new e( "UNKNOWN_ABORT", {
          objectStoreNames: g.join(),
          dbName: b.h.db.name,
          mode: b.h.mode
        } );
        d( e )
      }
    } )
  } )
}

function ri( a, b, c ) {
  a = new zi( a );
  return Ai( a, b, c )
}

function Ai( a, b, c ) {
  var d = new Promise( function ( e, f ) {
    var g = Ef( "ytidb_transaction_try_count", 1 ),
      h = b( a );
    if ( c.U )
      for ( var k = 0; k < g - 1; k++ ) h = hi( h, function ( l ) {
        return l instanceof U && "EXPLICIT_ABORT" === l.type ? V.reject( l ) : b( a )
      } );
    hi( h.then( function ( l ) {
      a.commit();
      e( l )
    } ), f )
  } );
  return Promise.all( [ d, a.done ] ).then( function ( e ) {
    return u( e ).next().value
  } )
}
zi.prototype.abort = function () {
  this.h.abort();
  this.aborted = !0;
  throw new U( "EXPLICIT_ABORT" );
};
zi.prototype.commit = function () {
  var a = this.h;
  a.commit && !this.aborted && a.commit()
};

function qi( a, b ) {
  var c = a.h.objectStore( b ),
    d = a.i.get( c );
  d || ( d = new ui( c ), a.i.set( c, d ) );
  return d
}

function xi( a ) {
  this.h = a
}
xi.prototype.count = function ( a ) {
  return W( this.h.count( a ) )
};
xi.prototype[ "delete" ] = function ( a ) {
  return Bi( this, {
    query: a
  }, function ( b ) {
    return b[ "delete" ]().then( function () {
      return b[ "continue" ]()
    } )
  } )
};
xi.prototype.get = function ( a ) {
  return W( this.h.get( a ) )
};
xi.prototype.getKey = function ( a ) {
  return W( this.h.getKey( a ) )
};

function Bi( a, b, c ) {
  a = a.h.openCursor( void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction );
  return yi( a ).then( function ( d ) {
    return ni( d, c )
  } )
}

function Ci( a, b ) {
  this.request = a;
  this.cursor = b
}

function yi( a ) {
  return W( a ).then( function ( b ) {
    return null === b ? null : new Ci( a, b )
  } )
}
m = Ci.prototype;
m.advance = function ( a ) {
  this.cursor.advance( a );
  return yi( this.request )
};
m[ "continue" ] = function ( a ) {
  this.cursor[ "continue" ]( a );
  return yi( this.request )
};
m[ "delete" ] = function () {
  return W( this.cursor[ "delete" ]() ).then( function () {} )
};
m.getKey = function () {
  return this.cursor.key
};
m.getValue = function () {
  return this.cursor.value
};
m.update = function ( a ) {
  return W( this.cursor.update( a ) )
};

function Di( a, b, c ) {
  return bc( this, function e() {
    var f, g, h, k, l, n, p, q, r, y;
    return Aa( e, function ( z ) {
      if ( 1 == z.h ) return f = self.indexedDB.open( a, b ), g = c, h = g.blocked, k = g.blocking, l = g.rb, n = g.upgrade, p = g.closed, r = function () {
        q || ( q = new oi( f.result, {
          closed: p
        } ) );
        return q
      }, f.addEventListener( "upgradeneeded", function ( D ) {
        if ( null === D.newVersion ) throw Error( "Invariant: newVersion on IDbVersionChangeEvent is null" );
        if ( null === f.transaction ) throw Error( "Invariant: transaction on IDbOpenDbRequest is null" );
        D.dataLoss && "none" !== D.dataLoss && Yh( "IDB_DATA_CORRUPTED", {
          reason: D.dataLossMessage || "unknown reason",
          dbName: a
        } );
        var da = r(),
          va = new zi( f.transaction );
        n && n( da, D.oldVersion, D.newVersion, va )
      } ), h && f.addEventListener( "blocked", function () {
        h()
      } ), sa( z, mi( f ), 2 );
      y = z.m;
      k && y.addEventListener( "versionchange", function () {
        k( r() )
      } );
      y.addEventListener( "close", function () {
        Yh( "IDB_UNEXPECTEDLY_CLOSED", {
          dbName: a,
          dbVersion: y.version
        } );
        l && l()
      } );
      return z[ "return" ]( r() )
    } )
  } )
}

function Ei( a, b ) {
  b = void 0 === b ? {} : b;
  return bc( this, function d() {
    var e, f, g;
    return Aa( d, function ( h ) {
      e = self.indexedDB.deleteDatabase( a );
      f = b;
      ( g = f.blocked ) && e.addEventListener( "blocked", function () {
        g()
      } );
      return sa( h, mi( e ), 0 )
    } )
  } )
};

function Fi( a ) {
  this.name = "YtIdbMeta";
  this.options = a;
  this.i = !1
}

function Gi( a, b, c ) {
  c = void 0 === c ? {} : c;
  c = void 0 === c ? {} : c;
  return Di( a, b, c )
}
Fi.prototype[ "delete" ] = function ( a ) {
  a = void 0 === a ? {} : a;
  return Ei( this.name, a )
};

function Hi() {
  var a = Ii;
  if ( !a.h ) {
    var b = function () {
        a.h === e && ( a.h = void 0 )
      },
      c = {
        blocking: function ( f ) {
          f.close()
        },
        closed: b,
        rb: b,
        upgrade: a.options.upgrade
      },
      d = function () {
        return bc( a, function g() {
          var h = this,
            k, l, n;
          return Aa( g, function ( p ) {
            switch ( p.h ) {
              case 1:
                return p.l = 2, sa( p, Gi( h.name, h.options.version, c ), 4 );
              case 4:
                k = p.m;
                if ( !tc ) {
                  p.h = 5;
                  break
                }
                a: {
                  var q = u( Object.keys( h.options.ab ) );
                  for ( var r = q.next(); !r.done; r = q.next() )
                    if ( r = r.value, !k.h.objectStoreNames.contains( r ) ) {
                      q = r;
                      break a
                    } q = void 0
                }
                l = q;
                if ( void 0 === l ) {
                  p.h = 5;
                  break
                }
                if ( !tc || h.i ) {
                  p.h = 7;
                  break
                }
                h.i = !0;
                return sa( p, h[ "delete" ](), 8 );
              case 8:
                return p[ "return" ]( d() );
              case 7:
                throw new ci( l );
              case 5:
                return p[ "return" ]( k );
              case 2:
                n = ta( p );
                if ( n instanceof DOMException ? "VersionError" === n.name : "DOMError" in self && n instanceof DOMError ? "VersionError" === n.name : n instanceof Object && "message" in n && "An attempt was made to open a database using a lower version than the existing version." === n.message ) return p[ "return" ]( Gi( h.name, void 0, Object.assign( Object.assign( {}, c ), {
                  upgrade: void 0
                } ) ) );
                b();
                throw n;
            }
          } )
        } )
      };
    var e = d();
    a.h = e
  }
  return a.h
};
var Ii = new Fi( {
  ab: {
    databases: !0
  },
  upgrade: function ( a, b ) {
    1 > b && a.h.createObjectStore( "databases", {
      keyPath: "actualName"
    } )
  }
} );

function Ji( a ) {
  return bc( this, function c() {
    var d;
    return Aa( c, function ( e ) {
      if ( 1 == e.h ) return sa( e, Hi(), 2 );
      d = e.m;
      return e[ "return" ]( pi( d, [ "databases" ], "readwrite", function ( f ) {
        var g = qi( f, "databases" );
        return g.get( a.actualName ).then( function ( h ) {
          if ( h ? a.actualName !== h.actualName || a.publicName !== h.publicName || a.userIdentifier !== h.userIdentifier || a.clearDataOnAuthChange !== h.clearDataOnAuthChange : 1 ) return W( g.h.put( a, void 0 ) ).then( function () {} )
        } )
      } ) )
    } )
  } )
}

function Ki() {
  return bc( this, function b() {
    var c;
    return Aa( b, function ( d ) {
      if ( 1 == d.h ) return sa( d, Hi(), 2 );
      c = d.m;
      return d[ "return" ]( c[ "delete" ]( "databases", "yt-idb-test-do-not-use" ) )
    } )
  } )
};
var Li;

function Mi() {
  return bc( this, function b() {
    var c, d;
    return Aa( b, function ( e ) {
      switch ( e.h ) {
        case 1:
          var f;
          if ( f = Eg ) f = /WebKit\/([0-9]+)/.exec( Lb ), f = !!( f && 600 <= parseInt( f[ 1 ], 10 ) );
          f && ( f = /WebKit\/([0-9]+)/.exec( Lb ), f = !( f && 602 <= parseInt( f[ 1 ], 10 ) ) );
          if ( f && !P( "ytidb_allow_on_ios_safari_v8_and_v9" ) || gc ) return e[ "return" ]( !1 );
          try {
            if ( c = self, !( c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore ) ) return e[ "return" ]( !1 )
          } catch ( g ) {
            return e[ "return" ]( !1 )
          }
          if ( !( "IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype ) ) return e[ "return" ]( !1 );
          e.l =
            2;
          d = {
            actualName: "yt-idb-test-do-not-use",
            publicName: "yt-idb-test-do-not-use",
            userIdentifier: void 0
          };
          return sa( e, Ji( d ), 4 );
        case 4:
          return sa( e, Ki(), 5 );
        case 5:
          return e[ "return" ]( !0 );
        case 2:
          return ta( e ), e[ "return" ]( !1 )
      }
    } )
  } )
}

function Ni() {
  if ( void 0 !== Li ) return Li;
  Xh = !0;
  return Li = Mi().then( function ( a ) {
    Xh = !1;
    return a
  } )
};
var Oi;

function Pi() {
  Oi || ( Oi = new Dh( "yt.offline" ) );
  return Oi
};

function Qi() {
  Ce.call( this );
  this.o = this.u = this.j = !1;
  this.l = Ri();
  Si( this );
  Ti( this )
}
v( Qi, Ce );

function Ri() {
  var a = window.navigator.onLine;
  return void 0 === a ? !0 : a
}

function Ti( a ) {
  window.addEventListener( "online", function () {
    a.l = !0;
    a.j && De( a, "ytnetworkstatus-online" );
    Ui( a );
    if ( a.o && P( "offline_error_handling" ) ) {
      var b = Pi().get( "errors", !0 );
      if ( b ) {
        for ( var c in b )
          if ( b[ c ] ) {
            var d = new T( c, "sent via offline_errors" );
            d.name = b[ c ].name;
            d.stack = b[ c ].stack;
            d.level = b[ c ].level || b[ c ].Dk;
            zf( d )
          } Pi().set( "errors", {}, 2592E3, !0 )
      }
    }
  } )
}

function Si( a ) {
  window.addEventListener( "offline", function () {
    a.l = !1;
    a.j && De( a, "ytnetworkstatus-offline" );
    Ui( a )
  } )
}

function Ui( a ) {
  a.u && ( Af( new T( "NetworkStatusManager state did not match poll", R() - 0 ) ), a.u = !1 )
};

function Vi( a ) {
  a = void 0 === a ? {} : a;
  Ce.call( this );
  var b = this;
  this.l = this.u = 0;
  Qi.h || ( Qi.h = new Qi );
  this.j = Qi.h;
  this.j.j = !0;
  a.Za && ( this.j.o = !0 );
  a.ja ? ( this.ja = a.ja, te( this.j, "ytnetworkstatus-online", function () {
    Wi( b, "publicytnetworkstatus-online" )
  } ), te( this.j, "ytnetworkstatus-offline", function () {
    Wi( b, "publicytnetworkstatus-offline" )
  } ) ) : ( te( this.j, "ytnetworkstatus-online", function () {
    De( b, "publicytnetworkstatus-online" )
  } ), te( this.j, "ytnetworkstatus-offline", function () {
    De( b, "publicytnetworkstatus-offline" )
  } ) )
}
v( Vi, Ce );

function Wi( a, b ) {
  a.ja ? a.l ? ( Vf( a.u ), a.u = Sf( function () {
    a.o !== b && ( De( a, b ), a.o = b, a.l = R() )
  }, a.ja - ( R() - a.l ) ) ) : ( De( a, b ), a.o = b, a.l = R() ) : De( a, b )
};
var Xi;

function Yi( a, b ) {
  b = void 0 === b ? {} : b;
  Ni().then( function () {
    Xi || ( Xi = new Vi( {
      Za: !0
    } ) );
    Xi.j.l !== Ri() && Af( new T( "NetworkStatusManager isOnline does not match window status" ) );
    yg( a, b )
  } )
}

function Zi( a, b ) {
  b = void 0 === b ? {} : b;
  Ni().then( function () {
    yg( a, b )
  } )
};

function $i( a ) {
  var b = this;
  this.h = null;
  a ? this.h = a : Ah() && ( this.h = oh() );
  Tf( function () {
    Ih( b )
  }, 0, 5E3 )
}
$i.prototype.isReady = function () {
  !this.h && Ah() && ( this.h = oh() );
  return !!this.h
};

function rh( a, b, c, d ) {
  !H( "VISITOR_DATA" ) && "visitor_id" !== b && .01 > Math.random() && Af( new T( "Missing VISITOR_DATA when sending innertube request.", b, c, d ) );
  if ( !a.isReady() ) {
    var e = new T( "innertube xhrclient not ready", b, c, d );
    zf( e );
    throw e;
  }
  var f = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      postParams: c,
      postBodyFormat: "JSON",
      onTimeout: function () {
        d.onTimeout()
      },
      onFetchTimeout: d.onTimeout,
      onSuccess: function ( p, q ) {
        if ( d.onSuccess ) d.onSuccess( q )
      },
      onFetchSuccess: function ( p ) {
        if ( d.onSuccess ) d.onSuccess( p )
      },
      onError: function ( p, q ) {
        if ( d.onError ) d.onError( q )
      },
      onFetchError: function ( p ) {
        if ( d.onError ) d.onError( p )
      },
      timeout: d.timeout,
      withCredentials: !0
    },
    g = "";
  ( e = a.h.Va ) && ( g = e );
  var h = a.h.Xa || !1,
    k = Bh( h, g, d );
  Object.assign( f.headers, k );
  f.headers.Authorization && !g && ( f.headers[ "x-origin" ] = window.location.origin );
  e = "/youtubei/" + a.h.innertubeApiVersion + "/" + b;
  var l = {
    alt: "json"
  };
  a.h.Wa && f.headers.Authorization || ( l.key = a.h.innertubeApiKey );
  var n = kg( "" + g + e, l || {}, !0 );
  ( function ( p ) {
    p = void 0 === p ? !1 : p;
    var q;
    if ( d.retry && P( "retry_web_logging_batches" ) && "www.youtube-nocookie.com" != g && ( p || ( q = Gh( b, c, k, h ) ), q ) ) {
      var r = f.onSuccess,
        y = f.onFetchSuccess;
      f.onSuccess = function ( z, D ) {
        Hh( q );
        r( z, D )
      };
      c.onFetchSuccess = function ( z, D ) {
        Hh( q );
        y( z, D )
      }
    }
    try {
      P( "use_fetch_for_op_xhr" ) ? vg( n, f ) : p && d.retry && !d.Ca.bypassNetworkless ? ( f.method = "POST", !d.Ca.writeThenSend && P( "nwl_send_fast_on_unload" ) ? Zi( n, f ) : Yi( n, f ) ) : ( f.method = "POST", f.postParams || ( f.postParams = {} ), yg( n, f ) )
    } catch ( z ) {
      if ( "InvalidAccessError" == z.name ) q && ( Hh( q ), q = 0 ), Af( Error( "An extension is blocking network request." ) );
      else throw z;
    }
    q && Tf( function () {
      Ih( a )
    }, 0, 5E3 )
  } )( !1 )
};

function X( a, b, c ) {
  c = void 0 === c ? {} : c;
  var d = $i;
  H( "ytLoggingEventsDefaultDisabled", !1 ) && $i == $i && ( d = null );
  th( a, b, d, c )
};
var aj = [ {
  Ba: function ( a ) {
    return "Cannot read property '" + a.key + "'"
  },
  sa: {
    TypeError: [ {
      regexp: /Cannot read property '([^']+)' of (null|undefined)/,
      groups: [ "key", "value" ]
    }, {
      regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
      groups: [ "value", "key" ]
    }, {
      regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
      groups: [ "value", "key" ]
    }, {
      regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
      groups: [ "key" ]
    }, {
      regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
      groups: [ "key", "value" ]
    } ],
    Error: [ {
      regexp: /(Permission denied) to access property "([^']+)"/,
      groups: [ "reason", "key" ]
    } ]
  }
}, {
  Ba: function ( a ) {
    return "Cannot call '" + a.key + "'"
  },
  sa: {
    TypeError: [ {
      regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
      groups: [ "base", "key" ]
    }, {
      regexp: /([^ ]+) called on (null or undefined)/,
      groups: [ "key", "value" ]
    }, {
      regexp: /Object (.*) has no method '([^ ]+)'/,
      groups: [ "base", "key" ]
    }, {
      regexp: /Object doesn't support property or method '([^ ]+)'/,
      groups: [ "key" ]
    }, {
      regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
      groups: [ "key" ]
    }, {
      regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
      groups: [ "key" ]
    } ]
  }
} ];

function bj() {
  this.h = [];
  this.i = []
}
var cj;

function dj() {
  cj || ( cj = new bj );
  return cj
};
var ej = new N;

function fj( a ) {
  function b() {
    return a.charCodeAt( d++ )
  }
  var c = a.length,
    d = 0;
  do {
    var e = gj( b );
    if ( Infinity === e ) break;
    var f = e >> 3;
    switch ( e & 7 ) {
      case 0:
        e = gj( b );
        if ( 2 === f ) return e;
        break;
      case 1:
        if ( 2 === f ) return;
        d += 8;
        break;
      case 2:
        e = gj( b );
        if ( 2 === f ) return a.substr( d, e );
        d += e;
        break;
      case 5:
        if ( 2 === f ) return;
        d += 4;
        break;
      default:
        return
    }
  } while ( d < c )
}

function gj( a ) {
  var b = a(),
    c = b & 127;
  if ( 128 > b ) return c;
  b = a();
  c |= ( b & 127 ) << 7;
  if ( 128 > b ) return c;
  b = a();
  c |= ( b & 127 ) << 14;
  if ( 128 > b ) return c;
  b = a();
  return 128 > b ? c | ( b & 127 ) << 21 : Infinity
};

function hj( a, b, c, d ) {
  if ( a )
    if ( Array.isArray( a ) ) {
      var e = d;
      for ( d = 0; d < a.length && !( a[ d ] && ( e += ij( d, a[ d ], b, c ), 500 < e ) ); d++ );
      d = e
    } else if ( "object" === typeof a )
    for ( e in a ) {
      if ( a[ e ] ) {
        var f = e;
        var g = a[ e ],
          h = b,
          k = c;
        f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : ( g = fj( atob( g.replace( /-/g, "+" ).replace( /_/g, "/" ) ) ) ) ? ij( f + ".ve", g, h, k ) : 0;
        d += f;
        d += ij( e, a[ e ], b, c );
        if ( 500 < d ) break
      }
    } else c[ b ] = jj( a ), d += c[ b ].length;
  else c[ b ] = jj( a ), d += c[ b ].length;
  return d
}

function ij( a, b, c, d ) {
  c += "." + a;
  a = jj( b );
  d[ c ] = a;
  return c.length + a.length
}

function jj( a ) {
  return ( "string" === typeof a ? a : String( JSON.stringify( a ) ) ).substr( 0, 500 )
};
var kj = new Set,
  lj = 0,
  mj = 0,
  nj = 0,
  oj = [],
  pj = [ "PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan" ];

function qj( a ) {
  rj( a, "WARNING" )
}

function rj( a, b, c, d, e, f ) {
  f = void 0 === f ? {} : f;
  f.name = c || H( "INNERTUBE_CONTEXT_CLIENT_NAME", 1 );
  f.version = d || H( "INNERTUBE_CONTEXT_CLIENT_VERSION", void 0 );
  c = f || {};
  b = void 0 === b ? "ERROR" : b;
  b = void 0 === b ? "ERROR" : b;
  if ( a && ( a.level && ( b = a.level ), P( "console_log_js_exceptions" ) && ( d = [], d.push( "Name: " + a.name ), d.push( "Message: " + a.message ), a.hasOwnProperty( "params" ) && d.push( "Error Params: " + JSON.stringify( a.params ) ), a.hasOwnProperty( "args" ) && d.push( "Error args: " + JSON.stringify( a.args ) ), d.push( "File name: " + a.fileName ),
      d.push( "Stacktrace: " + a.stack ), window.console.log( d.join( "\n" ), a ) ), !( 5 <= lj ) ) ) {
    var g = ed( a );
    d = g.message || "Unknown Error";
    e = g.name || "UnknownError";
    var h = g.stack || a.h || "Not available";
    h.startsWith( e + ": " + d ) && ( f = h.split( "\n" ), f.shift(), h = f.join( "\n" ) );
    f = g.lineNumber || "Not available";
    g = g.fileName || "Not available";
    var k = 0;
    if ( a.hasOwnProperty( "args" ) && a.args && a.args.length )
      for ( var l = 0; l < a.args.length && !( k = hj( a.args[ l ], "params." + l, c, k ), 500 <= k ); l++ );
    else if ( a.hasOwnProperty( "params" ) && a.params ) {
      var n = a.params;
      if ( "object" === typeof a.params )
        for ( l in n ) {
          if ( n[ l ] ) {
            var p = "params." + l,
              q = jj( n[ l ] );
            c[ p ] = q;
            k += p.length + q.length;
            if ( 500 < k ) break
          }
        } else c.params = jj( n )
    }
    if ( oj.length )
      for ( l = 0; l < oj.length && !( k = hj( oj[ l ], "params.context." + l, c, k ), 500 <= k ); l++ );
    navigator.vendor && !c.hasOwnProperty( "vendor" ) && ( c[ "device.vendor" ] = navigator.vendor );
    l = {
      message: d,
      name: e,
      lineNumber: f,
      fileName: g,
      stack: h,
      params: c,
      sampleWeight: 1
    };
    c = Number( a.columnNumber );
    isNaN( c ) || ( l.lineNumber = l.lineNumber + ":" + c );
    if ( P( "sampleWeight_to_level_migration_killswitch" ) &&
      void 0 !== a.sampleWeight ) a = a.sampleWeight;
    else if ( "IGNORED" === a.level ) a = 0;
    else a: {
      a = dj();c = u( a.i );
      for ( d = c.next(); !d.done; d = c.next() )
        if ( d = d.value, l.message && l.message.match( d.Ek ) ) {
          a = d.weight;
          break a
        } a = u( a.h );
      for ( c = a.next(); !c.done; c = a.next() )
        if ( c = c.value, c.Ja( l ) ) {
          a = c.weight;
          break a
        } a = 1
    }
    l.sampleWeight = a;
    a = u( aj );
    for ( c = a.next(); !c.done; c = a.next() )
      if ( c = c.value, c.sa[ l.name ] )
        for ( e = u( c.sa[ l.name ] ), d = e.next(); !d.done; d = e.next() )
          if ( f = d.value, d = l.message.match( f.regexp ) ) {
            l.params[ "params.error.original" ] = d[ 0 ];
            e = f.groups;
            f = {};
            for ( g = 0; g < e.length; g++ ) f[ e[ g ] ] = d[ g + 1 ], l.params[ "params.error." + e[ g ] ] = d[ g + 1 ];
            l.message = c.Ba( f );
            break
          } l.params || ( l.params = {} );
    a = dj();
    l.params[ "params.errorServiceSignature" ] = "msg=" + a.i.length + "&cb=" + a.h.length;
    l.params[ "params.serviceWorker" ] = "false";
    w.document && w.document.querySelectorAll && ( l.params[ "params.fscripts" ] = String( document.querySelectorAll( "script:not([nonce])" ).length ) );
    window.yterr && "function" === typeof window.yterr && window.yterr( l );
    a = 0 === l.sampleWeight;
    if ( !kj.has( l.message ) &&
      !a ) {
      "ERROR" === b ? ( ej.O( "handleError", l ), P( "record_app_crashed_web" ) && 0 === nj && 1 === l.sampleWeight && ( nj++, X( "appCrashed", {
        appCrashType: "APP_CRASH_TYPE_BREAKPAD"
      } ) ), mj++ ) : "WARNING" === b && ej.O( "handleWarning", l );
      if ( P( "kevlar_gel_error_routing" ) ) {
        c = b;
        a: {
          a = u( pj );
          for ( d = a.next(); !d.done; d = a.next() )
            if ( Fg( d.value.toLowerCase() ) ) {
              a = !0;
              break a
            } a = !1
        }
        if ( !a ) {
          d = {
            stackTrace: l.stack
          };
          l.fileName && ( d.filename = l.fileName );
          a = l.lineNumber && l.lineNumber.split ? l.lineNumber.split( ":" ) : [];
          0 !== a.length && ( 1 !== a.length || isNaN( Number( a[ 0 ] ) ) ?
            2 !== a.length || isNaN( Number( a[ 0 ] ) ) || isNaN( Number( a[ 1 ] ) ) || ( d.lineNumber = Number( a[ 0 ] ), d.columnNumber = Number( a[ 1 ] ) ) : d.lineNumber = Number( a[ 0 ] ) );
          a = {
            level: "ERROR_LEVEL_UNKNOWN",
            message: l.message,
            errorClassName: l.name,
            sampleWeight: l.sampleWeight
          };
          "ERROR" === c ? a.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && ( a.level = "ERROR_LEVEL_WARNNING" );
          c = {
            isObfuscated: !0,
            browserStackInfo: d
          };
          d = {
            pageUrl: window.location.href,
            kvPairs: []
          };
          H( "FEXP_EXPERIMENTS" ) && ( d.experimentIds = H( "FEXP_EXPERIMENTS" ) );
          if ( e = l.params )
            for ( f = u( Object.keys( e ) ),
              g = f.next(); !g.done; g = f.next() ) g = g.value, d.kvPairs.push( {
              key: "client." + g,
              value: String( e[ g ] )
            } );
          e = H( "SERVER_NAME", void 0 );
          f = H( "SERVER_VERSION", void 0 );
          e && f && ( d.kvPairs.push( {
            key: "server.name",
            value: e
          } ), d.kvPairs.push( {
            key: "server.version",
            value: f
          } ) );
          X( "clientError", {
            errorMetadata: d,
            stackTrace: c,
            logMessage: a
          } );
          jh()
        }
      }
      if ( !P( "suppress_error_204_logging" ) ) {
        a = l.params || {};
        b = {
          urlParams: {
            a: "logerror",
            t: "jserror",
            type: l.name,
            msg: l.message.substr( 0, 250 ),
            line: l.lineNumber,
            level: b,
            "client.name": a.name
          },
          postParams: {
            url: H( "PAGE_NAME",
              window.location.href ),
            file: l.fileName
          },
          method: "POST"
        };
        a.version && ( b[ "client.version" ] = a.version );
        if ( b.postParams ) {
          l.stack && ( b.postParams.stack = l.stack );
          c = u( Object.keys( a ) );
          for ( d = c.next(); !d.done; d = c.next() ) d = d.value, b.postParams[ "client." + d ] = a[ d ];
          if ( a = H( "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0 ) )
            for ( c = u( Object.keys( a ) ), d = c.next(); !d.done; d = c.next() ) d = d.value, b.postParams[ d ] = a[ d ];
          a = H( "SERVER_NAME", void 0 );
          c = H( "SERVER_VERSION", void 0 );
          a && c && ( b.postParams[ "server.name" ] = a, b.postParams[ "server.version" ] =
            c )
        }
        yg( H( "ECATCHER_REPORT_HOST", "" ) + "/error_204", b )
      }
      kj.add( l.message );
      lj++
    }
  }
}

function sj( a, b ) {
  for ( var c = [], d = 1; d < arguments.length; ++d ) c[ d - 1 ] = arguments[ d ];
  a.args || ( a.args = [] );
  a.args.push.apply( a.args, c instanceof Array ? c : ha( u( c ) ) )
};

function tj( a ) {
  a && ( a.dataset ? a.dataset[ uj( "loaded" ) ] = "true" : a.setAttribute( "data-loaded", "true" ) )
}

function vj( a, b ) {
  return a ? a.dataset ? a.dataset[ uj( b ) ] : a.getAttribute( "data-" + b ) : null
}
var wj = {};

function uj( a ) {
  return wj[ a ] || ( wj[ a ] = String( a ).replace( /\-([a-z])/g, function ( b, c ) {
    return c.toUpperCase()
  } ) )
};
var xj = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
  yj = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

function zj( a, b, c ) {
  c = void 0 === c ? null : c;
  if ( window.spf && spf.script ) {
    c = "";
    if ( a ) {
      var d = a.indexOf( "jsbin/" ),
        e = a.lastIndexOf( ".js" ),
        f = d + 6; - 1 < d && -1 < e && e > f && ( c = a.substring( f, e ), c = c.replace( xj, "" ), c = c.replace( yj, "" ), c = c.replace( "debug-", "" ), c = c.replace( "tracing-", "" ) )
    }
    spf.script.load( a, c, b )
  } else Aj( a, b, c )
}

function Aj( a, b, c ) {
  c = void 0 === c ? null : c;
  var d = Bj( a ),
    e = document.getElementById( d ),
    f = e && vj( e, "loaded" ),
    g = e && !f;
  f ? b && b() : ( b && ( f = Qg( d, b ), b = "" + Na( b ), Cj[ b ] = f ), g || ( e = Dj( a, d, function () {
    vj( e, "loaded" ) || ( tj( e ), Tg( d ), Q( Sa( Ug, d ), 0 ) )
  }, c ) ) )
}

function Dj( a, b, c, d ) {
  d = void 0 === d ? null : d;
  var e = Hc( document, "SCRIPT" );
  e.id = b;
  e.onload = function () {
    c && setTimeout( c, 0 )
  };
  e.onreadystatechange = function () {
    switch ( e.readyState ) {
      case "loaded":
      case "complete":
        e.onload()
    }
  };
  d && e.setAttribute( "nonce", d );
  Sb( e, bd( a ) );
  a = document.getElementsByTagName( "head" )[ 0 ] || document.body;
  a.insertBefore( e, a.firstChild );
  return e
}

function Ej( a ) {
  a = Bj( a );
  var b = document.getElementById( a );
  b && ( Ug( a ), b.parentNode.removeChild( b ) )
}

function Fj( a, b ) {
  if ( a && b ) {
    var c = "" + Na( b );
    ( c = Cj[ c ] ) && Sg( c )
  }
}

function Bj( a ) {
  var b = document.createElement( "a" );
  Rb( b, a );
  a = b.href.replace( /^[a-zA-Z]+:\/\//, "//" );
  return "js-" + Ub( a )
}
var Cj = {};
var Gj = [],
  Hj = !1;

function Ij() {
  if ( !P( "disable_ad_status_on_html5_clients" ) && ( !P( "condition_ad_status_fetch_on_consent_cookie_html5_clients" ) || jd.get( "CONSENT", "" ).startsWith( "YES+" ) ) && "1" != kb() ) {
    var a = function () {
      Hj = !0;
      "google_ad_status" in window ? O( "DCLKSTAT", 1 ) : O( "DCLKSTAT", 2 )
    };
    try {
      zj( "//static.doubleclick.net/instream/ad_status.js", a )
    } catch ( b ) {}
    Gj.push( Sf( function () {
      if ( !( Hj || "google_ad_status" in window ) ) {
        try {
          Fj( "//static.doubleclick.net/instream/ad_status.js", a )
        } catch ( b ) {}
        Hj = !0;
        O( "DCLKSTAT", 3 )
      }
    }, 5E3 ) )
  }
}

function Jj() {
  return parseInt( H( "DCLKSTAT", 0 ), 10 )
};

function Kj() {
  this.i = !1;
  this.h = null
}
Kj.prototype.initialize = function ( a, b, c, d, e, f ) {
  var g = this;
  f = void 0 === f ? !1 : f;
  b ? ( this.i = !0, zj( b, function () {
    g.i = !1;
    var h = 0 <= b.indexOf( "/th/" );
    ( h ? window.trayride : window.botguard ) ? Lj( g, c, d, f, h ): ( Ej( b ), qj( new T( "Unable to load Botguard", "from " + b ) ) )
  }, e ) ) : a && ( e = Hc( document, "SCRIPT" ), e.textContent = a, e.nonce = Fa(), document.head.appendChild( e ), document.head.removeChild( e ), ( ( a = a.includes( "trayride" ) ) ? window.trayride : window.botguard ) ? Lj( this, c, d, f, a ) : qj( Error( "Unable to load Botguard from JS" ) ) )
};

function Lj( a, b, c, d, e ) {
  e = e ? window.trayride.ad : window.botguard.bg;
  if ( d ) try {
    a.h = new e( b, c ? function () {
      return c( b )
    } : Ja )
  } catch ( f ) {
    qj( f )
  } else {
    try {
      a.h = new e( b )
    } catch ( f ) {
      qj( f )
    }
    c && c( b )
  }
}
Kj.prototype.dispose = function () {
  this.h = null
};
var Mj = new Kj;

function Nj() {
  return !!Mj.h
}

function Oj( a ) {
  a = void 0 === a ? {} : a;
  a = void 0 === a ? {} : a;
  return Mj.h ? Mj.h.hot ? Mj.h.hot( void 0, void 0, a ) : Mj.h.invoke( void 0, void 0, a ) : null
};
var Pj = {
  Xb: 29434,
  Zb: 3611,
  Me: 3854,
  eg: 42993,
  Ni: 4724,
  uj: 96370,
  sb: 27686,
  tb: 85013,
  ub: 23462,
  wb: 42016,
  xb: 62407,
  yb: 26926,
  vb: 43781,
  zb: 51236,
  Ab: 79148,
  Bb: 50160,
  Cb: 77504,
  Ob: 87907,
  Pb: 18630,
  Qb: 54445,
  Rb: 80935,
  Sb: 105675,
  Tb: 37521,
  Ub: 47786,
  Vb: 98349,
  Wb: 6827,
  Yb: 7282,
  dc: 32276,
  cc: 76278,
  ec: 93911,
  fc: 106531,
  hc: 27259,
  ic: 27262,
  jc: 27263,
  lc: 21759,
  mc: 27107,
  nc: 62936,
  oc: 49568,
  pc: 38408,
  qc: 80637,
  sc: 68727,
  tc: 68728,
  uc: 80353,
  wc: 80356,
  xc: 74610,
  yc: 45707,
  zc: 83962,
  Ac: 83970,
  Bc: 46713,
  Cc: 89711,
  Dc: 74612,
  Ec: 93265,
  Fc: 74611,
  Hc: 113533,
  Ic: 93252,
  Jc: 99357,
  Lc: 94521,
  Mc: 114252,
  Nc: 113532,
  Oc: 94522,
  Kc: 94583,
  Pc: 88E3,
  Qc: 93253,
  Rc: 93254,
  Sc: 94387,
  Tc: 94388,
  Uc: 93255,
  Vc: 97424,
  Gc: 72502,
  Wc: 110111,
  Xc: 76019,
  Zc: 117092,
  bd: 117093,
  Yc: 89431,
  cd: 110466,
  dd: 77240,
  ed: 60508,
  fd: 105350,
  gd: 73393,
  hd: 113534,
  jd: 92098,
  kd: 84517,
  ld: 83759,
  md: 80357,
  nd: 86113,
  od: 72598,
  pd: 72733,
  qd: 107349,
  rd: 118203,
  sd: 117431,
  td: 117429,
  ud: 117430,
  vd: 117432,
  wd: 120080,
  xd: 117259,
  yd: 97615,
  zd: 31402,
  Ad: 84774,
  Bd: 95117,
  Cd: 98930,
  Dd: 98931,
  Ed: 98932,
  Fd: 43347,
  Gd: 45474,
  Hd: 100352,
  Id: 84758,
  Jd: 98443,
  Kd: 117985,
  Ld: 74613,
  Md: 74614,
  Nd: 64502,
  Od: 74615,
  Pd: 74616,
  Qd: 74617,
  Rd: 77820,
  Sd: 74618,
  Td: 93278,
  Ud: 93274,
  Vd: 93275,
  Wd: 93276,
  Xd: 22110,
  Yd: 29433,
  ae: 120541,
  ce: 82047,
  de: 113550,
  ee: 75836,
  ge: 75837,
  he: 42352,
  ie: 84512,
  je: 76065,
  ke: 75989,
  le: 16623,
  me: 32594,
  ne: 27240,
  oe: 32633,
  pe: 74858,
  re: 3945,
  qe: 16989,
  se: 45520,
  te: 25488,
  ue: 25492,
  we: 25494,
  xe: 55760,
  ye: 14057,
  ze: 18451,
  Ae: 57204,
  Be: 57203,
  Ce: 17897,
  De: 57205,
  Ee: 18198,
  Fe: 17898,
  Ge: 17909,
  He: 43980,
  Ie: 46220,
  Je: 11721,
  Ke: 49954,
  Le: 96369,
  Ne: 56251,
  Oe: 25624,
  Pe: 16906,
  Qe: 99999,
  Re: 68172,
  Se: 27068,
  Te: 47973,
  Ue: 72773,
  Ve: 26970,
  We: 26971,
  Xe: 96805,
  Ye: 17752,
  Ze: 73233,
  af: 109512,
  bf: 22256,
  cf: 14115,
  df: 22696,
  ef: 89278,
  ff: 89277,
  gf: 109513,
  hf: 43278,
  jf: 43459,
  kf: 43464,
  lf: 89279,
  mf: 43717,
  nf: 55764,
  pf: 22255,
  qf: 89281,
  rf: 40963,
  sf: 43277,
  tf: 43442,
  uf: 91824,
  vf: 120137,
  wf: 96367,
  xf: 36850,
  yf: 72694,
  zf: 37414,
  Af: 36851,
  Bf: 73491,
  Cf: 54473,
  Df: 43375,
  Ef: 46674,
  Ff: 32473,
  Gf: 72901,
  Hf: 72906,
  If: 50947,
  Jf: 50612,
  Kf: 50613,
  Lf: 50942,
  Mf: 84938,
  Nf: 84943,
  Of: 84939,
  Pf: 84941,
  Qf: 84944,
  Rf: 84940,
  Sf: 84942,
  Tf: 35585,
  Uf: 51926,
  Vf: 79983,
  Wf: 63238,
  Xf: 18921,
  Yf: 63241,
  Zf: 57893,
  ag: 41182,
  cg: 33424,
  dg: 22207,
  fg: 36229,
  gg: 22206,
  hg: 22205,
  jg: 18993,
  kg: 19001,
  lg: 18990,
  mg: 18991,
  ng: 18997,
  og: 18725,
  pg: 19003,
  qg: 36874,
  rg: 44763,
  sg: 33427,
  tg: 67793,
  ug: 22182,
  vg: 37091,
  wg: 34650,
  xg: 50617,
  yg: 47261,
  zg: 22287,
  Ag: 25144,
  Bg: 97917,
  Cg: 62397,
  Dg: 36961,
  Eg: 108035,
  Fg: 27426,
  Gg: 27857,
  Hg: 27846,
  Ig: 27854,
  Jg: 69692,
  Kg: 61411,
  Lg: 39299,
  Mg: 38696,
  Ng: 62520,
  Og: 36382,
  Pg: 108701,
  Qg: 50663,
  Rg: 36387,
  Sg: 14908,
  Tg: 37533,
  Ug: 105443,
  Vg: 61635,
  Wg: 62274,
  Xg: 65702,
  Yg: 65703,
  Zg: 65701,
  ah: 76256,
  bh: 37671,
  dh: 49953,
  fh: 36216,
  gh: 28237,
  hh: 39553,
  ih: 29222,
  jh: 26107,
  kh: 38050,
  lh: 26108,
  nh: 120745,
  mh: 26109,
  oh: 26110,
  ph: 66881,
  qh: 28236,
  rh: 14586,
  sh: 57929,
  uh: 74723,
  vh: 44098,
  wh: 44099,
  xh: 23528,
  yh: 61699,
  zh: 59149,
  Ah: 101951,
  Bh: 97346,
  Ch: 118051,
  Dh: 95102,
  Eh: 64882,
  Fh: 119505,
  Gh: 63595,
  Hh: 63349,
  Ih: 95101,
  Jh: 75240,
  Kh: 27039,
  Lh: 68823,
  Mh: 21537,
  Nh: 83464,
  Oh: 75707,
  Ph: 83113,
  Qh: 101952,
  Rh: 101953,
  Th: 79610,
  Uh: 24402,
  Vh: 24400,
  Wh: 32925,
  Xh: 57173,
  Yh: 64423,
  Zh: 64424,
  ai: 33986,
  bi: 100828,
  ci: 21409,
  di: 11070,
  fi: 11074,
  gi: 17880,
  hi: 14001,
  ji: 30709,
  ki: 30707,
  li: 30711,
  mi: 30710,
  ni: 30708,
  ii: 26984,
  oi: 63648,
  ri: 63649,
  si: 51879,
  ti: 111059,
  vi: 5754,
  wi: 20445,
  xi: 110386,
  yi: 113746,
  zi: 66557,
  Ai: 17310,
  Bi: 28631,
  Ci: 21589,
  Di: 68012,
  Ei: 60480,
  Fi: 31571,
  Gi: 76980,
  Hi: 41577,
  Ii: 45469,
  Ji: 38669,
  Ki: 13768,
  Li: 13777,
  Mi: 62985,
  Oi: 59369,
  Pi: 43927,
  Qi: 43928,
  Ri: 12924,
  Si: 100355,
  Ui: 56219,
  Vi: 27669,
  Wi: 10337,
  Ti: 47896,
  Xi: 107598,
  Yi: 96639,
  Zi: 107536,
  aj: 96661,
  bj: 96658,
  cj: 116646,
  dj: 96660,
  ej: 104443,
  fj: 96659,
  gj: 106442,
  hj: 63667,
  ij: 63668,
  jj: 63669,
  kj: 78314,
  lj: 55761,
  mj: 96368,
  nj: 67374,
  oj: 48992,
  pj: 49956,
  qj: 31961,
  rj: 26388,
  sj: 23811,
  tj: 5E4,
  vj: 47355,
  wj: 47356,
  xj: 37935,
  yj: 45521,
  zj: 21760,
  Aj: 83769,
  Bj: 49977,
  Cj: 49974,
  Dj: 93497,
  Ej: 93498,
  Fj: 34325,
  Gj: 115803,
  Hj: 100081,
  Ij: 35309,
  Jj: 68314,
  Kj: 25602,
  Lj: 100339,
  Mj: 59018,
  Nj: 18248,
  Oj: 50625,
  Pj: 9729,
  Qj: 37168,
  Rj: 37169,
  Sj: 21667,
  Tj: 16749,
  Uj: 18635,
  Vj: 39305,
  Wj: 18046,
  Xj: 53969,
  Yj: 8213,
  Zj: 93926,
  ak: 102852,
  bk: 110099,
  ck: 22678,
  dk: 69076,
  fk: 100856,
  gk: 17736,
  hk: 3832,
  ik: 55759,
  jk: 64031,
  kk: 93044,
  lk: 93045,
  mk: 34388,
  nk: 17657,
  pk: 17655,
  qk: 39579,
  rk: 39578,
  sk: 77448,
  tk: 8196,
  uk: 11357,
  vk: 69877,
  wk: 8197,
  xk: 82039
};

function Qj( a, b, c ) {
  L.call( this );
  var d = this;
  c = c || H( "POST_MESSAGE_ORIGIN", void 0 ) || window.document.location.protocol + "//" + window.document.location.hostname;
  this.j = b || null;
  this.B = "*";
  this.l = c;
  this.sessionId = null;
  this.channel = "widget";
  this.G = !!a;
  this.u = function ( e ) {
    a: if ( !( "*" != d.l && e.origin != d.l || d.j && e.source != d.j || "string" !== typeof e.data ) ) {
      try {
        var f = JSON.parse( e.data )
      } catch ( g ) {
        break a
      }
      if ( !( null == f || d.G && ( d.sessionId && d.sessionId != f.id || d.channel && d.channel != f.channel ) ) && f ) switch ( f.event ) {
        case "listening":
          "null" !=
          e.origin && ( d.l = d.B = e.origin );
          d.j = e.source;
          d.sessionId = f.id;
          d.h && ( d.h(), d.h = null );
          break;
        case "command":
          d.m && ( !d.o || 0 <= Ya( d.o, f.func ) ) && d.m( f.func, f.args, e.origin )
      }
    }
  };
  this.o = this.h = this.m = null;
  window.addEventListener( "message", this.u )
}
v( Qj, L );
Qj.prototype.sendMessage = function ( a, b ) {
  var c = b || this.j;
  if ( c ) {
    this.sessionId && ( a.id = this.sessionId );
    this.channel && ( a.channel = this.channel );
    try {
      var d = JSON.stringify( a );
      c.postMessage( d, this.B )
    } catch ( e ) {
      Af( e )
    }
  }
};
Qj.prototype.A = function () {
  window.removeEventListener( "message", this.u );
  L.prototype.A.call( this )
};

function Rj() {
  var a = this.i = new Qj( !!H( "WIDGET_ID_ENFORCE" ) ),
    b = C( this.hb, this );
  a.m = b;
  a.o = null;
  this.i.channel = "widget";
  if ( a = H( "WIDGET_ID" ) ) this.i.sessionId = a;
  this.l = [];
  this.m = !1;
  this.o = {}
}
m = Rj.prototype;
m.hb = function ( a, b, c ) {
  "addEventListener" == a && b ? ( a = b[ 0 ], this.o[ a ] || "onReady" == a || ( this.addEventListener( a, Sj( this, a ) ), this.o[ a ] = !0 ) ) : this.ta( a, b, c )
};
m.ta = function () {};

function Sj( a, b ) {
  return C( function ( c ) {
    this.sendMessage( b, c )
  }, a )
}
m.addEventListener = function () {};
m.Ma = function () {
  this.m = !0;
  this.sendMessage( "initialDelivery", this.oa() );
  this.sendMessage( "onReady" );
  G( this.l, this.Ea, this );
  this.l = []
};
m.oa = function () {
  return null
};

function Tj( a, b ) {
  a.sendMessage( "infoDelivery", b )
}
m.Ea = function ( a ) {
  this.m ? this.i.sendMessage( a ) : this.l.push( a )
};
m.sendMessage = function ( a, b ) {
  this.Ea( {
    event: a,
    info: void 0 == b ? null : b
  } )
};
m.dispose = function () {
  this.i = null
};

function Uj( a ) {
  return ( 0 === a.search( "cue" ) || 0 === a.search( "load" ) ) && "loadModule" !== a
}

function Vj( a, b, c ) {
  "string" === typeof a && ( a = {
    mediaContentUrl: a,
    startSeconds: b,
    suggestedQuality: c
  } );
  a: {
    if ( ( b = a.mediaContentUrl ) && ( b = /\/([ve]|embed)\/([^#?]+)/.exec( b ) ) && b[ 2 ] ) {
      b = b[ 2 ];
      break a
    }
    b = null
  }
  a.videoId = b;
  return Wj( a )
}

function Wj( a, b, c ) {
  if ( "string" === typeof a ) return {
    videoId: a,
    startSeconds: b,
    suggestedQuality: c
  };
  b = [ "endSeconds", "startSeconds", "mediaContentUrl", "suggestedQuality", "videoId" ];
  c = {};
  for ( var d = 0; d < b.length; d++ ) {
    var e = b[ d ];
    a[ e ] && ( c[ e ] = a[ e ] )
  }
  return c
}

function Xj( a, b, c, d ) {
  if ( B( a ) && !Array.isArray( a ) ) {
    b = "playlist list listType index startSeconds suggestedQuality".split( " " );
    c = {};
    for ( d = 0; d < b.length; d++ ) {
      var e = b[ d ];
      a[ e ] && ( c[ e ] = a[ e ] )
    }
    return c
  }
  b = {
    index: b,
    startSeconds: c,
    suggestedQuality: d
  };
  "string" === typeof a && 16 === a.length ? b.list = "PL" + a : b.playlist = a;
  return b
};

function Yj( a ) {
  Rj.call( this );
  this.h = a;
  this.j = [];
  this.addEventListener( "onReady", C( this.eb, this ) );
  this.addEventListener( "onVideoProgress", C( this.ob, this ) );
  this.addEventListener( "onVolumeChange", C( this.pb, this ) );
  this.addEventListener( "onApiChange", C( this.jb, this ) );
  this.addEventListener( "onPlaybackQualityChange", C( this.lb, this ) );
  this.addEventListener( "onPlaybackRateChange", C( this.mb, this ) );
  this.addEventListener( "onStateChange", C( this.nb, this ) );
  this.addEventListener( "onWebglSettingsChanged", C( this.qb,
    this ) )
}
v( Yj, Rj );
m = Yj.prototype;
m.ta = function ( a, b, c ) {
  if ( this.h.isExternalMethodAvailable( a, c ) ) {
    b = b || [];
    if ( 0 < b.length && Uj( a ) ) {
      var d = b;
      if ( B( d[ 0 ] ) && !Array.isArray( d[ 0 ] ) ) d = d[ 0 ];
      else {
        var e = {};
        switch ( a ) {
          case "loadVideoById":
          case "cueVideoById":
            e = Wj.apply( window, d );
            break;
          case "loadVideoByUrl":
          case "cueVideoByUrl":
            e = Vj.apply( window, d );
            break;
          case "loadPlaylist":
          case "cuePlaylist":
            e = Xj.apply( window, d )
        }
        d = e
      }
      b.length = 1;
      b[ 0 ] = d
    }
    this.h.handleExternalCall( a, b, c );
    Uj( a ) && Tj( this, this.oa() )
  }
};
m.eb = function () {
  var a = C( this.Ma, this );
  this.i.h = a
};
m.addEventListener = function ( a, b ) {
  this.j.push( {
    eventType: a,
    listener: b
  } );
  this.h.addEventListener( a, b )
};
m.oa = function () {
  if ( !this.h ) return null;
  var a = this.h.getApiInterface();
  cb( a, "getVideoData" );
  for ( var b = {
      apiInterface: a
    }, c = 0, d = a.length; c < d; c++ ) {
    var e = a[ c ];
    if ( 0 === e.search( "get" ) || 0 === e.search( "is" ) ) {
      var f = 0;
      0 === e.search( "get" ) ? f = 3 : 0 === e.search( "is" ) && ( f = 2 );
      f = e.charAt( f ).toLowerCase() + e.substr( f + 1 );
      try {
        var g = this.h[ e ]();
        b[ f ] = g
      } catch ( h ) {}
    }
  }
  b.videoData = this.h.getVideoData();
  b.currentTimeLastUpdated_ = E() / 1E3;
  return b
};
m.nb = function ( a ) {
  a = {
    playerState: a,
    currentTime: this.h.getCurrentTime(),
    duration: this.h.getDuration(),
    videoData: this.h.getVideoData(),
    videoStartBytes: 0,
    videoBytesTotal: this.h.getVideoBytesTotal(),
    videoLoadedFraction: this.h.getVideoLoadedFraction(),
    playbackQuality: this.h.getPlaybackQuality(),
    availableQualityLevels: this.h.getAvailableQualityLevels(),
    currentTimeLastUpdated_: E() / 1E3,
    playbackRate: this.h.getPlaybackRate(),
    mediaReferenceTime: this.h.getMediaReferenceTime()
  };
  this.h.getVideoUrl && ( a.videoUrl =
    this.h.getVideoUrl() );
  this.h.getVideoContentRect && ( a.videoContentRect = this.h.getVideoContentRect() );
  this.h.getProgressState && ( a.progressState = this.h.getProgressState() );
  this.h.getPlaylist && ( a.playlist = this.h.getPlaylist() );
  this.h.getPlaylistIndex && ( a.playlistIndex = this.h.getPlaylistIndex() );
  this.h.getStoryboardFormat && ( a.storyboardFormat = this.h.getStoryboardFormat() );
  Tj( this, a )
};
m.lb = function ( a ) {
  Tj( this, {
    playbackQuality: a
  } )
};
m.mb = function ( a ) {
  Tj( this, {
    playbackRate: a
  } )
};
m.jb = function () {
  for ( var a = this.h.getOptions(), b = {
      namespaces: a
    }, c = 0, d = a.length; c < d; c++ ) {
    var e = a[ c ],
      f = this.h.getOptions( e );
    b[ e ] = {
      options: f
    };
    for ( var g = 0, h = f.length; g < h; g++ ) {
      var k = f[ g ],
        l = this.h.getOption( e, k );
      b[ e ][ k ] = l
    }
  }
  this.sendMessage( "apiInfoDelivery", b )
};
m.pb = function () {
  Tj( this, {
    muted: this.h.isMuted(),
    volume: this.h.getVolume()
  } )
};
m.ob = function ( a ) {
  a = {
    currentTime: a,
    videoBytesLoaded: this.h.getVideoBytesLoaded(),
    videoLoadedFraction: this.h.getVideoLoadedFraction(),
    currentTimeLastUpdated_: E() / 1E3,
    playbackRate: this.h.getPlaybackRate(),
    mediaReferenceTime: this.h.getMediaReferenceTime()
  };
  this.h.getProgressState && ( a.progressState = this.h.getProgressState() );
  Tj( this, a )
};
m.qb = function () {
  var a = {
    sphericalProperties: this.h.getSphericalProperties()
  };
  Tj( this, a )
};
m.dispose = function () {
  Rj.prototype.dispose.call( this );
  for ( var a = 0; a < this.j.length; a++ ) {
    var b = this.j[ a ];
    this.h.removeEventListener( b.eventType, b.listener )
  }
  this.j = []
};

function Zj( a ) {
  a = void 0 === a ? !1 : a;
  L.call( this );
  this.h = new N( a );
  Pd( this, Sa( Nd, this.h ) )
}
F( Zj, L );
Zj.prototype.subscribe = function ( a, b, c ) {
  return this.i ? 0 : this.h.subscribe( a, b, c )
};
Zj.prototype.l = function ( a, b ) {
  this.i || this.h.O.apply( this.h, arguments )
};

function ak( a, b, c ) {
  Zj.call( this );
  this.j = a;
  this.destination = b;
  this.id = c
}
v( ak, Zj );
ak.prototype.P = function ( a, b ) {
  this.i || this.j.P( this.destination, this.id, a, b )
};
ak.prototype.A = function () {
  this.destination = this.j = null;
  Zj.prototype.A.call( this )
};

function bk( a, b, c ) {
  L.call( this );
  this.h = a;
  this.l = c;
  this.o = Mf( window, "message", C( this.m, this ) );
  this.j = new ak( this, a, b );
  Pd( this, Sa( Nd, this.j ) )
}
v( bk, L );
bk.prototype.P = function ( a, b, c, d ) {
  this.i || a != this.h || ( a = {
    id: b,
    command: c
  }, d && ( a.data = d ), this.h.postMessage( Fe( a ), this.l ) )
};
bk.prototype.m = function ( a ) {
  var b;
  if ( b = !this.i )
    if ( b = a.origin == this.l ) a: {
      b = this.h;do {
        b: {
          var c = a.source;do {
            if ( c == b ) {
              c = !0;
              break b
            }
            if ( c == c.parent ) break;
            c = c.parent
          } while ( null != c );c = !1
        }
        if ( c ) {
          b = !0;
          break a
        }
        b = b.opener
      } while ( null != b );b = !1
    }
  if ( b && ( b = a.data, "string" === typeof b ) ) {
    try {
      b = JSON.parse( b )
    } catch ( d ) {
      return
    }
    b.command && ( c = this.j, c.i || c.l( "command", b.command, b.data, a.origin ) )
  }
};
bk.prototype.A = function () {
  Nf( this.o );
  this.h = null;
  L.prototype.A.call( this )
};

function ck() {
  var a = mb( dk ),
    b;
  return Se( new M( function ( c, d ) {
    a.onSuccess = function ( e ) {
      pg( e ) ? c( e ) : d( new ek( "Request failed, status=" + ( e && "status" in e ? e.status : -1 ), "net.badstatus", e ) )
    };
    a.onError = function ( e ) {
      d( new ek( "Unknown request error", "net.unknown", e ) )
    };
    a.onTimeout = function ( e ) {
      d( new ek( "Request timed out", "net.timeout", e ) )
    };
    b = yg( "//googleads.g.doubleclick.net/pagead/id", a )
  } ), function ( c ) {
    c instanceof Te && b.abort();
    return Qe( c )
  } )
}

function ek( a, b, c ) {
  Va.call( this, a + ", errorCode=" + b );
  this.errorCode = b;
  this.xhr = c;
  this.name = "PromiseAjaxError"
}
v( ek, Va );

function fk() {
  this.i = 0;
  this.h = null
}
fk.prototype.then = function ( a, b, c ) {
  return 1 === this.i && a ? ( a = a.call( c, this.h ), Le( a ) ? a : gk( a ) ) : 2 === this.i && b ? ( a = b.call( c, this.h ), Le( a ) ? a : hk( a ) ) : this
};
fk.prototype.getValue = function () {
  return this.h
};
fk.prototype.$goog_Thenable = !0;

function hk( a ) {
  var b = new fk;
  a = void 0 === a ? null : a;
  b.i = 2;
  b.h = void 0 === a ? null : a;
  return b
}

function gk( a ) {
  var b = new fk;
  a = void 0 === a ? null : a;
  b.i = 1;
  b.h = void 0 === a ? null : a;
  return b
};

function ik( a ) {
  Va.call( this, a.message || a.description || a.name );
  this.isMissing = a instanceof jk;
  this.isTimeout = a instanceof ek && "net.timeout" == a.errorCode;
  this.isCanceled = a instanceof Te
}
v( ik, Va );
ik.prototype.name = "BiscottiError";

function jk() {
  Va.call( this, "Biscotti ID is missing from server" )
}
v( jk, Va );
jk.prototype.name = "BiscottiMissingError";
var dk = {
    format: "RAW",
    method: "GET",
    timeout: 5E3,
    withCredentials: !0
  },
  kk = null;

function bg() {
  if ( P( "disable_biscotti_fetch_on_html5_clients" ) ) return Qe( Error( "Fetching biscotti ID is disabled." ) );
  if ( P( "condition_biscotti_fetch_on_consent_cookie_html5_clients" ) && !jd.get( "CONSENT", "" ).startsWith( "YES+" ) ) return Qe( Error( "User has not consented - not fetching biscotti id." ) );
  if ( "1" == kb() ) return Qe( Error( "Biscotti ID is not available in private embed mode" ) );
  kk || ( kk = Se( ck().then( lk ), function ( a ) {
    return mk( 2, a )
  } ) );
  return kk
}

function lk( a ) {
  a = a.responseText;
  if ( 0 != a.lastIndexOf( ")]}'", 0 ) ) throw new jk;
  a = JSON.parse( a.substr( 4 ) );
  if ( 1 < ( a.type || 1 ) ) throw new jk;
  a = a.id;
  cg( a );
  kk = gk( a );
  nk( 18E5, 2 );
  return a
}

function mk( a, b ) {
  var c = new ik( b );
  cg( "" );
  kk = hk( c );
  0 < a && nk( 12E4, a - 1 );
  throw c;
}

function nk( a, b ) {
  Q( function () {
    Se( ck().then( lk, function ( c ) {
      return mk( b, c )
    } ), Ja )
  }, a )
}

function ok() {
  try {
    var a = A( "yt.ads.biscotti.getId_" );
    return a ? a() : bg()
  } catch ( b ) {
    return Qe( b )
  }
};

function pk( a ) {
  if ( "1" != kb() ) {
    a && ag();
    try {
      ok().then( function () {}, function () {} ), Q( pk, 18E5 )
    } catch ( b ) {
      zf( b )
    }
  }
};
var qk = E().toString();

function rk() {
  a: {
    if ( window.crypto && window.crypto.getRandomValues ) try {
      var a = Array( 16 ),
        b = new Uint8Array( 16 );
      window.crypto.getRandomValues( b );
      for ( var c = 0; c < a.length; c++ ) a[ c ] = b[ c ];
      var d = a;
      break a
    } catch ( e ) {}
    d = Array( 16 );
    for ( a = 0; 16 > a; a++ ) {
      b = E();
      for ( c = 0; c < b % 23; c++ ) d[ a ] = Math.random();
      d[ a ] = Math.floor( 256 * Math.random() )
    }
    if ( qk )
      for ( a = 1, b = 0; b < qk.length; b++ ) d[ a % 16 ] = d[ a % 16 ] ^ d[ ( a - 1 ) % 16 ] / 4 ^ qk.charCodeAt( b ), a++
  }
  a = [];
  for ( b = 0; b < d.length; b++ ) a.push( "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt( d[ b ] & 63 ) );
  return a.join( "" )
};
var sk = w.ytLoggingDocDocumentNonce_ || rk();
x( "ytLoggingDocDocumentNonce_", sk, void 0 );
var tk = {
  Zd: 0,
  ac: 1,
  kc: 2,
  eh: 3,
  be: 4,
  ek: 5,
  Sh: 6,
  0: "DEFAULT",
  1: "CHAT",
  2: "CONVERSATIONS",
  3: "MINIPLAYER",
  4: "DIALOG",
  5: "VOZ",
  6: "MUSIC_WATCH_TABS"
};

function uk( a ) {
  this.h = a
}

function vk( a ) {
  return new uk( {
    trackingParams: a
  } )
}
uk.prototype.getAsJson = function () {
  var a = {};
  void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : ( a.veType = this.h.veType, void 0 !== this.h.veCounter && ( a.veCounter = this.h.veCounter ), void 0 !== this.h.elementIndex && ( a.elementIndex = this.h.elementIndex ) );
  void 0 !== this.h.dataElement && ( a.dataElement = this.h.dataElement.getAsJson() );
  void 0 !== this.h.youtubeData && ( a.youtubeData = this.h.youtubeData );
  return a
};
uk.prototype.toString = function () {
  return JSON.stringify( this.getAsJson() )
};
uk.prototype.isClientVe = function () {
  return !this.h.trackingParams && !!this.h.veType
};

function wk( a ) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a
}

function xk( a ) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
}

function yk( a ) {
  return H( xk( void 0 === a ? 0 : a ), void 0 )
}
x( "yt_logging_screen.getRootVeType", yk, void 0 );

function zk( a ) {
  return ( a = yk( void 0 === a ? 0 : a ) ) ? new uk( {
    veType: a,
    youtubeData: void 0
  } ) : null
}

function Ak() {
  var a = H( "csn-to-ctt-auth-info" );
  a || ( a = {}, O( "csn-to-ctt-auth-info", a ) );
  return a
}

function Bk( a ) {
  a = void 0 === a ? 0 : a;
  var b = H( wk( a ) );
  if ( !b && !H( "USE_CSN_FALLBACK", !0 ) ) return null;
  b || 0 != a || ( b = "UNDEFINED_CSN" );
  return b ? b : null
}
x( "yt_logging_screen.getCurrentCsn", Bk, void 0 );

function Ck( a, b, c ) {
  var d = Ak();
  ( c = Bk( c ) ) && delete d[ c ];
  b && ( d[ a ] = b )
}

function Dk( a ) {
  return Ak()[ a ]
}
x( "yt_logging_screen.getCttAuthInfo", Dk, void 0 );

function Ek( a, b, c, d ) {
  c = void 0 === c ? 0 : c;
  if ( a !== H( wk( c ) ) || b !== H( xk( c ) ) ) Ck( a, d, c ), O( wk( c ), a ), O( xk( c ), b ), b = function () {
    setTimeout( function () {
      a && th( "foregroundHeartbeatScreenAssociated", {
        clientDocumentNonce: sk,
        clientScreenNonce: a
      }, $i )
    }, 0 )
  }, "requestAnimationFrame" in window ? window.requestAnimationFrame( b ) : b()
}
x( "yt_logging_screen.setCurrentScreen", Ek, void 0 );

function Fk( a ) {
  Jh.call( this, 1, arguments );
  this.csn = a
}
v( Fk, Jh );
var Sh = new Kh( "screen-created", Fk ),
  Gk = [],
  Ik = Hk,
  Jk = 0;

function Kk( a, b, c, d ) {
  c = {
    csn: b,
    parentVe: c.getAsJson(),
    childVes: $a( d, function ( f ) {
      return f.getAsJson()
    } )
  };
  d = u( d );
  for ( var e = d.next(); !e.done; e = d.next() ) e = e.value.getAsJson(), ( ib( e ) || !e.trackingParams && !e.veType ) && qj( Error( "Child VE logged with no data" ) );
  d = {
    C: Dk( b ),
    M: b
  };
  "UNDEFINED_CSN" == b ? Lk( "visualElementAttached", c, d ) : a ? th( "visualElementAttached", c, a, d ) : X( "visualElementAttached", c, d )
}

function Hk() {
  for ( var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++ ) {
    var e = a.charCodeAt( d );
    255 < e && ( b[ c++ ] = e & 255, e >>= 8 );
    b[ c++ ] = e
  }
  return zc( b )
}

function Lk( a, b, c ) {
  Gk.push( {
    payloadName: a,
    payload: b,
    options: c
  } );
  Jk || ( Jk = Th() )
}

function Uh( a ) {
  if ( Gk ) {
    for ( var b = u( Gk ), c = b.next(); !c.done; c = b.next() ) c = c.value, c.payload && ( c.payload.csn = a.csn, th( c.payloadName, c.payload, null, c.options ) );
    Gk.length = 0
  }
  Jk = 0
};

function Mk() {
  this.i = new Set;
  this.h = new Set;
  this.j = new Map
}
Mk.prototype.clear = function () {
  this.i.clear();
  this.h.clear();
  this.j.clear()
};
Ka( Mk );

function Nk( a, b ) {
  for ( var c = [], d = 1; d < arguments.length; ++d ) c[ d - 1 ] = arguments[ d ];
  if ( !Ok( a ) || c.some( function ( e ) {
      return !Ok( e )
    } ) ) throw Error( "Only objects may be merged." );
  c = u( c );
  for ( d = c.next(); !d.done; d = c.next() ) Pk( a, d.value );
  return a
}

function Pk( a, b ) {
  for ( var c in b )
    if ( Ok( b[ c ] ) ) {
      if ( c in a && !Ok( a[ c ] ) ) throw Error( "Cannot merge an object into a non-object." );
      c in a || ( a[ c ] = {} );
      Pk( a[ c ], b[ c ] )
    } else if ( Qk( b[ c ] ) ) {
    if ( c in a && !Qk( a[ c ] ) ) throw Error( "Cannot merge an array into a non-array." );
    c in a || ( a[ c ] = [] );
    Rk( a[ c ], b[ c ] )
  } else a[ c ] = b[ c ];
  return a
}

function Rk( a, b ) {
  for ( var c = u( b ), d = c.next(); !d.done; d = c.next() ) d = d.value, Ok( d ) ? a.push( Pk( {}, d ) ) : Qk( d ) ? a.push( Rk( [], d ) ) : a.push( d );
  return a
}

function Ok( a ) {
  return "object" === typeof a && !Array.isArray( a )
}

function Qk( a ) {
  return "object" === typeof a && Array.isArray( a )
};

function Sk( a, b ) {
  Jh.call( this, 1, arguments )
}
v( Sk, Jh );

function Tk( a, b ) {
  Jh.call( this, 1, arguments )
}
v( Tk, Jh );
var Uk = new Kh( "aft-recorded", Sk ),
  Vk = new Kh( "timing-sent", Tk );
var Wk = window;

function Xk() {
  this.timing = {};
  this.clearResourceTimings = function () {};
  this.webkitClearResourceTimings = function () {};
  this.mozClearResourceTimings = function () {};
  this.msClearResourceTimings = function () {};
  this.oClearResourceTimings = function () {}
}
var Yk = Wk.performance || Wk.mozPerformance || Wk.msPerformance || Wk.webkitPerformance || new Xk;
var Zk = !1;
C( Yk.clearResourceTimings || Yk.webkitClearResourceTimings || Yk.mozClearResourceTimings || Yk.msClearResourceTimings || Yk.oClearResourceTimings || Ja, Yk );

function $k( a ) {
  var b = al( a );
  if ( b.aft ) return b.aft;
  a = H( ( a || "" ) + "TIMING_AFT_KEYS", [ "ol" ] );
  for ( var c = a.length, d = 0; d < c; d++ ) {
    var e = b[ a[ d ] ];
    if ( e ) return e
  }
  return NaN
}

function bl( a ) {
  var b;
  ( b = A( "ytcsi." + ( a || "" ) + "data_" ) ) || ( b = {
    tick: {},
    info: {}
  }, Ta( "ytcsi." + ( a || "" ) + "data_", b ) );
  return b
}

function cl( a ) {
  a = bl( a );
  a.info || ( a.info = {} );
  return a.info
}

function al( a ) {
  a = bl( a );
  a.tick || ( a.tick = {} );
  return a.tick
}

function dl( a ) {
  var b = bl( a ).nonce;
  b || ( b = rk(), bl( a ).nonce = b );
  return b
}

function el( a ) {
  var b = al( a || "" ),
    c = $k( a );
  c && !Zk && ( Ph( Uk, new Sk( Math.round( c - b._start ), a ) ), Zk = !0 )
};

function fl() {
  var a = A( "ytcsi.debug" );
  a || ( a = [], x( "ytcsi.debug", a, void 0 ), x( "ytcsi.reference", {}, void 0 ) );
  return a
}

function gl( a ) {
  a = a || "";
  var b = A( "ytcsi.reference" );
  b || ( fl(), b = A( "ytcsi.reference" ) );
  if ( b[ a ] ) return b[ a ];
  var c = fl(),
    d = {
      timerName: a,
      info: {},
      tick: {},
      span: {}
    };
  c.push( d );
  return b[ a ] = d
};
var hl = w.ytLoggingLatencyUsageStats_ || {};
x( "ytLoggingLatencyUsageStats_", hl, void 0 );

function il() {
  this.h = 0
}

function jl() {
  il.h || ( il.h = new il );
  return il.h
}
il.prototype.tick = function ( a, b, c ) {
  kl( this, "tick_" + a + "_" + b ) || X( "latencyActionTicked", {
    tickName: a,
    clientActionNonce: b
  }, {
    timestamp: c
  } )
};
il.prototype.info = function ( a, b ) {
  var c = Object.keys( a ).join( "" );
  kl( this, "info_" + c + "_" + b ) || ( c = Object.assign( {}, a ), c.clientActionNonce = b, X( "latencyActionInfo", c ) )
};
il.prototype.span = function ( a, b ) {
  var c = Object.keys( a ).join( "" );
  kl( this, "span_" + c + "_" + b ) || ( a.clientActionNonce = b, X( "latencyActionSpan", a ) )
};

function kl( a, b ) {
  hl[ b ] = hl[ b ] || {
    count: 0
  };
  var c = hl[ b ];
  c.count++;
  c.time = R();
  a.h || ( a.h = Tf( function () {
    var d = R(),
      e;
    for ( e in hl ) hl[ e ] && 6E4 < d - hl[ e ].time && delete hl[ e ];
    a && ( a.h = 0 )
  }, 0, 5E3 ) );
  return 5 < c.count ? ( 6 === c.count && 1 > 1E5 * Math.random() && ( c = new T( "CSI data exceeded logging limit with key", b.split( "_" ) ), 0 <= b.indexOf( "plev" ) || qj( c ) ), !0 ) : !1
};
var Y = {},
  ll = ( Y.ad_allowed = "adTypesAllowed", Y.yt_abt = "adBreakType", Y.ad_cpn = "adClientPlaybackNonce", Y.ad_docid = "adVideoId", Y.yt_ad_an = "adNetworks", Y.ad_at = "adType", Y.aida = "appInstallDataAgeMs", Y.browse_id = "browseId", Y.p = "httpProtocol", Y.t = "transportProtocol", Y.cpn = "clientPlaybackNonce", Y.ccs = "creatorInfo.creatorCanaryState", Y.csn = "clientScreenNonce", Y.docid = "videoId", Y.GetHome_rid = "requestIds", Y.GetSearch_rid = "requestIds", Y.GetPlayer_rid = "requestIds", Y.GetWatchNext_rid = "requestIds", Y.GetBrowse_rid =
    "requestIds", Y.GetLibrary_rid = "requestIds", Y.is_continuation = "isContinuation", Y.is_nav = "isNavigation", Y.b_p = "kabukiInfo.browseParams", Y.is_prefetch = "kabukiInfo.isPrefetch", Y.is_secondary_nav = "kabukiInfo.isSecondaryNav", Y.prev_browse_id = "kabukiInfo.prevBrowseId", Y.query_source = "kabukiInfo.querySource", Y.voz_type = "kabukiInfo.vozType", Y.yt_lt = "loadType", Y.mver = "creatorInfo.measurementVersion", Y.yt_ad = "isMonetized", Y.nr = "webInfo.navigationReason", Y.nrsu = "navigationRequestedSameUrl", Y.ncnp = "webInfo.nonPreloadedNodeCount",
    Y.pnt = "performanceNavigationTiming", Y.prt = "playbackRequiresTap", Y.plt = "playerInfo.playbackType", Y.pis = "playerInfo.playerInitializedState", Y.paused = "playerInfo.isPausedOnLoad", Y.yt_pt = "playerType", Y.fmt = "playerInfo.itag", Y.yt_pl = "watchInfo.isPlaylist", Y.yt_pre = "playerInfo.preloadType", Y.yt_ad_pr = "prerollAllowed", Y.pa = "previousAction", Y.yt_red = "isRedSubscriber", Y.rce = "mwebInfo.responseContentEncoding", Y.scrh = "screenHeight", Y.scrw = "screenWidth", Y.st = "serverTimeMs", Y.ssdm = "shellStartupDurationMs", Y.br_trs =
    "tvInfo.bedrockTriggerState", Y.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", Y.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", Y.label = "tvInfo.label", Y.is_mdx = "tvInfo.isMdx", Y.preloaded = "tvInfo.isPreloaded", Y.upg_player_vis = "playerInfo.visibilityState", Y.query = "unpluggedInfo.query", Y.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", Y.yt_vst = "videoStreamType", Y.vph = "viewportHeight", Y.vpw = "viewportWidth", Y.yt_vis = "isVisible", Y.rcl = "mwebInfo.responseContentLength", Y.GetSettings_rid =
    "requestIds", Y.GetTrending_rid = "requestIds", Y.GetMusicSearchSuggestions_rid = "requestIds", Y.REQUEST_ID = "requestIds", Y ),
  ml = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split( " " ),
  nl = {},
  ol = ( nl.ccs = "CANARY_STATE_", nl.mver = "MEASUREMENT_VERSION_",
    nl.pis = "PLAYER_INITIALIZED_STATE_", nl.yt_pt = "LATENCY_PLAYER_", nl.pa = "LATENCY_ACTION_", nl.yt_vst = "VIDEO_STREAM_TYPE_", nl ),
  pl = "all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split( " " );

function ql( a ) {
  return !!H( "FORCE_CSI_ON_GEL", !1 ) || P( "csi_on_gel" ) || !!bl( a ).useGel
}

function rl( a ) {
  a = bl( a );
  if ( a.gel ) {
    var b = a.gel;
    b.gelInfos || ( b.gelInfos = {} );
    b.gelTicks || ( b.gelTicks = {} )
  } else a.gel = {
    gelTicks: {},
    gelInfos: {}
  };
  return a.gel
};

function sl( a, b, c ) {
  if ( null !== b )
    if ( cl( c )[ a ] = b, ql( c ) ) {
      var d = b;
      b = rl( c );
      if ( b.gelInfos ) b.gelInfos[ "info_" + a ] = !0;
      else {
        var e = {};
        b.gelInfos = ( e[ "info_" + a ] = !0, e )
      }
      if ( a.match( "_rid" ) ) {
        var f = a.split( "_rid" )[ 0 ];
        a = "REQUEST_ID"
      }
      if ( a in ll ) {
        b = ll[ a ];
        0 <= Ya( ml, b ) && ( d = !!d );
        a in ol && "string" === typeof d && ( d = ol[ a ] + d.toUpperCase() );
        a = d;
        d = b.split( "." );
        for ( var g = e = {}, h = 0; h < d.length - 1; h++ ) {
          var k = d[ h ];
          g[ k ] = {};
          g = g[ k ]
        }
        g[ d[ d.length - 1 ] ] = "requestIds" === b ? [ {
          id: a,
          endpoint: f
        } ] : a;
        f = Nk( {}, e )
      } else 0 <= Ya( pl, a ) || qj( new T( "Unknown label logged with GEL CSI",
        a ) ), f = void 0;
      f && ql( c ) && ( b = gl( c || "" ), Nk( b.info, f ), b = rl( c ), b.gelInfos || ( b.gelInfos = {} ), Nk( b.gelInfos, f ), c = dl( c ), jl().info( f, c ) )
    } else gl( c || "" ).info[ a ] = b
}

function tl( a, b, c ) {
  var d = al( c );
  if ( P( "use_first_tick" ) && ul( a, c ) ) return d[ a ];
  if ( !b && "_" !== a[ 0 ] ) {
    var e = a;
    Yk.mark && ( 0 == e.lastIndexOf( "mark_", 0 ) || ( e = "mark_" + e ), c && ( e += " (" + c + ")" ), Yk.mark( e ) )
  }
  e = b || R();
  d[ a ] = e;
  e = rl( c );
  e.gelTicks && ( e.gelTicks[ "tick_" + a ] = !0 );
  c || b || R();
  if ( ql( c ) ) {
    gl( c || "" ).tick[ a ] = b || R();
    e = dl( c );
    if ( "_start" === a ) {
      var f = jl();
      kl( f, "baseline_" + e ) || X( "latencyActionBaselined", {
        clientActionNonce: e
      }, {
        timestamp: b
      } )
    } else jl().tick( a, e, b );
    el( c );
    e = !0
  } else e = !1;
  if ( !e ) {
    if ( !A( "yt.timing." + ( c || "" ) + "pingSent_" ) &&
      ( f = H( ( c || "" ) + "TIMING_ACTION", void 0 ), e = al( c ), A( "ytglobal.timing" + ( c || "" ) + "ready_" ) && f && ul( "_start" ) && $k( c ) ) )
      if ( el( c ), c ) vl( c );
      else {
        f = !0;
        var g = H( "TIMING_WAIT", [] );
        if ( g.length )
          for ( var h = 0, k = g.length; h < k; ++h )
            if ( !( g[ h ] in e ) ) {
              f = !1;
              break
            } f && vl( c )
      } gl( c || "" ).tick[ a ] = b || R()
  }
  return d[ a ]
}

function ul( a, b ) {
  var c = al( b );
  return a in c
}

function vl( a ) {
  if ( !ql( a ) ) {
    var b = al( a ),
      c = cl( a ),
      d = b._start,
      e = H( "CSI_SERVICE_NAME", "youtube" ),
      f = {
        v: 2,
        s: e,
        action: H( ( a || "" ) + "TIMING_ACTION", void 0 )
      },
      g = c.srt;
    void 0 !== b.srt && delete c.srt;
    b.aft = $k( a );
    var h = al( a ),
      k = h.pbr,
      l = h.vc;
    h = h.pbs;
    k && l && h && k < l && l < h && cl( a ).yt_pvis && "youtube" === e && ( sl( "yt_lt", "hot_bg", a ), e = b.vc, k = b.pbs, delete b.aft, c.aft = Math.round( k - e ) );
    for ( var n in c ) "_" !== n.charAt( 0 ) && ( f[ n ] = c[ n ] );
    b.ps = R();
    n = {};
    e = [];
    for ( var p in b ) "_" !== p.charAt( 0 ) && ( k = Math.round( b[ p ] - d ), n[ p ] = k, e.push( p + "." + k ) );
    f.rt =
      e.join( "," );
    b = !!c.ap;
    c = "";
    for ( var q in f ) f.hasOwnProperty( q ) && ( c += "&" + q + "=" + f[ q ] );
    f = "/csi_204?" + c.substring( 1 );
    window.navigator && window.navigator.sendBeacon && ( b || P( "always_send_csi_204_with_beacon" ) ) ? Lg( f ) : Ig( f );
    x( "yt.timing." + ( a || "" ) + "pingSent_", !0, void 0 );
    Ph( Vk, new Tk( n.aft + ( Number( g ) || 0 ), a ) )
  }
}
var wl = window;
wl.ytcsi && ( wl.ytcsi.info = sl, wl.ytcsi.tick = tl );

function xl() {
  this.l = [];
  this.m = [];
  this.h = [];
  this.i = new Set;
  this.o = new Map
}

function yl( a, b, c ) {
  c = void 0 === c ? 0 : c;
  b.then( function ( d ) {
    var e, f;
    a.i.has( c ) && a.j && a.j();
    var g = Bk( c ),
      h = zk( c );
    g && h && ( d.csn = g, ( null === ( e = d.response ) || void 0 === e ? 0 : e.trackingParams ) && Kk( a.client, g, h, [ vk( d.response.trackingParams ) ] ), ( null === ( f = d.playerResponse ) || void 0 === f ? 0 : f.trackingParams ) && Kk( a.client, g, h, [ vk( d.playerResponse.trackingParams ) ] ) )
  } )
}

function zl( a, b, c, d ) {
  d = void 0 === d ? 0 : d;
  if ( a.i.has( d ) ) a.l.push( [ b, c ] );
  else {
    var e = Bk( d );
    c = c || zk( d );
    e && c && Kk( a.client, e, c, [ b ] )
  }
}
xl.prototype.clickCommand = function ( a ) {
  var b = Bk();
  if ( !a.clickTrackingParams || !b ) return !1;
  var c = this.client;
  var d = "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
  a = {
    csn: b,
    ve: vk( a.clickTrackingParams ).getAsJson(),
    gestureType: d
  };
  d = {
    C: Dk( b ),
    M: b
  };
  "UNDEFINED_CSN" == b ? Lk( "visualElementGestured", a, d ) : c ? th( "visualElementGestured", a, c, d ) : X( "visualElementGestured", a, d );
  return !0
};

function Al( a, b, c ) {
  c = void 0 === c ? {} : c;
  a.i.add( c.layer || 0 );
  a.j = function () {
    Bl( a, b, c );
    var f = zk( c.layer );
    if ( f ) {
      for ( var g = u( a.l ), h = g.next(); !h.done; h = g.next() ) h = h.value, zl( a, h[ 0 ], h[ 1 ] || f, c.layer );
      f = u( a.m );
      for ( g = f.next(); !g.done; g = f.next() ) {
        var k = g.value;
        g = void 0;
        g = void 0 === g ? 0 : g;
        h = Bk( g );
        var l = k[ 0 ] || zk( g );
        h && l && ( g = a.client, k = k[ 1 ], k = {
          csn: h,
          ve: l.getAsJson(),
          clientData: k
        }, l = {
          C: Dk( h ),
          M: h
        }, "UNDEFINED_CSN" == h ? Lk( "visualElementStateChanged", k, l ) : g ? th( "visualElementStateChanged", k, g, l ) : X( "visualElementStateChanged",
          k, l ) )
      }
    }
  };
  Bk( c.layer ) || a.j();
  if ( c.ya )
    for ( var d = u( c.ya ), e = d.next(); !e.done; e = d.next() ) yl( a, e.value, c.layer );
  else rj( Error( "Delayed screen needs a data promise." ) )
}

function Bl( a, b, c ) {
  c = void 0 === c ? {} : c;
  c.layer || ( c.layer = 0 );
  var d = void 0 !== c.fb ? c.fb : c.layer;
  var e = Bk( d );
  d = zk( d );
  var f;
  d && ( void 0 !== c.parentCsn ? f = {
    clientScreenNonce: c.parentCsn,
    visualElement: d
  } : e && "UNDEFINED_CSN" !== e && ( f = {
    clientScreenNonce: e,
    visualElement: d
  } ) );
  try {
    var g = a.client,
      h = f,
      k = c.xa,
      l = c.C,
      n = Ik(),
      p = {
        csn: n,
        pageVe: ( new uk( {
          veType: b,
          youtubeData: void 0
        } ) ).getAsJson()
      };
    h && h.visualElement ? p.implicitGesture = {
      parentCsn: h.clientScreenNonce,
      gesturedVe: h.visualElement.getAsJson()
    } : h && qj( new T( "newScreen() parent element does not have a VE - rootVe",
      b ) );
    k && ( p.cloneCsn = k );
    k = {
      C: l,
      M: n
    };
    g ? th( "screenCreated", p, g, k ) : X( "screenCreated", p, k );
    Ph( Sh, new Fk( n ) );
    var q = n
  } catch ( r ) {
    sj( r, {
      Ik: b,
      rootVe: d,
      parentVisualElement: void 0,
      Ck: e,
      Hk: f,
      xa: c.xa
    } );
    rj( r );
    return
  }
  Ek( q, b, c.layer, c.C );
  if ( ( b = e && "UNDEFINED_CSN" !== e && d ) && !( b = P( "screen_manager_skip_hide_killswitch" ) ) ) {
    a: {
      b = u( Object.values( tk ) );
      for ( f = b.next(); !f.done; f = b.next() )
        if ( Bk( f.value ) == e ) {
          b = !0;
          break a
        } b = !1
    }
    b = !b
  }
  b && ( b = a.client, f = !0, g = ( f = void 0 === f ? !1 : f ) ? 16 : 8, d = {
    csn: e,
    ve: d.getAsJson(),
    eventType: g
  }, f = {
    C: Dk( e ),
    M: e,
    La: f
  }, "UNDEFINED_CSN" == e ? Lk( "visualElementHidden", d, f ) : b ? th( "visualElementHidden", d, b, f ) : X( "visualElementHidden", d, f ) );
  a.h[ a.h.length - 1 ] && !a.h[ a.h.length - 1 ].csn && ( a.h[ a.h.length - 1 ].csn = q || "" );
  sl( "csn", q );
  Mk.getInstance().clear();
  d = zk( c.layer );
  e && "UNDEFINED_CSN" !== e && d && ( P( "web_mark_root_visible" ) || P( "music_web_mark_root_visible" ) ) && ( e = q, q = P( "use_default_events_client" ) ? void 0 : $i, b = {
    csn: e,
    ve: d.getAsJson(),
    eventType: 1
  }, f = {
    C: Dk( e ),
    M: e
  }, "UNDEFINED_CSN" == e ? Lk( "visualElementShown", b, f ) : q ? th( "visualElementShown",
    b, q, f ) : X( "visualElementShown", b, f ) );
  a.i[ "delete" ]( c.layer || 0 );
  a.j = void 0;
  e = u( a.o );
  for ( q = e.next(); !q.done; q = e.next() ) q = u( q.value ), b = q.next().value, q.next().value.has( c.layer ) && d && zl( a, b, d, c.layer )
};

function Cl( a ) {
  L.call( this );
  this.h = {};
  this.started = !1;
  this.connection = a;
  this.connection.subscribe( "command", this.Da, this )
}
v( Cl, L );
m = Cl.prototype;
m.start = function () {
  this.started || this.i || ( this.started = !0, this.connection.P( "RECEIVING" ) )
};
m.P = function ( a, b ) {
  this.started && !this.i && this.connection.P( a, b )
};
m.Da = function ( a, b, c ) {
  if ( this.started && !this.i ) {
    var d = b || {};
    switch ( a ) {
      case "addEventListener":
        "string" === typeof d.event && this.addListener( d.event );
        break;
      case "removeEventListener":
        "string" === typeof d.event && this.removeListener( d.event );
        break;
      default:
        this.api.isReady() && this.api.isExternalMethodAvailable( a, c || null ) && ( b = Dl( a, b || {} ), c = this.api.handleExternalCall( a, b, c || null ), ( c = El( a, c ) ) && this.P( a, c ) )
    }
  }
};
m.addListener = function ( a ) {
  if ( !( a in this.h ) ) {
    var b = this.kb.bind( this, a );
    this.h[ a ] = b;
    this.addEventListener( a, b )
  }
};
m.kb = function ( a, b ) {
  this.started && !this.i && this.connection.P( a, this.na( a, b ) )
};
m.na = function ( a, b ) {
  if ( null != b ) return {
    value: b
  }
};
m.removeListener = function ( a ) {
  a in this.h && ( this.removeEventListener( a, this.h[ a ] ), delete this.h[ a ] )
};
m.A = function () {
  var a = this.connection;
  a.i || cf( a.h, "command", this.Da, this );
  this.connection = null;
  for ( var b in this.h ) this.h.hasOwnProperty( b ) && this.removeListener( b );
  L.prototype.A.call( this )
};

function Fl( a, b ) {
  Cl.call( this, b );
  this.api = a;
  this.start()
}
v( Fl, Cl );
Fl.prototype.addEventListener = function ( a, b ) {
  this.api.addEventListener( a, b )
};
Fl.prototype.removeEventListener = function ( a, b ) {
  this.api.removeEventListener( a, b )
};

function Dl( a, b ) {
  switch ( a ) {
    case "loadVideoById":
      var c = Wj( b );
      return [ c ];
    case "cueVideoById":
      return c = Wj( b ), [ c ];
    case "loadVideoByPlayerVars":
      return [ b ];
    case "cueVideoByPlayerVars":
      return [ b ];
    case "loadPlaylist":
      return c = Xj( b ), [ c ];
    case "cuePlaylist":
      return c = Xj( b ), [ c ];
    case "seekTo":
      return [ b.seconds, b.allowSeekAhead ];
    case "playVideoAt":
      return [ b.index ];
    case "setVolume":
      return [ b.volume ];
    case "setPlaybackQuality":
      return [ b.suggestedQuality ];
    case "setPlaybackRate":
      return [ b.suggestedRate ];
    case "setLoop":
      return [ b.loopPlaylists ];
    case "setShuffle":
      return [ b.shufflePlaylist ];
    case "getOptions":
      return [ b.module ];
    case "getOption":
      return [ b.module, b.option ];
    case "setOption":
      return [ b.module, b.option, b.value ];
    case "handleGlobalKeyDown":
      return [ b.keyCode, b.shiftKey, b.ctrlKey, b.altKey, b.metaKey, b.key, b.code ]
  }
  return []
}

function El( a, b ) {
  switch ( a ) {
    case "isMuted":
      return {
        muted: b
      };
    case "getVolume":
      return {
        volume: b
      };
    case "getPlaybackRate":
      return {
        playbackRate: b
      };
    case "getAvailablePlaybackRates":
      return {
        availablePlaybackRates: b
      };
    case "getVideoLoadedFraction":
      return {
        videoLoadedFraction: b
      };
    case "getPlayerState":
      return {
        playerState: b
      };
    case "getCurrentTime":
      return {
        currentTime: b
      };
    case "getPlaybackQuality":
      return {
        playbackQuality: b
      };
    case "getAvailableQualityLevels":
      return {
        availableQualityLevels: b
      };
    case "getDuration":
      return {
        duration: b
      };
    case "getVideoUrl":
      return {
        videoUrl: b
      };
    case "getVideoEmbedCode":
      return {
        videoEmbedCode: b
      };
    case "getPlaylist":
      return {
        playlist: b
      };
    case "getPlaylistIndex":
      return {
        playlistIndex: b
      };
    case "getOptions":
      return {
        options: b
      };
    case "getOption":
      return {
        option: b
      }
  }
}
Fl.prototype.na = function ( a, b ) {
  switch ( a ) {
    case "onReady":
      return;
    case "onStateChange":
      return {
        playerState: b
      };
    case "onPlaybackQualityChange":
      return {
        playbackQuality: b
      };
    case "onPlaybackRateChange":
      return {
        playbackRate: b
      };
    case "onError":
      return {
        errorCode: b
      }
  }
  return Cl.prototype.na.call( this, a, b )
};
Fl.prototype.A = function () {
  Cl.prototype.A.call( this );
  delete this.api
};

function Gl() {
  L.call( this );
  this.h = []
}
v( Gl, L );
Gl.prototype.A = function () {
  for ( ; this.h.length; ) {
    var a = this.h.pop();
    a.target.removeEventListener( a.name, a.Ja )
  }
  L.prototype.A.call( this )
};

function Hl( a ) {
  a = a || {};
  var b = {},
    c = {};
  this.url = a.url || "";
  this.args = a.args || mb( b );
  this.assets = a.assets || {};
  this.attrs = a.attrs || mb( c );
  this.fallback = a.fallback || null;
  this.fallbackMessage = a.fallbackMessage || null;
  this.html5 = !!a.html5;
  this.disable = a.disable || {};
  this.loaded = !!a.loaded;
  this.messages = a.messages || {}
}
Hl.prototype.clone = function () {
  var a = new Hl,
    b;
  for ( b in this )
    if ( this.hasOwnProperty( b ) ) {
      var c = this[ b ];
      "object" == La( c ) ? a[ b ] = mb( c ) : a[ b ] = c
    } return a
};
var Il = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;

function Jl( a ) {
  a = a || "";
  if ( window.spf ) {
    var b = a.match( Il );
    spf.style.load( a, b ? b[ 1 ] : "", void 0 )
  } else Kl( a )
}

function Kl( a ) {
  var b = Ll( a ),
    c = document.getElementById( b ),
    d = c && vj( c, "loaded" );
  d || c && !d || ( c = Ml( a, b, function () {
    vj( c, "loaded" ) || ( tj( c ), Tg( b ), Q( Sa( Ug, b ), 0 ) )
  } ) )
}

function Ml( a, b, c ) {
  var d = document.createElement( "link" );
  d.id = b;
  d.onload = function () {
    c && setTimeout( c, 0 )
  };
  a = bd( a );
  d.rel = "stylesheet";
  d.href = ub( a ).toString();
  ( document.getElementsByTagName( "head" )[ 0 ] || document.body ).appendChild( d );
  return d
}

function Ll( a ) {
  var b = Hc( document, "A" );
  Rb( b, new I( a, Eb ) );
  a = b.href.replace( /^[a-zA-Z]+:\/\//, "//" );
  return "css-" + Ub( a )
};

function Nl( a, b, c, d ) {
  L.call( this );
  var e = this;
  this.u = this.da = a;
  this.J = b;
  this.B = !1;
  this.api = {};
  this.ba = this.I = null;
  this.K = new N;
  Pd( this, Sa( Nd, this.K ) );
  this.m = {};
  this.T = this.ca = this.l = this.la = this.h = null;
  this.S = !1;
  this.o = this.G = null;
  this.ea = {};
  this.Ga = [ "onReady" ];
  this.ka = null;
  this.va = NaN;
  this.Z = {};
  this.j = d;
  Ol( this );
  this.fa( "WATCH_LATER_VIDEO_ADDED", this.bb.bind( this ) );
  this.fa( "WATCH_LATER_VIDEO_REMOVED", this.cb.bind( this ) );
  this.fa( "onAdAnnounce", this.Ia.bind( this ) );
  this.Ha = new Gl( this );
  Pd( this, Sa( Nd,
    this.Ha ) );
  this.aa = 0;
  c ? this.aa = Q( function () {
    e.loadNewVideoConfig( c )
  }, 0 ) : d && ( Pl( this ), Ql( this ) )
}
v( Nl, L );
m = Nl.prototype;
m.getId = function () {
  return this.J
};
m.loadNewVideoConfig = function ( a ) {
  if ( !this.i ) {
    this.aa && ( Pf( this.aa ), this.aa = 0 );
    a instanceof Hl || ( a = new Hl( a ) );
    this.la = a;
    this.h = a.clone();
    Pl( this );
    this.ca || ( this.ca = Rl( this, this.h.args.jsapicallback || "onYouTubePlayerReady" ) );
    this.h.args.jsapicallback = null;
    if ( a = this.h.attrs.width ) this.u.style.width = dd( Number( a ) || String( a ) );
    if ( a = this.h.attrs.height ) this.u.style.height = dd( Number( a ) || String( a ) );
    Ql( this );
    this.B && Sl( this )
  }
};

function Pl( a ) {
  var b;
  a.j ? b = a.j.rootElementId : b = a.h.attrs.id;
  a.l = b || a.l;
  "video-player" == a.l && ( a.l = a.J, a.j ? a.j.rootElementId = a.J : a.h.attrs.id = a.J );
  a.u.id == a.l && ( a.l += "-player", a.j ? a.j.rootElementId = a.l : a.h.attrs.id = a.l )
}
m.Na = function () {
  return this.la
};

function Sl( a ) {
  a.h && !a.h.loaded && ( a.h.loaded = !0, "0" != a.h.args.autoplay ? a.api.loadVideoByPlayerVars( a.h.args ) : a.api.cueVideoByPlayerVars( a.h.args ) )
}

function Tl( a ) {
  var b = !0,
    c = Ul( a );
  c && a.h && ( a = Vl( a ), b = vj( c, "version" ) === a );
  return b && !!A( "yt.player.Application.create" )
}

function Ql( a ) {
  if ( !a.i && !a.S ) {
    var b = Tl( a );
    if ( b && "html5" == ( Ul( a ) ? "html5" : null ) ) a.T = "html5", a.B || Wl( a );
    else if ( Xl( a ), a.T = "html5", b && a.o ) a.da.appendChild( a.o ), Wl( a );
    else {
      a.h && ( a.h.loaded = !0 );
      var c = !1;
      a.G = function () {
        c = !0;
        var d = Yl( a, "player_bootstrap_method" ) ? A( "yt.player.Application.createAlternate" ) || A( "yt.player.Application.create" ) : A( "yt.player.Application.create" );
        var e = a.h ? a.h.clone() : void 0;
        d( a.da, e, a.j );
        Wl( a )
      };
      a.S = !0;
      b ? a.G() : ( zj( Vl( a ), a.G ), ( b = a.j ? a.j.cssUrl : a.h.assets.css ) && Jl( b ), Zl( a ) && !c && x( "yt.player.Application.create", null, void 0 ) )
    }
  }
}

function Ul( a ) {
  var b = Dc( a.l );
  !b && a.u && a.u.querySelector && ( b = a.u.querySelector( "#" + a.l ) );
  return b
}

function Wl( a ) {
  if ( !a.i ) {
    var b = Ul( a ),
      c = !1;
    b && b.getApiInterface && b.getApiInterface() && ( c = !0 );
    c ? ( a.S = !1, !Yl( a, "html5_remove_not_servable_check_killswitch" ) && b.isNotServable && a.h && b.isNotServable( a.h.args.video_id ) || $l( a ) ) : a.va = Q( function () {
      Wl( a )
    }, 50 )
  }
}

function $l( a ) {
  Ol( a );
  a.B = !0;
  var b = Ul( a );
  b.addEventListener && ( a.I = am( a, b, "addEventListener" ) );
  b.removeEventListener && ( a.ba = am( a, b, "removeEventListener" ) );
  var c = b.getApiInterface();
  c = c.concat( b.getInternalApiInterface() );
  for ( var d = 0; d < c.length; d++ ) {
    var e = c[ d ];
    a.api[ e ] || ( a.api[ e ] = am( a, b, e ) )
  }
  for ( var f in a.m ) a.I( f, a.m[ f ] );
  Sl( a );
  a.ca && a.ca( a.api );
  a.K.O( "onReady", a.api )
}

function am( a, b, c ) {
  var d = b[ c ];
  return function () {
    try {
      return a.ka = null, d.apply( b, arguments )
    } catch ( e ) {
      "sendAbandonmentPing" != c && ( e.params = c, a.ka = e, Af( e ) )
    }
  }
}

function Ol( a ) {
  a.B = !1;
  if ( a.ba )
    for ( var b in a.m ) a.ba( b, a.m[ b ] );
  for ( var c in a.Z ) Pf( parseInt( c, 10 ) );
  a.Z = {};
  a.I = null;
  a.ba = null;
  for ( var d in a.api ) a.api[ d ] = null;
  a.api.addEventListener = a.fa.bind( a );
  a.api.removeEventListener = a.ib.bind( a );
  a.api.destroy = a.dispose.bind( a );
  a.api.getLastError = a.Oa.bind( a );
  a.api.getPlayerType = a.Pa.bind( a );
  a.api.getCurrentVideoConfig = a.Na.bind( a );
  a.api.loadNewVideoConfig = a.loadNewVideoConfig.bind( a );
  a.api.isReady = a.Fa.bind( a )
}
m.Fa = function () {
  return this.B
};
m.fa = function ( a, b ) {
  var c = this,
    d = Rl( this, b );
  if ( d ) {
    if ( !( 0 <= Ya( this.Ga, a ) || this.m[ a ] ) ) {
      var e = bm( this, a );
      this.I && this.I( a, e )
    }
    this.K.subscribe( a, d );
    "onReady" == a && this.B && Q( function () {
      d( c.api )
    }, 0 )
  }
};
m.ib = function ( a, b ) {
  if ( !this.i ) {
    var c = Rl( this, b );
    c && cf( this.K, a, c )
  }
};

function Rl( a, b ) {
  var c = b;
  if ( "string" == typeof b ) {
    if ( a.ea[ b ] ) return a.ea[ b ];
    c = function () {
      var d = A( b );
      d && d.apply( w, arguments )
    };
    a.ea[ b ] = c
  }
  return c ? c : null
}

function bm( a, b ) {
  var c = "ytPlayer" + b + a.J;
  a.m[ b ] = c;
  w[ c ] = function ( d ) {
    var e = Q( function () {
      if ( !a.i ) {
        a.K.O( b, d );
        var f = a.Z,
          g = String( e );
        g in f && delete f[ g ]
      }
    }, 0 );
    jb( a.Z, String( e ) )
  };
  return c
}
m.Ia = function ( a ) {
  Tg( "a11y-announce", a )
};
m.bb = function ( a ) {
  Tg( "WATCH_LATER_VIDEO_ADDED", a )
};
m.cb = function ( a ) {
  Tg( "WATCH_LATER_VIDEO_REMOVED", a )
};
m.Pa = function () {
  return this.T || ( Ul( this ) ? "html5" : null )
};
m.Oa = function () {
  return this.ka
};

function Xl( a ) {
  a.cancel();
  Ol( a );
  a.T = null;
  a.h && ( a.h.loaded = !1 );
  var b = Ul( a );
  b && ( Tl( a ) || !Zl( a ) ? a.o = b : ( b && b.destroy && b.destroy(), a.o = null ) );
  for ( a = a.da; b = a.firstChild; ) a.removeChild( b )
}
m.cancel = function () {
  this.G && Fj( Vl( this ), this.G );
  Pf( this.va );
  this.S = !1
};
m.A = function () {
  Xl( this );
  if ( this.o && this.h && this.o.destroy ) try {
    this.o.destroy()
  } catch ( b ) {
    zf( b )
  }
  this.ea = null;
  for ( var a in this.m ) w[ this.m[ a ] ] = null;
  this.la = this.h = this.api = null;
  delete this.da;
  delete this.u;
  L.prototype.A.call( this )
};

function Zl( a ) {
  return a.h && a.h.args && a.h.args.fflags ? -1 != a.h.args.fflags.indexOf( "player_destroy_old_version=true" ) : !1
}

function Vl( a ) {
  return a.j ? a.j.jsUrl : a.h.assets.js
}

function Yl( a, b ) {
  if ( a.j ) var c = a.j.serializedExperimentFlags;
  else a.h && a.h.args && ( c = a.h.args.fflags );
  return "true" == fg( c || "", "&" )[ b ]
};
var cm = {},
  dm = "player_uid_" + ( 1E9 * Math.random() >>> 0 );

function em( a, b, c ) {
  var d = "player";
  c = void 0 === c ? !0 : c;
  d = "string" === typeof d ? Dc( d ) : d;
  var e = dm + "_" + Na( d ),
    f = cm[ e ];
  if ( f && c ) return fm( a, b ) ? f.api.loadVideoByPlayerVars( a.args || null ) : f.loadNewVideoConfig( a ), f.api;
  f = new Nl( d, e, a, b );
  cm[ e ] = f;
  Tg( "player-added", f.api );
  Pd( f, function () {
    delete cm[ f.getId() ]
  } );
  return f.api
}

function fm( a, b ) {
  return b && b.serializedExperimentFlags ? b.serializedExperimentFlags.includes( "web_player_remove_playerproxy=true" ) : a && a.args && a.args.fflags ? a.args.fflags.includes( "web_player_remove_playerproxy=true" ) : !1
};
var Z = null,
  gm = null,
  hm = null;

function im() {
  var a = Z.getVideoData( 1 );
  a = a.title ? a.title + " - YouTube" : "YouTube";
  document.title !== a && ( document.title = a )
};

function jm( a, b, c ) {
  b = void 0 === b ? {} : b;
  c = void 0 === c ? !1 : c;
  var d = H( "EVENT_ID" );
  d && ( b.ei || ( b.ei = d ) );
  if ( b ) {
    d = a;
    var e = void 0 === e ? !0 : e;
    var f = H( "VALID_SESSION_TEMPDATA_DOMAINS", [] ),
      g = Xb( window.location.href );
    g && f.push( g );
    g = Xb( d );
    if ( 0 <= Ya( f, g ) || !g && 0 == d.lastIndexOf( "/", 0 ) )
      if ( P( "autoescape_tempdata_url" ) && ( f = document.createElement( "a" ), Rb( f, d ), d = f.href ), d ) {
        g = d.match( Vb );
        d = g[ 5 ];
        f = g[ 6 ];
        g = g[ 7 ];
        var h = "";
        d && ( h += d );
        f && ( h += "?" + f );
        g && ( h += "#" + g );
        d = h;
        f = d.indexOf( "#" );
        if ( d = 0 > f ? d : d.substr( 0, f ) )
          if ( e && !b.csn && ( b.itct || b.ved ) &&
            ( b = Object.assign( {
              csn: Bk()
            }, b ) ), k ) {
            var k = parseInt( k, 10 );
            isFinite( k ) && 0 < k && ( e = b, b = "ST-" + Ub( d ).toString( 36 ), e = e ? Zb( e ) : "", uh( b, e, k || 5 ) )
          } else k = b, e = "ST-" + Ub( d ).toString( 36 ), k = k ? Zb( k ) : "", uh( e, k, 5 )
      }
  }
  if ( c ) return !1;
  if ( ( window.ytspf || {} ).enabled ) spf.navigate( a );
  else {
    var l = void 0 === l ? {} : l;
    var n = void 0 === n ? "" : n;
    var p = void 0 === p ? window : p;
    c = p.location;
    a = $b( a, l ) + n;
    a = a instanceof I ? a : Jb( a );
    c.href = Fb( a )
  }
  return !0
};
x( "yt.setConfig", O, void 0 );
x( "yt.config.set", O, void 0 );
x( "yt.setMsg", Cf, void 0 );
x( "yt.msgs.set", Cf, void 0 );
x( "yt.logging.errors.log", rj, void 0 );
x( "writeEmbed", function () {
  var a = H( "PLAYER_CONFIG", void 0 );
  if ( !a ) {
    var b = H( "PLAYER_VARS", void 0 );
    b && ( a = {
      args: b
    } )
  }
  pk( !0 );
  "gvn" === a.args.ps && ( document.body.style.backgroundColor = "transparent" );
  a.attrs || ( a.attrs = {
    width: "100%",
    height: "100%",
    id: "video-player"
  } );
  var c = document.referrer;
  b = H( "POST_MESSAGE_ORIGIN" );
  window !== window.top && c && c !== document.URL && ( a.args.loaderUrl = c );
  if ( ( c = H( "WEB_PLAYER_CONTEXT_CONFIGS", void 0 ) ) && "WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER" in c ) {
    c = c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
    if ( !c.serializedForcedExperimentIds ) {
      var d = window.location.href; - 1 != d.indexOf( "?" ) ? ( d = ( d || "" ).split( "#" )[ 0 ], d = d.split( "?", 2 ), d = jg( 1 < d.length ? d[ 1 ] : d[ 0 ] ) ) : d = {};
      d.forced_experiments && ( c.serializedForcedExperimentIds = d.forced_experiments )
    }
    Z = em( a, c, !1 )
  } else Z = em( a );
  Z.addEventListener( "onVideoDataChange", im );
  a = H( "POST_MESSAGE_ID", "player" );
  H( "ENABLE_JS_API" ) ? hm = new Yj( Z ) : H( "ENABLE_POST_API" ) && "string" === typeof a && "string" === typeof b && ( gm = new bk( window.parent, a, b ), hm = new Fl( Z, gm.j ) );
  Ij()
}, void 0 );
var km = yf( function () {
    tl( "ol" );
    var a = vh.getInstance(),
      b = !!( ( yh( "f" + ( Math.floor( 119 / 31 ) + 1 ) ) || 0 ) & 67108864 ),
      c = 1 < window.devicePixelRatio;
    if ( document.body && Sd( document.body, "exp-invert-logo" ) )
      if ( c && !Sd( document.body, "inverted-hdpi" ) ) {
        var d = document.body;
        if ( d.classList ) d.classList.add( "inverted-hdpi" );
        else if ( !Sd( d, "inverted-hdpi" ) ) {
          var e = Qd( d );
          Rd( d, e + ( 0 < e.length ? " inverted-hdpi" : "inverted-hdpi" ) )
        }
      } else !c && Sd( document.body, "inverted-hdpi" ) && Td();
    b != c && ( b = "f" + ( Math.floor( 119 / 31 ) + 1 ), d = yh( b ) || 0, d = c ? d | 67108864 :
      d & -67108865, 0 == d ? delete S[ b ] : ( c = d.toString( 16 ), S[ b ] = c.toString() ), a.save() );
    xl.h || ( xl.h = new xl );
    a = xl.h;
    c = 16623;
    var f = void 0 === f ? {} : f;
    Object.values( Pj ).includes( c ) || ( qj( new T( "createClientScreen() called with a non-page VE", c ) ), c = 83769 );
    f.isHistoryNavigation || a.h.push( {
      rootVe: c,
      key: f.key || ""
    } );
    a.l = [];
    a.m = [];
    f.ya ? Al( a, c, f ) : Bl( a, c, f )
  } ),
  lm = yf( function () {
    Z && Z.sendAbandonmentPing && Z.sendAbandonmentPing();
    H( "PL_ATT" ) && Mj.dispose();
    for ( var a = 0, b = Gj.length; a < b; a++ ) Vf( Gj[ a ] );
    Gj.length = 0;
    Ej( "//static.doubleclick.net/instream/ad_status.js" );
    Hj = !1;
    O( "DCLKSTAT", 0 );
    Od( hm, gm );
    Z && ( Z.removeEventListener( "onVideoDataChange", im ), Z.destroy() )
  } );
window.addEventListener ? ( window.addEventListener( "load", km ), window.addEventListener( "unload", lm ) ) : window.attachEvent && ( window.attachEvent( "onload", km ), window.attachEvent( "onunload", lm ) );
Ta( "yt.abuse.player.botguardInitialized", A( "yt.abuse.player.botguardInitialized" ) || Nj );
Ta( "yt.abuse.player.invokeBotguard", A( "yt.abuse.player.invokeBotguard" ) || Oj );
Ta( "yt.abuse.dclkstatus.checkDclkStatus", A( "yt.abuse.dclkstatus.checkDclkStatus" ) || Jj );
Ta( "yt.player.exports.navigate", A( "yt.player.exports.navigate" ) || jm );
Ta( "yt.util.activity.init", A( "yt.util.activity.init" ) || Xf );
Ta( "yt.util.activity.getTimeSinceActive", A( "yt.util.activity.getTimeSinceActive" ) || $f );
Ta( "yt.util.activity.setTimestamp", A( "yt.util.activity.setTimestamp" ) || Yf );
} ).call( this );
