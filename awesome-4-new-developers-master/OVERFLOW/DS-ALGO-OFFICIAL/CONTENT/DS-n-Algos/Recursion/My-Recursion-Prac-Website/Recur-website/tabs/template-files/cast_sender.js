(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  "use strict";
  var h = this || self,
    l = /^[\w+/_-]+[=]{0,2}$/,
    m = null,
    n = function (a) {
      return (a = a.querySelector && a.querySelector("script[nonce]")) &&
        (a = a.nonce || a.getAttribute("nonce")) &&
        l.test(a)
        ? a
        : "";
    },
    p = function (a, c) {
      function e() {}
      e.prototype = c.prototype;
      a.i = c.prototype;
      a.prototype = new e();
      a.prototype.constructor = a;
      a.h = function (b, g, k) {
        for (
          var f = Array(arguments.length - 2), d = 2;
          d < arguments.length;
          d++
        )
          f[d - 2] = arguments[d];
        return c.prototype[g].apply(b, f);
      };
    },
    q = function (a) {
      return a;
    };

  function r(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, r);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
  }
  p(r, Error);
  r.prototype.name = "CustomError";
  var t = function (a, c) {
    a = a.split("%s");
    for (var e = "", b = a.length - 1, g = 0; g < b; g++)
      e += a[g] + (g < c.length ? c[g] : "%s");
    r.call(this, e + a[b]);
  };
  p(t, r);
  t.prototype.name = "AssertionError";
  var u = function (a, c) {
    throw new t(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  var v;
  var y = function (a, c) {
    this.g = c === w ? a : "";
  };
  y.prototype.toString = function () {
    return this.g + "";
  };
  var w = {};
  var z = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    A = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    C = function (a) {
      a.length
        ? B(a.shift(), function () {
            C(a);
          })
        : D();
    },
    E = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    B = function (a, c, e) {
      var b = document.createElement("script");
      b.onerror = c;
      e && (b.onload = e);
      if (void 0 === v)
        if (((c = null), (e = h.trustedTypes) && e.createPolicy)) {
          try {
            c = e.createPolicy("goog#html", {
              createHTML: q,
              createScript: q,
              createScriptURL: q,
            });
          } catch (x) {
            h.console && h.console.error(x.message);
          }
          v = c;
        } else v = c;
      a = (c = v) ? c.createScriptURL(a) : a;
      a = new y(a, w);
      a: {
        try {
          var g = b && b.ownerDocument,
            k = g && (g.defaultView || g.parentWindow);
          k = k || h;
          if (k.Element && k.Location) {
            var f = k;
            break a;
          }
        } catch (x) {}
        f = null;
      }
      if (
        f &&
        "undefined" != typeof f.HTMLScriptElement &&
        (!b ||
          (!(b instanceof f.HTMLScriptElement) &&
            (b instanceof f.Location || b instanceof f.Element)))
      ) {
        f = typeof b;
        if (("object" == f && null != b) || "function" == f)
          try {
            var d =
              b.constructor.displayName ||
              b.constructor.name ||
              Object.prototype.toString.call(b);
          } catch (x) {
            d = "<object could not be stringified>";
          }
        else d = void 0 === b ? "undefined" : null === b ? "null" : typeof b;
        u(
          "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
          "HTMLScriptElement",
          d
        );
      }
      a instanceof y && a.constructor === y
        ? (d = a.g)
        : ((d = typeof a),
          u(
            "expected object of type TrustedResourceUrl, got '" +
              a +
              "' of type " +
              ("object" != d
                ? d
                : a
                ? Array.isArray(a)
                  ? "array"
                  : d
                : "null")
          ),
          (d = "type_error:TrustedResourceUrl"));
      b.src = d;
      (d = b.ownerDocument && b.ownerDocument.defaultView) && d != h
        ? (d = n(d.document))
        : (null === m && (m = n(h.document)), (d = m));
      d && b.setAttribute("nonce", d);
      (document.head || document.documentElement).appendChild(b);
    },
    D = function () {
      var a = A();
      a && a(!1, "No cast extension found");
    },
    G = function () {
      if (F) {
        var a = 2,
          c = A(),
          e = function () {
            a--;
            0 == a && c && c(!0);
          };
        window.__onGCastApiAvailable = e;
        B("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", D, e);
      }
    },
    F = z("loadCastFramework") || z("loadCastApplicationFramework"),
    H = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  if (
    0 <= window.navigator.userAgent.indexOf("Android") &&
    0 <= window.navigator.userAgent.indexOf("Chrome/") &&
    window.navigator.presentation
  ) {
    G();
    var I,
      J = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
    I = J ? parseInt(J[1], 10) : 0;
    var K = [];
    if (0 != I) {
      var L = I - 1;
      K.push("//www.gstatic.com/eureka/clank/" + I + "/cast_sender.js");
      K.push("//www.gstatic.com/eureka/clank/" + L + "/cast_sender.js");
    }
    K.push("//www.gstatic.com/eureka/clank/cast_sender.js");
    C(K);
  } else
    !window.chrome ||
    !window.navigator.presentation ||
    0 <= window.navigator.userAgent.indexOf("Edge")
      ? D()
      : (G(), C(H.map(E)));
}.call(this));
