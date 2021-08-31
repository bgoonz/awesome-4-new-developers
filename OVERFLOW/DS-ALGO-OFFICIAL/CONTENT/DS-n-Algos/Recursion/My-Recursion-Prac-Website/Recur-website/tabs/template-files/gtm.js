// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");
(function () {
  var data = {
    resource: {
      version: "53",

      macros: [
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "mbrui",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__k",
          vtp_decodeCookie: false,
          vtp_name: "userId",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){if(",
            ["escape", ["macro", 0], 8, 16],
            '){var a=new Date;a.setTime(a.getTime()+63072E6);a="expires\\x3d"+a.toGMTString();document.cookie="userId\\x3d"+',
            ["escape", ["macro", 0], 8, 16],
            '+"; "+a+"; path\\x3d/";return ',
            ["escape", ["macro", 0], 8, 16],
            "}if(",
            ["escape", ["macro", 1], 8, 16],
            ")return ",
            ["escape", ["macro", 1], 8, 16],
            "})();",
          ],
        },
        {
          function: "__e",
        },
        {
          function: "__c",
          vtp_value: "UA-63126154-1",
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__aev",
          vtp_setDefaultValue: false,
          vtp_varType: "URL",
          vtp_component: "PATH",
          vtp_defaultPages: ["list"],
        },
        {
          function: "__aev",
          vtp_varType: "TEXT",
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "FRAGMENT",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__f",
          vtp_component: "URL",
        },
        {
          function: "__e",
        },
      ],
      tags: [
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "allowLinker", "value", "true"],
            ["map", "fieldName", "cookieDomain", "value", "auto"],
            ["map", "fieldName", "userId", "value", ["macro", 2]],
          ],
          vtp_useHashAutoLink: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_autoLinkDomains:
            "mobirise.com,secure.avangate.com,avangate.com,paypal.com,accounts.google.com",
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          tag_id: 3,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_useDebugVersion: false,
          vtp_eventCategory: "Click Download Zip",
          vtp_trackType: "TRACK_EVENT",
          vtp_eventAction: ["macro", 7],
          vtp_eventLabel: ["macro", 8],
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_eventValue: "0",
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          tag_id: 4,
        },
        {
          function: "__sp",
          once_per_event: true,
          vtp_conversionId: "1071863997",
          vtp_enableOgtRmktParams: true,
          vtp_url: ["macro", 9],
          tag_id: 5,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "userId", "value", ["macro", 2]],
          ],
          vtp_trackType: "TRACK_TRANSACTION",
          vtp_enableLinkId: false,
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsTransaction: true,
          tag_id: 6,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventValue: "0",
          vtp_eventCategory: "Download exe dmg zip from acc.mbr.com",
          vtp_trackType: "TRACK_EVENT",
          vtp_eventAction: ["macro", 7],
          vtp_eventLabel: ["macro", 8],
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          tag_id: 8,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "userId", "value", ["macro", 2]],
          ],
          vtp_eventCategory: "First Run SignUp",
          vtp_trackType: "TRACK_EVENT",
          vtp_eventAction: "First SignUp",
          vtp_eventLabel: ["macro", 2],
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          tag_id: 11,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "userId", "value", ["macro", 2]],
          ],
          vtp_eventCategory: "Uninstall",
          vtp_trackType: "TRACK_EVENT",
          vtp_eventAction: "Uninstall",
          vtp_eventLabel: ["macro", 2],
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          tag_id: 12,
        },
        {
          function: "__ua",
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventCategory: "Logged account.mobirise.com",
          vtp_trackType: "TRACK_EVENT",
          vtp_eventAction: "Logged in account.mobirise.com",
          vtp_trackingId: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          tag_id: 14,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1321738_2",
          tag_id: 15,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1321738_17",
          tag_id: 16,
        },
        {
          function: "__hl",
          tag_id: 17,
        },
        {
          function: "__html",
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1123285727682531");fbq("set","agent","tmgoogletagmanager","1123285727682531");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1123285727682531\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 7,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Evar myDomain="my.mobirise.com",links=document.getElementsByTagName("a");Array.prototype.forEach.call(links,function(a){0\u003C=a.href.indexOf(myDomain)\u0026\u0026(a.search+=(0\u003Ca.search.length?"\\x26":"")+"mbrui\\x3d"+',
            ["escape", ["macro", 2], 8, 16],
            ")});\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 10,
        },
      ],
      predicates: [
        {
          function: "_eq",
          arg0: ["macro", 3],
          arg1: "gtm.js",
        },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: "\\.(zip)",
          ignore_case: true,
        },
        {
          function: "_cn",
          arg0: ["macro", 5],
          arg1: "MobiriseTemplates.zip",
        },
        {
          function: "_eq",
          arg0: ["macro", 3],
          arg1: "gtm.linkClick",
        },
        {
          function: "_re",
          arg0: ["macro", 6],
          arg1: "(^$|((^|,)1321738_2($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 10],
          arg1: "/order/finish.php",
        },
        {
          function: "_eq",
          arg0: ["macro", 3],
          arg1: "gtm.dom",
        },
        {
          function: "_re",
          arg0: ["macro", 5],
          arg1: "(MobiriseTemplates\\.zip|\\.exe|\\.dmg)",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 6],
          arg1: "(^$|((^|,)1321738_17($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 10],
          arg1: "mobirise.com/register.html",
        },
        {
          function: "_cn",
          arg0: ["macro", 10],
          arg1: "mobirise.com/uninstall.html",
        },
        {
          function: "_eq",
          arg0: ["macro", 11],
          arg1: "/",
        },
        {
          function: "_eq",
          arg0: ["macro", 3],
          arg1: "gtm.historyChange",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 2, 11, 12, 8, 9, 10],
        ],
        [
          ["if", 1, 3, 4],
          ["unless", 2],
          ["add", 1],
        ],
        [
          ["if", 5, 6],
          ["add", 3],
        ],
        [
          ["if", 3, 7, 8],
          ["add", 4],
        ],
        [
          ["if", 0, 9],
          ["add", 5],
        ],
        [
          ["if", 0, 10],
          ["add", 6],
        ],
        [
          ["if", 11, 12],
          ["add", 7],
        ],
      ],
    },
    runtime: [],
  };
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length
          ? {
              done: !1,
              value: a[b++],
            }
          : {
              done: !0,
            };
      };
    },
    ca = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b
        ? b.call(a)
        : {
            next: ba(a),
          };
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ka = {
          a: !0,
        },
        na = {};
      try {
        na.__proto__ = ka;
        ia = na.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var oa = ha,
    pa = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ri = b.prototype;
    },
    qa = this || self,
    ta = function (a) {
      if (a && a != qa) return ra(a.document);
      null === sa && (sa = ra(qa.document));
      return sa;
    },
    ua = /^[\w+/_-]+[=]{0,2}$/,
    sa = null,
    ra = function (a) {
      var b = a.querySelector && a.querySelector("script[nonce]");
      if (b) {
        var c = b.nonce || b.getAttribute("nonce");
        if (c && ua.test(c)) return c;
      }
      return "";
    },
    va = function (a) {
      return a;
    };
  var xa = {},
    ya = function (a, b) {
      xa[a] = xa[a] || [];
      xa[a][b] = !0;
    },
    Aa = function (a) {
      for (var b = [], c = xa[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var Ba = function () {},
    Da = function (a) {
      return "function" == typeof a;
    },
    g = function (a) {
      return "string" == typeof a;
    },
    Ea = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    Fa = function (a) {
      var b = "[object Array]" == Object.prototype.toString.call(Object(a));
      Array.isArray
        ? Array.isArray(a) !== b && ya("TAGGING", 4)
        : ya("TAGGING", 5);
      return b;
    },
    Ha = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Ia = function (a, b) {
      if (a && Fa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ja = function (a, b) {
      if (!Ea(a) || !Ea(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Na = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Oa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ra = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ua = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Va = function (a) {
      var b = [];
      if (Fa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Wa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Xa = function () {
      return new Date().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ya = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    ab = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    cb = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    eb = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    fb = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    gb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    hb = function (a) {
      var b = [];
      Na(a, function (c, d) {
        10 > c.length && d && b.push(c);
      });
      return b.join(",");
    };
  /*
   jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lb = function (a) {
      if (null == a) return String(a);
      var b = ib.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    ob = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    pb = function (a) {
      if (!a || "object" != lb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !ob(a, "constructor") &&
          !ob(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || ob(a, b);
    },
    m = function (a, b) {
      var c = b || ("array" == lb(a) ? [] : {}),
        d;
      for (d in a)
        if (ob(a, d)) {
          var e = a[d];
          "array" == lb(e)
            ? ("array" != lb(c[d]) && (c[d] = []), (c[d] = m(e, c[d])))
            : pb(e)
            ? (pb(c[d]) || (c[d] = {}), (c[d] = m(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var qb = function (a) {
    if (void 0 === a || Fa(a) || pb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var rb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Lf: a("consent"),
      Mf: a("consent_always_fire"),
      $d: a("convert_case_to"),
      ae: a("convert_false_to"),
      be: a("convert_null_to"),
      ce: a("convert_true_to"),
      de: a("convert_undefined_to"),
      ui: a("debug_mode_metadata"),
      Na: a("function"),
      Bg: a("instance_name"),
      Dg: a("live_only"),
      Eg: a("malware_disabled"),
      Fg: a("metadata"),
      xi: a("original_activity_id"),
      yi: a("original_vendor_template_id"),
      Hg: a("once_per_event"),
      Te: a("once_per_load"),
      Xe: a("setup_tags"),
      Ye: a("tag_id"),
      Ze: a("teardown_tags"),
    };
  })();
  var sb = [],
    tb = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    ub = function (a) {
      return tb[a];
    },
    vb = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Bb = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Cb = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\x0B": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    Db = function (a) {
      return Cb[a];
    };
  sb[8] = function (a) {
    if (null == a) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Bb, Db) + "'";
    }
  };
  var Nb =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ob = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    Pb = function (a) {
      return Ob[a];
    };
  sb[16] = function (a) {
    return a;
  };
  var Rb;
  var Sb = [],
    Tb = [],
    Ub = [],
    Vb = [],
    Wb = [],
    Xb = {},
    Yb,
    Zb,
    $b,
    ac = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = Xb[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf("vtp_"))
            d && b && b.cf && b.cf(a[f]),
              (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === rb.Mf.toString() && a[f]) {
          }
      return void 0 !== d ? d(e) : Rb(c, e, b);
    },
    ec = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
      return d;
    },
    bc = function (a, b, c) {
      if (Fa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(bc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Sb[f];
            if (!h || b.Bd(h)) return;
            c[f] = !0;
            try {
              var k = ec(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = ac(k, b);
              $b && (d = $b.hh(d, k));
            } catch (z) {
              b.uf && b.uf(z, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[bc(a[l], b, c)] = bc(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var n = bc(a[q], b, c);
              Zb && (p = p || n === Zb.hc);
              d.push(n);
            }
            return Zb && p ? Zb.kh(d) : d.join("");
          case "escape":
            d = bc(a[1], b, c);
            if (Zb && Fa(a[1]) && "macro" === a[1][0] && Zb.Gh(a))
              return Zb.Wh(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) sb[a[u]] && (d = sb[a[u]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!Vb[r])
              throw Error("Unable to resolve tag reference " + r + ".");
            return (d = {
              kf: a[2],
              index: r,
            });
          case "zb":
            var t = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5],
            };
            t["function"] = a[1];
            var v = fc(t, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    fc = function (a, b, c) {
      try {
        return Yb(ec(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var gc = null,
    jc = function (a) {
      function b(n) {
        for (var u = 0; u < n.length; u++) d[n[u]] = !0;
      }
      var c = [],
        d = [];
      gc = hc(a);
      for (var e = 0; e < Tb.length; e++) {
        var f = Tb[e],
          h = ic(f);
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(f.block || []);
        } else null === h && b(f.block || []);
      }
      for (var p = [], q = 0; q < Vb.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    ic = function (a) {
      for (var b = a["if"] || [], c = 0; c < b.length; c++) {
        var d = gc(b[c]);
        if (0 === d) return !1;
        if (2 === d) return null;
      }
      for (var e = a.unless || [], f = 0; f < e.length; f++) {
        var h = gc(e[f]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    hc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = fc(Ub[c], a));
        return b[c];
      };
    };
  var kc = {
    hh: function (a, b) {
      b[rb.$d] &&
        "string" === typeof a &&
        (a = 1 == b[rb.$d] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(rb.be) && null === a && (a = b[rb.be]);
      b.hasOwnProperty(rb.de) && void 0 === a && (a = b[rb.de]);
      b.hasOwnProperty(rb.ce) && !0 === a && (a = b[rb.ce]);
      b.hasOwnProperty(rb.ae) && !1 === a && (a = b[rb.ae]);
      return a;
    },
  };
  /*
   Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var C = {
    Ab: "_ee",
    nd: "_syn",
    Bi: "_uei",
    gd: "_eu",
    zi: "_pci",
    Vc: "event_callback",
    $b: "event_timeout",
    fa: "gtag.config",
    Ja: "gtag.get",
    la: "purchase",
    Ya: "refund",
    Ia: "begin_checkout",
    Wa: "add_to_cart",
    Xa: "remove_from_cart",
    Wf: "view_cart",
    ie: "add_to_wishlist",
    xa: "view_item",
    he: "view_promotion",
    fe: "select_promotion",
    Qc: "select_item",
    Xb: "view_item_list",
    ee: "add_payment_info",
    Vf: "add_shipping_info",
    Aa: "value_key",
    za: "value_callback",
    ia: "allow_ad_personalization_signals",
    cd: "restricted_data_processing",
    qb: "allow_google_signals",
    ja: "cookie_expires",
    tb: "cookie_update",
    xb: "session_duration",
    na: "user_properties",
    Ma: "transport_url",
    M: "ads_data_redaction",
    B: "ad_storage",
    J: "analytics_storage",
    Nf: "region",
    Of: "wait_for_update",
  };
  C.Ke = [
    C.la,
    C.Ya,
    C.Ia,
    C.Wa,
    C.Xa,
    C.Wf,
    C.ie,
    C.xa,
    C.he,
    C.fe,
    C.Xb,
    C.Qc,
    C.ee,
    C.Vf,
  ];
  C.Je = [C.ia, C.qb, C.tb];
  C.Le = [C.ja, C.$b, C.xb];
  var F = function (a) {
    ya("GTM", a);
  };
  var Jc = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Kc = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Lc,
    Pc = function () {
      if (void 0 === Lc) {
        var a = null,
          b = qa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: va,
              createScript: va,
              createScriptURL: va,
            });
          } catch (c) {
            qa.console && qa.console.error(c.message);
          }
          Lc = a;
        } else Lc = a;
      }
      return Lc;
    };
  var Rc = function (a, b) {
    this.m = b === Qc ? a : "";
  };
  Rc.prototype.toString = function () {
    return this.m + "";
  };
  var Qc = {};
  var Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Tc;
  a: {
    var Uc = qa.navigator;
    if (Uc) {
      var Vc = Uc.userAgent;
      if (Vc) {
        Tc = Vc;
        break a;
      }
    }
    Tc = "";
  }
  var Wc = function (a) {
    return -1 != Tc.indexOf(a);
  };
  var Yc = function (a, b, c) {
    this.m = c === Xc ? a : "";
  };
  Yc.prototype.toString = function () {
    return this.m.toString();
  };
  var Zc = function (a) {
      return a instanceof Yc && a.constructor === Yc
        ? a.m
        : "type_error:SafeHtml";
    },
    Xc = {},
    $c = new Yc((qa.trustedTypes && qa.trustedTypes.emptyHTML) || "", 0, Xc);
  var ad = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = Zc($c);
      return !c.parentElement;
    }),
    bd = function (a, b) {
      if (ad()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Zc(b);
    };
  var cd = function (a) {
    var b = Pc(),
      c = b ? b.createHTML(a) : a;
    return new Yc(c, null, Xc);
  };
  var G = window,
    H = document,
    dd = navigator,
    ed = H.currentScript && H.currentScript.src,
    fd = function (a, b) {
      var c = G[a];
      G[a] = void 0 === c ? b : c;
      return G[a];
    },
    gd = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in
                {
                  loaded: 1,
                  complete: 1,
                } && ((a.onreadystatechange = null), b());
            }));
    },
    hd = function (a, b, c) {
      var d = H.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      var e,
        f = Pc(),
        h = f ? f.createScriptURL(a) : a;
      e = new Rc(h, Qc);
      d.src =
        e instanceof Rc && e.constructor === Rc
          ? e.m
          : "type_error:TrustedResourceUrl";
      var k = ta(d.ownerDocument && d.ownerDocument.defaultView);
      k && d.setAttribute("nonce", k);
      gd(d, b);
      c && (d.onerror = c);
      var l = ta();
      l && d.setAttribute("nonce", l);
      var p = H.getElementsByTagName("script")[0] || H.body || H.head;
      p.parentNode.insertBefore(d, p);
      return d;
    },
    id = function () {
      if (ed) {
        var a = ed.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    jd = function (a, b) {
      var c = H.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (H.body && H.body.lastChild) || H.body || H.head;
      d.parentNode.insertBefore(c, d);
      gd(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    kd = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    ld = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    md = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      G.setTimeout(a, 0);
    },
    nd = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    od = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    pd = function (a) {
      var b = H.createElement("div"),
        c = cd("A<div>" + a + "</div>");
      bd(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    qd = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    rd = function (a) {
      (dd.sendBeacon && dd.sendBeacon(a)) || kd(a);
    },
    sd = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var td = {},
    ud = function () {
      return void 0 == td.gtag_cs_api ? !1 : td.gtag_cs_api;
    };
  var vd = [];

  function wd() {
    var a = fd("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: xd,
        update: yd,
        addListener: zd,
        notifyListeners: Ad,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }

  function xd(a, b, c, d, e, f) {
    var h = wd();
    h.active = !0;
    h.usedDefault = !0;
    if (void 0 != b) {
      var k = h.entries,
        l = k[a] || {},
        p = l.region,
        q = c && g(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || q === e || (q === d ? p !== e : !q && !p)) {
        var n = !!(f && 0 < f && void 0 === l.update),
          u = {
            region: q,
            initial: "granted" === b,
            update: l.update,
            quiet: n,
          };
        if ("" !== d || !1 !== l.initial) k[a] = u;
        n &&
          G.setTimeout(function () {
            k[a] === u &&
              u.quiet &&
              ((u.quiet = !1), Bd(a), Ad(), ya("TAGGING", 2));
          }, f);
      }
    }
  }

  function yd(a, b) {
    var c = wd();
    c.active = !0;
    if (void 0 != b) {
      var d = Cd(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var h = Cd(a);
      f.quiet ? ((f.quiet = !1), Bd(a)) : h !== d && Bd(a);
    }
  }

  function zd(a, b) {
    vd.push({
      ef: a,
      th: b,
    });
  }

  function Bd(a) {
    for (var b = 0; b < vd.length; ++b) {
      var c = vd[b];
      Fa(c.ef) && -1 !== c.ef.indexOf(a) && (c.yf = !0);
    }
  }

  function Ad(a) {
    for (var b = 0; b < vd.length; ++b) {
      var c = vd[b];
      if (c.yf) {
        c.yf = !1;
        try {
          c.th({
            df: a,
          });
        } catch (d) {}
      }
    }
  }
  var Cd = function (a) {
      var b = wd().entries[a] || {};
      return void 0 !== b.update
        ? b.update
        : void 0 !== b.initial
        ? b.initial
        : void 0;
    },
    Dd = function (a) {
      return (wd().entries[a] || {}).initial;
    },
    Ed = function (a) {
      return !(wd().entries[a] || {}).quiet;
    },
    Fd = function () {
      return ud() ? wd().active : !1;
    },
    Gd = function () {
      return wd().usedDefault;
    },
    Hd = function (a, b) {
      wd().addListener(a, b);
    },
    Id = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ed(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Hd(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Jd = function (a, b) {
      if (!1 === Cd(b)) {
        var c = !1;
        Hd([b], function (d) {
          !c && Cd(b) && (a(d), (c = !0));
        });
      }
    };

  function Kd(a) {
    for (var b = [], c = 0; c < Ld.length; c++) {
      var d = a(Ld[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Ld = [C.B, C.J],
    Md = function (a) {
      var b = a[C.Nf];
      b && F(40);
      var c = a[C.Of];
      c && F(41);
      for (var d = Fa(b) ? b : [b], e = 0; e < d.length; ++e)
        for (var f = 0; f < Ld.length; f++) {
          var h = Ld[f],
            k = a[Ld[f]],
            l = d[e];
          wd().set(h, k, l, "US", "US-NJ", c);
        }
    },
    Nd = function (a, b) {
      for (var c = 0; c < Ld.length; c++) {
        var d = Ld[c],
          e = a[Ld[c]];
        wd().update(d, e);
      }
      wd().notifyListeners(b);
    },
    Od = function (a) {
      var b = Cd(a);
      return void 0 != b ? b : !0;
    },
    Pd = function () {
      return "G1" + Kd(Cd);
    },
    Qd = function (a, b) {
      Id(a, b);
    };
  var Sd = function (a) {
      return Rd ? H.querySelectorAll(a) : null;
    },
    Td = function (a, b) {
      if (!Rd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Ud = !1;
  if (H.querySelectorAll)
    try {
      var Vd = H.querySelectorAll(":root");
      Vd && 1 == Vd.length && Vd[0] == H.documentElement && (Ud = !0);
    } catch (a) {}
  var Rd = Ud;
  var Wd = function (a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        h = e.filter;
      if (h) {
        var k = h.indexOf("opacity(");
        0 <= k &&
          ((h = h.substring(k + 8, h.indexOf(")", k))),
          "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = Math.min(h, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  };
  var fe = /:[0-9]+$/,
    ge = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    je = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = he(a.protocol) || he(G.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : G.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || G.location.hostname)
            .replace(fe, "")
            .toLowerCase());
      return ie(a, b, c, d, e);
    },
    ie = function (a, b, c, d, e) {
      var f,
        h = he(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = ke(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(fe, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || ya("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= Ha(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = ge(f, e, void 0));
          break;
        case "extension":
          var p = a.pathname.split(".");
          f = 1 < p.length ? p[p.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    he = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    ke = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    le = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || ya("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(fe, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    me = function (a) {
      function b(p) {
        var q = p.split("=")[0];
        return 0 > d.indexOf(q) ? p : q + "=0";
      }

      function c(p) {
        return p
          .split("&")
          .map(b)
          .filter(function (q) {
            return void 0 != q;
          })
          .join("&");
      }
      var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
        e = le(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        k = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === k[0] && (k = k.substring(1));
      h = c(h);
      k = c(k);
      "" !== h && (h = "?" + h);
      "" !== k && (k = "#" + k);
      var l = "" + f + h + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var ne = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    oe = new RegExp(/support|noreply/i),
    pe = ["SCRIPT", "IMG", "SVG", "PATH", "BR"],
    qe = ["BR"];

  function re(a) {
    var b;
    if (a === H.body) b = "body";
    else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var h = 0; h < f.childElementCount; h++)
                if (f.children[h] === a) {
                  e = h + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = re(a.parentElement) + ">:nth-child(" + e + ")";
        } else d = "";
        c = d;
      }
      b = c;
    }
    return b;
  }
  var ue = function () {
    var a = !0;
    var b = a,
      c;
    var d = [],
      e = H.body;
    if (e) {
      for (
        var f = e.querySelectorAll("*"), h = 0;
        h < f.length && 1e4 > h;
        h++
      ) {
        var k = f[h];
        if (!(0 <= pe.indexOf(k.tagName.toUpperCase()))) {
          for (var l = !1, p = 0; p < k.childElementCount && 1e4 > p; p++)
            if (!(0 <= qe.indexOf(k.children[p].tagName.toUpperCase()))) {
              l = !0;
              break;
            }
          l || d.push(k);
        }
      }
      c = {
        elements: d,
        status: 1e4 < f.length ? "2" : "1",
      };
    } else
      c = {
        elements: d,
        status: "4",
      };
    for (var q = c, n = q.elements, u = [], r = 0; r < n.length; r++) {
      var t = n[r],
        v = t.textContent;
      t.value && (v = t.value);
      if (v) {
        var w = v.match(ne);
        if (w) {
          var z = w[0],
            x;
          if (G.location) {
            var A = ie(G.location, "host", !0);
            x = 0 <= z.toLowerCase().indexOf(A);
          } else x = !1;
          x ||
            u.push({
              element: t,
              Oc: z,
            });
        }
      }
    }
    var y;
    for (
      var B = [], D = 10 < u.length ? "3" : q.status, E = 0;
      E < u.length && 10 > E;
      E++
    ) {
      var I = u[E].element,
        M = u[E].Oc,
        O = !1;
      B.push({
        Oc: M,
        querySelector: re(I),
        tagName: I.tagName,
        isVisible: !Wd(I),
        type: 1,
        Bc: !!O,
      });
    }
    return {
      elements: B,
      status: D,
    };
  };
  var Ie = {},
    L = null,
    Je = Math.random();
  Ie.D = "GTM-PFK425";
  Ie.mc = "2a1";
  Ie.wi = "";
  Ie.Pf =
    "ChAIgOzSgQYQnqKDqtu554IPEiMAD2oaqXNctKEv3D/5N54TvOCtN0w9a7HhV7FQSZjIhVd7XBoCWrk\x3d";
  var Ke = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Le = {
      __paused: !0,
      __tg: !0,
    },
    Me;
  for (Me in Ke) Ke.hasOwnProperty(Me) && (Le[Me] = !0);
  var Ne = "www.googletagmanager.com/gtm.js";
  var Oe = Ne,
    Pe = Ua(""),
    Qe = null,
    Re = null,
    Se = "//www.googletagmanager.com/a?id=" + Ie.D + "&cv=53",
    Te = {},
    Ue = {},
    Ve = function () {
      var a = L.sequence || 1;
      L.sequence = a + 1;
      return a;
    };
  var We = {},
    Xe = new La(),
    Ye = {},
    Ze = {},
    bf = {
      name: "dataLayer",
      set: function (a, b) {
        m(gb(a, b), Ye);
        $e();
      },
      get: function (a) {
        return af(a, 2);
      },
      reset: function () {
        Xe = new La();
        Ye = {};
        $e();
      },
    },
    af = function (a, b) {
      return 2 != b ? Xe.get(a) : cf(a);
    },
    cf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ye, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== Ha(b, d)) return;
      }
      return d;
    },
    df = function (a, b) {
      Ze.hasOwnProperty(a) || (Xe.set(a, b), m(gb(a, b), Ye), $e());
    },
    $e = function (a) {
      Na(Ze, function (b, c) {
        Xe.set(b, c);
        m(gb(b, void 0), Ye);
        m(gb(b, c), Ye);
        a && delete Ze[b];
      });
    },
    ef = function (a, b, c) {
      We[a] = We[a] || {};
      var d = 1 !== c ? cf(b) : Xe.get(b);
      "array" === lb(d) || "object" === lb(d)
        ? (We[a][b] = m(d))
        : (We[a][b] = d);
    },
    ff = function (a, b) {
      if (We[a]) return We[a][b];
    },
    gf = function (a, b) {
      We[a] && delete We[a][b];
    };
  var kf = {},
    lf = function (a, b) {
      if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a))
        return G._gtmexpgrp[a];
      void 0 === kf[a] && (kf[a] = Math.floor(Math.random() * b));
      return kf[a];
    };
  var pf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 != c ? b ^ (c >> 21) : b);
    return b;
  };

  function qf(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        k = h[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }
  var sf = function (a, b, c, d) {
      return rf(d) ? qf(a, String(b || document.cookie), c) : [];
    },
    vf = function (a, b, c, d, e) {
      if (rf(e)) {
        var f = tf(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = uf(
            f,
            function (h) {
              return h.wc;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = uf(
            f,
            function (h) {
              return h.Ob;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };

  function wf(a, b, c, d) {
    var e = document.cookie;
    document.cookie = a;
    var f = document.cookie;
    return e != f || (void 0 != c && 0 <= sf(b, f, !1, d).indexOf(c));
  }
  var Af = function (a, b, c) {
      function d(r, t, v) {
        if (null == v) return delete h[t], r;
        h[t] = v;
        return r + "; " + t + "=" + v;
      }

      function e(r, t) {
        if (null == t) return delete h[t], r;
        h[t] = !0;
        return r + "; " + t;
      }
      if (!rf(c.va)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = xf(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.Ki);
      f = d(f, "samesite", c.Oi);
      c.Pi && (f = e(f, "secure"));
      var l = c.domain;
      if ("auto" === l) {
        for (var p = yf(), q = 0; q < p.length; ++q) {
          var n = "none" !== p[q] ? p[q] : void 0,
            u = d(f, "domain", n);
          u = e(u, c.flags);
          if (!zf(n, c.path) && wf(u, a, b, c.va)) return 0;
        }
        return 1;
      }
      l && "none" !== l && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return zf(l, c.path) ? 1 : wf(f, a, b, c.va) ? 0 : 1;
    },
    Bf = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Af(a, b, c);
    };

  function uf(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }

  function tf(a, b, c) {
    for (var d = [], e = sf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        k = h.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift();
        l &&
          ((l = l.split("-")),
          d.push({
            id: h.join("."),
            wc: 1 * l[0] || 1,
            Ob: 1 * l[1] || 1,
          }));
      }
    }
    return d;
  }
  var xf = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Cf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Df = /(^|\.)doubleclick\.net$/i,
    zf = function (a, b) {
      return Df.test(document.location.hostname) || ("/" === b && Cf.test(a));
    },
    yf = function () {
      var a = [],
        b = document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = document.location.hostname;
      Df.test(e) || Cf.test(e) || a.push("none");
      return a;
    },
    rf = function (a) {
      if (!ud() || !a || !Fd()) return !0;
      if (!Ed(a)) return !1;
      var b = Cd(a);
      return null == b ? !0 : !!b;
    };
  var Ef = function () {
      for (
        var a = dd.userAgent + (H.cookie || "") + (H.referrer || ""),
          b = a.length,
          c = G.history.length;
        0 < c;

      )
        a += c-- ^ b++;
      return [
        Math.round(2147483647 * Math.random()) ^ (pf(a) & 2147483647),
        Math.round(Xa() / 1e3),
      ].join(".");
    },
    Hf = function (a, b, c, d, e) {
      var f = Ff(b);
      return vf(a, f, Gf(c), d, e);
    },
    If = function (a, b, c, d) {
      var e = "" + Ff(c),
        f = Gf(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Ff = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Gf = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };

  function Jf(a, b, c) {
    var d,
      e = a.Nb;
    null == e && (e = 7776e3);
    0 !== e && (d = new Date((b || Xa()) + 1e3 * e));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var Kf = ["1"],
    Lf = {},
    Of = function (a) {
      var b = Mf(a.prefix),
        c = Lf[b];
      c && Nf(b, c, a);
    },
    Qf = function (a) {
      var b = Mf(a.prefix);
      if (!Lf[b] && !Pf(b, a.path, a.domain)) {
        var c = Ef();
        if (0 === Nf(b, c, a)) {
          var d = fd("google_tag_data", {});
          d._gcl_au ? ya("GTM", 57) : (d._gcl_au = c);
        }
        Pf(b, a.path, a.domain);
      }
    };

  function Nf(a, b, c) {
    var d = If(b, "1", c.domain, c.path),
      e = Jf(c);
    e.va = "ad_storage";
    return Bf(a, d, e);
  }

  function Pf(a, b, c) {
    var d = Hf(a, b, c, Kf, "ad_storage");
    d && (Lf[a] = d);
    return d;
  }

  function Mf(a) {
    return (a || "_gcl") + "_au";
  }

  function Rf() {
    for (var a = Sf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }

  function Tf() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Sf, Uf;

  function Vf(a) {
    function b(l) {
      for (; d < a.length; ) {
        var p = a.charAt(d++),
          q = Uf[p];
        if (null != q) return q;
        if (!/^[\s\xa0]*$/.test(p))
          throw Error("Unknown base64 encoding at char: " + p);
      }
      return l;
    }
    Sf = Sf || Tf();
    Uf = Uf || Rf();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var Wf;
  var $f = function () {
      var a = Xf,
        b = Yf,
        c = Zf(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        ld(H, "mousedown", d);
        ld(H, "keyup", d);
        ld(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    ag = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Zf().decorators.push(f);
    },
    bg = function (a, b, c) {
      for (var d = Zf().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k;
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              p = a,
              q = !!h.sameHost;
            if (l && (q || p !== H.location.hostname))
              for (var n = 0; n < l.length; n++)
                if (l[n] instanceof RegExp) {
                  if (l[n].test(p)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= p.indexOf(l[n]) ||
                  (q && 0 <= l[n].indexOf(p))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var u = h.placement;
          void 0 == u && (u = h.fragment ? 2 : 1);
          u === b && cb(e, h.callback());
        }
      }
      return e;
    },
    Zf = function () {
      var a = fd("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) ||
        ((b = {
          decorators: [],
        }),
        (a.gl = b));
      return b;
    };
  var cg = /(.*?)\*(.*?)\*(.*)/,
    dg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    eg = /^(?:www\.|m\.|amp\.)+/,
    fg = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function gg(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var ig = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (
            void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString()
          ) {
            b.push(c);
            var e = b,
              f = e.push,
              h,
              k = String(d);
            Sf = Sf || Tf();
            Uf = Uf || Rf();
            for (var l = [], p = 0; p < k.length; p += 3) {
              var q = p + 1 < k.length,
                n = p + 2 < k.length,
                u = k.charCodeAt(p),
                r = q ? k.charCodeAt(p + 1) : 0,
                t = n ? k.charCodeAt(p + 2) : 0,
                v = u >> 2,
                w = ((u & 3) << 4) | (r >> 4),
                z = ((r & 15) << 2) | (t >> 6),
                x = t & 63;
              n || ((x = 64), q || (z = 64));
              l.push(Sf[v], Sf[w], Sf[z], Sf[x]);
            }
            h = l.join("");
            f.call(e, h);
          }
        }
      var A = b.join("*");
      return ["1", hg(A), A].join("*");
    },
    hg = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Wf)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[f] = h;
        }
        d = e;
      }
      Wf = d;
      for (var l = 4294967295, p = 0; p < c.length; p++)
        l = (l >>> 8) ^ Wf[(l ^ c.charCodeAt(p)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    kg = function () {
      return function (a) {
        var b = le(G.location.href),
          c = b.search.replace("?", ""),
          d = ge(c, "_gl", !0) || "";
        a.query = jg(d) || {};
        var e = je(b, "fragment").match(gg("_gl"));
        a.fragment = jg((e && e[3]) || "") || {};
      };
    },
    lg = function (a) {
      var b = kg(),
        c = Zf();
      c.data ||
        ((c.data = {
          query: {},
          fragment: {},
        }),
        b(c.data));
      var d = {},
        e = c.data;
      e && (cb(d, e.query), a && cb(d, e.fragment));
      return d;
    },
    jg = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = cg.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var p = h[2], q = 0; q < b; ++q)
                if (p === hg(k, q)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var n = {}, u = k ? k.split("*") : [], r = 0;
                r < u.length;
                r += 2
              )
                n[u[r]] = Vf(u[r + 1]);
              return n;
            }
          }
        }
      } catch (t) {}
    };

  function mg(a, b, c, d) {
    function e(q) {
      var n = q,
        u = gg(a).exec(n),
        r = n;
      if (u) {
        var t = u[2],
          v = u[4];
        r = u[1];
        v && (r = r + t + v);
      }
      q = r;
      var w = q.charAt(q.length - 1);
      q && "&" !== w && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    var f = fg.exec(c);
    if (!f) return "";
    var h = f[1],
      k = f[2] || "",
      l = f[3] || "",
      p = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + h + k + l;
  }

  function ng(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = bg(b, 1, c),
      e = bg(b, 2, c),
      f = bg(b, 3, c);
    if (eb(d)) {
      var h = ig(d);
      c ? og("_gl", h, a) : pg("_gl", h, a, !1);
    }
    if (!c && eb(e)) {
      var k = ig(e);
      pg("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var p = l,
            q = f[l],
            n = a;
          if (n.tagName) {
            if ("a" === n.tagName.toLowerCase()) {
              pg(p, q, n, void 0);
              break a;
            }
            if ("form" === n.tagName.toLowerCase()) {
              og(p, q, n);
              break a;
            }
          }
          "string" == typeof n && mg(p, q, n, void 0);
        }
  }

  function pg(a, b, c, d) {
    if (c.href) {
      var e = mg(a, b, c.href, void 0 === d ? !1 : d);
      Sc.test(e) && (c.href = e);
    }
  }

  function og(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = H.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var p = mg(a, b, c.action);
        Sc.test(p) && (c.action = p);
      }
    }
  }
  var Xf = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || ng(e, e.hostname);
        }
      } catch (h) {}
    },
    Yf = function (a) {
      try {
        if (a.action) {
          var b = je(le(a.action), "host");
          ng(a, b);
        }
      } catch (c) {}
    },
    qg = function (a, b, c, d) {
      $f();
      ag(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    rg = function (a, b) {
      $f();
      ag(a, [ie(G.location, "host", !0)], b, !0, !0);
    },
    sg = function () {
      var a = H.location.hostname,
        b = dg.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(eg, ""),
        l = e.replace(eg, ""),
        p;
      if (!(p = k === l)) {
        var q = "." + l;
        p = k.substring(k.length - q.length, k.length) === q;
      }
      return p;
    },
    tg = function (a, b) {
      return !1 === a ? !1 : a || b || sg();
    };
  var ug = /^\w+$/,
    vg = /^[\w-]+$/,
    wg = /^~?[\w-]+$/,
    xg = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
    },
    yg = function () {
      if (!ud() || !Fd()) return !0;
      var a = Cd("ad_storage");
      return null == a ? !0 : !!a;
    },
    zg = function (a, b) {
      Ed("ad_storage")
        ? yg()
          ? a()
          : Jd(a, "ad_storage")
        : b
        ? ya("TAGGING", 3)
        : Id(
            function () {
              zg(a, !0);
            },
            ["ad_storage"]
          );
    },
    Bg = function (a) {
      return Ag(a).map(function (b) {
        return b.Ga;
      });
    },
    Ag = function (a) {
      var b = [];
      if (!H.cookie) return b;
      var c = sf(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (
        var d = {}, e = 0;
        e < c.length;
        d = {
          lb: d.lb,
        },
          e++
      ) {
        d.lb = Cg(c[e]);
        var f = Dg(c[e]);
        if (d.lb && f) {
          var h = Ia(
            b,
            (function (k) {
              return function (l) {
                return l.Ga === k.lb;
              };
            })(d)
          );
          h && h.timestamp < f
            ? (h.timestamp = f)
            : h ||
              b.push({
                Ga: d.lb,
                timestamp: f,
              });
        }
      }
      return Eg(b);
    };

  function Fg(a) {
    return a && "string" == typeof a && a.match(ug) ? a : "_gcl";
  }
  var Hg = function () {
      var a = le(G.location.href),
        b = je(a, "query", !1, void 0, "gclid"),
        c = je(a, "query", !1, void 0, "gclsrc"),
        d = je(a, "query", !1, void 0, "dclid");
      if (!b || !c) {
        var e = a.hash.replace("#", "");
        b = b || ge(e, "gclid", void 0);
        c = c || ge(e, "gclsrc", void 0);
      }
      return Gg(b, c, d);
    },
    Gg = function (a, b, c) {
      var d = {},
        e = function (f, h) {
          d[h] || (d[h] = []);
          d[h].push(f);
        };
      d.gclid = a;
      d.gclsrc = b;
      d.dclid = c;
      if (void 0 !== a && a.match(vg))
        switch (b) {
          case void 0:
            e(a, "aw");
            break;
          case "aw.ds":
            e(a, "aw");
            e(a, "dc");
            break;
          case "ds":
            e(a, "dc");
            break;
          case "3p.ds":
            e(a, "dc");
            break;
          case "gf":
            e(a, "gf");
            break;
          case "ha":
            e(a, "ha");
            break;
          case "gp":
            e(a, "gp");
        }
      c && e(c, "dc");
      return d;
    },
    Ig = function (a, b) {
      switch (a) {
        case void 0:
        case "aw":
          return "aw" === b;
        case "aw.ds":
          return "aw" === b || "dc" === b;
        case "ds":
        case "3p.ds":
          return "dc" === b;
        case "gf":
          return "gf" === b;
        case "ha":
          return "ha" === b;
        case "gp":
          return "gp" === b;
      }
      return !1;
    },
    Kg = function (a) {
      var b = Hg();
      zg(function () {
        Jg(b, a);
      });
    };

  function Jg(a, b, c) {
    function d(l, p) {
      var q = Lg(l, e);
      q && Bf(q, p, f);
    }
    b = b || {};
    var e = Fg(b.prefix);
    c = c || Xa();
    var f = Jf(b, c, !0);
    f.va = "ad_storage";
    var h = Math.round(c / 1e3),
      k = function (l) {
        return ["GCL", h, l].join(".");
      };
    a.aw && (!0 === b.Ui ? d("aw", k("~" + a.aw[0])) : d("aw", k(a.aw[0])));
    a.dc && d("dc", k(a.dc[0]));
    a.gf && d("gf", k(a.gf[0]));
    a.ha && d("ha", k(a.ha[0]));
    a.gp && d("gp", k(a.gp[0]));
  }
  var Mg = function (a, b) {
      var c = lg(!0);
      zg(function () {
        for (var d = Fg(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== xg[f]) {
            var h = Lg(f, d),
              k = c[h];
            if (k) {
              var l = Math.min(Dg(k), Xa()),
                p;
              b: {
                for (
                  var q = l, n = sf(h, H.cookie, void 0, "ad_storage"), u = 0;
                  u < n.length;
                  ++u
                )
                  if (Dg(n[u]) > q) {
                    p = !0;
                    break b;
                  }
                p = !1;
              }
              if (!p) {
                var r = Jf(b, l, !0);
                r.va = "ad_storage";
                Bf(h, k, r);
              }
            }
          }
        }
        Jg(Gg(c.gclid, c.gclsrc), b);
      });
    },
    Lg = function (a, b) {
      var c = xg[a];
      if (void 0 !== c) return b + c;
    },
    Dg = function (a) {
      var b = a.split(".");
      return 3 !== b.length || "GCL" !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0);
    };

  function Cg(a) {
    var b = a.split(".");
    if (3 == b.length && "GCL" == b[0] && b[1]) return b[2];
  }
  var Ng = function (a, b, c, d, e) {
      if (Fa(b)) {
        var f = Fg(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var p = Lg(a[l], f);
              if (p) {
                var q = sf(p, H.cookie, void 0, "ad_storage");
                q.length && (k[p] = q.sort()[q.length - 1]);
              }
            }
            return k;
          };
        zg(function () {
          qg(h, b, c, d);
        });
      }
    },
    Eg = function (a) {
      return a.filter(function (b) {
        return wg.test(b.Ga);
      });
    },
    Og = function (a, b) {
      for (var c = Fg(b.prefix), d = {}, e = 0; e < a.length; e++)
        xg[a[e]] && (d[a[e]] = xg[a[e]]);
      zg(function () {
        Na(d, function (f, h) {
          var k = sf(c + h, H.cookie, void 0, "ad_storage");
          if (k.length) {
            var l = k[0],
              p = Dg(l),
              q = {};
            q[f] = [Cg(l)];
            Jg(q, b, p);
          }
        });
      });
    };

  function Pg(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Qg = function () {
      function a(e, f, h) {
        h && (e[f] = h);
      }
      var b = ["aw", "dc"];
      if (Fd()) {
        var c = Hg();
        if (Pg(c, b)) {
          var d = {};
          a(d, "gclid", c.gclid);
          a(d, "dclid", c.dclid);
          a(d, "gclsrc", c.gclsrc);
          rg(function () {
            return d;
          }, 3);
          rg(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Rg = function () {
      var a;
      if (yg()) {
        for (
          var b = [],
            c = H.cookie.split(";"),
            d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
            e = 0;
          e < c.length;
          e++
        ) {
          var f = c[e].match(d);
          f &&
            b.push({
              Ud: f[1],
              value: f[2],
            });
        }
        var h = {};
        if (b && b.length)
          for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split(".");
            "1" == l[0] &&
              3 == l.length &&
              l[1] &&
              (h[b[k].Ud] || (h[b[k].Ud] = []),
              h[b[k].Ud].push({
                timestamp: l[1],
                Ga: l[2],
              }));
          }
        a = h;
      } else a = {};
      return a;
    };
  var Sg = /^\d+\.fls\.doubleclick\.net$/,
    Tg = !1;

  function Ug(a, b) {
    Ed(C.B)
      ? Od(C.B)
        ? a()
        : Jd(a, C.B)
      : b
      ? F(42)
      : Qd(
          function () {
            Ug(a, !0);
          },
          [C.B]
        );
  }

  function Vg(a) {
    var b = le(G.location.href),
      c = je(b, "host", !1);
    if (c && c.match(Sg)) {
      var d = je(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }

  function Wg(a, b, c) {
    if ("aw" == a || "dc" == a) {
      var d = Vg("gcl" + a);
      if (d) return d.split(".");
    }
    var e = Fg(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !Od(C.B) && c,
        h;
      h = Hg()[a] || [];
      if (0 < h.length) return f ? ["0"] : h;
    }
    var k = Lg(a, e);
    return k ? Bg(k) : [];
  }
  var Xg = function (a) {
      var b = Vg("gac");
      if (b) return !Od(C.B) && a ? "0" : decodeURIComponent(b);
      var c = Rg(),
        d = [];
      Na(c, function (e, f) {
        f = Eg(f);
        for (var h = [], k = 0; k < f.length; k++) h.push(f[k].Ga);
        h.length && d.push(e + ":" + h.join(","));
      });
      return d.join(";");
    },
    Zg = function (a, b) {
      if (Tg) Yg(a, b, "dc");
      else {
        var c = Hg().dc || [];
        Ug(function () {
          Qf(b);
          var d = Lf[Mf(b.prefix)],
            e = !1;
          if (d && 0 < c.length) {
            var f = (L.joined_au = L.joined_au || {}),
              h = b.prefix || "_gcl";
            if (!f[h])
              for (var k = 0; k < c.length; k++) {
                var l = "https://adservice.google.com/ddm/regclk";
                l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                rd(l);
                e = f[h] = !0;
              }
          }
          null == a && (a = e);
          a && d && Of(b);
        });
      }
    },
    Yg = function (a, b, c) {
      var d = Hg(),
        e = [],
        f = d.gclid,
        h = d.dclid,
        k = d.gclsrc || "aw";
      !f ||
        ("aw.ds" !== k && "aw" !== k && "ds" !== k) ||
        (c && !Ig(k, c)) ||
        e.push({
          Ga: f,
          rf: k,
        });
      !h ||
        (c && "dc" !== c) ||
        e.push({
          Ga: h,
          rf: "ds",
        });
      Ug(function () {
        Qf(b);
        var l = Lf[Mf(b.prefix)],
          p = !1;
        if (l && 0 < e.length)
          for (
            var q = (L.joined_auid = L.joined_auid || {}), n = 0;
            n < e.length;
            n++
          ) {
            var u = e[n],
              r = u.Ga,
              t = u.rf,
              v = (b.prefix || "_gcl") + "." + t + "." + r;
            if (!q[v]) {
              var w = "https://adservice.google.com/pagead/regclk";
              w = w + "?gclid=" + r + "&auid=" + l + "&gclsrc=" + t;
              rd(w);
              p = q[v] = !0;
            }
          }
        null == a && (a = p);
        a && l && Of(b);
      });
    };
  var $g = /[A-Z]+/,
    ah = /\s/,
    bh = function (a) {
      if (g(a) && ((a = Wa(a)), !ah.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if ($g.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return {
              id: a,
              prefix: c,
              containerId: c + "-" + d[0],
              F: d,
            };
          }
        }
      }
    },
    dh = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = bh(a[c]);
        d && (b[d.id] = d);
      }
      ch(b);
      var e = [];
      Na(b, function (f, h) {
        e.push(h);
      });
      return e;
    };

  function ch(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.F[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var eh = function () {
    var a = !1;
    return a;
  };
  var gh = function (a, b, c, d) {
      return (2 === fh() || d || "http:" != G.location.protocol ? a : b) + c;
    },
    fh = function () {
      var a = id(),
        b;
      if (1 === a)
        a: {
          var c = Oe;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              h = H.getElementsByTagName("script"),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var uh = function (a) {
      return Od(C.B)
        ? a
        : a.replace(/&url=([^&#]+)/, function (b, c) {
            var d = me(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d);
          });
    },
    vh = function () {
      var a;
      if (!(a = Pe)) {
        var b;
        if (!0 === G._gtmdgs) b = !0;
        else {
          var c = (dd && dd.userAgent) || "";
          b =
            0 > c.indexOf("Safari") ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
            11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "")
              ? !1
              : !0;
        }
        a = !b;
      }
      if (a) return -1;
      var d = Ra("1");
      return lf(1, 100) < d ? lf(2, 2) : -1;
    },
    wh = function (a) {
      var b;
      if (!a || !a.length) return;
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d];
        e && e.estimated_delivery_date
          ? c.push("" + e.estimated_delivery_date)
          : c.push("");
      }
      b = c.join(",");
      return b;
    };
  var xh = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    yh = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    zh = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ah =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Ch = function (a) {
      var b = af("gtm.allowlist") || af("gtm.whitelist");
      b && F(9);
      var c = b && fb(Va(b), yh),
        d = af("gtm.blocklist") || af("gtm.blacklist");
      d || ((d = af("tagTypeBlacklist")) && F(3));
      d ? F(8) : (d = []);
      Bh() &&
        ((d = Va(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ha(Va(d), "google") && F(2);
      var e = d && fb(Va(d), zh),
        f = {};
      return function (h) {
        var k = h && h[rb.Na];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Ue[k] || [],
          p = a(k, l);
        if (b) {
          var q;
          if ((q = p))
            a: {
              if (0 > Ha(c, k))
                if (l && 0 < l.length)
                  for (var n = 0; n < l.length; n++) {
                    if (0 > Ha(c, l[n])) {
                      F(11);
                      q = !1;
                      break a;
                    }
                  }
                else {
                  q = !1;
                  break a;
                }
              q = !0;
            }
          p = q;
        }
        var u = !1;
        if (d) {
          var r = 0 <= Ha(e, k);
          if (r) u = r;
          else {
            var t = Ma(e, l || []);
            t && F(10);
            u = t;
          }
        }
        var v = !p || u;
        v ||
          !(0 <= Ha(l, "sandboxedScripts")) ||
          (c && -1 !== Ha(c, "sandboxedScripts")) ||
          (v = Ma(e, Ah));
        return (f[k] = v);
      };
    },
    Bh = function () {
      return xh.test(G.location && G.location.hostname);
    };
  var Dh = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    Eh = function (a) {
      var b = L.zones;
      return b ? b.checkState(Ie.D, a) : Dh;
    },
    Fh = function (a) {
      var b = L.zones;
      !b && a && (b = L.zones = a());
      return b;
    };
  var Gh = function () {},
    Hh = function () {};
  var Mh = !1,
    Nh = 0,
    Oh = [];

  function Ph(a) {
    if (!Mh) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Mh = !0;
        for (var e = 0; e < Oh.length; e++) J(Oh[e]);
      }
      Oh.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }

  function Qh() {
    if (!Mh && 140 > Nh) {
      Nh++;
      try {
        H.documentElement.doScroll("left"), Ph();
      } catch (a) {
        G.setTimeout(Qh, 50);
      }
    }
  }
  var Rh = function (a) {
    Mh ? a() : Oh.push(a);
  };
  var Th = function (a, b) {
      this.m = !1;
      this.H = [];
      this.T = {
        tags: [],
      };
      this.Y = !1;
      this.o = this.C = 0;
      Sh(this, a, b);
    },
    Uh = function (a, b, c, d) {
      if (Le.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      pb(d) && (e = m(d, e));
      e.id = c;
      e.status = "timeout";
      return a.T.tags.push(e) - 1;
    },
    Vh = function (a, b, c, d) {
      var e = a.T.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Wh = function (a) {
      if (!a.m) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.H.length = 0;
      }
    },
    Sh = function (a, b, c) {
      Da(b) && Xh(a, b);
      c &&
        G.setTimeout(function () {
          return Wh(a);
        }, Number(c));
    },
    Xh = function (a, b) {
      var c = ab(function () {
        return J(function () {
          b(Ie.D, a.T);
        });
      });
      a.m ? c() : a.H.push(c);
    },
    Yh = function (a) {
      a.C++;
      return ab(function () {
        a.o++;
        a.Y && a.o >= a.C && Wh(a);
      });
    };
  var Zh = function () {
    function a(d) {
      return !Ea(d) || 0 > d ? 0 : d;
    }
    if (!L._li && G.performance && G.performance.timing) {
      var b = G.performance.timing.navigationStart,
        c = Ea(bf.get("gtm.start")) ? bf.get("gtm.start") : 0;
      L._li = {
        cst: a(c - b),
        cbt: a(Re - b),
      };
    }
  };
  var ci = {},
    di = function () {
      return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject];
    },
    ei = !1;
  var fi = function (a) {
      G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
      var b = G.GoogleAnalyticsObject;
      if (G[b]) G.hasOwnProperty(b) || F(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(new Date());
        G[b] = c;
      }
      Zh();
      return G[b];
    },
    gi = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = di();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    },
    hi = function (a) {};
  var ji = function (a) {},
    ii = function () {
      return G.GoogleAnalyticsObject || "ga";
    },
    ki = function (a, b) {
      return function () {
        var c = di(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > h.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var pi = function () {
      return (
        "&tc=" +
        Vb.filter(function (a) {
          return a;
        }).length
      );
    },
    si = function () {
      2022 <= qi().length && ri();
    },
    ui = function () {
      ti || (ti = G.setTimeout(ri, 500));
    },
    ri = function () {
      ti && (G.clearTimeout(ti), (ti = void 0));
      void 0 === vi ||
        (wi[vi] && !xi && !yi) ||
        (zi[vi] || Ai.Hh() || 0 >= Bi--
          ? (F(1), (zi[vi] = !0))
          : (Ai.bi(), kd(qi()), (wi[vi] = !0), (Ci = Di = Ei = yi = xi = "")));
    },
    qi = function () {
      var a = vi;
      if (void 0 === a) return "";
      var b = Aa("GTM"),
        c = Aa("TAGGING");
      return [
        Fi,
        wi[a] ? "" : "&es=1",
        Gi[a],
        b ? "&u=" + b : "",
        c ? "&ut=" + c : "",
        pi(),
        xi,
        yi,
        Ei ? Ei : "",
        Di,
        Ci,
        "&z=0",
      ].join("");
    },
    Hi = function () {
      return [Se, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + Ie.mc].join("");
    },
    Ii = "0.005000" > Math.random(),
    Fi = Hi(),
    Ji = function () {
      Fi = Hi();
    },
    wi = {},
    xi = "",
    yi = "",
    Ci = "",
    Di = "",
    Ei = "",
    vi = void 0,
    Gi = {},
    zi = {},
    ti = void 0,
    Ai = (function (a, b) {
      var c = 0,
        d = 0;
      return {
        Hh: function () {
          if (c < a) return !1;
          Xa() - d >= b && (c = 0);
          return c >= a;
        },
        bi: function () {
          Xa() - d >= b && (c = 0);
          c++;
          d = Xa();
        },
      };
    })(2, 1e3),
    Bi = 1e3,
    Ki = function (a, b, c) {
      if (Ii && !zi[a] && b) {
        a !== vi && (ri(), (vi = a));
        var d,
          e = String(b[rb.Na] || "").replace(/_/g, "");
        0 === e.indexOf("cvt") && (e = "cvt");
        d = e;
        var f = c + d;
        xi = xi ? xi + "." + f : "&tr=" + f;
        var h = b["function"];
        if (!h) throw Error("Error: No function name given for function call.");
        var k = (Xb[h] ? "1" : "2") + d;
        Ci = Ci ? Ci + "." + k : "&ti=" + k;
        ui();
        si();
      }
    },
    Li = function (a, b, c) {
      if (Ii && !zi[a]) {
        a !== vi && (ri(), (vi = a));
        var d = c + b;
        yi = yi ? yi + "." + d : "&epr=" + d;
        ui();
        si();
      }
    },
    Mi = function (a, b, c) {};

  function Ni(a, b, c, d) {
    var e = Vb[a],
      f = Oi(a, b, c, d);
    if (!f) return null;
    var h = bc(e[rb.Xe], c, []);
    if (h && h.length) {
      var k = h[0];
      f = Ni(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.kf ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }

  function Oi(a, b, c, d) {
    function e() {
      if (f[rb.Eg]) k();
      else {
        var w = ec(f, c, []);
        var A = Uh(c.Oa, String(f[rb.Na]), Number(f[rb.Ye]), w[rb.Fg]),
          y = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!y) {
            y = !0;
            var E = Xa() - D;
            Ki(c.id, Vb[a], "5");
            Vh(c.Oa, A, "success", E);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!y) {
            y = !0;
            var E = Xa() - D;
            Ki(c.id, Vb[a], "6");
            Vh(c.Oa, A, "failure", E);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        Ki(c.id, f, "1");
        var B = function () {
          var E = Xa() - D;
          Ki(c.id, f, "7");
          Vh(c.Oa, A, "exception", E);
          y || ((y = !0), k());
        };
        var D = Xa();
        try {
          ac(w, c);
        } catch (E) {
          B(E);
        }
      }
    }
    var f = Vb[a],
      h = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Bd(f)) return null;
    var p = bc(f[rb.Ze], c, []);
    if (p && p.length) {
      var q = p[0],
        n = Ni(
          q.index,
          {
            onSuccess: h,
            onFailure: k,
            terminate: l,
          },
          c,
          d
        );
      if (!n) return null;
      h = n;
      k = 2 === q.kf ? l : n;
    }
    if (f[rb.Te] || f[rb.Hg]) {
      var u = f[rb.Te] ? Wb : c.ji,
        r = h,
        t = k;
      if (!u[a]) {
        e = ab(e);
        var v = Pi(a, u, e);
        h = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        u[a](r, t);
      };
    }
    return e;
  }

  function Pi(a, b, c) {
    var d = [],
      e = [];
    b[a] = Qi(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Ri;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Si;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }

  function Qi(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }

  function Ri(a) {
    a();
  }

  function Si(a, b) {
    b();
  }
  var Vi = function (a, b) {
    for (var c = [], d = 0; d < Vb.length; d++)
      if (a[d]) {
        var e = Vb[d];
        var f = Yh(b.Oa);
        try {
          var h = Ni(
            d,
            {
              onSuccess: f,
              onFailure: f,
              terminate: f,
            },
            b,
            d
          );
          if (h) {
            var k = c,
              l = k.push,
              p = d,
              q = e["function"];
            if (!q) throw "Error: No function name given for function call.";
            var n = Xb[q];
            l.call(k, {
              Gf: p,
              zf: n ? n.priorityOverride || 0 : 0,
              rh: h,
            });
          } else Ti(d, b), f();
        } catch (t) {
          f();
        }
      }
    var u = b.Oa;
    u.Y = !0;
    u.o >= u.C && Wh(u);
    c.sort(Ui);
    for (var r = 0; r < c.length; r++) c[r].rh();
    return 0 < c.length;
  };

  function Ui(a, b) {
    var c,
      d = b.zf,
      e = a.zf;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Gf,
        k = b.Gf;
      f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
  }

  function Ti(a, b) {
    if (!Ii) return;
    var c = function (d) {
      var e = b.Bd(Vb[d]) ? "3" : "4",
        f = bc(Vb[d][rb.Xe], b, []);
      f && f.length && c(f[0].index);
      Ki(b.id, Vb[d], e);
      var h = bc(Vb[d][rb.Ze], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var Wi = !1,
    aj = function (a) {
      var b = a["gtm.uniqueEventId"],
        c = a.event;
      if ("gtm.js" === c) {
        if (Wi) return !1;
        Wi = !0;
      }
      var d = Eh(b),
        e = !1;
      if (!d.active) {
        if ("gtm.js" !== c) return !1;
        e = !0;
        d = Eh(Number.MAX_SAFE_INTEGER);
      }
      Ii &&
        !zi[b] &&
        vi !== b &&
        (ri(),
        (vi = b),
        (Ci = xi = ""),
        (Gi[b] =
          "&e=" +
          (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") +
          "&eid=" +
          b),
        ui());
      var f = a.eventCallback,
        h = a.eventTimeout,
        k = {
          id: b,
          name: c,
          Bd: Ch(d.isAllowed),
          ji: [],
          uf: function () {
            F(6);
          },
          cf: Xi(b),
          Oa: new Th(f, h),
        };
      Yi(b, k.Oa);
      var l = jc(k);
      e && (l = Zi(l));
      var p = Vi(l, k);
      ("gtm.js" !== c && "gtm.sync" !== c) || ji(Ie.D);
      switch (c) {
        case "gtm.init":
          F(19), p && F(20);
      }
      return $i(l, p);
    };

  function Xi(a) {
    return function (b) {
      Ii && (qb(b) || Mi(a, "input", b));
    };
  }

  function Yi(a, b) {
    ef(a, "event", 1);
    ef(a, "ecommerce", 1);
    ef(a, "gtm");
    ef(a, "eventModel");
  }

  function Zi(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && Ke[String(Vb[c][rb.Na])] && (b[c] = !0);
    return b;
  }

  function $i(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Vb[c] && !Le[String(Vb[c][rb.Na])]) return !0;
    return !1;
  }

  function bj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return le("" + c + b).href;
    }
  }

  function cj(a, b) {
    return dj() ? bj(a, b) : void 0;
  }

  function dj() {
    var a = !1;
    return a;
  }
  var ej = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
    },
    fj = function (a) {
      var b = new ej();
      b.eventModel = a;
      return b;
    },
    gj = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    hj = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    ij = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    jj = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    kj = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    lj = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    mj = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    nj = function (a, b) {
      a.onFailure = b;
      return a;
    };
  ej.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var oj = function (a) {
    function b(e) {
      Na(e, function (f) {
        c[f] = null;
      });
    }
    var c = {};
    b(a.eventModel);
    b(a.targetConfig);
    b(a.containerConfig);
    b(a.globalConfig);
    var d = [];
    Na(c, function (e) {
      d.push(e);
    });
    return d;
  };
  var pj;
  if (3 === Ie.mc.length) pj = "g";
  else {
    var qj = "G";
    pj = qj;
  }
  var rj = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: pj,
      OPT: "o",
    },
    sj = function (a) {
      var b = Ie.D.split("-"),
        c = b[0].toUpperCase(),
        d = rj[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Ie.mc.length) {
        var h = "w";
        f = "2" + h;
      } else f = "";
      return f + d + Ie.mc + e;
    };
  var tj = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  var uj = function () {
    return Wc("iPhone") && !Wc("iPod") && !Wc("iPad");
  };
  Wc("Opera");
  Wc("Trident") || Wc("MSIE");
  Wc("Edge");
  !Wc("Gecko") ||
    (-1 != Tc.toLowerCase().indexOf("webkit") && !Wc("Edge")) ||
    Wc("Trident") ||
    Wc("MSIE") ||
    Wc("Edge");
  -1 != Tc.toLowerCase().indexOf("webkit") && !Wc("Edge") && Wc("Mobile");
  Wc("Macintosh");
  Wc("Windows");
  Wc("Linux") || Wc("CrOS");
  var vj = qa.navigator || null;
  vj && (vj.appVersion || "").indexOf("X11");
  Wc("Android");
  uj();
  Wc("iPad");
  Wc("iPod");
  uj() || Wc("iPad") || Wc("iPod");
  Tc.toLowerCase().indexOf("kaios");
  var wj = function (a, b) {
    for (var c = a, d = 0; 50 > d; ++d) {
      var e;
      try {
        e = !(!c.frames || !c.frames[b]);
      } catch (k) {
        e = !1;
      }
      if (e) return c;
      var f;
      a: {
        try {
          var h = c.parent;
          if (h && h != c) {
            f = h;
            break a;
          }
        } catch (k) {}
        f = null;
      }
      if (!(c = f)) break;
    }
    return null;
  };
  var xj = function () {};
  var yj = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    zj = function (a, b) {
      this.o = a;
      this.m = null;
      this.H = {};
      this.Y = 0;
      this.T = void 0 === b ? 500 : b;
      this.C = null;
    };
  pa(zj, xj);
  var Bj = function (a) {
    return "function" === typeof a.o.__tcfapi || null != Aj(a);
  };
  zj.prototype.addEventListener = function (a) {
    var b = {},
      c = Kc(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.T &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.T));
    var e = function (f, h) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = yj(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), h || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Cj(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  zj.prototype.removeEventListener = function (a) {
    a && a.listenerId && Cj(this, "removeEventListener", null, a.listenerId);
  };
  var Ej = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === h && (k = 1))
        : 3 === c && ((k = 1), 1 === h && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var p = Dj(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            p && "1" === b && a.purposeOneTreatment && "DE" === a.publisherCC
              ? !0
              : p && Dj(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Dj(a.purpose.legitimateInterests, b) &&
                Dj(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Dj = function (a, b) {
      return !(!a || !a[b]);
    },
    Cj = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Aj(a)) {
        Fj(a);
        var f = ++a.Y;
        a.H[f] = c;
        if (a.m) {
          var h = {};
          a.m.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Aj = function (a) {
      if (a.m) return a.m;
      a.m = wj(a.o, "__tcfapiLocator");
      return a.m;
    },
    Fj = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.H[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        tj(a.o, a.C));
    };
  var Gj = !0;
  var Hj = {
    1: 0,
    3: 0,
    4: 0,
    7: 3,
    9: 3,
    10: 3,
  };

  function Ij(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Jj = Ij("", 550),
    Kj = Ij("", 500);

  function Lj() {
    var a = L.tcf || {};
    return (L.tcf = a);
  }
  var Mj = function (a, b) {
      this.C = a;
      this.m = b;
      this.o = Xa();
    },
    Nj = function (a) {},
    Oj = function (a) {},
    Uj = function () {
      var a = Lj(),
        b = new zj(G, Gj ? 3e3 : -1),
        c = new Mj(b, a);
      if (
        (Pj()
          ? !0 === G.gtag_enable_tcf_support
          : !1 !== G.gtag_enable_tcf_support) &&
        !a.active &&
        ("function" === typeof G.__tcfapi || Bj(b))
      ) {
        a.active = !0;
        a.Pb = {};
        Qj();
        var d = null;
        Gj
          ? (d = G.setTimeout(function () {
              Rj(a);
              Sj(a);
              d = null;
            }, Kj))
          : (a.tcString = "tcunavailable");
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) Rj(a), Sj(a), Nj(c);
            else {
              var f;
              if (!1 === e.gdprApplies) (f = Tj()), b.removeEventListener(e);
              else if (
                "tcloaded" === e.eventStatus ||
                "useractioncomplete" === e.eventStatus ||
                "cmpuishown" === e.eventStatus
              ) {
                var h = {},
                  k;
                for (k in Hj)
                  if (Hj.hasOwnProperty(k))
                    if ("1" === k) {
                      var l = e,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      var q;
                      var n = l;
                      !1 === n.gdprApplies
                        ? (q = !0)
                        : (void 0 === n.internalErrorState &&
                            (n.internalErrorState = yj(n)),
                          (q =
                            "error" === n.cmpStatus ||
                            0 !== n.internalErrorState ||
                            ("loaded" === n.cmpStatus &&
                              ("tcloaded" === n.eventStatus ||
                                "useractioncomplete" === n.eventStatus))
                              ? !0
                              : !1));
                      h["1"] = q
                        ? !1 === l.gdprApplies ||
                          "tcunavailable" === l.tcString ||
                          (void 0 === l.gdprApplies && !p) ||
                          "string" !== typeof l.tcString ||
                          !l.tcString.length
                          ? !0
                          : Ej(l, "1", 0)
                        : !1;
                    } else h[k] = Ej(e, k, Hj[k]);
                f = h;
              }
              f &&
                ((a.tcString = e.tcString || "tcempty"),
                (a.Pb = f),
                Sj(a),
                Nj(c));
            }
          }),
            Oj(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), Rj(a), Sj(a);
        }
      }
    };

  function Rj(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Gj && (a.Pb = Tj());
  }

  function Qj() {
    var a = {};
    Md(((a.ad_storage = "denied"), (a.wait_for_update = Jj), a));
  }
  var Pj = function () {
    var a = !1;
    a = !0;
    return a;
  };

  function Tj() {
    var a = {},
      b;
    for (b in Hj) Hj.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }

  function Sj(a) {
    var b = {};
    Nd(((b.ad_storage = a.Pb["1"] ? "granted" : "denied"), b));
  }
  var Vj = function () {
      var a = Lj();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    Wj = function () {
      var a = Lj();
      return a.active ? a.tcString || "" : "";
    },
    Xj = function (a) {
      if (!Hj.hasOwnProperty(String(a))) return !0;
      var b = Lj();
      return b.active && b.Pb ? !!b.Pb[String(a)] : !0;
    };
  var Yj = !1;

  function Zj(a) {
    var b = String(G.location).split(/[?#]/)[0],
      c = Ie.Pf || G._CONSENT_MODE_SALT;
    return a ? (c ? String(pf(b + a + c)) : "0") : "";
  }

  function ak(a) {
    function b(r) {
      var t;
      L.reported_gclid || (L.reported_gclid = {});
      t = L.reported_gclid;
      var v;
      v =
        Yj && h && (!Fd() || Od(C.B))
          ? l + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs")
          : l + (r ? "gcu" : "gcs");
      if (!t[v]) {
        t[v] = !0;
        var w = [],
          z = function (D, E) {
            E && w.push(D + "=" + encodeURIComponent(E));
          },
          x = "https://www.google.com";
        if (Fd()) {
          var A = Od(C.B);
          z("gcs", Pd());
          r && z("gcu", "1");
          L.dedupe_gclid || (L.dedupe_gclid = "" + Ef());
          z("rnd", L.dedupe_gclid);
          if ((!l || (p && "aw.ds" !== p)) && Od(C.B)) {
            var y = Bg("_gcl_aw");
            z("gclaw", y.join("."));
          }
          z("url", String(G.location).split(/[?#]/)[0]);
          z("dclid", bk(d, q));
          !A && d && (x = "https://pagead2.googlesyndication.com");
        }
        z("gdpr_consent", Wj());
        "1" === lg(!1)._up && z("gtm_up", "1");
        z("gclid", bk(d, l));
        z("gclsrc", p);
        z("gtm", sj(!e));
        Yj && h && Od(C.B) && (Qf(f || {}), z("auid", Lf[Mf(f.prefix)] || ""));
        var B = x + "/pagead/landing?" + w.join("&");
        rd(B);
      }
    }
    var c = !!a.rd,
      d = !!a.ra,
      e = a.R,
      f = void 0 === a.sc ? {} : a.sc,
      h = void 0 === a.Ac ? !0 : a.Ac,
      k = Hg(),
      l = k.gclid || "",
      p = k.gclsrc,
      q = k.dclid || "",
      n = !c && (!l || (p && "aw.ds" !== p) ? !1 : !0),
      u = Fd();
    if (n || u)
      u
        ? Qd(
            function () {
              b();
              Od(C.B) ||
                Jd(function (r) {
                  return b(!0, r.df);
                }, C.B);
            },
            [C.B]
          )
        : b();
  }

  function bk(a, b) {
    var c = a && !Od(C.B);
    return b && c ? "0" : b;
  }
  var Lk = function () {
      var a = !0;
      (Xj(7) && Xj(9) && Xj(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Kk() && (a = !1);
      return a;
    },
    Kk = function () {
      var a = !0;
      (Xj(3) && Xj(4)) || (a = !1);
      return a;
    };
  var gl = !1;

  function hl() {
    var a = L;
    return (a.gcq = a.gcq || new il());
  }
  var jl = function (a, b, c) {
      hl().register(a, b, c);
    },
    kl = function (a, b, c, d) {
      hl().push("event", [b, a], c, d);
    },
    ll = function (a, b) {
      hl().push("config", [a], b);
    },
    ml = function (a, b, c, d) {
      hl().push("get", [a, b], c, d);
    },
    nl = {},
    ol = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = null;
      this.m = !1;
    },
    pl = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.R = c || "";
      this.m = d;
      this.o = e;
    },
    il = function () {
      this.H = {};
      this.o = {};
      this.m = [];
      this.C = {
        AW: !1,
        UA: !1,
      };
    },
    ql = function (a, b) {
      var c = bh(b);
      return (a.H[c.containerId] = a.H[c.containerId] || new ol());
    },
    rl = function (a, b, c) {
      if (b) {
        var d = bh(b);
        if (d && 1 === ql(a, b).status) {
          ql(a, b).status = 2;
          var e = {};
          Ii &&
            (e.timeoutId = G.setTimeout(function () {
              F(38);
              ui();
            }, 3e3));
          a.push("require", [e], d.containerId);
          nl[d.containerId] = Xa();
          if (eh()) {
          } else {
            var h =
                "/gtag/js?id=" +
                encodeURIComponent(d.containerId) +
                "&l=dataLayer&cx=c",
              k =
                ("http:" != G.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + h),
              l = cj(c, h) || k;
            hd(l);
          }
        }
      }
    },
    sl = function (a, b, c, d) {
      if (d.R) {
        var e = ql(a, d.R),
          f = e.o;
        if (f) {
          var h = m(c),
            k = m(e.targetConfig[d.R]),
            l = m(e.containerConfig),
            p = m(e.remoteConfig),
            q = m(a.o),
            n = af("gtm.uniqueEventId"),
            u = bh(d.R).prefix,
            r = mj(
              lj(
                nj(
                  kj(jj(ij(hj(gj(fj(h), k), l), p), q), function () {
                    Li(n, u, "2");
                  }),
                  function () {
                    Li(n, u, "3");
                  }
                ),
                function (t, v) {
                  a.C[t] = v;
                }
              ),
              function (t) {
                return a.C[t];
              }
            );
          try {
            Li(n, u, "1");
            f(d.R, b, d.C, r);
          } catch (t) {
            Li(n, u, "4");
          }
        }
      }
    };
  aa = il.prototype;
  aa.register = function (a, b, c) {
    var d = ql(this, a);
    if (3 !== d.status) {
      d.o = b;
      d.status = 3;
      if (c) {
        m(d.remoteConfig, c);
        d.remoteConfig = c;
      }
      var e = bh(a),
        f = nl[e.containerId];
      if (void 0 !== f) {
        var h = L[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        L[e.containerId]._spx && (k = k.toLowerCase());
        var l = af("gtm.uniqueEventId"),
          p = k,
          q = Xa() - h;
        if (Ii && !zi[l]) {
          l !== vi && (ri(), (vi = l));
          var n = p + "." + Math.floor(h - f) + "." + Math.floor(q);
          Di = Di ? Di + "," + n : "&cl=" + n;
        }
        delete nl[e.containerId];
      }
      this.flush();
    }
  };
  aa.push = function (a, b, c, d) {
    var e = Math.floor(Xa() / 1e3);
    rl(this, c, b[0][C.Ma] || this.o[C.Ma]);
    gl && c && ql(this, c).m && (d = !1);
    this.m.push(new pl(a, e, c, b, d));
    d || this.flush();
  };
  aa.insert = function (a, b, c) {
    var d = Math.floor(Xa() / 1e3);
    0 < this.m.length
      ? this.m.splice(1, 0, new pl(a, d, c, b, !1))
      : this.m.push(new pl(a, d, c, b, !1));
  };
  aa.flush = function (a) {
    for (var b = this, c = [], d = !1; this.m.length; ) {
      var e = this.m[0];
      if (e.o)
        gl
          ? !e.R || ql(this, e.R).m
            ? ((e.o = !1), this.m.push(e))
            : c.push(e)
          : ((e.o = !1), this.m.push(e));
      else
        switch (e.type) {
          case "require":
            if (3 !== ql(this, e.R).status && !a) {
              gl && this.m.push.apply(this.m, c);
              return;
            }
            Ii && G.clearTimeout(e.m[0].timeoutId);
            break;
          case "set":
            Na(e.m[0], function (u, r) {
              m(gb(u, r), b.o);
            });
            break;
          case "config":
            var f = e.m[0],
              h = !!f[C.fc];
            delete f[C.fc];
            var k = ql(this, e.R),
              l = bh(e.R),
              p = l.containerId === l.id;
            h || (p ? (k.containerConfig = {}) : (k.targetConfig[e.R] = {}));
            (k.m && h) || sl(this, C.fa, f, e);
            k.m = !0;
            delete f[C.Ab];
            p ? m(f, k.containerConfig) : m(f, k.targetConfig[e.R]);
            gl && (d = !0);
            break;
          case "event":
            sl(this, e.m[1], e.m[0], e);
            break;
          case "get":
            var q = {},
              n = ((q[C.Aa] = e.m[0]), (q[C.za] = e.m[1]), q);
            sl(this, C.Ja, n, e);
        }
      this.m.shift();
    }
    gl && (this.m.push.apply(this.m, c), d && this.flush());
  };
  aa.getRemoteConfig = function (a) {
    return ql(this, a).remoteConfig;
  };
  var tl = function (a, b, c) {
      function d(f, h) {
        var k = f[h];
        k = sd(f, h);
        return k;
      }
      var e = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": d(a, "className"),
        "gtm.elementId": a["for"] || nd(a, "id") || "",
        "gtm.elementTarget": a.formTarget || d(a, "target") || "",
      };
      c && (e["gtm.triggers"] = c.join(","));
      e["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        d(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return e;
    },
    ul = function (a) {
      L.hasOwnProperty("autoEventsSettings") || (L.autoEventsSettings = {});
      var b = L.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    vl = function (a, b, c) {
      ul(a)[b] = c;
    },
    wl = function (a, b, c, d) {
      var e = ul(a),
        f = Ya(e, b, d);
      e[b] = c(f);
    },
    xl = function (a, b, c) {
      var d = ul(a);
      return Ya(d, b, c);
    };
  var yl = !!G.MutationObserver,
    zl = void 0,
    Al = function (a) {
      if (!zl) {
        var b = function () {
          var c = H.body;
          if (c)
            if (yl)
              new MutationObserver(function () {
                for (var e = 0; e < zl.length; e++) J(zl[e]);
              }).observe(c, {
                childList: !0,
                subtree: !0,
              });
            else {
              var d = !1;
              ld(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  J(function () {
                    d = !1;
                    for (var e = 0; e < zl.length; e++) J(zl[e]);
                  }));
              });
            }
        };
        zl = [];
        H.body ? b() : J(b);
      }
      zl.push(a);
    };
  var Cl = !1,
    Dl = [];

  function El() {
    if (!Cl) {
      Cl = !0;
      for (var a = 0; a < Dl.length; a++) J(Dl[a]);
    }
  }
  var Fl = function (a) {
    Cl ? J(a) : Dl.push(a);
  };
  var Gl = "HA GF G UA AW DC".split(" "),
    Hl = !1,
    Il = {},
    Jl = !1;

  function Kl(a, b) {
    var c = {
      event: a,
    };
    b &&
      ((c.eventModel = m(b)),
      b[C.Vc] && (c.eventCallback = b[C.Vc]),
      b[C.$b] && (c.eventTimeout = b[C.$b]));
    return c;
  }

  function Ll() {
    return Hl;
  }
  var Ol = {
      config: function (a) {
        var b;
        return b;
      },
      consent: function (a) {
        function b() {
          Ll() &&
            m(a[2], {
              subcommand: a[1],
            });
        }
        if (3 === a.length) {
          F(39);
          var c = Ve(),
            d = a[1];
          "default" === d
            ? (b(), Md(a[2]))
            : "update" === d && (b(), Nd(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && g(b)) {
          var c;
          if (2 < a.length) {
            if ((!pb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = Kl(b, c);
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime)
          return (
            (Jl = !0),
            Ll(),
            {
              event: "gtm.js",
              "gtm.start": a[1].getTime(),
            }
          );
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && pb(a[1])
          ? (b = m(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}),
            pb(a[2]) || Fa(a[2]) ? (b[a[1]] = m(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    Pl = {
      policy: !0,
    };
  var Ql = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    Sl = function (a) {
      var b = Rl(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var km = function (a) {
    if (jm(a)) return a;
    this.m = a;
  };
  km.prototype.yh = function () {
    return this.m;
  };
  var jm = function (a) {
    return !a || "object" !== lb(a) || pb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  km.prototype.getUntrustedUpdateValue = km.prototype.yh;
  var lm = [],
    mm = !1,
    nm = !1,
    om = !1,
    pm = function (a) {
      return G["dataLayer"].push(a);
    },
    qm = function (a) {
      var b = L["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0;
      return function () {
        ++d === c && a();
      };
    };

  function rm(a) {
    var b = a._clear;
    Na(a, function (d, e) {
      "_clear" !== d && (b && df(d, void 0), df(d, e));
    });
    Qe || (Qe = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Ve()), (a["gtm.uniqueEventId"] = c), df("gtm.uniqueEventId", c));
    return aj(a);
  }

  function sm() {
    var a = lm[0];
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Oa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }

  function tm() {
    for (var a = !1; !om && 0 < lm.length; ) {
      var b = !1;
      if (b && !nm && sm()) {
        var c = {};
        lm.unshift(((c.event = "gtm.init"), c));
        nm = !0;
      }
      var d = !1;
      if (d && !mm && sm()) {
        var e = {};
        lm.unshift(((e.event = "gtm.init_consent"), e));
        mm = !0;
      }
      om = !0;
      delete Ye.eventModel;
      $e();
      var f = lm.shift();
      if (null != f) {
        var h = jm(f);
        if (h) {
          var k = f;
          f = jm(k) ? k.getUntrustedUpdateValue() : void 0;
          for (
            var l = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              p = 0;
            p < l.length;
            p++
          ) {
            var q = l[p],
              n = af(q, 1);
            if (Fa(n) || pb(n)) n = m(n);
            Ze[q] = n;
          }
        }
        try {
          if (Da(f))
            try {
              f.call(bf);
            } catch (A) {}
          else if (Fa(f)) {
            var u = f;
            if (g(u[0])) {
              var r = u[0].split("."),
                t = r.pop(),
                v = u.slice(1),
                w = af(r.join("."), 2);
              if (void 0 !== w && null !== w)
                try {
                  w[t].apply(w, v);
                } catch (A) {}
            }
          } else {
            if (Oa(f)) {
              a: {
                var z = f;
                if (z.length && g(z[0])) {
                  var x = Ol[z[0]];
                  if (x && (!h || !Pl[z[0]])) {
                    f = x(z);
                    break a;
                  }
                }
                f = void 0;
              }
              if (!f) {
                om = !1;
                continue;
              }
            }
            a = rm(f) || a;
          }
        } finally {
          h && $e(!0);
        }
      }
      om = !1;
    }
    return !a;
  }

  function um() {
    var a = tm();
    try {
      Ql(G["dataLayer"], Ie.D);
    } catch (b) {}
    return a;
  }
  var wm = function () {
      var a = fd("dataLayer", []),
        b = fd("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Rh(function () {
        b.gtmDom ||
          ((b.gtmDom = !0),
          a.push({
            event: "gtm.dom",
          }));
      });
      Fl(function () {
        b.gtmLoad ||
          ((b.gtmLoad = !0),
          a.push({
            event: "gtm.load",
          }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < L.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new km(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var h = c.apply(a, e);
        lm.push.apply(lm, e);
        if (300 < this.length) for (F(4); 300 < this.length; ) this.shift();
        var k = "boolean" !== typeof h || h;
        return tm() && k;
      };
      var d = a.slice(0);
      lm.push.apply(lm, d);
      vm() && J(um);
    },
    vm = function () {
      var a = !0;
      return a;
    };
  var xm = {};
  xm.hc = new String("undefined");
  var ym = function (a) {
    this.m = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === xm.hc ? b : a[d]);
      return c.join("");
    };
  };
  ym.prototype.toString = function () {
    return this.m("undefined");
  };
  ym.prototype.valueOf = ym.prototype.toString;
  xm.Kg = ym;
  xm.ld = {};
  xm.kh = function (a) {
    return new ym(a);
  };
  var zm = {};
  xm.ci = function (a, b) {
    var c = Ve();
    zm[c] = [a, b];
    return c;
  };
  xm.ff = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = zm[c];
      if (d && "function" === typeof d[b]) d[b]();
      zm[c] = void 0;
    };
  };
  xm.Gh = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  xm.Wh = function (a) {
    if (a === xm.hc) return a;
    var b = Ve();
    xm.ld[b] = a;
    return 'google_tag_manager["' + Ie.D + '"].macro(' + b + ")";
  };
  xm.Qh = function (a, b, c) {
    a instanceof xm.Kg && ((a = a.m(xm.ci(b, c))), (b = Ba));
    return {
      zd: a,
      onSuccess: b,
    };
  };
  var Am = ["input", "select", "textarea"],
    Bm = ["button", "hidden", "image", "reset", "submit"],
    Cm = function (a) {
      var b = a.tagName.toLowerCase();
      return !Ia(Am, function (c) {
        return c === b;
      }) ||
        ("input" === b &&
          Ia(Bm, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Dm = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : H.getElementById(a.form)
        : qd(a, ["form"], 100);
    },
    Em = function (a, b, c) {
      if (!a.elements) return 0;
      for (
        var d = b.getAttribute(c), e = 0, f = 1;
        e < a.elements.length;
        e++
      ) {
        var h = a.elements[e];
        if (Cm(h)) {
          if (h.getAttribute(c) === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Pm = G.clearTimeout,
    Qm = G.setTimeout,
    P = function (a, b, c) {
      if (eh()) {
        b && J(b);
      } else return hd(a, b, c);
    },
    Rm = function () {
      return new Date();
    },
    Sm = function () {
      return G.location.href;
    },
    Tm = function (a) {
      return je(le(a), "fragment");
    },
    Um = function (a) {
      return ke(le(a));
    },
    Vm = function (a, b) {
      return af(a, b || 2);
    },
    Wm = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = pm(a)))
        : (d = pm(a));
      return d;
    },
    Xm = function (a, b) {
      G[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === G[a] || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    Ym = function (a, b, c) {
      return sf(a, b, void 0 === c ? !0 : !!c);
    },
    Zm = function (a, b, c) {
      return 0 === Bf(a, b, c);
    },
    $m = function (a, b) {
      if (eh()) {
        b && J(b);
      } else jd(a, b);
    },
    an = function (a) {
      return !!xl(a, "init", !1);
    },
    bn = function (a) {
      vl(a, "init", !0);
    },
    cn = function (a, b) {
      var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Oe;
      c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      P(gh("https://", "http://", c));
    },
    dn = function (a, b) {
      var c = a[b];
      c = sd(a, b);
      return c;
    },
    en = function (a, b, c) {
      Ii && (qb(a) || Mi(c, b, a));
    };
  var fn = xm.Qh;

  function Dn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var En = new La();

  function Fn(a, b) {
    function c(h) {
      var k = le(h),
        l = je(k, "protocol"),
        p = je(k, "host", !0),
        q = je(k, "port"),
        n = je(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == q) ||
        ("https" == l && "443" == q)
      )
        (l = "web"), (q = "default");
      return [l, p, q, n];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }

  function Gn(a) {
    return Hn(a) ? 1 : 0;
  }

  function Hn(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Fa(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = m(a, {});
        m(
          {
            arg1: c[d],
            any_of: void 0,
          },
          e
        );
        if (Gn(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) {
            var h = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var k = 0; k < h.length; k++)
                if (b[h[k]]) {
                  f = b[h[k]](c);
                  break a;
                }
            } catch (r) {}
          }
          f = !1;
        }
        return f;
      case "_ew":
        return Dn(b, c);
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var l;
        l = String(b).split(",");
        return 0 <= Ha(l, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var p;
        var q = a.ignore_case ? "i" : void 0;
        try {
          var n = String(c) + q,
            u = En.get(n);
          u || ((u = new RegExp(c, q)), En.set(n, u));
          p = u.test(b);
        } catch (r) {
          p = !1;
        }
        return p;
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return Fn(b, c);
    }
    return !1;
  }
  var In = encodeURI,
    X = encodeURIComponent,
    Jn = kd;
  var Kn = function (a, b) {
    if (!a) return !1;
    var c = je(le(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Ln = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };

  function rp() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var sp = function () {
      var a = rp();
      a.hid = a.hid || Ja();
      return a.hid;
    },
    tp = function (a, b) {
      var c = rp();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var bq = window,
    cq = document,
    dq = function (a) {
      var b = bq._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === bq["ga-disable-" + a]))
        return !0;
      try {
        var c = bq.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = qf("AMP_TOKEN", String(cq.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return cq.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var eq = {};

  function gq(a) {
    delete a.eventModel[C.Ab];
    iq(a.eventModel);
  }
  var iq = function (a) {
    Na(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[C.na] || {};
    Na(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var lq = function (a, b, c) {
      kl(b, c, a);
    },
    mq = function (a, b, c) {
      kl(b, c, a, !0);
    },
    sq = function (a, b) {};

  function nq(a, b) {}
  var Z = {
    g: {},
  };

  (Z.g.jsm = ["customScripts"]),
    (function () {
      (function (a) {
        Z.__jsm = a;
        Z.__jsm.h = "jsm";
        Z.__jsm.i = !0;
        Z.__jsm.priorityOverride = 0;
      })(function (a) {
        if (void 0 !== a.vtp_javascript) {
          var b = a.vtp_javascript;
          try {
            var c = V("google_tag_manager");
            var d = c && c.e && c.e(b);
            en(d, "jsm", a.vtp_gtmEventId);
            return d;
          } catch (e) {}
        }
      });
    })();
  (Z.g.sp = ["google"]),
    (function () {
      (function (a) {
        Z.__sp = a;
        Z.__sp.h = "sp";
        Z.__sp.i = !0;
        Z.__sp.priorityOverride = 0;
      })(function (a) {
        var b =
            -1 == navigator.userAgent.toLowerCase().indexOf("firefox")
              ? "//www.googleadservices.com/pagead/conversion_async.js"
              : "https://www.google.com/pagead/conversion_async.js",
          c = a.vtp_gtmOnFailure,
          d = function () {
            var h = V("google_trackConversion");
            if (Da(h)) {
              var k = {};
              "DATA_LAYER" == a.vtp_customParamsFormat
                ? (k = a.vtp_dataLayerVariable)
                : "USER_SPECIFIED" == a.vtp_customParamsFormat &&
                  (k = Ln(a.vtp_customParams, "key", "value"));
              var l = {
                google_conversion_id: a.vtp_conversionId,
                google_conversion_label: a.vtp_conversionLabel,
                google_custom_params: k,
                google_remarketing_only: !0,
                onload_callback: a.vtp_gtmOnSuccess,
                google_gtm: sj(),
              };
              a.vtp_enableDynamicRemarketing &&
                (a.vtp_eventName && (k.event = a.vtp_eventName),
                a.vtp_eventValue &&
                  (l.google_conversion_value = a.vtp_eventValue),
                a.vtp_eventItems &&
                  (l.google_gtag_event_data = {
                    items: a.vtp_eventItems,
                  }));
              a.vtp_rdp && (l.google_restricted_data_processing = !0);
              a.vtp_userId && (l.google_user_id = a.vtp_userId);
              var p = Wj();
              (l.google_additional_params =
                l.google_additional_params || {}).gdpr_consent = p;
              h(l) || c();
            } else c();
          },
          e = function () {
            P(b, d, c);
          },
          f = !1;
        Fd() && !f
          ? Qd(
              function () {
                Od(C.B) ? e() : Jd(e, C.B);
              },
              [C.B]
            )
          : (Zh(), e());
      });
    })();
  (Z.g.c = ["google"]),
    (function () {
      (function (a) {
        Z.__c = a;
        Z.__c.h = "c";
        Z.__c.i = !0;
        Z.__c.priorityOverride = 0;
      })(function (a) {
        en(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.i = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(ff(a.vtp_gtmEventId, "event"));
      });
    })();
  (Z.g.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.h = "f";
        Z.__f.i = !0;
        Z.__f.priorityOverride = 0;
      })(function (a) {
        var b = Vm("gtm.referrer", 1) || H.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? je(
                le(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Um(String(b))
          : String(b);
      });
    })();
  (Z.g.k = ["google"]),
    (function () {
      (function (a) {
        Z.__k = a;
        Z.__k.h = "k";
        Z.__k.i = !0;
        Z.__k.priorityOverride = 0;
      })(function (a) {
        return Ym(a.vtp_name, Vm("gtm.cookie", 1), !!a.vtp_decodeCookie)[0];
      });
    })();

  (Z.g.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.h = "u";
        Z.__u.i = !0;
        Z.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Vm("gtm.url", 1)) || Sm();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Um(String(c));
        var e = le(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var h = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              l = b[a("vtp_ignoreEmptyQueryParam").toString()],
              p;
            h
              ? Fa(k)
                ? (p = k)
                : (p = String(k).replace(/\s+/g, "").split(","))
              : (p = [String(k)]);
            for (var q = 0; q < p.length; q++) {
              var n = je(e, "QUERY", void 0, void 0, p[q]);
              if (void 0 != n && (!l || "" !== n)) {
                f = n;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = je(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0,
            void 0
          );
        return f;
      });
    })();
  (Z.g.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.h = "v";
        Z.__v.i = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Vm(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        en(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (Z.g.ua = ["google"]),
    (function () {
      function a(n) {
        return Od(n);
      }

      function b(n, u) {
        var r = !1;
        if (Fd() && !r && !e[n]) {
          var t = function () {
            var v = di(),
              w = "gtm" + Ve(),
              z = p(u),
              x = {
                name: w,
              };
            l(z, x, !0);
            v("create", n, x);
            v(function () {
              v.remove(w);
            });
          };
          Jd(t, C.J);
          Jd(t, C.B);
          e[n] = !0;
        }
      }
      var c,
        d = {},
        e = {},
        f = {
          name: !0,
          clientId: !0,
          sampleRate: !0,
          siteSpeedSampleRate: !0,
          alwaysSendReferrer: !0,
          allowAnchor: !0,
          allowLinker: !0,
          cookieName: !0,
          cookieDomain: !0,
          cookieExpires: !0,
          cookiePath: !0,
          cookieUpdate: !0,
          cookieFlags: !0,
          legacyCookieDomain: !0,
          legacyHistoryImport: !0,
          storage: !0,
          useAmpClientId: !0,
          storeGac: !0,
          _cd2l: !0,
          _useUp: !0,
          _cs: !0,
        },
        h = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        k = {
          urlPassthrough: !0,
        },
        l = function (n, u, r) {
          var t = 0;
          if (n)
            for (var v in n)
              if (
                !k[v] &&
                n.hasOwnProperty(v) &&
                ((r && f[v]) || (!r && void 0 === f[v]))
              ) {
                var w = h[v] ? Ua(n[v]) : n[v];
                "anonymizeIp" != v || w || (w = void 0);
                u[v] = w;
                t++;
              }
          return t;
        },
        p = function (n) {
          var u = {};
          n.vtp_gaSettings &&
            m(Ln(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), u);
          m(Ln(n.vtp_fieldsToSet, "fieldName", "value"), u);
          Od(C.J) || (u.storage = "none");
          Od(C.B) || ((u.allowAdFeatures = !1), (u.storeGac = !1));
          Lk() || (u.allowAdFeatures = !1);
          Kk() || (u.allowAdPersonalizationSignals = !1);
          n.vtp_transportUrl && (u._x_19 = n.vtp_transportUrl);
          return u;
        },
        q = function (n) {
          function u(da, T) {
            void 0 !== T && E("set", da, T);
          }
          var r = {},
            t = {},
            v = {},
            w = {};
          if (n.vtp_gaSettings) {
            var z = n.vtp_gaSettings;
            m(Ln(z.vtp_contentGroup, "index", "group"), t);
            m(Ln(z.vtp_dimension, "index", "dimension"), v);
            m(Ln(z.vtp_metric, "index", "metric"), w);
            var x = m(z);
            x.vtp_fieldsToSet = void 0;
            x.vtp_contentGroup = void 0;
            x.vtp_dimension = void 0;
            x.vtp_metric = void 0;
            n = m(n, x);
          }
          m(Ln(n.vtp_contentGroup, "index", "group"), t);
          m(Ln(n.vtp_dimension, "index", "dimension"), v);
          m(Ln(n.vtp_metric, "index", "metric"), w);
          var A = p(n),
            y = fi(n.vtp_functionName);
          if (Da(y)) {
            var B = "",
              D = "";
            n.vtp_setTrackerName && "string" == typeof n.vtp_trackerName
              ? "" !== n.vtp_trackerName &&
                ((D = n.vtp_trackerName), (B = D + "."))
              : ((D = "gtm" + Ve()), (B = D + "."));
            var E = function (da) {
                var T = [].slice.call(arguments, 0);
                T[0] = B + T[0];
                y.apply(window, T);
              },
              I = function (da, T) {
                return void 0 === T ? T : da(T);
              },
              M = function (da, T) {
                if (T)
                  for (var Ka in T)
                    T.hasOwnProperty(Ka) && E("set", da + Ka, T[Ka]);
              },
              O = function () {},
              W = {
                name: D,
              };
            l(A, W, !0);
            var fa = n.vtp_trackingId || r.trackingId;
            y("create", fa, W);
            E("set", "&gtm", sj(!0));
            var N = !1;
            Fd() && !N && (E("set", "&gcs", Pd()), b(fa, n));
            A._x_19 &&
              (null == ed && delete A._x_19,
              A._x_20 && !d[D] && ((d[D] = !0), y(ki(D, String(A._x_20)))));
            n.vtp_enableRecaptcha && E("require", "recaptcha", "recaptcha.js");
            (function (da, T) {
              void 0 !== n[T] && E("set", da, n[T]);
            })("nonInteraction", "vtp_nonInteraction");
            M("contentGroup", t);
            M("dimension", v);
            M("metric", w);
            var K = {};
            l(A, K, !1) && E("set", K);
            var S;
            n.vtp_enableLinkId && E("require", "linkid", "linkid.js");
            E("set", "hitCallback", function () {
              var da = A && A.hitCallback;
              Da(da) && da();
              n.vtp_gtmOnSuccess();
            });
            var U = function (da, T) {
              return void 0 === n[da] ? r[T] : n[da];
            };
            if ("TRACK_EVENT" == n.vtp_trackType) {
              n.vtp_enableEcommerce && (E("require", "ec", "ec.js"), O());
              var ja = {
                hitType: "event",
                eventCategory: String(U("vtp_eventCategory", "category")),
                eventAction: String(U("vtp_eventAction", "action")),
                eventLabel: I(String, U("vtp_eventLabel", "label")),
                eventValue: I(Ra, U("vtp_eventValue", "value")),
              };
              l(S, ja, !1);
              E("send", ja);
            } else if ("TRACK_SOCIAL" == n.vtp_trackType) {
            } else if ("TRACK_TRANSACTION" == n.vtp_trackType) {
              E(
                "require",
                "ecommerce",
                "//www.google-analytics.com/plugins/ua/ecommerce.js"
              );
              var wa = function (da) {
                  return Vm("transaction" + da, 1);
                },
                ma = wa("Id");
              E("ecommerce:addTransaction", {
                id: ma,
                affiliation: wa("Affiliation"),
                revenue: wa("Total"),
                shipping: wa("Shipping"),
                tax: wa("Tax"),
              });
              for (var Y = wa("Products") || [], Ca = 0; Ca < Y.length; Ca++) {
                var kb = Y[Ca];
                E("ecommerce:addItem", {
                  id: ma,
                  sku: kb.sku,
                  name: kb.name,
                  category: kb.category,
                  price: kb.price,
                  quantity: kb.quantity,
                });
              }
              E("ecommerce:send");
            } else if ("TRACK_TIMING" == n.vtp_trackType) {
            } else if ("DECORATE_LINK" == n.vtp_trackType) {
            } else if ("DECORATE_FORM" == n.vtp_trackType) {
            } else if ("TRACK_DATA" == n.vtp_trackType) {
            } else {
              n.vtp_enableEcommerce && (E("require", "ec", "ec.js"), O());
              if (
                n.vtp_doubleClick ||
                "DISPLAY_FEATURES" == n.vtp_advertisingFeaturesType
              ) {
                var Ga =
                  "_dc_gtm_" +
                  String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                E("require", "displayfeatures", void 0, {
                  cookieName: Ga,
                });
              }
              if (
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                n.vtp_advertisingFeaturesType
              ) {
                var jb =
                  "_dc_gtm_" +
                  String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                E("require", "adfeatures", {
                  cookieName: jb,
                });
              }
              S ? E("send", "pageview", S) : E("send", "pageview");
              n.vtp_autoLinkDomains &&
                gi(
                  B,
                  n.vtp_autoLinkDomains,
                  !!n.vtp_useHashAutoLink,
                  !!n.vtp_decorateFormsAutoLink
                );
              Ua(A.urlPassthrough) && hi(B);
            }
            if (!c) {
              var bb = n.vtp_useDebugVersion
                ? "u/analytics_debug.js"
                : "analytics.js";
              n.vtp_useInternalVersion &&
                !n.vtp_useDebugVersion &&
                (bb = "internal/" + bb);
              c = !0;
              var wb = cj(A._x_19, "/analytics.js"),
                Qa = gh(
                  "https:",
                  "http:",
                  "//www.google-analytics.com/" + bb,
                  A && !!A.forceSSL
                );
              P(
                "analytics.js" === bb && wb ? wb : Qa,
                function () {
                  var da = di();
                  (da && da.loaded) || n.vtp_gtmOnFailure();
                },
                n.vtp_gtmOnFailure
              );
            }
          } else J(n.vtp_gtmOnFailure);
        };
      (function (n) {
        Z.__ua = n;
        Z.__ua.h = "ua";
        Z.__ua.i = !0;
        Z.__ua.priorityOverride = 0;
      })(function (n) {
        Qd(
          function () {
            q(n);
          },
          [C.J, C.B]
        );
      });
    })();

  (Z.g.aev = ["google"]),
    (function () {
      function a(r, t) {
        var v = ff(r, "gtm");
        if (v) return v[t];
      }

      function b(r, t, v, w) {
        w || (w = "element");
        var z = r + "." + t,
          x;
        if (q.hasOwnProperty(z)) x = q[z];
        else {
          var A = a(r, w);
          if (A && ((x = v(A)), (q[z] = x), n.push(z), 35 < n.length)) {
            var y = n.shift();
            delete q[y];
          }
        }
        return x;
      }

      function c(r, t, v) {
        var w = a(r, u[t]);
        return void 0 !== w ? w : v;
      }

      function d(r, t) {
        if (!r) return !1;
        var v = e(Sm());
        Fa(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var w = [v], z = 0; z < t.length; z++) {
          var x = t[z];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (y) {
                continue;
              }
            else x = x.domain;
          if (x instanceof RegExp) {
            if (x.test(r)) return !1;
          } else {
            var A = x;
            if (0 != A.length) {
              if (0 <= e(r).indexOf(A)) return !1;
              w.push(e(A));
            }
          }
        }
        return !Kn(r, w);
      }

      function e(r) {
        p.test(r) || (r = "http://" + r);
        return je(le(r), "HOST", !0);
      }

      function f(r, t, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return b(t, "FORM." + r, h, "formSubmitElement") || v;
          case "LENGTH":
            var w = b(t, "FORM." + r, k);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return l(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return l(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return l(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var z = a(t, "interactedFormFieldPosition");
            return void 0 === z ? v : z;
          case "INTERACT_SEQUENCE_NUMBER":
            var x = a(t, "interactSequenceNumber");
            return void 0 === x ? v : x;
          default:
            return v;
        }
      }

      function h(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return nd(r, "value");
          case "button":
            return od(r);
          default:
            return null;
        }
      }

      function k(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, v = 0; v < r.elements.length; v++)
            Cm(r.elements[v]) && t++;
          return t;
        }
      }

      function l(r, t, v) {
        var w = a(r, "interactedFormField");
        return (w && nd(w, t)) || v;
      }
      var p = /^https?:\/\//i,
        q = {},
        n = [],
        u = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.h = "aev";
        Z.__aev.i = !0;
        Z.__aev.priorityOverride = 0;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          v = r.vtp_defaultValue,
          w = r.vtp_varType;
        switch (w) {
          case "TAG_NAME":
            var z = a(t, "element");
            return (z && z.tagName) || v;
          case "TEXT":
            return b(t, w, od) || v;
          case "URL":
            var x;
            a: {
              var A = String(a(t, "elementUrl") || v || ""),
                y = le(A),
                B = String(r.vtp_component || "URL");
              switch (B) {
                case "URL":
                  x = A;
                  break a;
                case "IS_OUTBOUND":
                  x = d(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  x = je(
                    y,
                    B,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return x;
          case "ATTRIBUTE":
            var D;
            if (void 0 === r.vtp_attribute) D = c(t, w, v);
            else {
              var E = r.vtp_attribute,
                I = a(t, "element");
              D = (I && nd(I, E)) || v || "";
            }
            return D;
          case "MD":
            var M = r.vtp_mdValue,
              O = b(t, "MD", Lm);
            return M && O ? Om(O, M) || v : O || v;
          case "FORM":
            return f(String(r.vtp_component || "SUBMIT_TEXT"), t, v);
          default:
            var W = c(t, w, v);
            en(W, "aev", r.vtp_gtmEventId);
            return W;
        }
      });
    })();
  (Z.g.hl = ["google"]),
    (function () {
      function a(f) {
        return f.target && f.target.location && f.target.location.href
          ? f.target.location.href
          : Sm();
      }

      function b(f, h) {
        ld(f, "hashchange", function (k) {
          var l = a(k);
          h({
            source: "hashchange",
            state: null,
            url: Um(l),
            S: Tm(l),
          });
        });
      }

      function c(f, h) {
        ld(f, "popstate", function (k) {
          var l = a(k);
          h({
            source: "popstate",
            state: k.state,
            url: Um(l),
            S: Tm(l),
          });
        });
      }

      function d(f, h, k) {
        var l = h.history,
          p = l[f];
        if (Da(p))
          try {
            l[f] = function (q, n, u) {
              p.apply(l, [].slice.call(arguments, 0));
              k({
                source: f,
                state: q,
                url: Um(Sm()),
                S: Tm(Sm()),
              });
            };
          } catch (q) {}
      }

      function e() {
        var f = {
          source: null,
          state: V("history").state || null,
          url: Um(Sm()),
          S: Tm(Sm()),
        };
        return function (h) {
          var k = f,
            l = {};
          l[k.source] = !0;
          l[h.source] = !0;
          if (!l.popstate || !l.hashchange || k.S != h.S) {
            var p = {
              event: "gtm.historyChange",
              "gtm.historyChangeSource": h.source,
              "gtm.oldUrlFragment": f.S,
              "gtm.newUrlFragment": h.S,
              "gtm.oldHistoryState": f.state,
              "gtm.newHistoryState": h.state,
              "gtm.oldUrl": f.url,
              "gtm.newUrl": h.url,
            };
            f = h;
            Wm(p);
          }
        };
      }
      (function (f) {
        Z.__hl = f;
        Z.__hl.h = "hl";
        Z.__hl.i = !0;
        Z.__hl.priorityOverride = 0;
      })(function (f) {
        var h = V("self");
        if (!an("hl")) {
          var k = e();
          b(h, k);
          c(h, k);
          d("pushState", h, k);
          d("replaceState", h, k);
          bn("hl");
        }
        J(f.vtp_gtmOnSuccess);
      });
    })();

  (Z.g.html = ["customScripts"]),
    (function () {
      function a(d, e, f, h) {
        return function () {
          try {
            if (0 < e.length) {
              var k = e.shift(),
                l = a(d, e, f, h);
              if (
                "SCRIPT" == String(k.nodeName).toUpperCase() &&
                "text/gtmscript" == k.type
              ) {
                var p = H.createElement("script");
                p.async = !1;
                p.type = "text/javascript";
                p.id = k.id;
                p.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (p.charset = k.charset);
                var q = k.getAttribute("data-gtmsrc");
                q && ((p.src = q), gd(p, l));
                d.insertBefore(p, null);
                q || l();
              } else if (
                k.innerHTML &&
                0 <= k.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var n = []; k.firstChild; )
                  n.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, n, l, h)();
              } else d.insertBefore(k, null), l();
            } else f();
          } catch (u) {
            J(h);
          }
        };
      }
      var c = function (d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = fn(d.vtp_html, d.vtp_gtmOnSuccess, e),
            h = f.zd,
            k = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? b(h, k, e) : a(H.body, pd(h), k, e)();
        } else
          Qm(function () {
            c(d);
          }, 200);
      };
      Z.__html = c;
      Z.__html.h = "html";
      Z.__html.i = !0;
      Z.__html.priorityOverride = 0;
    })();

  (Z.g.lcl = []),
    (function () {
      function a() {
        var c = V("document"),
          d = 0,
          e = function (f) {
            var h = f.target;
            if (
              h &&
              3 !== f.which &&
              !(f.Fh || (f.timeStamp && f.timeStamp === d))
            ) {
              d = f.timeStamp;
              h = qd(h, ["a", "area"], 100);
              if (!h) return f.returnValue;
              var k = f.defaultPrevented || !1 === f.returnValue,
                l = xl("lcl", k ? "nv.mwt" : "mwt", 0),
                p;
              p = k ? xl("lcl", "nv.ids", []) : xl("lcl", "ids", []);
              if (p.length) {
                var q = tl(h, "gtm.linkClick", p);
                if (b(f, h, c) && !k && l && h.href) {
                  var n = String(dn(h, "rel") || ""),
                    u = !!Ia(n.split(" "), function (v) {
                      return "noreferrer" === v.toLowerCase();
                    });
                  u && F(36);
                  var r = V((dn(h, "target") || "_self").substring(1)),
                    t = !0;
                  if (
                    Wm(
                      q,
                      qm(function () {
                        var v;
                        if ((v = t && r)) {
                          var w;
                          a: if (u) {
                            var z;
                            try {
                              z = new MouseEvent(f.type, {
                                bubbles: !0,
                              });
                            } catch (x) {
                              if (!c.createEvent) {
                                w = !1;
                                break a;
                              }
                              z = c.createEvent("MouseEvents");
                              z.initEvent(f.type, !0, !0);
                            }
                            z.Fh = !0;
                            f.target.dispatchEvent(z);
                            w = !0;
                          } else w = !1;
                          v = !w;
                        }
                        v && (r.location.href = dn(h, "href"));
                      }),
                      l
                    )
                  )
                    t = !1;
                  else
                    return (
                      f.preventDefault && f.preventDefault(),
                      (f.returnValue = !1)
                    );
                } else Wm(q, function () {}, l || 2e3);
                return !0;
              }
            }
          };
        ld(c, "click", e, !1);
        ld(c, "auxclick", e, !1);
      }

      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
          return !1;
        var f = dn(d, "href"),
          h = f.indexOf("#"),
          k = dn(d, "target");
        if ((k && "_self" !== k && "_parent" !== k && "_top" !== k) || 0 === h)
          return !1;
        if (0 < h) {
          var l = Um(f),
            p = Um(e.location);
          return l !== p;
        }
        return !0;
      }
      (function (c) {
        Z.__lcl = c;
        Z.__lcl.h = "lcl";
        Z.__lcl.i = !0;
        Z.__lcl.priorityOverride = 0;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var h = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var k = function (p) {
            return Math.max(f, p);
          };
          wl("lcl", "mwt", k, 0);
          e || wl("lcl", "nv.mwt", k, 0);
        }
        var l = function (p) {
          p.push(h);
          return p;
        };
        wl("lcl", "ids", l, []);
        e || wl("lcl", "nv.ids", l, []);
        an("lcl") || (a(), bn("lcl"));
        J(c.vtp_gtmOnSuccess);
      });
    })();

  var tq = {};
  (tq.macro = function (a) {
    if (xm.ld.hasOwnProperty(a)) return xm.ld[a];
  }),
    (tq.onHtmlSuccess = xm.ff(!0)),
    (tq.onHtmlFailure = xm.ff(!1));
  tq.dataLayer = bf;
  tq.callback = function (a) {
    Te.hasOwnProperty(a) && Da(Te[a]) && Te[a]();
    delete Te[a];
  };
  tq.bootstrap = 0;
  tq._spx = !1;

  function uq() {
    L[Ie.D] = tq;
    cb(Ue, Z.g);
    Zb = Zb || xm;
    $b = kc;
  }

  function vq() {
    td.gtag_cs_api = !0;
    L = G.google_tag_manager = G.google_tag_manager || {};
    Uj();
    if (L[Ie.D]) {
      var a = L.zones;
      a && a.unregisterChild(Ie.D);
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        Sb.push(c[d]);
      for (var e = b.tags || [], f = 0; f < e.length; f++) Vb.push(e[f]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) Ub.push(h[k]);
      for (var l = b.rules || [], p = 0; p < l.length; p++) {
        for (var q = l[p], n = {}, u = 0; u < q.length; u++)
          n[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        Tb.push(n);
      }
      Xb = Z;
      Yb = Gn;
      uq();
      wm();
      Mh = !1;
      Nh = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        Ph();
      else {
        ld(H, "DOMContentLoaded", Ph);
        ld(H, "readystatechange", Ph);
        if (H.createEventObject && H.documentElement.doScroll) {
          var r = !0;
          try {
            r = !G.frameElement;
          } catch (x) {}
          r && Qh();
        }
        ld(G, "load", Ph);
      }
      Cl = !1;
      "complete" === H.readyState ? El() : ld(G, "load", El);
      a: {
        if (!Ii) break a;
        G.setInterval(Ji, 864e5);
      }
      Re = new Date().getTime();
    }
  }
  (function (a) {
    if (!G["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = le(H.referrer);
        b = "cct.google" === ie(c, "host");
      }
      if (!b) {
        var d = sf("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((G["__TAGGY_INSTALLED"] = !0),
        hd("https://cct.google/taggy/agent.js"));
    }
    var f = function () {
        var p = G["google.tagmanager.debugui2.queue"];
        p ||
          ((p = []),
          (G["google.tagmanager.debugui2.queue"] = p),
          hd("https://www.googletagmanager.com/debug/bootstrap"));
        return p;
      },
      h = "x" === je(G.location, "query", !1, void 0, "gtm_debug");
    if (!h && H.referrer) {
      var k = le(H.referrer);
      h = "tagassistant.google.com" === ie(k, "host");
    }
    if (!h) {
      var l = sf("__TAG_ASSISTANT");
      h = l.length && l[0].length;
    }
    G.__TAG_ASSISTANT_API && (h = !0);
    h && ed
      ? f().push({
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: ed,
            resume: function () {
              a();
            },
          },
        })
      : a();
  })(vq);
})();
