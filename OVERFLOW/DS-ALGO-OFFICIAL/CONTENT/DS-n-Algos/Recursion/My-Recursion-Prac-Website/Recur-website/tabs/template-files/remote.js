( function ( g ) {
    var window = this;
    var IHa = function ( a, b ) {
        return g.Jb( a, b )
      },
      u4 = function ( a, b, c ) {
        a.u.set( b, c )
      },
      v4 = function ( a ) {
        u4( a, "zx", Math.floor( 2147483648 * Math.random() ).toString( 36 ) + Math.abs( Math.floor( 2147483648 * Math.random() ) ^ g.C() ).toString( 36 ) );
        return a
      },
      w4 = function ( a, b, c ) {
        Array.isArray( c ) || ( c = [ String( c ) ] );
        g.bn( a.u, b, c )
      },
      JHa = function ( a, b ) {
        var c = [];
        g.kj( b, function ( d ) {
          try {
            var e = g.Pn.prototype.l.call( this, d, !0 )
          } catch ( f ) {
            if ( "Storage: Invalid value was encountered" == f ) return;
            throw f;
          }
          void 0 === e ? c.push( d ) : g.On( e ) && c.push( d )
        }, a );
        return c
      },
      KHa = function ( a, b ) {
        var c = JHa( a, b );
        g.yb( c, function ( d ) {
          g.Pn.prototype.remove.call( this, d )
        }, a )
      },
      LHa = function ( a ) {
        if ( a.W ) {
          if ( a.W.locationOverrideToken ) return {
            locationOverrideToken: a.W.locationOverrideToken
          };
          if ( null != a.W.latitudeE7 && null != a.W.longitudeE7 ) return {
            latitudeE7: a.W.latitudeE7,
            longitudeE7: a.W.longitudeE7
          }
        }
        return null
      },
      MHa = function ( a, b ) {
        g.db( a, b ) || a.push( b )
      },
      x4 = function ( a ) {
        var b = 0,
          c;
        for ( c in a ) b++;
        return b
      },
      NHa = function ( a, b ) {
        var c = b instanceof g.zc ? b : g.Fc( b, /^data:image\//i.test( b ) );
        a.src = g.Ac( c )
      },
      y4 = function () {},
      OHa = function ( a ) {
        try {
          return g.A.JSON.parse( a )
        } catch ( b ) {}
        a = String( a );
        if ( /^\s*$/.test( a ) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test( a.replace( /\\["\\\/bfnrtu]/g, "@" ).replace( /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]" ).replace( /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "" ) ) ) try {
          return eval( "(" + a + ")" )
        } catch ( b ) {}
        throw Error( "Invalid JSON string: " + a );
      },
      PHa = function ( a ) {
        if ( a.tg && "function" == typeof a.tg ) return a.tg();
        if ( "string" === typeof a ) return a.split( "" );
        if ( g.La( a ) ) {
          for ( var b = [], c = a.length, d = 0; d < c; d++ ) b.push( a[ d ] );
          return b
        }
        return g.Gb( a )
      },
      QHa = function ( a, b ) {
        if ( a.forEach && "function" == typeof a.forEach ) a.forEach( b, void 0 );
        else if ( g.La( a ) || "string" === typeof a ) g.yb( a, b, void 0 );
        else {
          if ( a.uh && "function" == typeof a.uh ) var c = a.uh();
          else if ( a.tg && "function" == typeof a.tg ) c = void 0;
          else if ( g.La( a ) || "string" === typeof a ) {
            c = [];
            for ( var d = a.length, e = 0; e < d; e++ ) c.push( e )
          } else c = g.Hb( a );
          d = PHa( a );
          e = d.length;
          for ( var f = 0; f < e; f++ ) b.call( void 0, d[ f ], c && c[ f ], a )
        }
      },
      RHa = function ( a, b, c, d ) {
        var e = new g.Qm( null, void 0 );
        a && g.Rm( e, a );
        b && g.Sm( e, b );
        c && g.Tm( e, c );
        d && ( e.l = d );
        return e
      },
      z4 = function ( a, b ) {
        g.Eo[ a ] = !0;
        var c = g.Co();
        c && c.publish.apply( c, arguments );
        g.Eo[ a ] = !1
      },
      A4 = function ( a ) {
        this.app = this.name = this.id = "";
        this.type = "REMOTE_CONTROL";
        this.obfuscatedGaiaId = this.avatar = this.username = "";
        this.capabilities = new Set;
        this.experiments = new Set;
        this.theme = "u";
        new g.Nm;
        a && ( this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", SHa( this, a.capabilities || "" ), THa( this, a.experiments || "" ) )
      },
      SHa = function ( a, b ) {
        a.capabilities.clear();
        g.He( b.split( "," ), g.Pa( IHa, UHa ) ).forEach( function ( c ) {
          a.capabilities.add( c )
        } )
      },
      THa = function ( a, b ) {
        a.experiments.clear();
        b.split( "," ).forEach( function ( c ) {
          a.experiments.add( c )
        } )
      },
      B4 = function ( a ) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || "";
        this.idType = a.screenIdType || "normal"
      },
      C4 = function ( a, b ) {
        return !!b && ( a.id == b || a.uuid == b )
      },
      VHa = function ( a ) {
        return {
          name: a.name,
          screenId: a.id,
          loungeToken: a.token,
          dialId: a.uuid,
          screenIdType: a.idType
        }
      },
      WHa = function ( a ) {
        return new B4( a )
      },
      XHa = function ( a ) {
        return Array.isArray( a ) ? g.Jc( a, WHa ) : []
      },
      D4 = function ( a ) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr( 0, 6 ) + "..,token:" + ( ( a.token ? ".." + a.token.slice( -6 ) : "-" ) + ",uuid:" + ( a.uuid ? ".." + a.uuid.slice( -6 ) : "-" ) + ",idType:" + a.idType + "}" ) : "null"
      },
      E4 = function ( a ) {
        return Array.isArray( a ) ? "[" + g.Jc( a, D4 ).join( "," ) + "]" : "null"
      },
      F4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace( /[xy]/g,
          function ( a ) {
            var b = 16 * Math.random() | 0;
            return ( "x" == a ? b : b & 3 | 8 ).toString( 16 )
          } )
      },
      YHa = function ( a ) {
        return g.Jc( a, function ( b ) {
          return {
            key: b.id,
            name: b.name
          }
        } )
      },
      G4 = function ( a, b ) {
        return g.$a( a, function ( c ) {
          return c || b ? !c != !b ? !1 : c.id == b.id : !0
        } )
      },
      H4 = function ( a, b ) {
        return g.$a( a, function ( c ) {
          return C4( c, b )
        } )
      },
      ZHa = function () {
        var a = ( 0, g.Cu )();
        a && KHa( a, a.i.Qj( !0 ) )
      },
      I4 = function () {
        var a = g.Fu( "yt-remote-connected-devices" ) || [];
        g.vb( a );
        return a
      },
      $Ha = function ( a ) {
        if ( g.eb( a ) ) return [];
        var b = a[ 0 ].indexOf( "#" ),
          c = -1 == b ? a[ 0 ] : a[ 0 ].substring( 0, b );
        return g.Jc( a, function ( d, e ) {
          return 0 == e ? d : d.substring( c.length )
        } )
      },
      aIa = function ( a ) {
        g.Eu( "yt-remote-connected-devices", a, 86400 )
      },
      K4 = function () {
        if ( J4 ) return J4;
        var a = g.Fu( "yt-remote-device-id" );
        a || ( a = F4(), g.Eu( "yt-remote-device-id", a, 31536E3 ) );
        for ( var b = I4(), c = 1, d = a; g.db( b, d ); ) c++, d = a + "#" + c;
        return J4 = d
      },
      L4 = function () {
        var a = I4(),
          b = K4();
        g.db( a, b );
        g.Hu() && g.xb( a, b );
        a = $Ha( a );
        if ( g.eb( a ) ) try {
          g.Tq( "remote_sid" )
        } catch ( c ) {} else try {
          g.Rq( "remote_sid", a.join( "," ), -1 )
        } catch ( c ) {}
      },
      bIa = function () {
        return g.Fu( "yt-remote-session-browser-channel" )
      },
      cIa = function () {
        return g.Fu( "yt-remote-local-screens" ) || []
      },
      dIa = function () {
        g.Eu( "yt-remote-lounge-token-expiration", !0, 86400 )
      },
      eIa = function ( a ) {
        5 < a.length && ( a = a.slice( a.length - 5 ) );
        var b = g.Jc( cIa(), function ( d ) {
            return d.loungeToken
          } ),
          c = g.Jc( a, function ( d ) {
            return d.loungeToken
          } );
        g.nh( c, function ( d ) {
          return !g.db( b, d )
        } ) && dIa();
        g.Eu( "yt-remote-local-screens", a, 31536E3 )
      },
      fIa = function ( a, b ) {
        g.Eu( "yt-remote-session-browser-channel", a );
        g.Eu( "yt-remote-session-screen-id", b );
        var c = I4(),
          d = K4();
        g.db( c, d ) || c.push( d );
        aIa( c );
        L4()
      },
      M4 = function ( a ) {
        a || ( g.Gu( "yt-remote-session-screen-id" ), g.Gu( "yt-remote-session-video-id" ) );
        L4();
        a = I4();
        g.ib( a, K4() );
        aIa( a )
      },
      gIa = function () {
        if ( !N4 ) {
          var a = g.go();
          a && ( N4 = new g.Jn( a ) )
        }
      },
      hIa = function () {
        gIa();
        return N4 ? !!N4.get( "yt-remote-use-staging-server" ) : !1
      },
      O4 = function () {
        var a = window.navigator.userAgent.match( /Chrome\/([0-9]+)/ );
        return a ? parseInt( a[ 1 ], 10 ) : 0
      },
      iIa = function ( a ) {
        return !!document.currentScript && ( -1 != document.currentScript.src.indexOf( "?" + a ) || -1 != document.currentScript.src.indexOf( "&" + a ) )
      },
      jIa = function () {
        return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
      },
      P4 = function ( a ) {
        a.length ? kIa( a.shift(), function () {
          P4( a )
        } ) : Q4()
      },
      lIa = function ( a ) {
        return "chrome-extension://" + a + "/cast_sender.js"
      },
      kIa = function ( a, b, c ) {
        var d = document.createElement( "script" );
        d.onerror = b;
        c && ( d.onload = c );
        g.fd( d, g.ng( a ) );
        ( document.head || document.documentElement ).appendChild( d )
      },
      mIa = function () {
        var a = O4(),
          b = [];
        if ( 1 < a ) {
          var c = a - 1;
          b.push( "//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js" );
          b.push( "//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js" )
        }
        return b
      },
      Q4 = function () {
        var a = jIa();
        a && a( !1, "No cast extension found" )
      },
      R4 = function () {
        if ( nIa ) {
          var a = 2,
            b = jIa(),
            c = function () {
              a--;
              0 == a && b && b( !0 )
            };
          window.__onGCastApiAvailable = c;
          kIa( "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Q4, c )
        }
      },
      oIa = function () {
        R4();
        var a = mIa();
        a.push( "//www.gstatic.com/eureka/clank/cast_sender.js" );
        P4( a )
      },
      qIa = function () {
        R4();
        var a = mIa();
        a.push.apply( a, g.la( pIa.map( lIa ) ) );
        a.push( "//www.gstatic.com/eureka/clank/cast_sender.js" );
        P4( a )
      },
      S4 = function ( a, b, c ) {
        g.I.call( this );
        this.I = null != c ? ( 0, g.B )( a, c ) : a;
        this.If = b;
        this.C = ( 0, g.B )( this.FJ, this );
        this.i = !1;
        this.l = 0;
        this.u = this.gb = null;
        this.B = []
      },
      T4 = function ( a, b, c ) {
        g.I.call( this );
        this.B = null != c ? a.bind( c ) : a;
        this.If = b;
        this.u = null;
        this.i = !1;
        this.l = 0;
        this.gb = null
      },
      U4 = function ( a ) {
        a.gb = g.Lm( function () {
          a.gb = null;
          a.i && !a.l && ( a.i = !1, U4( a ) )
        }, a.If );
        var b = a.u;
        a.u = null;
        a.B.apply( null, b )
      },
      V4 = function ( a ) {
        if ( g.A.JSON ) try {
          return g.A.JSON.parse( a )
        } catch ( b ) {}
        return OHa( a )
      },
      W4 = function () {},
      X4 = function ( a, b ) {
        if ( "function" !== typeof a ) throw Error( "Fn must not be null and must be a function" );
        return g.A.setTimeout( function () {
          a()
        }, b )
      },
      Z4 = function ( a ) {
        Y4.dispatchEvent( new rIa( Y4, a ) )
      },
      rIa = function ( a ) {
        g.Hl.call( this, "statevent", a )
      },
      $4 = function () {},
      sIa = function () {},
      uIa = function ( a ) {
        return ( a = tIa( a ) ) ? new ActiveXObject( a ) : new XMLHttpRequest
      },
      tIa = function ( a ) {
        if ( !a.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject ) {
          for ( var b = [ "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"
            ], c = 0; c < b.length; c++ ) {
            var d = b[ c ];
            try {
              return new ActiveXObject( d ), a.l = d
            } catch ( e ) {}
          }
          throw Error( "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed" );
        }
        return a.l
      },
      a5 = function ( a, b, c, d ) {
        this.i = a;
        this.l = b;
        this.L = c;
        this.J = d || 1;
        this.C = 45E3;
        this.B = new g.u_( this );
        this.u = new g.Km;
        this.u.setInterval( 250 )
      },
      wIa = function ( a, b, c ) {
        a.Cp = 1;
        a.Tk = v4( b.clone() );
        a.zn = c;
        a.I = !0;
        vIa( a, null )
      },
      b5 = function ( a, b, c, d, e ) {
        a.Cp = 1;
        a.Tk = v4( b.clone() );
        a.zn = null;
        a.I = c;
        e && ( a.EG = !1 );
        vIa( a, d )
      },
      vIa = function ( a, b ) {
        a.qp = g.C();
        c5( a );
        a.Pl = a.Tk.clone();
        w4( a.Pl, "t", a.J );
        a.Bs = 0;
        a.De = a.i.sx( a.i.Wr() ? b : null );
        0 < a.ow && ( a.Mu = new T4( ( 0, g.B )( a.BH, a, a.De ), a.ow ) );
        a.B.ya( a.De, "readystatechange", a.XP );
        var c = a.km ? g.Qb( a.km ) : {};
        a.zn ? ( a.zv = "POST", c[ "Content-Type" ] = "application/x-www-form-urlencoded", a.De.send( a.Pl, a.zv, a.zn, c ) ) : ( a.zv = "GET", a.EG && !g.xe && ( c.Connection = "close" ), a.De.send( a.Pl, a.zv, null, c ) );
        a.i.ji( 1 )
      },
      zIa = function ( a, b, c ) {
        for ( var d = !0; !a.Km && a.Bs < c.length; ) {
          var e = xIa( a, c );
          if ( e == d5 ) {
            4 == b && ( a.Nk = 4, Z4( 15 ), d = !1 );
            break
          } else if ( e == yIa ) {
            a.Nk = 4;
            Z4( 16 );
            d = !1;
            break
          } else e5( a, e )
        }
        4 == b && 0 == c.length && ( a.Nk = 1, Z4( 17 ), d = !1 );
        a.zi = a.zi && d;
        d || ( f5( a ), g5( a ) )
      },
      xIa = function ( a, b ) {
        var c = a.Bs,
          d = b.indexOf( "\n", c );
        if ( -1 == d ) return d5;
        c = Number( b.substring( c, d ) );
        if ( isNaN( c ) ) return yIa;
        d += 1;
        if ( d + c > b.length ) return d5;
        var e = b.substr( d, c );
        a.Bs = d + c;
        return e
      },
      BIa = function ( a, b ) {
        a.qp = g.C();
        c5( a );
        var c = b ? window.location.hostname : "";
        a.Pl = a.Tk.clone();
        u4( a.Pl, "DOMAIN", c );
        u4( a.Pl, "t", a.J );
        try {
          a.Di = new ActiveXObject( "htmlfile" )
        } catch ( n ) {
          f5( a );
          a.Nk = 7;
          Z4( 22 );
          g5( a );
          return
        }
        var d = "<html><body> 


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



        ";if(b){for(var e="
        ",f=0;f<c.length;f++){var h=c.charAt(f);if(" < "==h)h=e+"\\
        x3c ";else if(" > "==h)h=e+"\\
        x3e ";else{if(h in h5)h=h5[h];else if(h in AIa)h=h5[h]=AIa[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)var m=h;else{if(256>l){if(m="\\
        x ",16>l||256<l)m+="
        0 "}else m="\\
        u ",4096>l&&(m+="
        0 ");m+=l.toString(16).toUpperCase()}h=
        h5[ h ] = m
      }
    h = e + h
  }
  e = h
}
d += '<script>document.domain="' + e + '"\x3c/script>'
}
c = g.cd( g.bc( "b/12014412" ), d + "</body></html>" );
a.Di.open();
a.Di.write( g.Zc( c ) );
a.Di.close();
a.Di.parentWindow.m = ( 0, g.B )( a.rP, a );
a.Di.parentWindow.d = ( 0, g.B )( a.PF, a, !0 );
a.Di.parentWindow.rpcClose = ( 0, g.B )( a.PF, a, !1 );
c = a.Di.createElement( "DIV" );
a.Di.parentWindow.document.body.appendChild( c );
d = g.Ec( a.Pl.toString() );
d = g.kd( g.Ac( d ) );
d = g.cd( g.bc( "b/12014412" ), '<iframe src="' + d + '"></iframe>' );
g.dd( c, d );
a.i.ji( 1 )
}, c5 = function ( a ) {
    a.CA = g.C() + a.C;
    CIa( a, a.C )
  }, CIa = function ( a, b ) {
    if ( null != a.Ip ) throw Error( "WatchDog timer not null" );
    a.Ip = X4( ( 0, g.B )( a.zP, a ), b )
  }, i5 = function ( a ) {
    a.Ip && ( g.A.clearTimeout( a.Ip ), a.Ip = null )
  }, g5 = function ( a ) {
    a.i.BB() || a.Km || a.i.Qs( a )
  }, f5 = function ( a ) {
    i5( a );
    g.Ni( a.Mu );
    a.Mu = null;
    a.u.stop();
    g.cCa( a.B );
    if ( a.De ) {
      var b = a.De;
      a.De = null;
      b.abort();
      b.dispose()
    }
    a.Di && ( a.Di = null )
  }, e5 = function ( a, b ) {
    try {
      a.i.GF( a, b ), a.i.ji( 4 )
    } catch ( c ) {}
  }, EIa = function ( a, b, c, d, e ) {
    if ( 0 == d ) c( !1 );
    else {
      var f = e || 0;
      d--;
      DIa( a, b, function ( h ) {
        h ? c( !0 ) : g.A.setTimeout( function () {
          EIa( a, b, c, d, f )
        }, f )
      } )
    }
  }, DIa = function ( a, b, c ) {
    var d = new Image;
    d.onload = function () {
      try {
        j5( d ), c( !0 )
      } catch ( e ) {}
    };
    d.onerror = function () {
      try {
        j5( d ), c( !1 )
      } catch ( e ) {}
    };
    d.onabort = function () {
      try {
        j5( d ), c( !1 )
      } catch ( e ) {}
    };
    d.ontimeout = function () {
      try {
        j5( d ), c( !1 )
      } catch ( e ) {}
    };
    g.A.setTimeout( function () {
      if ( d.ontimeout ) d.ontimeout()
    }, b );
    NHa( d, a )
  }, j5 = function ( a ) {
    a.onload = null;
    a.onerror = null;
    a.onabort = null;
    a.ontimeout = null
  }, k5 = function ( a ) {
    g.am.call( this );
    this.headers = new g.Nm;
    this.ea = a || null;
    this.B = !1;
    this.ca = this.i = null;
    this.za = this.W = "";
    this.I = 0;
    this.u = "";
    this.C = this.la = this.L = this.ga = !1;
    this.J = 0;
    this.X = null;
    this.Da = "";
    this.Y = this.ia = !1
  }, FIa = function ( a ) {
    return g.ve && g.Xd( 9 ) && "number" === typeof a.timeout && void 0 !== a.ontimeout
  }, GIa = function ( a ) {
    return "content-type" == a.toLowerCase()
  }, IIa = function ( a, b ) {
    a.B = !1;
    a.i && ( a.C = !0, a.i.abort(), a.C = !1 );
    a.u = b;
    a.I = 5;
    HIa( a );
    l5( a )
  }, HIa = function ( a ) {
    a.ga || ( a.ga = !0, a.dispatchEvent( "complete" ), a.dispatchEvent( "error" ) )
  }, KIa = function ( a ) {
    if ( a.B && "undefined" != typeof g.x_ )
      if ( a.ca[ 1 ] && 4 == m5( a ) && 2 == a.getStatus() ) n5( a, "Local request error detected and ignored" );
      else if ( a.L && 4 == m5( a ) ) g.Lm( a.DF, 0, a );
    else if ( a.dispatchEvent( "readystatechange" ), a.isComplete() ) {
      n5( a, "Request complete" );
      a.B = !1;
      try {
        var b = a.getStatus();
        a: switch ( b ) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = !0;
            break a;
          default:
            c = !1
        }
        var d;
        if ( !( d = c ) ) {
          var e;
          if ( e = 0 === b ) {
            var f = g.td( 1, String( a.W ) );
            if ( !f && g.A.self && g.A.self.location ) {
              var h = g.A.self.location.protocol;
              f = h.substr( 0, h.length - 1 )
            }
            e = !JIa.test( f ? f.toLowerCase() : "" )
          }
          d = e
        }
        if ( d ) a.dispatchEvent( "complete" ), a.dispatchEvent( "success" );
        else {
          a.I = 6;
          try {
            var l = 2 < m5( a ) ? a.i.statusText : ""
          } catch ( m ) {
            l = ""
          }
          a.u = l + " [" + a.getStatus() + "]";
          HIa( a )
        }
      } finally {
        l5( a )
      }
    }
  }, l5 = function ( a, b ) {
    if ( a.i ) {
      LIa( a );
      var c = a.i,
        d = a.ca[ 0 ] ? g.Ia : null;
      a.i = null;
      a.ca = null;
      b || a.dispatchEvent( "ready" );
      try {
        c.onreadystatechange = d
      } catch ( e ) {}
    }
  }, LIa = function ( a ) {
    a.i && a.Y && ( a.i.ontimeout = null );
    a.X && ( g.A.clearTimeout( a.X ), a.X = null )
  }, m5 = function ( a ) {
    return a.i ? a.i.readyState : 0
  }, o5 = function ( a ) {
    try {
      return a.i ? a.i.responseText : ""
    } catch ( b ) {
      return ""
    }
  }, n5 = function ( a, b ) {
    return b + " [" + a.za + " " + a.W + " " + a.getStatus() + "]"
  }, MIa = function ( a ) {
    this.i = a;
    this.l = new W4
  }, NIa = function ( a ) {
    var b = p5( a.i, a.kq, "/mail/images/cleardot.gif" );
    v4( b );
    EIa( b.toString(), 5E3, ( 0, g.B )( a.wK, a ), 3, 2E3 );
    a.ji( 1 )
  }, r5 = function ( a ) {
    var b = a.i.L;
    if ( null != b ) Z4( 5 ), b ? ( Z4( 11 ), q5( a.i, a, !1 ) ) : ( Z4( 12 ), q5( a.i, a, !0 ) );
    else if ( a.Dg = new a5( a, void 0, void 0, void 0 ), a.Dg.km = a.pw, b = a.i, b = p5( b, b.Wr() ? a.aq : null, a.qw ), Z4( 5 ), !g.ve || g.Yd( 10 ) ) w4( b, "TYPE", "xmlhttp" ), b5( a.Dg, b, !1, a.aq, !1 );
    else {
      w4( b, "TYPE", "html" );
      var c = a.Dg;
      a = !!a.aq;
      c.Cp = 3;
      c.Tk = v4( b.clone() );
      BIa( c, a )
    }
  }, s5 = function ( a, b, c ) {
    this.Ma = 1;
    this.i = [];
    this.u = [];
    this.B = new W4;
    this.J = a || null;
    this.L = null != b ? b : null;
    this.C = c || !1
  }, OIa = function ( a, b ) {
    this.i = a;
    this.map = b;
    this.context = null
  }, PIa = function ( a, b, c, d ) {
    g.Hl.call( this, "timingevent", a );
    this.size = b;
    this.Pr = d
  }, QIa = function ( a ) {
    g.Hl.call( this, "serverreachability", a )
  }, TIa = function ( a ) {
    RIa( a );
    if ( 3 == a.Ma ) {
      var b = a.wr++,
        c = a.vt.clone();
      u4( c, "SID", a.l );
      u4( c, "RID", b );
      u4( c, "TYPE", "terminate" );
      t5( a, c );
      b = new a5( a, a.l, b, void 0 );
      b.Cp = 2;
      b.Tk = v4( c.clone() );
      NHa( new Image, b.Tk.toString() );
      b.qp = g.C();
      c5( b )
    }
    SIa( a )
  }, UIa = function ( a ) {
    a.RK( 1, 0 );
    a.vt = p5( a, null, a.rw );
    u5( a )
  }, RIa = function ( a ) {
    a.Xk && ( a.Xk.abort(), a.Xk = null );
    a.Zd && ( a.Zd.cancel(), a.Zd = null );
    a.Rj && ( g.A.clearTimeout( a.Rj ), a.Rj = null );
    v5( a );
    a.qg && ( a.qg.cancel(), a.qg = null );
    a.jl && ( g.A.clearTimeout( a.jl ), a.jl = null )
  }, VIa = function ( a, b ) {
    if ( 0 == a.Ma ) throw Error( "Invalid operation: sending map when state is closed" );
    a.i.push( new OIa( a.pM++, b ) );
    2 != a.Ma && 3 != a.Ma || u5( a )
  }, WIa = function ( a ) {
    var b = 0;
    a.Zd && b++;
    a.qg && b++;
    return b
  }, u5 = function ( a ) {
    a.qg || a.jl || ( a.jl = X4( ( 0, g.B )( a.NF, a ), 0 ), a.xo = 0 )
  }, YIa = function ( a, b ) {
    if ( 1 == a.Ma ) {
      if ( !b ) {
        a.wr = Math.floor( 1E5 * Math.random() );
        var c = a.wr++,
          d = new a5( a, "", c, void 0 );
        d.km = a.Ji;
        var e = w5( a ),
          f = a.vt.clone();
        u4( f, "RID", c );
        u4( f, "CVER", "1" );
        t5( a, f );
        wIa( d, f, e );
        a.qg = d;
        a.Ma = 2
      }
    } else 3 == a.Ma && ( b ? XIa( a, b ) : 0 == a.i.length || a.qg || XIa( a ) )
  }, XIa = function ( a, b ) {
    if ( b )
      if ( 6 < a.Lm ) {
        a.i = a.u.concat( a.i );
        a.u.length = 0;
        var c = a.wr - 1;
        var d = w5( a )
      } else c = b.L, d = b.zn;
    else c = a.wr++, d = w5( a );
    var e = a.vt.clone();
    u4( e, "SID", a.l );
    u4( e, "RID", c );
    u4( e, "AID", a.Ro );
    t5( a, e );
    c = new a5( a, a.l, c, a.xo + 1 );
    c.km = a.Ji;
    c.setTimeout( 1E4 + Math.round( 1E4 * Math.random() ) );
    a.qg = c;
    wIa( c, e, d )
  }, t5 = function ( a, b ) {
    if ( a.yf ) {
      var c = a.yf.mD();
      c && g.Ab( c, function ( d, e ) {
        u4( b, e, d )
      } )
    }
  }, w5 = function ( a ) {
    var b = Math.min( a.i.length, 1E3 ),
      c = [ "count=" + b ];
    if ( 6 < a.Lm && 0 < b ) {
      var d = a.i[ 0 ].i;
      c.push( "ofs=" + d )
    } else d = 0;
    for ( var e = {}, f = 0; f < b; e = {
        Pn: e.Pn
      }, f++ ) {
      e.Pn = a.i[ f ].i;
      var h = a.i[ f ].map;
      e.Pn = 6 >= a.Lm ? f : e.Pn - d;
      try {
        g.Ab( h, function ( l ) {
          return function ( m, n ) {
            c.push( "req" + l.Pn + "_" + n + "=" + encodeURIComponent( m ) )
          }
        }( e ) )
      } catch ( l ) {
        c.push( "req" + e.Pn + "_type=" + encodeURIComponent( "_badmap" ) )
      }
    }
    a.u = a.u.concat( a.i.splice( 0, b ) );
    return c.join( "&" )
  }, ZIa = function ( a ) {
    a.Zd || a.Rj || ( a.I = 1, a.Rj = X4( ( 0, g.B )( a.MF, a ), 0 ), a.eo = 0 )
  }, x5 = function ( a ) {
    if ( a.Zd || a.Rj || 3 <= a.eo ) return !1;
    a.I++;
    a.Rj = X4( ( 0, g.B )( a.MF, a ), $Ia( a, a.eo ) );
    a.eo++;
    return !0
  }, q5 = function ( a, b, c ) {
    a.xv = c;
    a.Ki = b.Oj;
    a.C || UIa( a )
  }, v5 = function ( a ) {
    null != a.Sm && ( g.A.clearTimeout( a.Sm ), a.Sm = null )
  }, $Ia = function ( a, b ) {
    var c = 5E3 + Math.floor( 1E4 * Math.random() );
    a.isActive() || ( c *= 2 );
    return c * b
  }, y5 = function ( a, b ) {
    if ( 2 == b || 9 == b ) {
      var c = null;
      a.yf && ( c = null );
      var d = ( 0, g.B )( a.FQ, a );
      c || ( c = new g.Qm( "//www.google.com/images/cleardot.gif" ), v4( c ) );
      DIa( c.toString(), 1E4, d )
    } else Z4( 2 );
    aJa( a, b )
  }, aJa = function ( a, b ) {
    a.Ma = 0;
    a.yf && a.yf.CC( b );
    SIa( a );
    RIa( a )
  }, SIa = function ( a ) {
    a.Ma = 0;
    a.Ki = -1;
    if ( a.yf )
      if ( 0 == a.u.length && 0 == a.i.length ) a.yf.bx();
      else {
        g.lb( a.u );
        var b = g.lb( a.i );
        a.u.length = 0;
        a.i.length = 0;
        a.yf.bx( b )
      }
  }, p5 = function ( a, b, c ) {
    var d = g.Ym( c );
    if ( "" != d.i ) b && g.Sm( d, b + "." + d.i ), g.Tm( d, d.B );
    else {
      var e = window.location;
      d = RHa( e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c )
    }
    a.Eq && g.Ab( a.Eq, function ( f, h ) {
      u4( d, h, f )
    } );
    u4( d, "VER", a.Lm );
    t5( a, d );
    return d
  }, bJa = function () {}, cJa = function () {
    this.i = [];
    this.l = []
  }, dJa = function ( a, b ) {
    this.action = a;
    this.params = b || {}
  }, z5 = function ( a, b ) {
    g.I.call( this );
    this.i = new g.L( this.jP, 0, this );
    g.K( this, this.i );
    this.If = 5E3;
    this.l = 0;
    if ( "function" === typeof a ) b && ( a = ( 0, g.B )( a, b ) );
    else if ( a && "function" === typeof a.handleEvent ) a = ( 0, g.B )( a.handleEvent, a );
    else throw Error( "Invalid listener argument" );
    this.u = a
  }, A5 = function ( a, b, c, d, e ) {
    c = void 0 === c ? !1 : c;
    d = void 0 === d ? function () {
      return ""
    } : d;
    e = void 0 === e ? !1 : e;
    this.ca = a;
    this.I = b;
    this.u = new g.In;
    this.l = new z5( this.hQ, this );
    this.i = null;
    this.X = !1;
    this.C = null;
    this.W = "";
    this.L = this.B = 0;
    this.J = [];
    this.ea = c;
    this.Y = d;
    this.ia = e
  }, eJa = function ( a ) {
    return {
      firstTestResults: [ "" ],
      secondTestResults: !a.i.xv,
      sessionId: a.i.l,
      arrayId: a.i.Ro
    }
  }, fJa = function ( a, b ) {
    a.L = b || 0;
    a.l.stop();
    B5( a );
    a.i && ( 3 == a.i.getState() && YIa( a.i ), TIa( a.i ) );
    a.L = 0
  }, C5 = function ( a ) {
    return !!a.i && 3 == a.i.getState()
  }, B5 = function ( a ) {
    if ( a.i ) {
      var b = a.Y(),
        c = a.i.Ji || {};
      b ? c[ "x-youtube-lounge-xsrf-token" ] = b : delete c[ "x-youtube-lounge-xsrf-token" ];
      a.i.Ji = c
    }
  }, D5 = function ( a ) {
    this.scheme = "https";
    this.port = this.domain = "";
    this.i = "/api/lounge";
    this.l = !0;
    a = a || document.location.href;
    var b = Number( g.td( 4, a ) ) || "";
    b && ( this.port = ":" + b );
    this.domain = g.ud( a ) || "";
    a = g.Pc;
    0 <= a.search( "MSIE" ) && ( a = a.match( /MSIE ([\d.]+)/ )[ 1 ], 0 > g.xc( a, "10.0" ) && ( this.l = !1 ) )
  }, E5 = function ( a, b ) {
    var c = a.i;
    a.l && ( c = a.scheme + "://" + a.domain + a.port + a.i );
    return g.Id( c + b, {} )
  }, F5 = function ( a, b, c, d, e ) {
    a = {
      format: "JSON",
      method: "POST",
      context: a,
      timeout: 5E3,
      withCredentials: !1,
      onSuccess: g.Pa( a.B, d, !0 ),
      onError: g.Pa( a.u, e ),
      onTimeout: g.Pa( a.C, e )
    };
    c && ( a.postParams = c, a.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    } );
    return g.Yp( b, a )
  }, jJa = function () {
    var a = gJa;
    hJa();
    G5.push( a );
    iJa()
  }, H5 = function ( a, b ) {
    hJa();
    var c = kJa( a, String( b ) );
    g.eb( G5 ) ? lJa( c ) : ( iJa(), g.yb( G5, function ( d ) {
      d( c )
    } ) )
  }, hJa = function () {
    G5 || ( G5 = g.Ha( "yt.mdx.remote.debug.handlers_" ) || [], g.Da( "yt.mdx.remote.debug.handlers_", G5, void 0 ) )
  }, lJa = function ( a ) {
    var b = ( I5 + 1 ) % 50;
    I5 = b;
    J5[ b ] = a;
    K5 || ( K5 = 49 == b )
  }, iJa = function () {
    var a = G5;
    if ( J5[ 0 ] ) {
      var b = K5 ? I5 : -1;
      do {
        b = ( b + 1 ) % 50;
        var c = J5[ b ];
        g.yb( a, function ( d ) {
          d( c )
        } )
      } while ( b != I5 );
      J5 = Array( 50 );
      I5 = -1;
      K5 = !1
    }
  }, kJa = function ( a, b ) {
    var c = ( g.C() - mJa ) / 1E3;
    c.toFixed && ( c = c.toFixed( 3 ) );
    var d = [];
    d.push( "[", c + "s", "] " );
    d.push( "[", "yt.mdx.remote", "] " );
    d.push( a + ": " + b, "\n" );
    return d.join( "" )
  }, L5 = function ( a ) {
    g.Q.call( this );
    this.I = a;
    this.screens = []
  }, nJa = function ( a, b ) {
    var c = a.get( b.uuid ) || a.get( b.id );
    if ( c ) {
      var d = c.name;
      c.id = b.id || c.id;
      c.name = b.name;
      c.token = b.token;
      c.uuid = b.uuid || c.uuid;
      return c.name != d
    }
    a.screens.push( b );
    return !0
  }, oJa = function ( a, b ) {
    var c = a.screens.length != b.length;
    a.screens = g.He( a.screens, function ( f ) {
      return !!G4( b, f )
    } );
    for ( var d = 0, e = b.length; d < e; d++ ) c = nJa( a, b[ d ] ) || c;
    return c
  }, pJa = function ( a, b ) {
    var c = a.screens.length;
    a.screens = g.He( a.screens, function ( d ) {
      return !( d || b ? !d != !b ? 0 : d.id == b.id : 1 )
    } );
    return a.screens.length < c
  }, M5 = function ( a, b, c, d ) {
    g.Q.call( this );
    this.u = a;
    this.I = b;
    this.B = c;
    this.C = d;
    this.l = 0;
    this.i = null;
    this.gb = NaN
  }, O5 = function ( a ) {
    L5.call( this, "LocalScreenService" );
    this.l = a;
    this.i = NaN;
    N5( this );
    this.info( "Initializing with " + E4( this.screens ) )
  }, qJa = function ( a ) {
    if ( a.screens.length ) {
      var b = g.Jc( a.screens, function ( d ) {
          return d.id
        } ),
        c = E5( a.l, "/pairing/get_lounge_token_batch" );
      F5( a.l, c, {
        screen_ids: b.join( "," )
      }, ( 0, g.B )( a.sL, a ), ( 0, g.B )( a.rL, a ) )
    }
  }, N5 = function ( a ) {
    if ( g.Po( "deprecate_pair_servlet_enabled" ) ) return oJa( a, [] );
    var b = XHa( cIa() );
    b = g.He( b, function ( c ) {
      return !c.uuid
    } );
    return oJa( a, b )
  }, P5 = function ( a, b ) {
    eIa( g.Jc( a.screens, VHa ) );
    b && dIa()
  }, R5 = function ( a, b ) {
    g.Q.call( this );
    this.I = b;
    var c = g.Fu( "yt-remote-online-screen-ids" ) || "";
    c = c ? c.split( "," ) : [];
    for ( var d = {}, e = this.I(), f = 0, h = e.length; f < h; ++f ) {
      var l = e[ f ].id;
      d[ l ] = g.db( c, l )
    }
    this.i = d;
    this.C = a;
    this.u = this.B = NaN;
    this.l = null;
    Q5( "Initialized with " + g.Oj( this.i ) )
  }, S5 = function ( a, b, c ) {
    var d = E5( a.C, "/pairing/get_screen_availability" );
    F5( a.C, d, {
      lounge_token: b.token
    }, ( 0, g.B )( function ( e ) {
      e = e.screens || [];
      for ( var f = 0, h = e.length; f < h; ++f )
        if ( e[ f ].loungeToken == b.token ) {
          c( "online" == e[ f ].status );
          return
        } c( !1 )
    }, a ), ( 0, g.B )( function () {
      c( !1 )
    }, a ) )
  }, T5 = function ( a, b ) {
    a: if ( x4( b ) != x4( a.i ) ) var c = !1;
      else {
        c = g.Hb( b );
        for ( var d = 0, e = c.length; d < e; ++d )
          if ( !a.i[ c[ d ] ] ) {
            c = !1;
            break a
          } c = !0
      }c || ( Q5( "Updated online screens: " + g.Oj( a.i ) ), a.i = b, a.V( "screenChange" ) );rJa( a )
  }, U5 = function ( a ) {
    isNaN( a.u ) || g.Bo( a.u );
    a.u = g.zo( ( 0, g.B )( a.Dz, a ), 0 < a.B && a.B < g.C() ? 2E4 : 1E4 )
  }, Q5 = function ( a ) {
    H5( "OnlineScreenService", a )
  }, sJa = function ( a ) {
    var b = {};
    g.yb( a.I(), function ( c ) {
      c.token ? b[ c.token ] = c.id : this.Fd( "Requesting availability of screen w/o lounge token." )
    } );
    return b
  }, rJa = function ( a ) {
    a = g.Hb( g.Bb( a.i, function ( b ) {
      return b
    } ) );
    g.vb( a );
    a.length ? g.Eu( "yt-remote-online-screen-ids", a.join( "," ), 60 ) : g.Gu( "yt-remote-online-screen-ids" )
  }, V5 = function ( a ) {
    L5.call( this, "ScreenService" );
    this.B = a;
    this.i = this.l = null;
    this.u = [];
    this.C = {};
    tJa( this )
  }, vJa = function ( a, b, c, d, e, f ) {
    a.info( "getAutomaticScreenByIds " + c + " / " + b );
    c || ( c = a.C[ b ] );
    var h = a.Rg();
    if ( h = ( c ? H4( h, c ) : null ) || H4( h, b ) ) {
      h.uuid = b;
      var l = W5( a, h );
      S5( a.i, l, function ( m ) {
        e( m ? l : null )
      } )
    } else c ? uJa( a, c, ( 0, g.B )( function ( m ) {
      var n = W5( this, new B4( {
        name: d,
        screenId: c,
        loungeToken: m,
        dialId: b || ""
      } ) );
      S5( this.i, n, function ( p ) {
        e( p ? n : null )
      } )
    }, a ), f ) : e( null )
  }, wJa = function ( a, b ) {
    for ( var c = 0, d = a.screens.length; c < d; ++c )
      if ( a.screens[ c ].name == b ) return a.screens[ c ];
    return null
  }, xJa = function ( a, b, c ) {
    S5( a.i, b, c )
  }, uJa = function ( a, b, c, d ) {
    a.info( "requestLoungeToken_ for " + b );
    var e = {
      postParams: {
        screen_ids: b
      },
      method: "POST",
      context: a,
      onSuccess: function ( f, h ) {
        var l = h && h.screens || [];
        l[ 0 ] && l[ 0 ].screenId == b ? c( l[ 0 ].loungeToken ) : d( Error( "Missing lounge token in token response" ) )
      },
      onError: function () {
        d( Error( "Request screen lounge token failed" ) )
      }
    };
    g.Yp( E5( a.B, "/pairing/get_lounge_token_batch" ), e )
  }, yJa = function ( a ) {
    a.screens = a.l.Rg();
    var b = a.C,
      c = {},
      d;
    for ( d in b ) c[ b[ d ] ] = d;
    b = 0;
    for ( d = a.screens.length; b < d; ++b ) {
      var e = a.screens[ b ];
      e.uuid = c[ e.id ] || ""
    }
    a.info( "Updated manual screens: " + E4( a.screens ) )
  }, tJa = function ( a ) {
    X5( a );
    a.l = new O5( a.B );
    a.l.subscribe( "screenChange", ( 0, g.B )( a.yL, a ) );
    yJa( a );
    a.u = XHa( g.Fu( "yt-remote-automatic-screen-cache" ) || [] );
    X5( a );
    a.info( "Initializing automatic screens: " + E4( a.u ) );
    a.i = new R5( a.B, ( 0, g.B )( a.Rg, a, !0 ) );
    a.i.subscribe( "screenChange", ( 0, g.B )( function () {
      this.V( "onlineScreenChange" )
    }, a ) )
  }, W5 = function ( a, b ) {
    var c = a.get( b.id );
    c ? ( c.uuid = b.uuid, b = c ) : ( ( c = H4( a.u, b.uuid ) ) ? ( c.id = b.id, c.token = b.token, b = c ) : a.u.push( b ), zJa( a ) );
    X5( a );
    a.C[ b.uuid ] = b.id;
    g.Eu( "yt-remote-device-id-map", a.C, 31536E3 );
    return b
  }, zJa = function ( a ) {
    a = g.He( a.u, function ( b ) {
      return "shortLived" != b.idType
    } );
    g.Eu( "yt-remote-automatic-screen-cache", g.Jc( a, VHa ) )
  }, X5 = function ( a ) {
    a.C = g.Fu( "yt-remote-device-id-map" ) || {}
  }, Y5 = function ( a, b, c ) {
    g.Q.call( this );
    this.ia = c;
    this.B = a;
    this.i = b;
    this.u = null
  }, Z5 = function ( a, b ) {
    a.u = b;
    a.V( "sessionScreen", a.u )
  }, $5 = function ( a, b ) {
    H5( a.ia, b )
  }, a6 = function ( a, b, c ) {
    Y5.call( this, a, b, "CastSession" );
    var d = this;
    this.ga = c;
    this.l = null;
    this.Y = ( 0, g.B )( this.KJ, this );
    this.ca = ( 0, g.B )( this.EP, this );
    this.X = g.zo( function () {
      AJa( d, null )
    }, 12E4 );
    this.J = this.C = this.I = this.L = 0;
    this.ea = !1;
    this.W = "unknown"
  }, b6 = function ( a, b ) {
    g.Bo( a.J );
    a.J = 0;
    0 == b ? BJa( a ) : a.J = g.zo( function () {
      BJa( a )
    }, b )
  }, BJa = function ( a ) {
    CJa( a, "getLoungeToken" );
    g.Bo( a.C );
    a.C = g.zo( function () {
      DJa( a, null )
    }, 3E4 )
  }, CJa = function ( a, b ) {
    a.info( "sendYoutubeMessage_: " + b + " " + g.Oj( void 0 ) );
    var c = {};
    c.type = b;
    a.l ? a.l.sendMessage( "urn:x-cast:com.google.youtube.mdx", c, g.Ia, ( 0, g.B )( function () {
      $5( this, "Failed to send message: " + b + "." )
    }, a ) ) : $5( a, "Sending yt message without session: " + g.Oj( c ) )
  }, c6 = function ( a, b ) {
    b ? ( a.info( "onConnectedScreenId_: Received screenId: " + b ), a.getScreen() && a.getScreen().id == b || a.DD( b, function ( c ) {
      Z5( a, c )
    }, function () {
      return a.cg()
    }, 5 ) ) : a.cg( Error( "Waiting for session status timed out." ) )
  }, FJa = function ( a, b, c ) {
    a.info( "onConnectedScreenData_: Received screenData: " + JSON.stringify( b ) );
    var d = new B4( b );
    EJa( a, d, function ( e ) {
      e ? ( a.ea = !0, W5( a.B, d ), Z5( a, d ), a.W = "unknown", b6( a, c ) ) : ( g.wo( Error( "CastSession, RemoteScreen from screenData: " + JSON.stringify( b ) + " is not online." ) ), a.cg() )
    }, 5 )
  }, AJa = function ( a, b ) {
    g.Bo( a.X );
    a.X = 0;
    b ? a.ga.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || ( b.loungeTokenRefreshIntervalMs ? FJa( a, {
      name: a.i.friendlyName,
      screenId: b.screenId,
      loungeToken: b.loungeToken,
      dialId: b.deviceId,
      screenIdType: "shortLived"
    }, b.loungeTokenRefreshIntervalMs ) : ( g.wo( Error( "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify( b ) + "." ) ), c6( a, b.screenId ) ) ) : ( g.wo( Error( "No device id presents in mdxSessionStatusData: " + JSON.stringify( b ) + "." ) ),
      c6( a, b.screenId ) ) : c6( a, b.screenId ) : a.cg( Error( "Waiting for session status timed out." ) )
  }, DJa = function ( a, b ) {
    g.Bo( a.C );
    a.C = 0;
    var c = null;
    if ( b )
      if ( b.loungeToken ) {
        var d;
        ( null == ( d = a.getScreen() ) ? void 0 : d.token ) == b.loungeToken && ( c = "staleLoungeToken" )
      } else c = "missingLoungeToken";
    else c = "noLoungeTokenResponse";
    c ? ( a.info( "Did not receive a new lounge token in onLoungeToken_ with data: " + ( JSON.stringify( b ) + ", error: " + c ) ), a.W = c, b6( a, 3E4 ) ) : ( a.u && ( a.u.token = b.loungeToken, W5( a.B, a.u ) ), a.V( "sessionScreen", a.u ), a.ea = !1, a.W = "unknown", b6( a, b.loungeTokenRefreshIntervalMs ) )
  }, EJa = function ( a, b, c, d ) {
    g.Bo( a.I );
    a.I = 0;
    xJa( a.B, b, function ( e ) {
      e || 0 > d ? c( e ) : a.I = g.zo( function () {
        EJa( a, b, c, d - 1 )
      }, 300 )
    } )
  }, GJa = function ( a ) {
    g.Bo( a.L );
    a.L = 0;
    g.Bo( a.I );
    a.I = 0;
    g.Bo( a.X );
    a.X = 0;
    g.Bo( a.C );
    a.C = 0;
    g.Bo( a.J );
    a.J = 0
  }, d6 = function ( a, b, c ) {
    Y5.call( this, a, b, "DialSession" );
    this.C = this.L = null;
    this.W = "";
    this.ca = c;
    this.Y = null;
    this.J = g.Ia;
    this.I = NaN;
    this.X = ( 0, g.B )( this.LJ, this );
    this.l = g.Ia
  }, HJa = function ( a ) {
    a.l = a.B.DB( a.W, a.i.label, a.i.friendlyName, ( 0, g.B )( function ( b ) {
      this.l = g.Ia;
      Z5( this, b )
    }, a ), ( 0, g.B )( function ( b ) {
      this.l = g.Ia;
      this.cg( b )
    }, a ) )
  }, IJa = function ( a ) {
    var b = {};
    b.pairingCode = a.W;
    b.theme = a.ca;
    hIa() && ( b.env_useStageMdx = 1 );
    return g.Gd( b )
  }, e6 = function ( a, b ) {
    Y5.call( this, a, b, "ManualSession" );
    this.l = g.zo( ( 0, g.B )( this.So, this, null ), 150 )
  }, f6 = function ( a, b ) {
    g.Q.call( this );
    this.B = b;
    this.l = a;
    this.L = b.appId || "233637DE";
    this.C = b.theme || "cl";
    this.W = b.disableCastApi || !1;
    this.i = null;
    this.J = !1;
    this.u = [];
    this.I = ( 0, g.B )( this.zO, this )
  }, JJa = function ( a, b ) {
    return b ? g.$a( a.u, function ( c ) {
      return C4( b, c.label )
    }, a ) : null
  }, g6 = function ( a ) {
    H5( "Controller", a )
  }, gJa = function ( a ) {
    window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage( a )
  }, h6 = function ( a ) {
    return a.J || !!a.u.length || !!a.i
  }, i6 = function ( a, b, c ) {
    b != a.i && ( g.Ni( a.i ), ( a.i = b ) ? ( c ? a.V( "yt-remote-cast2-receiver-resumed",
      b.i ) : a.V( "yt-remote-cast2-receiver-selected", b.i ), b.subscribe( "sessionScreen", ( 0, g.B )( a.KF, a, b ) ), b.getScreen() ? a.V( "yt-remote-cast2-session-change", b.getScreen() ) : c && a.i.So( null ) ) : a.V( "yt-remote-cast2-session-change", null ) )
  }, KJa = function ( a ) {
    var b = a.l.CB(),
      c = a.i && a.i.i;
    a = g.Jc( b, function ( d ) {
      c && C4( d, c.label ) && ( c = null );
      var e = d.uuid ? d.uuid : d.id,
        f = JJa( this, d );
      f ? ( f.label = e, f.friendlyName = d.name ) : ( f = new chrome.cast.Receiver( e, d.name ), f.receiverType = chrome.cast.ReceiverType.CUSTOM );
      return f
    }, a );
    c && ( c.receiverType != chrome.cast.ReceiverType.CUSTOM && ( c = new chrome.cast.Receiver( c.label, c.friendlyName ), c.receiverType = chrome.cast.ReceiverType.CUSTOM ), a.push( c ) );
    return a
  }, PJa = function ( a, b, c, d ) {
    d.disableCastApi ? j6( "Cannot initialize because disabled by Mdx config." ) : LJa() ? MJa( b, d ) && ( k6( !0 ), window.chrome && chrome.cast && chrome.cast.isAvailable ? NJa( a, c ) : ( window.__onGCastApiAvailable = function ( e, f ) {
      e ? NJa( a, c ) : ( l6( "Failed to load cast API: " + f ), m6( !1 ), k6( !1 ), g.Gu( "yt-remote-cast-available" ), g.Gu( "yt-remote-cast-receiver" ),
        OJa(), c( !1 ) )
    }, d.loadCastApiSetupScript ? g.Lo( "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js" ) : 0 <= window.navigator.userAgent.indexOf( "Android" ) && 0 <= window.navigator.userAgent.indexOf( "Chrome/" ) && window.navigator.presentation ? 60 <= O4() && oIa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf( "Edge" ) ? Q4() : 89 <= O4() ? qIa() : ( R4(), P4( pIa.map( lIa ) ) ) ) ) : j6( "Cannot initialize because not running Chrome" )
  }, OJa = function () {
    j6( "dispose" );
    var a = n6();
    a && a.dispose();
    g.Da( "yt.mdx.remote.cloudview.instance_", null, void 0 );
    QJa( !1 );
    g.Ho( o6 );
    o6.length = 0
  }, p6 = function () {
    return !!g.Fu( "yt-remote-cast-installed" )
  }, RJa = function () {
    var a = g.Fu( "yt-remote-cast-receiver" );
    return a ? a.friendlyName : null
  }, SJa = function () {
    j6( "clearCurrentReceiver" );
    g.Gu( "yt-remote-cast-receiver" )
  }, TJa = function () {
    return p6() ? n6() ? n6().getCastSession() : ( l6( "getCastSelector: Cast is not initialized." ), null ) : ( l6( "getCastSelector: Cast API is not installed!" ), null )
  }, r6 = function () {
    p6() ? n6() ? q6() ? ( j6( "Requesting cast selector." ), n6().requestSession() ) : ( j6( "Wait for cast API to be ready to request the session." ), o6.push( g.Go( "yt-remote-cast2-api-ready", r6 ) ) ) : l6( "requestCastSelector: Cast is not initialized." ) : l6( "requestCastSelector: Cast API is not installed!" )
  }, s6 =
  function ( a, b ) {
    q6() ? n6().setConnectedScreenStatus( a, b ) : l6( "setConnectedScreenStatus called before ready." )
  }, LJa = function () {
    var a = 0 <= g.Pc.search( / (CrMo|Chrome|CriOS)\// );
    return g.FA || a
  }, UJa = function ( a, b ) {
    n6().init( a, b )
  }, MJa = function ( a, b ) {
    var c = !1;
    n6() || ( c = new f6( a, b ), c.subscribe( "yt-remote-cast2-availability-change", function ( d ) {
      g.Eu( "yt-remote-cast-available", d );
      z4( "yt-remote-cast2-availability-change", d )
    } ), c.subscribe( "yt-remote-cast2-receiver-selected", function ( d ) {
      j6( "onReceiverSelected: " + d.friendlyName );
      g.Eu( "yt-remote-cast-receiver", d );
      z4( "yt-remote-cast2-receiver-selected", d )
    } ), c.subscribe( "yt-remote-cast2-receiver-resumed", function ( d ) {
      j6( "onReceiverResumed: " + d.friendlyName );
      g.Eu( "yt-remote-cast-receiver", d );
      z4( "yt-remote-cast2-receiver-resumed", d )
    } ), c.subscribe( "yt-remote-cast2-session-change", function ( d ) {
      j6( "onSessionChange: " + D4( d ) );
      d || g.Gu( "yt-remote-cast-receiver" );
      z4( "yt-remote-cast2-session-change", d )
    } ), g.Da( "yt.mdx.remote.cloudview.instance_", c, void 0 ), c = !0 );
    j6( "cloudview.createSingleton_: " + c );
    return c
  }, n6 = function () {
    return g.Ha( "yt.mdx.remote.cloudview.instance_" )
  }, NJa = function ( a, b ) {
    m6( !0 );
    k6( !1 );
    UJa( a, function ( c ) {
      c ? ( QJa( !0 ), g.Io( "yt-remote-cast2-api-ready" ) ) : ( l6( "Failed to initialize cast API." ), m6( !1 ), g.Gu( "yt-remote-cast-available" ), g.Gu( "yt-remote-cast-receiver" ), OJa() );
      b( c )
    } )
  }, j6 = function ( a ) {
    H5( "cloudview", a )
  }, l6 = function ( a ) {
    H5( "cloudview", a )
  }, m6 = function ( a ) {
    j6( "setCastInstalled_ " + a );
    g.Eu( "yt-remote-cast-installed", a )
  }, q6 = function () {
    return !!g.Ha( "yt.mdx.remote.cloudview.apiReady_" )
  }, QJa = function ( a ) {
    j6( "setApiReady_ " + a );
    g.Da( "yt.mdx.remote.cloudview.apiReady_", a, void 0 )
  }, k6 = function ( a ) {
    g.Da( "yt.mdx.remote.cloudview.initializing_", a, void 0 )
  }, t6 = function ( a ) {
    this.index = -1;
    this.videoId = this.listId = "";
    this.volume = this.playerState = -1;
    this.muted = !1;
    this.audioTrackId = null;
    this.J = this.L = 0;
    this.i = null;
    this.hasNext = this.dj = !1;
    this.W = this.I = this.l = this.C = 0;
    this.B = NaN;
    this.u = !1;
    this.reset( a )
  }, u6 = function ( a ) {
    a.audioTrackId = null;
    a.i = null;
    a.playerState = -1;
    a.dj = !1;
    a.hasNext = !1;
    a.L = 0;
    a.J = g.C();
    a.C = 0;
    a.l = 0;
    a.I = 0;
    a.W = 0;
    a.B = NaN;
    a.u = !1
  }, v6 = function ( a ) {
    return a.Kb() ? ( g.C() - a.J ) / 1E3 : 0
  }, w6 = function ( a, b ) {
    a.L = b;
    a.J = g.C()
  }, x6 = function ( a ) {
    switch ( a.playerState ) {
      case 1:
      case 1081:
        return ( g.C() - a.J ) / 1E3 + a.L;
      case -1E3:
        return 0
    }
    return a.L
  }, y6 = function ( a, b, c ) {
    var d = a.videoId;
    a.videoId = b;
    a.index = c;
    b != d && u6( a )
  }, z6 = function ( a ) {
    var b = {};
    b.index = a.index;
    b.listId = a.listId;
    b.videoId = a.videoId;
    b.playerState = a.playerState;
    b.volume = a.volume;
    b.muted = a.muted;
    b.audioTrackId = a.audioTrackId;
    b.trackData = g.Rb( a.i );
    b.hasPrevious = a.dj;
    b.hasNext = a.hasNext;
    b.playerTime = a.L;
    b.playerTimeAt = a.J;
    b.seekableStart = a.C;
    b.seekableEnd = a.l;
    b.duration = a.I;
    b.loadedTime = a.W;
    b.liveIngestionTime = a.B;
    return b
  }, B6 = function ( a, b ) {
    g.Q.call( this );
    this.Ma = 0;
    this.u = a;
    this.C = [];
    this.B = new cJa;
    this.l = this.i = null;
    this.L = ( 0, g.B )( this.bN, this );
    this.I = ( 0, g.B )( this.yr, this );
    this.J = ( 0, g.B )( this.aN, this );
    this.W = ( 0, g.B )( this.iN, this );
    var c = 0;
    a ? ( c = a.getProxyState(), 3 != c && ( a.subscribe( "proxyStateChange", this.Rz, this ), VJa( this ) ) ) : c = 3;
    0 != c && ( b ? this.Rz( c ) : g.zo( ( 0, g.B )( function () {
      this.Rz( c )
    }, this ), 0 ) );
    var d = TJa();
    d && A6( this, d );
    this.subscribe( "yt-remote-cast2-session-change", this.W )
  }, C6 = function ( a ) {
    return new t6( a.u.getPlayerContextData() )
  }, VJa = function ( a ) {
    g.yb( "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split( " " ), function ( b ) {
      this.C.push( this.u.subscribe( b, g.Pa( this.wO, b ), this ) )
    }, a )
  }, WJa = function ( a ) {
    g.yb( a.C, function ( b ) {
      this.u.unsubscribeByKey( b )
    }, a );
    a.C.length = 0
  }, D6 = function ( a ) {
    return 1 == a.getState()
  }, E6 = function ( a, b ) {
    var c = a.B;
    50 > c.i.length + c.l.length && a.B.l.push( b )
  }, G6 = function ( a, b, c ) {
    var d = C6( a );
    w6( d, c ); - 1E3 != d.playerState && ( d.playerState = b );
    F6( a, d )
  }, H6 = function ( a, b, c ) {
    a.u.sendMessage( b, c )
  }, F6 = function ( a, b ) {
    WJa( a );
    a.u.setPlayerContextData( z6( b ) );
    VJa( a )
  }, A6 = function ( a, b ) {
    a.l && ( a.l.removeUpdateListener( a.L ), a.l.removeMediaListener( a.I ), a.yr( null ) );
    a.l = b;
    a.l && ( H5( "CP", "Setting cast session: " + a.l.sessionId ), a.l.addUpdateListener( a.L ), a.l.addMediaListener( a.I ), a.l.media.length && a.yr( a.l.media[ 0 ] ) )
  }, XJa = function ( a ) {
    var b = a.i.media,
      c = a.i.customData;
    if ( b && c ) {
      var d = C6( a );
      b.contentId != d.videoId && H5( "CP", "Cast changing video to: " + b.contentId );
      d.videoId = b.contentId;
      d.playerState = c.playerState;
      w6( d, a.i.getEstimatedTime() );
      F6( a, d )
    } else H5( "CP", "No cast media video. Ignoring state update." )
  }, I6 = function ( a, b, c ) {
    return ( 0, g.B )( function ( d ) {
      this.Fd( "Failed to " + b + " with cast v2 channel. Error code: " + d.code );
      d.code != chrome.cast.ErrorCode.TIMEOUT && ( this.Fd( "Retrying " + b + " using MDx browser channel." ), H6( this, b, c ) )
    }, a )
  }, J6 = function ( a, b, c ) {
    g.Q.call( this );
    this.C = NaN;
    this.ca = !1;
    this.L = this.J = this.X = this.Y = NaN;
    this.W = [];
    this.B = this.I = this.u = this.Fb = this.i = null;
    this.ia = a;
    this.W.push( g.ap( window, "beforeunload", ( 0, g.B )( this.mL, this ) ) );
    this.l = [];
    this.Fb = new t6;
    this.ga = b.id;
    this.ea = b.idType;
    this.i = YJa( this, c );
    this.i.subscribe( "handlerOpened", this.fN, this );
    this.i.subscribe( "handlerClosed", this.cN, this );
    this.i.subscribe( "handlerError", this.dN, this );
    this.i.subscribe( "handlerMessage", this.eN, this );
    this.i.Wu( b.token );
    this.subscribe( "remoteQueueChange", function () {
      var d =
        this.Fb.videoId;
      g.Hu() && g.Eu( "yt-remote-session-video-id", d )
    }, this )
  }, K6 = function ( a ) {
    H5( "conn", a )
  }, YJa = function ( a, b ) {
    return new A5( E5( a.ia, "/bc" ), b, !1, function () {
      return a.HB()
    }, "shortLived" == a.ea )
  }, L6 = function ( a, b ) {
    a.V( "proxyStateChange", b )
  }, ZJa = function ( a ) {
    a.C = g.zo( ( 0, g.B )( function () {
      K6( "Connecting timeout" );
      this.ro( 1 )
    }, a ), 2E4 )
  }, M6 = function ( a ) {
    g.Bo( a.C );
    a.C = NaN
  }, N6 = function ( a ) {
    g.Bo( a.Y );
    a.Y = NaN
  }, $Ja = function ( a ) {
    O6( a );
    a.X = g.zo( ( 0, g.B )( function () {
      P6( this, "getNowPlaying" )
    }, a ), 2E4 )
  }, O6 = function ( a ) {
    g.Bo( a.X );
    a.X = NaN
  }, bKa = function ( a, b ) {
    b && ( M6( a ), N6( a ) );
    var c = C5( a.i ) && isNaN( a.C );
    b == c ? b && ( L6( a, 1 ), P6( a, "getSubtitlesTrack" ) ) : b ? ( a.CD() && a.Fb.reset(), L6( a, 1 ), P6( a, "getNowPlaying" ), aKa( a ) ) : a.ro( 1 )
  }, cKa = function ( a, b ) {
    var c = b.params.videoId;
    delete b.params.videoId;
    c == a.Fb.videoId && ( g.Mb( b.params ) ? a.Fb.i = null : a.Fb.i = b.params, a.V( "remotePlayerChange" ) )
  }, dKa = function ( a, b ) {
    var c = b.params.videoId || b.params.video_id,
      d = parseInt( b.params.currentIndex, 10 );
    a.Fb.listId = b.params.listId || a.Fb.listId;
    y6( a.Fb, c, d );
    a.V( "remoteQueueChange" )
  }, fKa = function ( a, b ) {
    b.params = b.params || {};
    dKa( a, b );
    eKa( a, b );
    a.V( "autoplayDismissed" )
  }, eKa = function ( a, b ) {
    var c = parseInt( b.params.currentTime || b.params.current_time, 10 );
    w6( a.Fb, isNaN( c ) ? 0 : c );
    c = parseInt( b.params.state, 10 );
    c = isNaN( c ) ? -1 : c; - 1 == c && -1E3 == a.Fb.playerState && ( c = -1E3 );
    a.Fb.playerState = c;
    c = Number( b.params.loadedTime );
    a.Fb.W = isNaN( c ) ? 0 : c;
    c = Number( b.params.duration );
    a.Fb.I = isNaN( c ) ? 0 : c;
    c = a.Fb;
    var d = Number( b.params.liveIngestionTime );
    c.B = d;
    c.u = isNaN( d ) ? !1 : !0;
    c = a.Fb;
    d = Number( b.params.seekableStartTime );
    var e = Number( b.params.seekableEndTime );
    c.C = isNaN( d ) ? 0 : d;
    c.l = isNaN( e ) ? 0 : e;
    1 == a.Fb.playerState ? $Ja( a ) : O6( a );
    a.V( "remotePlayerChange" )
  }, gKa = function ( a, b ) {
    if ( -1E3 !=
      a.Fb.playerState ) {
      var c = 1085;
      switch ( parseInt( b.params.adState, 10 ) ) {
        case 1:
          c = 1081;
          break;
        case 2:
          c = 1084;
          break;
        case 0:
          c = 1083
      }
      a.Fb.playerState = c;
      c = parseInt( b.params.currentTime, 10 );
      w6( a.Fb, isNaN( c ) ? 0 : c );
      a.V( "remotePlayerChange" )
    }
  }, hKa = function ( a, b ) {
    var c = "true" == b.params.muted;
    a.Fb.volume = parseInt( b.params.volume, 10 );
    a.Fb.muted = c;
    a.V( "remotePlayerChange" )
  }, iKa = function ( a, b ) {
    a.I = b.params.videoId;
    a.V( "nowAutoplaying", parseInt( b.params.timeout, 10 ) )
  }, jKa = function ( a, b ) {
    var c = "true" == b.params.hasNext;
    a.Fb.dj = "true" == b.params.hasPrevious;
    a.Fb.hasNext = c;
    a.V( "previousNextChange" )
  }, aKa = function ( a ) {
    g.Bo( a.L );
    a.L = g.zo( ( 0, g.B )( a.ro, a, 1 ), 864E5 )
  }, P6 = function ( a, b, c ) {
    c ? K6( "Sending: action=" + b + ", params=" + g.Oj( c ) ) : K6( "Sending: action=" + b );
    a.i.sendMessage( b, c )
  }, Q6 = function ( a ) {
    L5.call( this, "ScreenServiceProxy" );
    this.Hf = a;
    this.i = [];
    this.i.push( this.Hf.$_s( "screenChange", ( 0, g.B )( this.PJ, this ) ) );
    this.i.push( this.Hf.$_s( "onlineScreenChange", ( 0, g.B )( this.dO, this ) ) )
  }, nKa = function ( a, b ) {
    gIa();
    if ( !N4 || !N4.get( "yt-remote-disable-remote-module-for-dev" ) ) {
      b = g.O( "MDX_CONFIG" ) || b;
      ZHa();
      L4();
      R6 || ( R6 = new D5( b ? b.loungeApiHost : void 0 ), hIa() && ( R6.i = "/api/loungedev" ) );
      S6 || ( S6 = g.Ha( "yt.mdx.remote.deferredProxies_" ) || [], g.Da( "yt.mdx.remote.deferredProxies_", S6, void 0 ) );
      kKa();
      var c = T6();
      if ( !c ) {
        var d = new V5( R6 );
        g.Da( "yt.mdx.remote.screenService_", d, void 0 );
        c = T6();
        var e = {};
        b && ( e = {
          appId: b.appId,
          disableDial: b.disableDial,
          theme: b.theme,
          loadCastApiSetupScript: b.loadCastApiSetupScript,
          disableCastApi: b.disableCastApi,
          enableDialLoungeToken: b.enableDialLoungeToken,
          enableCastLoungeToken: b.enableCastLoungeToken
        } );
        PJa( a, d, function ( h ) {
          h ? U6() && s6( U6(), "YouTube TV" ) : d.subscribe( "onlineScreenChange", function () {
            z4( "yt-remote-receiver-availability-change" )
          } )
        }, e )
      }
      if ( b && !g.Ha( "yt.mdx.remote.initialized_" ) ) {
        g.Da( "yt.mdx.remote.initialized_", !0, void 0 );
        V6( "Initializing: " + g.Oj( b ) );
        W6.push( g.Go( "yt-remote-cast2-availability-change", function () {
          z4( "yt-remote-receiver-availability-change" )
        } ) );
        W6.push( g.Go( "yt-remote-cast2-receiver-selected", function () {
          X6( null );
          z4( "yt-remote-auto-connect", "cast-selector-receiver" )
        } ) );
        W6.push( g.Go( "yt-remote-cast2-receiver-resumed", function () {
          z4( "yt-remote-receiver-resumed", "cast-selector-receiver" )
        } ) );
        W6.push( g.Go( "yt-remote-cast2-session-change", lKa ) );
        W6.push( g.Go( "yt-remote-connection-change", function ( h ) {
          h ? s6( U6(), "YouTube TV" ) : Y6() || ( s6( null, null ), SJa() )
        } ) );
        e = Z6();
        b.isAuto && ( e.id += "#dial" );
        g.Po( "desktop_enable_autoplay" ) && ( e.capabilities = [ "atp" ] );
        e.name = b.device;
        e.app = b.app;
        var f = b.theme;
        f && ( e.theme = f );
        V6( " -- with channel params: " + g.Oj( e ) );
        e ? ( g.Eu( "yt-remote-session-app", e.app ), g.Eu( "yt-remote-session-name", e.name ) ) : ( g.Gu( "yt-remote-session-app" ), g.Gu( "yt-remote-session-name" ) );
        g.Da( "yt.mdx.remote.channelParams_", e, void 0 );
        c.start();
        U6() || mKa()
      }
    }
  }, oKa = function () {
    var a = T6().Hf.$_gos();
    var b = $6();
    b && a7() && ( G4( a, b ) || a.push( b ) );
    return YHa( a )
  }, b7 = function () {
    var a = pKa();
    !a && p6() && RJa() && ( a = {
      key: "cast-selector-receiver",
      name: RJa()
    } );
    return a
  }, pKa = function () {
    var a = oKa(),
      b = $6();
    b || ( b = Y6() );
    return g.$a( a, function ( c ) {
      return b && C4( b, c.key ) ? !0 : !1
    } )
  }, $6 = function () {
    var a = U6();
    if ( !a ) return null;
    var b = T6().Rg();
    return H4( b, a )
  }, lKa = function ( a ) {
    V6( "remote.onCastSessionChange_: " + D4( a ) );
    if ( a ) {
      var b = $6();
      if ( b && b.id == a.id ) {
        if ( s6( b.id, "YouTube TV" ), "shortLived" == a.idType && ( a = a.token ) ) c7 && ( c7.token = a ), ( b = a7() ) && b.Wu( a )
      } else b && d7(), e7( a, 1 )
    } else a7() && d7()
  }, d7 = function () {
    q6() ? n6().stopSession() : l6( "stopSession called before API ready." );
    var a = a7();
    a && ( a.disconnect( 1 ), f7( null ) )
  }, g7 = function () {
    var a = a7();
    return !!a && 3 != a.getProxyState()
  }, V6 = function ( a ) {
    H5( "remote", a )
  }, T6 = function () {
    if ( !h7 ) {
      var a = g.Ha( "yt.mdx.remote.screenService_" );
      h7 = a ? new Q6( a ) : null
    }
    return h7
  }, U6 = function () {
    return g.Ha( "yt.mdx.remote.currentScreenId_" )
  }, qKa = function ( a ) {
    g.Da( "yt.mdx.remote.currentScreenId_", a, void 0 )
  }, rKa = function () {
    return g.Ha( "yt.mdx.remote.connectData_" )
  }, X6 = function ( a ) {
    g.Da( "yt.mdx.remote.connectData_", a, void 0 )
  }, a7 = function () {
    return g.Ha( "yt.mdx.remote.connection_" )
  }, f7 = function ( a ) {
    var b = a7();
    X6( null );
    a || qKa( "" );
    g.Da( "yt.mdx.remote.connection_", a, void 0 );
    S6 && ( g.yb( S6, function ( c ) {
      c( a )
    } ), S6.length = 0 );
    b && !a ? z4( "yt-remote-connection-change", !1 ) : !b && a && z4( "yt-remote-connection-change", !0 )
  }, Y6 = function () {
    var a = g.Hu();
    if ( !a ) return null;
    var b = T6();
    if ( !b ) return null;
    b = b.Rg();
    return H4( b, a )
  }, e7 = function ( a, b ) {
    U6();
    $6() && $6();
    if ( i7 ) c7 = a;
    else {
      qKa( a.id );
      var c = new J6( R6, a, Z6() );
      c.connect( b, rKa() );
      c.subscribe( "beforeDisconnect", function ( d ) {
        z4( "yt-remote-before-disconnect", d )
      } );
      c.subscribe( "beforeDispose", function () {
        a7() && ( a7(), f7( null ) )
      } );
      c.subscribe( "browserChannelAuthError", function () {
        var d = $6();
        d && "shortLived" == d.idType && ( q6() ? n6().handleBrowserChannelAuthError() : l6( "refreshLoungeToken called before API ready." ) )
      } );
      f7( c )
    }
  }, mKa = function () {
    var a = Y6();
    a ? ( V6( "Resume connection to: " + D4( a ) ), e7( a, 0 ) ) : ( M4(), SJa(), V6( "Skipping connecting because no session screen found." ) )
  }, kKa = function () {
    var a = Z6();
    if ( g.Mb( a ) ) {
      a = K4();
      var b = g.Fu( "yt-remote-session-name" ) || "",
        c = g.Fu( "yt-remote-session-app" ) || "";
      a = {
        device: "REMOTE_CONTROL",
        id: a,
        name: b,
        app: c,
        mdxVersion: 3
      };
      g.Da( "yt.mdx.remote.channelParams_", a, void 0 )
    }
  }, Z6 = function () {
    return g.Ha( "yt.mdx.remote.channelParams_" ) || {}
  }, j7 = function ( a, b, c ) {
    g.I.call( this );
    var d = this;
    this.l = a;
    this.G = b;
    this.wb = c;
    this.events = new g.zN( this );
    this.X = this.events.N( this.G, "onVolumeChange", function ( e ) {
      sKa( d, e )
    } );
    this.C = !1;
    this.suggestion = null;
    this.I = new g.vK( 64 );
    this.i = new g.L( this.NG, 500, this );
    this.u = new g.L( this.OG, 1E3, this );
    this.L = new S4( this.WQ, 0, this );
    this.B = {};
    this.W = new g.L( this.rH, 1E3, this );
    this.J = new T4( this.seekTo, 1E3, this );
    this.Y = g.Ia;
    g.K( this, this.events );
    this.events.N( b, "onCaptionsTrackListChanged", this.MN );
    this.events.N( b, "captionschanged", this.YM );
    this.events.N( b, "captionssettingschanged", this.UG );
    this.events.N( b, "videoplayerreset", this.Fu );
    this.events.N( b, "mdxautoplaycancel", function () {
      d.wb.WC()
    } );
    a = this.wb;
    a.na();
    a.subscribe( "proxyStateChange", this.FF, this );
    a.subscribe( "remotePlayerChange", this.Er, this );
    a.subscribe( "remoteQueueChange", this.Fu, this );
    a.subscribe( "previousNextChange", this.CF, this );
    a.subscribe( "nowAutoplaying", this.xF, this );
    a.subscribe( "autoplayDismissed", this.XE, this );
    g.K( this, this.i );
    g.K( this, this.u );
    g.K( this, this.L );
    g.K( this, this.W );
    g.K( this, this.J );
    this.UG();
    this.Fu();
    this.Er()
  }, sKa = function ( a, b ) {
    if ( k7( a ) ) {
      a.wb.unsubscribe( "remotePlayerChange", a.Er, a );
      var c = Math.round( b.volume ),
        d = !!b.muted,
        e = C6( a.wb );
      if ( c !== e.volume || d !== e.muted ) a.wb.setVolume( c, d ), a.W.start();
      a.wb.subscribe( "remotePlayerChange", a.Er, a )
    }
  }, tKa = function ( a ) {
    a.Bb( 0 );
    a.i.stop();
    a.tb( new g.vK( 64 ) )
  }, l7 = function ( a, b ) {
    if ( k7( a ) && !a.C ) {
      var c = null;
      b && ( c = {
        style: a.G.getSubtitlesUserSettings()
      }, g.Tb( c, b ) );
      a.wb.GB( a.G.getVideoData( 1 ).videoId, c );
      a.B = C6( a.wb ).i
    }
  }, m7 = function ( a, b ) {
    var c = a.G.getPlaylist();
    if ( null === c || void 0 === c ? 0 : c.listId ) {
      var d = c.index;
      var e = c.listId.toString()
    }
    c = a.G.getVideoData( 1 );
    a.wb.playVideo( c.videoId, b, d, e, c.playerParams, c.ia, LHa( c ) );
    a.tb( new g.vK( 1 ) )
  }, uKa = function ( a, b ) {
    if ( b ) {
      var c = a.G.getOption( "captions", "tracklist", {
        WD: 1
      } );
      c && c.length ? ( a.G.setOption( "captions", "track", b ), a.C = !1 ) : ( a.G.loadModule( "captions" ), a.C = !0 )
    } else a.G.setOption( "captions", "track", {} )
  }, k7 = function ( a ) {
    return C6( a.wb ).videoId === a.G.getVideoData( 1 ).videoId
  }, n7 = function () {
    g.W.call( this, {
      D: "div",
      K: "ytp-mdx-manual-pairing-popup-dialog",
      U: {
        role: "dialog"
      },
      S: [ {
        D: "div",
        K: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
        S: [ {
          D: "div",
          K: "ytp-mdx-manual-pairing-popup-title",
          ba: "Connecting to your TV on web using a code will be going away soon"
        }, {
          D: "div",
          K: "ytp-mdx-manual-pairing-popup-buttons",
          S: [ {
            D: "button",
            ka: [ "ytp-button", "ytp-mdx-manual-pairing-popup-learn-more" ],
            ba: "Learn more"
          }, {
            D: "button",
            ka: [ "ytp-button", "ytp-mdx-manual-pairing-popup-ok" ],
            ba: "OK"
          } ]
        } ]
      } ]
    } );
    this.i = new g.eM( this, 250 );
    this.learnMoreButton =
      this.ha( "ytp-mdx-manual-pairing-popup-learn-more" );
    this.okButton = this.ha( "ytp-mdx-manual-pairing-popup-ok" );
    g.K( this, this.i );
    this.N( this.learnMoreButton, "click", this.l );
    this.N( this.okButton, "click", this.u )
  }, o7 = function () {
    g.W.call( this, {
      D: "div",
      K: "ytp-mdx-popup-dialog",
      U: {
        role: "dialog"
      },
      S: [ {
        D: "div",
        K: "ytp-mdx-popup-dialog-inner-content",
        S: [ {
          D: "div",
          K: "ytp-mdx-popup-title",
          ba: "You're signed out"
        }, {
          D: "div",
          K: "ytp-mdx-popup-description",
          ba: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
        }, {
          D: "div",
          K: "ytp-mdx-privacy-popup-buttons",
          S: [ {
            D: "button",
            ka: [ "ytp-button", "ytp-mdx-privacy-popup-cancel" ],
            ba: "Cancel"
          }, {
            D: "button",
            ka: [ "ytp-button",
              "ytp-mdx-privacy-popup-confirm"
            ],
            ba: "Confirm"
          } ]
        } ]
      } ]
    } );
    this.i = new g.eM( this, 250 );
    this.cancelButton = this.ha( "ytp-mdx-privacy-popup-cancel" );
    this.confirmButton = this.ha( "ytp-mdx-privacy-popup-confirm" );
    g.K( this, this.i );
    this.N( this.cancelButton, "click", this.l );
    this.N( this.confirmButton, "click", this.u )
  }, p7 = function ( a ) {
    g.W.call( this, {
      D: "div",
      K: "ytp-remote",
      S: [ {
        D: "div",
        K: "ytp-remote-display-status",
        S: [ {
          D: "div",
          K: "ytp-remote-display-status-icon",
          S: [ g.Fma() ]
        }, {
          D: "div",
          K: "ytp-remote-display-status-text",
          ba: "{{statustext}}"
        } ]
      } ]
    } );
    this.api = a;
    this.i = new g.eM( this, 250 );
    g.K( this, this.i );
    this.N( a, "presentingplayerstatechange", this.l );
    vKa( this, a.Va() )
  }, vKa = function ( a, b ) {
    if ( 3 === a.api.getPresentingPlayerType() ) {
      var c = {
        RECEIVER_NAME: a.api.getOption( "remote", "currentReceiver" ).name
      };
      c = g.V( b, 128 ) ? g.VJ( "Error on $RECEIVER_NAME", c ) : b.Kb() || g.V( b, 4 ) ? g.VJ( "Playing on $RECEIVER_NAME", c ) : g.VJ( "Connected to $RECEIVER_NAME", c );
      a.Aa( "statustext", c );
      a.i.show()
    } else a.i.hide()
  }, q7 = function ( a, b ) {
    g.TQ.call( this, "Play on", 0, a, b );
    this.G = a;
    this.Ml = {};
    this.N( a, "onMdxReceiversChange", this.C );
    this.N( a, "presentingplayerstatechange", this.C );
    this.C()
  }, r7 = function ( a ) {
    g.HN.call( this, a );
    this.gi = {
      key: F4(),
      name: "This computer"
    };
    this.nh = null;
    this.subscriptions = [];
    this.rz = this.wb = null;
    this.Ml = [ this.gi ];
    this.Zk = this.gi;
    this.Mc = new g.vK( 64 );
    this.sE = 0;
    this.Ne = -1;
    this.Wo = null;
    this.Hr = this.ku = !1;
    this.yn = this.np = null;
    if ( !g.VC( this.player.T() ) ) {
      a = this.player;
      var b = g.nN( a );
      b && ( b = b.bn() ) && ( b = new q7( a, b ), g.K( this, b ) );
      b = new p7( a );
      g.K( this, b );
      g.xN( a, b.element, 4 );
      this.np = new o7;
      g.K( this, this.np );
      g.xN( a, this.np.element, 4 );
      g.S( this.player.T().experiments, "pair_servlet_deprecation_warning_enabled" ) &&
        !g.S( this.player.T().experiments, "deprecate_pair_servlet_enabled" ) && ( this.Wo = new n7, g.K( this, this.Wo ), g.xN( a, this.Wo.element, 4 ) );
      this.Hr = !!Y6();
      this.ku = !!g.Fu( "yt-remote-manual-pairing-warning-shown" )
    }
  }, s7 = function ( a ) {
    a.yn && ( a.player.removeEventListener( "presentingplayerstatechange", a.yn ), a.yn = null )
  }, wKa = function ( a, b, c ) {
    a.Mc = c;
    a.player.V( "presentingplayerstatechange", new g.BJ( c, b ) )
  }, xKa = function ( a, b, c ) {
    var d = !1;
    1 === b ? d = !a.Hr : 2 === b && ( d = !a.ku );
    d && g.DJ( c, 8 ) && ( a.player.pauseVideo(), s7( a ) )
  }, t7 = function ( a, b ) {
    if ( b.key !== a.Zk.key )
      if ( b.key === a.gi.key ) d7();
      else {
        if ( a.Wo && !a.ku && b !== a.gi && "cast-selector-receiver" !== b.key && g.oD( a.player.T() ) ) yKa( a );
        else {
          var c;
          ( c = !g.S( a.player.T().experiments, "mdx_enable_privacy_disclosure_ui" ) ) || ( c = ( ( c = g.O( "PLAYER_CONFIG" ) ) && c.args && void 0 !== c.args.authuser ? !0 : !( !g.O( "SESSION_INDEX" ) && !g.O( "LOGGED_IN" ) ) ) || a.Hr || !a.np );
          ( c ? 0 : g.oD( a.player.T() ) || g.sD( a.player.T() ) ) && zKa( a )
        }
        a.Zk = b;
        var d = a.player.getPlaylistId();
        c = a.player.getVideoData( 1 );
        var e = c.videoId;
        if ( !d && !e || ( 2 === a.player.getAppState() || 1 === a.player.getAppState() ) &&
          g.S( a.player.T().experiments, "should_clear_video_data_on_player_cued_unstarted" ) ) c = null;
        else {
          var f = a.player.getPlaylist();
          if ( f ) {
            var h = [];
            for ( var l = 0; l < f.length; l++ ) h[ l ] = f.Na( l ).videoId
          } else h = [ e ];
          f = a.player.getCurrentTime( 1 );
          d = {
            videoIds: h,
            listId: d,
            videoId: e,
            playerParams: c.playerParams,
            clickTrackingParams: c.ia,
            index: Math.max( a.player.getPlaylistIndex(), 0 ),
            currentTime: 0 === f ? void 0 : f
          };
          ( c = LHa( c ) ) && ( d.locationInfo = c );
          c = d
        }
        V6( "Connecting to: " + g.Oj( b ) );
        "cast-selector-receiver" == b.key ? ( X6( c || null ), c = c || null,
          q6() ? n6().setLaunchParams( c ) : l6( "setLaunchParams called before ready." ) ) : !c && g7() && U6() == b.key ? z4( "yt-remote-connection-change", !0 ) : ( d7(), X6( c || null ), c = T6().Rg(), ( c = H4( c, b.key ) ) && e7( c, 1 ) )
      }
  }, zKa = function ( a ) {
    a.player.Va().Kb() ? a.player.pauseVideo() : ( a.yn = function ( b ) {
      xKa( a, 1, b )
    }, a.player.addEventListener( "presentingplayerstatechange", a.yn ) );
    a.np && a.np.Ec();
    a7() || ( i7 = !0 )
  }, yKa = function ( a ) {
    a.player.Va().Kb() ? a.player.pauseVideo() : ( a.yn = function ( b ) {
      xKa( a, 2, b )
    }, a.player.addEventListener( "presentingplayerstatechange", a.yn ) );
    a.Wo && a.Wo.Ec();
    a7() || ( i7 = !0 )
  }, AIa = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C"
  }, h5 = {
    "'": "\\'"
  }, AKa = {}, UHa = {
    SR: "atp",
    h1: "ska",
    g0: "que",
    pZ: "mus",
    g1: "sus",
    HV: "dsp",
    z0: "seq",
    TY: "mic",
    HU: "dpa"
  }, N4, J4 = "", nIa = iIa( "loadCastFramework" ) || iIa( "loadCastApplicationFramework" ), pIa = [ "pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo" ];
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra( S4, g.I );
g.k = S4.prototype;
g.k.Qg = function ( a ) {
  this.B = arguments;
  this.i = !1;
  this.gb ? this.u = g.C() + this.If : this.gb = g.Lm( this.C, this.If )
};
g.k.stop = function () {
  this.gb && ( g.A.clearTimeout( this.gb ), this.gb = null );
  this.u = null;
  this.i = !1;
  this.B = []
};
g.k.pause = function () {
  ++this.l
};
g.k.resume = function () {
  this.l && ( --this.l, !this.l && this.i && ( this.i = !1, this.I.apply( null, this.B ) ) )
};
g.k.da = function () {
  this.stop();
  S4.Dd.da.call( this )
};
g.k.FJ = function () {
  this.u ? ( this.gb = g.Lm( this.C, this.u - g.C() ), this.u = null ) : ( this.gb = null, this.l ? this.i = !0 : ( this.i = !1, this.I.apply( null, this.B ) ) )
};
g.u( T4, g.I );
g.k = T4.prototype;
g.k.Qg = function ( a ) {
  this.u = arguments;
  this.gb || this.l ? this.i = !0 : U4( this )
};
g.k.stop = function () {
  this.gb && ( g.A.clearTimeout( this.gb ), this.gb = null, this.i = !1, this.u = null )
};
g.k.pause = function () {
  this.l++
};
g.k.resume = function () {
  this.l--;
  this.l || !this.i || this.gb || ( this.i = !1, U4( this ) )
};
g.k.da = function () {
  g.I.prototype.da.call( this );
  this.stop()
};
W4.prototype.stringify = function ( a ) {
  return g.A.JSON.stringify( a, void 0 )
};
W4.prototype.parse = function ( a ) {
  return g.A.JSON.parse( a, void 0 )
};
var Y4 = new g.am;
g.u( rIa, g.Hl );
$4.prototype.i = null;
$4.prototype.getOptions = function () {
  var a;
  ( a = this.i ) || ( a = {}, tIa( this ) && ( a[ 0 ] = !0, a[ 1 ] = !0 ), a = this.i = a );
  return a
};
var u7;
g.Ra( sIa, $4 );
u7 = new sIa;
g.k = a5.prototype;
g.k.km = null;
g.k.zi = !1;
g.k.Ip = null;
g.k.CA = null;
g.k.qp = null;
g.k.Cp = null;
g.k.Tk = null;
g.k.Pl = null;
g.k.zn = null;
g.k.De = null;
g.k.Bs = 0;
g.k.Di = null;
g.k.zv = null;
g.k.Nk = null;
g.k.Zp = -1;
g.k.EG = !0;
g.k.Km = !1;
g.k.ow = 0;
g.k.Mu = null;
var yIa = {},
  d5 = {};
g.k = a5.prototype;
g.k.setTimeout = function ( a ) {
  this.C = a
};
g.k.XP = function ( a ) {
  a = a.target;
  var b = this.Mu;
  b && 3 == m5( a ) ? b.Qg() : this.BH( a )
};
g.k.BH = function ( a ) {
  try {
    if ( a == this.De ) a: {
      var b = m5( this.De ),
        c = this.De.I,
        d = this.De.getStatus();
      if ( g.ve && !g.Yd( 10 ) || g.xe && !g.Xd( "420+" ) ) {
        if ( 4 > b ) break a
      } else if ( 3 > b || 3 == b && !g.ug && !o5( this.De ) ) break a;this.Km || 4 != b || 7 == c || ( 8 == c || 0 >= d ? this.i.ji( 3 ) : this.i.ji( 2 ) );i5( this );
      var e = this.De.getStatus();this.Zp = e;
      var f = o5( this.De );
      ( this.zi = 200 == e ) ? ( 4 == b && f5( this ), this.I ? ( zIa( this, b, f ), g.ug && this.zi && 3 == b && ( this.B.ya( this.u, "tick", this.QP ), this.u.start() ) ) : e5( this, f ), this.zi && !this.Km && ( 4 == b ? this.i.Qs( this ) : ( this.zi = !1, c5( this ) ) ) ) : ( 400 == e && 0 < f.indexOf( "Unknown SID" ) ? ( this.Nk = 3, Z4( 13 ) ) : ( this.Nk = 0, Z4( 14 ) ), f5( this ), g5( this ) )
    }
  } catch ( h ) {
    this.De && o5( this.De )
  } finally {}
};
g.k.QP = function () {
  var a = m5( this.De ),
    b = o5( this.De );
  this.Bs < b.length && ( i5( this ), zIa( this, a, b ), this.zi && 4 != a && c5( this ) )
};
g.k.rP = function ( a ) {
  X4( ( 0, g.B )( this.qP, this, a ), 0 )
};
g.k.qP = function ( a ) {
  this.Km || ( i5( this ), e5( this, a ), c5( this ) )
};
g.k.PF = function ( a ) {
  X4( ( 0, g.B )( this.pP, this, a ), 0 )
};
g.k.pP = function ( a ) {
  this.Km || ( f5( this ), this.zi = a, this.i.Qs( this ), this.i.ji( 4 ) )
};
g.k.cancel = function () {
  this.Km = !0;
  f5( this )
};
g.k.zP = function () {
  this.Ip = null;
  var a = g.C();
  0 <= a - this.CA ? ( 2 != this.Cp && this.i.ji( 3 ), f5( this ), this.Nk = 2, Z4( 18 ), g5( this ) ) : CIa( this, this.CA - a )
};
g.k.getLastError = function () {
  return this.Nk
};
g.Ra( k5, g.am );
var JIa = /^https?$/i,
  BKa = [ "POST", "PUT" ];
g.k = k5.prototype;
g.k.send = function ( a, b, c, d ) {
  if ( this.i ) throw Error( "[goog.net.XhrIo] Object is active with another request=" + this.W + "; newUri=" + a );
  b = b ? b.toUpperCase() : "GET";
  this.W = a;
  this.u = "";
  this.I = 0;
  this.za = b;
  this.ga = !1;
  this.B = !0;
  this.i = this.ea ? uIa( this.ea ) : uIa( u7 );
  this.ca = this.ea ? this.ea.getOptions() : u7.getOptions();
  this.i.onreadystatechange = ( 0, g.B )( this.DF, this );
  try {
    y4( n5( this, "Opening Xhr" ) ), this.la = !0, this.i.open( b, String( a ), !0 ), this.la = !1
  } catch ( f ) {
    y4( n5( this, "Error opening Xhr: " + f.message ) );
    IIa( this, f );
    return
  }
  a =
    c || "";
  var e = this.headers.clone();
  d && QHa( d, function ( f, h ) {
    e.set( h, f )
  } );
  d = g.$a( e.uh(), GIa );
  c = g.A.FormData && a instanceof g.A.FormData;
  !g.db( BKa, b ) || d || c || e.set( "Content-Type", "application/x-www-form-urlencoded;charset=utf-8" );
  e.forEach( function ( f, h ) {
    this.i.setRequestHeader( h, f )
  }, this );
  this.Da && ( this.i.responseType = this.Da );
  "withCredentials" in this.i && this.i.withCredentials !== this.ia && ( this.i.withCredentials = this.ia );
  try {
    LIa( this ), 0 < this.J && ( this.Y = FIa( this.i ), y4( n5( this, "Will abort after " + this.J + "ms if incomplete, xhr2 " + this.Y ) ), this.Y ? ( this.i.timeout = this.J, this.i.ontimeout = ( 0, g.B )( this.AB, this ) ) : this.X = g.Lm( this.AB, this.J, this ) ), y4( n5( this, "Sending request" ) ), this.L = !0, this.i.send( a ), this.L = !1
  } catch ( f ) {
    y4( n5( this, "Send error: " + f.message ) ), IIa( this, f )
  }
};
g.k.AB = function () {
  "undefined" != typeof g.x_ && this.i && ( this.u = "Timed out after " + this.J + "ms, aborting", this.I = 8, n5( this, this.u ), this.dispatchEvent( "timeout" ), this.abort( 8 ) )
};
g.k.abort = function ( a ) {
  this.i && this.B && ( n5( this, "Aborting" ), this.B = !1, this.C = !0, this.i.abort(), this.C = !1, this.I = a || 7, this.dispatchEvent( "complete" ), this.dispatchEvent( "abort" ), l5( this ) )
};
g.k.da = function () {
  this.i && ( this.B && ( this.B = !1, this.C = !0, this.i.abort(), this.C = !1 ), l5( this, !0 ) );
  k5.Dd.da.call( this )
};
g.k.DF = function () {
  this.na() || ( this.la || this.L || this.C ? KIa( this ) : this.yO() )
};
g.k.yO = function () {
  KIa( this )
};
g.k.isActive = function () {
  return !!this.i
};
g.k.isComplete = function () {
  return 4 == m5( this )
};
g.k.getStatus = function () {
  try {
    return 2 < m5( this ) ? this.i.status : -1
  } catch ( a ) {
    return -1
  }
};
g.k.getResponseHeader = function ( a ) {
  if ( this.i && this.isComplete() ) return a = this.i.getResponseHeader( a ), null === a ? void 0 : a
};
g.k.getLastError = function () {
  return "string" === typeof this.u ? this.u : String( this.u )
};
g.k = MIa.prototype;
g.k.pw = null;
g.k.Dg = null;
g.k.Nu = !1;
g.k.PG = null;
g.k.ut = null;
g.k.Ky = null;
g.k.qw = null;
g.k.Ma = null;
g.k.Oj = -1;
g.k.aq = null;
g.k.kq = null;
g.k.connect = function ( a ) {
  this.qw = a;
  a = p5( this.i, null, this.qw );
  Z4( 3 );
  this.PG = g.C();
  var b = this.i.J;
  null != b ? ( this.aq = b[ 0 ], ( this.kq = b[ 1 ] ) ? ( this.Ma = 1, NIa( this ) ) : ( this.Ma = 2, r5( this ) ) ) : ( w4( a, "MODE", "init" ), this.Dg = new a5( this, void 0, void 0, void 0 ), this.Dg.km = this.pw, b5( this.Dg, a, !1, null, !0 ), this.Ma = 0 )
};
g.k.wK = function ( a ) {
  if ( a ) this.Ma = 2, r5( this );
  else {
    Z4( 4 );
    var b = this.i;
    b.Ki = b.Xk.Oj;
    y5( b, 9 )
  }
  a && this.ji( 2 )
};
g.k.sx = function ( a ) {
  return this.i.sx( a )
};
g.k.abort = function () {
  this.Dg && ( this.Dg.cancel(), this.Dg = null );
  this.Oj = -1
};
g.k.BB = function () {
  return !1
};
g.k.GF = function ( a, b ) {
  this.Oj = a.Zp;
  if ( 0 == this.Ma )
    if ( b ) {
      try {
        var c = this.l.parse( b )
      } catch ( d ) {
        c = this.i;
        c.Ki = this.Oj;
        y5( c, 2 );
        return
      }
      this.aq = c[ 0 ];
      this.kq = c[ 1 ]
    } else c = this.i, c.Ki = this.Oj, y5( c, 2 );
  else if ( 2 == this.Ma )
    if ( this.Nu ) Z4( 7 ), this.Ky = g.C();
    else if ( "11111" == b ) {
    if ( Z4( 6 ), this.Nu = !0, this.ut = g.C(), c = this.ut - this.PG, !g.ve || g.Yd( 10 ) || 500 > c ) this.Oj = 200, this.Dg.cancel(), Z4( 12 ), q5( this.i, this, !0 )
  } else Z4( 8 ), this.ut = this.Ky = g.C(), this.Nu = !1
};
g.k.Qs = function () {
  this.Oj = this.Dg.Zp;
  if ( this.Dg.zi ) 0 == this.Ma ? this.kq ? ( this.Ma = 1, NIa( this ) ) : ( this.Ma = 2, r5( this ) ) : 2 == this.Ma && ( ( !g.ve || g.Yd( 10 ) ? !this.Nu : 200 > this.Ky - this.ut ) ? ( Z4( 11 ), q5( this.i, this, !1 ) ) : ( Z4( 12 ), q5( this.i, this, !0 ) ) );
  else {
    0 == this.Ma ? Z4( 9 ) : 2 == this.Ma && Z4( 10 );
    var a = this.i;
    this.Dg.getLastError();
    a.Ki = this.Oj;
    y5( a, 2 )
  }
};
g.k.Wr = function () {
  return this.i.Wr()
};
g.k.isActive = function () {
  return this.i.isActive()
};
g.k.ji = function ( a ) {
  this.i.ji( a )
};
g.k = s5.prototype;
g.k.Ji = null;
g.k.Eq = null;
g.k.qg = null;
g.k.Zd = null;
g.k.rw = null;
g.k.vt = null;
g.k.pC = null;
g.k.Rs = null;
g.k.wr = 0;
g.k.pM = 0;
g.k.yf = null;
g.k.jl = null;
g.k.Rj = null;
g.k.Sm = null;
g.k.Xk = null;
g.k.xv = null;
g.k.Ro = -1;
g.k.rE = -1;
g.k.Ki = -1;
g.k.xo = 0;
g.k.eo = 0;
g.k.Lm = 8;
g.Ra( PIa, g.Hl );
g.Ra( QIa, g.Hl );
g.k = s5.prototype;
g.k.connect = function ( a, b, c, d, e ) {
  Z4( 0 );
  this.rw = b;
  this.Eq = c || {};
  d && void 0 !== e && ( this.Eq.OSID = d, this.Eq.OAID = e );
  this.C ? ( X4( ( 0, g.B )( this.IC, this, a ), 100 ), UIa( this ) ) : this.IC( a )
};
g.k.IC = function ( a ) {
  this.Xk = new MIa( this );
  this.Xk.pw = this.Ji;
  this.Xk.l = this.B;
  this.Xk.connect( a )
};
g.k.BB = function () {
  return 0 == this.Ma
};
g.k.getState = function () {
  return this.Ma
};
g.k.NF = function ( a ) {
  this.jl = null;
  YIa( this, a )
};
g.k.MF = function () {
  this.Rj = null;
  this.Zd = new a5( this, this.l, "rpc", this.I );
  this.Zd.km = this.Ji;
  this.Zd.ow = 0;
  var a = this.pC.clone();
  u4( a, "RID", "rpc" );
  u4( a, "SID", this.l );
  u4( a, "CI", this.xv ? "0" : "1" );
  u4( a, "AID", this.Ro );
  t5( this, a );
  if ( !g.ve || g.Yd( 10 ) ) u4( a, "TYPE", "xmlhttp" ), b5( this.Zd, a, !0, this.Rs, !1 );
  else {
    u4( a, "TYPE", "html" );
    var b = this.Zd,
      c = !!this.Rs;
    b.Cp = 3;
    b.Tk = v4( a.clone() );
    BIa( b, c )
  }
};
g.k.GF = function ( a, b ) {
  if ( 0 != this.Ma && ( this.Zd == a || this.qg == a ) )
    if ( this.Ki = a.Zp, this.qg == a && 3 == this.Ma )
      if ( 7 < this.Lm ) {
        try {
          var c = this.B.parse( b )
        } catch ( f ) {
          c = null
        }
        if ( Array.isArray( c ) && 3 == c.length )
          if ( 0 == c[ 0 ] ) a: {
            if ( !this.Rj ) {
              if ( this.Zd )
                if ( this.Zd.qp + 3E3 < this.qg.qp ) v5( this ), this.Zd.cancel(), this.Zd = null;
                else break a;
              x5( this );
              Z4( 19 )
            }
          }
        else this.rE = c[ 1 ], 0 < this.rE - this.Ro && 37500 > c[ 2 ] && this.xv && 0 == this.eo && !this.Sm && ( this.Sm = X4( ( 0, g.B )( this.UM, this ), 6E3 ) );
        else y5( this, 11 )
      } else b != AKa.vU.i && y5( this, 11 );
  else if ( this.Zd ==
    a && v5( this ), !g.mc( b ) ) {
    c = this.B.parse( b );
    for ( var d = 0; d < c.length; d++ ) {
      var e = c[ d ];
      this.Ro = e[ 0 ];
      e = e[ 1 ];
      2 == this.Ma ? "c" == e[ 0 ] ? ( this.l = e[ 1 ], this.Rs = e[ 2 ], e = e[ 3 ], null != e ? this.Lm = e : this.Lm = 6, this.Ma = 3, this.yf && this.yf.EC(), this.pC = p5( this, this.Wr() ? this.Rs : null, this.rw ), ZIa( this ) ) : "stop" == e[ 0 ] && y5( this, 7 ) : 3 == this.Ma && ( "stop" == e[ 0 ] ? y5( this, 7 ) : "noop" != e[ 0 ] && this.yf && this.yf.DC( e ), this.eo = 0 )
    }
  }
};
g.k.UM = function () {
  null != this.Sm && ( this.Sm = null, this.Zd.cancel(), this.Zd = null, x5( this ), Z4( 20 ) )
};
g.k.Qs = function ( a ) {
  if ( this.Zd == a ) {
    v5( this );
    this.Zd = null;
    var b = 2
  } else if ( this.qg == a ) this.qg = null, b = 1;
  else return;
  this.Ki = a.Zp;
  if ( 0 != this.Ma )
    if ( a.zi ) 1 == b ? ( b = Y4, b.dispatchEvent( new PIa( b, a.zn ? a.zn.length : 0, g.C() - a.qp, this.xo ) ), u5( this ), this.u.length = 0 ) : ZIa( this );
    else {
      var c = a.getLastError(),
        d;
      if ( !( d = 3 == c || 7 == c || 0 == c && 0 < this.Ki ) ) {
        if ( d = 1 == b ) this.qg || this.jl || 1 == this.Ma || 2 <= this.xo ? d = !1 : ( this.jl = X4( ( 0, g.B )( this.NF, this, a ), $Ia( this, this.xo ) ), this.xo++, d = !0 );
        d = !( d || 2 == b && x5( this ) )
      }
      if ( d ) switch ( c ) {
        case 1:
          y5( this,
            5 );
          break;
        case 4:
          y5( this, 10 );
          break;
        case 3:
          y5( this, 6 );
          break;
        case 7:
          y5( this, 12 );
          break;
        default:
          y5( this, 2 )
      }
    }
};
g.k.RK = function ( a ) {
  if ( !g.db( arguments, this.Ma ) ) throw Error( "Unexpected channel state: " + this.Ma );
};
g.k.FQ = function ( a ) {
  a ? Z4( 2 ) : ( Z4( 1 ), aJa( this, 8 ) )
};
g.k.sx = function ( a ) {
  if ( a ) throw Error( "Can't create secondary domain capable XhrIo object." );
  a = new k5;
  a.ia = !1;
  return a
};
g.k.isActive = function () {
  return !!this.yf && this.yf.isActive( this )
};
g.k.ji = function ( a ) {
  var b = Y4;
  b.dispatchEvent( new QIa( b, a ) )
};
g.k.Wr = function () {
  return !( !g.ve || g.Yd( 10 ) )
};
g.k = bJa.prototype;
g.k.EC = function () {};
g.k.DC = function () {};
g.k.CC = function () {};
g.k.bx = function () {};
g.k.mD = function () {
  return {}
};
g.k.isActive = function () {
  return !0
};
g.k = cJa.prototype;
g.k.isEmpty = function () {
  return g.eb( this.i ) && g.eb( this.l )
};
g.k.clear = function () {
  this.i = [];
  this.l = []
};
g.k.contains = function ( a ) {
  return g.db( this.i, a ) || g.db( this.l, a )
};
g.k.remove = function ( a ) {
  var b = this.i;
  var c = ( 0, g.hCa )( b, a );
  0 <= c ? ( g.gb( b, c ), b = !0 ) : b = !1;
  return b || g.ib( this.l, a )
};
g.k.tg = function () {
  for ( var a = [], b = this.i.length - 1; 0 <= b; --b ) a.push( this.i[ b ] );
  var c = this.l.length;
  for ( b = 0; b < c; ++b ) a.push( this.l[ b ] );
  return a
};
g.Ra( z5, g.I );
g.k = z5.prototype;
g.k.jP = function () {
  this.If = Math.min( 3E5, 2 * this.If );
  this.u();
  this.l && this.start()
};
g.k.start = function () {
  var a = this.If + 15E3 * Math.random();
  g.kn( this.i, a );
  this.l = g.C() + a
};
g.k.stop = function () {
  this.i.stop();
  this.l = 0
};
g.k.isActive = function () {
  return this.i.isActive()
};
g.k.reset = function () {
  this.i.stop();
  this.If = 5E3
};
g.Ra( A5, bJa );
g.k = A5.prototype;
g.k.subscribe = function ( a, b, c ) {
  return this.u.subscribe( a, b, c )
};
g.k.unsubscribe = function ( a, b, c ) {
  return this.u.unsubscribe( a, b, c )
};
g.k.Of = function ( a ) {
  return this.u.Of( a )
};
g.k.V = function ( a, b ) {
  return this.u.V.apply( this.u, arguments )
};
g.k.dispose = function () {
  this.X || ( this.X = !0, g.Ni( this.u ), fJa( this ), g.Ni( this.l ), this.l = null, this.Y = function () {
    return ""
  } )
};
g.k.na = function () {
  return this.X
};
g.k.connect = function ( a, b, c ) {
  if ( !this.i || 2 != this.i.getState() ) {
    this.W = "";
    this.l.stop();
    this.C = a || null;
    this.B = b || 0;
    a = this.ca + "/test";
    b = this.ca + "/bind";
    var d = new s5( c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.ea ),
      e = this.i;
    e && ( e.yf = null );
    d.yf = this;
    this.i = d;
    B5( this );
    if ( this.i ) {
      d = g.O( "ID_TOKEN" );
      var f = this.i.Ji || {};
      d ? f[ "x-youtube-identity-token" ] = d : delete f[ "x-youtube-identity-token" ];
      this.i.Ji = f
    }
    e ? ( 3 != e.getState() && 0 == WIa( e ) || e.getState(), this.i.connect( a, b, this.I, e.l, e.Ro ) ) : c ? this.i.connect( a,
      b, this.I, c.sessionId, c.arrayId ) : this.i.connect( a, b, this.I )
  }
};
g.k.sendMessage = function ( a, b ) {
  var c = {
    _sc: a
  };
  b && g.Tb( c, b );
  this.l.isActive() || 2 == ( this.i ? this.i.getState() : 0 ) ? this.J.push( c ) : C5( this ) && ( B5( this ), VIa( this.i, c ) )
};
g.k.EC = function () {
  this.l.reset();
  this.C = null;
  this.B = 0;
  if ( this.J.length ) {
    var a = this.J;
    this.J = [];
    for ( var b = 0, c = a.length; b < c; ++b ) VIa( this.i, a[ b ] )
  }
  this.V( "handlerOpened" )
};
g.k.CC = function ( a ) {
  var b = 2 == a && 401 == this.i.Ki;
  4 == a || b || this.l.start();
  this.V( "handlerError", a, b )
};
g.k.bx = function ( a ) {
  if ( !this.l.isActive() ) this.V( "handlerClosed" );
  else if ( a )
    for ( var b = 0, c = a.length; b < c; ++b ) {
      var d = a[ b ].map;
      d && this.J.push( d )
    }
};
g.k.mD = function () {
  var a = {
    v: 2
  };
  this.W && ( a.gsessionid = this.W );
  0 != this.B && ( a.ui = "" + this.B );
  0 != this.L && ( a.ui = "" + this.L );
  this.C && g.Tb( a, this.C );
  return a
};
g.k.DC = function ( a ) {
  "S" == a[ 0 ] ? this.W = a[ 1 ] : "gracefulReconnect" == a[ 0 ] ? ( this.l.start(), TIa( this.i ) ) : this.V( "handlerMessage", new dJa( a[ 0 ], a[ 1 ] ) )
};
g.k.Wu = function ( a ) {
  ( this.I.loungeIdToken = a ) || this.l.stop();
  if ( this.ia && this.i ) {
    var b = this.i.Ji || {};
    a ? b[ "X-YouTube-LoungeId-Token" ] = a : delete b[ "X-YouTube-LoungeId-Token" ];
    this.i.Ji = b
  }
};
g.k.hQ = function () {
  this.l.isActive();
  0 == WIa( this.i ) && this.connect( this.C, this.B )
};
D5.prototype.B = function ( a, b, c, d ) {
  b ? a( d ) : a( {
    text: c.responseText
  } )
};
D5.prototype.u = function ( a, b ) {
  a( Error( "Request error: " + b.status ) )
};
D5.prototype.C = function ( a ) {
  a( Error( "request timed out" ) )
};
var mJa = g.C(),
  G5 = null,
  J5 = Array( 50 ),
  I5 = -1,
  K5 = !1;
g.Ra( L5, g.Q );
L5.prototype.Rg = function () {
  return this.screens
};
L5.prototype.contains = function ( a ) {
  return !!G4( this.screens, a )
};
L5.prototype.get = function ( a ) {
  return a ? H4( this.screens, a ) : null
};
L5.prototype.info = function ( a ) {
  H5( this.I, a )
};
g.u( M5, g.Q );
g.k = M5.prototype;
g.k.start = function () {
  !this.i && isNaN( this.gb ) && this.ZF()
};
g.k.stop = function () {
  this.i && ( this.i.abort(), this.i = null );
  isNaN( this.gb ) || ( g.Bo( this.gb ), this.gb = NaN )
};
g.k.da = function () {
  this.stop();
  g.Q.prototype.da.call( this )
};
g.k.ZF = function () {
  this.gb = NaN;
  this.i = g.Yp( E5( this.u, "/pairing/get_screen" ), {
    method: "POST",
    postParams: {
      pairing_code: this.I
    },
    timeout: 5E3,
    onSuccess: ( 0, g.B )( this.HJ, this ),
    onError: ( 0, g.B )( this.GJ, this ),
    onTimeout: ( 0, g.B )( this.IJ, this )
  } )
};
g.k.HJ = function ( a, b ) {
  this.i = null;
  var c = b.screen || {};
  c.dialId = this.B;
  c.name = this.C;
  this.V( "pairingComplete", new B4( c ) )
};
g.k.GJ = function ( a ) {
  this.i = null;
  a.status && 404 == a.status ? this.l >= CKa.length ? this.V( "pairingFailed", Error( "DIAL polling timed out" ) ) : ( a = CKa[ this.l ], this.gb = g.zo( ( 0, g.B )( this.ZF, this ), a ), this.l++ ) : this.V( "pairingFailed", Error( "Server error " + a.status ) )
};
g.k.IJ = function () {
  this.i = null;
  this.V( "pairingFailed", Error( "Server not responding" ) )
};
var CKa = [ 2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4 ];
g.Ra( O5, L5 );
g.k = O5.prototype;
g.k.start = function () {
  N5( this ) && this.V( "screenChange" );
  !g.Fu( "yt-remote-lounge-token-expiration" ) && qJa( this );
  g.Bo( this.i );
  this.i = g.zo( ( 0, g.B )( this.start, this ), 1E4 )
};
g.k.add = function ( a, b ) {
  N5( this );
  nJa( this, a );
  P5( this, !1 );
  this.V( "screenChange" );
  b( a );
  a.token || qJa( this )
};
g.k.remove = function ( a, b ) {
  var c = N5( this );
  pJa( this, a ) && ( P5( this, !1 ), c = !0 );
  b( a );
  c && this.V( "screenChange" )
};
g.k.vv = function ( a, b, c, d ) {
  var e = N5( this ),
    f = this.get( a.id );
  f ? ( f.name != b && ( f.name = b, P5( this, !1 ), e = !0 ), c( a ) ) : d( Error( "no such local screen." ) );
  e && this.V( "screenChange" )
};
g.k.da = function () {
  g.Bo( this.i );
  O5.Dd.da.call( this )
};
g.k.sL = function ( a ) {
  N5( this );
  var b = this.screens.length;
  a = a && a.screens || [];
  for ( var c = 0, d = a.length; c < d; ++c ) {
    var e = a[ c ],
      f = this.get( e.screenId );
    f && ( f.token = e.loungeToken, --b )
  }
  P5( this, !b );
  b && H5( this.I, "Missed " + b + " lounge tokens." )
};
g.k.rL = function ( a ) {
  H5( this.I, "Requesting lounge tokens failed: " + a )
};
g.u( R5, g.Q );
g.k = R5.prototype;
g.k.start = function () {
  var a = parseInt( g.Fu( "yt-remote-fast-check-period" ) || "0", 10 );
  ( this.B = g.C() - 144E5 < a ? 0 : a ) ? U5( this ): ( this.B = g.C() + 3E5, g.Eu( "yt-remote-fast-check-period", this.B ), this.Dz() )
};
g.k.isEmpty = function () {
  return g.Mb( this.i )
};
g.k.update = function () {
  Q5( "Updating availability on schedule." );
  var a = this.I(),
    b = g.Bb( this.i, function ( c, d ) {
      return c && !!H4( a, d )
    }, this );
  T5( this, b )
};
g.k.da = function () {
  g.Bo( this.u );
  this.u = NaN;
  this.l && ( this.l.abort(), this.l = null );
  g.Q.prototype.da.call( this )
};
g.k.Dz = function () {
  g.Bo( this.u );
  this.u = NaN;
  this.l && this.l.abort();
  var a = sJa( this );
  if ( x4( a ) ) {
    var b = E5( this.C, "/pairing/get_screen_availability" );
    this.l = F5( this.C, b, {
      lounge_token: g.Hb( a ).join( "," )
    }, ( 0, g.B )( this.SO, this, a ), ( 0, g.B )( this.RO, this ) )
  } else T5( this, {} ), U5( this )
};
g.k.SO = function ( a, b ) {
  this.l = null;
  var c = g.Hb( sJa( this ) );
  if ( g.wb( c, g.Hb( a ) ) ) {
    c = b.screens || [];
    for ( var d = {}, e = 0, f = c.length; e < f; ++e ) d[ a[ c[ e ].loungeToken ] ] = "online" == c[ e ].status;
    T5( this, d );
    U5( this )
  } else this.Fd( "Changing Screen set during request." ), this.Dz()
};
g.k.RO = function ( a ) {
  this.Fd( "Screen availability failed: " + a );
  this.l = null;
  U5( this )
};
g.k.Fd = function ( a ) {
  H5( "OnlineScreenService", a )
};
g.Ra( V5, L5 );
g.k = V5.prototype;
g.k.start = function () {
  this.l.start();
  this.i.start();
  this.screens.length && ( this.V( "screenChange" ), this.i.isEmpty() || this.V( "onlineScreenChange" ) )
};
g.k.add = function ( a, b, c ) {
  this.l.add( a, b, c )
};
g.k.remove = function ( a, b, c ) {
  this.l.remove( a, b, c );
  this.i.update()
};
g.k.vv = function ( a, b, c, d ) {
  this.l.contains( a ) ? this.l.vv( a, b, c, d ) : ( a = "Updating name of unknown screen: " + a.name, H5( this.I, a ), d( Error( a ) ) )
};
g.k.Rg = function ( a ) {
  return a ? this.screens : g.kb( this.screens, g.He( this.u, function ( b ) {
    return !this.contains( b )
  }, this ) )
};
g.k.CB = function () {
  return g.He( this.Rg( !0 ), function ( a ) {
    return !!this.i.i[ a.id ]
  }, this )
};
g.k.DB = function ( a, b, c, d, e ) {
  this.info( "getDialScreenByPairingCode " + a + " / " + b );
  var f = new M5( this.B, a, b, c );
  f.subscribe( "pairingComplete", ( 0, g.B )( function ( h ) {
    g.Ni( f );
    d( W5( this, h ) )
  }, this ) );
  f.subscribe( "pairingFailed", function ( h ) {
    g.Ni( f );
    e( h )
  } );
  f.start();
  return ( 0, g.B )( f.stop, f )
};
g.k.JJ = function ( a, b, c, d ) {
  g.Yp( E5( this.B, "/pairing/get_screen" ), {
    method: "POST",
    postParams: {
      pairing_code: a
    },
    timeout: 5E3,
    onSuccess: ( 0, g.B )( function ( e, f ) {
      var h = new B4( f.screen || {} );
      if ( !h.name || wJa( this, h.name ) ) {
        a: {
          var l = h.name;
          for ( var m = 2, n = b( l, m ); wJa( this, n ); ) {
            m++;
            if ( 20 < m ) break a;
            n = b( l, m )
          }
          l = n
        }
        h.name = l
      }
      c( W5( this, h ) )
    }, this ),
    onError: ( 0, g.B )( function ( e ) {
      d( Error( "pairing request failed: " + e.status ) )
    }, this ),
    onTimeout: ( 0, g.B )( function () {
      d( Error( "pairing request timed out." ) )
    }, this )
  } )
};
g.k.da = function () {
  g.Ni( this.l );
  g.Ni( this.i );
  V5.Dd.da.call( this )
};
g.k.yL = function () {
  yJa( this );
  this.V( "screenChange" );
  this.i.update()
};
V5.prototype.dispose = V5.prototype.dispose;
g.Ra( Y5, g.Q );
g.k = Y5.prototype;
g.k.getScreen = function () {
  return this.u
};
g.k.cg = function ( a ) {
  this.na() || ( a && $5( this, "" + a ), this.u = null, this.V( "sessionScreen", null ) )
};
g.k.info = function ( a ) {
  H5( this.ia, a )
};
g.k.EB = function () {
  return null
};
g.k.Oz = function ( a ) {
  var b = this.i;
  a ? ( b.displayStatus = new chrome.cast.ReceiverDisplayStatus( a, [] ), b.displayStatus.showStop = !0 ) : b.displayStatus = null;
  chrome.cast.setReceiverDisplayStatus( b, ( 0, g.B )( function () {
    this.info( "Updated receiver status for " + b.friendlyName + ": " + a )
  }, this ), ( 0, g.B )( function () {
    $5( this, "Failed to update receiver status for: " + b.friendlyName )
  }, this ) )
};
g.k.da = function () {
  this.Oz( "" );
  Y5.Dd.da.call( this )
};
g.u( a6, Y5 );
g.k = a6.prototype;
g.k.Nz = function ( a ) {
  if ( this.l ) {
    if ( this.l == a ) return;
    $5( this, "Overriding cast session with new session object" );
    GJa( this );
    this.ea = !1;
    this.W = "unknown";
    this.l.removeUpdateListener( this.Y );
    this.l.removeMessageListener( "urn:x-cast:com.google.youtube.mdx", this.ca )
  }
  this.l = a;
  this.l.addUpdateListener( this.Y );
  this.l.addMessageListener( "urn:x-cast:com.google.youtube.mdx", this.ca );
  CJa( this, "getMdxSessionStatus" )
};
g.k.So = function ( a ) {
  this.info( "launchWithParams no-op for Cast: " + g.Oj( a ) )
};
g.k.stop = function () {
  this.l ? this.l.stop( ( 0, g.B )( function () {
    this.cg()
  }, this ), ( 0, g.B )( function () {
    this.cg( Error( "Failed to stop receiver app." ) )
  }, this ) ) : this.cg( Error( "Stopping cast device without session." ) )
};
g.k.Oz = function () {};
g.k.da = function () {
  this.info( "disposeInternal" );
  GJa( this );
  this.l && ( this.l.removeUpdateListener( this.Y ), this.l.removeMessageListener( "urn:x-cast:com.google.youtube.mdx", this.ca ) );
  this.l = null;
  Y5.prototype.da.call( this )
};
g.k.EP = function ( a, b ) {
  if ( !this.na() )
    if ( b ) {
      var c = V4( b );
      if ( g.Ma( c ) ) {
        var d = "" + c.type;
        c = c.data || {};
        this.info( "onYoutubeMessage_: " + d + " " + g.Oj( c ) );
        switch ( d ) {
          case "mdxSessionStatus":
            AJa( this, c );
            break;
          case "loungeToken":
            DJa( this, c );
            break;
          default:
            $5( this, "Unknown youtube message: " + d )
        }
      } else $5( this, "Unable to parse message." )
    } else $5( this, "No data in message." )
};
g.k.DD = function ( a, b, c, d ) {
  g.Bo( this.L );
  this.L = 0;
  vJa( this.B, this.i.label, a, this.i.friendlyName, ( 0, g.B )( function ( e ) {
    e ? b( e ) : 0 <= d ? ( $5( this, "Screen " + a + " appears to be offline. " + d + " retries left." ), this.L = g.zo( ( 0, g.B )( this.DD, this, a, b, c, d - 1 ), 300 ) ) : c( Error( "Unable to fetch screen." ) )
  }, this ), c )
};
g.k.EB = function () {
  return this.l
};
g.k.KJ = function ( a ) {
  this.na() || a || ( $5( this, "Cast session died." ), this.cg() )
};
g.u( d6, Y5 );
g.k = d6.prototype;
g.k.Nz = function ( a ) {
  this.C = a;
  this.C.addUpdateListener( this.X )
};
g.k.So = function ( a ) {
  this.Y = a;
  this.J()
};
g.k.stop = function () {
  this.l();
  this.l = g.Ia;
  g.Bo( this.I );
  this.C ? this.C.stop( ( 0, g.B )( this.cg, this, null ), ( 0, g.B )( this.cg, this, "Failed to stop DIAL device." ) ) : this.cg()
};
g.k.da = function () {
  this.l();
  this.l = g.Ia;
  g.Bo( this.I );
  this.C && this.C.removeUpdateListener( this.X );
  this.C = null;
  Y5.prototype.da.call( this )
};
g.k.LJ = function ( a ) {
  this.na() || a || ( $5( this, "DIAL session died." ), this.l(), this.l = g.Ia, this.cg() )
};
g.k.uy = function ( a ) {
  this.W = F4();
  if ( this.Y ) {
    var b = new chrome.cast.DialLaunchResponse( !0, IJa( this ) );
    a( b );
    HJa( this )
  } else this.J = ( 0, g.B )( function () {
    g.Bo( this.I );
    this.J = g.Ia;
    this.I = NaN;
    var c = new chrome.cast.DialLaunchResponse( !0, IJa( this ) );
    a( c );
    HJa( this )
  }, this ), this.I = g.zo( ( 0, g.B )( function () {
    this.J()
  }, this ), 100 )
};
g.k.OL = function ( a, b, c ) {
  vJa( this.B, this.L.receiver.label, a, this.i.friendlyName, ( 0, g.B )( function ( d ) {
    d && d.token ? ( Z5( this, d ), b( new chrome.cast.DialLaunchResponse( !1 ) ) ) : this.uy( b, c )
  }, this ), ( 0, g.B )( function ( d ) {
    $5( this, "Failed to get DIAL screen: " + d );
    this.uy( b, c )
  }, this ) )
};
g.u( e6, Y5 );
e6.prototype.stop = function () {
  this.cg()
};
e6.prototype.Nz = function () {};
e6.prototype.So = function () {
  g.Bo( this.l );
  this.l = NaN;
  var a = H4( this.B.Rg(), this.i.label );
  a ? Z5( this, a ) : this.cg( Error( "No such screen" ) )
};
e6.prototype.da = function () {
  g.Bo( this.l );
  this.l = NaN;
  Y5.prototype.da.call( this )
};
g.u( f6, g.Q );
g.k = f6.prototype;
g.k.init = function ( a, b ) {
  chrome.cast.timeout.requestSession = 3E4;
  var c = new chrome.cast.SessionRequest( this.L );
  this.W || ( c.dialRequest = new chrome.cast.DialRequest( "YouTube" ) );
  var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
    e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION,
    f = ( 0, g.B )( this.CO, this );
  c = new chrome.cast.ApiConfig( c, ( 0, g.B )( this.IF, this ), f, d, e );
  c.customDialLaunchCallback = ( 0, g.B )( this.pN, this );
  chrome.cast.initialize( c, ( 0, g.B )( function () {
    this.na() ||
      ( chrome.cast.addReceiverActionListener( this.I ), jJa(), this.l.subscribe( "onlineScreenChange", ( 0, g.B )( this.FB, this ) ), this.u = KJa( this ), chrome.cast.setCustomReceivers( this.u, g.Ia, ( 0, g.B )( function ( h ) {
        this.Fd( "Failed to set initial custom receivers: " + g.Oj( h ) )
      }, this ) ), this.V( "yt-remote-cast2-availability-change", h6( this ) ), b( !0 ) )
  }, this ), ( 0, g.B )( function ( h ) {
    this.Fd( "Failed to initialize API: " + g.Oj( h ) );
    b( !1 )
  }, this ) )
};
g.k.oQ = function ( a, b ) {
  g6( "Setting connected screen ID: " + a + " -> " + b );
  if ( this.i ) {
    var c = this.i.getScreen();
    if ( !a || c && c.id != a ) g6( "Unsetting old screen status: " + this.i.i.friendlyName ), i6( this, null )
  }
  if ( a && b ) {
    if ( !this.i ) {
      c = H4( this.l.Rg(), a );
      if ( !c ) {
        g6( "setConnectedScreenStatus: Unknown screen." );
        return
      }
      if ( "shortLived" == c.idType ) {
        g6( "setConnectedScreenStatus: Screen with id type to be short lived." );
        return
      }
      var d = JJa( this, c );
      d || ( g6( "setConnectedScreenStatus: Connected receiver not custom..." ), d = new chrome.cast.Receiver( c.uuid ?
        c.uuid : c.id, c.name ), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.u.push( d ), chrome.cast.setCustomReceivers( this.u, g.Ia, ( 0, g.B )( function ( e ) {
        this.Fd( "Failed to set initial custom receivers: " + g.Oj( e ) )
      }, this ) ) );
      g6( "setConnectedScreenStatus: new active receiver: " + d.friendlyName );
      i6( this, new e6( this.l, d ), !0 )
    }
    this.i.Oz( b )
  } else g6( "setConnectedScreenStatus: no screen." )
};
g.k.pQ = function ( a ) {
  this.na() ? this.Fd( "Setting connection data on disposed cast v2" ) : this.i ? this.i.So( a ) : this.Fd( "Setting connection data without a session" )
};
g.k.NJ = function () {
  this.na() ? this.Fd( "Stopping session on disposed cast v2" ) : this.i ? ( this.i.stop(), i6( this, null ) ) : g6( "Stopping non-existing session" )
};
g.k.requestSession = function () {
  chrome.cast.requestSession( ( 0, g.B )( this.IF, this ), ( 0, g.B )( this.VO, this ) )
};
g.k.da = function () {
  this.l.unsubscribe( "onlineScreenChange", ( 0, g.B )( this.FB, this ) );
  window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener( this.I );
  var a = gJa,
    b = g.Ha( "yt.mdx.remote.debug.handlers_" );
  g.ib( b || [], a );
  g.Ni( this.i );
  g.Q.prototype.da.call( this )
};
g.k.Fd = function ( a ) {
  H5( "Controller", a )
};
g.k.KF = function ( a, b ) {
  this.i == a && ( b || i6( this, null ), this.V( "yt-remote-cast2-session-change", b ) )
};
g.k.zO = function ( a, b ) {
  if ( !this.na() )
    if ( a ) switch ( a.friendlyName = chrome.cast.unescape( a.friendlyName ), g6( "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b ), b ) {
      case chrome.cast.ReceiverAction.CAST:
        if ( this.i )
          if ( this.i.i.label != a.label ) g6( "onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName ), this.i.stop();
          else {
            g6( "onReceiverAction_: Casting to active receiver." );
            this.i.getScreen() && this.V( "yt-remote-cast2-session-change", this.i.getScreen() );
            break
          } switch ( a.receiverType ) {
          case chrome.cast.ReceiverType.CUSTOM:
            i6( this,
              new e6( this.l, a ) );
            break;
          case chrome.cast.ReceiverType.DIAL:
            i6( this, new d6( this.l, a, this.C ) );
            break;
          case chrome.cast.ReceiverType.CAST:
            i6( this, new a6( this.l, a, this.B ) );
            break;
          default:
            this.Fd( "Unknown receiver type: " + a.receiverType )
        }
        break;
      case chrome.cast.ReceiverAction.STOP:
        this.i && this.i.i.label == a.label ? this.i.stop() : this.Fd( "Stopping receiver w/o session: " + a.friendlyName )
    } else this.Fd( "onReceiverAction_ called without receiver." )
};
g.k.pN = function ( a ) {
  if ( this.na() ) return Promise.reject( Error( "disposed" ) );
  var b = a.receiver;
  b.receiverType != chrome.cast.ReceiverType.DIAL && ( this.Fd( "Not DIAL receiver: " + b.friendlyName ), b.receiverType = chrome.cast.ReceiverType.DIAL );
  var c = this.i ? this.i.i : null;
  if ( !c || c.label != b.label ) return this.Fd( "Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName ), Promise.reject( Error( "illegal DIAL launch" ) );
  if ( c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL ) {
    if ( this.i.getScreen() ) return g6( "Reselecting dial screen." ),
      this.V( "yt-remote-cast2-session-change", this.i.getScreen() ), Promise.resolve( new chrome.cast.DialLaunchResponse( !1 ) );
    this.Fd( 'Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName );
    i6( this, new d6( this.l, b, this.C ) )
  }
  b = this.i;
  b.L = a;
  return b.L.appState == chrome.cast.DialAppState.RUNNING ? new Promise( ( 0, g.B )( b.OL, b, ( b.L.extraData || {} ).screenId || null ) ) : new Promise( ( 0, g.B )( b.uy, b ) )
};
g.k.IF = function ( a ) {
  if ( !this.na() ) {
    g6( "New cast session ID: " + a.sessionId );
    var b = a.receiver;
    if ( b.receiverType != chrome.cast.ReceiverType.CUSTOM ) {
      if ( !this.i )
        if ( b.receiverType == chrome.cast.ReceiverType.CAST ) g6( "Got resumed cast session before resumed mdx connection." ), b.friendlyName = chrome.cast.unescape( b.friendlyName ), i6( this, new a6( this.l, b, this.B ), !0 );
        else {
          this.Fd( "Got non-cast session without previous mdx receiver event, or mdx resume." );
          return
        } var c = this.i.i,
        d = H4( this.l.Rg(), c.label );
      d && C4( d, b.label ) &&
        c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && ( g6( "onSessionEstablished_: manual to cast session change " + b.friendlyName ), g.Ni( this.i ), this.i = new a6( this.l, b, this.B ), this.i.subscribe( "sessionScreen", ( 0, g.B )( this.KF, this, this.i ) ), this.i.So( null ) );
      this.i.Nz( a )
    }
  }
};
g.k.MJ = function () {
  return this.i ? this.i.EB() : null
};
g.k.VO = function ( a ) {
  this.na() || ( this.Fd( "Failed to estabilish a session: " + g.Oj( a ) ), a.code != chrome.cast.ErrorCode.CANCEL && i6( this, null ) )
};
g.k.CO = function ( a ) {
  g6( "Receiver availability updated: " + a );
  if ( !this.na() ) {
    var b = h6( this );
    this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
    h6( this ) != b && this.V( "yt-remote-cast2-availability-change", h6( this ) )
  }
};
g.k.FB = function () {
  this.na() || ( this.u = KJa( this ), g6( "Updating custom receivers: " + g.Oj( this.u ) ), chrome.cast.setCustomReceivers( this.u, g.Ia, ( 0, g.B )( function () {
    this.Fd( "Failed to set custom receivers." )
  }, this ) ), this.V( "yt-remote-cast2-availability-change", h6( this ) ) )
};
f6.prototype.setLaunchParams = f6.prototype.pQ;
f6.prototype.setConnectedScreenStatus = f6.prototype.oQ;
f6.prototype.stopSession = f6.prototype.NJ;
f6.prototype.getCastSession = f6.prototype.MJ;
f6.prototype.requestSession = f6.prototype.requestSession;
f6.prototype.init = f6.prototype.init;
f6.prototype.dispose = f6.prototype.dispose;
var o6 = [];
g.k = t6.prototype;
g.k.reset = function ( a ) {
  this.listId = "";
  this.index = -1;
  this.videoId = "";
  u6( this );
  this.volume = -1;
  this.muted = !1;
  a && ( this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.i = a.trackData, this.dj = a.hasPrevious, this.hasNext = a.hasNext, this.L = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.l = a.seekableEnd, this.I = a.duration, this.W = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN( this.B ) )
};
g.k.Kb = function () {
  return 1 == this.playerState
};
g.k.isAdPlaying = function () {
  return 1081 == this.playerState
};
g.k.getDuration = function () {
  return this.u ? this.I + v6( this ) : this.I
};
g.k.clone = function () {
  return new t6( z6( this ) )
};
g.u( B6, g.Q );
g.k = B6.prototype;
g.k.getState = function () {
  return this.Ma
};
g.k.play = function () {
  D6( this ) ? ( this.i ? this.i.play( null, g.Ia, I6( this, "play" ) ) : H6( this, "play" ), G6( this, 1, x6( C6( this ) ) ), this.V( "remotePlayerChange" ) ) : E6( this, this.play )
};
g.k.pause = function () {
  D6( this ) ? ( this.i ? this.i.pause( null, g.Ia, I6( this, "pause" ) ) : H6( this, "pause" ), G6( this, 2, x6( C6( this ) ) ), this.V( "remotePlayerChange" ) ) : E6( this, this.pause )
};
g.k.seekTo = function ( a ) {
  if ( D6( this ) ) {
    if ( this.i ) {
      var b = C6( this ),
        c = new chrome.cast.media.SeekRequest;
      c.currentTime = a;
      b.Kb() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
      this.i.seek( c, g.Ia, I6( this, "seekTo", {
        newTime: a
      } ) )
    } else H6( this, "seekTo", {
      newTime: a
    } );
    G6( this, 3, a );
    this.V( "remotePlayerChange" )
  } else E6( this, g.Pa( this.seekTo, a ) )
};
g.k.stop = function () {
  if ( D6( this ) ) {
    this.i ? this.i.stop( null, g.Ia, I6( this, "stopVideo" ) ) : H6( this, "stopVideo" );
    var a = C6( this );
    a.index = -1;
    a.videoId = "";
    u6( a );
    F6( this, a );
    this.V( "remotePlayerChange" )
  } else E6( this, this.stop )
};
g.k.setVolume = function ( a, b ) {
  if ( D6( this ) ) {
    var c = C6( this );
    if ( this.l ) {
      if ( c.volume != a ) {
        var d = Math.round( a ) / 100;
        this.l.setReceiverVolumeLevel( d, ( 0, g.B )( function () {
          H5( "CP", "set receiver volume: " + d )
        }, this ), ( 0, g.B )( function () {
          this.Fd( "failed to set receiver volume." )
        }, this ) )
      }
      c.muted != b && this.l.setReceiverMuted( b, ( 0, g.B )( function () {
        H5( "CP", "set receiver muted: " + b )
      }, this ), ( 0, g.B )( function () {
        this.Fd( "failed to set receiver muted." )
      }, this ) )
    } else {
      var e = {
        volume: a,
        muted: b
      }; - 1 != c.volume && ( e.delta = a - c.volume );
      H6( this, "setVolume", e )
    }
    c.muted = b;
    c.volume = a;
    F6( this, c )
  } else E6( this, g.Pa( this.setVolume, a, b ) )
};
g.k.GB = function ( a, b ) {
  if ( D6( this ) ) {
    var c = C6( this ),
      d = {
        videoId: a
      };
    b && ( c.i = {
      trackName: b.name,
      languageCode: b.languageCode,
      sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
      languageName: b.languageName,
      kind: b.kind
    }, d.style = g.Oj( b.style ), g.Tb( d, c.i ) );
    H6( this, "setSubtitlesTrack", d );
    F6( this, c )
  } else E6( this, g.Pa( this.GB, a, b ) )
};
g.k.setAudioTrack = function ( a, b ) {
  if ( D6( this ) ) {
    var c = b.getLanguageInfo().getId();
    H6( this, "setAudioTrack", {
      videoId: a,
      audioTrackId: c
    } );
    var d = C6( this );
    d.audioTrackId = c;
    F6( this, d )
  } else E6( this, g.Pa( this.setAudioTrack, a, b ) )
};
g.k.playVideo = function ( a, b, c, d, e, f, h ) {
  var l = C6( this );
  c = c || 0;
  var m = {
    videoId: a,
    currentIndex: c
  };
  y6( l, a, c );
  void 0 !== b && ( w6( l, b ), m.currentTime = b );
  void 0 !== d && ( m.listId = d );
  null != e && ( m.playerParams = e );
  null != f && ( m.clickTrackingParams = f );
  null != h && ( m.locationInfo = g.Oj( h ) );
  H6( this, "setPlaylist", m );
  d || F6( this, l )
};
g.k.Iu = function ( a, b ) {
  if ( D6( this ) ) {
    if ( a && b ) {
      var c = C6( this );
      y6( c, a, b );
      F6( this, c )
    }
    H6( this, "previous" )
  } else E6( this, g.Pa( this.Iu, a, b ) )
};
g.k.nextVideo = function ( a, b ) {
  if ( D6( this ) ) {
    if ( a && b ) {
      var c = C6( this );
      y6( c, a, b );
      F6( this, c )
    }
    H6( this, "next" )
  } else E6( this, g.Pa( this.nextVideo, a, b ) )
};
g.k.WC = function () {
  D6( this ) ? H6( this, "dismissAutoplay" ) : E6( this, this.WC )
};
g.k.dispose = function () {
  if ( 3 != this.Ma ) {
    var a = this.Ma;
    this.Ma = 3;
    this.V( "proxyStateChange", a, this.Ma )
  }
  g.Q.prototype.dispose.call( this )
};
g.k.da = function () {
  WJa( this );
  this.u = null;
  this.B.clear();
  A6( this, null );
  g.Q.prototype.da.call( this )
};
g.k.Rz = function ( a ) {
  if ( ( a != this.Ma || 2 == a ) && 3 != this.Ma && 0 != a ) {
    var b = this.Ma;
    this.Ma = a;
    this.V( "proxyStateChange", b, a );
    if ( 1 == a )
      for ( ; !this.B.isEmpty(); ) b = a = this.B, g.eb( b.i ) && ( b.i = b.l, b.i.reverse(), b.l = [] ), a.i.pop().apply( this );
    else 3 == a && this.dispose()
  }
};
g.k.wO = function ( a, b ) {
  this.V( a, b )
};
g.k.bN = function ( a ) {
  if ( !a ) this.yr( null ), A6( this, null );
  else if ( this.l.receiver.volume ) {
    a = this.l.receiver.volume;
    var b = C6( this ),
      c = Math.round( 100 * a.level || 0 );
    if ( b.volume != c || b.muted != a.muted ) H5( "CP", "Cast volume update: " + a.level + ( a.muted ? " muted" : "" ) ), b.volume = c, b.muted = !!a.muted, F6( this, b )
  }
};
g.k.yr = function ( a ) {
  H5( "CP", "Cast media: " + !!a );
  this.i && this.i.removeUpdateListener( this.J );
  if ( this.i = a ) this.i.addUpdateListener( this.J ), XJa( this ), this.V( "remotePlayerChange" )
};
g.k.aN = function ( a ) {
  a ? ( XJa( this ), this.V( "remotePlayerChange" ) ) : this.yr( null )
};
g.k.iA = function () {
  H6( this, "sendDebugCommand", {
    debugCommand: "stats4nerds "
  } )
};
g.k.iN = function () {
  var a = TJa();
  a && A6( this, a )
};
g.k.Fd = function ( a ) {
  H5( "CP", a )
};
g.u( J6, g.Q );
g.k = J6.prototype;
g.k.connect = function ( a, b ) {
  if ( b ) {
    var c = b.listId,
      d = b.videoId,
      e = b.playerParams,
      f = b.clickTrackingParams,
      h = b.index,
      l = {
        videoId: d
      },
      m = b.currentTime,
      n = b.locationInfo;
    void 0 !== m && ( l.currentTime = 5 >= m ? 0 : m );
    e && ( l.playerParams = e );
    n && ( l.locationInfo = n );
    f && ( l.clickTrackingParams = f );
    c && ( l.listId = c );
    void 0 !== h && ( l.currentIndex = h );
    c && ( this.Fb.listId = c );
    this.Fb.videoId = d;
    this.Fb.index = h || 0;
    this.Fb.state = 3;
    w6( this.Fb, m );
    this.B = "UNSUPPORTED";
    K6( "Connecting with setPlaylist and params: " + g.Oj( l ) );
    this.i.connect( {
      method: "setPlaylist",
      params: g.Oj( l )
    }, a, bIa() )
  } else K6( "Connecting without params" ), this.i.connect( {}, a, bIa() );
  ZJa( this )
};
g.k.Wu = function ( a ) {
  this.i.Wu( a )
};
g.k.dispose = function () {
  this.na() || ( this.V( "beforeDispose" ), L6( this, 3 ) );
  g.Q.prototype.dispose.call( this )
};
g.k.da = function () {
  M6( this );
  O6( this );
  N6( this );
  g.Bo( this.J );
  this.J = NaN;
  g.Bo( this.L );
  this.L = NaN;
  this.u = null;
  g.bp( this.W );
  this.W.length = 0;
  this.i.dispose();
  g.Q.prototype.da.call( this );
  this.B = this.I = this.l = this.Fb = this.i = null
};
g.k.mL = function () {
  this.ro( 2 )
};
g.k.fN = function () {
  K6( "Channel opened" );
  this.ca && ( this.ca = !1, N6( this ), this.Y = g.zo( ( 0, g.B )( function () {
    K6( "Timing out waiting for a screen." );
    this.ro( 1 )
  }, this ), 15E3 ) );
  fIa( eJa( this.i ), this.ga )
};
g.k.cN = function () {
  K6( "Channel closed" );
  isNaN( this.C ) ? M4( !0 ) : M4();
  this.dispose()
};
g.k.dN = function ( a, b ) {
  M4();
  isNaN( this.Vq() ) ? ( b && "shortLived" == this.ea && this.V( "browserChannelAuthError", a ), K6( "Channel error: " + a + " without reconnection" ), this.dispose() ) : ( this.ca = !0, K6( "Channel error: " + a + " with reconnection in " + this.Vq() + " ms" ), L6( this, 2 ) )
};
g.k.eN = function ( a ) {
  a.params ? K6( "Received: action=" + a.action + ", params=" + g.Oj( a.params ) ) : K6( "Received: action=" + a.action + " {}" );
  switch ( a.action ) {
    case "loungeStatus":
      a = V4( a.params.devices );
      this.l = g.Jc( a, function ( c ) {
        return new A4( c )
      } );
      a = !!g.$a( this.l, function ( c ) {
        return "LOUNGE_SCREEN" == c.type
      } );
      bKa( this, a );
      break;
    case "loungeScreenDisconnected":
      g.jb( this.l, function ( c ) {
        return "LOUNGE_SCREEN" == c.type
      } );
      bKa( this, !1 );
      break;
    case "remoteConnected":
      var b = new A4( V4( a.params.device ) );
      g.$a( this.l, function ( c ) {
        return b ? c.id == b.id : !1
      } ) || MHa( this.l, b );
      break;
    case "remoteDisconnected":
      b = new A4( V4( a.params.device ) );
      g.jb( this.l, function ( c ) {
        return b ? c.id == b.id : !1
      } );
      break;
    case "gracefulDisconnect":
      break;
    case "playlistModified":
      dKa( this, a );
      break;
    case "nowPlaying":
      fKa( this, a );
      break;
    case "onStateChange":
      eKa( this, a );
      break;
    case "onAdStateChange":
      gKa( this, a );
      break;
    case "onVolumeChanged":
      hKa( this, a );
      break;
    case "onSubtitlesTrackChanged":
      cKa( this, a );
      break;
    case "nowAutoplaying":
      iKa( this, a );
      break;
    case "autoplayDismissed":
      this.V( "autoplayDismissed" );
      break;
    case "autoplayUpNext":
      this.I = a.params.videoId || null;
      this.V( "autoplayUpNext", this.I );
      break;
    case "onAutoplayModeChanged":
      this.B =
        a.params.autoplayMode;
      this.V( "autoplayModeChange", this.B );
      "DISABLED" == this.B && this.V( "autoplayDismissed" );
      break;
    case "onHasPreviousNextChanged":
      jKa( this, a );
      break;
    case "requestAssistedSignIn":
      this.V( "assistedSignInRequested", a.params.authCode );
      break;
    default:
      K6( "Unrecognized action: " + a.action )
  }
};
g.k.dQ = function () {
  if ( this.u ) {
    var a = this.u;
    this.u = null;
    this.Fb.videoId != a && P6( this, "getNowPlaying" )
  }
};
g.k.iL = function () {
  var a = 3;
  this.na() || ( a = 0, isNaN( this.Vq() ) ? C5( this.i ) && isNaN( this.C ) && ( a = 1 ) : a = 2 );
  return a
};
g.k.ro = function ( a ) {
  K6( "Disconnecting with " + a );
  M6( this );
  this.V( "beforeDisconnect", a );
  1 == a && M4();
  fJa( this.i, a );
  this.dispose()
};
g.k.gL = function () {
  var a = this.Fb;
  this.u && ( a = this.Fb.clone(), y6( a, this.u, a.index ) );
  return z6( a )
};
g.k.qQ = function ( a ) {
  var b = new t6( a );
  b.videoId && b.videoId != this.Fb.videoId && ( this.u = b.videoId, g.Bo( this.J ), this.J = g.zo( ( 0, g.B )( this.dQ, this ), 5E3 ) );
  var c = [];
  this.Fb.listId == b.listId && this.Fb.videoId == b.videoId && this.Fb.index == b.index || c.push( "remoteQueueChange" );
  this.Fb.playerState == b.playerState && this.Fb.volume == b.volume && this.Fb.muted == b.muted && x6( this.Fb ) == x6( b ) && g.Oj( this.Fb.i ) == g.Oj( b.i ) || c.push( "remotePlayerChange" );
  this.Fb.reset( a );
  g.yb( c, function ( d ) {
    this.V( d )
  }, this )
};
g.k.CD = function () {
  var a = this.i.I.id,
    b = g.$a( this.l, function ( c ) {
      return "REMOTE_CONTROL" == c.type && c.id != a
    } );
  return b ? b.id : ""
};
g.k.Vq = function () {
  var a = this.i;
  return a.l.isActive() ? a.l.l - g.C() : NaN
};
g.k.cL = function () {
  return this.B || "UNSUPPORTED"
};
g.k.dL = function () {
  return this.I || ""
};
g.k.OJ = function () {
  if ( !isNaN( this.Vq() ) ) {
    var a = this.i.l;
    a.i.Qg();
    a.start()
  }
};
g.k.mQ = function ( a, b ) {
  P6( this, a, b );
  aKa( this )
};
g.k.HB = function () {
  var a = g.Sq( "SID", "" ) || "",
    b = g.Sq( "SAPISID", "" ) || "",
    c = g.Sq( "__Secure-3PAPISID", "" ) || "";
  if ( !a && !b && !c ) return "";
  a = g.of( g.Re( a ), 2 );
  b = g.of( g.Re( b ), 2 );
  c = g.of( g.Re( c ), 2 );
  return g.of( g.Re( a + "," + b + "," + c ), 2 )
};
J6.prototype.subscribe = J6.prototype.subscribe;
J6.prototype.unsubscribeByKey = J6.prototype.Of;
J6.prototype.getProxyState = J6.prototype.iL;
J6.prototype.disconnect = J6.prototype.ro;
J6.prototype.getPlayerContextData = J6.prototype.gL;
J6.prototype.setPlayerContextData = J6.prototype.qQ;
J6.prototype.getOtherConnectedRemoteId = J6.prototype.CD;
J6.prototype.getReconnectTimeout = J6.prototype.Vq;
J6.prototype.getAutoplayMode = J6.prototype.cL;
J6.prototype.getAutoplayVideoId = J6.prototype.dL;
J6.prototype.reconnect = J6.prototype.OJ;
J6.prototype.sendMessage = J6.prototype.mQ;
J6.prototype.getXsrfToken = J6.prototype.HB;
g.u( Q6, L5 );
g.k = Q6.prototype;
g.k.Rg = function ( a ) {
  return this.Hf.$_gs( a )
};
g.k.contains = function ( a ) {
  return !!this.Hf.$_c( a )
};
g.k.get = function ( a ) {
  return this.Hf.$_g( a )
};
g.k.start = function () {
  this.Hf.$_st()
};
g.k.add = function ( a, b, c ) {
  this.Hf.$_a( a, b, c )
};
g.k.remove = function ( a, b, c ) {
  this.Hf.$_r( a, b, c )
};
g.k.vv = function ( a, b, c, d ) {
  this.Hf.$_un( a, b, c, d )
};
g.k.da = function () {
  for ( var a = 0, b = this.i.length; a < b; ++a ) this.Hf.$_ubk( this.i[ a ] );
  this.i.length = 0;
  this.Hf = null;
  L5.prototype.da.call( this )
};
g.k.PJ = function () {
  this.V( "screenChange" )
};
g.k.dO = function () {
  this.V( "onlineScreenChange" )
};
V5.prototype.$_st = V5.prototype.start;
V5.prototype.$_gspc = V5.prototype.JJ;
V5.prototype.$_gsppc = V5.prototype.DB;
V5.prototype.$_c = V5.prototype.contains;
V5.prototype.$_g = V5.prototype.get;
V5.prototype.$_a = V5.prototype.add;
V5.prototype.$_un = V5.prototype.vv;
V5.prototype.$_r = V5.prototype.remove;
V5.prototype.$_gs = V5.prototype.Rg;
V5.prototype.$_gos = V5.prototype.CB;
V5.prototype.$_s = V5.prototype.subscribe;
V5.prototype.$_ubk = V5.prototype.Of;
var c7 = null,
  i7 = !1,
  R6 = null,
  S6 = null,
  h7 = null,
  W6 = [];
g.u( j7, g.I );
g.k = j7.prototype;
g.k.da = function () {
  g.I.prototype.da.call( this );
  this.i.stop();
  this.u.stop();
  this.L.stop();
  this.Y();
  var a = this.wb;
  a.unsubscribe( "proxyStateChange", this.FF, this );
  a.unsubscribe( "remotePlayerChange", this.Er, this );
  a.unsubscribe( "remoteQueueChange", this.Fu, this );
  a.unsubscribe( "previousNextChange", this.CF, this );
  a.unsubscribe( "nowAutoplaying", this.xF, this );
  a.unsubscribe( "autoplayDismissed", this.XE, this );
  this.wb = this.l = null
};
g.k.IB = function ( a, b ) {
  for ( var c = [], d = 1; d < arguments.length; ++d ) c[ d - 1 ] = arguments[ d ];
  if ( 2 != this.wb.Ma )
    if ( k7( this ) ) {
      if ( !C6( this.wb ).isAdPlaying() || "control_seek" !== a ) switch ( a ) {
        case "control_toggle_play_pause":
          C6( this.wb ).Kb() ? this.wb.pause() : this.wb.play();
          break;
        case "control_play":
          this.wb.play();
          break;
        case "control_pause":
          this.wb.pause();
          break;
        case "control_seek":
          this.J.Qg( c[ 0 ], c[ 1 ] );
          break;
        case "control_subtitles_set_track":
          l7( this, c[ 0 ] );
          break;
        case "control_set_audio_track":
          this.setAudioTrack( c[ 0 ] )
      }
    } else switch ( a ) {
      case "control_toggle_play_pause":
      case "control_play":
      case "control_pause":
        c =
          this.G.getCurrentTime();
        m7( this, 0 === c ? void 0 : c );
        break;
      case "control_seek":
        m7( this, c[ 0 ] );
        break;
      case "control_subtitles_set_track":
        l7( this, c[ 0 ] );
        break;
      case "control_set_audio_track":
        this.setAudioTrack( c[ 0 ] )
    }
};
g.k.YM = function ( a ) {
  this.L.Qg( a )
};
g.k.WQ = function ( a ) {
  this.IB( "control_subtitles_set_track", g.Mb( a ) ? null : a )
};
g.k.UG = function () {
  var a = this.G.getOption( "captions", "track" );
  g.Mb( a ) || l7( this, a )
};
g.k.Bb = function ( a ) {
  this.l.Bb( a, this.G.getVideoData().lengthSeconds )
};
g.k.MN = function () {
  g.Mb( this.B ) || uKa( this, this.B );
  this.C = !1
};
g.k.FF = function ( a, b ) {
  this.u.stop();
  2 === b && this.OG()
};
g.k.Er = function () {
  if ( k7( this ) ) {
    this.i.stop();
    var a = C6( this.wb );
    switch ( a.playerState ) {
      case 1080:
      case 1081:
      case 1084:
      case 1085:
        this.l.Ne = 1;
        break;
      case 1082:
      case 1083:
        this.l.Ne = 0;
        break;
      default:
        this.l.Ne = -1
    }
    switch ( a.playerState ) {
      case 1081:
      case 1:
        this.tb( new g.vK( 8 ) );
        this.NG();
        break;
      case 1085:
      case 3:
        this.tb( new g.vK( 9 ) );
        break;
      case 1083:
      case 0:
        this.tb( new g.vK( 2 ) );
        this.J.stop();
        this.Bb( this.G.getVideoData().lengthSeconds );
        break;
      case 1084:
        this.tb( new g.vK( 4 ) );
        break;
      case 2:
        this.tb( new g.vK( 4 ) );
        this.Bb( x6( a ) );
        break;
      case -1:
        this.tb( new g.vK( 64 ) );
        break;
      case -1E3:
        this.tb( new g.vK( 128, {
          errorCode: "mdx.remoteerror",
          errorMessage: "This video is not available for remote playback."
        } ) )
    }
    a = C6( this.wb ).i;
    var b = this.B;
    ( a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1 ) || ( this.B = a, uKa( this, a ) );
    a = C6( this.wb ); - 1 === a.volume || Math.round( this.G.getVolume() ) === a.volume && this.G.isMuted() === a.muted || this.W.isActive() || this.rH()
  } else tKa( this )
};
g.k.CF = function () {
  this.G.V( "mdxpreviousnextchange" )
};
g.k.Fu = function () {
  k7( this ) || tKa( this )
};
g.k.xF = function ( a ) {
  isNaN( a ) || this.G.V( "mdxnowautoplaying", a )
};
g.k.XE = function () {
  this.G.V( "mdxautoplaycanceled" )
};
g.k.setAudioTrack = function ( a ) {
  k7( this ) && this.wb.setAudioTrack( this.G.getVideoData( 1 ).videoId, a )
};
g.k.seekTo = function ( a, b ) {
  -1 === C6( this.wb ).playerState ? m7( this, a ) : b && this.wb.seekTo( a )
};
g.k.rH = function () {
  var a = this;
  if ( k7( this ) ) {
    var b = C6( this.wb );
    this.events.Gb( this.X );
    b.muted ? this.G.mute() : this.G.unMute();
    this.G.setVolume( b.volume );
    this.X = this.events.N( this.G, "onVolumeChange", function ( c ) {
      sKa( a, c )
    } )
  }
};
g.k.NG = function () {
  this.i.stop();
  if ( !this.wb.na() ) {
    var a = C6( this.wb );
    a.Kb() && this.tb( new g.vK( 8 ) );
    this.Bb( x6( a ) );
    this.i.start()
  }
};
g.k.OG = function () {
  this.u.stop();
  this.i.stop();
  var a = this.wb.u.getReconnectTimeout();
  2 == this.wb.Ma && !isNaN( a ) && this.u.start()
};
g.k.tb = function ( a ) {
  this.u.stop();
  var b = this.I;
  if ( !g.AK( b, a ) ) {
    var c = g.V( a, 2 );
    c !== g.V( this.I, 2 ) && this.G.Bn( c );
    this.I = a;
    wKa( this.l, b, a )
  }
};
g.u( n7, g.W );
n7.prototype.Ec = function () {
  this.i.show()
};
n7.prototype.jb = function () {
  this.i.hide()
};
n7.prototype.l = function () {
  g.cK( "https://support.google.com/youtube/answer/7640706" )
};
n7.prototype.u = function () {
  z4( "mdx-manual-pairing-popup-ok" );
  this.jb()
};
g.u( o7, g.W );
o7.prototype.Ec = function () {
  this.i.show()
};
o7.prototype.jb = function () {
  this.i.hide()
};
o7.prototype.l = function () {
  z4( "mdx-privacy-popup-cancel" );
  this.jb()
};
o7.prototype.u = function () {
  z4( "mdx-privacy-popup-confirm" );
  this.jb()
};
g.u( p7, g.W );
p7.prototype.l = function ( a ) {
  vKa( this, a.state )
};
g.u( q7, g.TQ );
q7.prototype.C = function () {
  var a = this.G.getOption( "remote", "receivers" );
  a && 1 < a.length && !this.G.getOption( "remote", "quickCast" ) ? ( this.Ml = g.zb( a, this.i, this ), g.UQ( this, g.Jc( a, this.i ) ), a = this.G.getOption( "remote", "currentReceiver" ), a = this.i( a ), this.options[ a ] && this.hh( a ), this.enable( !0 ) ) : this.enable( !1 )
};
q7.prototype.i = function ( a ) {
  return a.key
};
q7.prototype.Ph = function ( a ) {
  return "cast-selector-receiver" === a ? "Cast..." : this.Ml[ a ].name
};
q7.prototype.Te = function ( a ) {
  g.TQ.prototype.Te.call( this, a );
  this.G.setOption( "remote", "currentReceiver", this.Ml[ a ] );
  this.bb.jb()
};
g.u( r7, g.HN );
g.k = r7.prototype;
g.k.create = function () {
  var a = this.player.T(),
    b = g.TC( a );
  a = {
    device: "Desktop",
    app: "youtube-desktop",
    loadCastApiSetupScript: g.S( a.experiments, "mdx_load_cast_api_bootstrap_script" ),
    enableDialLoungeToken: g.S( a.experiments, "enable_dial_short_lived_lounge_token" ),
    enableCastLoungeToken: g.S( a.experiments, "enable_cast_short_lived_lounge_token" )
  };
  nKa( b, a );
  this.subscriptions.push( g.Go( "yt-remote-before-disconnect", this.WM, this ) );
  this.subscriptions.push( g.Go( "yt-remote-connection-change", this.DO, this ) );
  this.subscriptions.push( g.Go( "yt-remote-receiver-availability-change",
    this.EF, this ) );
  this.subscriptions.push( g.Go( "yt-remote-auto-connect", this.BO, this ) );
  this.subscriptions.push( g.Go( "yt-remote-receiver-resumed", this.AO, this ) );
  this.subscriptions.push( g.Go( "mdx-privacy-popup-confirm", this.TP, this ) );
  this.subscriptions.push( g.Go( "mdx-privacy-popup-cancel", this.SP, this ) );
  this.subscriptions.push( g.Go( "mdx-manual-pairing-popup-ok", this.dM, this ) );
  this.EF()
};
g.k.load = function () {
  this.player.cancelPlayback();
  g.HN.prototype.load.call( this );
  this.nh = new j7( this, this.player, this.wb );
  var a = ( a = rKa() ) ? a.currentTime : 0;
  var b = g7() ? new B6( a7(), void 0 ) : null;
  0 == a && b && ( a = x6( C6( b ) ) );
  0 !== a && this.Bb( a );
  wKa( this, this.Mc, this.Mc );
  this.player.Ej( 6 )
};
g.k.unload = function () {
  this.player.V( "mdxautoplaycanceled" );
  this.Zk = this.gi;
  g.Oi( this.nh, this.wb );
  this.wb = this.nh = null;
  g.HN.prototype.unload.call( this );
  this.player.Ej( 5 );
  s7( this )
};
g.k.da = function () {
  g.Ho( this.subscriptions );
  g.HN.prototype.da.call( this )
};
g.k.uj = function ( a, b ) {
  for ( var c = [], d = 1; d < arguments.length; ++d ) c[ d - 1 ] = arguments[ d ];
  this.loaded && this.nh.IB.apply( this.nh, [ a ].concat( g.la( c ) ) )
};
g.k.getAdState = function () {
  return this.Ne
};
g.k.jL = function () {
  return this.loaded ? this.nh.suggestion : null
};
g.k.dj = function () {
  return this.wb ? C6( this.wb ).dj : !1
};
g.k.hasNext = function () {
  return this.wb ? C6( this.wb ).hasNext : !1
};
g.k.Bb = function ( a, b ) {
  this.sE = a || 0;
  this.player.V( "progresssync", a, b )
};
g.k.getCurrentTime = function () {
  return this.sE
};
g.k.getProgressState = function () {
  var a = C6( this.wb ),
    b = this.player.getVideoData();
  return {
    allowSeeking: g.S( this.player.T().experiments, "web_player_mdx_allow_seeking_change_killswitch" ) ? this.player.Le() : !a.isAdPlaying() && this.player.Le(),
    clipEnd: b.clipEnd,
    clipStart: b.clipStart,
    current: this.getCurrentTime(),
    displayedStart: -1,
    duration: a.getDuration(),
    ingestionTime: a.u ? a.B + v6( a ) : a.B,
    isAtLiveHead: 1 >= ( a.u ? a.l + v6( a ) : a.l ) - this.getCurrentTime(),
    loaded: a.W,
    seekableEnd: a.u ? a.l + v6( a ) : a.l,
    seekableStart: 0 < a.C ? a.C +
      v6( a ) : a.C
  }
};
g.k.nextVideo = function () {
  this.wb && this.wb.nextVideo()
};
g.k.Iu = function () {
  this.wb && this.wb.Iu()
};
g.k.WM = function ( a ) {
  1 === a && ( this.rz = this.wb ? C6( this.wb ) : null )
};
g.k.DO = function () {
  var a = g7() ? new B6( a7(), void 0 ) : null;
  if ( a ) {
    var b = this.Zk;
    this.loaded && this.unload();
    this.wb = a;
    this.rz = null;
    b.key !== this.gi.key && ( this.Zk = b, this.load() )
  } else g.Ni( this.wb ), this.wb = null, this.loaded && ( this.unload(), ( a = this.rz ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById( a.videoId, x6( a ) ) );
  this.player.V( "videodatachange", "newdata", this.player.getVideoData(), 3 )
};
g.k.EF = function () {
  var a = [ this.gi ],
    b = a.concat,
    c = oKa();
  p6() && g.Fu( "yt-remote-cast-available" ) && c.push( {
    key: "cast-selector-receiver",
    name: "Cast..."
  } );
  this.Ml = b.call( a, c );
  a = b7() || this.gi;
  t7( this, a );
  this.player.xa( "onMdxReceiversChange" )
};
g.k.BO = function () {
  var a = b7();
  t7( this, a )
};
g.k.AO = function () {
  this.Zk = b7()
};
g.k.TP = function () {
  this.Hr = !0;
  s7( this );
  i7 = !1;
  c7 && e7( c7, 1 );
  c7 = null
};
g.k.SP = function () {
  this.Hr = !1;
  s7( this );
  t7( this, this.gi );
  this.Zk = this.gi;
  i7 = !1;
  c7 = null;
  this.player.playVideo()
};
g.k.dM = function () {
  this.ku = !0;
  s7( this );
  g.Eu( "yt-remote-manual-pairing-warning-shown", !0, 2592E3 );
  i7 = !1;
  c7 && e7( c7, 1 );
  c7 = null
};
g.k.Ge = function ( a, b ) {
  switch ( a ) {
    case "casting":
      return this.loaded;
    case "receivers":
      return this.Ml;
    case "currentReceiver":
      return b && ( "cast-selector-receiver" === b.key ? r6() : t7( this, b ) ), this.loaded ? this.Zk : this.gi;
    case "quickCast":
      return 2 === this.Ml.length && "cast-selector-receiver" === this.Ml[ 1 ].key ? ( b && r6(), !0 ) : !1
  }
};
g.k.iA = function () {
  this.wb.iA()
};
g.k.xi = function () {
  return !1
};
g.k.getOptions = function () {
  return [ "casting", "receivers", "currentReceiver", "quickCast" ]
};
g.NN.remote = r7;
} )( _yt_player );
