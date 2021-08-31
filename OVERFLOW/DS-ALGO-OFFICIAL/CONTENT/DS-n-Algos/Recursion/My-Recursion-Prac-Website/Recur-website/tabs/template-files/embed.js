(function (g) {
  var window = this;
  var P2 = function (a, b) {
      g.kf(a.i, 8 * b + 2);
      var c = a.i.end();
      a.u.push(c);
      a.l += c.length;
      c.push(a.l);
      return c;
    },
    Q2 = function (a, b) {
      var c = b.pop();
      for (c = a.l + a.i.length() - c; 127 < c; )
        b.push((c & 127) | 128), (c >>>= 7), a.l++;
      b.push(c);
      a.l++;
    },
    oGa = function (a, b, c) {
      null != c &&
        (g.kf(a.i, 8 * b + 1),
        (a = a.i),
        (b = c >>> 0),
        (c = Math.floor((c - b) / 4294967296) >>> 0),
        (g.vf = b),
        (g.wf = c),
        g.lf(a, g.vf),
        g.lf(a, g.wf));
    },
    R2 = function (a, b, c) {
      null != c && (g.kf(a.i, 8 * b), a.i.i.push(c ? 1 : 0));
    },
    S2 = function (a, b, c) {
      if (null != c) {
        b = P2(a, b);
        for (var d = a.i, e = 0; e < c.length; e++) {
          var f = c.charCodeAt(e);
          if (128 > f) d.i.push(f);
          else if (2048 > f) d.i.push((f >> 6) | 192), d.i.push((f & 63) | 128);
          else if (65536 > f)
            if (55296 <= f && 56319 >= f && e + 1 < c.length) {
              var h = c.charCodeAt(e + 1);
              56320 <= h &&
                57343 >= h &&
                ((f = 1024 * (f - 55296) + h - 56320 + 65536),
                d.i.push((f >> 18) | 240),
                d.i.push(((f >> 12) & 63) | 128),
                d.i.push(((f >> 6) & 63) | 128),
                d.i.push((f & 63) | 128),
                e++);
            } else
              d.i.push((f >> 12) | 224),
                d.i.push(((f >> 6) & 63) | 128),
                d.i.push((f & 63) | 128);
        }
        Q2(a, b);
      }
    },
    T2 = function (a, b, c, d) {
      null != c && ((b = P2(a, b)), d(c, a), Q2(a, b));
    },
    U2 = function (a, b, c, d) {
      if (null != c)
        for (var e = 0; e < c.length; e++) {
          var f = P2(a, b);
          d(c[e], a);
          Q2(a, f);
        }
    },
    pGa = function (a, b) {
      var c = (b - a.i) / (a.l - a.i);
      if (0 >= c) return 0;
      if (1 <= c) return 1;
      for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
        f = g.Cn(a, c);
        var l = (g.Cn(a, c + 1e-6) - f) / 1e-6;
        if (1e-6 > Math.abs(f - b)) return c;
        if (1e-6 > Math.abs(l)) break;
        else f < b ? (d = c) : (e = c), (c -= (f - b) / l);
      }
      for (h = 0; 1e-6 < Math.abs(f - b) && 8 > h; h++)
        f < b ? ((d = c), (c = (c + e) / 2)) : ((e = c), (c = (c + d) / 2)),
          (f = g.Cn(a, c));
      return c;
    },
    V2 = function (a, b, c) {
      a.i || (a.i = {});
      if (!a.i[c]) {
        var d = g.Ff(a, c);
        d && (a.i[c] = new b(d));
      }
      return a.i[c];
    },
    qGa = function (a, b, c) {
      a.i || (a.i = {});
      c = c || [];
      for (var d = [], e = 0; e < c.length; e++) d[e] = g.Kf(c[e]);
      a.i[b] = c;
      g.Hf(a, b, d);
    },
    W2 = function (a, b, c, d) {
      (c = g.Df(a, c)) &&
        c !== b &&
        void 0 !== d &&
        (a.i && c in a.i && (a.i[c] = void 0), g.Hf(a, c, void 0));
      g.Hf(a, b, d);
    },
    X2 = function () {
      return {
        D: "svg",
        U: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%",
        },
        S: [
          {
            D: "path",
            ub: !0,
            K: "ytp-svg-fill",
            U: {
              d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z",
            },
          },
        ],
      };
    },
    rGa = function (a) {
      this.AC = a;
    },
    Y2 = function (a, b, c) {
      this.l = a;
      this.B = b;
      this.i = c || [];
      this.ko = new Map();
    },
    Z2 = function (a, b) {
      Y2.call(this, a, 3, b);
    },
    tGa = function () {
      this.I = new sGa();
      this.l = new Map();
      this.C = new Set();
      this.u = 0;
      this.B = 100;
      this.flushInterval = 3e4;
      this.i = new g.Km(this.flushInterval);
      this.i.ya("tick", this.LG, !1, this);
    },
    uGa = function (a, b) {
      return a.C.has(b) ? void 0 : a.l.get(b);
    },
    vGa = function (a) {
      for (var b = 0; b < a.length; b++) a[b].clear();
    },
    wGa = function () {
      if (!$2) {
        $2 = new tGa();
        var a = g.Qo("client_streamz_web_flush_count", -1);
        -1 !== a && ($2.B = a);
      }
      this.i = $2;
      this.i.uK(
        "/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",
        {
          XK: 3,
          WK: "client_name",
        }
      );
    },
    yGa = function (a) {
      g.Ef(this, a, xGa, null);
    },
    zGa = function (a) {
      g.Ef(this, a, null, null);
    },
    BGa = function (a, b) {
      var c = g.Jf(a, zGa, 1);
      0 < c.length && U2(b, 1, c, AGa);
    },
    AGa = function (a, b) {
      var c = g.Ff(a, 1);
      null != c && g.yf(b, 1, c);
      c = g.Ff(a, 2);
      null != c && g.xf(b, 2, c);
    },
    DGa = function (a) {
      g.Ef(this, a, CGa, null);
    },
    FGa = function (a) {
      g.Ef(this, a, null, EGa);
    },
    GGa = function (a) {
      g.Ef(this, a, null, null);
    },
    HGa = function (a) {
      g.Ef(this, a, null, null);
    },
    a3 = function (a) {
      g.Ef(this, a, IGa, null);
    },
    c3 = function (a) {
      g.Ef(this, a, null, b3);
    },
    e3 = function (a) {
      g.Ef(this, a, null, d3);
    },
    LGa = function (a, b) {
      var c = V2(a, GGa, 1);
      null != c && T2(b, 1, c, JGa);
      c = V2(a, HGa, 2);
      null != c && T2(b, 2, c, KGa);
    },
    JGa = function (a, b) {
      var c = g.Ff(a, 1);
      null != c && S2(b, 1, c);
      c = g.Ff(a, 2);
      null != c && S2(b, 2, c);
      c = g.Ff(a, 3);
      null != c && R2(b, 3, c);
    },
    KGa = function (a, b) {
      var c = g.Ff(a, 1);
      null != c && S2(b, 1, c);
      c = g.Ff(a, 2);
      null != c && S2(b, 2, c);
      c = g.Ff(a, 3);
      null != c && g.uf(b, 3, c);
      c = g.Ff(a, 4);
      null != c && R2(b, 4, c);
    },
    OGa = function (a, b) {
      var c = g.Jf(a, c3, 1);
      0 < c.length && U2(b, 1, c, MGa);
      c = V2(a, e3, 2);
      null != c && T2(b, 2, c, NGa);
    },
    MGa = function (a, b) {
      var c = g.Ff(a, 1);
      null != c && S2(b, 1, c);
      c = g.Ff(a, 2);
      null != c && g.uf(b, 2, c);
      c = g.Ff(a, 3);
      null != c && R2(b, 3, c);
    },
    NGa = function (a, b) {
      var c = g.Ff(a, 1);
      null != c && g.xf(b, 1, c);
      c = g.Ff(a, 2);
      null != c && g.yf(b, 2, c);
      c = V2(a, yGa, 3);
      null != c && T2(b, 3, c, BGa);
    },
    sGa = function () {},
    f3 = function (a) {
      g.I.call(this);
      this.callback = a;
      this.u = new g.Bn(0, 0, 0.4, 0, 0.2, 1, 1, 1);
      this.delay = new g.gn(this.next, window, this);
      this.startTime = this.duration = this.l = this.i = NaN;
      g.K(this, this.delay);
    },
    g3 = function (a) {
      g.W.call(this, {
        D: "div",
        K: "ytp-related-on-error-overlay",
      });
      var b = this;
      this.api = a;
      this.J = this.l = 0;
      this.I = new g.zN(this);
      this.B = [];
      this.i = [];
      this.C = 0;
      this.title = new g.W({
        D: "h2",
        K: "ytp-related-title",
        ba: "{{title}}",
      });
      this.previous = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-previous"],
        U: {
          "aria-label": "Show previous suggested videos",
        },
        S: [g.wL()],
      });
      this.Y = new f3(function (f) {
        b.suggestions.element.scrollLeft = -f;
      });
      this.tileWidth = this.u = 0;
      this.L = !0;
      this.next = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-next"],
        U: {
          "aria-label": "Show more suggested videos",
        },
        S: [g.xL()],
      });
      g.K(this, this.I);
      a = a.T();
      this.X = a.l;
      g.K(this, this.title);
      this.title.fa(this.element);
      this.suggestions = new g.W({
        D: "div",
        K: "ytp-suggestions",
      });
      g.K(this, this.suggestions);
      this.suggestions.fa(this.element);
      g.K(this, this.previous);
      this.previous.fa(this.element);
      this.previous.ya("click", this.mJ, this);
      g.K(this, this.Y);
      for (var c = 0; 16 > c; c++) {
        var d = new g.W({
          D: "a",
          K: "ytp-suggestion-link",
          U: {
            href: "{{link}}",
            target: a.C,
            "aria-label": "{{aria_label}}",
          },
          S: [
            {
              D: "div",
              K: "ytp-suggestion-image",
              S: [
                {
                  D: "div",
                  U: {
                    "data-is-live": "{{is_live}}",
                  },
                  K: "ytp-suggestion-duration",
                  ba: "{{duration}}",
                },
              ],
            },
            {
              D: "div",
              K: "ytp-suggestion-title",
              U: {
                title: "{{hover_title}}",
              },
              ba: "{{title}}",
            },
            {
              D: "div",
              K: "ytp-suggestion-author",
              ba: "{{views_or_author}}",
            },
          ],
        });
        g.K(this, d);
        d.fa(this.suggestions.element);
        var e = d.ha("ytp-suggestion-link");
        g.pg(e, "transitionDelay", c / 20 + "s");
        this.I.N(e, "click", g.Pa(this.nJ, c));
        this.B.push(d);
      }
      g.K(this, this.next);
      this.next.fa(this.element);
      this.next.ya("click", this.lJ, this);
      this.I.N(this.api, "videodatachange", this.Oa);
      this.resize(this.api.Ja().getPlayerSize());
      this.Oa();
      this.show();
    },
    h3 = function (a) {
      a.next.element.style.bottom = a.J + "px";
      a.previous.element.style.bottom = a.J + "px";
      var b = a.u,
        c = a.C - a.i.length * (a.tileWidth + a.l);
      g.N(a.element, "ytp-scroll-min", 0 <= b);
      g.N(a.element, "ytp-scroll-max", b <= c);
    },
    PGa = function (a) {
      for (var b = 0; b < a.i.length; b++) {
        var c = b,
          d = a.i[b].Na();
        c = a.B[c];
        var e = d.shortViewCount ? d.shortViewCount : d.author,
          f = d.ul();
        g.NC(a.api.T()) && (f = g.Id(f, g.EO("emb_rel_err")));
        c.element.style.display = "";
        var h = c.ha("ytp-suggestion-title");
        g.zn.test(d.title)
          ? (h.dir = "rtl")
          : g.kCa.test(d.title) && (h.dir = "ltr");
        h = c.ha("ytp-suggestion-author");
        g.zn.test(e) ? (h.dir = "rtl") : g.kCa.test(e) && (h.dir = "ltr");
        h = d.isLivePlayback
          ? "Live"
          : d.lengthSeconds
          ? g.YL(d.lengthSeconds)
          : "";
        c.update({
          views_or_author: e,
          duration: h,
          link: f,
          hover_title: d.title,
          title: d.title,
          aria_label: d.gq || null,
          is_live: d.isLivePlayback,
        });
        c = c.ha("ytp-suggestion-image");
        d = d.xe();
        c.style.backgroundImage = d ? "url(" + d + ")" : "";
      }
      for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
      h3(a);
    },
    i3 = function (a) {
      g.eO.call(this, a);
      var b = this,
        c = a.T();
      c = new g.W({
        D: "a",
        K: "ytp-small-redirect",
        U: {
          href: g.zD(c),
          target: c.C,
          "aria-label": "Visit YouTube to search for more videos",
        },
        S: [
          {
            D: "svg",
            U: {
              fill: "#fff",
              height: "100%",
              viewBox: "0 0 24 24",
              width: "100%",
            },
            S: [
              {
                D: "path",
                U: {
                  d: "M0 0h24v24H0V0z",
                  fill: "none",
                },
              },
              {
                D: "path",
                U: {
                  d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z",
                },
              },
            ],
          },
        ],
      });
      c.fa(this.element);
      g.K(this, c);
      this.i = new g3(a);
      this.i.fa(this.element);
      g.K(this, this.i);
      this.N(a, "videodatachange", function () {
        b.show();
      });
      this.resize(this.api.Ja().getPlayerSize());
    },
    QGa = function (a, b) {
      a.ha("ytp-error-content").style.paddingTop = "0px";
      var c = a.ha("ytp-error-content"),
        d = c.clientHeight;
      a.i.resize(b, b.height - d);
      c.style.paddingTop =
        (b.height - a.i.element.clientHeight) / 2 - d / 2 + "px";
    },
    RGa = function (a, b) {
      var c;
      b.reason &&
        (j3(b.reason) ? (c = g.VF(b.reason)) : (c = g.fO(g.U(b.reason))),
        a.Fc(c, "content"));
      var d;
      b.subreason &&
        (j3(b.subreason)
          ? (d = g.VF(b.subreason))
          : (d = g.fO(g.U(b.subreason))),
        a.Fc(d, "subreason"));
      if (b.proceedButton && b.proceedButton.buttonRenderer) {
        var e = b.proceedButton.buttonRenderer;
        c = a.ha("ytp-error-content-wrap-subreason");
        d = g.Ce("A");
        if (e.text && e.text.simpleText) {
          var f = e.text.simpleText;
          d.textContent = f;
          a: {
            for (
              var h = (c || document).getElementsByTagName("A"), l = 0;
              l < h.length;
              l++
            )
              if (h[l].textContent === f) {
                f = !0;
                break a;
              }
            f = !1;
          }
          f ||
            (e.navigationEndpoint &&
              e.navigationEndpoint.urlEndpoint &&
              ((f = e.navigationEndpoint.urlEndpoint.url) &&
                d.setAttribute("href", f),
              (e = e.navigationEndpoint.urlEndpoint.target) &&
                d.setAttribute("target", e)),
            c.appendChild(d));
        }
      }
    },
    j3 = function (a) {
      if (a.runs)
        for (var b = 0; b < a.runs.length; b++)
          if (a.runs[b].navigationEndpoint) return !0;
      return !1;
    },
    k3 = function (a, b) {
      g.W.call(this, {
        D: "a",
        ka: ["ytp-impression-link"],
        U: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Watch on YouTube",
        },
        S: [
          {
            D: "div",
            K: "ytp-impression-link-content",
            U: {
              "aria-hidden": "true",
            },
            S: [
              {
                D: "div",
                K: "ytp-impression-link-text",
                ba: "Watch on",
              },
              {
                D: "div",
                K: "ytp-impression-link-logo",
                S: [X2()],
              },
            ],
          },
        ],
      });
      this.api = a;
      this.l = b;
      this.Aa("target", a.T().C);
      this.api.Hb(this.element, this, 96714);
      this.N(this.api, "presentingplayerstatechange", this.yg);
      this.N(this.api, "videoplayerreset", this.i);
      this.N(this.element, "click", this.onClick);
      this.i();
    },
    l3 = function (a) {
      g.W.call(this, {
        D: "div",
        K: "ytp-muted-autoplay-endscreen-overlay",
        S: [
          {
            D: "div",
            K: "ytp-muted-autoplay-end-panel",
            S: [
              {
                D: "div",
                K: "ytp-muted-autoplay-end-text",
                ba: "{{text}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.u = this.ha("ytp-muted-autoplay-end-panel");
      this.i = new g.YN(this.api);
      g.K(this, this.i);
      this.i.fa(this.u, 0);
      this.api.Hb(this.element, this, 52428);
      this.N(this.api, "presentingplayerstatechange", this.l);
      this.ya("click", this.onClick);
      this.hide();
    },
    m3 = function (a) {
      g.W.call(this, {
        D: "div",
        K: "ytp-muted-autoplay-overlay",
        S: [
          {
            D: "div",
            K: "ytp-muted-autoplay-bottom-buttons",
            S: [
              {
                D: "button",
                ka: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                S: [
                  {
                    D: "div",
                    ka: ["ytp-muted-autoplay-equalizer-icon"],
                    S: [
                      {
                        D: "svg",
                        U: {
                          height: "100%",
                          version: "1.1",
                          viewBox: "-4 -4 24 24",
                          width: "100%",
                        },
                        S: [
                          {
                            D: "g",
                            U: {
                              fill: "#fff",
                            },
                            S: [
                              {
                                D: "rect",
                                K: "ytp-equalizer-bar-left",
                                U: {
                                  height: "9",
                                  width: "4",
                                  x: "1",
                                  y: "7",
                                },
                              },
                              {
                                D: "rect",
                                K: "ytp-equalizer-bar-middle",
                                U: {
                                  height: "14",
                                  width: "4",
                                  x: "6",
                                  y: "2",
                                },
                              },
                              {
                                D: "rect",
                                K: "ytp-equalizer-bar-right",
                                U: {
                                  height: "12",
                                  width: "4",
                                  x: "11",
                                  y: "4",
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      this.api = a;
      this.bottomButtons = this.ha("ytp-muted-autoplay-bottom-buttons");
      this.ha("ytp-muted-autoplay-equalizer");
      this.u = new g.L(this.l, 4e3, this);
      a.Hb(this.element, this, 39306);
      this.N(a, "presentingplayerstatechange", this.i);
      this.N(a, "onMutedAutoplayStarts", this.i);
      this.ya("click", this.onClick);
      this.hide();
    },
    n3 = function (a, b) {
      g.W.call(this, {
        D: "div",
        K: "ytp-pause-overlay",
      });
      var c = this;
      this.api = a;
      this.L = b;
      this.l = new g.zN(this);
      this.I = new g.eM(this, 1e3, !1, 100);
      this.B = [];
      this.i = [];
      this.C = 0;
      this.J = !1;
      this.ea = 0;
      this.title = new g.W({
        D: "h2",
        K: "ytp-related-title",
        ba: "{{title}}",
      });
      this.previous = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-previous"],
        U: {
          "aria-label": "Show previous suggested videos",
        },
        S: [g.wL()],
      });
      this.Y = new f3(function (m) {
        c.suggestions.element.scrollLeft = -m;
      });
      this.ca = this.tileWidth = this.u = 0;
      this.next = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-next"],
        U: {
          "aria-label": "Show more suggested videos",
        },
        S: [g.xL()],
      });
      this.expandButton = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-expand"],
        ba: "More videos",
      });
      g.K(this, this.l);
      g.K(this, this.I);
      var d = a.T();
      "0" === d.controlsType &&
        g.M(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      this.X = d.l;
      g.K(this, this.title);
      this.title.fa(this.element);
      this.suggestions = new g.W({
        D: "div",
        K: "ytp-suggestions",
      });
      g.K(this, this.suggestions);
      this.suggestions.fa(this.element);
      g.K(this, this.previous);
      this.previous.fa(this.element);
      this.previous.ya("click", this.pJ, this);
      var e =
        g.FA || g.ug
          ? {
              style: "will-change: opacity",
            }
          : void 0;
      g.K(this, this.Y);
      for (var f = 0; 16 > f; f++) {
        var h = new g.W({
          D: "a",
          K: "ytp-suggestion-link",
          U: {
            href: "{{link}}",
            target: d.C,
            "aria-label": "{{aria_label}}",
          },
          S: [
            {
              D: "div",
              K: "ytp-suggestion-image",
            },
            {
              D: "div",
              K: "ytp-suggestion-overlay",
              U: e,
              S: [
                {
                  D: "div",
                  K: "ytp-suggestion-title",
                  ba: "{{title}}",
                },
                {
                  D: "div",
                  K: "ytp-suggestion-author",
                  ba: "{{author_and_views}}",
                },
                {
                  D: "div",
                  U: {
                    "data-is-live": "{{is_live}}",
                  },
                  K: "ytp-suggestion-duration",
                  ba: "{{duration}}",
                },
              ],
            },
          ],
        });
        g.K(this, h);
        h.fa(this.suggestions.element);
        var l = h.ha("ytp-suggestion-link");
        g.pg(l, "transitionDelay", f / 20 + "s");
        this.l.N(l, "click", g.Pa(this.qJ, f));
        this.B.push(h);
      }
      g.K(this, this.next);
      this.next.fa(this.element);
      this.next.ya("click", this.oJ, this);
      d = new g.W({
        D: "button",
        ka: ["ytp-button", "ytp-collapse"],
        U: {
          "aria-label": "Hide more videos",
        },
        S: [
          {
            D: "svg",
            U: {
              height: "100%",
              viewBox: "0 0 16 16",
              width: "100%",
            },
            S: [
              {
                D: "path",
                U: {
                  d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                  fill: "#fff",
                },
              },
            ],
          },
        ],
      });
      g.K(this, d);
      d.fa(this.element);
      d.ya("click", this.gN, this);
      g.K(this, this.expandButton);
      this.expandButton.fa(this.element);
      this.expandButton.ya("click", this.hN, this);
      this.l.N(this.api, "appresize", this.Sa);
      this.l.N(this.api, "fullscreentoggled", this.tk);
      this.l.N(this.api, "presentingplayerstatechange", this.Xb);
      this.l.N(this.api, "videodatachange", this.Oa);
      this.Sa(this.api.Ja().getPlayerSize());
      this.Oa();
    },
    o3 = function (a) {
      var b = a.L.ye() ? 32 : 16;
      b = a.ca / 2 + b;
      a.next.element.style.bottom = b + "px";
      a.previous.element.style.bottom = b + "px";
      b = a.u;
      var c = a.C - a.i.length * (a.tileWidth + 8);
      g.N(a.element, "ytp-scroll-min", 0 <= b);
      g.N(a.element, "ytp-scroll-max", b <= c);
    },
    SGa = function (a) {
      for (var b = 0; b < a.i.length; b++) {
        var c = a.i[b].Na(),
          d = a.B[b],
          e = c.shortViewCount
            ? c.author + " \u2022 " + c.shortViewCount
            : c.author;
        d.element.style.display = "";
        g.jCa.test(c.title) && (d.ha("ytp-suggestion-title").dir = "rtl");
        g.jCa.test(e) && (d.ha("ytp-suggestion-author").dir = "rtl");
        var f = c.isLivePlayback
          ? "Live"
          : c.lengthSeconds
          ? g.YL(c.lengthSeconds)
          : "";
        var h = c.ul();
        g.NC(a.api.T()) && (h = g.Id(h, g.EO("emb_rel_pause")));
        d.update({
          author_and_views: e,
          duration: f,
          link: h,
          title: c.title,
          aria_label: c.gq || null,
          is_live: c.isLivePlayback,
        });
        d = d.ha("ytp-suggestion-image");
        c = c.xe();
        d.style.backgroundImage = c ? "url(" + c + ")" : "";
      }
      for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
      o3(a);
    },
    p3 = function (a) {
      var b = a.T();
      g.W.call(this, {
        D: "a",
        ka: ["ytp-watermark", "yt-uix-sessionlink"],
        U: {
          target: b.C,
          href: "{{url}}",
          "aria-label": g.VJ("Watch on $WEBSITE", {
            WEBSITE: g.kD(b),
          }),
          "data-sessionlink": "feature=player-watermark",
        },
        S: [X2()],
      });
      this.api = a;
      this.i = null;
      this.l = !1;
      this.state = a.Va();
      a.Hb(this.element, this, 76758);
      this.N(a, "videodatachange", this.AA);
      this.N(a, "videodatachange", this.Oa);
      this.N(a, "presentingplayerstatechange", this.rJ);
      this.N(a, "appresize", this.Sa);
      b = this.state;
      this.state !== b && (this.state = b);
      this.AA();
      this.Oa();
      this.Sa(a.Ja().getPlayerSize());
    },
    q3 = function (a) {
      g.HN.call(this, a);
      this.G = a;
      this.l = new g.zN(this);
      g.K(this, this.l);
      this.load();
    };
  g.k = Y2.prototype;
  g.k.nQ = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.ko.set(this.zD(c), [new rGa(a)]);
  };
  g.k.pD = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    b = this.zD(b);
    return this.ko.has(b) ? this.ko.get(b) : void 0;
  };
  g.k.eL = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return (b = this.pD(b)) && b.length ? b[0] : void 0;
  };
  g.k.clear = function () {
    this.ko.clear();
  };
  g.k.zD = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return b ? b.join(",") : "key";
  };
  g.u(Z2, Y2);
  Z2.prototype.u = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    d = 0;
    var e = this.eL(c);
    e && (d = e.AC);
    this.nQ(d + a, c);
  };
  g.k = tGa.prototype;
  g.k.LG = function () {
    var a = this.l.values();
    a = [].concat(g.la(a)).filter(function (b) {
      return b.ko.size;
    });
    a.length && this.I.flush(a);
    vGa(a);
    this.u = 0;
    this.i.enabled && this.i.stop();
  };
  g.k.uK = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.l.has(a) || this.l.set(a, new Z2(a, c));
  };
  g.k.jJ = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.kJ.apply(this, [a, 1].concat(g.la(c)));
  };
  g.k.kJ = function (a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
    (e = uGa(this, a)) &&
      e instanceof Z2 &&
      (e.u(b, d),
      this.i.enabled || this.i.start(),
      this.u++,
      this.u >= this.B && this.LG());
  };
  g.k.rG = function (a, b, c) {
    for (var d = 2; d < arguments.length; ++d);
    uGa(this, a);
  };
  g.Ra(yGa, g.zf);
  g.Ra(zGa, g.zf);
  var xGa = [1];
  g.Ra(DGa, g.zf);
  g.Ra(FGa, g.zf);
  g.Ra(GGa, g.zf);
  g.Ra(HGa, g.zf);
  g.Ra(a3, g.zf);
  g.Ra(c3, g.zf);
  g.Ra(e3, g.zf);
  var CGa = [3, 6, 4],
    EGa = [[1, 2]],
    IGa = [1],
    b3 = [[1, 2, 3]],
    d3 = [[1, 2, 3]];
  sGa.prototype.flush = function (a) {
    a = void 0 === a ? [] : a;
    if (g.Po("enable_client_streamz_web")) {
      a = g.q(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = new DGa();
        c = g.Hf(c, 1, b.l);
        for (var d = b, e = [], f = 0; f < d.i.length; f++) e.push(d.i[f].WK);
        c = g.Hf(c, 3, e || []);
        d = [];
        e = [];
        f = g.q(b.ko.keys());
        for (var h = f.next(); !h.done; h = f.next())
          e.push(h.value.split(","));
        for (f = 0; f < e.length; f++) {
          h = e[f];
          var l = b.B;
          for (var m = b.pD(h) || [], n = [], p = 0; p < m.length; p++) {
            var r = m[p];
            r = r && r.AC;
            var t = new e3();
            switch (l) {
              case 3:
                W2(t, 1, d3[0], Number(r));
                break;
              case 2:
                W2(t, 2, d3[0], Number(r));
            }
            n.push(t);
          }
          l = n;
          for (m = 0; m < l.length; m++) {
            p = l[m];
            n = new a3();
            n.i || (n.i = {});
            r = p ? g.Kf(p) : p;
            n.i[2] = p;
            n = g.Hf(n, 2, r);
            p = h;
            r = [];
            t = b;
            for (var w = [], x = 0; x < t.i.length; x++) w.push(t.i[x].XK);
            t = w;
            for (w = 0; w < t.length; w++) {
              x = t[w];
              var y = p[w],
                F = new c3();
              switch (x) {
                case 3:
                  W2(F, 1, b3[0], String(y));
                  break;
                case 2:
                  W2(F, 2, b3[0], Number(y));
                  break;
                case 1:
                  W2(F, 3, b3[0], "true" == y);
              }
              r.push(F);
            }
            qGa(n, 1, r);
            d.push(n);
          }
        }
        qGa(c, 4, d);
        d = b = new g.sf();
        e = g.Ff(c, 1);
        null != e && S2(d, 1, e);
        e = g.Ff(c, 5);
        null != e && oGa(d, 5, e);
        e = V2(c, FGa, 2);
        null != e && T2(d, 2, e, LGa);
        e = g.Ff(c, 3);
        if (0 < e.length && null != e)
          for (f = 0; f < e.length; f++) S2(d, 3, e[f]);
        e = g.Ff(c, 6);
        if (0 < e.length && null != e)
          for (f = 0; f < e.length; f++) oGa(d, 6, e[f]);
        e = g.Jf(c, a3, 4);
        0 < e.length && U2(d, 4, e, OGa);
        b = g.tf(b);
        b = {
          serializedIncrementBatch: g.of(b),
        };
        g.Tr("streamzIncremented", b);
      }
    }
  };
  var $2;
  g.u(f3, g.I);
  f3.prototype.start = function (a, b, c) {
    this.i = a;
    this.l = b;
    this.duration = c;
    this.startTime = (0, g.P)();
    this.next();
  };
  f3.prototype.next = function () {
    var a = (0, g.P)() - this.startTime;
    var b = this.u;
    a = pGa(b, a / this.duration);
    if (0 == a) b = b.C;
    else if (1 == a) b = b.L;
    else {
      var c = g.ae(b.C, b.I, a),
        d = g.ae(b.I, b.J, a);
      b = g.ae(b.J, b.L, a);
      c = g.ae(c, d, a);
      d = g.ae(d, b, a);
      b = g.ae(c, d, a);
    }
    b = g.Zd(b, 0, 1);
    this.callback((this.l - this.i) * b + this.i);
    1 > b && this.delay.start();
  };
  g.u(g3, g.W);
  g.k = g3.prototype;
  g.k.hide = function () {
    this.L = !0;
    g.W.prototype.hide.call(this);
  };
  g.k.show = function () {
    this.L = !1;
    g.W.prototype.show.call(this);
  };
  g.k.isHidden = function () {
    return this.L;
  };
  g.k.lJ = function () {
    this.scrollTo(this.u - this.C);
  };
  g.k.mJ = function () {
    this.scrollTo(this.u + this.C);
  };
  g.k.nJ = function (a, b) {
    var c = this.i[a],
      d = c.Bd;
    g.$N(b, this.api, this.X, d || void 0) &&
      this.api.Fi(c.Na().videoId, d, c.getPlaylistId());
  };
  g.k.resize = function (a, b) {
    var c = this.api.T(),
      d = 16 / 9,
      e = 650 <= a.width,
      f = 480 > a.width || 290 > a.height,
      h = Math.min(this.i.length, this.B.length);
    if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Xa) this.hide();
    else {
      var l;
      if (e) {
        var m = (l = 28);
        this.l = 16;
      } else this.l = m = l = 8;
      if (f) {
        var n = 6;
        e = 14;
        var p = 12;
        f = 24;
        c = 12;
      } else (n = 8), (e = 18), (p = 16), (f = 36), (c = 16);
      l = a.width - (48 + l + m);
      m = Math.ceil(l / 150);
      m = Math.min(3, m);
      m = l / m - this.l;
      var r = Math.floor(m / d);
      b &&
        r + 100 > b &&
        50 < m &&
        ((r = Math.max(b, 50 / d)),
        (m = Math.ceil(l / (d * (r - 100) + this.l))),
        (m = l / m - this.l),
        (r = Math.floor(m / d)));
      50 > m || g.uN(this.api) ? this.hide() : this.show();
      for (d = 0; d < h; d++) {
        var t = this.B[d],
          w = t.ha("ytp-suggestion-image");
        w.style.width = m + "px";
        w.style.height = r + "px";
        t.ha("ytp-suggestion-title").style.width = m + "px";
        t.ha("ytp-suggestion-author").style.width = m + "px";
        t = t.ha("ytp-suggestion-duration");
        t.style.display = t && 100 > m ? "none" : "";
      }
      h = e + n + p + 4;
      this.J = h + c + (r - f) / 2;
      this.suggestions.element.style.height = r + h + "px";
      this.tileWidth = m;
      this.C = l;
      this.u = 0;
      this.suggestions.element.scrollLeft = -0;
      h3(this);
    }
  };
  g.k.Oa = function () {
    var a = this,
      b = this.api.getVideoData(),
      c = this.api.T();
    this.X = b.C ? !1 : c.l;
    if (b.suggestions) {
      var d = g.He(b.suggestions, function (e) {
        return e && !e.list;
      });
      this.i = g.Jc(d, function (e) {
        e = g.VP(c, e);
        g.K(a, e);
        return e;
      });
    } else this.i.length = 0;
    PGa(this);
    b.C
      ? this.title.update({
          title: g.VJ("More videos from $DNI_RELATED_CHANNEL", {
            DNI_RELATED_CHANNEL: b.author,
          }),
        })
      : this.title.update({
          title: "More videos on YouTube",
        });
  };
  g.k.scrollTo = function (a) {
    a = g.Zd(a, this.C - this.i.length * (this.tileWidth + this.l), 0);
    this.Y.start(this.u, a, 1e3);
    this.u = a;
    h3(this);
  };
  g.u(i3, g.eO);
  i3.prototype.show = function () {
    g.eO.prototype.show.call(this);
    QGa(this, this.api.Ja().getPlayerSize());
  };
  i3.prototype.resize = function (a) {
    g.eO.prototype.resize.call(this, a);
    QGa(this, a);
    g.N(this.element, "related-on-error-overlay-visible", !this.i.isHidden());
  };
  i3.prototype.l = function (a) {
    g.eO.prototype.l.call(this, a);
    var b = this.api.getVideoData();
    if (
      g.S(this.api.T().experiments, "embed_parse_error_renderer_killswitch") ||
      (!b.DH && !b.playerErrorMessageRenderer)
    ) {
      var c;
      a.Wi &&
        (b.em
          ? j3(b.em)
            ? (c = g.VF(b.em))
            : (c = g.fO(g.U(b.em)))
          : (c = g.fO(a.Wi)),
        this.Fc(c, "subreason"));
    } else
      (a = b.DH)
        ? RGa(this, a)
        : b.playerErrorMessageRenderer &&
          RGa(this, b.playerErrorMessageRenderer);
  };
  g.u(k3, g.W);
  k3.prototype.yg = function () {
    this.api.Va().isCued() || (this.hide(), this.api.Qa(this.element, !1));
  };
  k3.prototype.i = function () {
    var a = this.api.getVideoData(),
      b = this.api.T(),
      c = this.api.getVideoData().C,
      d = b.kb;
    b = !b.Xa;
    var e = this.l.Me();
    d || e || c || b || !a.videoId
      ? (this.hide(), this.api.Qa(this.element, !1))
      : ((a = g.Id(this.api.getVideoUrl(), g.EO("emb_imp_woyt"))),
        this.Aa("url", a),
        this.show());
  };
  k3.prototype.onClick = function (a) {
    var b = g.Id(this.api.getVideoUrl(), g.EO("emb_imp_woyt"));
    g.aO(b, this.api, a);
    this.api.vb(this.element);
  };
  k3.prototype.show = function () {
    this.api.Va().isCued() &&
      (g.W.prototype.show.call(this),
      this.api.fr(this.element) && this.api.Qa(this.element, !0));
  };
  g.u(l3, g.W);
  l3.prototype.l = function () {
    var a = this.api.Va(),
      b = this.api.getVideoData();
    g.S(this.api.T().experiments, "embeds_enable_muted_autoplay") &&
      b.mutedAutoplay &&
      (g.V(a, 2) && !this.ab
        ? (this.show(),
          this.i.show(),
          (a = this.api.getVideoData()),
          this.Aa("text", a.LB),
          g.N(this.element, "ytp-muted-autoplay-show-end-panel", !0),
          this.api.Qa(this.element, this.ab),
          this.api.xa("onMutedAutoplayEnds"))
        : this.hide());
  };
  l3.prototype.onClick = function () {
    var a = this.api.getVideoData(),
      b = this.api.getCurrentTime();
    a.mutedAutoplay = !1;
    a.endSeconds = NaN;
    g.XH(a);
    this.api.loadVideoById(a.videoId, b);
    this.api.vb(this.element);
    this.hide();
  };
  g.u(m3, g.W);
  m3.prototype.i = function () {
    var a = this.api.Va(),
      b = this.api.getVideoData();
    g.S(this.api.T().experiments, "embeds_enable_muted_autoplay") &&
    b.mutedAutoplay &&
    !g.V(a, 2)
      ? this.ab ||
        (g.W.prototype.show.call(this),
        this.u.start(),
        this.api.Qa(this.element, this.ab))
      : this.hide();
  };
  m3.prototype.l = function () {
    g.N(this.element, "ytp-muted-autoplay-hide-watermark", !0);
  };
  m3.prototype.onClick = function () {
    var a = this.api.getVideoData(),
      b = this.api.getCurrentTime();
    a.mutedAutoplay = !1;
    a.endSeconds = NaN;
    g.XH(a);
    this.api.loadVideoById(a.videoId, b);
    this.api.vb(this.element);
  };
  g.u(n3, g.W);
  g.k = n3.prototype;
  g.k.hide = function () {
    g.rn(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.W.prototype.hide.call(this);
  };
  g.k.gN = function () {
    this.J = !0;
    g.rn(this.api.getRootNode(), "ytp-expand-pause-overlay");
    this.expandButton.focus();
  };
  g.k.hN = function () {
    this.J = !1;
    g.M(this.api.getRootNode(), "ytp-expand-pause-overlay");
  };
  g.k.oJ = function () {
    this.scrollTo(this.u - this.C);
  };
  g.k.pJ = function () {
    this.scrollTo(this.u + this.C);
  };
  g.k.qJ = function (a, b) {
    if (1e3 > (0, g.P)() - this.ea) g.gp(b), document.activeElement.blur();
    else {
      var c = this.i[a],
        d = c.Bd;
      g.$N(b, this.api, this.X, d || void 0) &&
        this.api.Fi(c.Na().videoId, d, c.getPlaylistId());
    }
  };
  g.k.tk = function () {
    this.Sa(this.api.Ja().getPlayerSize());
  };
  g.k.Xb = function (a) {
    if (!(g.V(a.state, 1) || g.V(a.state, 16) || g.V(a.state, 32))) {
      var b =
        !g.S(
          this.api.T().experiments,
          "embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch"
        ) && g.V(a.state, 2048);
      !g.V(a.state, 4) || g.V(a.state, 2) || b
        ? this.I.hide()
        : this.i.length &&
          (this.J ||
            (g.M(this.api.getRootNode(), "ytp-expand-pause-overlay"), o3(this)),
          this.I.show(),
          (this.ea = (0, g.P)()));
    }
  };
  g.k.Sa = function (a) {
    var b = 16 / 9,
      c = this.L.ye();
    a = a.width - (c ? 112 : 58);
    c = Math.ceil(a / (c ? 320 : 192));
    c = (a - 8 * c) / c;
    b = Math.floor(c / b);
    for (var d = 0; d < this.B.length; d++) {
      var e = this.B[d].ha("ytp-suggestion-image");
      e.style.width = c + "px";
      e.style.height = b + "px";
    }
    this.suggestions.element.style.height = b + "px";
    this.tileWidth = c;
    this.ca = b;
    this.C = a;
    this.u = 0;
    this.suggestions.element.scrollLeft = -0;
    o3(this);
  };
  g.k.Oa = function () {
    var a = this,
      b = this.api.T(),
      c = this.api.getVideoData();
    this.X = c.C ? !1 : b.l;
    if (c.suggestions) {
      var d = g.He(c.suggestions, function (e) {
        return e && !e.list;
      });
      this.i = g.Jc(d, function (e) {
        e = g.VP(b, e);
        g.K(a, e);
        return e;
      });
    } else this.i.length = 0;
    SGa(this);
    c.C
      ? this.title.update({
          title: g.VJ("More videos from $DNI_RELATED_CHANNEL", {
            DNI_RELATED_CHANNEL: c.author,
          }),
        })
      : this.title.update({
          title: "More videos",
        });
  };
  g.k.scrollTo = function (a) {
    a = g.Zd(a, this.C - this.i.length * (this.tileWidth + 8), 0);
    this.Y.start(this.u, a, 1e3);
    this.u = a;
    o3(this);
  };
  g.u(p3, g.W);
  g.k = p3.prototype;
  g.k.AA = function () {
    var a = this.api.getVideoData(),
      b = this.api.getVideoData(1).C,
      c = this.api.T();
    a =
      (a.mutedAutoplay || (c.kb && !g.V(this.state, 2))) &&
      !(b && c.pfpChazalUi);
    g.rL(this, a);
    this.api.Qa(this.element, a);
  };
  g.k.rJ = function (a) {
    a = a.state;
    this.state !== a && (this.state = a);
    this.AA();
  };
  g.k.Oa = function () {
    if (this.api.getVideoData().videoId) {
      var a = this.api.getVideoUrl(!0, !1, !1, !0);
      this.Aa("url", a);
      this.i || (this.i = this.ya("click", this.onClick));
    } else this.i && (this.Aa("url", null), this.Gb(this.i), (this.i = null));
  };
  g.k.onClick = function (a) {
    var b = this.api.getVideoUrl(!g.ZL(a), !1, !0, !0);
    g.aO(b, this.api, a);
    this.api.vb(this.element);
  };
  g.k.Sa = function (a) {
    if (((a = 480 > a.width) && !this.l) || (!a && this.l)) {
      var b = new g.W(X2()),
        c = this.ha("ytp-watermark");
      g.N(c, "ytp-watermark-small", a);
      g.Ee(c);
      b.fa(c);
      this.l = a;
    }
  };
  g.u(q3, g.HN);
  g.k = q3.prototype;
  g.k.xi = function () {
    return !1;
  };
  g.k.create = function () {
    var a = this.G.T(),
      b = g.nN(this.G);
    a.Xa &&
      ((this.C = new n3(this.G, b)),
      g.K(this, this.C),
      g.xN(this.G, this.C.element, 4));
    g.S(a.experiments, "embeds_enable_muted_autoplay") &&
      ((this.i = new m3(this.G)),
      g.K(this, this.i),
      g.xN(this.G, this.i.element, 4),
      (this.B = new l3(this.G)),
      g.K(this, this.B),
      g.xN(this.G, this.B.element, 4));
    if (a.kb || this.i)
      (this.watermark = new p3(this.G)),
        g.K(this, this.watermark),
        g.xN(this.G, this.watermark.element, 7);
    g.S(a.experiments, "embeds_impression_link") &&
      ((this.u = new k3(this.G, b)),
      g.K(this, this.u),
      g.xN(this.G, this.u.element, 7));
    this.l.N(this.G, "appresize", this.Sa);
    this.l.N(this.G, "presentingplayerstatechange", this.yg);
    this.l.N(this.G, "videodatachange", this.ZQ);
    this.l.N(this.G, "onMutedAutoplayStarts", this.YN);
    this.tb(this.G.Va());
    this.player.gd("embed");
    g.S(a.experiments, "enable_cookie_reissue_iframe") &&
      a.Ef &&
      !g.Sq("__Secure-3PAPISID") &&
      ((a = a.deviceParams.c),
      (a = void 0 === a ? "WEB" : a),
      new wGa().i.jJ(
        "/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",
        a
      ),
      (a = g.Ce("IFRAME")),
      (a.src = "/signin?go=true"),
      (a.style.display = "none"),
      document.body.appendChild(a));
  };
  g.k.Sa = function () {
    var a = this.G.Ja().getPlayerSize();
    this.Qd && this.Qd.resize(a);
  };
  g.k.yg = function (a) {
    this.tb(a.state);
  };
  g.k.tb = function (a) {
    g.V(a, 128)
      ? (this.Qd ||
          ((this.Qd = new i3(this.G)),
          g.K(this, this.Qd),
          g.xN(this.G, this.Qd.element, 4)),
        this.Qd.l(a.getData()),
        this.Qd.show(),
        g.M(this.G.getRootNode(), "ytp-embed-error"))
      : this.Qd &&
        (this.Qd.dispose(),
        (this.Qd = null),
        g.rn(this.G.getRootNode(), "ytp-embed-error"));
  };
  g.k.YN = function () {
    this.G.getVideoData().mutedAutoplay &&
      this.i &&
      this.watermark &&
      this.watermark.fa(this.i.bottomButtons, 0);
  };
  g.k.ZQ = function () {
    var a = this.G.getVideoData();
    this.watermark &&
      this.i &&
      !a.mutedAutoplay &&
      g.Je(this.i.element, this.watermark.element) &&
      g.xN(this.G, this.watermark.element, 7);
  };
  g.NN.embed = q3;
})(_yt_player);
