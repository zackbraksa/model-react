import * as b from "react";
import ot, { Children as Fs, isValidElement as hn, cloneElement as bn, useState as As } from "react";
import { useSelector as Dt } from "react-redux";
import { AppBar as js, Toolbar as ti, Autocomplete as Bs, TextField as Ws, Typography as ni, Drawer as Ls, Box as oi, List as zs, ListItem as Vs, ListItemButton as Us, ListItemIcon as qs, ListItemText as Ks, Container as Gs, Grid as Ho } from "@mui/material";
import { useNavigate as Hs, Routes as Ys, Route as Yo } from "react-router-dom";
import { FactoryOutlined as Xs, KeyOutlined as Js, AssignmentTurnedInOutlined as Zs, TextSnippetOutlined as Qs } from "@mui/icons-material";
import { DataGrid as ea } from "@mui/x-data-grid";
import ta from "@emotion/styled";
import { Global as na, keyframes as vo } from "@emotion/react";
import * as oa from "react-dom";
import dn, { flushSync as ra } from "react-dom";
var tn = {}, ia = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
}, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function sa() {
  if (Xo)
    return zt;
  Xo = 1;
  var e = ot, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, m = {}, p = null, x = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (d in c)
      r.call(c, d) && !s.hasOwnProperty(d) && (m[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: n, type: l, key: p, ref: x, props: m, _owner: i.current };
  }
  return zt.Fragment = o, zt.jsx = a, zt.jsxs = a, zt;
}
var Vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function aa() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ot, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E = Symbol.iterator, g = "@@iterator";
    function v(f) {
      if (f === null || typeof f != "object")
        return null;
      var _ = E && f[E] || f[g];
      return typeof _ == "function" ? _ : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(f) {
      {
        for (var _ = arguments.length, W = new Array(_ > 1 ? _ - 1 : 0), se = 1; se < _; se++)
          W[se - 1] = arguments[se];
        C("error", f, W);
      }
    }
    function C(f, _, W) {
      {
        var se = S.ReactDebugCurrentFrame, me = se.getStackAddendum();
        me !== "" && (_ += "%s", W = W.concat([me]));
        var Re = W.map(function(de) {
          return String(de);
        });
        Re.unshift("Warning: " + _), Function.prototype.apply.call(console[f], console, Re);
      }
    }
    var T = !1, y = !1, P = !1, N = !1, B = !1, F;
    F = Symbol.for("react.module.reference");
    function D(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || B || f === i || f === u || f === d || N || f === x || T || y || P || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === m || f.$$typeof === a || f.$$typeof === l || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === F || f.getModuleId !== void 0));
    }
    function V(f, _, W) {
      var se = f.displayName;
      if (se)
        return se;
      var me = _.displayName || _.name || "";
      return me !== "" ? W + "(" + me + ")" : W;
    }
    function ee(f) {
      return f.displayName || "Context";
    }
    function U(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case o:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var _ = f;
            return ee(_) + ".Consumer";
          case a:
            var W = f;
            return ee(W._context) + ".Provider";
          case c:
            return V(f, f.render, "ForwardRef");
          case m:
            var se = f.displayName || null;
            return se !== null ? se : U(f.type) || "Memo";
          case p: {
            var me = f, Re = me._payload, de = me._init;
            try {
              return U(de(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, A = 0, M, oe, ie, ce, O, $, L;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function j() {
      {
        if (A === 0) {
          M = console.log, oe = console.info, ie = console.warn, ce = console.error, O = console.group, $ = console.groupCollapsed, L = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        A++;
      }
    }
    function Y() {
      {
        if (A--, A === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, f, {
              value: M
            }),
            info: k({}, f, {
              value: oe
            }),
            warn: k({}, f, {
              value: ie
            }),
            error: k({}, f, {
              value: ce
            }),
            group: k({}, f, {
              value: O
            }),
            groupCollapsed: k({}, f, {
              value: $
            }),
            groupEnd: k({}, f, {
              value: L
            })
          });
        }
        A < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = S.ReactCurrentDispatcher, J;
    function Z(f, _, W) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (me) {
            var se = me.stack.trim().match(/\n( *(at )?)/);
            J = se && se[1] || "";
          }
        return `
` + J + f;
      }
    }
    var H = !1, Q;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new X();
    }
    function I(f, _) {
      if (!f || H)
        return "";
      {
        var W = Q.get(f);
        if (W !== void 0)
          return W;
      }
      var se;
      H = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = z.current, z.current = null, j();
      try {
        if (_) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (st) {
              se = st;
            }
            Reflect.construct(f, [], de);
          } else {
            try {
              de.call();
            } catch (st) {
              se = st;
            }
            f.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (st) {
            se = st;
          }
          f();
        }
      } catch (st) {
        if (st && se && typeof st.stack == "string") {
          for (var ue = st.stack.split(`
`), Be = se.stack.split(`
`), ke = ue.length - 1, De = Be.length - 1; ke >= 1 && De >= 0 && ue[ke] !== Be[De]; )
            De--;
          for (; ke >= 1 && De >= 0; ke--, De--)
            if (ue[ke] !== Be[De]) {
              if (ke !== 1 || De !== 1)
                do
                  if (ke--, De--, De < 0 || ue[ke] !== Be[De]) {
                    var Xe = `
` + ue[ke].replace(" at new ", " at ");
                    return f.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", f.displayName)), typeof f == "function" && Q.set(f, Xe), Xe;
                  }
                while (ke >= 1 && De >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = Re, Y(), Error.prepareStackTrace = me;
      }
      var Rt = f ? f.displayName || f.name : "", Go = Rt ? Z(Rt) : "";
      return typeof f == "function" && Q.set(f, Go), Go;
    }
    function fe(f, _, W) {
      return I(f, !1);
    }
    function q(f) {
      var _ = f.prototype;
      return !!(_ && _.isReactComponent);
    }
    function $e(f, _, W) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return I(f, q(f));
      if (typeof f == "string")
        return Z(f);
      switch (f) {
        case u:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return fe(f.render);
          case m:
            return $e(f.type, _, W);
          case p: {
            var se = f, me = se._payload, Re = se._init;
            try {
              return $e(Re(me), _, W);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, Ae = {}, Pe = S.ReactDebugCurrentFrame;
    function je(f) {
      if (f) {
        var _ = f._owner, W = $e(f.type, f._source, _ ? _.type : null);
        Pe.setExtraStackFrame(W);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ke(f, _, W, se, me) {
      {
        var Re = Function.call.bind(Fe);
        for (var de in f)
          if (Re(f, de)) {
            var ue = void 0;
            try {
              if (typeof f[de] != "function") {
                var Be = Error((se || "React class") + ": " + W + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ue = f[de](_, de, se, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              ue = ke;
            }
            ue && !(ue instanceof Error) && (je(me), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", W, de, typeof ue), je(null)), ue instanceof Error && !(ue.message in Ae) && (Ae[ue.message] = !0, je(me), w("Failed %s type: %s", W, ue.message), je(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ge(f) {
      return Me(f);
    }
    function He(f) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, W = _ && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return W;
      }
    }
    function et(f) {
      try {
        return We(f), !1;
      } catch {
        return !0;
      }
    }
    function We(f) {
      return "" + f;
    }
    function Ye(f) {
      if (et(f))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(f)), We(f);
    }
    var Le = S.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, G, he;
    he = {};
    function Ie(f) {
      if (Fe.call(f, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function ze(f) {
      if (Fe.call(f, "key")) {
        var _ = Object.getOwnPropertyDescriptor(f, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ft(f, _) {
      if (typeof f.ref == "string" && Le.current && _ && Le.current.stateNode !== _) {
        var W = U(Le.current.type);
        he[W] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Le.current.type), f.ref), he[W] = !0);
      }
    }
    function cn(f, _) {
      {
        var W = function() {
          re || (re = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function un(f, _) {
      {
        var W = function() {
          G || (G = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var tt = function(f, _, W, se, me, Re, de) {
      var ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: f,
        key: _,
        ref: W,
        props: de,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return ue._store = {}, Object.defineProperty(ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ue.props), Object.freeze(ue)), ue;
    };
    function Kn(f, _, W, se, me) {
      {
        var Re, de = {}, ue = null, Be = null;
        W !== void 0 && (Ye(W), ue = "" + W), ze(_) && (Ye(_.key), ue = "" + _.key), Ie(_) && (Be = _.ref, ft(_, me));
        for (Re in _)
          Fe.call(_, Re) && !pe.hasOwnProperty(Re) && (de[Re] = _[Re]);
        if (f && f.defaultProps) {
          var ke = f.defaultProps;
          for (Re in ke)
            de[Re] === void 0 && (de[Re] = ke[Re]);
        }
        if (ue || Be) {
          var De = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ue && cn(de, De), Be && un(de, De);
        }
        return tt(f, ue, Be, me, se, Le.current, de);
      }
    }
    var nt = S.ReactCurrentOwner, Ct = S.ReactDebugCurrentFrame;
    function it(f) {
      if (f) {
        var _ = f._owner, W = $e(f.type, f._source, _ ? _.type : null);
        Ct.setExtraStackFrame(W);
      } else
        Ct.setExtraStackFrame(null);
    }
    var Gn;
    Gn = !1;
    function Hn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === n;
    }
    function zo() {
      {
        if (nt.current) {
          var f = U(nt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function $s(f) {
      {
        if (f !== void 0) {
          var _ = f.fileName.replace(/^.*[\\\/]/, ""), W = f.lineNumber;
          return `

Check your code at ` + _ + ":" + W + ".";
        }
        return "";
      }
    }
    var Vo = {};
    function Ps(f) {
      {
        var _ = zo();
        if (!_) {
          var W = typeof f == "string" ? f : f.displayName || f.name;
          W && (_ = `

Check the top-level render call using <` + W + ">.");
        }
        return _;
      }
    }
    function Uo(f, _) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var W = Ps(_);
        if (Vo[W])
          return;
        Vo[W] = !0;
        var se = "";
        f && f._owner && f._owner !== nt.current && (se = " It was passed a child from " + U(f._owner.type) + "."), it(f), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, se), it(null);
      }
    }
    function qo(f, _) {
      {
        if (typeof f != "object")
          return;
        if (Ge(f))
          for (var W = 0; W < f.length; W++) {
            var se = f[W];
            Hn(se) && Uo(se, _);
          }
        else if (Hn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var me = v(f);
          if (typeof me == "function" && me !== f.entries)
            for (var Re = me.call(f), de; !(de = Re.next()).done; )
              Hn(de.value) && Uo(de.value, _);
        }
      }
    }
    function Ns(f) {
      {
        var _ = f.type;
        if (_ == null || typeof _ == "string")
          return;
        var W;
        if (typeof _ == "function")
          W = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === m))
          W = _.propTypes;
        else
          return;
        if (W) {
          var se = U(_);
          Ke(W, f.props, "prop", se, f);
        } else if (_.PropTypes !== void 0 && !Gn) {
          Gn = !0;
          var me = U(_);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _s(f) {
      {
        for (var _ = Object.keys(f.props), W = 0; W < _.length; W++) {
          var se = _[W];
          if (se !== "children" && se !== "key") {
            it(f), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), it(null);
            break;
          }
        }
        f.ref !== null && (it(f), w("Invalid attribute `ref` supplied to `React.Fragment`."), it(null));
      }
    }
    function Ko(f, _, W, se, me, Re) {
      {
        var de = D(f);
        if (!de) {
          var ue = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = $s(me);
          Be ? ue += Be : ue += zo();
          var ke;
          f === null ? ke = "null" : Ge(f) ? ke = "array" : f !== void 0 && f.$$typeof === n ? (ke = "<" + (U(f.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof f, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, ue);
        }
        var De = Kn(f, _, W, me, Re);
        if (De == null)
          return De;
        if (de) {
          var Xe = _.children;
          if (Xe !== void 0)
            if (se)
              if (Ge(Xe)) {
                for (var Rt = 0; Rt < Xe.length; Rt++)
                  qo(Xe[Rt], f);
                Object.freeze && Object.freeze(Xe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(Xe, f);
        }
        return f === r ? _s(De) : Ns(De), De;
      }
    }
    function Is(f, _, W) {
      return Ko(f, _, W, !0);
    }
    function ks(f, _, W) {
      return Ko(f, _, W, !1);
    }
    var Ms = ks, Ds = Is;
    Vt.Fragment = r, Vt.jsx = Ms, Vt.jsxs = Ds;
  }()), Vt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = sa() : e.exports = aa();
})(ia);
const la = tn.Fragment, R = tn.jsx, Se = tn.jsxs;
function ca(e, n) {
  let o = [];
  return e.options.kind === "ent" && n[e.name] && (o = (n[e.name].ents || []).map((i) => ({
    label: i[e.options.label.field],
    ent: i
  }))), console.log("OPTIONS", o), o;
}
function ua(e) {
  const { ctx: n, spec: o } = e, { model: r, seneca: i } = n(), {
    frame: s
  } = o, a = r.app.web.frame[s].part.head, l = Object.entries(a.tool.def).map((p) => (p[1].name = p[0], p[1])), c = Dt((p) => p.main.auth.user), u = c.name || c.email;
  let d = {}, m = {};
  return l.forEach((p) => {
    if (p.kind === "autocomplete" && p.options.kind === "ent") {
      let x = p.options.ent;
      m[p.name] = {
        ents: Dt((g) => g.main.vxg.ent.list.main[x])
      };
      let E = Dt((g) => g.main.vxg.cmp.BasicHead.tool[p.name].selected);
      E && (d[p.name] = {
        label: E[p.options.label.field],
        ent: E
      });
    }
  }), /* @__PURE__ */ R(
    js,
    {
      position: "fixed",
      sx: {
        color: "black",
        bgcolor: "white",
        zIndex: (p) => p.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ Se(ti, { children: [
        /* @__PURE__ */ R(
          "img",
          {
            src: a.logo.img,
            style: { width: "10rem", marginRight: "1rem" }
          }
        ),
        l.map(
          (p) => p.kind === "autocomplete" ? /* @__PURE__ */ R(
            Bs,
            {
              value: d[p.name],
              options: ca(p, m),
              size: "small",
              sx: {
                width: "20rem"
              },
              renderInput: (x) => /* @__PURE__ */ R(Ws, { ...x, label: p.title }),
              onChange: (x, E) => {
                i.act("aim:app,set:state", {
                  section: "vxg.cmp.BasicHead.tool." + p.name + ".selected",
                  content: E.ent
                });
              },
              isOptionEqualToValue: (x, E) => {
                var g, v;
                return x === E || x != null && E != null && ((g = x.ent) == null ? void 0 : g.id) === ((v = E.ent) == null ? void 0 : v.id);
              }
            },
            p.name
          ) : /* @__PURE__ */ R(la, {})
        ),
        /* @__PURE__ */ R("div", { style: { flexGrow: 1 } }),
        /* @__PURE__ */ R(ni, { variant: "h6", children: u })
      ] })
    }
  );
}
const da = {
  factory: Xs,
  key: Js,
  done: Zs,
  docs: Qs
};
function pa(e) {
  let n = da[e];
  return /* @__PURE__ */ R(n, {});
}
function fa(e) {
  const { ctx: n, spec: o } = e, r = n().model, i = Hs(), { frame: s } = o;
  r.app.web.frame[s].part.side;
  const a = r.app.web.frame[s].view, l = Object.entries(a).map((d) => (d[1].name = d[0], d[1]));
  let c = "16rem";
  function u(d) {
    return function(m) {
      i("/view/" + d.name);
    };
  }
  return /* @__PURE__ */ Se(
    Ls,
    {
      variant: "permanent",
      sx: {
        width: c,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: { width: c, boxSizing: "border-box" }
      },
      children: [
        /* @__PURE__ */ R(ti, {}),
        /* @__PURE__ */ R(oi, { sx: { overflow: "auto" }, children: /* @__PURE__ */ R(zs, { children: l.map((d) => /* @__PURE__ */ R(Vs, { disablePadding: !0, children: /* @__PURE__ */ Se(
          Us,
          {
            onClick: u(d),
            children: [
              /* @__PURE__ */ R(qs, { children: pa(d.icon) }),
              /* @__PURE__ */ R(Ks, { primary: d.title })
            ]
          }
        ) }, d.name)) }) })
      ]
    }
  );
}
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, h.apply(this, arguments);
}
function te(e, n) {
  if (e == null)
    return {};
  var o = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(n.indexOf(i) >= 0) && (o[i] = e[i]);
  return o;
}
var t = {}, Zo = {
  get exports() {
    return t;
  },
  set exports(e) {
    t = e;
  }
}, yn = {}, ma = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
  }
}, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function ha() {
  if (Qo)
    return be;
  Qo = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case n:
          switch (y = y.type, y) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case d:
                case E:
                case x:
                case a:
                  return y;
                default:
                  return P;
              }
          }
        case o:
          return P;
      }
    }
  }
  function T(y) {
    return C(y) === u;
  }
  return be.AsyncMode = c, be.ConcurrentMode = u, be.ContextConsumer = l, be.ContextProvider = a, be.Element = n, be.ForwardRef = d, be.Fragment = r, be.Lazy = E, be.Memo = x, be.Portal = o, be.Profiler = s, be.StrictMode = i, be.Suspense = m, be.isAsyncMode = function(y) {
    return T(y) || C(y) === c;
  }, be.isConcurrentMode = T, be.isContextConsumer = function(y) {
    return C(y) === l;
  }, be.isContextProvider = function(y) {
    return C(y) === a;
  }, be.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === n;
  }, be.isForwardRef = function(y) {
    return C(y) === d;
  }, be.isFragment = function(y) {
    return C(y) === r;
  }, be.isLazy = function(y) {
    return C(y) === E;
  }, be.isMemo = function(y) {
    return C(y) === x;
  }, be.isPortal = function(y) {
    return C(y) === o;
  }, be.isProfiler = function(y) {
    return C(y) === s;
  }, be.isStrictMode = function(y) {
    return C(y) === i;
  }, be.isSuspense = function(y) {
    return C(y) === m;
  }, be.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === u || y === s || y === i || y === m || y === p || typeof y == "object" && y !== null && (y.$$typeof === E || y.$$typeof === x || y.$$typeof === a || y.$$typeof === l || y.$$typeof === d || y.$$typeof === v || y.$$typeof === S || y.$$typeof === w || y.$$typeof === g);
  }, be.typeOf = C, be;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function ba() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function C(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === u || I === s || I === i || I === m || I === p || typeof I == "object" && I !== null && (I.$$typeof === E || I.$$typeof === x || I.$$typeof === a || I.$$typeof === l || I.$$typeof === d || I.$$typeof === v || I.$$typeof === S || I.$$typeof === w || I.$$typeof === g);
    }
    function T(I) {
      if (typeof I == "object" && I !== null) {
        var fe = I.$$typeof;
        switch (fe) {
          case n:
            var q = I.type;
            switch (q) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return q;
              default:
                var $e = q && q.$$typeof;
                switch ($e) {
                  case l:
                  case d:
                  case E:
                  case x:
                  case a:
                    return $e;
                  default:
                    return fe;
                }
            }
          case o:
            return fe;
        }
      }
    }
    var y = c, P = u, N = l, B = a, F = n, D = d, V = r, ee = E, U = x, k = o, A = s, M = i, oe = m, ie = !1;
    function ce(I) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(I) || T(I) === c;
    }
    function O(I) {
      return T(I) === u;
    }
    function $(I) {
      return T(I) === l;
    }
    function L(I) {
      return T(I) === a;
    }
    function K(I) {
      return typeof I == "object" && I !== null && I.$$typeof === n;
    }
    function j(I) {
      return T(I) === d;
    }
    function Y(I) {
      return T(I) === r;
    }
    function z(I) {
      return T(I) === E;
    }
    function J(I) {
      return T(I) === x;
    }
    function Z(I) {
      return T(I) === o;
    }
    function H(I) {
      return T(I) === s;
    }
    function Q(I) {
      return T(I) === i;
    }
    function X(I) {
      return T(I) === m;
    }
    ge.AsyncMode = y, ge.ConcurrentMode = P, ge.ContextConsumer = N, ge.ContextProvider = B, ge.Element = F, ge.ForwardRef = D, ge.Fragment = V, ge.Lazy = ee, ge.Memo = U, ge.Portal = k, ge.Profiler = A, ge.StrictMode = M, ge.Suspense = oe, ge.isAsyncMode = ce, ge.isConcurrentMode = O, ge.isContextConsumer = $, ge.isContextProvider = L, ge.isElement = K, ge.isForwardRef = j, ge.isFragment = Y, ge.isLazy = z, ge.isMemo = J, ge.isPortal = Z, ge.isProfiler = H, ge.isStrictMode = Q, ge.isSuspense = X, ge.isValidElementType = C, ge.typeOf = T;
  }()), ge;
}
var tr;
function ri() {
  return tr || (tr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = ha() : e.exports = ba();
  }(ma)), yn;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yn, nr;
function ga() {
  if (nr)
    return Yn;
  nr = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yn = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var m in l)
        n.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          o.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, Yn;
}
var Xn, or;
function xo() {
  if (or)
    return Xn;
  or = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xn = e, Xn;
}
var Jn, rr;
function ii() {
  return rr || (rr = 1, Jn = Function.call.bind(Object.prototype.hasOwnProperty)), Jn;
}
var Zn, ir;
function ya() {
  if (ir)
    return Zn;
  ir = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = xo(), o = {}, r = ii();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = s[d](a, d, c, l, null, n);
          } catch (E) {
            m = E;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in o)) {
            o[m.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Zn = i, Zn;
}
var Qn, sr;
function va() {
  if (sr)
    return Qn;
  sr = 1;
  var e = ri(), n = ga(), o = xo(), r = ii(), i = ya(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Qn = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(O) {
      var $ = O && (u && O[u] || O[d]);
      if (typeof $ == "function")
        return $;
    }
    var p = "<<anonymous>>", x = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: C,
      element: T(),
      elementType: y(),
      instanceOf: P,
      node: D(),
      objectOf: B,
      oneOf: N,
      oneOfType: F,
      shape: ee,
      exact: U
    };
    function E(O, $) {
      return O === $ ? O !== 0 || 1 / O === 1 / $ : O !== O && $ !== $;
    }
    function g(O, $) {
      this.message = O, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function v(O) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, L = 0;
      function K(Y, z, J, Z, H, Q, X) {
        if (Z = Z || p, Q = Q || J, X !== o) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = Z + ":" + J;
            !$[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[fe] = !0, L++);
          }
        }
        return z[J] == null ? Y ? z[J] === null ? new g("The " + H + " `" + Q + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new g("The " + H + " `" + Q + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : O(z, J, Z, H, Q);
      }
      var j = K.bind(null, !1);
      return j.isRequired = K.bind(null, !0), j;
    }
    function S(O) {
      function $(L, K, j, Y, z, J) {
        var Z = L[K], H = M(Z);
        if (H !== O) {
          var Q = oe(Z);
          return new g(
            "Invalid " + Y + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return v($);
    }
    function w() {
      return v(a);
    }
    function C(O) {
      function $(L, K, j, Y, z) {
        if (typeof O != "function")
          return new g("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var J = L[K];
        if (!Array.isArray(J)) {
          var Z = M(J);
          return new g("Invalid " + Y + " `" + z + "` of type " + ("`" + Z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < J.length; H++) {
          var Q = O(J, H, j, Y, z + "[" + H + "]", o);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return v($);
    }
    function T() {
      function O($, L, K, j, Y) {
        var z = $[L];
        if (!l(z)) {
          var J = M(z);
          return new g("Invalid " + j + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(O);
    }
    function y() {
      function O($, L, K, j, Y) {
        var z = $[L];
        if (!e.isValidElementType(z)) {
          var J = M(z);
          return new g("Invalid " + j + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(O);
    }
    function P(O) {
      function $(L, K, j, Y, z) {
        if (!(L[K] instanceof O)) {
          var J = O.name || p, Z = ce(L[K]);
          return new g("Invalid " + Y + " `" + z + "` of type " + ("`" + Z + "` supplied to `" + j + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return v($);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(L, K, j, Y, z) {
        for (var J = L[K], Z = 0; Z < O.length; Z++)
          if (E(J, O[Z]))
            return null;
        var H = JSON.stringify(O, function(X, I) {
          var fe = oe(I);
          return fe === "symbol" ? String(I) : I;
        });
        return new g("Invalid " + Y + " `" + z + "` of value `" + String(J) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return v($);
    }
    function B(O) {
      function $(L, K, j, Y, z) {
        if (typeof O != "function")
          return new g("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var J = L[K], Z = M(J);
        if (Z !== "object")
          return new g("Invalid " + Y + " `" + z + "` of type " + ("`" + Z + "` supplied to `" + j + "`, expected an object."));
        for (var H in J)
          if (r(J, H)) {
            var Q = O(J, H, j, Y, z + "." + H, o);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return v($);
    }
    function F(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < O.length; $++) {
        var L = O[$];
        if (typeof L != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(L) + " at index " + $ + "."
          ), a;
      }
      function K(j, Y, z, J, Z) {
        for (var H = [], Q = 0; Q < O.length; Q++) {
          var X = O[Q], I = X(j, Y, z, J, Z, o);
          if (I == null)
            return null;
          I.data && r(I.data, "expectedType") && H.push(I.data.expectedType);
        }
        var fe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new g("Invalid " + J + " `" + Z + "` supplied to " + ("`" + z + "`" + fe + "."));
      }
      return v(K);
    }
    function D() {
      function O($, L, K, j, Y) {
        return k($[L]) ? null : new g("Invalid " + j + " `" + Y + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return v(O);
    }
    function V(O, $, L, K, j) {
      return new g(
        (O || "React class") + ": " + $ + " type `" + L + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function ee(O) {
      function $(L, K, j, Y, z) {
        var J = L[K], Z = M(J);
        if (Z !== "object")
          return new g("Invalid " + Y + " `" + z + "` of type `" + Z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in O) {
          var Q = O[H];
          if (typeof Q != "function")
            return V(j, Y, z, H, oe(Q));
          var X = Q(J, H, j, Y, z + "." + H, o);
          if (X)
            return X;
        }
        return null;
      }
      return v($);
    }
    function U(O) {
      function $(L, K, j, Y, z) {
        var J = L[K], Z = M(J);
        if (Z !== "object")
          return new g("Invalid " + Y + " `" + z + "` of type `" + Z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = n({}, L[K], O);
        for (var Q in H) {
          var X = O[Q];
          if (r(O, Q) && typeof X != "function")
            return V(j, Y, z, Q, oe(X));
          if (!X)
            return new g(
              "Invalid " + Y + " `" + z + "` key `" + Q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(L[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var I = X(J, Q, j, Y, z + "." + Q, o);
          if (I)
            return I;
        }
        return null;
      }
      return v($);
    }
    function k(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(k);
          if (O === null || l(O))
            return !0;
          var $ = m(O);
          if ($) {
            var L = $.call(O), K;
            if ($ !== O.entries) {
              for (; !(K = L.next()).done; )
                if (!k(K.value))
                  return !1;
            } else
              for (; !(K = L.next()).done; ) {
                var j = K.value;
                if (j && !k(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(O, $) {
      return O === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function M(O) {
      var $ = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : A($, O) ? "symbol" : $;
    }
    function oe(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var $ = M(O);
      if ($ === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ie(O) {
      var $ = oe(O);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function ce(O) {
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return x.checkPropTypes = i, x.resetWarningCache = i.resetWarningCache, x.PropTypes = x, x;
  }, Qn;
}
var eo, ar;
function xa() {
  if (ar)
    return eo;
  ar = 1;
  var e = xo();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, eo = function() {
    function r(a, l, c, u, d, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, eo;
}
if (process.env.NODE_ENV !== "production") {
  var Ea = ri(), Ta = !0;
  Zo.exports = va()(Ea.isElement, Ta);
} else
  Zo.exports = xa()();
function si(e) {
  var n, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (o = si(e[n])) && (r && (r += " "), r += o);
    else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ae() {
  for (var e, n, o = 0, r = ""; o < arguments.length; )
    (e = arguments[o++]) && (n = si(e)) && (r && (r += " "), r += n);
  return r;
}
function vn(e) {
  return typeof e == "string";
}
function Oa(e, n, o) {
  return e === void 0 || vn(e) ? n : h({}, n, {
    ownerState: h({}, n.ownerState, o)
  });
}
function Ca(e, n = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !n.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function lo(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function rn(e, n) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || n(...r);
  };
}
function gt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function ai(e) {
  if (!gt(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((o) => {
    n[o] = ai(e[o]);
  }), n;
}
function Ze(e, n, o = {
  clone: !0
}) {
  const r = o.clone ? h({}, e) : e;
  return gt(e) && gt(n) && Object.keys(n).forEach((i) => {
    i !== "__proto__" && (gt(n[i]) && i in e && gt(e[i]) ? r[i] = Ze(e[i], n[i], o) : o.clone ? r[i] = gt(n[i]) ? ai(n[i]) : n[i] : r[i] = n[i]);
  }), r;
}
function Ra(e) {
  const {
    prototype: n = {}
  } = e;
  return Boolean(n.isReactComponent);
}
function li(e, n, o, r, i) {
  const s = e[n], a = i || n;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Ra(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ci = rn(t.element, li);
ci.isRequired = rn(t.element.isRequired, li);
const sn = ci;
function Sa(e) {
  const {
    prototype: n = {}
  } = e;
  return Boolean(n.isReactComponent);
}
function wa(e, n, o, r, i) {
  const s = e[n], a = i || n;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Sa(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Eo = rn(t.elementType, wa), $a = "exact-prop: ​";
function ui(e) {
  return process.env.NODE_ENV === "production" ? e : h({}, e, {
    [$a]: (n) => {
      const o = Object.keys(n).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function dt(e) {
  let n = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    n += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + n + " for the full message.";
}
var vt = {}, Pa = {
  get exports() {
    return vt;
  },
  set exports(e) {
    vt = e;
  }
}, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Na() {
  if (lr)
    return ye;
  lr = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function g(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case e:
          switch (v = v.type, v) {
            case o:
            case i:
            case r:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case a:
                case c:
                case p:
                case m:
                case s:
                  return v;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  return ye.ContextConsumer = a, ye.ContextProvider = s, ye.Element = e, ye.ForwardRef = c, ye.Fragment = o, ye.Lazy = p, ye.Memo = m, ye.Portal = n, ye.Profiler = i, ye.StrictMode = r, ye.Suspense = u, ye.SuspenseList = d, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(v) {
    return g(v) === a;
  }, ye.isContextProvider = function(v) {
    return g(v) === s;
  }, ye.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ye.isForwardRef = function(v) {
    return g(v) === c;
  }, ye.isFragment = function(v) {
    return g(v) === o;
  }, ye.isLazy = function(v) {
    return g(v) === p;
  }, ye.isMemo = function(v) {
    return g(v) === m;
  }, ye.isPortal = function(v) {
    return g(v) === n;
  }, ye.isProfiler = function(v) {
    return g(v) === i;
  }, ye.isStrictMode = function(v) {
    return g(v) === r;
  }, ye.isSuspense = function(v) {
    return g(v) === u;
  }, ye.isSuspenseList = function(v) {
    return g(v) === d;
  }, ye.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === o || v === i || v === r || v === u || v === d || v === x || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === m || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === E || v.getModuleId !== void 0);
  }, ye.typeOf = g, ye;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function _a() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E = !1, g = !1, v = !1, S = !1, w = !1, C;
    C = Symbol.for("react.module.reference");
    function T(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === o || q === i || w || q === r || q === u || q === d || S || q === x || E || g || v || typeof q == "object" && q !== null && (q.$$typeof === p || q.$$typeof === m || q.$$typeof === s || q.$$typeof === a || q.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === C || q.getModuleId !== void 0));
    }
    function y(q) {
      if (typeof q == "object" && q !== null) {
        var $e = q.$$typeof;
        switch ($e) {
          case e:
            var Fe = q.type;
            switch (Fe) {
              case o:
              case i:
              case r:
              case u:
              case d:
                return Fe;
              default:
                var Ae = Fe && Fe.$$typeof;
                switch (Ae) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case m:
                  case s:
                    return Ae;
                  default:
                    return $e;
                }
            }
          case n:
            return $e;
        }
      }
    }
    var P = a, N = s, B = e, F = c, D = o, V = p, ee = m, U = n, k = i, A = r, M = u, oe = d, ie = !1, ce = !1;
    function O(q) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(q) {
      return ce || (ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(q) {
      return y(q) === a;
    }
    function K(q) {
      return y(q) === s;
    }
    function j(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function Y(q) {
      return y(q) === c;
    }
    function z(q) {
      return y(q) === o;
    }
    function J(q) {
      return y(q) === p;
    }
    function Z(q) {
      return y(q) === m;
    }
    function H(q) {
      return y(q) === n;
    }
    function Q(q) {
      return y(q) === i;
    }
    function X(q) {
      return y(q) === r;
    }
    function I(q) {
      return y(q) === u;
    }
    function fe(q) {
      return y(q) === d;
    }
    ve.ContextConsumer = P, ve.ContextProvider = N, ve.Element = B, ve.ForwardRef = F, ve.Fragment = D, ve.Lazy = V, ve.Memo = ee, ve.Portal = U, ve.Profiler = k, ve.StrictMode = A, ve.Suspense = M, ve.SuspenseList = oe, ve.isAsyncMode = O, ve.isConcurrentMode = $, ve.isContextConsumer = L, ve.isContextProvider = K, ve.isElement = j, ve.isForwardRef = Y, ve.isFragment = z, ve.isLazy = J, ve.isMemo = Z, ve.isPortal = H, ve.isProfiler = Q, ve.isStrictMode = X, ve.isSuspense = I, ve.isSuspenseList = fe, ve.isValidElementType = T, ve.typeOf = y;
  }()), ve;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Na() : e.exports = _a();
})(Pa);
const Ia = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ka(e) {
  const n = `${e}`.match(Ia);
  return n && n[1] || "";
}
function di(e, n = "") {
  return e.displayName || e.name || ka(e) || n;
}
function ur(e, n, o) {
  const r = di(n);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Ma(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return di(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vt.ForwardRef:
          return ur(e, e.render, "ForwardRef");
        case vt.Memo:
          return ur(e, e.type, "memo");
        default:
          return;
      }
  }
}
function jt(e, n, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[n], a = i || n;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const Da = t.oneOfType([t.func, t.object]), at = Da;
function le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : dt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function dr(...e) {
  return e.reduce((n, o) => o == null ? n : function(...i) {
    n.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function pi(e, n = 166) {
  let o;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(s, n);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function to(e, n) {
  return /* @__PURE__ */ b.isValidElement(e) && n.indexOf(e.type.muiName) !== -1;
}
function qe(e) {
  return e && e.ownerDocument || document;
}
function xt(e) {
  return qe(e).defaultView || window;
}
function Fa(e, n) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = n ? h({}, n.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const m = u || a, p = o == null ? void 0 : o[m];
    if (p) {
      const x = p(s, a, l, c, u, ...d);
      if (x)
        return x;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function co(e, n) {
  typeof e == "function" ? e(n) : e && (e.current = n);
}
const Aa = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Bt = Aa;
let pr = 0;
function ja(e) {
  const [n, o] = b.useState(e), r = e || n;
  return b.useEffect(() => {
    n == null && (pr += 1, o(`mui-${pr}`));
  }, [n]), r;
}
const fr = b["useId"];
function fi(e) {
  if (fr !== void 0) {
    const n = fr();
    return e ?? n;
  }
  return ja(e);
}
function mr({
  controlled: e,
  default: n,
  name: o,
  state: r = "value"
}) {
  const {
    current: i
  } = b.useRef(e !== void 0), [s, a] = b.useState(n), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = b.useRef(n);
    b.useEffect(() => {
      !i && u !== n && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const c = b.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function kt(e) {
  const n = b.useRef(e);
  return Bt(() => {
    n.current = e;
  }), b.useCallback((...o) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, n.current)(...o)
  ), []);
}
function Ve(...e) {
  return b.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    e.forEach((o) => {
      co(o, n);
    });
  }, e);
}
let Rn = !0, uo = !1, hr;
const Ba = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Wa(e) {
  const {
    type: n,
    tagName: o
  } = e;
  return !!(o === "INPUT" && Ba[n] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function La(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Rn = !0);
}
function no() {
  Rn = !1;
}
function za() {
  this.visibilityState === "hidden" && uo && (Rn = !0);
}
function Va(e) {
  e.addEventListener("keydown", La, !0), e.addEventListener("mousedown", no, !0), e.addEventListener("pointerdown", no, !0), e.addEventListener("touchstart", no, !0), e.addEventListener("visibilitychange", za, !0);
}
function Ua(e) {
  const {
    target: n
  } = e;
  try {
    return n.matches(":focus-visible");
  } catch {
  }
  return Rn || Wa(n);
}
function qa() {
  const e = b.useCallback((i) => {
    i != null && Va(i.ownerDocument);
  }, []), n = b.useRef(!1);
  function o() {
    return n.current ? (uo = !0, window.clearTimeout(hr), hr = window.setTimeout(() => {
      uo = !1;
    }, 100), n.current = !1, !0) : !1;
  }
  function r(i) {
    return Ua(i) ? (n.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: n,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function mi(e) {
  const n = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - n);
}
function Ka(e) {
  const n = typeof e;
  switch (n) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return n;
  }
}
function Ga(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ha = Number.isInteger || Ga;
function hi(e, n, o, r) {
  const i = e[n];
  if (i == null || !Ha(i)) {
    const s = Ka(i);
    return new RangeError(`Invalid ${r} \`${n}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function bi(e, n, ...o) {
  return e[n] === void 0 ? null : hi(e, n, ...o);
}
function po() {
  return null;
}
bi.isRequired = hi;
po.isRequired = po;
const gi = process.env.NODE_ENV === "production" ? po : bi;
function To(e, n) {
  const o = h({}, n);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = h({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = n[r];
      o[r] = {}, !s || !Object.keys(s) ? o[r] = i : !i || !Object.keys(i) ? o[r] = s : (o[r] = h({}, s), Object.keys(i).forEach((a) => {
        o[r][a] = To(i[a], s[a]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function Oe(e, n, o) {
  const r = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => (a && (s.push(n(a)), o && o[a] && s.push(o[a])), s), []).join(" ");
    }
  ), r;
}
const br = (e) => e, Ya = () => {
  let e = br;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = br;
    }
  };
}, Xa = Ya(), yi = Xa, Ja = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function xe(e, n, o = "Mui") {
  const r = Ja[n];
  return r ? `${o}-${r}` : `${yi.generate(e)}-${n}`;
}
function Ce(e, n, o = "Mui") {
  const r = {};
  return n.forEach((i) => {
    r[i] = xe(e, i, o);
  }), r;
}
function gr(e) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function Za(e) {
  const {
    getSlotProps: n,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!n) {
    const x = ae(i == null ? void 0 : i.className, r == null ? void 0 : r.className, s, o == null ? void 0 : o.className), E = h({}, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), g = h({}, o, i, r);
    return x.length > 0 && (g.className = x), Object.keys(E).length > 0 && (g.style = E), {
      props: g,
      internalRef: void 0
    };
  }
  const a = Ca(h({}, i, r)), l = gr(r), c = gr(i), u = n(a), d = ae(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = h({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = h({}, u, o, c, l);
  return d.length > 0 && (p.className = d), Object.keys(m).length > 0 && (p.style = m), {
    props: p,
    internalRef: u.ref
  };
}
const Qa = ["elementType", "externalSlotProps", "ownerState"];
function yr(e) {
  var n;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: i
  } = e, s = te(e, Qa), a = lo(r, i), {
    props: l,
    internalRef: c
  } = Za(h({}, s, {
    externalSlotProps: a
  })), u = Ve(c, a == null ? void 0 : a.ref, (n = e.additionalProps) == null ? void 0 : n.ref);
  return Oa(o, h({}, l, {
    ref: u
  }), i);
}
const el = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function tl(e) {
  const n = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(n) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : n;
}
function nl(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const n = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = n(`[name="${e.name}"]:checked`);
  return o || (o = n(`[name="${e.name}"]`)), o !== e;
}
function ol(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || nl(e));
}
function rl(e) {
  const n = [], o = [];
  return Array.from(e.querySelectorAll(el)).forEach((r, i) => {
    const s = tl(r);
    s === -1 || !ol(r) || (s === 0 ? n.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(n);
}
function il() {
  return !0;
}
function xn(e) {
  const {
    children: n,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = rl,
    isEnabled: a = il,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), m = b.useRef(null), p = b.useRef(null), x = b.useRef(!1), E = b.useRef(null), g = Ve(n.ref, E), v = b.useRef(null);
  b.useEffect(() => {
    !l || !E.current || (x.current = !o);
  }, [o, l]), b.useEffect(() => {
    if (!l || !E.current)
      return;
    const C = qe(E.current);
    return E.current.contains(C.activeElement) || (E.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), E.current.setAttribute("tabIndex", "-1")), x.current && E.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !E.current)
      return;
    const C = qe(E.current), T = (N) => {
      const {
        current: B
      } = E;
      if (B !== null) {
        if (!C.hasFocus() || r || !a() || c.current) {
          c.current = !1;
          return;
        }
        if (!B.contains(C.activeElement)) {
          if (N && p.current !== N.target || C.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!x.current)
            return;
          let V = [];
          if ((C.activeElement === u.current || C.activeElement === d.current) && (V = s(E.current)), V.length > 0) {
            var F, D;
            const ee = Boolean(((F = v.current) == null ? void 0 : F.shiftKey) && ((D = v.current) == null ? void 0 : D.key) === "Tab"), U = V[0], k = V[V.length - 1];
            typeof U != "string" && typeof k != "string" && (ee ? k.focus() : U.focus());
          } else
            B.focus();
        }
      }
    }, y = (N) => {
      v.current = N, !(r || !a() || N.key !== "Tab") && C.activeElement === E.current && N.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    C.addEventListener("focusin", T), C.addEventListener("keydown", y, !0);
    const P = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && T(null);
    }, 50);
    return () => {
      clearInterval(P), C.removeEventListener("focusin", T), C.removeEventListener("keydown", y, !0);
    };
  }, [o, r, i, a, l, s]);
  const S = (C) => {
    m.current === null && (m.current = C.relatedTarget), x.current = !0, p.current = C.target;
    const T = n.props.onFocus;
    T && T(C);
  }, w = (C) => {
    m.current === null && (m.current = C.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ Se(b.Fragment, {
    children: [/* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(n, {
      ref: g,
      onFocus: S
    }), /* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: sn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: t.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: t.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: t.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: t.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: t.func,
  /**
   * If `true`, focus is locked.
   */
  open: t.bool.isRequired
});
process.env.NODE_ENV !== "production" && (xn["propTypes"] = ui(xn.propTypes));
function sl(e) {
  return typeof e == "function" ? e() : e;
}
const En = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = n, [a, l] = b.useState(null), c = Ve(/* @__PURE__ */ b.isValidElement(r) ? r.ref : null, o);
  if (Bt(() => {
    s || l(sl(i) || document.body);
  }, [i, s]), Bt(() => {
    if (a && !s)
      return co(o, a), () => {
        co(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ R(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ R(b.Fragment, {
    children: a && /* @__PURE__ */ oa.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: t.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: t.oneOfType([jt, t.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool
});
process.env.NODE_ENV !== "production" && (En["propTypes"] = ui(En.propTypes));
const al = En;
function ll(e) {
  const n = qe(e);
  return n.body === e ? xt(e).innerWidth > n.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Xt(e, n) {
  n ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function vr(e) {
  return parseInt(xt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function cl(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function xr(e, n, o, r, i) {
  const s = [n, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !cl(a);
    l && c && Xt(a, i);
  });
}
function oo(e, n) {
  let o = -1;
  return e.some((r, i) => n(r) ? (o = i, !0) : !1), o;
}
function ul(e, n) {
  const o = [], r = e.container;
  if (!n.disableScrollLock) {
    if (ll(r)) {
      const a = mi(qe(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${vr(r) + a}px`;
      const l = qe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${vr(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = qe(r).body;
    else {
      const a = r.parentElement, l = xt(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function dl(e) {
  const n = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && n.push(o);
  }), n;
}
class pl {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(n, o) {
    let r = this.modals.indexOf(n);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(n), n.modalRef && Xt(n.modalRef, !1);
    const i = dl(o);
    xr(o, n.mount, n.modalRef, i, !0);
    const s = oo(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(n), r) : (this.containers.push({
      modals: [n],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(n, o) {
    const r = oo(this.containers, (s) => s.modals.indexOf(n) !== -1), i = this.containers[r];
    i.restore || (i.restore = ul(i, o));
  }
  remove(n, o = !0) {
    const r = this.modals.indexOf(n);
    if (r === -1)
      return r;
    const i = oo(this.containers, (a) => a.modals.indexOf(n) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(n), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), n.modalRef && Xt(n.modalRef, o), xr(s.container, n.mount, n.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Xt(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(n) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === n;
  }
}
function fl(e) {
  return xe("MuiModal", e);
}
Ce("MuiModal", ["root", "hidden"]);
const ml = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], hl = (e) => {
  const {
    open: n,
    exited: o,
    classes: r
  } = e;
  return Oe({
    root: ["root", !n && o && "hidden"],
    backdrop: ["backdrop"]
  }, fl, r);
};
function bl(e) {
  return typeof e == "function" ? e() : e;
}
function gl(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const yl = new pl(), vi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i;
  const {
    children: s,
    classes: a,
    closeAfterTransition: l = !1,
    component: c,
    container: u,
    disableAutoFocus: d = !1,
    disableEnforceFocus: m = !1,
    disableEscapeKeyDown: p = !1,
    disablePortal: x = !1,
    disableRestoreFocus: E = !1,
    disableScrollLock: g = !1,
    hideBackdrop: v = !1,
    keepMounted: S = !1,
    // private
    manager: w = yl,
    onBackdropClick: C,
    onClose: T,
    onKeyDown: y,
    open: P,
    onTransitionEnter: N,
    onTransitionExited: B,
    slotProps: F = {},
    slots: D = {}
  } = n, V = te(n, ml), [ee, U] = b.useState(!P), k = b.useRef({}), A = b.useRef(null), M = b.useRef(null), oe = Ve(M, o), ie = gl(s), ce = (r = n["aria-hidden"]) != null ? r : !0, O = () => qe(A.current), $ = () => (k.current.modalRef = M.current, k.current.mountNode = A.current, k.current), L = () => {
    w.mount($(), {
      disableScrollLock: g
    }), M.current && (M.current.scrollTop = 0);
  }, K = kt(() => {
    const Pe = bl(u) || O().body;
    w.add($(), Pe), M.current && L();
  }), j = b.useCallback(() => w.isTopModal($()), [w]), Y = kt((Pe) => {
    A.current = Pe, !(!Pe || !M.current) && (P && j() ? L() : Xt(M.current, ce));
  }), z = b.useCallback(() => {
    w.remove($(), ce);
  }, [w, ce]);
  b.useEffect(() => () => {
    z();
  }, [z]), b.useEffect(() => {
    P ? K() : (!ie || !l) && z();
  }, [P, z, ie, l, K]);
  const J = h({}, n, {
    classes: a,
    closeAfterTransition: l,
    disableAutoFocus: d,
    disableEnforceFocus: m,
    disableEscapeKeyDown: p,
    disablePortal: x,
    disableRestoreFocus: E,
    disableScrollLock: g,
    exited: ee,
    hideBackdrop: v,
    keepMounted: S
  }), Z = hl(J), H = () => {
    U(!1), N && N();
  }, Q = () => {
    U(!0), B && B(), l && z();
  }, X = (Pe) => {
    Pe.target === Pe.currentTarget && (C && C(Pe), T && T(Pe, "backdropClick"));
  }, I = (Pe) => {
    y && y(Pe), !(Pe.key !== "Escape" || !j()) && (p || (Pe.stopPropagation(), T && T(Pe, "escapeKeyDown")));
  }, fe = {};
  s.props.tabIndex === void 0 && (fe.tabIndex = "-1"), ie && (fe.onEnter = dr(H, s.props.onEnter), fe.onExited = dr(Q, s.props.onExited));
  const q = (i = c ?? D.root) != null ? i : "div", $e = yr({
    elementType: q,
    externalSlotProps: F.root,
    externalForwardedProps: V,
    additionalProps: {
      ref: oe,
      role: "presentation",
      onKeyDown: I
    },
    className: Z.root,
    ownerState: J
  }), Fe = D.backdrop, Ae = yr({
    elementType: Fe,
    externalSlotProps: F.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: X,
      open: P
    },
    className: Z.backdrop,
    ownerState: J
  });
  return !S && !P && (!ie || ee) ? null : /* @__PURE__ */ R(
    al,
    {
      ref: Y,
      container: u,
      disablePortal: x,
      children: /* @__PURE__ */ Se(q, h({}, $e, {
        children: [!v && Fe ? /* @__PURE__ */ R(Fe, h({}, Ae)) : null, /* @__PURE__ */ R(xn, {
          disableEnforceFocus: m,
          disableAutoFocus: d,
          disableRestoreFocus: E,
          isEnabled: j,
          open: P,
          children: /* @__PURE__ */ b.cloneElement(s, fe)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: t.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: t.oneOfType([jt, t.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: t.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: t.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: t.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: t.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: t.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: t.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: t.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: t.shape({
    backdrop: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: t.shape({
    backdrop: t.elementType,
    root: t.elementType
  })
});
const vl = vi, xl = ["onChange", "maxRows", "minRows", "style", "value"];
function pn(e, n) {
  return parseInt(e[n], 10) || 0;
}
const El = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Er(e) {
  return e == null || Object.keys(e).length === 0;
}
const xi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = n, c = te(n, xl), {
    current: u
  } = b.useRef(l != null), d = b.useRef(null), m = Ve(o, d), p = b.useRef(null), x = b.useRef(0), [E, g] = b.useState({}), v = b.useCallback(() => {
    const y = d.current, N = xt(y).getComputedStyle(y);
    if (N.width === "0px")
      return {};
    const B = p.current;
    B.style.width = N.width, B.value = y.value || n.placeholder || "x", B.value.slice(-1) === `
` && (B.value += " ");
    const F = N["box-sizing"], D = pn(N, "padding-bottom") + pn(N, "padding-top"), V = pn(N, "border-bottom-width") + pn(N, "border-top-width"), ee = B.scrollHeight;
    B.value = "x";
    const U = B.scrollHeight;
    let k = ee;
    s && (k = Math.max(Number(s) * U, k)), i && (k = Math.min(Number(i) * U, k)), k = Math.max(k, U);
    const A = k + (F === "border-box" ? D + V : 0), M = Math.abs(k - ee) <= 1;
    return {
      outerHeightStyle: A,
      overflow: M
    };
  }, [i, s, n.placeholder]), S = (y, P) => {
    const {
      outerHeightStyle: N,
      overflow: B
    } = P;
    return x.current < 20 && (N > 0 && Math.abs((y.outerHeightStyle || 0) - N) > 1 || y.overflow !== B) ? (x.current += 1, {
      overflow: B,
      outerHeightStyle: N
    }) : (process.env.NODE_ENV !== "production" && x.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), y);
  }, w = b.useCallback(() => {
    const y = v();
    Er(y) || g((P) => S(P, y));
  }, [v]), C = () => {
    const y = v();
    Er(y) || ra(() => {
      g((P) => S(P, y));
    });
  };
  b.useEffect(() => {
    const y = pi(() => {
      x.current = 0, d.current && C();
    }), P = xt(d.current);
    P.addEventListener("resize", y);
    let N;
    return typeof ResizeObserver < "u" && (N = new ResizeObserver(y), N.observe(d.current)), () => {
      y.clear(), P.removeEventListener("resize", y), N && N.disconnect();
    };
  }), Bt(() => {
    w();
  }), b.useEffect(() => {
    x.current = 0;
  }, [l]);
  const T = (y) => {
    x.current = 0, u || w(), r && r(y);
  };
  return /* @__PURE__ */ Se(b.Fragment, {
    children: [/* @__PURE__ */ R("textarea", h({
      value: l,
      onChange: T,
      ref: m,
      rows: s,
      style: h({
        height: E.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: E.overflow ? "hidden" : null
      }, a)
    }, c)), /* @__PURE__ */ R("textarea", {
      "aria-hidden": !0,
      className: n.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: h({}, El.shadow, a, {
        padding: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: t.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * @ignore
   */
  onChange: t.func,
  /**
   * @ignore
   */
  placeholder: t.string,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * @ignore
   */
  value: t.oneOfType([t.arrayOf(t.string), t.number, t.string])
});
const Tl = xi;
function Ol(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ei(e) {
  const {
    styles: n,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ R(na, {
    styles: typeof n == "function" ? (i) => n(Ol(i) ? o : i) : n
  });
}
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
  defaultTheme: t.object,
  styles: t.oneOfType([t.string, t.object, t.func])
});
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ti(e, n) {
  const o = ta(e, n);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const Cl = (e, n) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}, Rl = process.env.NODE_ENV !== "production" ? t.oneOfType([t.number, t.string, t.object, t.array]) : {}, pt = Rl;
function Jt(e, n) {
  return n ? Ze(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Oo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Tr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Oo[e]}px)`
};
function Qe(e, n, o) {
  const r = e.theme || {};
  if (Array.isArray(n)) {
    const s = r.breakpoints || Tr;
    return n.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(n[c]), a), {});
  }
  if (typeof n == "object") {
    const s = r.breakpoints || Tr;
    return Object.keys(n).reduce((a, l) => {
      if (Object.keys(s.values || Oo).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = o(n[l], l);
      } else {
        const c = l;
        a[c] = n[c];
      }
      return a;
    }, {});
  }
  return o(n);
}
function Sl(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function wl(e, n) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, n);
}
function $l(e, n) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(n);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function Sn({
  values: e,
  breakpoints: n,
  base: o
}) {
  const r = o || $l(e, n), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function wn(e, n, o = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${n}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return n.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Tn(e, n, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = wn(e, o) || r, n && (i = n(i, r, e)), i;
}
function Ee(e) {
  const {
    prop: n,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[n] == null)
      return null;
    const l = a[n], c = a.theme, u = wn(c, r) || {};
    return Qe(a, l, (m) => {
      let p = Tn(u, i, m);
      return m === p && typeof m == "string" && (p = Tn(u, i, `${n}${m === "default" ? "" : le(m)}`, m)), o === !1 ? p : {
        [o]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [n]: pt
  } : {}, s.filterProps = [n], s;
}
function $n(...e) {
  const n = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => n[s] ? Jt(i, n[s](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function Pl(e) {
  const n = {};
  return (o) => (n[o] === void 0 && (n[o] = e(o)), n[o]);
}
const Nl = {
  m: "margin",
  p: "padding"
}, _l = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Or = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Il = Pl((e) => {
  if (e.length > 2)
    if (Or[e])
      e = Or[e];
    else
      return [e];
  const [n, o] = e.split(""), r = Nl[n], i = _l[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Nn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], kl = [...Pn, ...Nn];
function an(e, n, o, r) {
  var i;
  const s = (i = wn(e, n, !1)) != null ? i : o;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${n}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${n}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${n}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Oi(e) {
  return an(e, "spacing", 8, "spacing");
}
function ln(e, n) {
  if (typeof n == "string" || n == null)
    return n;
  const o = Math.abs(n), r = e(o);
  return n >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ml(e, n) {
  return (o) => e.reduce((r, i) => (r[i] = ln(n, o), r), {});
}
function Dl(e, n, o, r) {
  if (n.indexOf(o) === -1)
    return null;
  const i = Il(o), s = Ml(i, r), a = e[o];
  return Qe(e, a, s);
}
function Ci(e, n) {
  const o = Oi(e.theme);
  return Object.keys(e).map((r) => Dl(e, n, r, o)).reduce(Jt, {});
}
function Ne(e) {
  return Ci(e, Pn);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, n) => (e[n] = pt, e), {}) : {};
Ne.filterProps = Pn;
function _e(e) {
  return Ci(e, Nn);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Nn.reduce((e, n) => (e[n] = pt, e), {}) : {};
_e.filterProps = Nn;
process.env.NODE_ENV !== "production" && kl.reduce((e, n) => (e[n] = pt, e), {});
function rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Fl = Ee({
  prop: "border",
  themeKey: "borders",
  transform: rt
}), Al = Ee({
  prop: "borderTop",
  themeKey: "borders",
  transform: rt
}), jl = Ee({
  prop: "borderRight",
  themeKey: "borders",
  transform: rt
}), Bl = Ee({
  prop: "borderBottom",
  themeKey: "borders",
  transform: rt
}), Wl = Ee({
  prop: "borderLeft",
  themeKey: "borders",
  transform: rt
}), Ll = Ee({
  prop: "borderColor",
  themeKey: "palette"
}), zl = Ee({
  prop: "borderTopColor",
  themeKey: "palette"
}), Vl = Ee({
  prop: "borderRightColor",
  themeKey: "palette"
}), Ul = Ee({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ql = Ee({
  prop: "borderLeftColor",
  themeKey: "palette"
}), _n = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = an(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: ln(n, r)
    });
    return Qe(e, e.borderRadius, o);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pt
} : {};
_n.filterProps = ["borderRadius"];
$n(Fl, Al, jl, Bl, Wl, Ll, zl, Vl, Ul, ql, _n);
const In = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = an(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: ln(n, r)
    });
    return Qe(e, e.gap, o);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pt
} : {};
In.filterProps = ["gap"];
const kn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = an(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: ln(n, r)
    });
    return Qe(e, e.columnGap, o);
  }
  return null;
};
kn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pt
} : {};
kn.filterProps = ["columnGap"];
const Mn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = an(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: ln(n, r)
    });
    return Qe(e, e.rowGap, o);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pt
} : {};
Mn.filterProps = ["rowGap"];
const Kl = Ee({
  prop: "gridColumn"
}), Gl = Ee({
  prop: "gridRow"
}), Hl = Ee({
  prop: "gridAutoFlow"
}), Yl = Ee({
  prop: "gridAutoColumns"
}), Xl = Ee({
  prop: "gridAutoRows"
}), Jl = Ee({
  prop: "gridTemplateColumns"
}), Zl = Ee({
  prop: "gridTemplateRows"
}), Ql = Ee({
  prop: "gridTemplateAreas"
}), ec = Ee({
  prop: "gridArea"
});
$n(In, kn, Mn, Kl, Gl, Hl, Yl, Xl, Jl, Zl, Ql, ec);
function Ft(e, n) {
  return n === "grey" ? n : e;
}
const tc = Ee({
  prop: "color",
  themeKey: "palette",
  transform: Ft
}), nc = Ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ft
}), oc = Ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ft
});
$n(tc, nc, oc);
function Ue(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const rc = Ee({
  prop: "width",
  transform: Ue
}), Co = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (o) => {
      var r, i, s;
      return {
        maxWidth: ((r = e.theme) == null || (i = r.breakpoints) == null || (s = i.values) == null ? void 0 : s[o]) || Oo[o] || Ue(o)
      };
    };
    return Qe(e, e.maxWidth, n);
  }
  return null;
};
Co.filterProps = ["maxWidth"];
const ic = Ee({
  prop: "minWidth",
  transform: Ue
}), sc = Ee({
  prop: "height",
  transform: Ue
}), ac = Ee({
  prop: "maxHeight",
  transform: Ue
}), lc = Ee({
  prop: "minHeight",
  transform: Ue
});
Ee({
  prop: "size",
  cssProperty: "width",
  transform: Ue
});
Ee({
  prop: "size",
  cssProperty: "height",
  transform: Ue
});
const cc = Ee({
  prop: "boxSizing"
});
$n(rc, Co, ic, sc, ac, lc, cc);
const uc = {
  // borders
  border: {
    themeKey: "borders",
    transform: rt
  },
  borderTop: {
    themeKey: "borders",
    transform: rt
  },
  borderRight: {
    themeKey: "borders",
    transform: rt
  },
  borderBottom: {
    themeKey: "borders",
    transform: rt
  },
  borderLeft: {
    themeKey: "borders",
    transform: rt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _n
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ft
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ft
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ft
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Ne
  },
  mt: {
    style: Ne
  },
  mr: {
    style: Ne
  },
  mb: {
    style: Ne
  },
  ml: {
    style: Ne
  },
  mx: {
    style: Ne
  },
  my: {
    style: Ne
  },
  margin: {
    style: Ne
  },
  marginTop: {
    style: Ne
  },
  marginRight: {
    style: Ne
  },
  marginBottom: {
    style: Ne
  },
  marginLeft: {
    style: Ne
  },
  marginX: {
    style: Ne
  },
  marginY: {
    style: Ne
  },
  marginInline: {
    style: Ne
  },
  marginInlineStart: {
    style: Ne
  },
  marginInlineEnd: {
    style: Ne
  },
  marginBlock: {
    style: Ne
  },
  marginBlockStart: {
    style: Ne
  },
  marginBlockEnd: {
    style: Ne
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: In
  },
  rowGap: {
    style: Mn
  },
  columnGap: {
    style: kn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ue
  },
  maxWidth: {
    style: Co
  },
  minWidth: {
    transform: Ue
  },
  height: {
    transform: Ue
  },
  maxHeight: {
    transform: Ue
  },
  minHeight: {
    transform: Ue
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Dn = uc;
function dc(...e) {
  const n = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(n);
  return e.every((r) => o.size === Object.keys(r).length);
}
function pc(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function fc() {
  function e(o, r, i, s) {
    const a = {
      [o]: r,
      theme: i
    }, l = s[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: m
    } = l;
    if (r == null)
      return null;
    const p = wn(i, u) || {};
    return m ? m(a) : Qe(a, r, (E) => {
      let g = Tn(p, d, E);
      return E === g && typeof E == "string" && (g = Tn(p, d, `${o}${E === "default" ? "" : le(E)}`, E)), c === !1 ? g : {
        [c]: g
      };
    });
  }
  function n(o) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = o || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Dn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Sl(s.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((x) => {
        const E = pc(u[x], s);
        if (E != null)
          if (typeof E == "object")
            if (a[x])
              p = Jt(p, e(x, E, s, a));
            else {
              const g = Qe({
                theme: s
              }, E, (v) => ({
                [x]: v
              }));
              dc(g, E) ? p[x] = n({
                sx: E,
                theme: s
              }) : p = Jt(p, g);
            }
          else
            p = Jt(p, e(x, E, s, a));
      }), wl(m, p);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return n;
}
const Ri = fc();
Ri.filterProps = ["sx"];
const Fn = Ri, mc = ["sx"], hc = (e) => {
  var n, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (n = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? n : Dn;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function Ro(e) {
  const {
    sx: n
  } = e, o = te(e, mc), {
    systemProps: r,
    otherProps: i
  } = hc(o);
  let s;
  return Array.isArray(n) ? s = [r, ...n] : typeof n == "function" ? s = (...a) => {
    const l = n(...a);
    return gt(l) ? h({}, r, l) : r;
  } : s = h({}, r, n), h({}, i, {
    sx: s
  });
}
const bc = ["values", "unit", "step"], gc = (e) => {
  const n = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return n.sort((o, r) => o.val - r.val), n.reduce((o, r) => h({}, o, {
    [r.key]: r.val
  }), {});
};
function yc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: n = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5
  } = e, i = te(e, bc), s = gc(n), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof n[p] == "number" ? n[p] : p}${o})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof n[p] == "number" ? n[p] : p) - r / 100}${o})`;
  }
  function u(p, x) {
    const E = a.indexOf(x);
    return `@media (min-width:${typeof n[p] == "number" ? n[p] : p}${o}) and (max-width:${(E !== -1 && typeof n[a[E]] == "number" ? n[a[E]] : x) - r / 100}${o})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function m(p) {
    const x = a.indexOf(p);
    return x === 0 ? l(a[1]) : x === a.length - 1 ? c(a[x]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return h({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: m,
    unit: o
  }, i);
}
const vc = {
  borderRadius: 4
}, xc = vc;
function Ec(e = 8) {
  if (e.mui)
    return e;
  const n = Oi({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = n(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
const Tc = ["breakpoints", "palette", "spacing", "shape"];
function An(e = {}, ...n) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = te(e, Tc), l = yc(o), c = Ec(i);
  let u = Ze({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: h({
      mode: "light"
    }, r),
    spacing: c,
    shape: h({}, xc, s)
  }, a);
  return u = n.reduce((d, m) => Ze(d, m), u), u.unstable_sxConfig = h({}, Dn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return Fn({
      sx: m,
      theme: this
    });
  }, u;
}
const Si = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Si.displayName = "ThemeContext");
const Oc = Si;
function Cc() {
  const e = b.useContext(Oc);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e;
}
function Rc(e) {
  return Object.keys(e).length === 0;
}
function Sc(e = null) {
  const n = Cc();
  return !n || Rc(n) ? e : n;
}
const wc = An();
function So(e = wc) {
  return Sc(e);
}
const $c = ["className", "component"];
function Pc(e = {}) {
  const {
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: r
  } = e, i = Ti("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Fn);
  return /* @__PURE__ */ b.forwardRef(function(l, c) {
    const u = So(n), d = Ro(l), {
      className: m,
      component: p = "div"
    } = d, x = te(d, $c);
    return /* @__PURE__ */ R(i, h({
      as: p,
      ref: c,
      className: ae(m, r ? r(o) : o),
      theme: u
    }, x));
  });
}
const Nc = ["variant"];
function Cr(e) {
  return e.length === 0;
}
function wi(e) {
  const {
    variant: n
  } = e, o = te(e, Nc);
  let r = n || "";
  return Object.keys(o).sort().forEach((i) => {
    i === "color" ? r += Cr(r) ? e[i] : le(e[i]) : r += `${Cr(r) ? i : le(i)}${le(e[i].toString())}`;
  }), r;
}
const _c = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Ic = ["theme"], kc = ["theme"];
function Ut(e) {
  return Object.keys(e).length === 0;
}
function Mc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Dc = (e, n) => n.components && n.components[e] && n.components[e].styleOverrides ? n.components[e].styleOverrides : null, Fc = (e, n) => {
  let o = [];
  n && n.components && n.components[e] && n.components[e].variants && (o = n.components[e].variants);
  const r = {};
  return o.forEach((i) => {
    const s = wi(i.props);
    r[s] = i.style;
  }), r;
}, Ac = (e, n, o, r) => {
  var i, s;
  const {
    ownerState: a = {}
  } = e, l = [], c = o == null || (i = o.components) == null || (s = i[r]) == null ? void 0 : s.variants;
  return c && c.forEach((u) => {
    let d = !0;
    Object.keys(u.props).forEach((m) => {
      a[m] !== u.props[m] && e[m] !== u.props[m] && (d = !1);
    }), d && l.push(n[wi(u.props)]);
  }), l;
};
function Zt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const jc = An(), Bc = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function $i(e = {}) {
  const {
    defaultTheme: n = jc,
    rootShouldForwardProp: o = Zt,
    slotShouldForwardProp: r = Zt
  } = e, i = (s) => {
    const a = Ut(s.theme) ? n : s.theme;
    return Fn(h({}, s, {
      theme: a
    }));
  };
  return i.__mui_systemSx = !0, (s, a = {}) => {
    Cl(s, (C) => C.filter((T) => !(T != null && T.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: d,
      overridesResolver: m
    } = a, p = te(a, _c), x = u !== void 0 ? u : c && c !== "Root" || !1, E = d || !1;
    let g;
    process.env.NODE_ENV !== "production" && l && (g = `${l}-${Bc(c || "Root")}`);
    let v = Zt;
    c === "Root" ? v = o : c ? v = r : Mc(s) && (v = void 0);
    const S = Ti(s, h({
      shouldForwardProp: v,
      label: g
    }, p)), w = (C, ...T) => {
      const y = T ? T.map((F) => typeof F == "function" && F.__emotion_real !== F ? (D) => {
        let {
          theme: V
        } = D, ee = te(D, Ic);
        return F(h({
          theme: Ut(V) ? n : V
        }, ee));
      } : F) : [];
      let P = C;
      l && m && y.push((F) => {
        const D = Ut(F.theme) ? n : F.theme, V = Dc(l, D);
        if (V) {
          const ee = {};
          return Object.entries(V).forEach(([U, k]) => {
            ee[U] = typeof k == "function" ? k(h({}, F, {
              theme: D
            })) : k;
          }), m(F, ee);
        }
        return null;
      }), l && !x && y.push((F) => {
        const D = Ut(F.theme) ? n : F.theme;
        return Ac(F, Fc(l, D), D, l);
      }), E || y.push(i);
      const N = y.length - T.length;
      if (Array.isArray(C) && N > 0) {
        const F = new Array(N).fill("");
        P = [...C, ...F], P.raw = [...C.raw, ...F];
      } else
        typeof C == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        C.__emotion_real !== C && (P = (F) => {
          let {
            theme: D
          } = F, V = te(F, kc);
          return C(h({
            theme: Ut(D) ? n : D
          }, V));
        });
      const B = S(P, ...y);
      if (process.env.NODE_ENV !== "production") {
        let F;
        l && (F = `${l}${c || ""}`), F === void 0 && (F = `Styled(${Ma(s)})`), B.displayName = F;
      }
      return B;
    };
    return S.withConfig && (w.withConfig = S.withConfig), w;
  };
}
const Wc = $i(), Lc = Wc;
function zc(e) {
  const {
    theme: n,
    name: o,
    props: r
  } = e;
  return !n || !n.components || !n.components[o] || !n.components[o].defaultProps ? r : To(n.components[o].defaultProps, r);
}
function Pi({
  props: e,
  name: n,
  defaultTheme: o
}) {
  const r = So(o);
  return zc({
    theme: r,
    name: n,
    props: e
  });
}
function wo(e, n = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < n || e > o) && console.error(`MUI: The value provided ${e} is out of range [${n}, ${o}].`), Math.min(Math.max(n, e), o);
}
function Vc(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(n);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Et(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Et(Vc(e));
  const n = e.indexOf("("), o = e.substring(0, n);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : dt(9, e));
  let r = e.substring(n + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : dt(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
function jn(e) {
  const {
    type: n,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return n.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : n.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), n.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${n}(${r})`;
}
function Uc(e) {
  e = Et(e);
  const {
    values: n
  } = e, o = n[0], r = n[1] / 100, i = n[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + o / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(n[3])), jn({
    type: l,
    values: c
  });
}
function Rr(e) {
  e = Et(e);
  let n = e.type === "hsl" || e.type === "hsla" ? Et(Uc(e)).values : e.values;
  return n = n.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function Sr(e, n) {
  const o = Rr(e), r = Rr(n);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function Mt(e, n) {
  return e = Et(e), n = wo(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, jn(e);
}
function qc(e, n) {
  if (e = Et(e), n = wo(n), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - n;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - n;
  return jn(e);
}
function Kc(e, n) {
  if (e = Et(e), n = wo(n), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * n;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * n;
  return jn(e);
}
const Gc = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], Hc = An(), Yc = Lc("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[`maxWidth${le(String(o.maxWidth))}`], o.fixed && n.fixed, o.disableGutters && n.disableGutters];
  }
}), Xc = (e) => Pi({
  props: e,
  name: "MuiContainer",
  defaultTheme: Hc
}), Jc = (e, n) => {
  const o = (c) => xe(n, c), {
    classes: r,
    fixed: i,
    disableGutters: s,
    maxWidth: a
  } = e, l = {
    root: ["root", a && `maxWidth${le(String(a))}`, i && "fixed", s && "disableGutters"]
  };
  return Oe(l, o, r);
};
function Zc(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: n = Yc,
    useThemeProps: o = Xc,
    componentName: r = "MuiContainer"
  } = e, i = n(({
    theme: a,
    ownerState: l
  }) => h({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !l.disableGutters && {
    paddingLeft: a.spacing(2),
    paddingRight: a.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("sm")]: {
      paddingLeft: a.spacing(3),
      paddingRight: a.spacing(3)
    }
  }), ({
    theme: a,
    ownerState: l
  }) => l.fixed && Object.keys(a.breakpoints.values).reduce((c, u) => {
    const d = u, m = a.breakpoints.values[d];
    return m !== 0 && (c[a.breakpoints.up(d)] = {
      maxWidth: `${m}${a.breakpoints.unit}`
    }), c;
  }, {}), ({
    theme: a,
    ownerState: l
  }) => h({}, l.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(a.breakpoints.values.xs, 444)
    }
  }, l.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  l.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up(l.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${a.breakpoints.values[l.maxWidth]}${a.breakpoints.unit}`
    }
  })), s = /* @__PURE__ */ b.forwardRef(function(l, c) {
    const u = o(l), {
      className: d,
      component: m = "div",
      disableGutters: p = !1,
      fixed: x = !1,
      maxWidth: E = "lg"
    } = u, g = te(u, Gc), v = h({}, u, {
      component: m,
      disableGutters: p,
      fixed: x,
      maxWidth: E
    }), S = Jc(v, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ R(i, h({
        as: m,
        ownerState: v,
        className: ae(S.root, d),
        ref: c
      }, g))
    );
  });
  return process.env.NODE_ENV !== "production" && (s.propTypes = {
    children: t.node,
    classes: t.object,
    className: t.string,
    component: t.elementType,
    disableGutters: t.bool,
    fixed: t.bool,
    maxWidth: t.oneOfType([t.oneOf(["xs", "sm", "md", "lg", "xl", !1]), t.string]),
    sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
  }), s;
}
function Qc(e, n) {
  return h({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, n);
}
const eu = {
  black: "#000",
  white: "#fff"
}, nn = eu, tu = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, nu = tu, ou = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, St = ou, ru = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, wt = ru, iu = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, qt = iu, su = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, $t = su, au = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Pt = au, lu = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Nt = lu, cu = ["mode", "contrastThreshold", "tonalOffset"], wr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: nn.white,
    default: nn.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ro = {
  text: {
    primary: nn.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: nn.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function $r(e, n, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[n] || (e.hasOwnProperty(o) ? e[n] = e[o] : n === "light" ? e.light = Kc(e.main, i) : n === "dark" && (e.dark = qc(e.main, s)));
}
function uu(e = "light") {
  return e === "dark" ? {
    main: $t[200],
    light: $t[50],
    dark: $t[400]
  } : {
    main: $t[700],
    light: $t[400],
    dark: $t[800]
  };
}
function du(e = "light") {
  return e === "dark" ? {
    main: St[200],
    light: St[50],
    dark: St[400]
  } : {
    main: St[500],
    light: St[300],
    dark: St[700]
  };
}
function pu(e = "light") {
  return e === "dark" ? {
    main: wt[500],
    light: wt[300],
    dark: wt[700]
  } : {
    main: wt[700],
    light: wt[400],
    dark: wt[800]
  };
}
function fu(e = "light") {
  return e === "dark" ? {
    main: Pt[400],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: Pt[700],
    light: Pt[500],
    dark: Pt[900]
  };
}
function mu(e = "light") {
  return e === "dark" ? {
    main: Nt[400],
    light: Nt[300],
    dark: Nt[700]
  } : {
    main: Nt[800],
    light: Nt[500],
    dark: Nt[900]
  };
}
function hu(e = "light") {
  return e === "dark" ? {
    main: qt[400],
    light: qt[300],
    dark: qt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qt[500],
    dark: qt[900]
  };
}
function bu(e) {
  const {
    mode: n = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, i = te(e, cu), s = e.primary || uu(n), a = e.secondary || du(n), l = e.error || pu(n), c = e.info || fu(n), u = e.success || mu(n), d = e.warning || hu(n);
  function m(g) {
    const v = Sr(g, ro.text.primary) >= o ? ro.text.primary : wr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Sr(g, v);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${v} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: g,
    name: v,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: C = 700
  }) => {
    if (g = h({}, g), !g.main && g[S] && (g.main = g[S]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : dt(11, v ? ` (${v})` : "", S));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : dt(12, v ? ` (${v})` : "", JSON.stringify(g.main)));
    return $r(g, "light", w, r), $r(g, "dark", C, r), g.contrastText || (g.contrastText = m(g.main)), g;
  }, x = {
    dark: ro,
    light: wr
  };
  return process.env.NODE_ENV !== "production" && (x[n] || console.error(`MUI: The palette mode \`${n}\` is not supported.`)), Ze(h({
    // A collection of common colors.
    common: h({}, nn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: n,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: nu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, x[n]), i);
}
const gu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function yu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Pr = {
  textTransform: "uppercase"
}, Nr = '"Roboto", "Helvetica", "Arial", sans-serif';
function vu(e, n) {
  const o = typeof n == "function" ? n(e) : n, {
    fontFamily: r = Nr,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m
  } = o, p = te(o, gu);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = i / 14, E = m || ((S) => `${S / u * x}rem`), g = (S, w, C, T, y) => h({
    fontFamily: r,
    fontWeight: S,
    fontSize: E(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === Nr ? {
    letterSpacing: `${yu(T / w)}em`
  } : {}, y, d), v = {
    h1: g(s, 96, 1.167, -1.5),
    h2: g(s, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(l, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(l, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(l, 14, 1.75, 0.4, Pr),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, Pr)
  };
  return Ze(h({
    htmlFontSize: u,
    pxToRem: E,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const xu = 0.2, Eu = 0.14, Tu = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${xu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Eu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Tu})`].join(",");
}
const Ou = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Cu = Ou, Ru = ["duration", "easing", "delay"], Su = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wu = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function _r(e) {
  return `${Math.round(e)}ms`;
}
function $u(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.round((4 + 15 * n ** 0.25 + n / 5) * 10);
}
function Pu(e) {
  const n = h({}, Su, e.easing), o = h({}, wu, e.duration);
  return h({
    getAutoHeightDuration: $u,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: l = n.easeInOut,
        delay: c = 0
      } = s, u = te(s, Ru);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : _r(a)} ${l} ${typeof c == "string" ? c : _r(c)}`).join(",");
    }
  }, e, {
    easing: n,
    duration: o
  });
}
const Nu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, _u = Nu, Iu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ni(e = {}, ...n) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = te(e, Iu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : dt(18));
  const l = bu(r), c = An(e);
  let u = Ze(c, {
    mixins: Qc(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Cu.slice(),
    typography: vu(l, s),
    transitions: Pu(i),
    zIndex: h({}, _u)
  });
  if (u = Ze(u, a), u = n.reduce((d, m) => Ze(d, m), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, x) => {
      let E;
      for (E in p) {
        const g = p[E];
        if (d.indexOf(E) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = xe("", E);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[E] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const x = u.components[p].styleOverrides;
      x && p.indexOf("Mui") === 0 && m(x, p);
    });
  }
  return u.unstable_sxConfig = h({}, Dn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return Fn({
      sx: m,
      theme: this
    });
  }, u;
}
const ku = Ni(), Bn = ku, lt = (e) => Zt(e) && e !== "classes", Mu = Zt, Du = $i({
  defaultTheme: Bn,
  rootShouldForwardProp: lt
}), ne = Du;
function Te({
  props: e,
  name: n
}) {
  return Pi({
    props: e,
    name: n,
    defaultTheme: Bn
  });
}
function Tt({
  props: e,
  states: n,
  muiFormControl: o
}) {
  return n.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const _i = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (_i.displayName = "FormControlContext");
const $o = _i;
function Ot() {
  return b.useContext($o);
}
function Po(e) {
  return /* @__PURE__ */ R(Ei, h({}, e, {
    defaultTheme: Bn
  }));
}
process.env.NODE_ENV !== "production" && (Po.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: t.oneOfType([t.func, t.number, t.object, t.shape({
    __emotion_styles: t.any.isRequired
  }), t.string, t.bool])
});
function Ir(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function No(e, n = !1) {
  return e && (Ir(e.value) && e.value !== "" || n && Ir(e.defaultValue) && e.defaultValue !== "");
}
function Fu(e) {
  return e.startAdornment;
}
function Au(e) {
  return xe("MuiInputBase", e);
}
const ju = Ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Wt = ju, Bu = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Wn = (e, n) => {
  const {
    ownerState: o
  } = e;
  return [n.root, o.formControl && n.formControl, o.startAdornment && n.adornedStart, o.endAdornment && n.adornedEnd, o.error && n.error, o.size === "small" && n.sizeSmall, o.multiline && n.multiline, o.color && n[`color${le(o.color)}`], o.fullWidth && n.fullWidth, o.hiddenLabel && n.hiddenLabel];
}, Ln = (e, n) => {
  const {
    ownerState: o
  } = e;
  return [n.input, o.size === "small" && n.inputSizeSmall, o.multiline && n.inputMultiline, o.type === "search" && n.inputTypeSearch, o.startAdornment && n.inputAdornedStart, o.endAdornment && n.inputAdornedEnd, o.hiddenLabel && n.inputHiddenLabel];
}, Wu = (e) => {
  const {
    classes: n,
    color: o,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: m,
    size: p,
    startAdornment: x,
    type: E
  } = e, g = {
    root: ["root", `color${le(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", x && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", E === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", x && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return Oe(g, Au, n);
}, zn = ne("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Wn
})(({
  theme: e,
  ownerState: n
}) => h({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Wt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, n.multiline && h({
  padding: "4px 0 5px"
}, n.size === "small" && {
  paddingTop: 1
}), n.fullWidth && {
  width: "100%"
})), Vn = ne("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Ln
})(({
  theme: e,
  ownerState: n
}) => {
  const o = e.palette.mode === "light", r = h({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return h({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Wt.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${Wt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, n.size === "small" && {
    paddingTop: 1
  }, n.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, n.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Lu = /* @__PURE__ */ R(Po, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), Ii = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r;
  const i = Te({
    props: n,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: m,
    disabled: p,
    disableInjectingGlobalStyles: x,
    endAdornment: E,
    fullWidth: g = !1,
    id: v,
    inputComponent: S = "input",
    inputProps: w = {},
    inputRef: C,
    maxRows: T,
    minRows: y,
    multiline: P = !1,
    name: N,
    onBlur: B,
    onChange: F,
    onClick: D,
    onFocus: V,
    onKeyDown: ee,
    onKeyUp: U,
    placeholder: k,
    readOnly: A,
    renderSuffix: M,
    rows: oe,
    slotProps: ie = {},
    slots: ce = {},
    startAdornment: O,
    type: $ = "text",
    value: L
  } = i, K = te(i, Bu), j = w.value != null ? w.value : L, {
    current: Y
  } = b.useRef(j != null), z = b.useRef(), J = b.useCallback((pe) => {
    process.env.NODE_ENV !== "production" && pe && pe.nodeName !== "INPUT" && !pe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), Z = Ve(z, C, w.ref, J), [H, Q] = b.useState(!1), X = Ot();
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (X)
      return X.registerEffect();
  }, [X]);
  const I = Tt({
    props: i,
    muiFormControl: X,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  I.focused = X ? X.focused : H, b.useEffect(() => {
    !X && p && H && (Q(!1), B && B());
  }, [X, p, H, B]);
  const fe = X && X.onFilled, q = X && X.onEmpty, $e = b.useCallback((pe) => {
    No(pe) ? fe && fe() : q && q();
  }, [fe, q]);
  Bt(() => {
    Y && $e({
      value: j
    });
  }, [j, $e, Y]);
  const Fe = (pe) => {
    if (I.disabled) {
      pe.stopPropagation();
      return;
    }
    V && V(pe), w.onFocus && w.onFocus(pe), X && X.onFocus ? X.onFocus(pe) : Q(!0);
  }, Ae = (pe) => {
    B && B(pe), w.onBlur && w.onBlur(pe), X && X.onBlur ? X.onBlur(pe) : Q(!1);
  }, Pe = (pe, ...re) => {
    if (!Y) {
      const G = pe.target || z.current;
      if (G == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : dt(1));
      $e({
        value: G.value
      });
    }
    w.onChange && w.onChange(pe, ...re), F && F(pe, ...re);
  };
  b.useEffect(() => {
    $e(z.current);
  }, []);
  const je = (pe) => {
    z.current && pe.currentTarget === pe.target && z.current.focus(), D && D(pe);
  };
  let Ke = S, Me = w;
  P && Ke === "input" && (oe ? (process.env.NODE_ENV !== "production" && (y || T) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Me = h({
    type: void 0,
    minRows: oe,
    maxRows: oe
  }, Me)) : Me = h({
    type: void 0,
    maxRows: T,
    minRows: y
  }, Me), Ke = Tl);
  const Ge = (pe) => {
    $e(pe.animationName === "mui-auto-fill-cancel" ? z.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    X && X.setAdornedStart(Boolean(O));
  }, [X, O]);
  const He = h({}, i, {
    color: I.color || "primary",
    disabled: I.disabled,
    endAdornment: E,
    error: I.error,
    focused: I.focused,
    formControl: X,
    fullWidth: g,
    hiddenLabel: I.hiddenLabel,
    multiline: P,
    size: I.size,
    startAdornment: O,
    type: $
  }), et = Wu(He), We = ce.root || u.Root || zn, Ye = ie.root || d.root || {}, Le = ce.input || u.Input || Vn;
  return Me = h({}, Me, (r = ie.input) != null ? r : d.input), /* @__PURE__ */ Se(b.Fragment, {
    children: [!x && Lu, /* @__PURE__ */ Se(We, h({}, Ye, !vn(We) && {
      ownerState: h({}, He, Ye.ownerState)
    }, {
      ref: o,
      onClick: je
    }, K, {
      className: ae(et.root, Ye.className, c),
      children: [O, /* @__PURE__ */ R($o.Provider, {
        value: null,
        children: /* @__PURE__ */ R(Le, h({
          ownerState: He,
          "aria-invalid": I.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: m,
          disabled: I.disabled,
          id: v,
          onAnimationStart: Ge,
          name: N,
          placeholder: k,
          readOnly: A,
          required: I.required,
          rows: oe,
          value: j,
          onKeyDown: ee,
          onKeyUp: U,
          type: $
        }, Me, !vn(Le) && {
          as: Ke,
          ownerState: h({}, He, Me.ownerState)
        }, {
          ref: Z,
          className: ae(et.input, Me.className),
          onBlur: Ae,
          onChange: Pe,
          onFocus: Fe
        }))
      }), E, M ? M(h({}, I, {
        startAdornment: O
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Ii.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": t.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Eo,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: t.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * @ignore
   */
  onKeyUp: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * @ignore
   */
  renderSuffix: t.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The size of the component.
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
const _o = Ii;
function zu(e) {
  return xe("MuiInput", e);
}
const Vu = h({}, Wt, Ce("MuiInput", ["root", "underline", "input"])), Kt = Vu, Uu = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], qu = (e) => {
  const {
    classes: n,
    disableUnderline: o
  } = e, i = Oe({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, zu, n);
  return h({}, n, i);
}, Ku = ne(zn, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [...Wn(e, n), !o.disableUnderline && n.underline];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), h({
    position: "relative"
  }, n.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !n.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(e.vars || e).palette[n.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Kt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Kt.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Kt.disabled}, .${Kt.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Kt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Gu = ne(Vn, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Ln
})({}), Io = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i, s, a;
  const l = Te({
    props: n,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: m = !1,
    inputComponent: p = "input",
    multiline: x = !1,
    slotProps: E,
    slots: g = {},
    type: v = "text"
  } = l, S = te(l, Uu), w = qu(l), T = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, y = E ?? d ? Ze(E ?? d, T) : T, P = (r = (i = g.root) != null ? i : u.Root) != null ? r : Ku, N = (s = (a = g.input) != null ? a : u.Input) != null ? s : Gu;
  return /* @__PURE__ */ R(_o, h({
    slots: {
      root: P,
      input: N
    },
    slotProps: y,
    fullWidth: m,
    inputComponent: p,
    multiline: x,
    ref: o,
    type: v
  }, S, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
Io.muiName = "Input";
const ki = Io;
function Hu(e) {
  return xe("MuiFilledInput", e);
}
const Yu = h({}, Wt, Ce("MuiFilledInput", ["root", "underline", "input"])), mt = Yu, Xu = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Ju = (e) => {
  const {
    classes: n,
    disableUnderline: o
  } = e, i = Oe({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Hu, n);
  return h({}, n, i);
}, Zu = ne(zn, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [...Wn(e, n), !o.disableUnderline && n.underline];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var o;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return h({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${mt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${mt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !n.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[n.color || "primary"]) == null ? void 0 : o.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${mt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${mt.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${mt.disabled}, .${mt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${mt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, n.startAdornment && {
    paddingLeft: 12
  }, n.endAdornment && {
    paddingRight: 12
  }, n.multiline && h({
    padding: "25px 12px 8px"
  }, n.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, n.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), Qu = ne(Vn, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Ln
})(({
  theme: e,
  ownerState: n
}) => h({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, n.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, n.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, n.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, n.startAdornment && {
  paddingLeft: 0
}, n.endAdornment && {
  paddingRight: 0
}, n.hiddenLabel && n.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), ko = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i, s, a;
  const l = Te({
    props: n,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: m = "input",
    multiline: p = !1,
    slotProps: x,
    slots: E = {},
    type: g = "text"
  } = l, v = te(l, Xu), S = h({}, l, {
    fullWidth: d,
    inputComponent: m,
    multiline: p,
    type: g
  }), w = Ju(l), C = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, T = x ?? u ? Ze(x ?? u, C) : C, y = (r = (i = E.root) != null ? i : c.Root) != null ? r : Zu, P = (s = (a = E.input) != null ? a : c.Input) != null ? s : Qu;
  return /* @__PURE__ */ R(_o, h({
    slots: {
      root: y,
      input: P
    },
    componentsProps: T,
    fullWidth: d,
    inputComponent: m,
    multiline: p,
    ref: o,
    type: g
  }, v, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (ko.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    input: t.object,
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
ko.muiName = "Input";
const Mi = ko;
var kr;
const ed = ["children", "classes", "className", "label", "notched"], td = ne("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), nd = ne("legend")(({
  ownerState: e,
  theme: n
}) => h({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: n.transitions.create("width", {
    duration: 150,
    easing: n.transitions.easing.easeOut
  })
}, e.withLabel && h({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: n.transitions.create("max-width", {
    duration: 50,
    easing: n.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: n.transitions.create("max-width", {
    duration: 100,
    easing: n.transitions.easing.easeOut,
    delay: 50
  })
})));
function Di(e) {
  const {
    className: n,
    label: o,
    notched: r
  } = e, i = te(e, ed), s = o != null && o !== "", a = h({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ R(td, h({
    "aria-hidden": !0,
    className: n,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ R(nd, {
      ownerState: a,
      children: s ? /* @__PURE__ */ R("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        kr || (kr = /* @__PURE__ */ R("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Di.propTypes = {
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The label.
   */
  label: t.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: t.bool.isRequired,
  /**
   * @ignore
   */
  style: t.object
});
function od(e) {
  return xe("MuiOutlinedInput", e);
}
const rd = h({}, Wt, Ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])), ut = rd, id = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], sd = (e) => {
  const {
    classes: n
  } = e, r = Oe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, od, n);
  return h({}, n, r);
}, ad = ne(zn, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Wn
})(({
  theme: e,
  ownerState: n
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return h({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ut.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ut.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${ut.focused} .${ut.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[n.color].main,
      borderWidth: 2
    },
    [`&.${ut.error} .${ut.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${ut.disabled} .${ut.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, n.startAdornment && {
    paddingLeft: 14
  }, n.endAdornment && {
    paddingRight: 14
  }, n.multiline && h({
    padding: "16.5px 14px"
  }, n.size === "small" && {
    padding: "8.5px 14px"
  }));
}), ld = ne(Di, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, n) => n.notchedOutline
})(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
  };
}), cd = ne(Vn, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Ln
})(({
  theme: e,
  ownerState: n
}) => h({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, n.size === "small" && {
  padding: "8.5px 14px"
}, n.multiline && {
  padding: 0
}, n.startAdornment && {
  paddingLeft: 0
}, n.endAdornment && {
  paddingRight: 0
})), Mo = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i, s, a, l;
  const c = Te({
    props: n,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: m = "input",
    label: p,
    multiline: x = !1,
    notched: E,
    slots: g = {},
    type: v = "text"
  } = c, S = te(c, id), w = sd(c), C = Ot(), T = Tt({
    props: c,
    muiFormControl: C,
    states: ["required"]
  }), y = h({}, c, {
    color: T.color || "primary",
    disabled: T.disabled,
    error: T.error,
    focused: T.focused,
    formControl: C,
    fullWidth: d,
    hiddenLabel: T.hiddenLabel,
    multiline: x,
    size: T.size,
    type: v
  }), P = (r = (i = g.root) != null ? i : u.Root) != null ? r : ad, N = (s = (a = g.input) != null ? a : u.Input) != null ? s : cd;
  return /* @__PURE__ */ R(_o, h({
    slots: {
      root: P,
      input: N
    },
    renderSuffix: (B) => /* @__PURE__ */ R(ld, {
      ownerState: y,
      className: w.notchedOutline,
      label: p != null && p !== "" && T.required ? l || (l = /* @__PURE__ */ Se(b.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof E < "u" ? E : Boolean(B.startAdornment || B.filled || B.focused)
    }),
    fullWidth: d,
    inputComponent: m,
    multiline: x,
    ref: o,
    type: v
  }, S, {
    classes: h({}, w, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary"]), t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Input: t.elementType,
    Root: t.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: t.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: t.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: t.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The id of the `input` element.
   */
  id: t.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: t.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: t.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: t.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: t.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: t.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    input: t.elementType,
    root: t.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any
});
Mo.muiName = "Input";
const Fi = Mo;
function ud(e) {
  return xe("MuiFormLabel", e);
}
const dd = Ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Qt = dd, pd = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], fd = (e) => {
  const {
    classes: n,
    color: o,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${le(o)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Oe(c, ud, n);
}, md = ne("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, n) => h({}, n.root, e.color === "secondary" && n.colorSecondary, e.filled && n.filled)
})(({
  theme: e,
  ownerState: n
}) => h({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Qt.focused}`]: {
    color: (e.vars || e).palette[n.color].main
  },
  [`&.${Qt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Qt.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), hd = ne("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, n) => n.asterisk
})(({
  theme: e
}) => ({
  [`&.${Qt.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ai = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = te(r, pd), c = Ot(), u = Tt({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = h({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), m = fd(d);
  return /* @__PURE__ */ Se(md, h({
    as: a,
    ownerState: d,
    className: ae(m.root, s),
    ref: o
  }, l, {
    children: [i, u.required && /* @__PURE__ */ Se(hd, {
      ownerState: d,
      "aria-hidden": !0,
      className: m.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: t.oneOfType([t.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: t.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: t.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const bd = Ai;
function gd(e) {
  return xe("MuiInputLabel", e);
}
Ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const yd = ["disableAnimation", "margin", "shrink", "variant", "className"], vd = (e) => {
  const {
    classes: n,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, u = Oe({
    root: ["root", o && "formControl", !s && "animated", i && "shrink", r === "small" && "sizeSmall", a],
    asterisk: [l && "asterisk"]
  }, gd, n);
  return h({}, n, u);
}, xd = ne(bd, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Qt.asterisk}`]: n.asterisk
    }, n.root, o.formControl && n.formControl, o.size === "small" && n.sizeSmall, o.shrink && n.shrink, !o.disableAnimation && n.animated, n[o.variant]];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, n.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, n.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, n.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !n.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, n.variant === "filled" && h({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, n.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, n.shrink && h({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, n.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), n.variant === "outlined" && h({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, n.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, n.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  maxWidth: "calc(133% - 24px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), ji = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    name: "MuiInputLabel",
    props: n
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = te(r, yd), c = Ot();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Tt({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), m = h({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = vd(m);
  return /* @__PURE__ */ R(xd, h({
    "data-shrink": u,
    ownerState: m,
    ref: o,
    className: ae(p.root, a)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (ji.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: t.oneOfType([t.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), t.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: t.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: t.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: t.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: t.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: t.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: t.oneOfType([t.oneOf(["normal", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const Ed = ji;
function Td(e) {
  return xe("MuiFormControl", e);
}
Ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Od = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Cd = (e) => {
  const {
    classes: n,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${le(o)}`, r && "fullWidth"]
  };
  return Oe(i, Td, n);
}, Rd = ne("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, n) => h({}, n.root, n[`margin${le(e.margin)}`], e.fullWidth && n.fullWidth)
})(({
  ownerState: e
}) => h({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), Bi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: m = !1,
    hiddenLabel: p = !1,
    margin: x = "none",
    required: E = !1,
    size: g = "medium",
    variant: v = "outlined"
  } = r, S = te(r, Od), w = h({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: p,
    margin: x,
    required: E,
    size: g,
    variant: v
  }), C = Cd(w), [T, y] = b.useState(() => {
    let U = !1;
    return i && b.Children.forEach(i, (k) => {
      if (!to(k, ["Input", "Select"]))
        return;
      const A = to(k, ["Select"]) ? k.props.input : k;
      A && Fu(A.props) && (U = !0);
    }), U;
  }), [P, N] = b.useState(() => {
    let U = !1;
    return i && b.Children.forEach(i, (k) => {
      to(k, ["Input", "Select"]) && No(k.props, !0) && (U = !0);
    }), U;
  }), [B, F] = b.useState(!1);
  c && B && F(!1);
  const D = d !== void 0 && !c ? d : B;
  let V;
  if (process.env.NODE_ENV !== "production") {
    const U = b.useRef(!1);
    V = () => (U.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), U.current = !0, () => {
      U.current = !1;
    });
  }
  const ee = b.useMemo(() => ({
    adornedStart: T,
    setAdornedStart: y,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: D,
    fullWidth: m,
    hiddenLabel: p,
    size: g,
    onBlur: () => {
      F(!1);
    },
    onEmpty: () => {
      N(!1);
    },
    onFilled: () => {
      N(!0);
    },
    onFocus: () => {
      F(!0);
    },
    registerEffect: V,
    required: E,
    variant: v
  }), [T, a, c, u, P, D, m, p, V, E, g, v]);
  return /* @__PURE__ */ R($o.Provider, {
    value: ee,
    children: /* @__PURE__ */ R(Rd, h({
      as: l,
      ownerState: w,
      className: ae(C.root, s),
      ref: o
    }, S, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: t.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: t.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: t.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: t.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: t.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const Sd = Bi;
function wd(e) {
  return xe("MuiFormHelperText", e);
}
const $d = Ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Mr = $d;
var Dr;
const Pd = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Nd = (e) => {
  const {
    classes: n,
    contained: o,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${le(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Oe(u, wd, n);
}, _d = ne("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.size && n[`size${le(o.size)}`], o.contained && n.contained, o.filled && n.filled];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Mr.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Mr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, n.size === "small" && {
  marginTop: 4
}, n.contained && {
  marginLeft: 14,
  marginRight: 14
})), Wi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = te(r, Pd), c = Ot(), u = Tt({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = h({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), m = Nd(d);
  return /* @__PURE__ */ R(_d, h({
    as: a,
    ownerState: d,
    className: ae(m.root, s),
    ref: o
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Dr || (Dr = /* @__PURE__ */ R("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: t.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: t.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: t.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: t.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: t.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   */
  variant: t.oneOfType([t.oneOf(["filled", "outlined", "standard"]), t.string])
});
const Id = Wi, Li = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Li.displayName = "ListContext");
const kd = Li;
function Md(e) {
  return xe("MuiList", e);
}
Ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Dd = ["children", "className", "component", "dense", "disablePadding", "subheader"], Fd = (e) => {
  const {
    classes: n,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return Oe({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, Md, n);
}, Ad = ne("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, !o.disablePadding && n.padding, o.dense && n.dense, o.subheader && n.subheader];
  }
})(({
  ownerState: e
}) => h({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), zi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = te(r, Dd), m = b.useMemo(() => ({
    dense: l
  }), [l]), p = h({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), x = Fd(p);
  return /* @__PURE__ */ R(kd.Provider, {
    value: m,
    children: /* @__PURE__ */ Se(Ad, h({
      as: a,
      className: ae(x.root, s),
      ref: o,
      ownerState: p
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (zi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: t.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: t.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const jd = zi, Bd = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function io(e, n, o) {
  return e === n ? e.firstChild : n && n.nextElementSibling ? n.nextElementSibling : o ? null : e.firstChild;
}
function Fr(e, n, o) {
  return e === n ? o ? e.firstChild : e.lastChild : n && n.previousElementSibling ? n.previousElementSibling : o ? null : e.lastChild;
}
function Vi(e, n) {
  if (n === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : n.repeating ? o[0] === n.keys[0] : o.indexOf(n.keys.join("")) === 0;
}
function Gt(e, n, o, r, i, s) {
  let a = !1, l = i(e, n, n ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Vi(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Ui = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: m = "selectedMenu"
  } = n, p = te(n, Bd), x = b.useRef(null), E = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Bt(() => {
    i && x.current.focus();
  }, [i]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, T) => {
      const y = !x.current.style.width;
      if (C.clientHeight < x.current.clientHeight && y) {
        const P = `${mi(qe(C))}px`;
        x.current.style[T.direction === "rtl" ? "paddingLeft" : "paddingRight"] = P, x.current.style.width = `calc(100% + ${P})`;
      }
      return x.current;
    }
  }), []);
  const g = (C) => {
    const T = x.current, y = C.key, P = qe(T).activeElement;
    if (y === "ArrowDown")
      C.preventDefault(), Gt(T, P, u, c, io);
    else if (y === "ArrowUp")
      C.preventDefault(), Gt(T, P, u, c, Fr);
    else if (y === "Home")
      C.preventDefault(), Gt(T, null, u, c, io);
    else if (y === "End")
      C.preventDefault(), Gt(T, null, u, c, Fr);
    else if (y.length === 1) {
      const N = E.current, B = y.toLowerCase(), F = performance.now();
      N.keys.length > 0 && (F - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && B !== N.keys[0] && (N.repeating = !1)), N.lastTime = F, N.keys.push(B);
      const D = P && !N.repeating && Vi(P, N);
      N.previousKeyMatched && (D || Gt(T, P, !1, c, io, N)) ? C.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d(C);
  }, v = Ve(x, o);
  let S = -1;
  b.Children.forEach(a, (C, T) => {
    /* @__PURE__ */ b.isValidElement(C) && (process.env.NODE_ENV !== "production" && vt.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (m === "selectedMenu" && C.props.selected || S === -1) && (S = T));
  });
  const w = b.Children.map(a, (C, T) => {
    if (T === S) {
      const y = {};
      return s && (y.autoFocus = !0), C.props.tabIndex === void 0 && m === "selectedMenu" && (y.tabIndex = 0), /* @__PURE__ */ b.cloneElement(C, y);
    }
    return C;
  });
  return /* @__PURE__ */ R(jd, h({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: g,
    tabIndex: i ? 0 : -1
  }, p, {
    children: w
  }));
});
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: t.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: t.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: t.node,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: t.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: t.bool,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: t.oneOf(["menu", "selectedMenu"])
});
const Wd = Ui, Ld = (e) => {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, (n / 100).toFixed(2);
}, Ar = Ld;
function Lt() {
  const e = So(Bn);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e;
}
function zd(e) {
  return xe("MuiPaper", e);
}
Ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Vd = ["className", "component", "elevation", "square", "variant"], Ud = (e) => {
  const {
    square: n,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !n && "rounded", r === "elevation" && `elevation${o}`]
  };
  return Oe(s, zd, i);
}, qd = ne("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], !o.square && n.rounded, o.variant === "elevation" && n[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var o;
  return h({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !n.square && {
    borderRadius: e.shape.borderRadius
  }, n.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, n.variant === "elevation" && h({
    boxShadow: (e.vars || e).shadows[n.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Mt("#fff", Ar(n.elevation))}, ${Mt("#fff", Ar(n.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[n.elevation]
  }));
}), qi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = te(r, Vd), d = h({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), m = Ud(d);
  return process.env.NODE_ENV !== "production" && Lt().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ R(qd, h({
    as: s,
    ownerState: d,
    className: ae(m.root, i),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (qi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: rn(gi, (e) => {
    const {
      elevation: n,
      variant: o
    } = e;
    return n > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${n}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: t.oneOfType([t.oneOf(["elevation", "outlined"]), t.string])
});
const Un = qi;
function fo(e, n) {
  return fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, fo(e, n);
}
function Ki(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, fo(e, n);
}
const jr = {
  disabled: !1
};
var Kd = process.env.NODE_ENV !== "production" ? t.oneOfType([t.number, t.shape({
  enter: t.number,
  exit: t.number,
  appear: t.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && t.oneOfType([t.string, t.shape({
  enter: t.string,
  exit: t.string,
  active: t.string
}), t.shape({
  enter: t.string,
  enterDone: t.string,
  enterActive: t.string,
  exit: t.string,
  exitDone: t.string,
  exitActive: t.string
})]);
const On = ot.createContext(null);
var Gd = function(n) {
  return n.scrollTop;
}, Yt = "unmounted", ht = "exited", bt = "entering", It = "entered", mo = "exiting", ct = /* @__PURE__ */ function(e) {
  Ki(n, e);
  function n(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = ht, s.appearStatus = bt) : c = It : r.unmountOnExit || r.mountOnEnter ? c = Yt : c = ht, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  n.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Yt ? {
      status: ht
    } : null;
  };
  var o = n.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== bt && a !== It && (s = bt) : (a === bt || a === It) && (s = mo);
    }
    this.updateStatus(!1, s);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, o.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : dn.findDOMNode(this);
          a && Gd(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === ht && this.setState({
        status: Yt
      });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [dn.findDOMNode(this), l], u = c[0], d = c[1], m = this.getTimeouts(), p = l ? m.appear : m.enter;
    if (!i && !a || jr.disabled) {
      this.safeSetState({
        status: It
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: bt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(p, function() {
        s.safeSetState({
          status: It
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : dn.findDOMNode(this);
    if (!s || jr.disabled) {
      this.safeSetState({
        status: ht
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: mo
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: ht
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, o.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : dn.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Yt)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = te(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ot.createElement(On.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : ot.cloneElement(ot.Children.only(a), l))
    );
  }, n;
}(ot.Component);
ct.contextType = On;
ct.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: t.shape({
    current: typeof Element > "u" ? t.any : function(e, n, o, r, i, s) {
      var a = e[n];
      return t.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, n, o, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: t.oneOfType([t.func.isRequired, t.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: t.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: t.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: t.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: t.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: t.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: t.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(n) {
    var o = Kd;
    n.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return o.apply(void 0, [n].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: t.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: t.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: t.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: t.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: t.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: t.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: t.func
} : {};
function _t() {
}
ct.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _t,
  onEntering: _t,
  onEntered: _t,
  onExit: _t,
  onExiting: _t,
  onExited: _t
};
ct.UNMOUNTED = Yt;
ct.EXITED = ht;
ct.ENTERING = bt;
ct.ENTERED = It;
ct.EXITING = mo;
const Gi = ct;
function Hd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Do(e, n) {
  var o = function(s) {
    return n && hn(s) ? n(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Fs.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Yd(e, n) {
  e = e || {}, n = n || {};
  function o(d) {
    return d in n ? n[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in n ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in n) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = o(u);
      }
    l[c] = o(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = o(i[a]);
  return l;
}
function yt(e, n, o) {
  return o[n] != null ? o[n] : e.props[n];
}
function Xd(e, n) {
  return Do(e.children, function(o) {
    return bn(o, {
      onExited: n.bind(null, o),
      in: !0,
      appear: yt(o, "appear", e),
      enter: yt(o, "enter", e),
      exit: yt(o, "exit", e)
    });
  });
}
function Jd(e, n, o) {
  var r = Do(e.children), i = Yd(n, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (hn(a)) {
      var l = s in n, c = s in r, u = n[s], d = hn(u) && !u.props.in;
      c && (!l || d) ? i[s] = bn(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: yt(a, "exit", e),
        enter: yt(a, "enter", e)
      }) : !c && l && !d ? i[s] = bn(a, {
        in: !1
      }) : c && l && hn(u) && (i[s] = bn(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: yt(a, "exit", e),
        enter: yt(a, "enter", e)
      }));
    }
  }), i;
}
var Zd = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, Qd = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, Fo = /* @__PURE__ */ function(e) {
  Ki(n, e);
  function n(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Hd(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var o = n.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Xd(i, l) : Jd(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = Do(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = h({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = te(i, ["component", "childFactory"]), c = this.state.contextValue, u = Zd(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ot.createElement(On.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ot.createElement(On.Provider, {
      value: c
    }, /* @__PURE__ */ ot.createElement(s, l, u));
  }, n;
}(ot.Component);
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: t.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: t.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: t.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: t.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: t.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: t.func
} : {};
Fo.defaultProps = Qd;
const ep = Fo, Hi = (e) => e.scrollTop;
function Cn(e, n) {
  var o, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (o = a.transitionDuration) != null ? o : typeof i == "number" ? i : i[n.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[n.mode] : s,
    delay: a.transitionDelay
  };
}
const tp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ho(e) {
  return `scale(${e}, ${e ** 2})`;
}
const np = {
  entering: {
    opacity: 1,
    transform: ho(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, so = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ao = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: p,
    onExiting: x,
    style: E,
    timeout: g = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Gi
  } = n, S = te(n, tp), w = b.useRef(), C = b.useRef(), T = Lt(), y = b.useRef(null), P = Ve(y, s.ref, o), N = (A) => (M) => {
    if (A) {
      const oe = y.current;
      M === void 0 ? A(oe) : A(oe, M);
    }
  }, B = N(d), F = N((A, M) => {
    Hi(A);
    const {
      duration: oe,
      delay: ie,
      easing: ce
    } = Cn({
      style: E,
      timeout: g,
      easing: a
    }, {
      mode: "enter"
    });
    let O;
    g === "auto" ? (O = T.transitions.getAutoHeightDuration(A.clientHeight), C.current = O) : O = oe, A.style.transition = [T.transitions.create("opacity", {
      duration: O,
      delay: ie
    }), T.transitions.create("transform", {
      duration: so ? O : O * 0.666,
      delay: ie,
      easing: ce
    })].join(","), c && c(A, M);
  }), D = N(u), V = N(x), ee = N((A) => {
    const {
      duration: M,
      delay: oe,
      easing: ie
    } = Cn({
      style: E,
      timeout: g,
      easing: a
    }, {
      mode: "exit"
    });
    let ce;
    g === "auto" ? (ce = T.transitions.getAutoHeightDuration(A.clientHeight), C.current = ce) : ce = M, A.style.transition = [T.transitions.create("opacity", {
      duration: ce,
      delay: oe
    }), T.transitions.create("transform", {
      duration: so ? ce : ce * 0.666,
      delay: so ? oe : oe || ce * 0.333,
      easing: ie
    })].join(","), A.style.opacity = 0, A.style.transform = ho(0.75), m && m(A);
  }), U = N(p), k = (A) => {
    g === "auto" && (w.current = setTimeout(A, C.current || 0)), r && r(y.current, A);
  };
  return b.useEffect(() => () => {
    clearTimeout(w.current);
  }, []), /* @__PURE__ */ R(v, h({
    appear: i,
    in: l,
    nodeRef: y,
    onEnter: F,
    onEntered: D,
    onEntering: B,
    onExit: ee,
    onExited: U,
    onExiting: V,
    addEndListener: k,
    timeout: g === "auto" ? null : g
  }, S, {
    children: (A, M) => /* @__PURE__ */ b.cloneElement(s, h({
      style: h({
        opacity: 0,
        transform: ho(0.75),
        visibility: A === "exited" && !l ? "hidden" : void 0
      }, np[A], E, s.props.style),
      ref: P
    }, M))
  }));
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: t.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: t.bool,
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: t.oneOfType([t.shape({
    enter: t.string,
    exit: t.string
  }), t.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: t.bool,
  /**
   * @ignore
   */
  onEnter: t.func,
  /**
   * @ignore
   */
  onEntered: t.func,
  /**
   * @ignore
   */
  onEntering: t.func,
  /**
   * @ignore
   */
  onExit: t.func,
  /**
   * @ignore
   */
  onExited: t.func,
  /**
   * @ignore
   */
  onExiting: t.func,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
Ao.muiSupportAuto = !0;
const op = Ao, rp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ip = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Yi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Lt(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: m,
    onEntering: p,
    onExit: x,
    onExited: E,
    onExiting: g,
    style: v,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Gi
  } = n, C = te(n, rp), T = b.useRef(null), y = Ve(T, l.ref, o), P = (k) => (A) => {
    if (k) {
      const M = T.current;
      A === void 0 ? k(M) : k(M, A);
    }
  }, N = P(p), B = P((k, A) => {
    Hi(k);
    const M = Cn({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    k.style.webkitTransition = r.transitions.create("opacity", M), k.style.transition = r.transitions.create("opacity", M), d && d(k, A);
  }), F = P(m), D = P(g), V = P((k) => {
    const A = Cn({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    k.style.webkitTransition = r.transitions.create("opacity", A), k.style.transition = r.transitions.create("opacity", A), x && x(k);
  }), ee = P(E);
  return /* @__PURE__ */ R(w, h({
    appear: a,
    in: u,
    nodeRef: T,
    onEnter: B,
    onEntered: F,
    onEntering: N,
    onExit: V,
    onExited: ee,
    onExiting: D,
    addEndListener: (k) => {
      s && s(T.current, k);
    },
    timeout: S
  }, C, {
    children: (k, A) => /* @__PURE__ */ b.cloneElement(l, h({
      style: h({
        opacity: 0,
        visibility: k === "exited" && !u ? "hidden" : void 0
      }, ip[k], v, l.props.style),
      ref: y
    }, A))
  }));
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: t.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: t.bool,
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: t.oneOfType([t.shape({
    enter: t.string,
    exit: t.string
  }), t.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: t.bool,
  /**
   * @ignore
   */
  onEnter: t.func,
  /**
   * @ignore
   */
  onEntered: t.func,
  /**
   * @ignore
   */
  onEntering: t.func,
  /**
   * @ignore
   */
  onExit: t.func,
  /**
   * @ignore
   */
  onExited: t.func,
  /**
   * @ignore
   */
  onExiting: t.func,
  /**
   * @ignore
   */
  style: t.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
const Xi = Yi;
function sp(e) {
  return xe("MuiBackdrop", e);
}
Ce("MuiBackdrop", ["root", "invisible"]);
const ap = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], lp = (e) => {
  const {
    classes: n,
    invisible: o
  } = e;
  return Oe({
    root: ["root", o && "invisible"]
  }, sp, n);
}, cp = ne("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.invisible && n.invisible];
  }
})(({
  ownerState: e
}) => h({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Ji = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i, s;
  const a = Te({
    props: n,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: m = {},
    invisible: p = !1,
    open: x,
    slotProps: E = {},
    slots: g = {},
    TransitionComponent: v = Xi,
    transitionDuration: S
  } = a, w = te(a, ap), C = h({}, a, {
    component: u,
    invisible: p
  }), T = lp(C), y = (r = E.root) != null ? r : m.root;
  return /* @__PURE__ */ R(v, h({
    in: x,
    timeout: S
  }, w, {
    children: /* @__PURE__ */ R(cp, h({
      "aria-hidden": !0
    }, y, {
      as: (i = (s = g.root) != null ? s : d.Root) != null ? i : u,
      className: ae(T.root, c, y == null ? void 0 : y.className),
      ownerState: h({}, C, y == null ? void 0 : y.ownerState),
      classes: T,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Root: t.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: t.shape({
    root: t.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: t.bool,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: t.shape({
    root: t.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: t.shape({
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: t.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })])
});
const Zi = Ji, up = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"], dp = (e) => e.classes, pp = ne("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, !o.open && o.exited && n.hidden];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !n.open && n.exited && {
  visibility: "hidden"
})), fp = ne(Zi, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, n) => n.backdrop
})({
  zIndex: -1
}), Qi = /* @__PURE__ */ b.forwardRef(function(n, o) {
  var r, i, s, a, l, c;
  const u = Te({
    name: "MuiModal",
    props: n
  }), {
    BackdropComponent: d = fp,
    BackdropProps: m,
    closeAfterTransition: p = !1,
    children: x,
    component: E,
    components: g = {},
    componentsProps: v = {},
    disableAutoFocus: S = !1,
    disableEnforceFocus: w = !1,
    disableEscapeKeyDown: C = !1,
    disablePortal: T = !1,
    disableRestoreFocus: y = !1,
    disableScrollLock: P = !1,
    hideBackdrop: N = !1,
    keepMounted: B = !1,
    slotProps: F,
    slots: D,
    // eslint-disable-next-line react/prop-types
    theme: V
  } = u, ee = te(u, up), [U, k] = b.useState(!0), A = {
    closeAfterTransition: p,
    disableAutoFocus: S,
    disableEnforceFocus: w,
    disableEscapeKeyDown: C,
    disablePortal: T,
    disableRestoreFocus: y,
    disableScrollLock: P,
    hideBackdrop: N,
    keepMounted: B
  }, M = h({}, u, A, {
    exited: U
  }), oe = dp(M), ie = (r = (i = D == null ? void 0 : D.root) != null ? i : g.Root) != null ? r : pp, ce = (s = (a = D == null ? void 0 : D.backdrop) != null ? a : g.Backdrop) != null ? s : d, O = (l = F == null ? void 0 : F.root) != null ? l : v.root, $ = (c = F == null ? void 0 : F.backdrop) != null ? c : v.backdrop;
  return /* @__PURE__ */ R(vl, h({
    slots: {
      root: ie,
      backdrop: ce
    },
    slotProps: {
      root: () => h({}, lo(O, M), !vn(ie) && {
        as: E,
        theme: V
      }),
      backdrop: () => h({}, m, lo($, M))
    },
    onTransitionEnter: () => k(!1),
    onTransitionExited: () => k(!0),
    ref: o
  }, ee, {
    classes: oe
  }, A, {
    children: x
  }));
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: t.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: t.object,
  /**
   * A single child content element.
   */
  children: sn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: t.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: t.shape({
    Backdrop: t.elementType,
    Root: t.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: t.shape({
    backdrop: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: t.oneOfType([jt, t.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: t.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: t.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: t.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: t.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: t.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: t.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: t.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: t.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: t.shape({
    backdrop: t.oneOfType([t.func, t.object]),
    root: t.oneOfType([t.func, t.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: t.shape({
    backdrop: t.elementType,
    root: t.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const es = Qi;
function mp(e) {
  return xe("MuiPopover", e);
}
Ce("MuiPopover", ["root", "paper"]);
const hp = ["onEntering"], bp = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function Br(e, n) {
  let o = 0;
  return typeof n == "number" ? o = n : n === "center" ? o = e.height / 2 : n === "bottom" && (o = e.height), o;
}
function Wr(e, n) {
  let o = 0;
  return typeof n == "number" ? o = n : n === "center" ? o = e.width / 2 : n === "right" && (o = e.width), o;
}
function Lr(e) {
  return [e.horizontal, e.vertical].map((n) => typeof n == "number" ? `${n}px` : n).join(" ");
}
function gn(e) {
  return typeof e == "function" ? e() : e;
}
const gp = (e) => {
  const {
    classes: n
  } = e;
  return Oe({
    root: ["root"],
    paper: ["paper"]
  }, mp, n);
}, yp = ne(es, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), vp = ne(Un, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, n) => n.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ts = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: m,
    elevation: p = 8,
    marginThreshold: x = 16,
    open: E,
    PaperProps: g = {},
    transformOrigin: v = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: S = op,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: C
    } = {}
  } = r, T = te(r.TransitionProps, hp), y = te(r, bp), P = b.useRef(), N = Ve(P, g.ref), B = h({}, r, {
    anchorOrigin: a,
    anchorReference: c,
    elevation: p,
    marginThreshold: x,
    PaperProps: g,
    transformOrigin: v,
    TransitionComponent: S,
    transitionDuration: w,
    TransitionProps: T
  }), F = gp(B), D = b.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const O = gn(s), $ = O && O.nodeType === 1 ? O : qe(P.current).body, L = $.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const K = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && K.top === 0 && K.left === 0 && K.right === 0 && K.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: L.top + Br(L, a.vertical),
      left: L.left + Wr(L, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), V = b.useCallback((O) => ({
    vertical: Br(O, v.vertical),
    horizontal: Wr(O, v.horizontal)
  }), [v.horizontal, v.vertical]), ee = b.useCallback((O) => {
    const $ = {
      width: O.offsetWidth,
      height: O.offsetHeight
    }, L = V($);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Lr(L)
      };
    const K = D();
    let j = K.top - L.vertical, Y = K.left - L.horizontal;
    const z = j + $.height, J = Y + $.width, Z = xt(gn(s)), H = Z.innerHeight - x, Q = Z.innerWidth - x;
    if (j < x) {
      const X = j - x;
      j -= X, L.vertical += X;
    } else if (z > H) {
      const X = z - H;
      j -= X, L.vertical += X;
    }
    if (process.env.NODE_ENV !== "production" && $.height > H && $.height && H && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${$.height - H}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), Y < x) {
      const X = Y - x;
      Y -= X, L.horizontal += X;
    } else if (J > Q) {
      const X = J - Q;
      Y -= X, L.horizontal += X;
    }
    return {
      top: `${Math.round(j)}px`,
      left: `${Math.round(Y)}px`,
      transformOrigin: Lr(L)
    };
  }, [s, c, D, V, x]), [U, k] = b.useState(E), A = b.useCallback(() => {
    const O = P.current;
    if (!O)
      return;
    const $ = ee(O);
    $.top !== null && (O.style.top = $.top), $.left !== null && (O.style.left = $.left), O.style.transformOrigin = $.transformOrigin, k(!0);
  }, [ee]), M = (O, $) => {
    C && C(O, $), A();
  }, oe = () => {
    k(!1);
  };
  b.useEffect(() => {
    E && A();
  }), b.useImperativeHandle(i, () => E ? {
    updatePosition: () => {
      A();
    }
  } : null, [E, A]), b.useEffect(() => {
    if (!E)
      return;
    const O = pi(() => {
      A();
    }), $ = xt(s);
    return $.addEventListener("resize", O), () => {
      O.clear(), $.removeEventListener("resize", O);
    };
  }, [s, E, A]);
  let ie = w;
  w === "auto" && !S.muiSupportAuto && (ie = void 0);
  const ce = m || (s ? qe(gn(s)).body : void 0);
  return /* @__PURE__ */ R(yp, h({
    BackdropProps: {
      invisible: !0
    },
    className: ae(F.root, d),
    container: ce,
    open: E,
    ref: o,
    ownerState: B
  }, y, {
    children: /* @__PURE__ */ R(S, h({
      appear: !0,
      in: E,
      onEntering: M,
      onExited: oe,
      timeout: ie
    }, T, {
      children: /* @__PURE__ */ R(vp, h({
        elevation: p
      }, g, {
        ref: N,
        className: ae(F.paper, g.className)
      }, U ? void 0 : {
        style: h({}, g.style, {
          opacity: 0
        })
      }, {
        ownerState: B,
        children: u
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: at,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: rn(t.oneOfType([jt, t.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const n = gn(e.anchorEl);
      if (n && n.nodeType === 1) {
        const o = n.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element instance but it's \`${n}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: t.shape({
    horizontal: t.oneOfType([t.oneOf(["center", "left", "right"]), t.number]).isRequired,
    vertical: t.oneOfType([t.oneOf(["bottom", "center", "top"]), t.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: t.shape({
    left: t.number.isRequired,
    top: t.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: t.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: t.oneOfType([jt, t.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: gi,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: t.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: t.shape({
    component: Eo
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: t.shape({
    horizontal: t.oneOfType([t.oneOf(["center", "left", "right"]), t.number]).isRequired,
    vertical: t.oneOfType([t.oneOf(["bottom", "center", "top"]), t.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: t.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: t.object
});
const xp = ts;
function Ep(e) {
  return xe("MuiMenu", e);
}
Ce("MuiMenu", ["root", "paper", "list"]);
const Tp = ["onEntering"], Op = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], Cp = {
  vertical: "top",
  horizontal: "right"
}, Rp = {
  vertical: "top",
  horizontal: "left"
}, Sp = (e) => {
  const {
    classes: n
  } = e;
  return Oe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Ep, n);
}, wp = ne(xp, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), $p = ne(Un, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, n) => n.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tapable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Pp = ne(Wd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, n) => n.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ns = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: l = {},
    onClose: c,
    open: u,
    PaperProps: d = {},
    PopoverClasses: m,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: x
    } = {},
    variant: E = "selectedMenu"
  } = r, g = te(r.TransitionProps, Tp), v = te(r, Op), S = Lt(), w = S.direction === "rtl", C = h({}, r, {
    autoFocus: i,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: x,
    PaperProps: d,
    transitionDuration: p,
    TransitionProps: g,
    variant: E
  }), T = Sp(C), y = i && !a && u, P = b.useRef(null), N = (D, V) => {
    P.current && P.current.adjustStyleForScrollbar(D, S), x && x(D, V);
  }, B = (D) => {
    D.key === "Tab" && (D.preventDefault(), c && c(D, "tabKeyDown"));
  };
  let F = -1;
  return b.Children.map(s, (D, V) => {
    /* @__PURE__ */ b.isValidElement(D) && (process.env.NODE_ENV !== "production" && vt.isFragment(D) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), D.props.disabled || (E === "selectedMenu" && D.props.selected || F === -1) && (F = V));
  }), /* @__PURE__ */ R(wp, h({
    onClose: c,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? Cp : Rp,
    PaperProps: h({
      component: $p
    }, d, {
      classes: h({}, d.classes, {
        root: T.paper
      })
    }),
    className: T.root,
    open: u,
    ref: o,
    transitionDuration: p,
    TransitionProps: h({
      onEntering: N
    }, g),
    ownerState: C
  }, v, {
    classes: m,
    children: /* @__PURE__ */ R(Pp, h({
      onKeyDown: B,
      actions: P,
      autoFocus: i && (F === -1 || a),
      autoFocusItem: y,
      variant: E
    }, l, {
      className: ae(T.list, l.className),
      children: s
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ns.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: t.oneOfType([jt, t.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: t.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: t.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: t.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: t.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: t.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: t.oneOfType([t.oneOf(["auto"]), t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: t.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: t.oneOf(["menu", "selectedMenu"])
});
const Np = ns;
function _p(e) {
  return xe("MuiNativeSelect", e);
}
const Ip = Ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]), jo = Ip, kp = ["className", "disabled", "IconComponent", "inputRef", "variant"], Mp = (e) => {
  const {
    classes: n,
    variant: o,
    disabled: r,
    multiple: i,
    open: s
  } = e, a = {
    select: ["select", o, r && "disabled", i && "multiple"],
    icon: ["icon", `icon${le(o)}`, s && "iconOpen", r && "disabled"]
  };
  return Oe(a, _p, n);
}, os = ({
  ownerState: e,
  theme: n
}) => h({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": h({}, n.vars ? {
    backgroundColor: `rgba(${n.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: n.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${jo.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (n.vars || n).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (n.vars || n).shape.borderRadius,
  "&:focus": {
    borderRadius: (n.vars || n).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Dp = ne("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: lt,
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.select, n[o.variant], {
      [`&.${jo.multiple}`]: n.multiple
    }];
  }
})(os), rs = ({
  ownerState: e,
  theme: n
}) => h({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (n.vars || n).palette.action.active,
  [`&.${jo.disabled}`]: {
    color: (n.vars || n).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), Fp = ne("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.icon, o.variant && n[`icon${le(o.variant)}`], o.open && n.iconOpen];
  }
})(rs), is = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    className: r,
    disabled: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard"
  } = n, c = te(n, kp), u = h({}, n, {
    disabled: i,
    variant: l
  }), d = Mp(u);
  return /* @__PURE__ */ Se(b.Fragment, {
    children: [/* @__PURE__ */ R(Dp, h({
      ownerState: u,
      className: ae(d.select, r),
      disabled: i,
      ref: a || o
    }, c)), n.multiple ? null : /* @__PURE__ */ R(Fp, {
      as: s,
      ownerState: u,
      className: d.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (is.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object,
  /**
   * The CSS class name of the select element.
   */
  className: t.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: t.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: t.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: at,
  /**
   * @ignore
   */
  multiple: t.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: t.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * The input value.
   */
  value: t.any,
  /**
   * The variant to use.
   */
  variant: t.oneOf(["standard", "outlined", "filled"])
});
const Ap = is;
function jp(e) {
  return xe("MuiSelect", e);
}
const Bp = Ce("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]), fn = Bp;
var zr;
const Wp = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Lp = ne("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${fn.select}`]: n.select
      },
      {
        [`&.${fn.select}`]: n[o.variant]
      },
      {
        [`&.${fn.multiple}`]: n.multiple
      }
    ];
  }
})(os, {
  // Win specificity over the input base
  [`&.${fn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), zp = ne("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.icon, o.variant && n[`icon${le(o.variant)}`], o.open && n.iconOpen];
  }
})(rs), Vp = ne("input", {
  shouldForwardProp: (e) => Mu(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, n) => n.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Vr(e, n) {
  return typeof n == "object" && n !== null ? e === n : String(e) === String(n);
}
function Up(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const qp = (e) => {
  const {
    classes: n,
    variant: o,
    disabled: r,
    multiple: i,
    open: s
  } = e, a = {
    select: ["select", o, r && "disabled", i && "multiple"],
    icon: ["icon", `icon${le(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Oe(a, jp, n);
}, ss = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: m,
    displayEmpty: p,
    IconComponent: x,
    inputRef: E,
    labelId: g,
    MenuProps: v = {},
    multiple: S,
    name: w,
    onBlur: C,
    onChange: T,
    onClose: y,
    onFocus: P,
    onOpen: N,
    open: B,
    readOnly: F,
    renderValue: D,
    SelectDisplayProps: V = {},
    tabIndex: ee,
    value: U,
    variant: k = "standard"
  } = n, A = te(n, Wp), [M, oe] = mr({
    controlled: U,
    default: d,
    name: "Select"
  }), [ie, ce] = mr({
    controlled: B,
    default: u,
    name: "Select"
  }), O = b.useRef(null), $ = b.useRef(null), [L, K] = b.useState(null), {
    current: j
  } = b.useRef(B != null), [Y, z] = b.useState(), J = Ve(o, E), Z = b.useCallback((G) => {
    $.current = G, G && K(G);
  }, []), H = L == null ? void 0 : L.parentNode;
  b.useImperativeHandle(J, () => ({
    focus: () => {
      $.current.focus();
    },
    node: O.current,
    value: M
  }), [M]), b.useEffect(() => {
    u && ie && L && !j && (z(a ? null : H.clientWidth), $.current.focus());
  }, [L, a]), b.useEffect(() => {
    s && $.current.focus();
  }, [s]), b.useEffect(() => {
    if (!g)
      return;
    const G = qe($.current).getElementById(g);
    if (G) {
      const he = () => {
        getSelection().isCollapsed && $.current.focus();
      };
      return G.addEventListener("click", he), () => {
        G.removeEventListener("click", he);
      };
    }
  }, [g]);
  const Q = (G, he) => {
    G ? N && N(he) : y && y(he), j || (z(a ? null : H.clientWidth), ce(G));
  }, X = (G) => {
    G.button === 0 && (G.preventDefault(), $.current.focus(), Q(!0, G));
  }, I = (G) => {
    Q(!1, G);
  }, fe = b.Children.toArray(l), q = (G) => {
    const he = fe.map((ze) => ze.props.value).indexOf(G.target.value);
    if (he === -1)
      return;
    const Ie = fe[he];
    oe(Ie.props.value), T && T(G, Ie);
  }, $e = (G) => (he) => {
    let Ie;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        Ie = Array.isArray(M) ? M.slice() : [];
        const ze = M.indexOf(G.props.value);
        ze === -1 ? Ie.push(G.props.value) : Ie.splice(ze, 1);
      } else
        Ie = G.props.value;
      if (G.props.onClick && G.props.onClick(he), M !== Ie && (oe(Ie), T)) {
        const ze = he.nativeEvent || he, ft = new ze.constructor(ze.type, ze);
        Object.defineProperty(ft, "target", {
          writable: !0,
          value: {
            value: Ie,
            name: w
          }
        }), T(ft, G);
      }
      S || Q(!1, he);
    }
  }, Fe = (G) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(G.key) !== -1 && (G.preventDefault(), Q(!0, G));
  }, Ae = L !== null && ie, Pe = (G) => {
    !Ae && C && (Object.defineProperty(G, "target", {
      writable: !0,
      value: {
        value: M,
        name: w
      }
    }), C(G));
  };
  delete A["aria-invalid"];
  let je, Ke;
  const Me = [];
  let Ge = !1, He = !1;
  (No({
    value: M
  }) || p) && (D ? je = D(M) : Ge = !0);
  const et = fe.map((G, he, Ie) => {
    var ze, ft, cn, un;
    if (!/* @__PURE__ */ b.isValidElement(G))
      return null;
    process.env.NODE_ENV !== "production" && vt.isFragment(G) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let tt;
    if (S) {
      if (!Array.isArray(M))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : dt(2));
      tt = M.some((nt) => Vr(nt, G.props.value)), tt && Ge && Me.push(G.props.children);
    } else
      tt = Vr(M, G.props.value), tt && Ge && (Ke = G.props.children);
    if (tt && (He = !0), G.props.value === void 0)
      return /* @__PURE__ */ b.cloneElement(G, {
        "aria-readonly": !0,
        role: "option"
      });
    const Kn = () => {
      if (M)
        return tt;
      const nt = Ie.find((Ct) => {
        var it;
        return (Ct == null || (it = Ct.props) == null ? void 0 : it.value) !== void 0 && Ct.props.disabled !== !0;
      });
      return G === nt ? !0 : tt;
    };
    return /* @__PURE__ */ b.cloneElement(G, {
      "aria-selected": tt ? "true" : "false",
      onClick: $e(G),
      onKeyUp: (nt) => {
        nt.key === " " && nt.preventDefault(), G.props.onKeyUp && G.props.onKeyUp(nt);
      },
      role: "option",
      selected: ((ze = Ie[0]) == null || (ft = ze.props) == null ? void 0 : ft.value) === void 0 || ((cn = Ie[0]) == null || (un = cn.props) == null ? void 0 : un.disabled) === !0 ? Kn() : tt,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": G.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (!He && !S && M !== "") {
      const G = fe.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${M}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${G.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [He, fe, S, w, M]), Ge && (S ? Me.length === 0 ? je = null : je = Me.reduce((G, he, Ie) => (G.push(he), Ie < Me.length - 1 && G.push(", "), G), []) : je = Ke);
  let We = Y;
  !a && j && L && (We = H.clientWidth);
  let Ye;
  typeof ee < "u" ? Ye = ee : Ye = m ? null : 0;
  const Le = V.id || (w ? `mui-component-select-${w}` : void 0), pe = h({}, n, {
    variant: k,
    value: M,
    open: Ae
  }), re = qp(pe);
  return /* @__PURE__ */ Se(b.Fragment, {
    children: [/* @__PURE__ */ R(Lp, h({
      ref: Z,
      tabIndex: Ye,
      role: "button",
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Ae ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [g, Le].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: Fe,
      onMouseDown: m || F ? null : X,
      onBlur: Pe,
      onFocus: P
    }, V, {
      ownerState: pe,
      className: ae(V.className, re.select, c),
      id: Le,
      children: Up(je) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        zr || (zr = /* @__PURE__ */ R("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : je
    })), /* @__PURE__ */ R(Vp, h({
      value: Array.isArray(M) ? M.join(",") : M,
      name: w,
      ref: O,
      "aria-hidden": !0,
      onChange: q,
      tabIndex: -1,
      disabled: m,
      className: re.nativeInput,
      autoFocus: s,
      ownerState: pe
    }, A)), /* @__PURE__ */ R(zp, {
      as: x,
      className: re.icon,
      ownerState: pe
    }), /* @__PURE__ */ R(Np, h({
      id: `menu-${w || ""}`,
      anchorEl: H,
      open: Ae,
      onClose: I,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, v, {
      MenuListProps: h({
        "aria-labelledby": g,
        role: "listbox",
        disableListWrap: !0
      }, v.MenuListProps),
      PaperProps: h({}, v.PaperProps, {
        style: h({
          minWidth: We
        }, v.PaperProps != null ? v.PaperProps.style : null)
      }),
      children: et
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ss.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": t.string,
  /**
   * @ignore
   */
  "aria-label": t.string,
  /**
   * @ignore
   */
  autoFocus: t.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: t.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object,
  /**
   * The CSS class name of the select element.
   */
  className: t.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: t.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: t.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: t.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: t.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: at,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: t.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: t.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: t.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: t.string,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool,
  /**
   * @ignore
   */
  readOnly: t.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: t.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: t.object,
  /**
   * @ignore
   */
  tabIndex: t.oneOfType([t.number, t.string]),
  /**
   * @ignore
   */
  type: t.any,
  /**
   * The input value.
   */
  value: t.any,
  /**
   * The variant to use.
   */
  variant: t.oneOf(["standard", "outlined", "filled"])
});
const Kp = ss;
function Gp(e) {
  return xe("MuiSvgIcon", e);
}
Ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Hp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Yp = (e) => {
  const {
    color: n,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", n !== "inherit" && `color${le(n)}`, `fontSize${le(o)}`]
  };
  return Oe(i, Gp, r);
}, Xp = ne("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.color !== "inherit" && n[`color${le(o.color)}`], n[`fontSize${le(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var o, r, i, s, a, l, c, u, d, m, p, x, E, g, v, S, w;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (i = e.transitions) == null || (s = i.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (m = d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
    }[n.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (x = (e.vars || e).palette) == null || (E = x[n.color]) == null ? void 0 : E.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (v = g.action) == null ? void 0 : v.active,
      disabled: (S = (e.vars || e).palette) == null || (w = S.action) == null ? void 0 : w.disabled,
      inherit: void 0
    }[n.color]
  };
}), Bo = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = r, x = te(r, Hp), E = h({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: n.fontSize,
    inheritViewBox: d,
    viewBox: p
  }), g = {};
  d || (g.viewBox = p);
  const v = Yp(E);
  return /* @__PURE__ */ Se(Xp, h({
    as: l,
    className: ae(v.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: o
  }, g, x, {
    ownerState: E,
    children: [i, m ? /* @__PURE__ */ R("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: t.oneOfType([t.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: t.oneOfType([t.oneOf(["inherit", "large", "medium", "small"]), t.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: t.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: t.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: t.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: t.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: t.string
});
Bo.muiName = "SvgIcon";
const Ur = Bo;
function Jp(e, n) {
  function o(r, i) {
    return /* @__PURE__ */ R(Ur, h({
      "data-testid": `${n}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${n}Icon`), o.muiName = Ur.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(o));
}
const Zp = Jp(/* @__PURE__ */ R("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var qr, Kr;
const Qp = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], ef = (e) => {
  const {
    classes: n
  } = e;
  return n;
}, Wo = {
  name: "MuiSelect",
  overridesResolver: (e, n) => n.root,
  shouldForwardProp: (e) => lt(e) && e !== "variant",
  slot: "Root"
}, tf = ne(ki, Wo)(""), nf = ne(Fi, Wo)(""), of = ne(Mi, Wo)(""), Lo = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    name: "MuiSelect",
    props: n
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Zp,
    id: m,
    input: p,
    inputProps: x,
    label: E,
    labelId: g,
    MenuProps: v,
    multiple: S = !1,
    native: w = !1,
    onClose: C,
    onOpen: T,
    open: y,
    renderValue: P,
    SelectDisplayProps: N,
    variant: B = "outlined"
  } = r, F = te(r, Qp), D = w ? Ap : Kp, V = Ot(), U = Tt({
    props: r,
    muiFormControl: V,
    states: ["variant"]
  }).variant || B, k = p || {
    standard: qr || (qr = /* @__PURE__ */ R(tf, {})),
    outlined: /* @__PURE__ */ R(nf, {
      label: E
    }),
    filled: Kr || (Kr = /* @__PURE__ */ R(of, {}))
  }[U], A = h({}, r, {
    variant: U,
    classes: a
  }), M = ef(A), oe = Ve(o, k.ref);
  return /* @__PURE__ */ R(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(k, h({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: D,
      inputProps: h({
        children: s,
        IconComponent: d,
        variant: U,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: S
      }, w ? {
        id: m
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: g,
        MenuProps: v,
        onClose: C,
        onOpen: T,
        open: y,
        renderValue: P,
        SelectDisplayProps: h({
          id: m
        }, N)
      }, x, {
        classes: x ? Ze(M, x.classes) : M
      }, p ? p.props.inputProps : {})
    }, S && w && U === "outlined" ? {
      notched: !0
    } : {}, {
      ref: oe,
      className: ae(k.props.className, l)
    }, !p && {
      variant: U
    }, F))
  });
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: t.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: t.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: t.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: t.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: t.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: t.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: t.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: t.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: t.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: t.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: t.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: t.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<T>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: t.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapes).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: t.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: t.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: t.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: t.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: t.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: t.oneOfType([t.oneOf([""]), t.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
Lo.muiName = "Select";
const rf = Lo;
function sf(e) {
  return xe("MuiTextField", e);
}
Ce("MuiTextField", ["root"]);
const af = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], lf = {
  standard: ki,
  filled: Mi,
  outlined: Fi
}, cf = (e) => {
  const {
    classes: n
  } = e;
  return Oe({
    root: ["root"]
  }, sf, n);
}, uf = ne(Sd, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), as = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: m = !1,
    FormHelperTextProps: p,
    fullWidth: x = !1,
    helperText: E,
    id: g,
    InputLabelProps: v,
    inputProps: S,
    InputProps: w,
    inputRef: C,
    label: T,
    maxRows: y,
    minRows: P,
    multiline: N = !1,
    name: B,
    onBlur: F,
    onChange: D,
    onFocus: V,
    placeholder: ee,
    required: U = !1,
    rows: k,
    select: A = !1,
    SelectProps: M,
    type: oe,
    value: ie,
    variant: ce = "outlined"
  } = r, O = te(r, af), $ = h({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: m,
    fullWidth: x,
    multiline: N,
    required: U,
    select: A,
    variant: ce
  }), L = cf($);
  process.env.NODE_ENV !== "production" && A && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = {};
  ce === "outlined" && (v && typeof v.shrink < "u" && (K.notched = v.shrink), K.label = T), A && ((!M || !M.native) && (K.id = void 0), K["aria-describedby"] = void 0);
  const j = fi(g), Y = E && j ? `${j}-helper-text` : void 0, z = T && j ? `${j}-label` : void 0, J = lf[ce], Z = /* @__PURE__ */ R(J, h({
    "aria-describedby": Y,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: x,
    multiline: N,
    name: B,
    rows: k,
    maxRows: y,
    minRows: P,
    type: oe,
    value: ie,
    id: j,
    inputRef: C,
    onBlur: F,
    onChange: D,
    onFocus: V,
    placeholder: ee,
    inputProps: S
  }, K, w));
  return /* @__PURE__ */ Se(uf, h({
    className: ae(L.root, l),
    disabled: d,
    error: m,
    fullWidth: x,
    ref: o,
    required: U,
    color: c,
    variant: ce,
    ownerState: $
  }, O, {
    children: [T != null && T !== "" && /* @__PURE__ */ R(Ed, h({
      htmlFor: j,
      id: z
    }, v, {
      children: T
    })), A ? /* @__PURE__ */ R(rf, h({
      "aria-describedby": Y,
      id: j,
      labelId: z,
      value: ie,
      input: Z
    }, M, {
      children: a
    })) : Z, E && /* @__PURE__ */ R(Id, h({
      id: Y
    }, p, {
      children: E
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (as.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: t.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: t.bool,
  /**
   * @ignore
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), t.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: t.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: t.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: t.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The helper text content.
   */
  helperText: t.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: t.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: t.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: t.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: t.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * The label content.
   */
  label: t.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: t.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: t.oneOfType([t.number, t.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: t.oneOfType([t.number, t.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: t.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: t.string,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: t.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: t.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: t.oneOfType([t.number, t.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: t.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: t.object,
  /**
   * The size of the component.
   */
  size: t.oneOfType([t.oneOf(["medium", "small"]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: t.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: t.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: t.oneOf(["filled", "outlined", "standard"])
});
const bo = as;
function df(e) {
  return xe("MuiFormGroup", e);
}
Ce("MuiFormGroup", ["root", "row", "error"]);
const pf = ["className", "row"], ff = (e) => {
  const {
    classes: n,
    row: o,
    error: r
  } = e;
  return Oe({
    root: ["root", o && "row", r && "error"]
  }, df, n);
}, mf = ne("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.row && n.row];
  }
})(({
  ownerState: e
}) => h({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, e.row && {
  flexDirection: "row"
})), ls = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: s = !1
  } = r, a = te(r, pf), l = Ot(), c = Tt({
    props: r,
    muiFormControl: l,
    states: ["error"]
  }), u = h({}, r, {
    row: s,
    error: c.error
  }), d = ff(u);
  return /* @__PURE__ */ R(mf, h({
    className: ae(d.root, i),
    ownerState: u,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const hf = ls;
function cs(e) {
  const {
    className: n,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, m] = b.useState(!1), p = ae(n, o.ripple, o.rippleVisible, r && o.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, E = ae(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && m(!0), b.useEffect(() => {
    if (!l && c != null) {
      const g = setTimeout(c, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ R("span", {
    className: p,
    style: x,
    children: /* @__PURE__ */ R("span", {
      className: E
    })
  });
}
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object.isRequired,
  className: t.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: t.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: t.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: t.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: t.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: t.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: t.number,
  /**
   * exit delay
   */
  timeout: t.number.isRequired
});
const bf = Ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Je = bf, gf = ["center", "classes", "className"];
let qn = (e) => e, Gr, Hr, Yr, Xr;
const go = 550, yf = 80, vf = vo(Gr || (Gr = qn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), xf = vo(Hr || (Hr = qn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ef = vo(Yr || (Yr = qn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Tf = ne("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Of = ne(cs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Xr || (Xr = qn`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Je.rippleVisible, vf, go, ({
  theme: e
}) => e.transitions.easing.easeInOut, Je.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Je.child, Je.childLeaving, xf, go, ({
  theme: e
}) => e.transitions.easing.easeInOut, Je.childPulsate, Ef, ({
  theme: e
}) => e.transitions.easing.easeInOut), us = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = te(r, gf), [c, u] = b.useState([]), d = b.useRef(0), m = b.useRef(null);
  b.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const p = b.useRef(!1), x = b.useRef(null), E = b.useRef(null), g = b.useRef(null);
  b.useEffect(() => () => {
    clearTimeout(x.current);
  }, []);
  const v = b.useCallback((T) => {
    const {
      pulsate: y,
      rippleX: P,
      rippleY: N,
      rippleSize: B,
      cb: F
    } = T;
    u((D) => [...D, /* @__PURE__ */ R(Of, {
      classes: {
        ripple: ae(s.ripple, Je.ripple),
        rippleVisible: ae(s.rippleVisible, Je.rippleVisible),
        ripplePulsate: ae(s.ripplePulsate, Je.ripplePulsate),
        child: ae(s.child, Je.child),
        childLeaving: ae(s.childLeaving, Je.childLeaving),
        childPulsate: ae(s.childPulsate, Je.childPulsate)
      },
      timeout: go,
      pulsate: y,
      rippleX: P,
      rippleY: N,
      rippleSize: B
    }, d.current)]), d.current += 1, m.current = F;
  }, [s]), S = b.useCallback((T = {}, y = {}, P = () => {
  }) => {
    const {
      pulsate: N = !1,
      center: B = i || y.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = y;
    if ((T == null ? void 0 : T.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (p.current = !0);
    const D = F ? null : g.current, V = D ? D.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, U, k;
    if (B || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      ee = Math.round(V.width / 2), U = Math.round(V.height / 2);
    else {
      const {
        clientX: A,
        clientY: M
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      ee = Math.round(A - V.left), U = Math.round(M - V.top);
    }
    if (B)
      k = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3), k % 2 === 0 && (k += 1);
    else {
      const A = Math.max(Math.abs((D ? D.clientWidth : 0) - ee), ee) * 2 + 2, M = Math.max(Math.abs((D ? D.clientHeight : 0) - U), U) * 2 + 2;
      k = Math.sqrt(A ** 2 + M ** 2);
    }
    T != null && T.touches ? E.current === null && (E.current = () => {
      v({
        pulsate: N,
        rippleX: ee,
        rippleY: U,
        rippleSize: k,
        cb: P
      });
    }, x.current = setTimeout(() => {
      E.current && (E.current(), E.current = null);
    }, yf)) : v({
      pulsate: N,
      rippleX: ee,
      rippleY: U,
      rippleSize: k,
      cb: P
    });
  }, [i, v]), w = b.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = b.useCallback((T, y) => {
    if (clearTimeout(x.current), (T == null ? void 0 : T.type) === "touchend" && E.current) {
      E.current(), E.current = null, x.current = setTimeout(() => {
        C(T, y);
      });
      return;
    }
    E.current = null, u((P) => P.length > 0 ? P.slice(1) : P), m.current = y;
  }, []);
  return b.useImperativeHandle(o, () => ({
    pulsate: w,
    start: S,
    stop: C
  }), [w, S, C]), /* @__PURE__ */ R(Tf, h({
    className: ae(Je.root, s.root, a),
    ref: g
  }, l, {
    children: /* @__PURE__ */ R(ep, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: t.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string
});
const Cf = us;
function Rf(e) {
  return xe("MuiButtonBase", e);
}
const Sf = Ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), wf = Sf, $f = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Pf = (e) => {
  const {
    disabled: n,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Oe({
    root: ["root", n && "disabled", o && "focusVisible"]
  }, Rf, i);
  return o && r && (a.root += ` ${r}`), a;
}, Nf = ne("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${wf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ds = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: x = "a",
    onBlur: E,
    onClick: g,
    onContextMenu: v,
    onDragLeave: S,
    onFocus: w,
    onFocusVisible: C,
    onKeyDown: T,
    onKeyUp: y,
    onMouseDown: P,
    onMouseLeave: N,
    onMouseUp: B,
    onTouchEnd: F,
    onTouchMove: D,
    onTouchStart: V,
    tabIndex: ee = 0,
    TouchRippleProps: U,
    touchRippleRef: k,
    type: A
  } = r, M = te(r, $f), oe = b.useRef(null), ie = b.useRef(null), ce = Ve(ie, k), {
    isFocusVisibleRef: O,
    onFocus: $,
    onBlur: L,
    ref: K
  } = qa(), [j, Y] = b.useState(!1);
  u && j && Y(!1), b.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Y(!0), oe.current.focus();
    }
  }), []);
  const [z, J] = b.useState(!1);
  b.useEffect(() => {
    J(!0);
  }, []);
  const Z = z && !d && !u;
  b.useEffect(() => {
    j && p && !d && z && ie.current.pulsate();
  }, [d, p, j, z]);
  function H(re, G, he = m) {
    return kt((Ie) => (G && G(Ie), !he && ie.current && ie.current[re](Ie), !0));
  }
  const Q = H("start", P), X = H("stop", v), I = H("stop", S), fe = H("stop", B), q = H("stop", (re) => {
    j && re.preventDefault(), N && N(re);
  }), $e = H("start", V), Fe = H("stop", F), Ae = H("stop", D), Pe = H("stop", (re) => {
    L(re), O.current === !1 && Y(!1), E && E(re);
  }, !1), je = kt((re) => {
    oe.current || (oe.current = re.currentTarget), $(re), O.current === !0 && (Y(!0), C && C(re)), w && w(re);
  }), Ke = () => {
    const re = oe.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, Me = b.useRef(!1), Ge = kt((re) => {
    p && !Me.current && j && ie.current && re.key === " " && (Me.current = !0, ie.current.stop(re, () => {
      ie.current.start(re);
    })), re.target === re.currentTarget && Ke() && re.key === " " && re.preventDefault(), T && T(re), re.target === re.currentTarget && Ke() && re.key === "Enter" && !u && (re.preventDefault(), g && g(re));
  }), He = kt((re) => {
    p && re.key === " " && ie.current && j && !re.defaultPrevented && (Me.current = !1, ie.current.stop(re, () => {
      ie.current.pulsate(re);
    })), y && y(re), g && re.target === re.currentTarget && Ke() && re.key === " " && !re.defaultPrevented && g(re);
  });
  let et = c;
  et === "button" && (M.href || M.to) && (et = x);
  const We = {};
  et === "button" ? (We.type = A === void 0 ? "button" : A, We.disabled = u) : (!M.href && !M.to && (We.role = "button"), u && (We["aria-disabled"] = u));
  const Ye = Ve(o, K, oe);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    Z && !ie.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Z]);
  const Le = h({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: ee,
    focusVisible: j
  }), pe = Pf(Le);
  return /* @__PURE__ */ Se(Nf, h({
    as: et,
    className: ae(pe.root, l),
    ownerState: Le,
    onBlur: Pe,
    onClick: g,
    onContextMenu: X,
    onFocus: je,
    onKeyDown: Ge,
    onKeyUp: He,
    onMouseDown: Q,
    onMouseLeave: q,
    onMouseUp: fe,
    onDragLeave: I,
    onTouchEnd: Fe,
    onTouchMove: Ae,
    onTouchStart: $e,
    ref: Ye,
    tabIndex: u ? -1 : ee,
    type: A
  }, We, M, {
    children: [a, Z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ R(Cf, h({
        ref: ce,
        center: s
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: at,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: t.bool,
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Eo,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: t.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: t.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: t.string,
  /**
   * @ignore
   */
  href: t.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: t.elementType,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onContextMenu: t.func,
  /**
   * @ignore
   */
  onDragLeave: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * @ignore
   */
  onKeyUp: t.func,
  /**
   * @ignore
   */
  onMouseDown: t.func,
  /**
   * @ignore
   */
  onMouseLeave: t.func,
  /**
   * @ignore
   */
  onMouseUp: t.func,
  /**
   * @ignore
   */
  onTouchEnd: t.func,
  /**
   * @ignore
   */
  onTouchMove: t.func,
  /**
   * @ignore
   */
  onTouchStart: t.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @default 0
   */
  tabIndex: t.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: t.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: t.oneOfType([t.func, t.shape({
    current: t.shape({
      pulsate: t.func.isRequired,
      start: t.func.isRequired,
      stop: t.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: t.oneOfType([t.oneOf(["button", "reset", "submit"]), t.string])
});
const _f = ds;
function If(e) {
  return xe("MuiButton", e);
}
const kf = Ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), mn = kf, ps = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (ps.displayName = "ButtonGroupContext");
const Mf = ps, Df = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Ff = (e) => {
  const {
    color: n,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${le(n)}`, `size${le(i)}`, `${s}Size${le(i)}`, n === "inherit" && "colorInherit", o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${le(i)}`],
    endIcon: ["endIcon", `iconSize${le(i)}`]
  }, c = Oe(l, If, a);
  return h({}, a, c);
}, fs = (e) => h({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Af = ne(_f, {
  shouldForwardProp: (e) => lt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], n[`${o.variant}${le(o.color)}`], n[`size${le(o.size)}`], n[`${o.variant}Size${le(o.size)}`], o.color === "inherit" && n.colorInherit, o.disableElevation && n.disableElevation, o.fullWidth && n.fullWidth];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var o, r;
  return h({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": h({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Mt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "text" && n.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Mt(e.palette[n.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "outlined" && n.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[n.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Mt(e.palette[n.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "contained" && {
      backgroundColor: (e.vars || e).palette.grey.A100,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, n.variant === "contained" && n.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[n.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[n.color].main
      }
    }),
    "&:active": h({}, n.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${mn.focusVisible}`]: h({}, n.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${mn.disabled}`]: h({
      color: (e.vars || e).palette.action.disabled
    }, n.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, n.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, n.variant === "text" && {
    padding: "6px 8px"
  }, n.variant === "text" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].main
  }, n.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, n.variant === "outlined" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[n.color].mainChannel} / 0.5)` : `1px solid ${Mt(e.palette[n.color].main, 0.5)}`
  }, n.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    boxShadow: (e.vars || e).shadows[2]
  }, n.variant === "contained" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].contrastText,
    backgroundColor: (e.vars || e).palette[n.color].main
  }, n.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, n.size === "small" && n.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, n.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${mn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${mn.disabled}`]: {
    boxShadow: "none"
  }
}), jf = ne("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.startIcon, n[`iconSize${le(o.size)}`]];
  }
})(({
  ownerState: e
}) => h({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, fs(e))), Bf = ne("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.endIcon, n[`iconSize${le(o.size)}`]];
  }
})(({
  ownerState: e
}) => h({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, fs(e))), ms = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = b.useContext(Mf), i = To(r, n), s = Te({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: d = !1,
    disableElevation: m = !1,
    disableFocusRipple: p = !1,
    endIcon: x,
    focusVisibleClassName: E,
    fullWidth: g = !1,
    size: v = "medium",
    startIcon: S,
    type: w,
    variant: C = "text"
  } = s, T = te(s, Df), y = h({}, s, {
    color: l,
    component: c,
    disabled: d,
    disableElevation: m,
    disableFocusRipple: p,
    fullWidth: g,
    size: v,
    type: w,
    variant: C
  }), P = Ff(y), N = S && /* @__PURE__ */ R(jf, {
    className: P.startIcon,
    ownerState: y,
    children: S
  }), B = x && /* @__PURE__ */ R(Bf, {
    className: P.endIcon,
    ownerState: y,
    children: x
  });
  return /* @__PURE__ */ Se(Af, h({
    ownerState: y,
    className: ae(r.className, P.root, u),
    component: c,
    disabled: d,
    focusRipple: !p,
    focusVisibleClassName: ae(P.focusVisible, E),
    ref: o,
    type: w
  }, T, {
    classes: P,
    children: [N, a, B]
  }));
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: t.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * Element placed after the children.
   */
  endIcon: t.node,
  /**
   * @ignore
   */
  focusVisibleClassName: t.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: t.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["small", "medium", "large"]), t.string]),
  /**
   * Element placed before the children.
   */
  startIcon: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @ignore
   */
  type: t.oneOfType([t.oneOf(["button", "reset", "submit"]), t.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: t.oneOfType([t.oneOf(["contained", "outlined", "text"]), t.string])
});
const yo = ms;
function Wf(e) {
  return xe("MuiDialog", e);
}
const Lf = Ce("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), ao = Lf, hs = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (hs.displayName = "DialogContext");
const bs = hs, zf = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Vf = ne(Zi, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, n) => n.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Uf = (e) => {
  const {
    classes: n,
    scroll: o,
    maxWidth: r,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${le(o)}`],
    paper: ["paper", `paperScroll${le(o)}`, `paperWidth${le(String(r))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return Oe(a, Wf, n);
}, qf = ne(es, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Kf = ne("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.container, n[`scroll${le(o.scroll)}`]];
  }
})(({
  ownerState: e
}) => h({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&:after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), Gf = ne(Un, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.paper, n[`scrollPaper${le(o.scroll)}`], n[`paperWidth${le(String(o.maxWidth))}`], o.fullWidth && n.paperFullWidth, o.fullScreen && n.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, n.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, n.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !n.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, n.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
  [`&.${ao.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, n.maxWidth && n.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,
  [`&.${ao.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[n.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, n.fullWidth && {
  width: "calc(100% - 64px)"
}, n.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${ao.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), gs = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiDialog"
  }), i = Lt(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: m,
    disableEscapeKeyDown: p = !1,
    fullScreen: x = !1,
    fullWidth: E = !1,
    maxWidth: g = "sm",
    onBackdropClick: v,
    onClose: S,
    open: w,
    PaperComponent: C = Un,
    PaperProps: T = {},
    scroll: y = "paper",
    TransitionComponent: P = Xi,
    transitionDuration: N = s,
    TransitionProps: B
  } = r, F = te(r, zf), D = h({}, r, {
    disableEscapeKeyDown: p,
    fullScreen: x,
    fullWidth: E,
    maxWidth: g,
    scroll: y
  }), V = Uf(D), ee = b.useRef(), U = (oe) => {
    ee.current = oe.target === oe.currentTarget;
  }, k = (oe) => {
    ee.current && (ee.current = null, v && v(oe), S && S(oe, "backdropClick"));
  }, A = fi(l), M = b.useMemo(() => ({
    titleId: A
  }), [A]);
  return /* @__PURE__ */ R(qf, h({
    className: ae(V.root, m),
    closeAfterTransition: !0,
    components: {
      Backdrop: Vf
    },
    componentsProps: {
      backdrop: h({
        transitionDuration: N,
        as: c
      }, u)
    },
    disableEscapeKeyDown: p,
    onClose: S,
    open: w,
    ref: o,
    onClick: k,
    ownerState: D
  }, F, {
    children: /* @__PURE__ */ R(P, h({
      appear: !0,
      in: w,
      timeout: N,
      role: "presentation"
    }, B, {
      children: /* @__PURE__ */ R(Kf, {
        className: ae(V.container),
        onMouseDown: U,
        ownerState: D,
        children: /* @__PURE__ */ R(Gf, h({
          as: C,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": A
        }, T, {
          className: ae(V.paper, T.className),
          ownerState: D,
          children: /* @__PURE__ */ R(bs.Provider, {
            value: M,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": t.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": t.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: t.elementType,
  /**
   * @ignore
   */
  BackdropProps: t.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: t.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: t.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: t.oneOfType([t.oneOf(["xs", "sm", "md", "lg", "xl", !1]), t.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: t.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: t.func,
  /**
   * If `true`, the component is shown.
   */
  open: t.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: t.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: t.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: t.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: t.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: t.oneOfType([t.number, t.shape({
    appear: t.number,
    enter: t.number,
    exit: t.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: t.object
});
const Hf = gs;
function Yf(e) {
  return xe("MuiDialogActions", e);
}
Ce("MuiDialogActions", ["root", "spacing"]);
const Xf = ["className", "disableSpacing"], Jf = (e) => {
  const {
    classes: n,
    disableSpacing: o
  } = e;
  return Oe({
    root: ["root", !o && "spacing"]
  }, Yf, n);
}, Zf = ne("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, !o.disableSpacing && n.spacing];
  }
})(({
  ownerState: e
}) => h({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
})), ys = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: s = !1
  } = r, a = te(r, Xf), l = h({}, r, {
    disableSpacing: s
  }), c = Jf(l);
  return /* @__PURE__ */ R(Zf, h({
    className: ae(c.root, i),
    ownerState: l,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Qf = ys;
function em(e) {
  return xe("MuiDialogContent", e);
}
Ce("MuiDialogContent", ["root", "dividers"]);
function tm(e) {
  return xe("MuiDialogTitle", e);
}
const nm = Ce("MuiDialogTitle", ["root"]), om = nm, rm = ["className", "dividers"], im = (e) => {
  const {
    classes: n,
    dividers: o
  } = e;
  return Oe({
    root: ["root", o && "dividers"]
  }, em, n);
}, sm = ne("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.dividers && n.dividers];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, n.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${om.root} + &`]: {
    paddingTop: 0
  }
})), vs = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1
  } = r, a = te(r, rm), l = h({}, r, {
    dividers: s
  }), c = im(l);
  return /* @__PURE__ */ R(sm, h({
    className: ae(c.root, i),
    ownerState: l,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const am = vs;
function lm(e) {
  return xe("MuiTypography", e);
}
Ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const cm = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], um = (e) => {
  const {
    align: n,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${le(n)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Oe(l, lm, a);
}, dm = ne("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.variant && n[o.variant], o.align !== "inherit" && n[`align${le(o.align)}`], o.noWrap && n.noWrap, o.gutterBottom && n.gutterBottom, o.paragraph && n.paragraph];
  }
})(({
  theme: e,
  ownerState: n
}) => h({
  margin: 0
}, n.variant && e.typography[n.variant], n.align !== "inherit" && {
  textAlign: n.align
}, n.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, n.gutterBottom && {
  marginBottom: "0.35em"
}, n.paragraph && {
  marginBottom: 16
})), Jr = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, pm = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, fm = (e) => pm[e] || e, xs = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiTypography"
  }), i = fm(r.color), s = Ro(h({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: m = !1,
    variant: p = "body1",
    variantMapping: x = Jr
  } = s, E = te(s, cm), g = h({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: m,
    variant: p,
    variantMapping: x
  }), v = c || (m ? "p" : x[p] || Jr[p]) || "span", S = um(g);
  return /* @__PURE__ */ R(dm, h({
    as: v,
    ref: o,
    ownerState: g,
    className: ae(S.root, l)
  }, E));
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: t.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: t.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: t.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: t.oneOfType([t.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), t.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: t.object
});
const Es = xs, mm = ["className", "id"], hm = (e) => {
  const {
    classes: n
  } = e;
  return Oe({
    root: ["root"]
  }, tm, n);
}, bm = ne(Es, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Ts = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s
  } = r, a = te(r, mm), l = r, c = hm(l), {
    titleId: u = s
  } = b.useContext(bs);
  return /* @__PURE__ */ R(bm, h({
    component: "h2",
    className: ae(c.root, i),
    ownerState: l,
    ref: o,
    variant: "h6",
    id: u
  }, a));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * @ignore
   */
  id: t.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const gm = Ts, Os = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (Os.displayName = "GridContext");
const Zr = Os;
function ym(e) {
  return xe("MuiGrid", e);
}
const vm = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xm = ["column-reverse", "column", "row-reverse", "row"], Em = ["nowrap", "wrap-reverse", "wrap"], Ht = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], on = Ce("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...vm.map((e) => `spacing-xs-${e}`),
  // direction values
  ...xm.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Em.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Ht.map((e) => `grid-xs-${e}`),
  ...Ht.map((e) => `grid-sm-${e}`),
  ...Ht.map((e) => `grid-md-${e}`),
  ...Ht.map((e) => `grid-lg-${e}`),
  ...Ht.map((e) => `grid-xl-${e}`)
]), Tm = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function At(e) {
  const n = parseFloat(e);
  return `${n}${String(e).replace(String(n), "") || "px"}`;
}
function Om({
  theme: e,
  ownerState: n
}) {
  let o;
  return e.breakpoints.keys.reduce((r, i) => {
    let s = {};
    if (n[i] && (o = n[i]), !o)
      return r;
    if (o === !0)
      s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (o === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = Sn({
        values: n.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof a == "object" ? a[i] : a;
      if (l == null)
        return r;
      const c = `${Math.round(o / l * 1e8) / 1e6}%`;
      let u = {};
      if (n.container && n.item && n.columnSpacing !== 0) {
        const d = e.spacing(n.columnSpacing);
        if (d !== "0px") {
          const m = `calc(${c} + ${At(d)})`;
          u = {
            flexBasis: m,
            maxWidth: m
          };
        }
      }
      s = h({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, s) : r[e.breakpoints.up(i)] = s, r;
  }, {});
}
function Cm({
  theme: e,
  ownerState: n
}) {
  const o = Sn({
    values: n.direction,
    breakpoints: e.breakpoints.values
  });
  return Qe({
    theme: e
  }, o, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${on.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function Cs({
  breakpoints: e,
  values: n
}) {
  let o = "";
  Object.keys(n).forEach((i) => {
    o === "" && n[i] !== 0 && (o = i);
  });
  const r = Object.keys(e).sort((i, s) => e[i] - e[s]);
  return r.slice(0, r.indexOf(o));
}
function Rm({
  theme: e,
  ownerState: n
}) {
  const {
    container: o,
    rowSpacing: r
  } = n;
  let i = {};
  if (o && r !== 0) {
    const s = Sn({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Cs({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = Qe({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${At(d)}`,
        [`& > .${on.item}`]: {
          paddingTop: At(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${on.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function Sm({
  theme: e,
  ownerState: n
}) {
  const {
    container: o,
    columnSpacing: r
  } = n;
  let i = {};
  if (o && r !== 0) {
    const s = Sn({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Cs({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = Qe({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        width: `calc(100% + ${At(d)})`,
        marginLeft: `-${At(d)}`,
        [`& > .${on.item}`]: {
          paddingLeft: At(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${on.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function wm(e, n, o = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [o[`spacing-xs-${String(e)}`]];
  const r = [];
  return n.forEach((i) => {
    const s = e[i];
    Number(s) > 0 && r.push(o[`spacing-${i}-${String(s)}`]);
  }), r;
}
const $m = ne("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e, {
      container: r,
      direction: i,
      item: s,
      spacing: a,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = o;
    let d = [];
    r && (d = wm(a, u, n));
    const m = [];
    return u.forEach((p) => {
      const x = o[p];
      x && m.push(n[`grid-${p}-${String(x)}`]);
    }), [n.root, r && n.container, s && n.item, c && n.zeroMinWidth, ...d, i !== "row" && n[`direction-xs-${String(i)}`], l !== "wrap" && n[`wrap-xs-${String(l)}`], ...m];
  }
})(({
  ownerState: e
}) => h({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), Cm, Rm, Sm, Om);
function Pm(e, n) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const o = [];
  return n.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const s = `spacing-${r}-${String(i)}`;
      o.push(s);
    }
  }), o;
}
const Nm = (e) => {
  const {
    classes: n,
    container: o,
    direction: r,
    item: i,
    spacing: s,
    wrap: a,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  o && (u = Pm(s, c));
  const d = [];
  c.forEach((p) => {
    const x = e[p];
    x && d.push(`grid-${p}-${String(x)}`);
  });
  const m = {
    root: ["root", o && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return Oe(m, ym, n);
}, en = /* @__PURE__ */ b.forwardRef(function(n, o) {
  const r = Te({
    props: n,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = Lt(), s = Ro(r), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: m = "row",
    item: p = !1,
    rowSpacing: x,
    spacing: E = 0,
    wrap: g = "wrap",
    zeroMinWidth: v = !1
  } = s, S = te(s, Tm), w = x || E, C = c || E, T = b.useContext(Zr), y = d ? l || 12 : T, P = {}, N = h({}, S);
  i.keys.forEach((D) => {
    S[D] != null && (P[D] = S[D], delete N[D]);
  });
  const B = h({}, s, {
    columns: y,
    container: d,
    direction: m,
    item: p,
    rowSpacing: w,
    columnSpacing: C,
    wrap: g,
    zeroMinWidth: v,
    spacing: E
  }, P, {
    breakpoints: i.keys
  }), F = Nm(B);
  return /* @__PURE__ */ R(Zr.Provider, {
    value: y,
    children: /* @__PURE__ */ R($m, h({
      ownerState: B,
      className: ae(F.root, a),
      as: u,
      ref: o
    }, N))
  });
});
process.env.NODE_ENV !== "production" && (en.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: t.oneOfType([t.arrayOf(t.number), t.number, t.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: t.oneOfType([t.arrayOf(t.oneOfType([t.number, t.string])), t.number, t.object, t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: t.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: t.oneOfType([t.oneOf(["column-reverse", "column", "row-reverse", "row"]), t.arrayOf(t.oneOf(["column-reverse", "column", "row-reverse", "row"])), t.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: t.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: t.oneOfType([t.oneOf(["auto"]), t.number, t.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: t.oneOfType([t.oneOf(["auto"]), t.number, t.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: t.oneOfType([t.arrayOf(t.oneOfType([t.number, t.string])), t.number, t.object, t.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: t.oneOfType([t.oneOf(["auto"]), t.number, t.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: t.oneOfType([t.arrayOf(t.oneOfType([t.number, t.string])), t.number, t.object, t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: t.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: t.oneOfType([t.oneOf(["auto"]), t.number, t.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: t.oneOfType([t.oneOf(["auto"]), t.number, t.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: t.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = Fa("Grid", en);
  en["propTypes"] = h({}, en.propTypes, {
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  });
}
const Qr = en;
function _m(e) {
  const { ctx: n, spec: o } = e, { model: r, seneca: i, custom: s } = n(), a = o.content.def, { ent: l, cols: c } = a, u = Dt((T) => T.main.vxg.cmp), d = Dt((T) => T.main.vxg.ent.meta.main[a.ent].state), m = Dt((T) => T.main.vxg.ent.list.main[a.ent]);
  if (d === "none") {
    let T = s.BasicLed.query(o, u);
    i.act("aim:web,on:entity,list:entity,debounce$:true", {
      canon: a.ent,
      q: T
    });
  }
  const p = m;
  let [x, E] = As();
  return /* @__PURE__ */ Se("div", { style: { height: "calc(100vh - 6rem)", width: "calc(100vw - 18rem)" }, children: [
    x && /* @__PURE__ */ R(
      Im,
      {
        open: () => {
        },
        row: x,
        columns: c,
        onChange: () => {
        },
        onApplyChanges: () => {
        },
        onCancelChanges: () => {
          E(void 0);
        }
      }
    ),
    /* @__PURE__ */ R(
      ea,
      {
        rows: p,
        columns: c,
        onSelectionModelChange: (T) => {
          let y = T[0], P = p.find((N) => N.id === y);
          console.log(P), P && E(P);
        }
      }
    )
  ] });
}
function Im(e) {
  let {
    row: n,
    columns: o,
    onChange: r,
    onApplyChanges: i,
    onCancelChanges: s,
    open: a
  } = e;
  return /* @__PURE__ */ Se(
    Hf,
    {
      open: a,
      onClose: s,
      "aria-labelledby": "form-dialog-title",
      children: [
        /* @__PURE__ */ R(gm, { id: "form-dialog-title", children: "Edit Details" }),
        /* @__PURE__ */ R(am, { children: /* @__PURE__ */ R(Qr, { container: !0, spacing: 3, children: /* @__PURE__ */ R(Qr, { item: !0, xs: 6, children: /* @__PURE__ */ R(hf, { children: o.map((l) => /* @__PURE__ */ R(
          bo,
          {
            margin: "normal",
            name: l.field,
            label: l.headerName,
            value: n[l.field],
            onChange: r
          }
        )) }) }) }) }),
        /* @__PURE__ */ Se(Qf, { children: [
          /* @__PURE__ */ R(yo, { onClick: s, color: "secondary", children: "Cancel" }),
          /* @__PURE__ */ R(yo, { onClick: i, color: "primary", children: "Save" })
        ] })
      ]
    }
  );
}
function km(e, n) {
  let o = () => /* @__PURE__ */ R("div", { children: "NONE" });
  const r = e.content || {};
  return r.kind === "custom" ? o = n().cmp[r.cmp] : r.kind === "led" && (o = _m), o;
}
function Mm(e) {
  const { ctx: n, spec: o } = e, { model: r, content: i } = n(), { frame: s } = o;
  r.app.web.frame[s].part.main;
  const a = Object.values(r.app.web.frame.private.view);
  return /* @__PURE__ */ R(
    "div",
    {
      style: {
        width: "100%",
        minHeight: "100vh",
        paddingTop: "4rem",
        paddingLeft: "16rem",
        paddingBottom: "1rem"
      },
      children: /* @__PURE__ */ R("div", { style: { width: "100%", height: "100%", padding: "1rem" }, children: /* @__PURE__ */ R(Ys, { children: /* @__PURE__ */ R(Yo, { path: "/view", children: a.map((l) => {
        const c = km(l, n);
        return /* @__PURE__ */ R(
          Yo,
          {
            path: "/view/" + l.name,
            element: /* @__PURE__ */ R(c, { ctx: n, spec: l })
          },
          l.name
        );
      }) }) }) })
    }
  );
}
function Dm(e) {
  const { ctx: n, spec: o } = e, r = n().model, { frame: i } = o, s = r.app.web.frame[i].part.foot;
  return /* @__PURE__ */ R(
    oi,
    {
      sx: {
        width: "100%",
        height: "auto",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        borderTop: "1px solid #CCC"
      },
      children: /* @__PURE__ */ R(Gs, { maxWidth: "lg", children: /* @__PURE__ */ R(Ho, { container: !0, direction: "column", children: /* @__PURE__ */ R(Ho, { item: !0, xs: 12, sx: { textAlign: "right" }, children: /* @__PURE__ */ R(ni, { color: "#CCC", variant: "body2", children: s.title }) }) }) })
    }
  );
}
function Xm(e) {
  const { ctx: n, spec: o } = e, r = n().model, { frame: i } = o;
  return r.app.web.frame[i].part.admin, /* @__PURE__ */ Se("div", { children: [
    /* @__PURE__ */ R(ua, { ctx: n, spec: {
      frame: i
    } }),
    /* @__PURE__ */ R(fa, { ctx: n, spec: {
      frame: i
    } }),
    /* @__PURE__ */ R(Mm, { ctx: n, spec: {
      frame: i
    } }),
    /* @__PURE__ */ R(Dm, { ctx: n, spec: {
      frame: i
    } })
  ] });
}
const Fm = (e, n) => h({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, n && !e.vars && {
  colorScheme: e.palette.mode
}), Am = (e) => h({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), jm = (e, n = !1) => {
  var o, r;
  const i = {};
  n && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var u;
    i[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (u = c.palette) == null ? void 0 : u.mode
    };
  });
  let s = h({
    html: Fm(e, n),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: h({
      margin: 0
    }, Am(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, i);
  const a = (o = e.components) == null || (r = o.MuiCssBaseline) == null ? void 0 : r.styleOverrides;
  return a && (s = [s, a]), s;
};
function Rs(e) {
  const n = Te({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: r = !1
  } = n;
  return /* @__PURE__ */ Se(b.Fragment, {
    children: [/* @__PURE__ */ R(Po, {
      styles: (i) => jm(i, r)
    }), o]
  });
}
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: t.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: t.bool
});
const Bm = Ni(), Ss = Pc({
  defaultTheme: Bm,
  defaultClassName: "MuiBox-root",
  generateClassName: yi.generate
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: t.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const ei = Ss, ws = Zc({
  createStyledComponent: ne("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, n) => {
      const {
        ownerState: o
      } = e;
      return [n.root, n[`maxWidth${le(String(o.maxWidth))}`], o.fixed && n.fixed, o.disableGutters && n.disableGutters];
    }
  }),
  useThemeProps: (e) => Te({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: t.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: t.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: t.oneOfType([t.oneOf(["xs", "sm", "md", "lg", "xl", !1]), t.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object])
});
const Wm = ws;
function Jm(e) {
  const { ctx: n, spec: o } = e, { handle: r } = o;
  return /* @__PURE__ */ Se(Wm, { component: "main", maxWidth: "xs", children: [
    /* @__PURE__ */ R(Rs, {}),
    /* @__PURE__ */ Se(
      ei,
      {
        sx: {
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ R("img", { style: { width: 400 }, src: o.img.logo }),
          /* @__PURE__ */ R(Es, { sx: { marginTop: 4 }, component: "h1", variant: "h5", children: o.title }),
          /* @__PURE__ */ Se(ei, { component: "form", onSubmit: r.signin, noValidate: !0, sx: { mt: 1 }, children: [
            /* @__PURE__ */ R(
              bo,
              {
                margin: "normal",
                required: !0,
                fullWidth: !0,
                id: "email",
                label: "Email Address",
                name: "email",
                autoComplete: "email",
                autoFocus: !0
              }
            ),
            /* @__PURE__ */ R(
              bo,
              {
                margin: "normal",
                required: !0,
                fullWidth: !0,
                name: "password",
                label: "Password",
                type: "password",
                id: "password",
                autoComplete: "current-password"
              }
            ),
            /* @__PURE__ */ R(
              yo,
              {
                type: "submit",
                fullWidth: !0,
                variant: "contained",
                sx: { mt: 3, mb: 2 },
                children: "Sign In"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  Xm as BasicAdmin,
  Jm as BasicAuth,
  Dm as BasicFoot,
  ua as BasicHead,
  _m as BasicLed,
  Mm as BasicMain,
  fa as BasicSide
};
