module.exports = (function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 63))
  );
})([
  function(t, e, n) {
    var r = n(90),
      i = n(91);
    t.exports = function(t, e, n) {
      var o = (e && n) || 0;
      'string' == typeof t &&
        ((e = 'binary' === t ? new Array(16) : null), (t = null));
      var a = (t = t || {}).random || (t.rng || r)();
      if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), e))
        for (var s = 0; s < 16; ++s) e[o + s] = a[s];
      return e || i(a);
    };
  },
  function(t, e, n) {
    t.exports = { default: n(65), __esModule: !0 };
  },
  function(t, e) {
    var n = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = n);
  },
  function(t, e) {
    var n = (t.exports = { version: '2.5.7' });
    'number' == typeof __e && (__e = n);
  },
  function(t, e, n) {
    t.exports = { default: n(64), __esModule: !0 };
  },
  function(t, e, n) {
    var r = n(32)('wks'),
      i = n(25),
      o = n(2).Symbol,
      a = 'function' == typeof o;
    (t.exports = function(t) {
      return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
    }).store = r;
  },
  function(t, e, n) {
    var r = n(11);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(2),
      i = n(3),
      o = n(21),
      a = n(10),
      s = n(13),
      u = function(t, e, n) {
        var c,
          f,
          l,
          d = t & u.F,
          p = t & u.G,
          v = t & u.S,
          h = t & u.P,
          y = t & u.B,
          w = t & u.W,
          m = p ? i : i[e] || (i[e] = {}),
          g = m.prototype,
          b = p ? r : v ? r[e] : (r[e] || {}).prototype;
        for (c in (p && (n = e), n))
          ((f = !d && b && void 0 !== b[c]) && s(m, c)) ||
            ((l = f ? b[c] : n[c]),
            (m[c] =
              p && 'function' != typeof b[c]
                ? n[c]
                : y && f
                ? o(l, r)
                : w && b[c] == l
                ? (function(t) {
                    var e = function(e, n, r) {
                      if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();
                          case 1:
                            return new t(e);
                          case 2:
                            return new t(e, n);
                        }
                        return new t(e, n, r);
                      }
                      return t.apply(this, arguments);
                    };
                    return (e.prototype = t.prototype), e;
                  })(l)
                : h && 'function' == typeof l
                ? o(Function.call, l)
                : l),
            h &&
              (((m.virtual || (m.virtual = {}))[c] = l),
              t & u.R && g && !g[c] && a(g, c, l)));
      };
    (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u);
  },
  function(t, e, n) {
    var r = n(6),
      i = n(40),
      o = n(22),
      a = Object.defineProperty;
    e.f = n(9)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((r(t), (e = o(e, !0)), r(n), i))
            try {
              return a(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function(t, e, n) {
    t.exports = !n(12)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  function(t, e, n) {
    var r = n(8),
      i = n(23);
    t.exports = n(9)
      ? function(t, e, n) {
          return r.f(t, e, i(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e, n) {
    var r = n(42),
      i = n(29);
    t.exports = function(t) {
      return r(i(t));
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e) {
    t.exports = !0;
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var r,
      i = n(1),
      o = (r = i) && r.__esModule ? r : { default: r };
    e.default =
      o.default ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      };
  },
  function(t, e, n) {
    t.exports = { default: n(115), __esModule: !0 };
  },
  function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function(t, e, n) {
    var r = n(41),
      i = n(33);
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++n + r).toString(36)
      );
    };
  },
  function(t, e) {
    e.f = {}.propertyIsEnumerable;
  },
  function(t, e, n) {
    var r = n(8).f,
      i = n(13),
      o = n(5)('toStringTag');
    t.exports = function(t, e, n) {
      t &&
        !i((t = n ? t : t.prototype), o) &&
        r(t, o, { configurable: !0, value: e });
    };
  },
  function(t, e, n) {
    var r = n(11),
      i = n(2).document,
      o = r(i) && r(i.createElement);
    t.exports = function(t) {
      return o ? i.createElement(t) : {};
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e, n) {
    var r = n(32)('keys'),
      i = n(25);
    t.exports = function(t) {
      return r[t] || (r[t] = i(t));
    };
  },
  function(t, e, n) {
    var r = n(3),
      i = n(2),
      o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
    (t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: r.version,
      mode: n(17) ? 'pure' : 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
    });
  },
  function(t, e) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, n) {
    e.f = n(5);
  },
  function(t, e, n) {
    var r = n(2),
      i = n(3),
      o = n(17),
      a = n(35),
      s = n(8).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      '_' == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(15);
    t.exports.f = function(t) {
      return new function(t) {
        var e, n;
        (this.promise = new t(function(t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      }(t);
    };
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var r = a(n(71)),
      i = a(n(80)),
      o =
        'function' == typeof i.default && 'symbol' == typeof r.default
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof i.default &&
                t.constructor === i.default &&
                t !== i.default.prototype
                ? 'symbol'
                : typeof t;
            };
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default =
      'function' == typeof i.default && 'symbol' === o(r.default)
        ? function(t) {
            return void 0 === t ? 'undefined' : o(t);
          }
        : function(t) {
            return t &&
              'function' == typeof i.default &&
              t.constructor === i.default &&
              t !== i.default.prototype
              ? 'symbol'
              : void 0 === t
              ? 'undefined'
              : o(t);
          };
  },
  function(t, e, n) {
    t.exports = n(95);
  },
  function(t, e, n) {
    t.exports =
      !n(9) &&
      !n(12)(function() {
        return (
          7 !=
          Object.defineProperty(n(28)('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, n) {
    var r = n(13),
      i = n(14),
      o = n(68)(!1),
      a = n(31)('IE_PROTO');
    t.exports = function(t, e) {
      var n,
        s = i(t),
        u = 0,
        c = [];
      for (n in s) n != a && r(s, n) && c.push(n);
      for (; e.length > u; ) r(s, (n = e[u++])) && (~o(c, n) || c.push(n));
      return c;
    };
  },
  function(t, e, n) {
    var r = n(16);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == r(t) ? t.split('') : Object(t);
        };
  },
  function(t, e, n) {
    var r = n(30),
      i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e, n) {
    var r = n(29);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(73)(!0);
    n(46)(
      String,
      'String',
      function(t) {
        (this._t = String(t)), (this._i = 0);
      },
      function() {
        var t,
          e = this._t,
          n = this._i;
        return n >= e.length
          ? { value: void 0, done: !0 }
          : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function(t, e, n) {
    'use strict';
    var r = n(17),
      i = n(7),
      o = n(47),
      a = n(10),
      s = n(18),
      u = n(74),
      c = n(27),
      f = n(76),
      l = n(5)('iterator'),
      d = !([].keys && 'next' in [].keys()),
      p = function() {
        return this;
      };
    t.exports = function(t, e, n, v, h, y, w) {
      u(n, e, v);
      var m,
        g,
        b,
        _ = function(t) {
          if (!d && t in O) return O[t];
          switch (t) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, t);
              };
          }
          return function() {
            return new n(this, t);
          };
        },
        x = e + ' Iterator',
        S = 'values' == h,
        k = !1,
        O = t.prototype,
        E = O[l] || O['@@iterator'] || (h && O[h]),
        T = E || _(h),
        P = h ? (S ? _('entries') : T) : void 0,
        j = ('Array' == e && O.entries) || E;
      if (
        (j &&
          (b = f(j.call(new t()))) !== Object.prototype &&
          b.next &&
          (c(b, x, !0), r || 'function' == typeof b[l] || a(b, l, p)),
        S &&
          E &&
          'values' !== E.name &&
          ((k = !0),
          (T = function() {
            return E.call(this);
          })),
        (r && !w) || (!d && !k && O[l]) || a(O, l, T),
        (s[e] = T),
        (s[x] = p),
        h)
      )
        if (
          ((m = {
            values: S ? T : _('values'),
            keys: y ? T : _('keys'),
            entries: P,
          }),
          w)
        )
          for (g in m) g in O || o(O, g, m[g]);
        else i(i.P + i.F * (d || k), e, m);
      return m;
    };
  },
  function(t, e, n) {
    t.exports = n(10);
  },
  function(t, e, n) {
    var r = n(6),
      i = n(75),
      o = n(33),
      a = n(31)('IE_PROTO'),
      s = function() {},
      u = function() {
        var t,
          e = n(28)('iframe'),
          r = o.length;
        for (
          e.style.display = 'none',
            n(49).appendChild(e),
            e.src = 'javascript:',
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            u = t.F;
          r--;

        )
          delete u.prototype[o[r]];
        return u();
      };
    t.exports =
      Object.create ||
      function(t, e) {
        var n;
        return (
          null !== t
            ? ((s.prototype = r(t)),
              (n = new s()),
              (s.prototype = null),
              (n[a] = t))
            : (n = u()),
          void 0 === e ? n : i(n, e)
        );
      };
  },
  function(t, e, n) {
    var r = n(2).document;
    t.exports = r && r.documentElement;
  },
  function(t, e, n) {
    n(77);
    for (
      var r = n(2),
        i = n(10),
        o = n(18),
        a = n(5)('toStringTag'),
        s = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
          ','
        ),
        u = 0;
      u < s.length;
      u++
    ) {
      var c = s[u],
        f = r[c],
        l = f && f.prototype;
      l && !l[a] && i(l, a, c), (o[c] = o.Array);
    }
  },
  function(t, e, n) {
    var r = n(41),
      i = n(33).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e) {},
  function(t, e, n) {
    var r = n(16),
      i = n(5)('toStringTag'),
      o =
        'Arguments' ==
        r(
          (function() {
            return arguments;
          })()
        );
    t.exports = function(t) {
      var e, n, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (n = (function(t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? n
        : o
        ? r(e)
        : 'Object' == (a = r(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : a;
    };
  },
  function(t, e, n) {
    var r = n(6),
      i = n(15),
      o = n(5)('species');
    t.exports = function(t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n);
    };
  },
  function(t, e, n) {
    var r,
      i,
      o,
      a = n(21),
      s = n(105),
      u = n(49),
      c = n(28),
      f = n(2),
      l = f.process,
      d = f.setImmediate,
      p = f.clearImmediate,
      v = f.MessageChannel,
      h = f.Dispatch,
      y = 0,
      w = {},
      m = function() {
        var t = +this;
        if (w.hasOwnProperty(t)) {
          var e = w[t];
          delete w[t], e();
        }
      },
      g = function(t) {
        m.call(t.data);
      };
    (d && p) ||
      ((d = function(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return (
          (w[++y] = function() {
            s('function' == typeof t ? t : Function(t), e);
          }),
          r(y),
          y
        );
      }),
      (p = function(t) {
        delete w[t];
      }),
      'process' == n(16)(l)
        ? (r = function(t) {
            l.nextTick(a(m, t, 1));
          })
        : h && h.now
        ? (r = function(t) {
            h.now(a(m, t, 1));
          })
        : v
        ? ((o = (i = new v()).port2),
          (i.port1.onmessage = g),
          (r = a(o.postMessage, o, 1)))
        : f.addEventListener &&
          'function' == typeof postMessage &&
          !f.importScripts
        ? ((r = function(t) {
            f.postMessage(t + '', '*');
          }),
          f.addEventListener('message', g, !1))
        : (r =
            'onreadystatechange' in c('script')
              ? function(t) {
                  u.appendChild(c('script')).onreadystatechange = function() {
                    u.removeChild(this), m.call(t);
                  };
                }
              : function(t) {
                  setTimeout(a(m, t, 1), 0);
                })),
      (t.exports = { set: d, clear: p });
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function(t, e, n) {
    var r = n(6),
      i = n(11),
      o = n(37);
    t.exports = function(t, e) {
      if ((r(t), i(e) && e.constructor === t)) return e;
      var n = o.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function(t, e, n) {
    var r;
    /*!
     * UAParser.js v0.7.19
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 or MIT
     */
    /*!
     * UAParser.js v0.7.19
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 or MIT
     */
    !(function(i, o) {
      'use strict';
      var a = 'model',
        s = 'name',
        u = 'type',
        c = 'vendor',
        f = 'version',
        l = 'mobile',
        d = 'tablet',
        p = {
          extend: function(t, e) {
            var n = {};
            for (var r in t)
              e[r] && e[r].length % 2 == 0
                ? (n[r] = e[r].concat(t[r]))
                : (n[r] = t[r]);
            return n;
          },
          has: function(t, e) {
            return (
              'string' == typeof t &&
              -1 !== e.toLowerCase().indexOf(t.toLowerCase())
            );
          },
          lowerize: function(t) {
            return t.toLowerCase();
          },
          major: function(t) {
            return 'string' == typeof t
              ? t.replace(/[^\d\.]/g, '').split('.')[0]
              : void 0;
          },
          trim: function(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          },
        },
        v = {
          rgx: function(t, e) {
            for (var n, r, i, o, a, s, u = 0; u < e.length && !a; ) {
              var c = e[u],
                f = e[u + 1];
              for (n = r = 0; n < c.length && !a; )
                if ((a = c[n++].exec(t)))
                  for (i = 0; i < f.length; i++)
                    (s = a[++r]),
                      'object' == typeof (o = f[i]) && o.length > 0
                        ? 2 == o.length
                          ? 'function' == typeof o[1]
                            ? (this[o[0]] = o[1].call(this, s))
                            : (this[o[0]] = o[1])
                          : 3 == o.length
                          ? 'function' != typeof o[1] ||
                            (o[1].exec && o[1].test)
                            ? (this[o[0]] = s ? s.replace(o[1], o[2]) : void 0)
                            : (this[o[0]] = s
                                ? o[1].call(this, s, o[2])
                                : void 0)
                          : 4 == o.length &&
                            (this[o[0]] = s
                              ? o[3].call(this, s.replace(o[1], o[2]))
                              : void 0)
                        : (this[o] = s || void 0);
              u += 2;
            }
          },
          str: function(t, e) {
            for (var n in e)
              if ('object' == typeof e[n] && e[n].length > 0) {
                for (var r = 0; r < e[n].length; r++)
                  if (p.has(e[n][r], t)) return '?' === n ? void 0 : n;
              } else if (p.has(e[n], t)) return '?' === n ? void 0 : n;
            return t;
          },
        },
        h = {
          browser: {
            oldsafari: {
              version: {
                '1.0': '/8',
                1.2: '/1',
                1.3: '/3',
                '2.0': '/412',
                '2.0.2': '/416',
                '2.0.3': '/417',
                '2.0.4': '/419',
                '?': '/',
              },
            },
          },
          device: {
            amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
            sprint: {
              model: { 'Evo Shift 4G': '7373KT' },
              vendor: { HTC: 'APA', Sprint: 'Sprint' },
            },
          },
          os: {
            windows: {
              version: {
                ME: '4.90',
                'NT 3.11': 'NT3.51',
                'NT 4.0': 'NT4.0',
                2000: 'NT 5.0',
                XP: ['NT 5.1', 'NT 5.2'],
                Vista: 'NT 6.0',
                7: 'NT 6.1',
                8: 'NT 6.2',
                8.1: 'NT 6.3',
                10: ['NT 6.4', 'NT 10.0'],
                RT: 'ARM',
              },
            },
          },
        },
        y = {
          browser: [
            [
              /(opera\smini)\/([\w\.-]+)/i,
              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
              /(opera).+version\/([\w\.]+)/i,
              /(opera)[\/\s]+([\w\.]+)/i,
            ],
            [s, f],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [[s, 'Opera Mini'], f],
            [/\s(opr)\/([\w\.]+)/i],
            [[s, 'Opera'], f],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
              /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
              /(?:ms|\()(ie)\s([\w\.]+)/i,
              /(rekonq)\/([\w\.]*)/i,
              /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
            ],
            [s, f],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [[s, 'IE'], f],
            [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
            [[s, 'Edge'], f],
            [/(yabrowser)\/([\w\.]+)/i],
            [[s, 'Yandex'], f],
            [/(puffin)\/([\w\.]+)/i],
            [[s, 'Puffin'], f],
            [/(focus)\/([\w\.]+)/i],
            [[s, 'Firefox Focus'], f],
            [/(opt)\/([\w\.]+)/i],
            [[s, 'Opera Touch'], f],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [[s, 'UCBrowser'], f],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[s, /_/g, ' '], f],
            [/(micromessenger)\/([\w\.]+)/i],
            [[s, 'WeChat'], f],
            [/(brave)\/([\w\.]+)/i],
            [[s, 'Brave'], f],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [s, f],
            [/(QQ)\/([\d\.]+)/i],
            [s, f],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [s, f],
            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
            [s, f],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [s, f],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [s],
            [/(LBBROWSER)/i],
            [s],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [f, [s, 'MIUI Browser']],
            [/;fbav\/([\w\.]+);/i],
            [f, [s, 'Facebook']],
            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
            [s, f],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [f, [s, 'Chrome Headless']],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [[s, /(.+)/, '$1 WebView'], f],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [[s, /(.+(?:g|us))(.+)/, '$1 $2'], f],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [f, [s, 'Android Browser']],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [s, f],
            [/(dolfin)\/([\w\.]+)/i],
            [[s, 'Dolphin'], f],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [[s, 'Chrome'], f],
            [/(coast)\/([\w\.]+)/i],
            [[s, 'Opera Coast'], f],
            [/fxios\/([\w\.-]+)/i],
            [f, [s, 'Firefox']],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [f, [s, 'Mobile Safari']],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [f, s],
            [
              /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
            ],
            [[s, 'GSA'], f],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [s, [f, v.str, h.browser.oldsafari.version]],
            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
            [s, f],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [[s, 'Netscape'], f],
            [
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
              /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
              /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
              /(links)\s\(([\w\.]+)/i,
              /(gobrowser)\/?([\w\.]*)/i,
              /(ice\s?browser)\/v?([\w\._]+)/i,
              /(mosaic)[\/\s]([\w\.]+)/i,
            ],
            [s, f],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [['architecture', 'amd64']],
            [/(ia32(?=;))/i],
            [['architecture', p.lowerize]],
            [/((?:i[346]|x)86)[;\)]/i],
            [['architecture', 'ia32']],
            [/windows\s(ce|mobile);\sppc;/i],
            [['architecture', 'arm']],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [['architecture', /ower/, '', p.lowerize]],
            [/(sun4\w)[;\)]/i],
            [['architecture', 'sparc']],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
            ],
            [['architecture', p.lowerize]],
          ],
          device: [
            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
            [a, c, [u, d]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [a, [c, 'Apple'], [u, d]],
            [/(apple\s{0,1}tv)/i],
            [[a, 'Apple TV'], [c, 'Apple']],
            [
              /(archos)\s(gamepad2?)/i,
              /(hp).+(touchpad)/i,
              /(hp).+(tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /\s(nook)[\w\s]+build\/(\w+)/i,
              /(dell)\s(strea[kpr\s\d]*[\dko])/i,
            ],
            [c, a, [u, d]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [a, [c, 'Amazon'], [u, d]],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [[a, v.str, h.device.amazon.model], [c, 'Amazon'], [u, l]],
            [/android.+aft([bms])\sbuild/i],
            [a, [c, 'Amazon'], [u, 'smarttv']],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [a, c, [u, l]],
            [/\((ip[honed|\s\w*]+);/i],
            [a, [c, 'Apple'], [u, l]],
            [
              /(blackberry)[\s-]?(\w+)/i,
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
              /(hp)\s([\w\s]+\w)/i,
              /(asus)-?(\w+)/i,
            ],
            [c, a, [u, l]],
            [/\(bb10;\s(\w+)/i],
            [a, [c, 'BlackBerry'], [u, l]],
            [
              /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
            ],
            [a, [c, 'Asus'], [u, d]],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [[c, 'Sony'], [a, 'Xperia Tablet'], [u, d]],
            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
            [a, [c, 'Sony'], [u, l]],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [c, a, [u, 'console']],
            [/android.+;\s(shield)\sbuild/i],
            [a, [c, 'Nvidia'], [u, 'console']],
            [/(playstation\s[34portablevi]+)/i],
            [a, [c, 'Sony'], [u, 'console']],
            [/(sprint\s(\w+))/i],
            [
              [c, v.str, h.device.sprint.vendor],
              [a, v.str, h.device.sprint.model],
              [u, l],
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [c, a, [u, d]],
            [
              /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
              /(zte)-(\w*)/i,
              /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
            ],
            [c, [a, /_/g, ' '], [u, l]],
            [/(nexus\s9)/i],
            [a, [c, 'HTC'], [u, d]],
            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
            [a, [c, 'Huawei'], [u, l]],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [c, a, [u, l]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [a, [c, 'Microsoft'], [u, 'console']],
            [/(kin\.[onetw]{3})/i],
            [[a, /\./g, ' '], [c, 'Microsoft'], [u, l]],
            [
              /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
              /mot[\s-]?(\w*)/i,
              /(XT\d{3,4}) build\//i,
              /(nexus\s6)/i,
            ],
            [a, [c, 'Motorola'], [u, l]],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [a, [c, 'Motorola'], [u, d]],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [[c, p.trim], [a, p.trim], [u, 'smarttv']],
            [/hbbtv.+maple;(\d+)/i],
            [[a, /^/, 'SmartTV'], [c, 'Samsung'], [u, 'smarttv']],
            [/\(dtv[\);].+(aquos)/i],
            [a, [c, 'Sharp'], [u, 'smarttv']],
            [
              /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
              /((SM-T\w+))/i,
            ],
            [[c, 'Samsung'], a, [u, d]],
            [/smart-tv.+(samsung)/i],
            [c, [u, 'smarttv'], a],
            [
              /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
              /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
              /sec-((sgh\w+))/i,
            ],
            [[c, 'Samsung'], a, [u, l]],
            [/sie-(\w*)/i],
            [a, [c, 'Siemens'], [u, l]],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [[c, 'Nokia'], a, [u, l]],
            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
            [a, [c, 'Acer'], [u, d]],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [a, [c, 'LG'], [u, d]],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [[c, 'LG'], a, [u, d]],
            [/(lg) netcast\.tv/i],
            [c, a, [u, 'smarttv']],
            [
              /(nexus\s[45])/i,
              /lg[e;\s\/-]+(\w*)/i,
              /android.+lg(\-?[\d\w]+)\s+build/i,
            ],
            [a, [c, 'LG'], [u, l]],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [a, [c, 'Lenovo'], [u, d]],
            [/linux;.+((jolla));/i],
            [c, a, [u, l]],
            [/((pebble))app\/[\d\.]+\s/i],
            [c, a, [u, 'wearable']],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [c, a, [u, l]],
            [/crkey/i],
            [[a, 'Chromecast'], [c, 'Google']],
            [/android.+;\s(glass)\s\d/i],
            [a, [c, 'Google'], [u, 'wearable']],
            [/android.+;\s(pixel c)[\s)]/i],
            [a, [c, 'Google'], [u, d]],
            [/android.+;\s(pixel( [23])?( xl)?)\s/i],
            [a, [c, 'Google'], [u, l]],
            [
              /android.+;\s(\w+)\s+build\/hm\1/i,
              /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
              /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
              /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
            ],
            [[a, /_/g, ' '], [c, 'Xiaomi'], [u, l]],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [[a, /_/g, ' '], [c, 'Xiaomi'], [u, d]],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [a, [c, 'Meizu'], [u, d]],
            [/(mz)-([\w-]{2,})/i],
            [[c, 'Meizu'], a, [u, l]],
            [
              /android.+a000(1)\s+build/i,
              /android.+oneplus\s(a\d{4})\s+build/i,
            ],
            [a, [c, 'OnePlus'], [u, l]],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [a, [c, 'RCA'], [u, d]],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [a, [c, 'Dell'], [u, d]],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [a, [c, 'Verizon'], [u, d]],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [[c, 'Barnes & Noble'], a, [u, d]],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [a, [c, 'NuVision'], [u, d]],
            [/android.+;\s(k88)\sbuild/i],
            [a, [c, 'ZTE'], [u, d]],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [a, [c, 'Swiss'], [u, l]],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [a, [c, 'Swiss'], [u, d]],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [a, [c, 'Zeki'], [u, d]],
            [
              /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
              /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
            ],
            [[c, 'Dragon Touch'], a, [u, d]],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [a, [c, 'Insignia'], [u, d]],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [a, [c, 'NextBook'], [u, d]],
            [
              /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
            ],
            [[c, 'Voice'], a, [u, l]],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [[c, 'LvTel'], a, [u, l]],
            [/android.+;\s(PH-1)\s/i],
            [a, [c, 'Essential'], [u, l]],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [a, [c, 'Envizen'], [u, d]],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [c, a, [u, d]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [a, [c, 'MachSpeed'], [u, d]],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [c, a, [u, d]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [a, [c, 'Rotor'], [u, d]],
            [/android.+(KS(.+))\s+build/i],
            [a, [c, 'Amazon'], [u, d]],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [c, a, [u, d]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [[u, p.lowerize], c, a],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [a, [c, 'Generic']],
          ],
          engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [f, [s, 'EdgeHTML']],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
              /(icab)[\/\s]([23]\.[\d\.]+)/i,
            ],
            [s, f],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [f, s],
          ],
          os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [s, f],
            [
              /(windows)\snt\s6\.2;\s(arm)/i,
              /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
              /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
            ],
            [s, [f, v.str, h.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [[s, 'Windows'], [f, v.str, h.os.windows.version]],
            [/\((bb)(10);/i],
            [[s, 'BlackBerry'], f],
            [
              /(blackberry)\w*\/?([\w\.]*)/i,
              /(tizen)[\/\s]([\w\.]+)/i,
              /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
              /linux;.+(sailfish);/i,
            ],
            [s, f],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [[s, 'Symbian'], f],
            [/\((series40);/i],
            [s],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [[s, 'Firefox OS'], f],
            [
              /(nintendo|playstation)\s([wids34portablevu]+)/i,
              /(mint)[\/\s\(]?(\w*)/i,
              /(mageia|vectorlinux)[;\s]/i,
              /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
              /(hurd|linux)\s?([\w\.]*)/i,
              /(gnu)\s?([\w\.]*)/i,
            ],
            [s, f],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [[s, 'Chromium OS'], f],
            [/(sunos)\s?([\w\.\d]*)/i],
            [[s, 'Solaris'], f],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [s, f],
            [/(haiku)\s(\w+)/i],
            [s, f],
            [
              /cfnetwork\/.+darwin/i,
              /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
            ],
            [[f, /_/g, '.'], [s, 'iOS']],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [[s, 'Mac OS'], [f, /_/g, '.']],
            [
              /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
              /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
              /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
              /(unix)\s?([\w\.]*)/i,
            ],
            [s, f],
          ],
        },
        w = function(t, e) {
          if (
            ('object' == typeof t && ((e = t), (t = void 0)),
            !(this instanceof w))
          )
            return new w(t, e).getResult();
          var n =
              t ||
              (i && i.navigator && i.navigator.userAgent
                ? i.navigator.userAgent
                : ''),
            r = e ? p.extend(y, e) : y;
          return (
            (this.getBrowser = function() {
              var t = { name: void 0, version: void 0 };
              return (
                v.rgx.call(t, n, r.browser), (t.major = p.major(t.version)), t
              );
            }),
            (this.getCPU = function() {
              var t = { architecture: void 0 };
              return v.rgx.call(t, n, r.cpu), t;
            }),
            (this.getDevice = function() {
              var t = { vendor: void 0, model: void 0, type: void 0 };
              return v.rgx.call(t, n, r.device), t;
            }),
            (this.getEngine = function() {
              var t = { name: void 0, version: void 0 };
              return v.rgx.call(t, n, r.engine), t;
            }),
            (this.getOS = function() {
              var t = { name: void 0, version: void 0 };
              return v.rgx.call(t, n, r.os), t;
            }),
            (this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function() {
              return n;
            }),
            (this.setUA = function(t) {
              return (n = t), this;
            }),
            this
          );
        };
      (w.VERSION = '0.7.19'),
        (w.BROWSER = { NAME: s, MAJOR: 'major', VERSION: f }),
        (w.CPU = { ARCHITECTURE: 'architecture' }),
        (w.DEVICE = {
          MODEL: a,
          VENDOR: c,
          TYPE: u,
          CONSOLE: 'console',
          MOBILE: l,
          SMARTTV: 'smarttv',
          TABLET: d,
          WEARABLE: 'wearable',
          EMBEDDED: 'embedded',
        }),
        (w.ENGINE = { NAME: s, VERSION: f }),
        (w.OS = { NAME: s, VERSION: f }),
        void 0 !== e
          ? (void 0 !== t && t.exports && (e = t.exports = w), (e.UAParser = w))
          : n(70)
          ? void 0 ===
              (r = function() {
                return w;
              }.call(e, n, e, t)) || (t.exports = r)
          : i && (i.UAParser = w);
      var m = i && (i.jQuery || i.Zepto);
      if (void 0 !== m && !m.ua) {
        var g = new w();
        (m.ua = g.getResult()),
          (m.ua.get = function() {
            return g.getUA();
          }),
          (m.ua.set = function(t) {
            g.setUA(t);
            var e = g.getResult();
            for (var n in e) m.ua[n] = e[n];
          });
      }
    })('object' == typeof window ? window : this);
  },
  function(t, e, n) {
    'use strict';
    (e.__esModule = !0),
      (e.default = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      });
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var r,
      i = n(92),
      o = (r = i) && r.__esModule ? r : { default: r };
    e.default = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            (0, o.default)(t, r.key, r);
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
  },
  function(t, e, n) {
    'use strict';
    e.__esModule = !0;
    var r,
      i = n(97),
      o = (r = i) && r.__esModule ? r : { default: r };
    e.default = function(t) {
      return function() {
        var e = t.apply(this, arguments);
        return new o.default(function(t, n) {
          return (function r(i, a) {
            try {
              var s = e[i](a),
                u = s.value;
            } catch (t) {
              return void n(t);
            }
            if (!s.done)
              return o.default.resolve(u).then(
                function(t) {
                  r('next', t);
                },
                function(t) {
                  r('throw', t);
                }
              );
            t(u);
          })('next');
        });
      };
    };
  },
  function(t, e, n) {
    t.exports = { default: n(113), __esModule: !0 };
  },
  function(t, e, n) {
    t.exports = n(117);
  },
  function(t, e, n) {
    var r = n(3),
      i = r.JSON || (r.JSON = { stringify: JSON.stringify });
    t.exports = function(t) {
      return i.stringify.apply(i, arguments);
    };
  },
  function(t, e, n) {
    n(66), (t.exports = n(3).Object.assign);
  },
  function(t, e, n) {
    var r = n(7);
    r(r.S + r.F, 'Object', { assign: n(67) });
  },
  function(t, e, n) {
    'use strict';
    var r = n(24),
      i = n(34),
      o = n(26),
      a = n(44),
      s = n(42),
      u = Object.assign;
    t.exports =
      !u ||
      n(12)(function() {
        var t = {},
          e = {},
          n = Symbol(),
          r = 'abcdefghijklmnopqrst';
        return (
          (t[n] = 7),
          r.split('').forEach(function(t) {
            e[t] = t;
          }),
          7 != u({}, t)[n] || Object.keys(u({}, e)).join('') != r
        );
      })
        ? function(t, e) {
            for (
              var n = a(t), u = arguments.length, c = 1, f = i.f, l = o.f;
              u > c;

            )
              for (
                var d,
                  p = s(arguments[c++]),
                  v = f ? r(p).concat(f(p)) : r(p),
                  h = v.length,
                  y = 0;
                h > y;

              )
                l.call(p, (d = v[y++])) && (n[d] = p[d]);
            return n;
          }
        : u;
  },
  function(t, e, n) {
    var r = n(14),
      i = n(43),
      o = n(69);
    t.exports = function(t) {
      return function(e, n, a) {
        var s,
          u = r(e),
          c = i(u.length),
          f = o(a, c);
        if (t && n != n) {
          for (; c > f; ) if ((s = u[f++]) != s) return !0;
        } else
          for (; c > f; f++)
            if ((t || f in u) && u[f] === n) return t || f || 0;
        return !t && -1;
      };
    };
  },
  function(t, e, n) {
    var r = n(30),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  },
  function(t, e) {
    (function(e) {
      t.exports = e;
    }.call(this, {}));
  },
  function(t, e, n) {
    t.exports = { default: n(72), __esModule: !0 };
  },
  function(t, e, n) {
    n(45), n(50), (t.exports = n(35).f('iterator'));
  },
  function(t, e, n) {
    var r = n(30),
      i = n(29);
    t.exports = function(t) {
      return function(e, n) {
        var o,
          a,
          s = String(i(e)),
          u = r(n),
          c = s.length;
        return u < 0 || u >= c
          ? t
            ? ''
            : void 0
          : (o = s.charCodeAt(u)) < 55296 ||
            o > 56319 ||
            u + 1 === c ||
            (a = s.charCodeAt(u + 1)) < 56320 ||
            a > 57343
          ? t
            ? s.charAt(u)
            : o
          : t
          ? s.slice(u, u + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(48),
      i = n(23),
      o = n(27),
      a = {};
    n(10)(a, n(5)('iterator'), function() {
      return this;
    }),
      (t.exports = function(t, e, n) {
        (t.prototype = r(a, { next: i(1, n) })), o(t, e + ' Iterator');
      });
  },
  function(t, e, n) {
    var r = n(8),
      i = n(6),
      o = n(24);
    t.exports = n(9)
      ? Object.defineProperties
      : function(t, e) {
          i(t);
          for (var n, a = o(e), s = a.length, u = 0; s > u; )
            r.f(t, (n = a[u++]), e[n]);
          return t;
        };
  },
  function(t, e, n) {
    var r = n(13),
      i = n(44),
      o = n(31)('IE_PROTO'),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (
          (t = i(t)),
          r(t, o)
            ? t[o]
            : 'function' == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function(t, e, n) {
    'use strict';
    var r = n(78),
      i = n(79),
      o = n(18),
      a = n(14);
    (t.exports = n(46)(
      Array,
      'Array',
      function(t, e) {
        (this._t = a(t)), (this._i = 0), (this._k = e);
      },
      function() {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length
          ? ((this._t = void 0), i(1))
          : i(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function(t, e) {
    t.exports = function() {};
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { value: e, done: !!t };
    };
  },
  function(t, e, n) {
    t.exports = { default: n(81), __esModule: !0 };
  },
  function(t, e, n) {
    n(82), n(52), n(88), n(89), (t.exports = n(3).Symbol);
  },
  function(t, e, n) {
    'use strict';
    var r = n(2),
      i = n(13),
      o = n(9),
      a = n(7),
      s = n(47),
      u = n(83).KEY,
      c = n(12),
      f = n(32),
      l = n(27),
      d = n(25),
      p = n(5),
      v = n(35),
      h = n(36),
      y = n(84),
      w = n(85),
      m = n(6),
      g = n(11),
      b = n(14),
      _ = n(22),
      x = n(23),
      S = n(48),
      k = n(86),
      O = n(87),
      E = n(8),
      T = n(24),
      P = O.f,
      j = E.f,
      L = k.f,
      M = r.Symbol,
      N = r.JSON,
      A = N && N.stringify,
      R = p('_hidden'),
      C = p('toPrimitive'),
      z = {}.propertyIsEnumerable,
      D = f('symbol-registry'),
      F = f('symbols'),
      I = f('op-symbols'),
      G = Object.prototype,
      B = 'function' == typeof M,
      V = r.QObject,
      U = !V || !V.prototype || !V.prototype.findChild,
      q =
        o &&
        c(function() {
          return (
            7 !=
            S(
              j({}, 'a', {
                get: function() {
                  return j(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(t, e, n) {
              var r = P(G, e);
              r && delete G[e], j(t, e, n), r && t !== G && j(G, e, r);
            }
          : j,
      H = function(t) {
        var e = (F[t] = S(M.prototype));
        return (e._k = t), e;
      },
      J =
        B && 'symbol' == typeof M.iterator
          ? function(t) {
              return 'symbol' == typeof t;
            }
          : function(t) {
              return t instanceof M;
            },
      W = function(t, e, n) {
        return (
          t === G && W(I, e, n),
          m(t),
          (e = _(e, !0)),
          m(n),
          i(F, e)
            ? (n.enumerable
                ? (i(t, R) && t[R][e] && (t[R][e] = !1),
                  (n = S(n, { enumerable: x(0, !1) })))
                : (i(t, R) || j(t, R, x(1, {})), (t[R][e] = !0)),
              q(t, e, n))
            : j(t, e, n)
        );
      },
      K = function(t, e) {
        m(t);
        for (var n, r = y((e = b(e))), i = 0, o = r.length; o > i; )
          W(t, (n = r[i++]), e[n]);
        return t;
      },
      X = function(t) {
        var e = z.call(this, (t = _(t, !0)));
        return (
          !(this === G && i(F, t) && !i(I, t)) &&
          (!(e || !i(this, t) || !i(F, t) || (i(this, R) && this[R][t])) || e)
        );
      },
      Y = function(t, e) {
        if (((t = b(t)), (e = _(e, !0)), t !== G || !i(F, e) || i(I, e))) {
          var n = P(t, e);
          return (
            !n || !i(F, e) || (i(t, R) && t[R][e]) || (n.enumerable = !0), n
          );
        }
      },
      Q = function(t) {
        for (var e, n = L(b(t)), r = [], o = 0; n.length > o; )
          i(F, (e = n[o++])) || e == R || e == u || r.push(e);
        return r;
      },
      $ = function(t) {
        for (
          var e, n = t === G, r = L(n ? I : b(t)), o = [], a = 0;
          r.length > a;

        )
          !i(F, (e = r[a++])) || (n && !i(G, e)) || o.push(F[e]);
        return o;
      };
    B ||
      (s(
        (M = function() {
          if (this instanceof M)
            throw TypeError('Symbol is not a constructor!');
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
              this === G && e.call(I, n),
                i(this, R) && i(this[R], t) && (this[R][t] = !1),
                q(this, t, x(1, n));
            };
          return o && U && q(G, t, { configurable: !0, set: e }), H(t);
        }).prototype,
        'toString',
        function() {
          return this._k;
        }
      ),
      (O.f = Y),
      (E.f = W),
      (n(51).f = k.f = Q),
      (n(26).f = X),
      (n(34).f = $),
      o && !n(17) && s(G, 'propertyIsEnumerable', X, !0),
      (v.f = function(t) {
        return H(p(t));
      })),
      a(a.G + a.W + a.F * !B, { Symbol: M });
    for (
      var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
          ','
        ),
        tt = 0;
      Z.length > tt;

    )
      p(Z[tt++]);
    for (var et = T(p.store), nt = 0; et.length > nt; ) h(et[nt++]);
    a(a.S + a.F * !B, 'Symbol', {
      for: function(t) {
        return i(D, (t += '')) ? D[t] : (D[t] = M(t));
      },
      keyFor: function(t) {
        if (!J(t)) throw TypeError(t + ' is not a symbol!');
        for (var e in D) if (D[e] === t) return e;
      },
      useSetter: function() {
        U = !0;
      },
      useSimple: function() {
        U = !1;
      },
    }),
      a(a.S + a.F * !B, 'Object', {
        create: function(t, e) {
          return void 0 === e ? S(t) : K(S(t), e);
        },
        defineProperty: W,
        defineProperties: K,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: $,
      }),
      N &&
        a(
          a.S +
            a.F *
              (!B ||
                c(function() {
                  var t = M();
                  return (
                    '[null]' != A([t]) ||
                    '{}' != A({ a: t }) ||
                    '{}' != A(Object(t))
                  );
                })),
          'JSON',
          {
            stringify: function(t) {
              for (var e, n, r = [t], i = 1; arguments.length > i; )
                r.push(arguments[i++]);
              if (((n = e = r[1]), (g(e) || void 0 !== t) && !J(t)))
                return (
                  w(e) ||
                    (e = function(t, e) {
                      if (
                        ('function' == typeof n && (e = n.call(this, t, e)),
                        !J(e))
                      )
                        return e;
                    }),
                  (r[1] = e),
                  A.apply(N, r)
                );
            },
          }
        ),
      M.prototype[C] || n(10)(M.prototype, C, M.prototype.valueOf),
      l(M, 'Symbol'),
      l(Math, 'Math', !0),
      l(r.JSON, 'JSON', !0);
  },
  function(t, e, n) {
    var r = n(25)('meta'),
      i = n(11),
      o = n(13),
      a = n(8).f,
      s = 0,
      u =
        Object.isExtensible ||
        function() {
          return !0;
        },
      c = !n(12)(function() {
        return u(Object.preventExtensions({}));
      }),
      f = function(t) {
        a(t, r, { value: { i: 'O' + ++s, w: {} } });
      },
      l = (t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(t, e) {
          if (!i(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, r)) {
            if (!u(t)) return 'F';
            if (!e) return 'E';
            f(t);
          }
          return t[r].i;
        },
        getWeak: function(t, e) {
          if (!o(t, r)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            f(t);
          }
          return t[r].w;
        },
        onFreeze: function(t) {
          return c && l.NEED && u(t) && !o(t, r) && f(t), t;
        },
      });
  },
  function(t, e, n) {
    var r = n(24),
      i = n(34),
      o = n(26);
    t.exports = function(t) {
      var e = r(t),
        n = i.f;
      if (n)
        for (var a, s = n(t), u = o.f, c = 0; s.length > c; )
          u.call(t, (a = s[c++])) && e.push(a);
      return e;
    };
  },
  function(t, e, n) {
    var r = n(16);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == r(t);
      };
  },
  function(t, e, n) {
    var r = n(14),
      i = n(51).f,
      o = {}.toString,
      a =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function(t) {
      return a && '[object Window]' == o.call(t)
        ? (function(t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(r(t));
    };
  },
  function(t, e, n) {
    var r = n(26),
      i = n(23),
      o = n(14),
      a = n(22),
      s = n(13),
      u = n(40),
      c = Object.getOwnPropertyDescriptor;
    e.f = n(9)
      ? c
      : function(t, e) {
          if (((t = o(t)), (e = a(e, !0)), u))
            try {
              return c(t, e);
            } catch (t) {}
          if (s(t, e)) return i(!r.f.call(t, e), t[e]);
        };
  },
  function(t, e, n) {
    n(36)('asyncIterator');
  },
  function(t, e, n) {
    n(36)('observable');
  },
  function(t, e) {
    var n =
      ('undefined' != typeof crypto && crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (n) {
      var r = new Uint8Array(16);
      t.exports = function() {
        return n(r), r;
      };
    } else {
      var i = new Array(16);
      t.exports = function() {
        for (var t, e = 0; e < 16; e++)
          0 == (3 & e) && (t = 4294967296 * Math.random()),
            (i[e] = (t >>> ((3 & e) << 3)) & 255);
        return i;
      };
    }
  },
  function(t, e) {
    for (var n = [], r = 0; r < 256; ++r)
      n[r] = (r + 256).toString(16).substr(1);
    t.exports = function(t, e) {
      var r = e || 0,
        i = n;
      return (
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]] +
        '-' +
        i[t[r++]] +
        i[t[r++]] +
        '-' +
        i[t[r++]] +
        i[t[r++]] +
        '-' +
        i[t[r++]] +
        i[t[r++]] +
        '-' +
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]] +
        i[t[r++]]
      );
    };
  },
  function(t, e, n) {
    t.exports = { default: n(93), __esModule: !0 };
  },
  function(t, e, n) {
    n(94);
    var r = n(3).Object;
    t.exports = function(t, e, n) {
      return r.defineProperty(t, e, n);
    };
  },
  function(t, e, n) {
    var r = n(7);
    r(r.S + r.F * !n(9), 'Object', { defineProperty: n(8).f });
  },
  function(t, e, n) {
    var r =
        (function() {
          return this;
        })() || Function('return this')(),
      i =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf('regeneratorRuntime') >= 0,
      o = i && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (t.exports = n(96)), i))
      r.regeneratorRuntime = o;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (t) {
        r.regeneratorRuntime = void 0;
      }
  },
  function(t, e) {
    !(function(e) {
      'use strict';
      var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        o = 'function' == typeof Symbol ? Symbol : {},
        a = o.iterator || '@@iterator',
        s = o.asyncIterator || '@@asyncIterator',
        u = o.toStringTag || '@@toStringTag',
        c = 'object' == typeof t,
        f = e.regeneratorRuntime;
      if (f) c && (t.exports = f);
      else {
        (f = e.regeneratorRuntime = c ? t.exports : {}).wrap = b;
        var l = 'suspendedStart',
          d = 'suspendedYield',
          p = 'executing',
          v = 'completed',
          h = {},
          y = {};
        y[a] = function() {
          return this;
        };
        var w = Object.getPrototypeOf,
          m = w && w(w(M([])));
        m && m !== r && i.call(m, a) && (y = m);
        var g = (k.prototype = x.prototype = Object.create(y));
        (S.prototype = g.constructor = k),
          (k.constructor = S),
          (k[u] = S.displayName = 'GeneratorFunction'),
          (f.isGeneratorFunction = function(t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === S || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (f.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, k)
                : ((t.__proto__ = k), u in t || (t[u] = 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (f.awrap = function(t) {
            return { __await: t };
          }),
          O(E.prototype),
          (E.prototype[s] = function() {
            return this;
          }),
          (f.AsyncIterator = E),
          (f.async = function(t, e, n, r) {
            var i = new E(b(t, e, n, r));
            return f.isGeneratorFunction(e)
              ? i
              : i.next().then(function(t) {
                  return t.done ? t.value : i.next();
                });
          }),
          O(g),
          (g[u] = 'Generator'),
          (g[a] = function() {
            return this;
          }),
          (g.toString = function() {
            return '[object Generator]';
          }),
          (f.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (f.values = M),
          (L.prototype = {
            constructor: L,
            reset: function(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = n),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = n);
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var e = this;
              function r(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (e.next = r),
                  i && ((e.method = 'next'), (e.arg = n)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, 'catchLoc'),
                    c = i.call(a, 'finallyLoc');
                  if (u && c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), h)
                  : this.complete(a)
              );
            },
            complete: function(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                h
              );
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), j(n), h;
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    j(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(t, e, r) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = n),
                h
              );
            },
          });
      }
      function b(t, e, n, r) {
        var i = e && e.prototype instanceof x ? e : x,
          o = Object.create(i.prototype),
          a = new L(r || []);
        return (
          (o._invoke = (function(t, e, n) {
            var r = l;
            return function(i, o) {
              if (r === p) throw new Error('Generator is already running');
              if (r === v) {
                if ('throw' === i) throw o;
                return N();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = T(a, n);
                  if (s) {
                    if (s === h) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (r === l) throw ((r = v), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = p;
                var u = _(t, e, n);
                if ('normal' === u.type) {
                  if (((r = n.done ? v : d), u.arg === h)) continue;
                  return { value: u.arg, done: n.done };
                }
                'throw' === u.type &&
                  ((r = v), (n.method = 'throw'), (n.arg = u.arg));
              }
            };
          })(t, n, a)),
          o
        );
      }
      function _(t, e, n) {
        try {
          return { type: 'normal', arg: t.call(e, n) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      function x() {}
      function S() {}
      function k() {}
      function O(t) {
        ['next', 'throw', 'return'].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function E(t) {
        var e;
        this._invoke = function(n, r) {
          function o() {
            return new Promise(function(e, o) {
              !(function e(n, r, o, a) {
                var s = _(t[n], t, r);
                if ('throw' !== s.type) {
                  var u = s.arg,
                    c = u.value;
                  return c && 'object' == typeof c && i.call(c, '__await')
                    ? Promise.resolve(c.__await).then(
                        function(t) {
                          e('next', t, o, a);
                        },
                        function(t) {
                          e('throw', t, o, a);
                        }
                      )
                    : Promise.resolve(c).then(function(t) {
                        (u.value = t), o(u);
                      }, a);
                }
                a(s.arg);
              })(n, r, e, o);
            });
          }
          return (e = e ? e.then(o, o) : o());
        };
      }
      function T(t, e) {
        var r = t.iterator[e.method];
        if (r === n) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = n),
              T(t, e),
              'throw' === e.method)
            )
              return h;
            (e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var i = _(r, t.iterator, e.arg);
        if ('throw' === i.type)
          return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), h;
        var o = i.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
              (e.delegate = null),
              h)
            : o
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            h);
      }
      function P(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function L(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(P, this),
          this.reset(!0);
      }
      function M(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function e() {
                for (; ++r < t.length; )
                  if (i.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = n), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: n, done: !0 };
      }
    })(
      (function() {
        return this;
      })() || Function('return this')()
    );
  },
  function(t, e, n) {
    t.exports = { default: n(98), __esModule: !0 };
  },
  function(t, e, n) {
    n(52), n(45), n(50), n(99), n(111), n(112), (t.exports = n(3).Promise);
  },
  function(t, e, n) {
    'use strict';
    var r,
      i,
      o,
      a,
      s = n(17),
      u = n(2),
      c = n(21),
      f = n(53),
      l = n(7),
      d = n(11),
      p = n(15),
      v = n(100),
      h = n(101),
      y = n(54),
      w = n(55).set,
      m = n(106)(),
      g = n(37),
      b = n(56),
      _ = n(107),
      x = n(57),
      S = u.TypeError,
      k = u.process,
      O = k && k.versions,
      E = (O && O.v8) || '',
      T = u.Promise,
      P = 'process' == f(k),
      j = function() {},
      L = (i = g.f),
      M = !!(function() {
        try {
          var t = T.resolve(1),
            e = ((t.constructor = {})[n(5)('species')] = function(t) {
              t(j, j);
            });
          return (
            (P || 'function' == typeof PromiseRejectionEvent) &&
            t.then(j) instanceof e &&
            0 !== E.indexOf('6.6') &&
            -1 === _.indexOf('Chrome/66')
          );
        } catch (t) {}
      })(),
      N = function(t) {
        var e;
        return !(!d(t) || 'function' != typeof (e = t.then)) && e;
      },
      A = function(t, e) {
        if (!t._n) {
          t._n = !0;
          var n = t._c;
          m(function() {
            for (
              var r = t._v,
                i = 1 == t._s,
                o = 0,
                a = function(e) {
                  var n,
                    o,
                    a,
                    s = i ? e.ok : e.fail,
                    u = e.resolve,
                    c = e.reject,
                    f = e.domain;
                  try {
                    s
                      ? (i || (2 == t._h && z(t), (t._h = 1)),
                        !0 === s
                          ? (n = r)
                          : (f && f.enter(),
                            (n = s(r)),
                            f && (f.exit(), (a = !0))),
                        n === e.promise
                          ? c(S('Promise-chain cycle'))
                          : (o = N(n))
                          ? o.call(n, u, c)
                          : u(n))
                      : c(r);
                  } catch (t) {
                    f && !a && f.exit(), c(t);
                  }
                };
              n.length > o;

            )
              a(n[o++]);
            (t._c = []), (t._n = !1), e && !t._h && R(t);
          });
        }
      },
      R = function(t) {
        w.call(u, function() {
          var e,
            n,
            r,
            i = t._v,
            o = C(t);
          if (
            (o &&
              ((e = b(function() {
                P
                  ? k.emit('unhandledRejection', i, t)
                  : (n = u.onunhandledrejection)
                  ? n({ promise: t, reason: i })
                  : (r = u.console) &&
                    r.error &&
                    r.error('Unhandled promise rejection', i);
              })),
              (t._h = P || C(t) ? 2 : 1)),
            (t._a = void 0),
            o && e.e)
          )
            throw e.v;
        });
      },
      C = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      z = function(t) {
        w.call(u, function() {
          var e;
          P
            ? k.emit('rejectionHandled', t)
            : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v });
        });
      },
      D = function(t) {
        var e = this;
        e._d ||
          ((e._d = !0),
          ((e = e._w || e)._v = t),
          (e._s = 2),
          e._a || (e._a = e._c.slice()),
          A(e, !0));
      },
      F = function(t) {
        var e,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === t) throw S("Promise can't be resolved itself");
            (e = N(t))
              ? m(function() {
                  var r = { _w: n, _d: !1 };
                  try {
                    e.call(t, c(F, r, 1), c(D, r, 1));
                  } catch (t) {
                    D.call(r, t);
                  }
                })
              : ((n._v = t), (n._s = 1), A(n, !1));
          } catch (t) {
            D.call({ _w: n, _d: !1 }, t);
          }
        }
      };
    M ||
      ((T = function(t) {
        v(this, T, 'Promise', '_h'), p(t), r.call(this);
        try {
          t(c(F, this, 1), c(D, this, 1));
        } catch (t) {
          D.call(this, t);
        }
      }),
      ((r = function(t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(108)(T.prototype, {
        then: function(t, e) {
          var n = L(y(this, T));
          return (
            (n.ok = 'function' != typeof t || t),
            (n.fail = 'function' == typeof e && e),
            (n.domain = P ? k.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && A(this, !1),
            n.promise
          );
        },
        catch: function(t) {
          return this.then(void 0, t);
        },
      })),
      (o = function() {
        var t = new r();
        (this.promise = t),
          (this.resolve = c(F, t, 1)),
          (this.reject = c(D, t, 1));
      }),
      (g.f = L = function(t) {
        return t === T || t === a ? new o(t) : i(t);
      })),
      l(l.G + l.W + l.F * !M, { Promise: T }),
      n(27)(T, 'Promise'),
      n(109)('Promise'),
      (a = n(3).Promise),
      l(l.S + l.F * !M, 'Promise', {
        reject: function(t) {
          var e = L(this);
          return (0, e.reject)(t), e.promise;
        },
      }),
      l(l.S + l.F * (s || !M), 'Promise', {
        resolve: function(t) {
          return x(s && this === a ? T : this, t);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              M &&
              n(110)(function(t) {
                T.all(t).catch(j);
              })
            ),
        'Promise',
        {
          all: function(t) {
            var e = this,
              n = L(e),
              r = n.resolve,
              i = n.reject,
              o = b(function() {
                var n = [],
                  o = 0,
                  a = 1;
                h(t, !1, function(t) {
                  var s = o++,
                    u = !1;
                  n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                      u || ((u = !0), (n[s] = t), --a || r(n));
                    }, i);
                }),
                  --a || r(n);
              });
            return o.e && i(o.v), n.promise;
          },
          race: function(t) {
            var e = this,
              n = L(e),
              r = n.reject,
              i = b(function() {
                h(t, !1, function(t) {
                  e.resolve(t).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          },
        }
      );
  },
  function(t, e) {
    t.exports = function(t, e, n, r) {
      if (!(t instanceof e) || (void 0 !== r && r in t))
        throw TypeError(n + ': incorrect invocation!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(21),
      i = n(102),
      o = n(103),
      a = n(6),
      s = n(43),
      u = n(104),
      c = {},
      f = {};
    ((e = t.exports = function(t, e, n, l, d) {
      var p,
        v,
        h,
        y,
        w = d
          ? function() {
              return t;
            }
          : u(t),
        m = r(n, l, e ? 2 : 1),
        g = 0;
      if ('function' != typeof w) throw TypeError(t + ' is not iterable!');
      if (o(w)) {
        for (p = s(t.length); p > g; g++)
          if ((y = e ? m(a((v = t[g]))[0], v[1]) : m(t[g])) === c || y === f)
            return y;
      } else
        for (h = w.call(t); !(v = h.next()).done; )
          if ((y = i(h, m, v.value, e)) === c || y === f) return y;
    }).BREAK = c),
      (e.RETURN = f);
  },
  function(t, e, n) {
    var r = n(6);
    t.exports = function(t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && r(o.call(t)), e);
      }
    };
  },
  function(t, e, n) {
    var r = n(18),
      i = n(5)('iterator'),
      o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  },
  function(t, e, n) {
    var r = n(53),
      i = n(5)('iterator'),
      o = n(18);
    t.exports = n(3).getIteratorMethod = function(t) {
      if (void 0 != t) return t[i] || t['@@iterator'] || o[r(t)];
    };
  },
  function(t, e) {
    t.exports = function(t, e, n) {
      var r = void 0 === n;
      switch (e.length) {
        case 0:
          return r ? t() : t.call(n);
        case 1:
          return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
          return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
          return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
          return r
            ? t(e[0], e[1], e[2], e[3])
            : t.call(n, e[0], e[1], e[2], e[3]);
      }
      return t.apply(n, e);
    };
  },
  function(t, e, n) {
    var r = n(2),
      i = n(55).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      s = r.Promise,
      u = 'process' == n(16)(a);
    t.exports = function() {
      var t,
        e,
        n,
        c = function() {
          var r, i;
          for (u && (r = a.domain) && r.exit(); t; ) {
            (i = t.fn), (t = t.next);
            try {
              i();
            } catch (r) {
              throw (t ? n() : (e = void 0), r);
            }
          }
          (e = void 0), r && r.enter();
        };
      if (u)
        n = function() {
          a.nextTick(c);
        };
      else if (!o || (r.navigator && r.navigator.standalone))
        if (s && s.resolve) {
          var f = s.resolve(void 0);
          n = function() {
            f.then(c);
          };
        } else
          n = function() {
            i.call(r, c);
          };
      else {
        var l = !0,
          d = document.createTextNode('');
        new o(c).observe(d, { characterData: !0 }),
          (n = function() {
            d.data = l = !l;
          });
      }
      return function(r) {
        var i = { fn: r, next: void 0 };
        e && (e.next = i), t || ((t = i), n()), (e = i);
      };
    };
  },
  function(t, e, n) {
    var r = n(2).navigator;
    t.exports = (r && r.userAgent) || '';
  },
  function(t, e, n) {
    var r = n(10);
    t.exports = function(t, e, n) {
      for (var i in e) n && t[i] ? (t[i] = e[i]) : r(t, i, e[i]);
      return t;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(2),
      i = n(3),
      o = n(8),
      a = n(9),
      s = n(5)('species');
    t.exports = function(t) {
      var e = 'function' == typeof i[t] ? i[t] : r[t];
      a &&
        e &&
        !e[s] &&
        o.f(e, s, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(t, e, n) {
    var r = n(5)('iterator'),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function() {
        i = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function() {
          return { done: (n = !0) };
        }),
          (o[r] = function() {
            return a;
          }),
          t(o);
      } catch (t) {}
      return n;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(7),
      i = n(3),
      o = n(2),
      a = n(54),
      s = n(57);
    r(r.P + r.R, 'Promise', {
      finally: function(t) {
        var e = a(this, i.Promise || o.Promise),
          n = 'function' == typeof t;
        return this.then(
          n
            ? function(n) {
                return s(e, t()).then(function() {
                  return n;
                });
              }
            : t,
          n
            ? function(n) {
                return s(e, t()).then(function() {
                  throw n;
                });
              }
            : t
        );
      },
    });
  },
  function(t, e, n) {
    'use strict';
    var r = n(7),
      i = n(37),
      o = n(56);
    r(r.S, 'Promise', {
      try: function(t) {
        var e = i.f(this),
          n = o(t);
        return (n.e ? e.reject : e.resolve)(n.v), e.promise;
      },
    });
  },
  function(t, e, n) {
    n(114), (t.exports = n(3).Reflect.defineProperty);
  },
  function(t, e, n) {
    var r = n(8),
      i = n(7),
      o = n(6),
      a = n(22);
    i(
      i.S +
        i.F *
          n(12)(function() {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      'Reflect',
      {
        defineProperty: function(t, e, n) {
          o(t), (e = a(e, !0)), o(n);
          try {
            return r.f(t, e, n), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
  },
  function(t, e, n) {
    n(116), (t.exports = n(3).Reflect.apply);
  },
  function(t, e, n) {
    var r = n(7),
      i = n(15),
      o = n(6),
      a = (n(2).Reflect || {}).apply,
      s = Function.apply;
    r(
      r.S +
        r.F *
          !n(12)(function() {
            a(function() {});
          }),
      'Reflect',
      {
        apply: function(t, e, n) {
          var r = i(t),
            u = o(n);
          return a ? a(r, e, u) : s.call(r, e, u);
        },
      }
    );
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var r = n(4),
      i = n.n(r),
      o = n(1),
      a = n.n(o),
      s = n(58),
      u = n.n(s),
      c = n(38),
      f = n.n(c),
      l = n(0),
      d = n.n(l),
      p = n(19),
      v = n.n(p),
      h = n(59),
      y = n.n(h),
      w = n(60),
      m = n.n(w),
      g = new ((function() {
        function t() {
          y()(this, t),
            (this.handlers = []),
            (this.isDispatching = !1),
            (this.pendingPayload = null);
        }
        return (
          m()(t, [
            {
              key: 'register',
              value: function(t) {
                this.handlers.push({
                  isPending: !1,
                  isHandled: !1,
                  callback: t,
                });
              },
            },
            {
              key: 'dispatch',
              value: function(t) {
                var e = this;
                if (this.isDispatching) throw new Error('cannot dispatch');
                this.handlers.forEach(function(t) {
                  (t.isPending = !1), (t.isHandled = !1);
                }),
                  (this.pendingPayload = v()({}, t)),
                  (this.isDispatching = !0);
                try {
                  this.handlers.forEach(function(t) {
                    t.isPending ||
                      ((t.isPending = !0),
                      t.callback(e.pendingPayload),
                      (t.isHandled = !0));
                  });
                } finally {
                  (this.isDispatching = !1), (this.pendingPayload = null);
                }
              },
            },
          ]),
          t
        );
      })())(),
      b = function(t) {
        j({
          event_id: d()(),
          trace_id: O,
          event_type: 'leave_page',
          page: { page_name: A.data.event.page.page_name, page_url: t },
        }),
          g.dispatch(A);
      },
      _ = {
        set: function(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 9999;
          if (S()) {
            var r = document.domain,
              i = Date.now() + 60 * n * 60 * 1e3;
            document.cookie =
              '_trace_' +
              t +
              '=' +
              escape(e) +
              ';path=/;expires=' +
              i +
              ';domain=' +
              r +
              ';';
          }
          x() && wx.setStorage({ key: '_trace_' + t, data: e });
        },
        get: function(t) {
          if (x()) return wx.getStorageSync('_trace_' + t);
          if (S()) {
            var e = document.cookie.match(
              '(^|;) ?_trace_' + t + '=([^;]*)(;|$)'
            );
            return e ? e[2] : null;
          }
        },
        del: function(t) {
          x() && wx.removeStorage({ key: '_trace_' + t }),
            S() && set('_trace_' + t, '', -1);
        },
      };
    function x() {
      return 'undefined' != typeof wx && void 0 !== wx.getStorageSync;
    }
    function S() {
      return 'undefined' != typeof document && void 0 !== document.cookie;
    }
    var k = {
        id: '',
        time: '',
        ip: '',
        host: '',
        fmt: 'json',
        key: '',
        topic: '',
        v: 'v1.0',
        data_type: 'front_event',
        data_source: 'jufan',
        extra: {},
        data: {
          time: Date.now(),
          location: {
            lat: '',
            lng: '',
            geo_hash: '',
            country_code: '',
            city_code: '',
            reverse_location_name: '',
            ip: '',
          },
          user: { id_type: '', uid: '', hid: '', t_uid: N('uid') },
          event: {
            event_id: '',
            trace_id: '',
            biz_info: {
              channel: '',
              platform: '',
              biz_id: '',
              biz_id_sub: '',
              v: '',
            },
            event_type: '',
            event_msg: '',
            entity_info: {
              entity_id: '',
              entity_name: '',
              entity_type: '',
              entity_position: { left: '', top: '' },
              entity_status: '',
            },
            network: { url: '', path: '', status_code: '', latency: '' },
            page: { page_name: '', page_url: '' },
          },
          run_env: {
            device_info: {
              device_id: N('deviceId'),
              os: '',
              os_name: '',
              os_version: '',
              front_type: '',
              client_version: '',
              client_name: '',
              imei: '',
              mac: '',
              idfa: '',
              idfv: '',
              system_language: '',
              screen_width: '',
              screen_height: '',
              time_zone: '',
              device_type: '',
              download_source: '',
            },
            net_info: { network_type: '', network_name: '', net_provider: '' },
          },
        },
      },
      O = null;
    function E(t) {
      k.data.event.trace_id = t;
    }
    function T() {
      return k.data.event.trace_id || d()();
    }
    function P() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      k.data.location = a()(k.data.location, t);
    }
    function j() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      k.data.event = a()(k.data.event, t);
    }
    function L(t) {
      k.data.user.uid = t;
    }
    function M() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      k.data.event.biz_info = a()(k.data.event.biz_info, t);
    }
    function N(t) {
      var e = _.get(t);
      return (
        e ||
          ((e = ('undefined' != typeof wx && wx.getOpenDeviceId()) || d()()),
          _.set(t, e)),
        e
      );
    }
    var A = k,
      R = n(39),
      C = n.n(R),
      z = n(61),
      D = n.n(z),
      F = n(62),
      I = n.n(F),
      G = n(20),
      B = n.n(G),
      V = function(t) {
        var e,
          n = t.before,
          r = t.after,
          i = t.isAsync;
        return (
          (e =
            void 0 !== i && i
              ? function(t) {
                  return D()(
                    C.a.mark(function e() {
                      var i,
                        o,
                        a,
                        s,
                        u = arguments;
                      return C.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = null),
                                  (o = 'function' == typeof n ? n : null),
                                  (a = 'function' == typeof r ? r : null),
                                  (s = Date.now()),
                                  (e.prev = 4),
                                  o && o(),
                                  (e.next = 8),
                                  B()(t, this, u)
                                );
                              case 8:
                                (i = e.sent), a && a(s)(), (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(4)),
                                  a && a(s)(e.t0);
                              case 15:
                                return e.abrupt('return', i);
                              case 16:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 12]]
                      );
                    })
                  );
                }
              : function(t) {
                  return function() {
                    var e = null,
                      i = 'function' == typeof n ? n : null,
                      o = 'function' == typeof r ? r : null;
                    return (
                      i && i(),
                      void 0 !== t &&
                        ((e = B()(t, this, arguments)), o && o()()),
                      e
                    );
                  };
                }),
          function(t, n, r) {
            if (!t && !n && !r) return e();
            var i = r.configurable,
              o = r.enumerable,
              a = r.value,
              s = r.get,
              u = r.initializer;
            return a
              ? { configurable: i, enumerable: o, value: e(a) }
              : s || u
              ? {
                  configurable: i,
                  enumerable: o,
                  get: function() {
                    var t = u ? B()(u, this, []) : B()(s, this, []),
                      r = e(t).bind(this);
                    return (
                      I()(this, n, {
                        configurable: i,
                        enumerable: o,
                        value: r,
                      }),
                      r
                    );
                  },
                }
              : void 0;
          }
        );
      },
      U = function(t, e) {
        var n = t.name,
          r = void 0 === n ? '' : n,
          o = t.nameCN,
          s = void 0 === o ? '' : o;
        return function() {
          var t = function() {
            var t = d()();
            j({ trace_id: t });
            var n = JSON.parse(i()(A)),
              o = n.data.event.biz_info;
            (n.data.event.event_id = t),
              (n.data.event.event_type = 'click'),
              (n.data.event.entity_info = a()(n.data.event.entity_info, {
                entity_name: s,
                entity_type: e,
                entity_id:
                  o.platform + '.' + o.channel + '.' + o.biz_id + '.' + r,
              })),
              g.dispatch(n);
          };
          return 1 === arguments.length
            ? (t(), arguments.length <= 0 ? void 0 : arguments[0])
            : V({ before: t }).apply(void 0, arguments);
        };
      },
      q = {
        default: function(t) {
          j(t), g.dispatch(A);
        },
        btn: function(t) {
          return function() {
            return U(t, 'button').apply(void 0, arguments);
          };
        },
        img: function(t) {
          return function() {
            return U(t, 'image').apply(void 0, arguments);
          };
        },
        link: function(t) {
          return function() {
            return U(t, 'link').apply(void 0, arguments);
          };
        },
        change: function(t) {
          return (function(t) {
            var e = t.name,
              n = t.nameCN,
              r = t.value,
              o = d()();
            j({ trace_id: o });
            var s = JSON.parse(i()(A)),
              u = s.data.event.biz_info;
            (s.data.event.event_id = o),
              (s.data.event.event_type = 'change'),
              (s.data.event.event_msg = r),
              (s.data.event.entity_info = a()(s.data.event.entity_info, {
                entity_name: n,
                entity_type: 'change',
                entity_id:
                  u.platform + '.' + u.channel + '.' + u.biz_id + '.' + e,
              })),
              g.dispatch(s);
          })(t);
        },
        ipt: function(t) {
          return (function(t) {
            var e = t.name,
              n = void 0 === e ? '' : e,
              r = t.nameCN,
              o = void 0 === r ? '' : r,
              s = t.value,
              u = void 0 === s ? '' : s,
              c = d()();
            j({ trace_id: c });
            var f = JSON.parse(i()(A)),
              l = f.data.event.biz_info;
            (f.data.event.event_id = c),
              (f.data.event.event_type = 'input'),
              (f.data.event.event_msg = u),
              (f.data.event.entity_info = a()(f.data.event.entity_info, {
                entity_name: o,
                entity_type: 'input',
                entity_id:
                  l.platform + '.' + l.channel + '.' + l.biz_id + '.' + n,
              })),
              g.dispatch(f);
          })(t);
        },
      },
      H = function(t) {
        return function(e) {
          return j(t), g.dispatch(A), e;
        };
      };
    function J(t) {
      var e = t.url,
        n = {
          event_type: 'request',
          event_id: d()(),
          trace_id: A.data.event.trace_id || d()(),
          network: { latency: 0, url: e, path: '', status_code: 0 },
        },
        r = JSON.parse(i()(A));
      (r.data.event = a()(r.data.event, n)), g.dispatch(r);
    }
    function W(t) {
      var e = t.totalTime,
        n = t.url,
        r = t.busCode,
        o = {
          event_id: d()(),
          event_type: 'response',
          trace_id: A.data.event.trace_id || d()(),
          network: { latency: e, url: n, path: '', status_code: r },
        },
        s = JSON.parse(i()(A));
      (s.data.event = a()(s.data.event, o)), g.dispatch(s);
    }
    n.d(e, 'init', function() {
      return tt;
    }),
      n.d(e, 'setUID', function() {
        return et;
      }),
      n.d(e, 'track', function() {
        return nt;
      }),
      n.d(e, 'trackFetchDeco', function() {
        return rt;
      }),
      n.d(e, 'pageLoad', function() {
        return it;
      }),
      n.d(e, 'setGeo', function() {
        return P;
      }),
      n.d(e, 'setTrackId', function() {
        return E;
      }),
      n.d(e, 'trackDeco', function() {
        return H;
      }),
      n.d(e, 'getTrackId', function() {
        return T;
      }),
      n.d(e, 'trackResponse', function() {
        return W;
      }),
      n.d(e, 'trackRequest', function() {
        return J;
      }),
      n.d(e, 'setBizInfo', function() {
        return M;
      });
    var K,
      X,
      Y,
      Q = ((K = {
        getGeo: function(t) {
          navigator &&
            navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
              function(e) {
                t({ lat: e.coords.latitude, lng: e.coords.longitude });
              },
              null,
              null
            );
        },
        getDeviceInfo: function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = new u.a.UAParser();
          return a()(t, {
            os: e.getOS().name.toLowerCase(),
            os_name: e.getOS().name.toLowerCase(),
            os_version: e.getOS().version,
            screen_width: screen.width,
            screen_height: screen.height,
          });
        },
        request: function(t, e) {
          if ('function' == typeof navigator.sendBeacon)
            navigator.sendBeacon(t, i()(e));
          else {
            var n = new XMLHttpRequest();
            n.open('POST', t, !0),
              (n.onreadystatechange = function() {
                if (4 === n.readyState && 200 !== n.status) {
                  var t = 'Bad HTTP status: ' + n.status + ' ' + n.statusText;
                  console.error(t);
                }
              }),
              n.send(i()(e));
          }
        },
        onLoad: function(t) {
          return window.addEventListener(
            'load',
            t.bind(null, window.location.href)
          );
        },
        onUnLoad: function(t) {
          return window.addEventListener(
            'beforeunload',
            t.bind(null, window.location.href)
          );
        },
        onHashChange: function(t) {
          return function(e) {
            t
              ? window.addEventListener('hashchange', function(t) {
                  return e(t.oldURL);
                })
              : (!(function(t) {
                  var e = t.pushState;
                  t.pushState = function(n) {
                    return (
                      'function' == typeof t.onpushstate &&
                        t.onpushstate({ state: n }),
                      e.apply(t, arguments)
                    );
                  };
                })(window.history),
                (window.onpopstate = history.onpushstate = function(t) {
                  if (t instanceof PopStateEvent);
                  else {
                    var n = window.location.href;
                    e(n);
                  }
                }));
          };
        },
        sysInfo: null,
      }),
      function(t) {
        t.token;
        var e = t.bizInfo,
          n = t.host,
          r =
            void 0 === n
              ? 'https://data-platform.juxiangfen.com/front-event/v1/event'
              : n,
          i = t.payload,
          o = void 0 === i ? null : i,
          s = t.isSpa,
          u = void 0 === s || s,
          c = t.autoSetGeo,
          l = void 0 === c || c,
          d = t.frontType,
          p = void 0 === d ? 'h5' : d,
          v = t.extra;
        (k.data.run_env.device_info.front_type = p),
          (function() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            k.data.run_env.device_info = a()(k.data.run_env.device_info, t);
          })(K.getDeviceInfo()),
          (k.extra = a()(k.extra, v || {})),
          (k.data.event.biz_info = a()(k.data.event.biz_info, e)),
          o && 'function' == typeof o
            ? g.register(o)
            : g.register(function(t) {
                l && K.getGeo && K.getGeo(P);
                try {
                  (t.data.time = Date.now()),
                    (function t(e) {
                      var n = e;
                      if ('object' === (void 0 === n ? 'undefined' : f()(n)))
                        for (var r in n)
                          (void 0 !== n[r] &&
                            null !== n[r] &&
                            'undefined' !== n[r] &&
                            'null' !== n[r]) ||
                            (n[r] = ''),
                            f()('object' === n[r]) && (n[r] = t(n[r]));
                      return n;
                    })(t),
                    K.request(r, t);
                } catch (t) {
                  console.error(t);
                }
              }),
          K.onHashChange &&
            K.onHashChange(u)(function(t) {
              b(t);
            }),
          K.onUnLoad && K.onUnLoad(b);
      }),
      $ = ((X = function() {
        return window.location.href;
      }),
      function(t) {
        return function() {
          return V({
            before: function() {
              j({
                event_type: 'request',
                event_id: d()(),
                trace_id: A.data.event.trace_id || d()(),
              });
              var t = v()({}, A);
              g.dispatch(v()({}, t));
            },
            after: function(t) {
              return function(e) {
                var n = Date.now() - t;
                j({
                  event_id: d()(),
                  event_type: 'response',
                  network: { latency: n, url: X(), path: '', status_code: 200 },
                });
                var r = JSON.parse(i()(A));
                (r.data.event.network.status_message = (e && e.message) || ''),
                  g.dispatch(r);
              };
            },
            isAsync: !0,
          }).apply(void 0, arguments);
        };
      }),
      Z = ((Y = function() {
        return window.location.href;
      }),
      function(t) {
        if (!t) throw new Error('track:pageName不能为空');
        var e,
          n = d()(),
          r = {
            event_id: n,
            trace_id: n,
            event_type: 'enter_page',
            page: { page_name: t },
          };
        (e = Date.now()),
          e,
          (O = n),
          j(r),
          setTimeout(function() {
            (r.page.page_url = Y()), j(r), g.dispatch(A);
          }, 0);
      }),
      tt = Q,
      et = L,
      nt = q,
      rt = $,
      it = Z;
    (window.track = nt),
      (window.init = Q),
      (window.setUID = L),
      (window.setGeo = P),
      (window.trackDeco = H),
      (window.trackFetchDeco = rt),
      (window.pageLoad = Z),
      (window.getTrackId = T),
      (window.trackRequest = J),
      (window.trackResponse = W),
      (window.setBizInfo = M);
    e.default = {
      init: tt,
      setUID: et,
      setGeo: P,
      setTrackId: E,
      track: nt,
      trackDeco: H,
      trackFetchDeco: rt,
      pageLoad: it,
      getTrackId: T,
      trackResponse: W,
      trackRequest: J,
      setBizInfo: M,
    };
  },
]);
