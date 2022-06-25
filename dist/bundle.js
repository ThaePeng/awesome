/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      68: (t, e) => {
        Symbol.for("react.element"),
          Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          Symbol.iterator;
        var o = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          r = Object.assign,
          a = {};
        function n(t, e, r) {
          (this.props = t),
            (this.context = e),
            (this.refs = a),
            (this.updater = r || o);
        }
        function c() {}
        function s(t, e, r) {
          (this.props = t),
            (this.context = e),
            (this.refs = a),
            (this.updater = r || o);
        }
        (n.prototype.isReactComponent = {}),
          (n.prototype.setState = function (t, e) {
            if ("object" != typeof t && "function" != typeof t && null != t)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, t, e, "setState");
          }),
          (n.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, "forceUpdate");
          }),
          (c.prototype = n.prototype);
        var p = (s.prototype = new c());
        (p.constructor = s), r(p, n.prototype), (p.isPureReactComponent = !0);
        Array.isArray, Object.prototype.hasOwnProperty;
      },
      685: (t, e, o) => {
        o(68);
      },
    },
    e = {};
  function o(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var n = (e[r] = { exports: {} });
    return t[r](n, n.exports, o), n.exports;
  }
  o(685), console.log(-1);
})();
