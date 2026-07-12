/*! For license information please see turf_stats.entry.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      79226: function (e, n, t) {
        var r = t(35309),
          l = t.n(r),
          a = t(77467),
          o = t.n(a)()(l());
        (o.push([
          e.id,
          "/* ── Prize Banner ─────────────────────────────────────────────────────────── */\n\n.turf-prize-banner {\n  background: #0e1117;\n  border-radius: 18px;\n  padding: 32px 24px 24px;\n  margin-bottom: 24px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.turf-prize-banner__spotlight {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140%;\n  height: 220px;\n  background: radial-gradient(\n    ellipse at 50% 0%,\n    rgba(245, 197, 24, 0.18) 0%,\n    transparent 70%\n  );\n  pointer-events: none;\n}\n\n.turf-prize-banner__stripes {\n  position: absolute;\n  inset: 0;\n  background: repeating-linear-gradient(\n    55deg,\n    rgba(255, 215, 0, 0.03) 0px,\n    rgba(255, 215, 0, 0.03) 1px,\n    transparent 1px,\n    transparent 18px\n  );\n  pointer-events: none;\n}\n\n.turf-prize-banner__content {\n  position: relative;\n}\n\n.turf-prize-banner__icon {\n  font-size: 2.8em;\n  color: #f5c518;\n  display: block;\n  margin-bottom: 12px;\n  filter: drop-shadow(0 0 14px rgba(255, 215, 0, 0.6));\n}\n\n.turf-prize-banner__eyebrow {\n  color: rgba(255, 215, 0, 0.55);\n  font-size: 0.68em;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n\n.turf-prize-banner__amount {\n  color: #f5c518;\n  font-size: 2.4em;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  margin-bottom: 18px;\n}\n\n.turf-prize-banner__divider {\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(245, 197, 24, 0.2),\n    transparent\n  );\n  margin-bottom: 18px;\n}\n\n.turf-prize-banner__sentence {\n  margin: 0;\n  font-size: 0.85em;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.7;\n}\n\n.turf-prize-banner__gold {\n  color: #f5c518;\n  font-weight: 700;\n}\n\n/* ── Podium ───────────────────────────────────────────────────────────────── */\n\n.turf-podium {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  margin-bottom: 32px;\n}\n\n.turf-podium-card {\n  flex: 1;\n  border-radius: 18px;\n  overflow: hidden;\n  background: #0e1117;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.turf-podium-card__spotlight {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140%;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.turf-podium-card__stripes {\n  position: absolute;\n  inset: 0;\n  background-size: 56px 56px;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.turf-podium-card__content {\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.turf-podium-card__badge-wrap {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.turf-podium-card__badge {\n  border-radius: 99px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: 0.1em;\n}\n\n.turf-podium-card__name {\n  font-weight: 800;\n  text-align: center;\n  flex: 1;\n  padding-bottom: 14px;\n}\n\n.turf-podium-card__chips {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n/* ── Stat Chip ────────────────────────────────────────────────────────────── */\n\n.turf-stat-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border-radius: 8px;\n  padding: 4px 9px;\n  font-size: 0.74em;\n  font-weight: 700;\n}\n\n/* ── Control Bar ──────────────────────────────────────────────────────────── */\n\n.turf-control-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.turf-control-bar__track {\n  flex: 1;\n  height: 4px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.07);\n  overflow: hidden;\n}\n\n.turf-control-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n\n.turf-control-bar__pct {\n  font-size: 0.72em;\n  min-width: 36px;\n  text-align: right;\n  opacity: 0.85;\n}\n\n/* ── Falling Icons ────────────────────────────────────────────────────────── */\n\n.turf-falling-icon {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n\n/* ── Rest Row ─────────────────────────────────────────────────────────────── */\n\n.turf-rest-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 13px 16px;\n  background: #0e1117;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n\n.turf-rest-row__stripes {\n  position: absolute;\n  inset: 0;\n  background-size: 56px 56px;\n  animation: card-stripe-move 5s linear infinite;\n  pointer-events: none;\n}\n\n.turf-rest-row__rank {\n  min-width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72em;\n  font-weight: 800;\n  flex-shrink: 0;\n  position: relative;\n}\n\n.turf-rest-row__name {\n  flex: 1;\n  font-weight: 700;\n  font-size: 0.9em;\n  position: relative;\n}\n\n.turf-rest-row__chips {\n  display: flex;\n  gap: 10px;\n  font-size: 0.75em;\n  position: relative;\n}\n\n.turf-rest-row__bar {\n  min-width: 110px;\n  position: relative;\n}\n\n/* ── Leaderboard wrapper ──────────────────────────────────────────────────── */\n\n.turf-rest-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/js/turf_stats/styles.css"],
            names: [],
            mappings:
              "AAAA,gFAAgF;;AAEhF;EACE,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,2BAA2B;EAC3B,WAAW;EACX,aAAa;EACb;;;;GAIC;EACD,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR;;;;;;GAMC;EACD,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,oDAAoD;AACtD;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX;;;;;GAKC;EACD,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA,gFAAgF;;AAEhF;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,2BAA2B;EAC3B,WAAW;EACX,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,0BAA0B;EAC1B,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,OAAO;EACP,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA,gFAAgF;;AAEhF;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,gFAAgF;;AAEhF;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,WAAW;EACX,mBAAmB;EACnB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA,gFAAgF;;AAEhF;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,oBAAoB;EACpB,UAAU;AACZ;;AAEA,gFAAgF;;AAEhF;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,0BAA0B;EAC1B,8CAA8C;EAC9C,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,gFAAgF;;AAEhF;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV",
            sourcesContent: [
              "/* ── Prize Banner ─────────────────────────────────────────────────────────── */\n\n.turf-prize-banner {\n  background: #0e1117;\n  border-radius: 18px;\n  padding: 32px 24px 24px;\n  margin-bottom: 24px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.turf-prize-banner__spotlight {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140%;\n  height: 220px;\n  background: radial-gradient(\n    ellipse at 50% 0%,\n    rgba(245, 197, 24, 0.18) 0%,\n    transparent 70%\n  );\n  pointer-events: none;\n}\n\n.turf-prize-banner__stripes {\n  position: absolute;\n  inset: 0;\n  background: repeating-linear-gradient(\n    55deg,\n    rgba(255, 215, 0, 0.03) 0px,\n    rgba(255, 215, 0, 0.03) 1px,\n    transparent 1px,\n    transparent 18px\n  );\n  pointer-events: none;\n}\n\n.turf-prize-banner__content {\n  position: relative;\n}\n\n.turf-prize-banner__icon {\n  font-size: 2.8em;\n  color: #f5c518;\n  display: block;\n  margin-bottom: 12px;\n  filter: drop-shadow(0 0 14px rgba(255, 215, 0, 0.6));\n}\n\n.turf-prize-banner__eyebrow {\n  color: rgba(255, 215, 0, 0.55);\n  font-size: 0.68em;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n\n.turf-prize-banner__amount {\n  color: #f5c518;\n  font-size: 2.4em;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  margin-bottom: 18px;\n}\n\n.turf-prize-banner__divider {\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(245, 197, 24, 0.2),\n    transparent\n  );\n  margin-bottom: 18px;\n}\n\n.turf-prize-banner__sentence {\n  margin: 0;\n  font-size: 0.85em;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.7;\n}\n\n.turf-prize-banner__gold {\n  color: #f5c518;\n  font-weight: 700;\n}\n\n/* ── Podium ───────────────────────────────────────────────────────────────── */\n\n.turf-podium {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  margin-bottom: 32px;\n}\n\n.turf-podium-card {\n  flex: 1;\n  border-radius: 18px;\n  overflow: hidden;\n  background: #0e1117;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.turf-podium-card__spotlight {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140%;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.turf-podium-card__stripes {\n  position: absolute;\n  inset: 0;\n  background-size: 56px 56px;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.turf-podium-card__content {\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.turf-podium-card__badge-wrap {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.turf-podium-card__badge {\n  border-radius: 99px;\n  font-weight: 900;\n  color: #111;\n  letter-spacing: 0.1em;\n}\n\n.turf-podium-card__name {\n  font-weight: 800;\n  text-align: center;\n  flex: 1;\n  padding-bottom: 14px;\n}\n\n.turf-podium-card__chips {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n/* ── Stat Chip ────────────────────────────────────────────────────────────── */\n\n.turf-stat-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border-radius: 8px;\n  padding: 4px 9px;\n  font-size: 0.74em;\n  font-weight: 700;\n}\n\n/* ── Control Bar ──────────────────────────────────────────────────────────── */\n\n.turf-control-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.turf-control-bar__track {\n  flex: 1;\n  height: 4px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.07);\n  overflow: hidden;\n}\n\n.turf-control-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n\n.turf-control-bar__pct {\n  font-size: 0.72em;\n  min-width: 36px;\n  text-align: right;\n  opacity: 0.85;\n}\n\n/* ── Falling Icons ────────────────────────────────────────────────────────── */\n\n.turf-falling-icon {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n\n/* ── Rest Row ─────────────────────────────────────────────────────────────── */\n\n.turf-rest-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 13px 16px;\n  background: #0e1117;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n\n.turf-rest-row__stripes {\n  position: absolute;\n  inset: 0;\n  background-size: 56px 56px;\n  animation: card-stripe-move 5s linear infinite;\n  pointer-events: none;\n}\n\n.turf-rest-row__rank {\n  min-width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.72em;\n  font-weight: 800;\n  flex-shrink: 0;\n  position: relative;\n}\n\n.turf-rest-row__name {\n  flex: 1;\n  font-weight: 700;\n  font-size: 0.9em;\n  position: relative;\n}\n\n.turf-rest-row__chips {\n  display: flex;\n  gap: 10px;\n  font-size: 0.75em;\n  position: relative;\n}\n\n.turf-rest-row__bar {\n  min-width: 110px;\n  position: relative;\n}\n\n/* ── Leaderboard wrapper ──────────────────────────────────────────────────── */\n\n.turf-rest-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (n.A = o));
      },
      77467: function (e) {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, l, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (o[u] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && o[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = a)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  l &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = l))
                      : (c[4] = "".concat(l))),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      35309: function (e) {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              l =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(l, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      82053: function (e, n, t) {
        var r = t(15666),
          l = t(2086),
          a = t(90455);
        function o(e) {
          var n = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
              n += "&args[]=" + encodeURIComponent(arguments[t]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return;) n = n.return;
          else {
            e = n;
            do {
              (!!(4098 & (n = e).flags) && (t = n.return), (e = n.return));
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function u(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function s(e) {
          if (31 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (i(e) !== e) throw Error(o(188));
        }
        function f(e) {
          var n = e.tag;
          if (5 === n || 26 === n || 27 === n || 6 === n) return e;
          for (e = e.child; null !== e;) {
            if (null !== (n = f(e))) return n;
            e = e.sibling;
          }
          return null;
        }
        var d = Object.assign,
          p = Symbol.for("react.element"),
          m = Symbol.for("react.transitional.element"),
          h = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          v = Symbol.for("react.strict_mode"),
          y = Symbol.for("react.profiler"),
          b = Symbol.for("react.consumer"),
          k = Symbol.for("react.context"),
          A = Symbol.for("react.forward_ref"),
          w = Symbol.for("react.suspense"),
          E = Symbol.for("react.suspense_list"),
          S = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var x = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var _ = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var z = Symbol.iterator;
        function N(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (z && e[z]) || e["@@iterator"])
              ? e
              : null;
        }
        var P = Symbol.for("react.client.reference");
        function B(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === P ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case y:
              return "Profiler";
            case v:
              return "StrictMode";
            case w:
              return "Suspense";
            case E:
              return "SuspenseList";
            case x:
              return "Activity";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case h:
                return "Portal";
              case k:
                return e.displayName || "Context";
              case b:
                return (e._context.displayName || "Context") + ".Consumer";
              case A:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = n.displayName || n.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case S:
                return null !== (n = e.displayName || null)
                  ? n
                  : B(e.type) || "Memo";
              case C:
                ((n = e._payload), (e = e._init));
                try {
                  return B(e(n));
                } catch (e) {}
            }
          return null;
        }
        var T = Array.isArray,
          L = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          O = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          F = { pending: !1, data: null, method: null, action: null },
          D = [],
          R = -1;
        function M(e) {
          return { current: e };
        }
        function I(e) {
          0 > R || ((e.current = D[R]), (D[R] = null), R--);
        }
        function j(e, n) {
          (R++, (D[R] = e.current), (e.current = n));
        }
        var U,
          $,
          H = M(null),
          V = M(null),
          Q = M(null),
          W = M(null);
        function q(e, n) {
          switch ((j(Q, n), j(V, e), j(H, null), n.nodeType)) {
            case 9:
            case 11:
              e = (e = n.documentElement) && (e = e.namespaceURI) ? vf(e) : 0;
              break;
            default:
              if (((e = n.tagName), (n = n.namespaceURI)))
                e = yf((n = vf(n)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (I(H), j(H, e));
        }
        function X() {
          (I(H), I(V), I(Q));
        }
        function K(e) {
          null !== e.memoizedState && j(W, e);
          var n = H.current,
            t = yf(n, e.type);
          n !== t && (j(V, e), j(H, t));
        }
        function Y(e) {
          (V.current === e && (I(H), I(V)),
            W.current === e && (I(W), (cd._currentValue = F)));
        }
        function G(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (e) {
              var n = e.stack.trim().match(/\n( *(at )?)/);
              ((U = (n && n[1]) || ""),
                ($ =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + U + e + $;
        }
        var Z = !1;
        function J(e, n) {
          if (!e || Z) return "";
          Z = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (n) {
                    var t = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(t.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" == typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(t, []);
                      } catch (e) {
                        var r = e;
                      }
                      Reflect.construct(e, [], t);
                    } else {
                      try {
                        t.call();
                      } catch (e) {
                        r = e;
                      }
                      e.call(t.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (e) {
                      r = e;
                    }
                    (t = e()) &&
                      "function" == typeof t.catch &&
                      t.catch(function () {});
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack)
                    return [e.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name",
            );
            l &&
              l.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              o = a[0],
              i = a[1];
            if (o && i) {
              var u = o.split("\n"),
                s = i.split("\n");
              for (
                l = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");
              )
                r++;
              for (
                ;
                l < s.length && !s[l].includes("DetermineComponentFrameRoot");
              )
                l++;
              if (r === u.length || l === s.length)
                for (
                  r = u.length - 1, l = s.length - 1;
                  1 <= r && 0 <= l && u[r] !== s[l];
                )
                  l--;
              for (; 1 <= r && 0 <= l; r--, l--)
                if (u[r] !== s[l]) {
                  if (1 !== r || 1 !== l)
                    do {
                      if ((r--, 0 > --l || u[r] !== s[l])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= l);
                  break;
                }
            }
          } finally {
            ((Z = !1), (Error.prepareStackTrace = t));
          }
          return (t = e ? e.displayName || e.name : "") ? G(t) : "";
        }
        function ee(e, n) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return G(e.type);
            case 16:
              return G("Lazy");
            case 13:
              return e.child !== n && null !== n
                ? G("Suspense Fallback")
                : G("Suspense");
            case 19:
              return G("SuspenseList");
            case 0:
            case 15:
              return J(e.type, !1);
            case 11:
              return J(e.type.render, !1);
            case 1:
              return J(e.type, !0);
            case 31:
              return G("Activity");
            default:
              return "";
          }
        }
        function ne(e) {
          try {
            var n = "",
              t = null;
            do {
              ((n += ee(e, t)), (t = e), (e = e.return));
            } while (e);
            return n;
          } catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack;
          }
        }
        var te = Object.prototype.hasOwnProperty,
          re = r.unstable_scheduleCallback,
          le = r.unstable_cancelCallback,
          ae = r.unstable_shouldYield,
          oe = r.unstable_requestPaint,
          ie = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          se = r.unstable_ImmediatePriority,
          ce = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          de = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          he = r.unstable_setDisableYieldValue,
          ge = null,
          ve = null;
        function ye(e) {
          if (
            ("function" == typeof me && he(e),
            ve && "function" == typeof ve.setStrictMode)
          )
            try {
              ve.setStrictMode(ge, e);
            } catch (e) {}
        }
        var be = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((ke(e) / Ae) | 0)) | 0;
              },
          ke = Math.log,
          Ae = Math.LN2,
          we = 256,
          Ee = 262144,
          Se = 4194304;
        function Ce(e) {
          var n = 42 & e;
          if (0 !== n) return n;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
              return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function xe(e, n, t) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var l = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes;
          e = e.warmLanes;
          var i = 134217727 & r;
          return (
            0 !== i
              ? 0 !== (r = i & ~a)
                ? (l = Ce(r))
                : 0 !== (o &= i)
                  ? (l = Ce(o))
                  : t || (0 !== (t = i & ~e) && (l = Ce(t)))
              : 0 !== (i = r & ~a)
                ? (l = Ce(i))
                : 0 !== o
                  ? (l = Ce(o))
                  : t || (0 !== (t = r & ~e) && (l = Ce(t))),
            0 === l
              ? 0
              : 0 !== n &&
                  n !== l &&
                  0 === (n & a) &&
                  ((a = l & -l) >= (t = n & -n) || (32 === a && 4194048 & t))
                ? n
                : l
          );
        }
        function _e(e, n) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n)
          );
        }
        function ze(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return n + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function Ne() {
          var e = Se;
          return (!(62914560 & (Se <<= 1)) && (Se = 4194304), e);
        }
        function Pe(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function Be(e, n) {
          ((e.pendingLanes |= n),
            268435456 !== n &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Te(e, n, t) {
          ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
          var r = 31 - be(n);
          ((e.entangledLanes |= n),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (261930 & t)));
        }
        function Le(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t;) {
            var r = 31 - be(t),
              l = 1 << r;
            ((l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l));
          }
        }
        function Oe(e, n) {
          var t = n & -n;
          return 0 !== ((t = 42 & t ? 1 : Fe(t)) & (e.suspendedLanes | n))
            ? 0
            : t;
        }
        function Fe(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function De(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 134217727 & e
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Re() {
          var e = O.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Sd(e.type);
        }
        function Me(e, n) {
          var t = O.p;
          try {
            return ((O.p = e), n());
          } finally {
            O.p = t;
          }
        }
        var Ie = Math.random().toString(36).slice(2),
          je = "__reactFiber$" + Ie,
          Ue = "__reactProps$" + Ie,
          $e = "__reactContainer$" + Ie,
          He = "__reactEvents$" + Ie,
          Ve = "__reactListeners$" + Ie,
          Qe = "__reactHandles$" + Ie,
          We = "__reactResources$" + Ie,
          qe = "__reactMarker$" + Ie;
        function Xe(e) {
          (delete e[je],
            delete e[Ue],
            delete e[He],
            delete e[Ve],
            delete e[Qe]);
        }
        function Ke(e) {
          var n = e[je];
          if (n) return n;
          for (var t = e.parentNode; t;) {
            if ((n = t[$e] || t[je])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = Df(e); null !== e;) {
                  if ((t = e[je])) return t;
                  e = Df(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function Ye(e) {
          if ((e = e[je] || e[$e])) {
            var n = e.tag;
            if (
              5 === n ||
              6 === n ||
              13 === n ||
              31 === n ||
              26 === n ||
              27 === n ||
              3 === n
            )
              return e;
          }
          return null;
        }
        function Ge(e) {
          var n = e.tag;
          if (5 === n || 26 === n || 27 === n || 6 === n) return e.stateNode;
          throw Error(o(33));
        }
        function Ze(e) {
          var n = e[We];
          return (
            n ||
              (n = e[We] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            n
          );
        }
        function Je(e) {
          e[qe] = !0;
        }
        var en = new Set(),
          nn = {};
        function tn(e, n) {
          (rn(e, n), rn(e + "Capture", n));
        }
        function rn(e, n) {
          for (nn[e] = n, e = 0; e < n.length; e++) en.add(n[e]);
        }
        var ln = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          an = {},
          on = {};
        function un(e, n, t) {
          if (
            ((l = n),
            te.call(on, l) ||
              (!te.call(an, l) &&
                (ln.test(l) ? (on[l] = !0) : ((an[l] = !0), 0))))
          )
            if (null === t) e.removeAttribute(n);
            else {
              switch (typeof t) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(n);
                case "boolean":
                  var r = n.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(n);
              }
              e.setAttribute(n, "" + t);
            }
          var l;
        }
        function sn(e, n, t) {
          if (null === t) e.removeAttribute(n);
          else {
            switch (typeof t) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttribute(n, "" + t);
          }
        }
        function cn(e, n, t, r) {
          if (null === r) e.removeAttribute(t);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttributeNS(n, t, "" + r);
          }
        }
        function fn(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function dn(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === n || "radio" === n)
          );
        }
        function pn(e) {
          if (!e._valueTracker) {
            var n = dn(e) ? "checked" : "value";
            e._valueTracker = (function (e, n, t) {
              var r = Object.getOwnPropertyDescriptor(
                e.constructor.prototype,
                n,
              );
              if (
                !e.hasOwnProperty(n) &&
                void 0 !== r &&
                "function" == typeof r.get &&
                "function" == typeof r.set
              ) {
                var l = r.get,
                  a = r.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return l.call(this);
                    },
                    set: function (e) {
                      ((t = "" + e), a.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return t;
                    },
                    setValue: function (e) {
                      t = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[n]);
                    },
                  }
                );
              }
            })(e, n, "" + e[n]);
          }
        }
        function mn(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = "";
          return (
            e && (r = dn(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function hn(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        var gn = /[\n"\\]/g;
        function vn(e) {
          return e.replace(gn, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function yn(e, n, t, r, l, a, o, i) {
          ((e.name = ""),
            null != o &&
            "function" != typeof o &&
            "symbol" != typeof o &&
            "boolean" != typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != n
              ? "number" === o
                ? ((0 === n && "" === e.value) || e.value != n) &&
                  (e.value = "" + fn(n))
                : e.value !== "" + fn(n) && (e.value = "" + fn(n))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != n
              ? kn(e, o, fn(n))
              : null != t
                ? kn(e, o, fn(t))
                : null != r && e.removeAttribute("value"),
            null == l && null != a && (e.defaultChecked = !!a),
            null != l &&
              (e.checked = l && "function" != typeof l && "symbol" != typeof l),
            null != i &&
            "function" != typeof i &&
            "symbol" != typeof i &&
            "boolean" != typeof i
              ? (e.name = "" + fn(i))
              : e.removeAttribute("name"));
        }
        function bn(e, n, t, r, l, a, o, i) {
          if (
            (null != a &&
              "function" != typeof a &&
              "symbol" != typeof a &&
              "boolean" != typeof a &&
              (e.type = a),
            null != n || null != t)
          ) {
            if (("submit" === a || "reset" === a) && null == n)
              return void pn(e);
            ((t = null != t ? "" + fn(t) : ""),
              (n = null != n ? "" + fn(n) : t),
              i || n === e.value || (e.value = n),
              (e.defaultValue = n));
          }
          ((r =
            "function" != typeof (r = null != r ? r : l) &&
            "symbol" != typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" != typeof o &&
              "symbol" != typeof o &&
              "boolean" != typeof o &&
              (e.name = o),
            pn(e));
        }
        function kn(e, n, t) {
          ("number" === n && hn(e.ownerDocument) === e) ||
            e.defaultValue === "" + t ||
            (e.defaultValue = "" + t);
        }
        function An(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
            for (t = 0; t < e.length; t++)
              ((l = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== l && (e[t].selected = l),
                l && r && (e[t].defaultSelected = !0));
          } else {
            for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
              if (e[l].value === t)
                return (
                  (e[l].selected = !0),
                  void (r && (e[l].defaultSelected = !0))
                );
              null !== n || e[l].disabled || (n = e[l]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function wn(e, n, t) {
          null == n ||
          ((n = "" + fn(n)) !== e.value && (e.value = n), null != t)
            ? (e.defaultValue = null != t ? "" + fn(t) : "")
            : e.defaultValue !== n && (e.defaultValue = n);
        }
        function En(e, n, t, r) {
          if (null == n) {
            if (null != r) {
              if (null != t) throw Error(o(92));
              if (T(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              t = r;
            }
            (null == t && (t = ""), (n = t));
          }
          ((t = fn(n)),
            (e.defaultValue = t),
            (r = e.textContent) === t &&
              "" !== r &&
              null !== r &&
              (e.value = r),
            pn(e));
        }
        function Sn(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var Cn = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function xn(e, n, t) {
          var r = 0 === n.indexOf("--");
          null == t || "boolean" == typeof t || "" === t
            ? r
              ? e.setProperty(n, "")
              : "float" === n
                ? (e.cssFloat = "")
                : (e[n] = "")
            : r
              ? e.setProperty(n, t)
              : "number" != typeof t || 0 === t || Cn.has(n)
                ? "float" === n
                  ? (e.cssFloat = t)
                  : (e[n] = ("" + t).trim())
                : (e[n] = t + "px");
        }
        function _n(e, n, t) {
          if (null != n && "object" != typeof n) throw Error(o(62));
          if (((e = e.style), null != t)) {
            for (var r in t)
              !t.hasOwnProperty(r) ||
                (null != n && n.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                    ? (e.cssFloat = "")
                    : (e[r] = ""));
            for (var l in n)
              ((r = n[l]), n.hasOwnProperty(l) && t[l] !== r && xn(e, l, r));
          } else for (var a in n) n.hasOwnProperty(a) && xn(e, a, n[a]);
        }
        function zn(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Nn = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Pn =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Bn(e) {
          return Pn.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Tn() {}
        var Ln = null;
        function On(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Fn = null,
          Dn = null;
        function Rn(e) {
          var n = Ye(e);
          if (n && (e = n.stateNode)) {
            var t = e[Ue] || null;
            e: switch (((e = n.stateNode), n.type)) {
              case "input":
                if (
                  (yn(
                    e,
                    t.value,
                    t.defaultValue,
                    t.defaultValue,
                    t.checked,
                    t.defaultChecked,
                    t.type,
                    t.name,
                  ),
                  (n = t.name),
                  "radio" === t.type && null != n)
                ) {
                  for (t = e; t.parentNode;) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      'input[name="' + vn("" + n) + '"][type="radio"]',
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var l = r[Ue] || null;
                      if (!l) throw Error(o(90));
                      yn(
                        r,
                        l.value,
                        l.defaultValue,
                        l.defaultValue,
                        l.checked,
                        l.defaultChecked,
                        l.type,
                        l.name,
                      );
                    }
                  }
                  for (n = 0; n < t.length; n++)
                    (r = t[n]).form === e.form && mn(r);
                }
                break e;
              case "textarea":
                wn(e, t.value, t.defaultValue);
                break e;
              case "select":
                null != (n = t.value) && An(e, !!t.multiple, n, !1);
            }
          }
        }
        var Mn = !1;
        function In(e, n, t) {
          if (Mn) return e(n, t);
          Mn = !0;
          try {
            return e(n);
          } finally {
            if (
              ((Mn = !1),
              (null !== Fn || null !== Dn) &&
                (Zs(), Fn && ((n = Fn), (e = Dn), (Dn = Fn = null), Rn(n), e)))
            )
              for (n = 0; n < e.length; n++) Rn(e[n]);
          }
        }
        function jn(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = t[Ue] || null;
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" != typeof t) throw Error(o(231, n, typeof t));
          return t;
        }
        var Un = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          $n = !1;
        if (Un)
          try {
            var Hn = {};
            (Object.defineProperty(Hn, "passive", {
              get: function () {
                $n = !0;
              },
            }),
              window.addEventListener("test", Hn, Hn),
              window.removeEventListener("test", Hn, Hn));
          } catch (e) {
            $n = !1;
          }
        var Vn = null,
          Qn = null,
          Wn = null;
        function qn() {
          if (Wn) return Wn;
          var e,
            n,
            t = Qn,
            r = t.length,
            l = "value" in Vn ? Vn.value : Vn.textContent,
            a = l.length;
          for (e = 0; e < r && t[e] === l[e]; e++);
          var o = r - e;
          for (n = 1; n <= o && t[r - n] === l[a - n]; n++);
          return (Wn = l.slice(e, 1 < n ? 1 - n : void 0));
        }
        function Xn(e) {
          var n = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Kn() {
          return !0;
        }
        function Yn() {
          return !1;
        }
        function Gn(e) {
          function n(n, t, r, l, a) {
            for (var o in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = l),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
            return (
              (this.isDefaultPrevented = (
                null != l.defaultPrevented
                  ? l.defaultPrevented
                  : !1 === l.returnValue
              )
                ? Kn
                : Yn),
              (this.isPropagationStopped = Yn),
              this
            );
          }
          return (
            d(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = Kn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Kn));
              },
              persist: function () {},
              isPersistent: Kn,
            }),
            n
          );
        }
        var Zn,
          Jn,
          et,
          nt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          tt = Gn(nt),
          rt = d({}, nt, { view: 0, detail: 0 }),
          lt = Gn(rt),
          at = d({}, rt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: gt,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== et &&
                    (et && "mousemove" === e.type
                      ? ((Zn = e.screenX - et.screenX),
                        (Jn = e.screenY - et.screenY))
                      : (Jn = Zn = 0),
                    (et = e)),
                  Zn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Jn;
            },
          }),
          ot = Gn(at),
          it = Gn(d({}, at, { dataTransfer: 0 })),
          ut = Gn(d({}, rt, { relatedTarget: 0 })),
          st = Gn(
            d({}, nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          ct = Gn(
            d({}, nt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
          ),
          ft = Gn(d({}, nt, { data: 0 })),
          dt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          pt = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          mt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function ht(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = mt[e]) && !!n[e];
        }
        function gt() {
          return ht;
        }
        var vt = Gn(
            d({}, rt, {
              key: function (e) {
                if (e.key) {
                  var n = dt[e.key] || e.key;
                  if ("Unidentified" !== n) return n;
                }
                return "keypress" === e.type
                  ? 13 === (e = Xn(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? pt[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: gt,
              charCode: function (e) {
                return "keypress" === e.type ? Xn(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Xn(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          yt = Gn(
            d({}, at, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          bt = Gn(
            d({}, rt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: gt,
            }),
          ),
          kt = Gn(
            d({}, nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          At = Gn(
            d({}, at, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          wt = Gn(d({}, nt, { newState: 0, oldState: 0 })),
          Et = [9, 13, 27, 32],
          St = Un && "CompositionEvent" in window,
          Ct = null;
        Un && "documentMode" in document && (Ct = document.documentMode);
        var xt = Un && "TextEvent" in window && !Ct,
          _t = Un && (!St || (Ct && 8 < Ct && 11 >= Ct)),
          zt = String.fromCharCode(32),
          Nt = !1;
        function Pt(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== Et.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bt(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Tt = !1,
          Lt = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Ot(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!Lt[e.type] : "textarea" === n;
        }
        function Ft(e, n, t, r) {
          (Fn ? (Dn ? Dn.push(r) : (Dn = [r])) : (Fn = r),
            0 < (n = tf(n, "onChange")).length &&
              ((t = new tt("onChange", "change", null, t, r)),
              e.push({ event: t, listeners: n })));
        }
        var Dt = null,
          Rt = null;
        function Mt(e) {
          Xc(e, 0);
        }
        function It(e) {
          if (mn(Ge(e))) return e;
        }
        function jt(e, n) {
          if ("change" === e) return n;
        }
        var Ut = !1;
        if (Un) {
          var $t;
          if (Un) {
            var Ht = "oninput" in document;
            if (!Ht) {
              var Vt = document.createElement("div");
              (Vt.setAttribute("oninput", "return;"),
                (Ht = "function" == typeof Vt.oninput));
            }
            $t = Ht;
          } else $t = !1;
          Ut = $t && (!document.documentMode || 9 < document.documentMode);
        }
        function Qt() {
          Dt && (Dt.detachEvent("onpropertychange", Wt), (Rt = Dt = null));
        }
        function Wt(e) {
          if ("value" === e.propertyName && It(Rt)) {
            var n = [];
            (Ft(n, Rt, e, On(e)), In(Mt, n));
          }
        }
        function qt(e, n, t) {
          "focusin" === e
            ? (Qt(), (Rt = t), (Dt = n).attachEvent("onpropertychange", Wt))
            : "focusout" === e && Qt();
        }
        function Xt(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return It(Rt);
        }
        function Kt(e, n) {
          if ("click" === e) return It(n);
        }
        function Yt(e, n) {
          if ("input" === e || "change" === e) return It(n);
        }
        var Gt =
          "function" == typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
                );
              };
        function Zt(e, n) {
          if (Gt(e, n)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var l = t[r];
            if (!te.call(n, l) || !Gt(e[l], n[l])) return !1;
          }
          return !0;
        }
        function Jt(e) {
          for (; e && e.firstChild;) e = e.firstChild;
          return e;
        }
        function er(e, n) {
          var t,
            r = Jt(e);
          for (e = 0; r;) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r;) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Jt(r);
          }
        }
        function nr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? nr(e, n.parentNode)
                  : "contains" in e
                    ? e.contains(n)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function tr(e) {
          for (
            var n = hn(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document,
            );
            n instanceof e.HTMLIFrameElement;
          ) {
            try {
              var t = "string" == typeof n.contentWindow.location.href;
            } catch (e) {
              t = !1;
            }
            if (!t) break;
            n = hn((e = n.contentWindow).document);
          }
          return n;
        }
        function rr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        var lr =
            Un && "documentMode" in document && 11 >= document.documentMode,
          ar = null,
          or = null,
          ir = null,
          ur = !1;
        function sr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
                ? t
                : t.ownerDocument;
          ur ||
            null == ar ||
            ar !== hn(r) ||
            ((r =
              "selectionStart" in (r = ar) && rr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (ir && Zt(ir, r)) ||
              ((ir = r),
              0 < (r = tf(or, "onSelect")).length &&
                ((n = new tt("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = ar))));
        }
        function cr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
          );
        }
        var fr = {
            animationend: cr("Animation", "AnimationEnd"),
            animationiteration: cr("Animation", "AnimationIteration"),
            animationstart: cr("Animation", "AnimationStart"),
            transitionrun: cr("Transition", "TransitionRun"),
            transitionstart: cr("Transition", "TransitionStart"),
            transitioncancel: cr("Transition", "TransitionCancel"),
            transitionend: cr("Transition", "TransitionEnd"),
          },
          dr = {},
          pr = {};
        function mr(e) {
          if (dr[e]) return dr[e];
          if (!fr[e]) return e;
          var n,
            t = fr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in pr) return (dr[e] = t[n]);
          return e;
        }
        Un &&
          ((pr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete fr.animationend.animation,
            delete fr.animationiteration.animation,
            delete fr.animationstart.animation),
          "TransitionEvent" in window || delete fr.transitionend.transition);
        var hr = mr("animationend"),
          gr = mr("animationiteration"),
          vr = mr("animationstart"),
          yr = mr("transitionrun"),
          br = mr("transitionstart"),
          kr = mr("transitioncancel"),
          Ar = mr("transitionend"),
          wr = new Map(),
          Er =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Sr(e, n) {
          (wr.set(e, n), tn(n, [e]));
        }
        Er.push("scrollEnd");
        var Cr =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" == typeof window &&
                    "function" == typeof window.ErrorEvent
                  ) {
                    var n = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" == typeof e &&
                        null !== e &&
                        "string" == typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(n)) return;
                  } else if (
                    "object" == typeof process &&
                    "function" == typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          xr = [],
          _r = 0,
          zr = 0;
        function Nr() {
          for (var e = _r, n = (zr = _r = 0); n < e;) {
            var t = xr[n];
            xr[n++] = null;
            var r = xr[n];
            xr[n++] = null;
            var l = xr[n];
            xr[n++] = null;
            var a = xr[n];
            if (((xr[n++] = null), null !== r && null !== l)) {
              var o = r.pending;
              (null === o ? (l.next = l) : ((l.next = o.next), (o.next = l)),
                (r.pending = l));
            }
            0 !== a && Lr(t, l, a);
          }
        }
        function Pr(e, n, t, r) {
          ((xr[_r++] = e),
            (xr[_r++] = n),
            (xr[_r++] = t),
            (xr[_r++] = r),
            (zr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Br(e, n, t, r) {
          return (Pr(e, n, t, r), Or(e));
        }
        function Tr(e, n) {
          return (Pr(e, null, null, n), Or(e));
        }
        function Lr(e, n, t) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t);
          for (var l = !1, a = e.return; null !== a;)
            ((a.childLanes |= t),
              null !== (r = a.alternate) && (r.childLanes |= t),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (l = !0)),
              (e = a),
              (a = a.return));
          return 3 === e.tag
            ? ((a = e.stateNode),
              l &&
                null !== n &&
                ((l = 31 - be(t)),
                null === (r = (e = a.hiddenUpdates)[l])
                  ? (e[l] = [n])
                  : r.push(n),
                (n.lane = 536870912 | t)),
              a)
            : null;
        }
        function Or(e) {
          if (50 < Hs) throw ((Hs = 0), (Vs = null), Error(o(185)));
          for (var n = e.return; null !== n;) n = (e = n).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Fr = {};
        function Dr(e, n, t, r) {
          ((this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Rr(e, n, t, r) {
          return new Dr(e, n, t, r);
        }
        function Mr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ir(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Rr(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 65011712 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            (t.refCleanup = e.refCleanup),
            t
          );
        }
        function jr(e, n) {
          e.flags &= 65011714;
          var t = e.alternate;
          return (
            null === t
              ? ((e.childLanes = 0),
                (e.lanes = n),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = t.childLanes),
                (e.lanes = t.lanes),
                (e.child = t.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = t.memoizedProps),
                (e.memoizedState = t.memoizedState),
                (e.updateQueue = t.updateQueue),
                (e.type = t.type),
                (n = t.dependencies),
                (e.dependencies =
                  null === n
                    ? null
                    : { lanes: n.lanes, firstContext: n.firstContext })),
            e
          );
        }
        function Ur(e, n, t, r, l, a) {
          var i = 0;
          if (((r = e), "function" == typeof e)) Mr(e) && (i = 1);
          else if ("string" == typeof e)
            i = (function (e, n, t) {
              if (1 === t || null != n.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" != typeof n.precedence ||
                    "string" != typeof n.href ||
                    "" === n.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" != typeof n.rel ||
                    "string" != typeof n.href ||
                    "" === n.href ||
                    n.onLoad ||
                    n.onError
                  )
                    break;
                  return (
                    "stylesheet" !== n.rel ||
                    ((e = n.disabled),
                    "string" == typeof n.precedence && null == e)
                  );
                case "script":
                  if (
                    n.async &&
                    "function" != typeof n.async &&
                    "symbol" != typeof n.async &&
                    !n.onLoad &&
                    !n.onError &&
                    n.src &&
                    "string" == typeof n.src
                  )
                    return !0;
              }
              return !1;
            })(e, t, H.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case x:
                return (
                  ((e = Rr(31, t, n, l)).elementType = x),
                  (e.lanes = a),
                  e
                );
              case g:
                return $r(t.children, l, a, n);
              case v:
                ((i = 8), (l |= 24));
                break;
              case y:
                return (
                  ((e = Rr(12, t, n, 2 | l)).elementType = y),
                  (e.lanes = a),
                  e
                );
              case w:
                return (
                  ((e = Rr(13, t, n, l)).elementType = w),
                  (e.lanes = a),
                  e
                );
              case E:
                return (
                  ((e = Rr(19, t, n, l)).elementType = E),
                  (e.lanes = a),
                  e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case k:
                      i = 10;
                      break e;
                    case b:
                      i = 9;
                      break e;
                    case A:
                      i = 11;
                      break e;
                    case S:
                      i = 14;
                      break e;
                    case C:
                      ((i = 16), (r = null));
                      break e;
                  }
                ((i = 29),
                  (t = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null));
            }
          return (
            ((n = Rr(i, t, n, l)).elementType = e),
            (n.type = r),
            (n.lanes = a),
            n
          );
        }
        function $r(e, n, t, r) {
          return (((e = Rr(7, e, r, n)).lanes = t), e);
        }
        function Hr(e, n, t) {
          return (((e = Rr(6, e, null, n)).lanes = t), e);
        }
        function Vr(e) {
          var n = Rr(18, null, null, 0);
          return ((n.stateNode = e), n);
        }
        function Qr(e, n, t) {
          return (
            ((n = Rr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n,
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        var Wr = new WeakMap();
        function qr(e, n) {
          if ("object" == typeof e && null !== e) {
            var t = Wr.get(e);
            return void 0 !== t
              ? t
              : ((n = { value: e, source: n, stack: ne(n) }), Wr.set(e, n), n);
          }
          return { value: e, source: n, stack: ne(n) };
        }
        var Xr = [],
          Kr = 0,
          Yr = null,
          Gr = 0,
          Zr = [],
          Jr = 0,
          el = null,
          nl = 1,
          tl = "";
        function rl(e, n) {
          ((Xr[Kr++] = Gr), (Xr[Kr++] = Yr), (Yr = e), (Gr = n));
        }
        function ll(e, n, t) {
          ((Zr[Jr++] = nl), (Zr[Jr++] = tl), (Zr[Jr++] = el), (el = e));
          var r = nl;
          e = tl;
          var l = 32 - be(r) - 1;
          ((r &= ~(1 << l)), (t += 1));
          var a = 32 - be(n) + l;
          if (30 < a) {
            var o = l - (l % 5);
            ((a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (l -= o),
              (nl = (1 << (32 - be(n) + l)) | (t << l) | r),
              (tl = a + e));
          } else ((nl = (1 << a) | (t << l) | r), (tl = e));
        }
        function al(e) {
          null !== e.return && (rl(e, 1), ll(e, 1, 0));
        }
        function ol(e) {
          for (; e === Yr;)
            ((Yr = Xr[--Kr]),
              (Xr[Kr] = null),
              (Gr = Xr[--Kr]),
              (Xr[Kr] = null));
          for (; e === el;)
            ((el = Zr[--Jr]),
              (Zr[Jr] = null),
              (tl = Zr[--Jr]),
              (Zr[Jr] = null),
              (nl = Zr[--Jr]),
              (Zr[Jr] = null));
        }
        function il(e, n) {
          ((Zr[Jr++] = nl),
            (Zr[Jr++] = tl),
            (Zr[Jr++] = el),
            (nl = n.id),
            (tl = n.overflow),
            (el = e));
        }
        var ul = null,
          sl = null,
          cl = !1,
          fl = null,
          dl = !1,
          pl = Error(o(519));
        function ml(e) {
          throw (
            kl(
              qr(
                Error(
                  o(
                    418,
                    1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                      ? "text"
                      : "HTML",
                    "",
                  ),
                ),
                e,
              ),
            ),
            pl
          );
        }
        function hl(e) {
          var n = e.stateNode,
            t = e.type,
            r = e.memoizedProps;
          switch (((n[je] = e), (n[Ue] = r), t)) {
            case "dialog":
              (Kc("cancel", n), Kc("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              Kc("load", n);
              break;
            case "video":
            case "audio":
              for (t = 0; t < Wc.length; t++) Kc(Wc[t], n);
              break;
            case "source":
              Kc("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (Kc("error", n), Kc("load", n));
              break;
            case "details":
              Kc("toggle", n);
              break;
            case "input":
              (Kc("invalid", n),
                bn(
                  n,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0,
                ));
              break;
            case "select":
              Kc("invalid", n);
              break;
            case "textarea":
              (Kc("invalid", n), En(n, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (t = r.children) &&
            "number" != typeof t &&
            "bigint" != typeof t) ||
          n.textContent === "" + t ||
          !0 === r.suppressHydrationWarning ||
          sf(n.textContent, t)
            ? (null != r.popover && (Kc("beforetoggle", n), Kc("toggle", n)),
              null != r.onScroll && Kc("scroll", n),
              null != r.onScrollEnd && Kc("scrollend", n),
              null != r.onClick && (n.onclick = Tn),
              (n = !0))
            : (n = !1),
            n || ml(e, !0));
        }
        function gl(e) {
          for (ul = e.return; ul;)
            switch (ul.tag) {
              case 5:
              case 31:
              case 13:
                return void (dl = !1);
              case 27:
              case 3:
                return void (dl = !0);
              default:
                ul = ul.return;
            }
        }
        function vl(e) {
          if (e !== ul) return !1;
          if (!cl) return (gl(e), (cl = !0), !1);
          var n,
            t = e.tag;
          if (
            ((n = 3 !== t && 27 !== t) &&
              ((n = 5 === t) &&
                (n =
                  !("form" !== (n = e.type) && "button" !== n) ||
                  bf(e.type, e.memoizedProps)),
              (n = !n)),
            n && sl && ml(e),
            gl(e),
            13 === t)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            sl = Ff(e);
          } else if (31 === t) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            sl = Ff(e);
          } else
            27 === t
              ? ((t = sl),
                xf(e.type) ? ((e = Of), (Of = null), (sl = e)) : (sl = t))
              : (sl = ul ? Lf(e.stateNode.nextSibling) : null);
          return !0;
        }
        function yl() {
          ((sl = ul = null), (cl = !1));
        }
        function bl() {
          var e = fl;
          return (
            null !== e &&
              (null === Ns ? (Ns = e) : Ns.push.apply(Ns, e), (fl = null)),
            e
          );
        }
        function kl(e) {
          null === fl ? (fl = [e]) : fl.push(e);
        }
        var Al = M(null),
          wl = null,
          El = null;
        function Sl(e, n, t) {
          (j(Al, n._currentValue), (n._currentValue = t));
        }
        function Cl(e) {
          ((e._currentValue = Al.current), I(Al));
        }
        function xl(e, n, t) {
          for (; null !== e;) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function _l(e, n, t, r) {
          var l = e.child;
          for (null !== l && (l.return = e); null !== l;) {
            var a = l.dependencies;
            if (null !== a) {
              var i = l.child;
              a = a.firstContext;
              e: for (; null !== a;) {
                var u = a;
                a = l;
                for (var s = 0; s < n.length; s++)
                  if (u.context === n[s]) {
                    ((a.lanes |= t),
                      null !== (u = a.alternate) && (u.lanes |= t),
                      xl(a.return, t, e),
                      r || (i = null));
                    break e;
                  }
                a = u.next;
              }
            } else if (18 === l.tag) {
              if (null === (i = l.return)) throw Error(o(341));
              ((i.lanes |= t),
                null !== (a = i.alternate) && (a.lanes |= t),
                xl(i, t, e),
                (i = null));
            } else i = l.child;
            if (null !== i) i.return = l;
            else
              for (i = l; null !== i;) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (l = i.sibling)) {
                  ((l.return = i.return), (i = l));
                  break;
                }
                i = i.return;
              }
            l = i;
          }
        }
        function zl(e, n, t, r) {
          e = null;
          for (var l = n, a = !1; null !== l;) {
            if (!a)
              if (524288 & l.flags) a = !0;
              else if (262144 & l.flags) break;
            if (10 === l.tag) {
              var i = l.alternate;
              if (null === i) throw Error(o(387));
              if (null !== (i = i.memoizedProps)) {
                var u = l.type;
                Gt(l.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (l === W.current) {
              if (null === (i = l.alternate)) throw Error(o(387));
              i.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
                (null !== e ? e.push(cd) : (e = [cd]));
            }
            l = l.return;
          }
          (null !== e && _l(n, e, t, r), (n.flags |= 262144));
        }
        function Nl(e) {
          for (e = e.firstContext; null !== e;) {
            if (!Gt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Pl(e) {
          ((wl = e),
            (El = null),
            null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Bl(e) {
          return Ll(wl, e);
        }
        function Tl(e, n) {
          return (null === wl && Pl(e), Ll(e, n));
        }
        function Ll(e, n) {
          var t = n._currentValue;
          if (
            ((n = { context: n, memoizedValue: t, next: null }), null === El)
          ) {
            if (null === e) throw Error(o(308));
            ((El = n),
              (e.dependencies = { lanes: 0, firstContext: n }),
              (e.flags |= 524288));
          } else El = El.next = n;
          return t;
        }
        var Ol =
            "undefined" != typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    n = (this.signal = {
                      aborted: !1,
                      addEventListener: function (n, t) {
                        e.push(t);
                      },
                    });
                  this.abort = function () {
                    ((n.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          Fl = r.unstable_scheduleCallback,
          Dl = r.unstable_NormalPriority,
          Rl = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ml() {
          return { controller: new Ol(), data: new Map(), refCount: 0 };
        }
        function Il(e) {
          (e.refCount--,
            0 === e.refCount &&
              Fl(Dl, function () {
                e.controller.abort();
              }));
        }
        var jl = null,
          Ul = 0,
          $l = 0,
          Hl = null;
        function Vl() {
          if (0 === --Ul && null !== jl) {
            null !== Hl && (Hl.status = "fulfilled");
            var e = jl;
            ((jl = null), ($l = 0), (Hl = null));
            for (var n = 0; n < e.length; n++) (0, e[n])();
          }
        }
        var Ql = L.S;
        L.S = function (e, n) {
          ((Ts = ie()),
            "object" == typeof n &&
              null !== n &&
              "function" == typeof n.then &&
              (function (e, n) {
                if (null === jl) {
                  var t = (jl = []);
                  ((Ul = 0),
                    ($l = Uc()),
                    (Hl = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        t.push(e);
                      },
                    }));
                }
                (Ul++, n.then(Vl, Vl));
              })(0, n),
            null !== Ql && Ql(e, n));
        };
        var Wl = M(null);
        function ql() {
          var e = Wl.current;
          return null !== e ? e : ps.pooledCache;
        }
        function Xl(e, n) {
          j(Wl, null === n ? Wl.current : n.pool);
        }
        function Kl() {
          var e = ql();
          return null === e ? null : { parent: Rl._currentValue, pool: e };
        }
        var Yl = Error(o(460)),
          Gl = Error(o(474)),
          Zl = Error(o(542)),
          Jl = { then: function () {} };
        function ea(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function na(e, n, t) {
          switch (
            (void 0 === (t = e[t])
              ? e.push(n)
              : t !== n && (n.then(Tn, Tn), (n = t)),
            n.status)
          ) {
            case "fulfilled":
              return n.value;
            case "rejected":
              throw (aa((e = n.reason)), e);
            default:
              if ("string" == typeof n.status) n.then(Tn, Tn);
              else {
                if (null !== (e = ps) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                (((e = n).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === n.status) {
                        var t = n;
                        ((t.status = "fulfilled"), (t.value = e));
                      }
                    },
                    function (e) {
                      if ("pending" === n.status) {
                        var t = n;
                        ((t.status = "rejected"), (t.reason = e));
                      }
                    },
                  ));
              }
              switch (n.status) {
                case "fulfilled":
                  return n.value;
                case "rejected":
                  throw (aa((e = n.reason)), e);
              }
              throw ((ra = n), Yl);
          }
        }
        function ta(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (e) {
            if (
              null !== e &&
              "object" == typeof e &&
              "function" == typeof e.then
            )
              throw ((ra = e), Yl);
            throw e;
          }
        }
        var ra = null;
        function la() {
          if (null === ra) throw Error(o(459));
          var e = ra;
          return ((ra = null), e);
        }
        function aa(e) {
          if (e === Yl || e === Zl) throw Error(o(483));
        }
        var oa = null,
          ia = 0;
        function ua(e) {
          var n = ia;
          return ((ia += 1), null === oa && (oa = []), na(oa, e, n));
        }
        function sa(e, n) {
          ((n = n.props.ref), (e.ref = void 0 !== n ? n : null));
        }
        function ca(e, n) {
          if (n.$$typeof === p) throw Error(o(525));
          throw (
            (e = Object.prototype.toString.call(n)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function fa(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r;) (n(t, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var n = new Map(); null !== e;)
              (null !== e.key ? n.set(e.key, e) : n.set(e.index, e),
                (e = e.sibling));
            return n;
          }
          function l(e, n) {
            return (((e = Ir(e, n)).index = 0), (e.sibling = null), e);
          }
          function a(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 67108866), t)
                    : r
                  : ((n.flags |= 67108866), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function i(n) {
            return (e && null === n.alternate && (n.flags |= 67108866), n);
          }
          function u(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Hr(t, e.mode, r)).return = e), n)
              : (((n = l(n, t)).return = e), n);
          }
          function s(e, n, t, r) {
            var a = t.type;
            return a === g
              ? f(e, n, t.props.children, r, t.key)
              : null !== n &&
                  (n.elementType === a ||
                    ("object" == typeof a &&
                      null !== a &&
                      a.$$typeof === C &&
                      ta(a) === n.type))
                ? (sa((n = l(n, t.props)), t), (n.return = e), n)
                : (sa((n = Ur(t.type, t.key, t.props, null, e.mode, r)), t),
                  (n.return = e),
                  n);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Qr(t, e.mode, r)).return = e), n)
              : (((n = l(n, t.children || [])).return = e), n);
          }
          function f(e, n, t, r, a) {
            return null === n || 7 !== n.tag
              ? (((n = $r(t, e.mode, r, a)).return = e), n)
              : (((n = l(n, t)).return = e), n);
          }
          function d(e, n, t) {
            if (
              ("string" == typeof n && "" !== n) ||
              "number" == typeof n ||
              "bigint" == typeof n
            )
              return (((n = Hr("" + n, e.mode, t)).return = e), n);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return (
                    sa((t = Ur(n.type, n.key, n.props, null, e.mode, t)), n),
                    (t.return = e),
                    t
                  );
                case h:
                  return (((n = Qr(n, e.mode, t)).return = e), n);
                case C:
                  return d(e, (n = ta(n)), t);
              }
              if (T(n) || N(n))
                return (((n = $r(n, e.mode, t, null)).return = e), n);
              if ("function" == typeof n.then) return d(e, ua(n), t);
              if (n.$$typeof === k) return d(e, Tl(e, n), t);
              ca(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var l = null !== n ? n.key : null;
            if (
              ("string" == typeof t && "" !== t) ||
              "number" == typeof t ||
              "bigint" == typeof t
            )
              return null !== l ? null : u(e, n, "" + t, r);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return t.key === l ? s(e, n, t, r) : null;
                case h:
                  return t.key === l ? c(e, n, t, r) : null;
                case C:
                  return p(e, n, (t = ta(t)), r);
              }
              if (T(t) || N(t)) return null !== l ? null : f(e, n, t, r, null);
              if ("function" == typeof t.then) return p(e, n, ua(t), r);
              if (t.$$typeof === k) return p(e, n, Tl(e, t), r);
              ca(e, t);
            }
            return null;
          }
          function v(e, n, t, r, l) {
            if (
              ("string" == typeof r && "" !== r) ||
              "number" == typeof r ||
              "bigint" == typeof r
            )
              return u(n, (e = e.get(t) || null), "" + r, l);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return s(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    l,
                  );
                case h:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    l,
                  );
                case C:
                  return v(e, n, t, (r = ta(r)), l);
              }
              if (T(r) || N(r)) return f(n, (e = e.get(t) || null), r, l, null);
              if ("function" == typeof r.then) return v(e, n, t, ua(r), l);
              if (r.$$typeof === k) return v(e, n, t, Tl(n, r), l);
              ca(n, r);
            }
            return null;
          }
          function y(u, s, c, f) {
            if (
              ("object" == typeof c &&
                null !== c &&
                c.type === g &&
                null === c.key &&
                (c = c.props.children),
              "object" == typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case m:
                  e: {
                    for (var b = c.key; null !== s;) {
                      if (s.key === b) {
                        if ((b = c.type) === g) {
                          if (7 === s.tag) {
                            (t(u, s.sibling),
                              ((f = l(s, c.props.children)).return = u),
                              (u = f));
                            break e;
                          }
                        } else if (
                          s.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            ta(b) === s.type)
                        ) {
                          (t(u, s.sibling),
                            sa((f = l(s, c.props)), c),
                            (f.return = u),
                            (u = f));
                          break e;
                        }
                        t(u, s);
                        break;
                      }
                      (n(u, s), (s = s.sibling));
                    }
                    c.type === g
                      ? (((f = $r(c.props.children, u.mode, f, c.key)).return =
                          u),
                        (u = f))
                      : (sa(
                          (f = Ur(c.type, c.key, c.props, null, u.mode, f)),
                          c,
                        ),
                        (f.return = u),
                        (u = f));
                  }
                  return i(u);
                case h:
                  e: {
                    for (b = c.key; null !== s;) {
                      if (s.key === b) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === c.containerInfo &&
                          s.stateNode.implementation === c.implementation
                        ) {
                          (t(u, s.sibling),
                            ((f = l(s, c.children || [])).return = u),
                            (u = f));
                          break e;
                        }
                        t(u, s);
                        break;
                      }
                      (n(u, s), (s = s.sibling));
                    }
                    (((f = Qr(c, u.mode, f)).return = u), (u = f));
                  }
                  return i(u);
                case C:
                  return y(u, s, (c = ta(c)), f);
              }
              if (T(c))
                return (function (l, o, i, u) {
                  for (
                    var s = null, c = null, f = o, m = (o = 0), h = null;
                    null !== f && m < i.length;
                    m++
                  ) {
                    f.index > m ? ((h = f), (f = null)) : (h = f.sibling);
                    var g = p(l, f, i[m], u);
                    if (null === g) {
                      null === f && (f = h);
                      break;
                    }
                    (e && f && null === g.alternate && n(l, f),
                      (o = a(g, o, m)),
                      null === c ? (s = g) : (c.sibling = g),
                      (c = g),
                      (f = h));
                  }
                  if (m === i.length) return (t(l, f), cl && rl(l, m), s);
                  if (null === f) {
                    for (; m < i.length; m++)
                      null !== (f = d(l, i[m], u)) &&
                        ((o = a(f, o, m)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return (cl && rl(l, m), s);
                  }
                  for (f = r(f); m < i.length; m++)
                    null !== (h = v(f, l, m, i[m], u)) &&
                      (e &&
                        null !== h.alternate &&
                        f.delete(null === h.key ? m : h.key),
                      (o = a(h, o, m)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return n(l, e);
                      }),
                    cl && rl(l, m),
                    s
                  );
                })(u, s, c, f);
              if (N(c)) {
                if ("function" != typeof (b = N(c))) throw Error(o(150));
                return (function (l, i, u, s) {
                  if (null == u) throw Error(o(151));
                  for (
                    var c = null,
                      f = null,
                      m = i,
                      h = (i = 0),
                      g = null,
                      y = u.next();
                    null !== m && !y.done;
                    h++, y = u.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(l, m, y.value, s);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && n(l, m),
                      (i = a(b, i, h)),
                      null === f ? (c = b) : (f.sibling = b),
                      (f = b),
                      (m = g));
                  }
                  if (y.done) return (t(l, m), cl && rl(l, h), c);
                  if (null === m) {
                    for (; !y.done; h++, y = u.next())
                      null !== (y = d(l, y.value, s)) &&
                        ((i = a(y, i, h)),
                        null === f ? (c = y) : (f.sibling = y),
                        (f = y));
                    return (cl && rl(l, h), c);
                  }
                  for (m = r(m); !y.done; h++, y = u.next())
                    null !== (y = v(m, l, h, y.value, s)) &&
                      (e &&
                        null !== y.alternate &&
                        m.delete(null === y.key ? h : y.key),
                      (i = a(y, i, h)),
                      null === f ? (c = y) : (f.sibling = y),
                      (f = y));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return n(l, e);
                      }),
                    cl && rl(l, h),
                    c
                  );
                })(u, s, (c = b.call(c)), f);
              }
              if ("function" == typeof c.then) return y(u, s, ua(c), f);
              if (c.$$typeof === k) return y(u, s, Tl(u, c), f);
              ca(u, c);
            }
            return ("string" == typeof c && "" !== c) ||
              "number" == typeof c ||
              "bigint" == typeof c
              ? ((c = "" + c),
                null !== s && 6 === s.tag
                  ? (t(u, s.sibling), ((f = l(s, c)).return = u), (u = f))
                  : (t(u, s), ((f = Hr(c, u.mode, f)).return = u), (u = f)),
                i(u))
              : t(u, s);
          }
          return function (e, n, t, r) {
            try {
              ia = 0;
              var l = y(e, n, t, r);
              return ((oa = null), l);
            } catch (n) {
              if (n === Yl || n === Zl) throw n;
              var a = Rr(29, n, null, e.mode);
              return ((a.lanes = r), (a.return = e), a);
            }
          };
        }
        var da = fa(!0),
          pa = fa(!1),
          ma = !1;
        function ha(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function ga(e, n) {
          ((e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function va(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function ya(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & ds)) {
            var l = r.pending;
            return (
              null === l ? (n.next = n) : ((n.next = l.next), (l.next = n)),
              (r.pending = n),
              (n = Or(e)),
              Lr(e, null, t),
              n
            );
          }
          return (Pr(e, r, n, t), Or(e));
        }
        function ba(e, n, t) {
          if (null !== (n = n.updateQueue) && ((n = n.shared), 4194048 & t)) {
            var r = n.lanes;
            ((t |= r &= e.pendingLanes), (n.lanes = t), Le(e, t));
          }
        }
        function ka(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var l = null,
              a = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var o = {
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: null,
                  next: null,
                };
                (null === a ? (l = a = o) : (a = a.next = o), (t = t.next));
              } while (null !== t);
              null === a ? (l = a = n) : (a = a.next = n);
            } else l = a = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = t)
            );
          }
          (null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n));
        }
        var Aa = !1;
        function wa() {
          if (Aa && null !== Hl) throw Hl;
        }
        function Ea(e, n, t, r) {
          Aa = !1;
          var l = e.updateQueue;
          ma = !1;
          var a = l.firstBaseUpdate,
            o = l.lastBaseUpdate,
            i = l.shared.pending;
          if (null !== i) {
            l.shared.pending = null;
            var u = i,
              s = u.next;
            ((u.next = null), null === o ? (a = s) : (o.next = s), (o = u));
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = l.baseState;
            for (o = 0, c = s = u = null, i = a; ;) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (hs & p) === p : (r & p) === p) {
                (0 !== p && p === $l && (Aa = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      }));
                e: {
                  var h = e,
                    g = i;
                  p = n;
                  var v = t;
                  switch (g.tag) {
                    case 1:
                      if ("function" == typeof (h = g.payload)) {
                        f = h.call(v, f, p);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (p =
                          "function" == typeof (h = g.payload)
                            ? h.call(v, f, p)
                            : h)
                      )
                        break e;
                      f = d({}, f, p);
                      break e;
                    case 2:
                      ma = !0;
                  }
                }
                null !== (p = i.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = l.callbacks) ? (l.callbacks = [p]) : m.push(p));
              } else
                ((m = {
                  lane: p,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = m), (u = f)) : (c = c.next = m),
                  (o |= p));
              if (null === (i = i.next)) {
                if (null === (i = l.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (l.lastBaseUpdate = m),
                  (l.shared.pending = null));
              }
            }
            (null === c && (u = f),
              (l.baseState = u),
              (l.firstBaseUpdate = s),
              (l.lastBaseUpdate = c),
              null === a && (l.shared.lanes = 0),
              (Es |= o),
              (e.lanes = o),
              (e.memoizedState = f));
          }
        }
        function Sa(e, n) {
          if ("function" != typeof e) throw Error(o(191, e));
          e.call(n);
        }
        function Ca(e, n) {
          var t = e.callbacks;
          if (null !== t)
            for (e.callbacks = null, e = 0; e < t.length; e++) Sa(t[e], n);
        }
        var xa = M(null),
          _a = M(0);
        function za(e, n) {
          (j(_a, (e = As)), j(xa, n), (As = e | n.baseLanes));
        }
        function Na() {
          (j(_a, As), j(xa, xa.current));
        }
        function Pa() {
          ((As = _a.current), I(xa), I(_a));
        }
        var Ba = M(null),
          Ta = null;
        function La(e) {
          var n = e.alternate;
          (j(Ma, 1 & Ma.current),
            j(Ba, e),
            null === Ta &&
              (null === n || null !== xa.current || null !== n.memoizedState) &&
              (Ta = e));
        }
        function Oa(e) {
          (j(Ma, Ma.current), j(Ba, e), null === Ta && (Ta = e));
        }
        function Fa(e) {
          22 === e.tag
            ? (j(Ma, Ma.current), j(Ba, e), null === Ta && (Ta = e))
            : Da();
        }
        function Da() {
          (j(Ma, Ma.current), j(Ba, Ba.current));
        }
        function Ra(e) {
          (I(Ba), Ta === e && (Ta = null), I(Ma));
        }
        var Ma = M(0);
        function Ia(e) {
          for (var n = e; null !== n;) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (null !== t && (null === (t = t.dehydrated) || Bf(t) || Tf(t)))
                return n;
            } else if (
              19 !== n.tag ||
              ("forwards" !== n.memoizedProps.revealOrder &&
                "backwards" !== n.memoizedProps.revealOrder &&
                "unstable_legacy-backwards" !== n.memoizedProps.revealOrder &&
                "together" !== n.memoizedProps.revealOrder)
            ) {
              if (null !== n.child) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
            } else if (128 & n.flags) return n;
            if (n === e) break;
            for (; null === n.sibling;) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
          return null;
        }
        var ja = 0,
          Ua = null,
          $a = null,
          Ha = null,
          Va = !1,
          Qa = !1,
          Wa = !1,
          qa = 0,
          Xa = 0,
          Ka = null,
          Ya = 0;
        function Ga() {
          throw Error(o(321));
        }
        function Za(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!Gt(e[t], n[t])) return !1;
          return !0;
        }
        function Ja(e, n, t, r, l, a) {
          return (
            (ja = a),
            (Ua = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (L.H = null === e || null === e.memoizedState ? hi : gi),
            (Wa = !1),
            (a = t(r, l)),
            (Wa = !1),
            Qa && (a = no(n, t, r, l)),
            eo(e),
            a
          );
        }
        function eo(e) {
          L.H = mi;
          var n = null !== $a && null !== $a.next;
          if (
            ((ja = 0),
            (Ha = $a = Ua = null),
            (Va = !1),
            (Xa = 0),
            (Ka = null),
            n)
          )
            throw Error(o(300));
          null === e ||
            Ti ||
            (null !== (e = e.dependencies) && Nl(e) && (Ti = !0));
        }
        function no(e, n, t, r) {
          Ua = e;
          var l = 0;
          do {
            if ((Qa && (Ka = null), (Xa = 0), (Qa = !1), 25 <= l))
              throw Error(o(301));
            if (((l += 1), (Ha = $a = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              ((a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0));
            }
            ((L.H = vi), (a = n(t, r)));
          } while (Qa);
          return a;
        }
        function to() {
          var e = L.H,
            n = e.useState()[0];
          return (
            (n = "function" == typeof n.then ? uo(n) : n),
            (e = e.useState()[0]),
            (null !== $a ? $a.memoizedState : null) !== e && (Ua.flags |= 1024),
            n
          );
        }
        function ro() {
          var e = 0 !== qa;
          return ((qa = 0), e);
        }
        function lo(e, n, t) {
          ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~t));
        }
        function ao(e) {
          if (Va) {
            for (e = e.memoizedState; null !== e;) {
              var n = e.queue;
              (null !== n && (n.pending = null), (e = e.next));
            }
            Va = !1;
          }
          ((ja = 0),
            (Ha = $a = Ua = null),
            (Qa = !1),
            (Xa = qa = 0),
            (Ka = null));
        }
        function oo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Ha ? (Ua.memoizedState = Ha = e) : (Ha = Ha.next = e),
            Ha
          );
        }
        function io() {
          if (null === $a) {
            var e = Ua.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = $a.next;
          var n = null === Ha ? Ua.memoizedState : Ha.next;
          if (null !== n) ((Ha = n), ($a = e));
          else {
            if (null === e) {
              if (null === Ua.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            ((e = {
              memoizedState: ($a = e).memoizedState,
              baseState: $a.baseState,
              baseQueue: $a.baseQueue,
              queue: $a.queue,
              next: null,
            }),
              null === Ha ? (Ua.memoizedState = Ha = e) : (Ha = Ha.next = e));
          }
          return Ha;
        }
        function uo(e) {
          var n = Xa;
          return (
            (Xa += 1),
            null === Ka && (Ka = []),
            (e = na(Ka, e, n)),
            (n = Ua),
            null === (null === Ha ? n.memoizedState : Ha.next) &&
              ((n = n.alternate),
              (L.H = null === n || null === n.memoizedState ? hi : gi)),
            e
          );
        }
        function so(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return uo(e);
            if (e.$$typeof === k) return Bl(e);
          }
          throw Error(o(438, String(e)));
        }
        function co(e) {
          var n = null,
            t = Ua.updateQueue;
          if ((null !== t && (n = t.memoCache), null == n)) {
            var r = Ua.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (n = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == n && (n = { data: [], index: 0 }),
            null === t &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ua.updateQueue = t)),
            (t.memoCache = n),
            void 0 === (t = n.data[n.index]))
          )
            for (t = n.data[n.index] = Array(e), r = 0; r < e; r++) t[r] = _;
          return (n.index++, t);
        }
        function fo(e, n) {
          return "function" == typeof n ? n(e) : n;
        }
        function po(e) {
          return mo(io(), $a, e);
        }
        function mo(e, n, t) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = t;
          var l = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== l) {
              var i = l.next;
              ((l.next = a.next), (a.next = i));
            }
            ((n.baseQueue = l = a), (r.pending = null));
          }
          if (((a = e.baseState), null === l)) e.memoizedState = a;
          else {
            var u = (i = null),
              s = null,
              c = (n = l.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (hs & d) === d : (ja & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  (null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === $l && (f = !0));
                else {
                  if ((ja & p) === p) {
                    ((c = c.next), p === $l && (f = !0));
                    continue;
                  }
                  ((d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (i = a)) : (s = s.next = d),
                    (Ua.lanes |= p),
                    (Es |= p));
                }
                ((d = c.action),
                  Wa && t(a, d),
                  (a = c.hasEagerState ? c.eagerState : t(a, d)));
              } else
                ((p = {
                  lane: d,
                  revertLane: c.revertLane,
                  gesture: c.gesture,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = a)) : (s = s.next = p),
                  (Ua.lanes |= d),
                  (Es |= d));
              c = c.next;
            } while (null !== c && c !== n);
            if (
              (null === s ? (i = a) : (s.next = u),
              !Gt(a, e.memoizedState) && ((Ti = !0), f && null !== (t = Hl)))
            )
              throw t;
            ((e.memoizedState = a),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = a));
          }
          return (null === l && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function ho(e) {
          var n = io(),
            t = n.queue;
          if (null === t) throw Error(o(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            l = t.pending,
            a = n.memoizedState;
          if (null !== l) {
            t.pending = null;
            var i = (l = l.next);
            do {
              ((a = e(a, i.action)), (i = i.next));
            } while (i !== l);
            (Gt(a, n.memoizedState) || (Ti = !0),
              (n.memoizedState = a),
              null === n.baseQueue && (n.baseState = a),
              (t.lastRenderedState = a));
          }
          return [a, r];
        }
        function go(e, n, t) {
          var r = Ua,
            l = io(),
            a = cl;
          if (a) {
            if (void 0 === t) throw Error(o(407));
            t = t();
          } else t = n();
          var i = !Gt(($a || l).memoizedState, t);
          if (
            (i && ((l.memoizedState = t), (Ti = !0)),
            (l = l.queue),
            Uo(bo.bind(null, r, l, e), [e]),
            l.getSnapshot !== n ||
              i ||
              (null !== Ha && 1 & Ha.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Do(9, { destroy: void 0 }, yo.bind(null, r, l, t, n), null),
              null === ps)
            )
              throw Error(o(349));
            a || 127 & ja || vo(r, n, t);
          }
          return t;
        }
        function vo(e, n, t) {
          ((e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = Ua.updateQueue)
              ? ((n = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Ua.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
                ? (n.stores = [e])
                : t.push(e));
        }
        function yo(e, n, t, r) {
          ((n.value = t), (n.getSnapshot = r), ko(n) && Ao(e));
        }
        function bo(e, n, t) {
          return t(function () {
            ko(n) && Ao(e);
          });
        }
        function ko(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !Gt(e, t);
          } catch (e) {
            return !0;
          }
        }
        function Ao(e) {
          var n = Tr(e, 2);
          null !== n && qs(n, 0, 2);
        }
        function wo(e) {
          var n = oo();
          if ("function" == typeof e) {
            var t = e;
            if (((e = t()), Wa)) {
              ye(!0);
              try {
                t();
              } finally {
                ye(!1);
              }
            }
          }
          return (
            (n.memoizedState = n.baseState = e),
            (n.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: fo,
              lastRenderedState: e,
            }),
            n
          );
        }
        function Eo(e, n, t, r) {
          return (
            (e.baseState = t),
            mo(e, $a, "function" == typeof r ? r : fo)
          );
        }
        function So(e, n, t, r, l) {
          if (fi(e)) throw Error(o(485));
          if (null !== (e = n.action)) {
            var a = {
              payload: l,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            (null !== L.T ? t(!0) : (a.isTransition = !1),
              r(a),
              null === (t = n.pending)
                ? ((a.next = n.pending = a), Co(n, a))
                : ((a.next = t.next), (n.pending = t.next = a)));
          }
        }
        function Co(e, n) {
          var t = n.action,
            r = n.payload,
            l = e.state;
          if (n.isTransition) {
            var a = L.T,
              o = {};
            L.T = o;
            try {
              var i = t(l, r),
                u = L.S;
              (null !== u && u(o, i), xo(e, n, i));
            } catch (t) {
              zo(e, n, t);
            } finally {
              (null !== a && null !== o.types && (a.types = o.types),
                (L.T = a));
            }
          } else
            try {
              xo(e, n, (a = t(l, r)));
            } catch (t) {
              zo(e, n, t);
            }
        }
        function xo(e, n, t) {
          null !== t && "object" == typeof t && "function" == typeof t.then
            ? t.then(
                function (t) {
                  _o(e, n, t);
                },
                function (t) {
                  return zo(e, n, t);
                },
              )
            : _o(e, n, t);
        }
        function _o(e, n, t) {
          ((n.status = "fulfilled"),
            (n.value = t),
            No(n),
            (e.state = t),
            null !== (n = e.pending) &&
              ((t = n.next) === n
                ? (e.pending = null)
                : ((t = t.next), (n.next = t), Co(e, t))));
        }
        function zo(e, n, t) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((n.status = "rejected"), (n.reason = t), No(n), (n = n.next));
            } while (n !== r);
          }
          e.action = null;
        }
        function No(e) {
          e = e.listeners;
          for (var n = 0; n < e.length; n++) (0, e[n])();
        }
        function Po(e, n) {
          return n;
        }
        function Bo(e, n) {
          if (cl) {
            var t = ps.formState;
            if (null !== t) {
              e: {
                var r = Ua;
                if (cl) {
                  if (sl) {
                    n: {
                      for (var l = sl, a = dl; 8 !== l.nodeType;) {
                        if (!a) {
                          l = null;
                          break n;
                        }
                        if (null === (l = Lf(l.nextSibling))) {
                          l = null;
                          break n;
                        }
                      }
                      l = "F!" === (a = l.data) || "F" === a ? l : null;
                    }
                    if (l) {
                      ((sl = Lf(l.nextSibling)), (r = "F!" === l.data));
                      break e;
                    }
                  }
                  ml(r);
                }
                r = !1;
              }
              r && (n = t[0]);
            }
          }
          return (
            ((t = oo()).memoizedState = t.baseState = n),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: n,
            }),
            (t.queue = r),
            (t = ui.bind(null, Ua, r)),
            (r.dispatch = t),
            (r = wo(!1)),
            (a = ci.bind(null, Ua, !1, r.queue)),
            (l = { state: n, dispatch: null, action: e, pending: null }),
            ((r = oo()).queue = l),
            (t = So.bind(null, Ua, l, a, t)),
            (l.dispatch = t),
            (r.memoizedState = e),
            [n, t, !1]
          );
        }
        function To(e) {
          return Lo(io(), $a, e);
        }
        function Lo(e, n, t) {
          if (
            ((n = mo(e, n, Po)[0]),
            (e = po(fo)[0]),
            "object" == typeof n && null !== n && "function" == typeof n.then)
          )
            try {
              var r = uo(n);
            } catch (e) {
              if (e === Yl) throw Zl;
              throw e;
            }
          else r = n;
          var l = (n = io()).queue,
            a = l.dispatch;
          return (
            t !== n.memoizedState &&
              ((Ua.flags |= 2048),
              Do(9, { destroy: void 0 }, Oo.bind(null, l, t), null)),
            [r, a, e]
          );
        }
        function Oo(e, n) {
          e.action = n;
        }
        function Fo(e) {
          var n = io(),
            t = $a;
          if (null !== t) return Lo(n, t, e);
          (io(), (n = n.memoizedState));
          var r = (t = io()).queue.dispatch;
          return ((t.memoizedState = e), [n, r, !1]);
        }
        function Do(e, n, t, r) {
          return (
            (e = { tag: e, create: t, deps: r, inst: n, next: null }),
            null === (n = Ua.updateQueue) &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ua.updateQueue = n)),
            null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return io().memoizedState;
        }
        function Mo(e, n, t, r) {
          var l = oo();
          ((Ua.flags |= e),
            (l.memoizedState = Do(
              1 | n,
              { destroy: void 0 },
              t,
              void 0 === r ? null : r,
            )));
        }
        function Io(e, n, t, r) {
          var l = io();
          r = void 0 === r ? null : r;
          var a = l.memoizedState.inst;
          null !== $a && null !== r && Za(r, $a.memoizedState.deps)
            ? (l.memoizedState = Do(n, a, t, r))
            : ((Ua.flags |= e), (l.memoizedState = Do(1 | n, a, t, r)));
        }
        function jo(e, n) {
          Mo(8390656, 8, e, n);
        }
        function Uo(e, n) {
          Io(2048, 8, e, n);
        }
        function $o(e) {
          var n = io().memoizedState;
          return (
            (function (e) {
              Ua.flags |= 4;
              var n = Ua.updateQueue;
              if (null === n)
                ((n = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                  (Ua.updateQueue = n),
                  (n.events = [e]));
              else {
                var t = n.events;
                null === t ? (n.events = [e]) : t.push(e);
              }
            })({ ref: n, nextImpl: e }),
            function () {
              if (2 & ds) throw Error(o(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        }
        function Ho(e, n) {
          return Io(4, 2, e, n);
        }
        function Vo(e, n) {
          return Io(4, 4, e, n);
        }
        function Qo(e, n) {
          if ("function" == typeof n) {
            e = e();
            var t = n(e);
            return function () {
              "function" == typeof t ? t() : n(null);
            };
          }
          if (null != n)
            return (
              (e = e()),
              (n.current = e),
              function () {
                n.current = null;
              }
            );
        }
        function Wo(e, n, t) {
          ((t = null != t ? t.concat([e]) : null),
            Io(4, 4, Qo.bind(null, n, e), t));
        }
        function qo() {}
        function Xo(e, n) {
          var t = io();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== n && Za(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Ko(e, n) {
          var t = io();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          if (null !== n && Za(n, r[1])) return r[0];
          if (((r = e()), Wa)) {
            ye(!0);
            try {
              e();
            } finally {
              ye(!1);
            }
          }
          return ((t.memoizedState = [r, n]), r);
        }
        function Yo(e, n, t) {
          return void 0 === t || (1073741824 & ja && !(261930 & hs))
            ? (e.memoizedState = n)
            : ((e.memoizedState = t),
              (e = Ws()),
              (Ua.lanes |= e),
              (Es |= e),
              t);
        }
        function Go(e, n, t, r) {
          return Gt(t, n)
            ? t
            : null !== xa.current
              ? ((e = Yo(e, t, r)), Gt(e, n) || (Ti = !0), e)
              : 42 & ja && (!(1073741824 & ja) || 261930 & hs)
                ? ((e = Ws()), (Ua.lanes |= e), (Es |= e), n)
                : ((Ti = !0), (e.memoizedState = t));
        }
        function Zo(e, n, t, r, l) {
          var a = O.p;
          O.p = 0 !== a && 8 > a ? a : 8;
          var o,
            i,
            u,
            s = L.T,
            c = {};
          ((L.T = c), ci(e, !1, n, t));
          try {
            var f = l(),
              d = L.S;
            (null !== d && d(c, f),
              null !== f && "object" == typeof f && "function" == typeof f.then
                ? si(
                    e,
                    n,
                    ((o = r),
                    (i = []),
                    (u = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        i.push(e);
                      },
                    }),
                    f.then(
                      function () {
                        ((u.status = "fulfilled"), (u.value = o));
                        for (var e = 0; e < i.length; e++) (0, i[e])(o);
                      },
                      function (e) {
                        for (
                          u.status = "rejected", u.reason = e, e = 0;
                          e < i.length;
                          e++
                        )
                          (0, i[e])(void 0);
                      },
                    ),
                    u),
                    Qs(),
                  )
                : si(e, n, r, Qs()));
          } catch (t) {
            si(
              e,
              n,
              { then: function () {}, status: "rejected", reason: t },
              Qs(),
            );
          } finally {
            ((O.p = a),
              null !== s && null !== c.types && (s.types = c.types),
              (L.T = s));
          }
        }
        function Jo() {}
        function ei(e, n, t, r) {
          if (5 !== e.tag) throw Error(o(476));
          var l = ni(e).queue;
          Zo(
            e,
            l,
            n,
            F,
            null === t
              ? Jo
              : function () {
                  return (ti(e), t(r));
                },
          );
        }
        function ni(e) {
          var n = e.memoizedState;
          if (null !== n) return n;
          var t = {};
          return (
            ((n = {
              memoizedState: F,
              baseState: F,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fo,
                lastRenderedState: F,
              },
              next: null,
            }).next = {
              memoizedState: t,
              baseState: t,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fo,
                lastRenderedState: t,
              },
              next: null,
            }),
            (e.memoizedState = n),
            null !== (e = e.alternate) && (e.memoizedState = n),
            n
          );
        }
        function ti(e) {
          var n = ni(e);
          (null === n.next && (n = e.alternate.memoizedState),
            si(e, n.next.queue, {}, Qs()));
        }
        function ri() {
          return Bl(cd);
        }
        function li() {
          return io().memoizedState;
        }
        function ai() {
          return io().memoizedState;
        }
        function oi(e) {
          for (var n = e.return; null !== n;) {
            switch (n.tag) {
              case 24:
              case 3:
                var t = Qs(),
                  r = ya(n, (e = va(t)), t);
                return (
                  null !== r && (qs(r, 0, t), ba(r, n, t)),
                  (n = { cache: Ml() }),
                  void (e.payload = n)
                );
            }
            n = n.return;
          }
        }
        function ii(e, n, t) {
          var r = Qs();
          ((t = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            fi(e)
              ? di(n, t)
              : null !== (t = Br(e, n, t, r)) && (qs(t, 0, r), pi(t, n, r)));
        }
        function ui(e, n, t) {
          si(e, n, t, Qs());
        }
        function si(e, n, t, r) {
          var l = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (fi(e)) di(n, l);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = n.lastRenderedReducer)
            )
              try {
                var o = n.lastRenderedState,
                  i = a(o, t);
                if (((l.hasEagerState = !0), (l.eagerState = i), Gt(i, o)))
                  return (Pr(e, n, l, 0), null === ps && Nr(), !1);
              } catch (e) {}
            if (null !== (t = Br(e, n, l, r)))
              return (qs(t, 0, r), pi(t, n, r), !0);
          }
          return !1;
        }
        function ci(e, n, t, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Uc(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            fi(e))
          ) {
            if (n) throw Error(o(479));
          } else null !== (n = Br(e, t, r, 2)) && qs(n, 0, 2);
        }
        function fi(e) {
          var n = e.alternate;
          return e === Ua || (null !== n && n === Ua);
        }
        function di(e, n) {
          Qa = Va = !0;
          var t = e.pending;
          (null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n));
        }
        function pi(e, n, t) {
          if (4194048 & t) {
            var r = n.lanes;
            ((t |= r &= e.pendingLanes), (n.lanes = t), Le(e, t));
          }
        }
        var mi = {
          readContext: Bl,
          use: so,
          useCallback: Ga,
          useContext: Ga,
          useEffect: Ga,
          useImperativeHandle: Ga,
          useLayoutEffect: Ga,
          useInsertionEffect: Ga,
          useMemo: Ga,
          useReducer: Ga,
          useRef: Ga,
          useState: Ga,
          useDebugValue: Ga,
          useDeferredValue: Ga,
          useTransition: Ga,
          useSyncExternalStore: Ga,
          useId: Ga,
          useHostTransitionStatus: Ga,
          useFormState: Ga,
          useActionState: Ga,
          useOptimistic: Ga,
          useMemoCache: Ga,
          useCacheRefresh: Ga,
        };
        mi.useEffectEvent = Ga;
        var hi = {
            readContext: Bl,
            use: so,
            useCallback: function (e, n) {
              return ((oo().memoizedState = [e, void 0 === n ? null : n]), e);
            },
            useContext: Bl,
            useEffect: jo,
            useImperativeHandle: function (e, n, t) {
              ((t = null != t ? t.concat([e]) : null),
                Mo(4194308, 4, Qo.bind(null, n, e), t));
            },
            useLayoutEffect: function (e, n) {
              return Mo(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              Mo(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = oo();
              n = void 0 === n ? null : n;
              var r = e();
              if (Wa) {
                ye(!0);
                try {
                  e();
                } finally {
                  ye(!1);
                }
              }
              return ((t.memoizedState = [r, n]), r);
            },
            useReducer: function (e, n, t) {
              var r = oo();
              if (void 0 !== t) {
                var l = t(n);
                if (Wa) {
                  ye(!0);
                  try {
                    t(n);
                  } finally {
                    ye(!1);
                  }
                }
              } else l = n;
              return (
                (r.memoizedState = r.baseState = l),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: l,
                }),
                (r.queue = e),
                (e = e.dispatch = ii.bind(null, Ua, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (oo().memoizedState = e));
            },
            useState: function (e) {
              var n = (e = wo(e)).queue,
                t = ui.bind(null, Ua, n);
              return ((n.dispatch = t), [e.memoizedState, t]);
            },
            useDebugValue: qo,
            useDeferredValue: function (e, n) {
              return Yo(oo(), e, n);
            },
            useTransition: function () {
              var e = wo(!1);
              return (
                (e = Zo.bind(null, Ua, e.queue, !0, !1)),
                (oo().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, n, t) {
              var r = Ua,
                l = oo();
              if (cl) {
                if (void 0 === t) throw Error(o(407));
                t = t();
              } else {
                if (((t = n()), null === ps)) throw Error(o(349));
                127 & hs || vo(r, n, t);
              }
              l.memoizedState = t;
              var a = { value: t, getSnapshot: n };
              return (
                (l.queue = a),
                jo(bo.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Do(9, { destroy: void 0 }, yo.bind(null, r, a, t, n), null),
                t
              );
            },
            useId: function () {
              var e = oo(),
                n = ps.identifierPrefix;
              if (cl) {
                var t = tl;
                ((n =
                  "_" +
                  n +
                  "R_" +
                  (t = (nl & ~(1 << (32 - be(nl) - 1))).toString(32) + t)),
                  0 < (t = qa++) && (n += "H" + t.toString(32)),
                  (n += "_"));
              } else n = "_" + n + "r_" + (t = Ya++).toString(32) + "_";
              return (e.memoizedState = n);
            },
            useHostTransitionStatus: ri,
            useFormState: Bo,
            useActionState: Bo,
            useOptimistic: function (e) {
              var n = oo();
              n.memoizedState = n.baseState = e;
              var t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (n.queue = t),
                (n = ci.bind(null, Ua, !0, t)),
                (t.dispatch = n),
                [e, n]
              );
            },
            useMemoCache: co,
            useCacheRefresh: function () {
              return (oo().memoizedState = oi.bind(null, Ua));
            },
            useEffectEvent: function (e) {
              var n = oo(),
                t = { impl: e };
              return (
                (n.memoizedState = t),
                function () {
                  if (2 & ds) throw Error(o(440));
                  return t.impl.apply(void 0, arguments);
                }
              );
            },
          },
          gi = {
            readContext: Bl,
            use: so,
            useCallback: Xo,
            useContext: Bl,
            useEffect: Uo,
            useImperativeHandle: Wo,
            useInsertionEffect: Ho,
            useLayoutEffect: Vo,
            useMemo: Ko,
            useReducer: po,
            useRef: Ro,
            useState: function () {
              return po(fo);
            },
            useDebugValue: qo,
            useDeferredValue: function (e, n) {
              return Go(io(), $a.memoizedState, e, n);
            },
            useTransition: function () {
              var e = po(fo)[0],
                n = io().memoizedState;
              return ["boolean" == typeof e ? e : uo(e), n];
            },
            useSyncExternalStore: go,
            useId: li,
            useHostTransitionStatus: ri,
            useFormState: To,
            useActionState: To,
            useOptimistic: function (e, n) {
              return Eo(io(), 0, e, n);
            },
            useMemoCache: co,
            useCacheRefresh: ai,
          };
        gi.useEffectEvent = $o;
        var vi = {
          readContext: Bl,
          use: so,
          useCallback: Xo,
          useContext: Bl,
          useEffect: Uo,
          useImperativeHandle: Wo,
          useInsertionEffect: Ho,
          useLayoutEffect: Vo,
          useMemo: Ko,
          useReducer: ho,
          useRef: Ro,
          useState: function () {
            return ho(fo);
          },
          useDebugValue: qo,
          useDeferredValue: function (e, n) {
            var t = io();
            return null === $a ? Yo(t, e, n) : Go(t, $a.memoizedState, e, n);
          },
          useTransition: function () {
            var e = ho(fo)[0],
              n = io().memoizedState;
            return ["boolean" == typeof e ? e : uo(e), n];
          },
          useSyncExternalStore: go,
          useId: li,
          useHostTransitionStatus: ri,
          useFormState: Fo,
          useActionState: Fo,
          useOptimistic: function (e, n) {
            var t = io();
            return null !== $a
              ? Eo(t, 0, e, n)
              : ((t.baseState = e), [e, t.queue.dispatch]);
          },
          useMemoCache: co,
          useCacheRefresh: ai,
        };
        function yi(e, n, t, r) {
          ((t = null == (t = t(r, (n = e.memoizedState))) ? n : d({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t));
        }
        vi.useEffectEvent = $o;
        var bi = {
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = Qs(),
              l = va(r);
            ((l.payload = n),
              null != t && (l.callback = t),
              null !== (n = ya(e, l, r)) && (qs(n, 0, r), ba(n, e, r)));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = Qs(),
              l = va(r);
            ((l.tag = 1),
              (l.payload = n),
              null != t && (l.callback = t),
              null !== (n = ya(e, l, r)) && (qs(n, 0, r), ba(n, e, r)));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = Qs(),
              r = va(t);
            ((r.tag = 2),
              null != n && (r.callback = n),
              null !== (n = ya(e, r, t)) && (qs(n, 0, t), ba(n, e, t)));
          },
        };
        function ki(e, n, t, r, l, a, o) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !(
                n.prototype &&
                n.prototype.isPureReactComponent &&
                Zt(t, r) &&
                Zt(l, a)
              );
        }
        function Ai(e, n, t, r) {
          ((e = n.state),
            "function" == typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            "function" == typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && bi.enqueueReplaceState(n, n.state, null));
        }
        function wi(e, n) {
          var t = n;
          if ("ref" in n)
            for (var r in ((t = {}), n)) "ref" !== r && (t[r] = n[r]);
          if ((e = e.defaultProps))
            for (var l in (t === n && (t = d({}, t)), e))
              void 0 === t[l] && (t[l] = e[l]);
          return t;
        }
        function Ei(e) {
          Cr(e);
        }
        function Si(e) {
          console.error(e);
        }
        function Ci(e) {
          Cr(e);
        }
        function xi(e, n) {
          try {
            (0, e.onUncaughtError)(n.value, { componentStack: n.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function _i(e, n, t) {
          try {
            (0, e.onCaughtError)(t.value, {
              componentStack: t.stack,
              errorBoundary: 1 === n.tag ? n.stateNode : null,
            });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function zi(e, n, t) {
          return (
            ((t = va(t)).tag = 3),
            (t.payload = { element: null }),
            (t.callback = function () {
              xi(e, n);
            }),
            t
          );
        }
        function Ni(e) {
          return (((e = va(e)).tag = 3), e);
        }
        function Pi(e, n, t, r) {
          var l = t.type.getDerivedStateFromError;
          if ("function" == typeof l) {
            var a = r.value;
            ((e.payload = function () {
              return l(a);
            }),
              (e.callback = function () {
                _i(n, t, r);
              }));
          }
          var o = t.stateNode;
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (e.callback = function () {
              (_i(n, t, r),
                "function" != typeof l &&
                  (null === Fs ? (Fs = new Set([this])) : Fs.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Bi = Error(o(461)),
          Ti = !1;
        function Li(e, n, t, r) {
          n.child = null === e ? pa(n, null, t, r) : da(n, e.child, t, r);
        }
        function Oi(e, n, t, r, l) {
          t = t.render;
          var a = n.ref;
          if ("ref" in r) {
            var o = {};
            for (var i in r) "ref" !== i && (o[i] = r[i]);
          } else o = r;
          return (
            Pl(n),
            (r = Ja(e, n, t, o, a, l)),
            (i = ro()),
            null === e || Ti
              ? (cl && i && al(n), (n.flags |= 1), Li(e, n, r, l), n.child)
              : (lo(e, n, l), ru(e, n, l))
          );
        }
        function Fi(e, n, t, r, l) {
          if (null === e) {
            var a = t.type;
            return "function" != typeof a ||
              Mr(a) ||
              void 0 !== a.defaultProps ||
              null !== t.compare
              ? (((e = Ur(t.type, null, r, n, n.mode, l)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = a), Di(e, n, a, r, l));
          }
          if (((a = e.child), !lu(e, l))) {
            var o = a.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : Zt)(o, r) &&
              e.ref === n.ref
            )
              return ru(e, n, l);
          }
          return (
            (n.flags |= 1),
            ((e = Ir(a, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function Di(e, n, t, r, l) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Zt(a, r) && e.ref === n.ref) {
              if (((Ti = !1), (n.pendingProps = r = a), !lu(e, l)))
                return ((n.lanes = e.lanes), ru(e, n, l));
              131072 & e.flags && (Ti = !0);
            }
          }
          return Hi(e, n, t, r, l);
        }
        function Ri(e, n, t, r) {
          var l = r.children,
            a = null !== e ? e.memoizedState : null;
          if (
            (null === e &&
              null === n.stateNode &&
              (n.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            "hidden" === r.mode)
          ) {
            if (128 & n.flags) {
              if (((a = null !== a ? a.baseLanes | t : t), null !== e)) {
                for (r = n.child = e.child, l = 0; null !== r;)
                  ((l = l | r.lanes | r.childLanes), (r = r.sibling));
                r = l & ~a;
              } else ((r = 0), (n.child = null));
              return Ii(e, n, a, t, r);
            }
            if (!(536870912 & t))
              return (
                (r = n.lanes = 536870912),
                Ii(e, n, null !== a ? a.baseLanes | t : t, t, r)
              );
            ((n.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Xl(0, null !== a ? a.cachePool : null),
              null !== a ? za(n, a) : Na(),
              Fa(n));
          } else
            null !== a
              ? (Xl(0, a.cachePool), za(n, a), Da(), (n.memoizedState = null))
              : (null !== e && Xl(0, null), Na(), Da());
          return (Li(e, n, l, t), n.child);
        }
        function Mi(e, n) {
          return (
            (null !== e && 22 === e.tag) ||
              null !== n.stateNode ||
              (n.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            n.sibling
          );
        }
        function Ii(e, n, t, r, l) {
          var a = ql();
          return (
            (a = null === a ? null : { parent: Rl._currentValue, pool: a }),
            (n.memoizedState = { baseLanes: t, cachePool: a }),
            null !== e && Xl(0, null),
            Na(),
            Fa(n),
            null !== e && zl(e, n, r, !0),
            (n.childLanes = l),
            null
          );
        }
        function ji(e, n) {
          return (
            ((n = Zi({ mode: n.mode, children: n.children }, e.mode)).ref =
              e.ref),
            (e.child = n),
            (n.return = e),
            n
          );
        }
        function Ui(e, n, t) {
          return (
            da(n, e.child, null, t),
            ((e = ji(n, n.pendingProps)).flags |= 2),
            Ra(n),
            (n.memoizedState = null),
            e
          );
        }
        function $i(e, n) {
          var t = n.ref;
          if (null === t) null !== e && null !== e.ref && (n.flags |= 4194816);
          else {
            if ("function" != typeof t && "object" != typeof t)
              throw Error(o(284));
            (null !== e && e.ref === t) || (n.flags |= 4194816);
          }
        }
        function Hi(e, n, t, r, l) {
          return (
            Pl(n),
            (t = Ja(e, n, t, r, void 0, l)),
            (r = ro()),
            null === e || Ti
              ? (cl && r && al(n), (n.flags |= 1), Li(e, n, t, l), n.child)
              : (lo(e, n, l), ru(e, n, l))
          );
        }
        function Vi(e, n, t, r, l, a) {
          return (
            Pl(n),
            (n.updateQueue = null),
            (t = no(n, r, t, l)),
            eo(e),
            (r = ro()),
            null === e || Ti
              ? (cl && r && al(n), (n.flags |= 1), Li(e, n, t, a), n.child)
              : (lo(e, n, a), ru(e, n, a))
          );
        }
        function Qi(e, n, t, r, l) {
          if ((Pl(n), null === n.stateNode)) {
            var a = Fr,
              o = t.contextType;
            ("object" == typeof o && null !== o && (a = Bl(o)),
              (a = new t(r, a)),
              (n.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = bi),
              (n.stateNode = a),
              (a._reactInternals = n),
              ((a = n.stateNode).props = r),
              (a.state = n.memoizedState),
              (a.refs = {}),
              ha(n),
              (o = t.contextType),
              (a.context = "object" == typeof o && null !== o ? Bl(o) : Fr),
              (a.state = n.memoizedState),
              "function" == typeof (o = t.getDerivedStateFromProps) &&
                (yi(n, t, o, r), (a.state = n.memoizedState)),
              "function" == typeof t.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((o = a.state),
                "function" == typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                o !== a.state && bi.enqueueReplaceState(a, a.state, null),
                Ea(n, r, a, l),
                wa(),
                (a.state = n.memoizedState)),
              "function" == typeof a.componentDidMount && (n.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            a = n.stateNode;
            var i = n.memoizedProps,
              u = wi(t, i);
            a.props = u;
            var s = a.context,
              c = t.contextType;
            ((o = Fr), "object" == typeof c && null !== c && (o = Bl(c)));
            var f = t.getDerivedStateFromProps;
            ((c =
              "function" == typeof f ||
              "function" == typeof a.getSnapshotBeforeUpdate),
              (i = n.pendingProps !== i),
              c ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((i || s !== o) && Ai(n, a, r, o)),
              (ma = !1));
            var d = n.memoizedState;
            ((a.state = d),
              Ea(n, r, a, l),
              wa(),
              (s = n.memoizedState),
              i || d !== s || ma
                ? ("function" == typeof f &&
                    (yi(n, t, f, r), (s = n.memoizedState)),
                  (u = ma || ki(n, t, u, r, d, s, o))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (n.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = o),
                  (r = u))
                : ("function" == typeof a.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1)));
          } else {
            ((a = n.stateNode),
              ga(e, n),
              (c = wi(t, (o = n.memoizedProps))),
              (a.props = c),
              (f = n.pendingProps),
              (d = a.context),
              (s = t.contextType),
              (u = Fr),
              "object" == typeof s && null !== s && (u = Bl(s)),
              (s =
                "function" == typeof (i = t.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((o !== f || d !== u) && Ai(n, a, r, u)),
              (ma = !1),
              (d = n.memoizedState),
              (a.state = d),
              Ea(n, r, a, l),
              wa());
            var p = n.memoizedState;
            o !== f ||
            d !== p ||
            ma ||
            (null !== e && null !== e.dependencies && Nl(e.dependencies))
              ? ("function" == typeof i &&
                  (yi(n, t, i, r), (p = n.memoizedState)),
                (c =
                  ma ||
                  ki(n, t, c, r, d, p, u) ||
                  (null !== e && null !== e.dependencies && Nl(e.dependencies)))
                  ? (s ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, u),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" == typeof a.componentDidUpdate && (n.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = u),
                (r = c))
              : ("function" != typeof a.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            $i(e, n),
            (r = !!(128 & n.flags)),
            a || r
              ? ((a = n.stateNode),
                (t =
                  r && "function" != typeof t.getDerivedStateFromError
                    ? null
                    : a.render()),
                (n.flags |= 1),
                null !== e && r
                  ? ((n.child = da(n, e.child, null, l)),
                    (n.child = da(n, null, t, l)))
                  : Li(e, n, t, l),
                (n.memoizedState = a.state),
                (e = n.child))
              : (e = ru(e, n, l)),
            e
          );
        }
        function Wi(e, n, t, r) {
          return (yl(), (n.flags |= 256), Li(e, n, t, r), n.child);
        }
        var qi = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Xi(e) {
          return { baseLanes: e, cachePool: Kl() };
        }
        function Ki(e, n, t) {
          return ((e = null !== e ? e.childLanes & ~t : 0), n && (e |= xs), e);
        }
        function Yi(e, n, t) {
          var r,
            l = n.pendingProps,
            a = !1,
            i = !!(128 & n.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) && !!(2 & Ma.current)),
            r && ((a = !0), (n.flags &= -129)),
            (r = !!(32 & n.flags)),
            (n.flags &= -33),
            null === e)
          ) {
            if (cl) {
              if (
                (a ? La(n) : Da(),
                (e = sl)
                  ? null !==
                      (e =
                        null !== (e = Pf(e, dl)) && "&" !== e.data
                          ? e
                          : null) &&
                    ((n.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        null !== el ? { id: nl, overflow: tl } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((t = Vr(e)).return = n),
                    (n.child = t),
                    (ul = n),
                    (sl = null))
                  : (e = null),
                null === e)
              )
                throw ml(n);
              return (Tf(e) ? (n.lanes = 32) : (n.lanes = 536870912), null);
            }
            var u = l.children;
            return (
              (l = l.fallback),
              a
                ? (Da(),
                  (u = Zi({ mode: "hidden", children: u }, (a = n.mode))),
                  (l = $r(l, a, t, null)),
                  (u.return = n),
                  (l.return = n),
                  (u.sibling = l),
                  (n.child = u),
                  ((l = n.child).memoizedState = Xi(t)),
                  (l.childLanes = Ki(e, r, t)),
                  (n.memoizedState = qi),
                  Mi(null, l))
                : (La(n), Gi(n, u))
            );
          }
          var s = e.memoizedState;
          if (null !== s && null !== (u = s.dehydrated)) {
            if (i)
              256 & n.flags
                ? (La(n), (n.flags &= -257), (n = Ji(e, n, t)))
                : null !== n.memoizedState
                  ? (Da(), (n.child = e.child), (n.flags |= 128), (n = null))
                  : (Da(),
                    (u = l.fallback),
                    (a = n.mode),
                    (l = Zi({ mode: "visible", children: l.children }, a)),
                    ((u = $r(u, a, t, null)).flags |= 2),
                    (l.return = n),
                    (u.return = n),
                    (l.sibling = u),
                    (n.child = l),
                    da(n, e.child, null, t),
                    ((l = n.child).memoizedState = Xi(t)),
                    (l.childLanes = Ki(e, r, t)),
                    (n.memoizedState = qi),
                    (n = Mi(null, l)));
            else if ((La(n), Tf(u))) {
              if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
              ((r = c),
                ((l = Error(o(419))).stack = ""),
                (l.digest = r),
                kl({ value: l, source: null, stack: null }),
                (n = Ji(e, n, t)));
            } else if (
              (Ti || zl(e, n, t, !1), (r = 0 !== (t & e.childLanes)), Ti || r)
            ) {
              if (
                null !== (r = ps) &&
                0 !== (l = Oe(r, t)) &&
                l !== s.retryLane
              )
                throw ((s.retryLane = l), Tr(e, l), qs(r, 0, l), Bi);
              (Bf(u) || ac(), (n = Ji(e, n, t)));
            } else
              Bf(u)
                ? ((n.flags |= 192), (n.child = e.child), (n = null))
                : ((e = s.treeContext),
                  (sl = Lf(u.nextSibling)),
                  (ul = n),
                  (cl = !0),
                  (fl = null),
                  (dl = !1),
                  null !== e && il(n, e),
                  ((n = Gi(n, l.children)).flags |= 4096));
            return n;
          }
          return a
            ? (Da(),
              (u = l.fallback),
              (a = n.mode),
              (c = (s = e.child).sibling),
              ((l = Ir(s, {
                mode: "hidden",
                children: l.children,
              })).subtreeFlags = 65011712 & s.subtreeFlags),
              null !== c
                ? (u = Ir(c, u))
                : ((u = $r(u, a, t, null)).flags |= 2),
              (u.return = n),
              (l.return = n),
              (l.sibling = u),
              (n.child = l),
              Mi(null, l),
              (l = n.child),
              null === (u = e.child.memoizedState)
                ? (u = Xi(t))
                : (null !== (a = u.cachePool)
                    ? ((s = Rl._currentValue),
                      (a = a.parent !== s ? { parent: s, pool: s } : a))
                    : (a = Kl()),
                  (u = { baseLanes: u.baseLanes | t, cachePool: a })),
              (l.memoizedState = u),
              (l.childLanes = Ki(e, r, t)),
              (n.memoizedState = qi),
              Mi(e.child, l))
            : (La(n),
              (e = (t = e.child).sibling),
              ((t = Ir(t, { mode: "visible", children: l.children })).return =
                n),
              (t.sibling = null),
              null !== e &&
                (null === (r = n.deletions)
                  ? ((n.deletions = [e]), (n.flags |= 16))
                  : r.push(e)),
              (n.child = t),
              (n.memoizedState = null),
              t);
        }
        function Gi(e, n) {
          return (
            ((n = Zi({ mode: "visible", children: n }, e.mode)).return = e),
            (e.child = n)
          );
        }
        function Zi(e, n) {
          return (((e = Rr(22, e, null, n)).lanes = 0), e);
        }
        function Ji(e, n, t) {
          return (
            da(n, e.child, null, t),
            ((e = Gi(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function eu(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          (null !== r && (r.lanes |= n), xl(e.return, n, t));
        }
        function nu(e, n, t, r, l, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: l,
                treeForkCount: a,
              })
            : ((o.isBackwards = n),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = t),
              (o.tailMode = l),
              (o.treeForkCount = a));
        }
        function tu(e, n, t) {
          var r = n.pendingProps,
            l = r.revealOrder,
            a = r.tail;
          r = r.children;
          var o = Ma.current,
            i = !!(2 & o);
          if (
            (i ? ((o = (1 & o) | 2), (n.flags |= 128)) : (o &= 1),
            j(Ma, o),
            Li(e, n, r, t),
            (r = cl ? Gr : 0),
            !i && null !== e && 128 & e.flags)
          )
            e: for (e = n.child; null !== e;) {
              if (13 === e.tag) null !== e.memoizedState && eu(e, t, n);
              else if (19 === e.tag) eu(e, t, n);
              else if (null !== e.child) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === n) break e;
              for (; null === e.sibling;) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          switch (l) {
            case "forwards":
              for (t = n.child, l = null; null !== t;)
                (null !== (e = t.alternate) && null === Ia(e) && (l = t),
                  (t = t.sibling));
              (null === (t = l)
                ? ((l = n.child), (n.child = null))
                : ((l = t.sibling), (t.sibling = null)),
                nu(n, !1, l, t, a, r));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (t = null, l = n.child, n.child = null; null !== l;) {
                if (null !== (e = l.alternate) && null === Ia(e)) {
                  n.child = l;
                  break;
                }
                ((e = l.sibling), (l.sibling = t), (t = l), (l = e));
              }
              nu(n, !0, t, null, a, r);
              break;
            case "together":
              nu(n, !1, null, null, void 0, r);
              break;
            default:
              n.memoizedState = null;
          }
          return n.child;
        }
        function ru(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Es |= n.lanes),
            0 === (t & n.childLanes))
          ) {
            if (null === e) return null;
            if ((zl(e, n, t, !1), 0 === (t & n.childLanes))) return null;
          }
          if (null !== e && n.child !== e.child) throw Error(o(153));
          if (null !== n.child) {
            for (
              t = Ir((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;
            )
              ((e = e.sibling),
                ((t = t.sibling = Ir(e, e.pendingProps)).return = n));
            t.sibling = null;
          }
          return n.child;
        }
        function lu(e, n) {
          return (
            0 !== (e.lanes & n) || !(null === (e = e.dependencies) || !Nl(e))
          );
        }
        function au(e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps) Ti = !0;
            else {
              if (!(lu(e, t) || 128 & n.flags))
                return (
                  (Ti = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        (q(n, n.stateNode.containerInfo),
                          Sl(0, Rl, e.memoizedState.cache),
                          yl());
                        break;
                      case 27:
                      case 5:
                        K(n);
                        break;
                      case 4:
                        q(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        Sl(0, n.type, n.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== n.memoizedState)
                          return ((n.flags |= 128), Oa(n), null);
                        break;
                      case 13:
                        var r = n.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (La(n), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                              ? Yi(e, n, t)
                              : (La(n),
                                null !== (e = ru(e, n, t)) ? e.sibling : null);
                        La(n);
                        break;
                      case 19:
                        var l = !!(128 & e.flags);
                        if (
                          ((r = 0 !== (t & n.childLanes)) ||
                            (zl(e, n, t, !1), (r = 0 !== (t & n.childLanes))),
                          l)
                        ) {
                          if (r) return tu(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (l = n.memoizedState) &&
                            ((l.rendering = null),
                            (l.tail = null),
                            (l.lastEffect = null)),
                          j(Ma, Ma.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((n.lanes = 0), Ri(e, n, t, n.pendingProps));
                      case 24:
                        Sl(0, Rl, e.memoizedState.cache);
                    }
                    return ru(e, n, t);
                  })(e, n, t)
                );
              Ti = !!(131072 & e.flags);
            }
          else ((Ti = !1), cl && 1048576 & n.flags && ll(n, Gr, n.index));
          switch (((n.lanes = 0), n.tag)) {
            case 16:
              e: {
                var r = n.pendingProps;
                if (
                  ((e = ta(n.elementType)),
                  (n.type = e),
                  "function" != typeof e)
                ) {
                  if (null != e) {
                    var l = e.$$typeof;
                    if (l === A) {
                      ((n.tag = 11), (n = Oi(null, n, e, r, t)));
                      break e;
                    }
                    if (l === S) {
                      ((n.tag = 14), (n = Fi(null, n, e, r, t)));
                      break e;
                    }
                  }
                  throw ((n = B(e) || e), Error(o(306, n, "")));
                }
                Mr(e)
                  ? ((r = wi(e, r)), (n.tag = 1), (n = Qi(null, n, e, r, t)))
                  : ((n.tag = 0), (n = Hi(null, n, e, r, t)));
              }
              return n;
            case 0:
              return Hi(e, n, n.type, n.pendingProps, t);
            case 1:
              return Qi(e, n, (r = n.type), (l = wi(r, n.pendingProps)), t);
            case 3:
              e: {
                if ((q(n, n.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                r = n.pendingProps;
                var a = n.memoizedState;
                ((l = a.element), ga(e, n), Ea(n, r, null, t));
                var i = n.memoizedState;
                if (
                  ((r = i.cache),
                  Sl(0, Rl, r),
                  r !== a.cache && _l(n, [Rl], t, !0),
                  wa(),
                  (r = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: r, isDehydrated: !1, cache: i.cache }),
                    (n.updateQueue.baseState = a),
                    (n.memoizedState = a),
                    256 & n.flags)
                  ) {
                    n = Wi(e, n, r, t);
                    break e;
                  }
                  if (r !== l) {
                    (kl((l = qr(Error(o(424)), n))), (n = Wi(e, n, r, t)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = n.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      sl = Lf(e.firstChild),
                      ul = n,
                      cl = !0,
                      fl = null,
                      dl = !0,
                      t = pa(n, null, r, t),
                      n.child = t;
                    t;
                  )
                    ((t.flags = (-3 & t.flags) | 4096), (t = t.sibling));
                } else {
                  if ((yl(), r === l)) {
                    n = ru(e, n, t);
                    break e;
                  }
                  Li(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 26:
              return (
                $i(e, n),
                null === e
                  ? (t = Qf(n.type, null, n.pendingProps, null))
                    ? (n.memoizedState = t)
                    : cl ||
                      ((t = n.type),
                      (e = n.pendingProps),
                      ((r = gf(Q.current).createElement(t))[je] = n),
                      (r[Ue] = e),
                      df(r, t, e),
                      Je(r),
                      (n.stateNode = r))
                  : (n.memoizedState = Qf(
                      n.type,
                      e.memoizedProps,
                      n.pendingProps,
                      e.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                K(n),
                null === e &&
                  cl &&
                  ((r = n.stateNode = Rf(n.type, n.pendingProps, Q.current)),
                  (ul = n),
                  (dl = !0),
                  (l = sl),
                  xf(n.type) ? ((Of = l), (sl = Lf(r.firstChild))) : (sl = l)),
                Li(e, n, n.pendingProps.children, t),
                $i(e, n),
                null === e && (n.flags |= 4194304),
                n.child
              );
            case 5:
              return (
                null === e &&
                  cl &&
                  ((l = r = sl) &&
                    (null !==
                    (r = (function (e, n, t, r) {
                      for (; 1 === e.nodeType;) {
                        var l = t;
                        if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[qe])
                            switch (n) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== l.rel ||
                                  e.getAttribute("href") !==
                                    (null == l.href || "" === l.href
                                      ? null
                                      : l.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == l.crossOrigin
                                      ? null
                                      : l.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == l.title ? null : l.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == l.src ? null : l.src) ||
                                    e.getAttribute("type") !==
                                      (null == l.type ? null : l.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == l.crossOrigin
                                        ? null
                                        : l.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== n || "hidden" !== e.type) return e;
                          var a = null == l.name ? null : "" + l.name;
                          if (
                            "hidden" === l.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = Lf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, n.type, n.pendingProps, dl))
                      ? ((n.stateNode = r),
                        (ul = n),
                        (sl = Lf(r.firstChild)),
                        (dl = !1),
                        (l = !0))
                      : (l = !1)),
                  l || ml(n)),
                K(n),
                (l = n.type),
                (a = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = a.children),
                bf(l, a)
                  ? (r = null)
                  : null !== i && bf(l, i) && (n.flags |= 32),
                null !== n.memoizedState &&
                  ((l = Ja(e, n, to, null, null, t)), (cd._currentValue = l)),
                $i(e, n),
                Li(e, n, r, t),
                n.child
              );
            case 6:
              return (
                null === e &&
                  cl &&
                  ((e = t = sl) &&
                    (null !==
                    (t = (function (e, n, t) {
                      if ("" === n) return null;
                      for (; 3 !== e.nodeType;) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !t
                        )
                          return null;
                        if (null === (e = Lf(e.nextSibling))) return null;
                      }
                      return e;
                    })(t, n.pendingProps, dl))
                      ? ((n.stateNode = t), (ul = n), (sl = null), (e = !0))
                      : (e = !1)),
                  e || ml(n)),
                null
              );
            case 13:
              return Yi(e, n, t);
            case 4:
              return (
                q(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = da(n, null, r, t)) : Li(e, n, r, t),
                n.child
              );
            case 11:
              return Oi(e, n, n.type, n.pendingProps, t);
            case 7:
              return (Li(e, n, n.pendingProps, t), n.child);
            case 8:
            case 12:
              return (Li(e, n, n.pendingProps.children, t), n.child);
            case 10:
              return (
                (r = n.pendingProps),
                Sl(0, n.type, r.value),
                Li(e, n, r.children, t),
                n.child
              );
            case 9:
              return (
                (l = n.type._context),
                (r = n.pendingProps.children),
                Pl(n),
                (r = r((l = Bl(l)))),
                (n.flags |= 1),
                Li(e, n, r, t),
                n.child
              );
            case 14:
              return Fi(e, n, n.type, n.pendingProps, t);
            case 15:
              return Di(e, n, n.type, n.pendingProps, t);
            case 19:
              return tu(e, n, t);
            case 31:
              return (function (e, n, t) {
                var r = n.pendingProps,
                  l = !!(128 & n.flags);
                if (((n.flags &= -129), null === e)) {
                  if (cl) {
                    if ("hidden" === r.mode)
                      return (
                        (e = ji(n, r)),
                        (n.lanes = 536870912),
                        Mi(null, e)
                      );
                    if (
                      (Oa(n),
                      (e = sl)
                        ? null !==
                            (e =
                              null !== (e = Pf(e, dl)) && "&" === e.data
                                ? e
                                : null) &&
                          ((n.memoizedState = {
                            dehydrated: e,
                            treeContext:
                              null !== el ? { id: nl, overflow: tl } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((t = Vr(e)).return = n),
                          (n.child = t),
                          (ul = n),
                          (sl = null))
                        : (e = null),
                      null === e)
                    )
                      throw ml(n);
                    return ((n.lanes = 536870912), null);
                  }
                  return ji(n, r);
                }
                var a = e.memoizedState;
                if (null !== a) {
                  var i = a.dehydrated;
                  if ((Oa(n), l))
                    if (256 & n.flags) ((n.flags &= -257), (n = Ui(e, n, t)));
                    else {
                      if (null === n.memoizedState) throw Error(o(558));
                      ((n.child = e.child), (n.flags |= 128), (n = null));
                    }
                  else if (
                    (Ti || zl(e, n, t, !1),
                    (l = 0 !== (t & e.childLanes)),
                    Ti || l)
                  ) {
                    if (
                      null !== (r = ps) &&
                      0 !== (i = Oe(r, t)) &&
                      i !== a.retryLane
                    )
                      throw ((a.retryLane = i), Tr(e, i), qs(r, 0, i), Bi);
                    (ac(), (n = Ui(e, n, t)));
                  } else
                    ((e = a.treeContext),
                      (sl = Lf(i.nextSibling)),
                      (ul = n),
                      (cl = !0),
                      (fl = null),
                      (dl = !1),
                      null !== e && il(n, e),
                      ((n = ji(n, r)).flags |= 4096));
                  return n;
                }
                return (
                  ((e = Ir(e.child, {
                    mode: r.mode,
                    children: r.children,
                  })).ref = n.ref),
                  (n.child = e),
                  (e.return = n),
                  e
                );
              })(e, n, t);
            case 22:
              return Ri(e, n, t, n.pendingProps);
            case 24:
              return (
                Pl(n),
                (r = Bl(Rl)),
                null === e
                  ? (null === (l = ql()) &&
                      ((l = ps),
                      (a = Ml()),
                      (l.pooledCache = a),
                      a.refCount++,
                      null !== a && (l.pooledCacheLanes |= t),
                      (l = a)),
                    (n.memoizedState = { parent: r, cache: l }),
                    ha(n),
                    Sl(0, Rl, l))
                  : (0 !== (e.lanes & t) &&
                      (ga(e, n), Ea(n, null, null, t), wa()),
                    (l = e.memoizedState),
                    (a = n.memoizedState),
                    l.parent !== r
                      ? ((l = { parent: r, cache: r }),
                        (n.memoizedState = l),
                        0 === n.lanes &&
                          (n.memoizedState = n.updateQueue.baseState = l),
                        Sl(0, Rl, r))
                      : ((r = a.cache),
                        Sl(0, Rl, r),
                        r !== l.cache && _l(n, [Rl], t, !0))),
                Li(e, n, n.pendingProps.children, t),
                n.child
              );
            case 29:
              throw n.pendingProps;
          }
          throw Error(o(156, n.tag));
        }
        function ou(e) {
          e.flags |= 4;
        }
        function iu(e, n, t, r, l) {
          if (((n = !!(32 & e.mode)) && (n = !1), n)) {
            if (((e.flags |= 16777216), (335544128 & l) === l))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!tc()) throw ((ra = Jl), Gl);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function uu(e, n) {
          if ("stylesheet" !== n.type || 4 & n.state.loading)
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !ld(n))) {
            if (!tc()) throw ((ra = Jl), Gl);
            e.flags |= 8192;
          }
        }
        function su(e, n) {
          (null !== n && (e.flags |= 4),
            16384 & e.flags &&
              ((n = 22 !== e.tag ? Ne() : 536870912),
              (e.lanes |= n),
              (_s |= n)));
        }
        function cu(e, n) {
          if (!cl)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n;)
                  (null !== n.alternate && (t = n), (n = n.sibling));
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var r = null; null !== t;)
                  (null !== t.alternate && (r = t), (t = t.sibling));
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function fu(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var l = e.child; null !== l;)
              ((t |= l.lanes | l.childLanes),
                (r |= 65011712 & l.subtreeFlags),
                (r |= 65011712 & l.flags),
                (l.return = e),
                (l = l.sibling));
          else
            for (l = e.child; null !== l;)
              ((t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = t), n);
        }
        function du(e, n, t) {
          var r = n.pendingProps;
          switch ((ol(n), n.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (fu(n), null);
            case 3:
              return (
                (t = n.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                n.memoizedState.cache !== r && (n.flags |= 2048),
                Cl(Rl),
                X(),
                t.pendingContext &&
                  ((t.context = t.pendingContext), (t.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (vl(n)
                    ? ou(n)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & n.flags)) ||
                      ((n.flags |= 1024), bl())),
                fu(n),
                null
              );
            case 26:
              var l = n.type,
                a = n.memoizedState;
              return (
                null === e
                  ? (ou(n),
                    null !== a ? (fu(n), uu(n, a)) : (fu(n), iu(n, l, 0, 0, t)))
                  : a
                    ? a !== e.memoizedState
                      ? (ou(n), fu(n), uu(n, a))
                      : (fu(n), (n.flags &= -16777217))
                    : ((e = e.memoizedProps) !== r && ou(n),
                      fu(n),
                      iu(n, l, 0, 0, t)),
                null
              );
            case 27:
              if (
                (Y(n),
                (t = Q.current),
                (l = n.type),
                null !== e && null != n.stateNode)
              )
                e.memoizedProps !== r && ou(n);
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(o(166));
                  return (fu(n), null);
                }
                ((e = H.current),
                  vl(n)
                    ? hl(n)
                    : ((e = Rf(l, r, t)), (n.stateNode = e), ou(n)));
              }
              return (fu(n), null);
            case 5:
              if ((Y(n), (l = n.type), null !== e && null != n.stateNode))
                e.memoizedProps !== r && ou(n);
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(o(166));
                  return (fu(n), null);
                }
                if (((a = H.current), vl(n))) hl(n);
                else {
                  var i = gf(Q.current);
                  switch (a) {
                    case 1:
                      a = i.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case 2:
                      a = i.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        l,
                      );
                      break;
                    default:
                      switch (l) {
                        case "svg":
                          a = i.createElementNS(
                            "http://www.w3.org/2000/svg",
                            l,
                          );
                          break;
                        case "math":
                          a = i.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            l,
                          );
                          break;
                        case "script":
                          (((a = i.createElement("div")).innerHTML =
                            "<script><\/script>"),
                            (a = a.removeChild(a.firstChild)));
                          break;
                        case "select":
                          ((a =
                            "string" == typeof r.is
                              ? i.createElement("select", { is: r.is })
                              : i.createElement("select")),
                            r.multiple
                              ? (a.multiple = !0)
                              : r.size && (a.size = r.size));
                          break;
                        default:
                          a =
                            "string" == typeof r.is
                              ? i.createElement(l, { is: r.is })
                              : i.createElement(l);
                      }
                  }
                  ((a[je] = n), (a[Ue] = r));
                  e: for (i = n.child; null !== i;) {
                    if (5 === i.tag || 6 === i.tag) a.appendChild(i.stateNode);
                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                      ((i.child.return = i), (i = i.child));
                      continue;
                    }
                    if (i === n) break e;
                    for (; null === i.sibling;) {
                      if (null === i.return || i.return === n) break e;
                      i = i.return;
                    }
                    ((i.sibling.return = i.return), (i = i.sibling));
                  }
                  n.stateNode = a;
                  e: switch ((df(a, l, r), l)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                  r && ou(n);
                }
              }
              return (
                fu(n),
                iu(n, n.type, null === e || e.memoizedProps, n.pendingProps, t),
                null
              );
            case 6:
              if (e && null != n.stateNode) e.memoizedProps !== r && ou(n);
              else {
                if ("string" != typeof r && null === n.stateNode)
                  throw Error(o(166));
                if (((e = Q.current), vl(n))) {
                  if (
                    ((e = n.stateNode),
                    (t = n.memoizedProps),
                    (r = null),
                    null !== (l = ul))
                  )
                    switch (l.tag) {
                      case 27:
                      case 5:
                        r = l.memoizedProps;
                    }
                  ((e[je] = n),
                    (e = !!(
                      e.nodeValue === t ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      sf(e.nodeValue, t)
                    )) || ml(n, !0));
                } else
                  (((e = gf(e).createTextNode(r))[je] = n), (n.stateNode = e));
              }
              return (fu(n), null);
            case 31:
              if (
                ((t = n.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((r = vl(n)), null !== t)) {
                  if (null === e) {
                    if (!r) throw Error(o(318));
                    if (
                      !(e =
                        null !== (e = n.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(o(557));
                    e[je] = n;
                  } else
                    (yl(),
                      !(128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4));
                  (fu(n), (e = !1));
                } else
                  ((t = bl()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = t),
                    (e = !0));
                if (!e) return 256 & n.flags ? (Ra(n), n) : (Ra(n), null);
                if (128 & n.flags) throw Error(o(558));
              }
              return (fu(n), null);
            case 13:
              if (
                ((r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((l = vl(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = n.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[je] = n;
                  } else
                    (yl(),
                      !(128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4));
                  (fu(n), (l = !1));
                } else
                  ((l = bl()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = l),
                    (l = !0));
                if (!l) return 256 & n.flags ? (Ra(n), n) : (Ra(n), null);
              }
              return (
                Ra(n),
                128 & n.flags
                  ? ((n.lanes = t), n)
                  : ((t = null !== r),
                    (e = null !== e && null !== e.memoizedState),
                    t &&
                      ((l = null),
                      null !== (r = n.child).alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (l = r.alternate.memoizedState.cachePool.pool),
                      (a = null),
                      null !== r.memoizedState &&
                        null !== r.memoizedState.cachePool &&
                        (a = r.memoizedState.cachePool.pool),
                      a !== l && (r.flags |= 2048)),
                    t !== e && t && (n.child.flags |= 8192),
                    su(n, n.updateQueue),
                    fu(n),
                    null)
              );
            case 4:
              return (
                X(),
                null === e && Zc(n.stateNode.containerInfo),
                fu(n),
                null
              );
            case 10:
              return (Cl(n.type), fu(n), null);
            case 19:
              if ((I(Ma), null === (r = n.memoizedState))) return (fu(n), null);
              if (((l = !!(128 & n.flags)), null === (a = r.rendering)))
                if (l) cu(r, !1);
                else {
                  if (0 !== ws || (null !== e && 128 & e.flags))
                    for (e = n.child; null !== e;) {
                      if (null !== (a = Ia(e))) {
                        for (
                          n.flags |= 128,
                            cu(r, !1),
                            e = a.updateQueue,
                            n.updateQueue = e,
                            su(n, e),
                            n.subtreeFlags = 0,
                            e = t,
                            t = n.child;
                          null !== t;
                        )
                          (jr(t, e), (t = t.sibling));
                        return (
                          j(Ma, (1 & Ma.current) | 2),
                          cl && rl(n, r.treeForkCount),
                          n.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ie() > Ls &&
                    ((n.flags |= 128),
                    (l = !0),
                    cu(r, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!l)
                  if (null !== (e = Ia(a))) {
                    if (
                      ((n.flags |= 128),
                      (l = !0),
                      (e = e.updateQueue),
                      (n.updateQueue = e),
                      su(n, e),
                      cu(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !a.alternate &&
                        !cl)
                    )
                      return (fu(n), null);
                  } else
                    2 * ie() - r.renderingStartTime > Ls &&
                      536870912 !== t &&
                      ((n.flags |= 128),
                      (l = !0),
                      cu(r, !1),
                      (n.lanes = 4194304));
                r.isBackwards
                  ? ((a.sibling = n.child), (n.child = a))
                  : (null !== (e = r.last) ? (e.sibling = a) : (n.child = a),
                    (r.last = a));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = ie()),
                  (e.sibling = null),
                  (t = Ma.current),
                  j(Ma, l ? (1 & t) | 2 : 1 & t),
                  cl && rl(n, r.treeForkCount),
                  e)
                : (fu(n), null);
            case 22:
            case 23:
              return (
                Ra(n),
                Pa(),
                (r = null !== n.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (n.flags |= 8192)
                  : r && (n.flags |= 8192),
                r
                  ? !!(536870912 & t) &&
                    !(128 & n.flags) &&
                    (fu(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : fu(n),
                null !== (t = n.updateQueue) && su(n, t.retryQueue),
                (t = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (t = e.memoizedState.cachePool.pool),
                (r = null),
                null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool &&
                  (r = n.memoizedState.cachePool.pool),
                r !== t && (n.flags |= 2048),
                null !== e && I(Wl),
                null
              );
            case 24:
              return (
                (t = null),
                null !== e && (t = e.memoizedState.cache),
                n.memoizedState.cache !== t && (n.flags |= 2048),
                Cl(Rl),
                fu(n),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(o(156, n.tag));
        }
        function pu(e, n) {
          switch ((ol(n), n.tag)) {
            case 1:
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 3:
              return (
                Cl(Rl),
                X(),
                65536 & (e = n.flags) && !(128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (Y(n), null);
            case 31:
              if (null !== n.memoizedState) {
                if ((Ra(n), null === n.alternate)) throw Error(o(340));
                yl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 13:
              if (
                (Ra(n), null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(o(340));
                yl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return (I(Ma), null);
            case 4:
              return (X(), null);
            case 10:
              return (Cl(n.type), null);
            case 22:
            case 23:
              return (
                Ra(n),
                Pa(),
                null !== e && I(Wl),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 24:
              return (Cl(Rl), null);
            default:
              return null;
          }
        }
        function mu(e, n) {
          switch ((ol(n), n.tag)) {
            case 3:
              (Cl(Rl), X());
              break;
            case 26:
            case 27:
            case 5:
              Y(n);
              break;
            case 4:
              X();
              break;
            case 31:
              null !== n.memoizedState && Ra(n);
              break;
            case 13:
              Ra(n);
              break;
            case 19:
              I(Ma);
              break;
            case 10:
              Cl(n.type);
              break;
            case 22:
            case 23:
              (Ra(n), Pa(), null !== e && I(Wl));
              break;
            case 24:
              Cl(Rl);
          }
        }
        function hu(e, n) {
          try {
            var t = n.updateQueue,
              r = null !== t ? t.lastEffect : null;
            if (null !== r) {
              var l = r.next;
              t = l;
              do {
                if ((t.tag & e) === e) {
                  r = void 0;
                  var a = t.create,
                    o = t.inst;
                  ((r = a()), (o.destroy = r));
                }
                t = t.next;
              } while (t !== l);
            }
          } catch (e) {
            wc(n, n.return, e);
          }
        }
        function gu(e, n, t) {
          try {
            var r = n.updateQueue,
              l = null !== r ? r.lastEffect : null;
            if (null !== l) {
              var a = l.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    i = o.destroy;
                  if (void 0 !== i) {
                    ((o.destroy = void 0), (l = n));
                    var u = t,
                      s = i;
                    try {
                      s();
                    } catch (e) {
                      wc(l, u, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            wc(n, n.return, e);
          }
        }
        function vu(e) {
          var n = e.updateQueue;
          if (null !== n) {
            var t = e.stateNode;
            try {
              Ca(n, t);
            } catch (n) {
              wc(e, e.return, n);
            }
          }
        }
        function yu(e, n, t) {
          ((t.props = wi(e.type, e.memoizedProps)),
            (t.state = e.memoizedState));
          try {
            t.componentWillUnmount();
          } catch (t) {
            wc(e, n, t);
          }
        }
        function bu(e, n) {
          try {
            var t = e.ref;
            if (null !== t) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" == typeof t ? (e.refCleanup = t(r)) : (t.current = r);
            }
          } catch (t) {
            wc(e, n, t);
          }
        }
        function ku(e, n) {
          var t = e.ref,
            r = e.refCleanup;
          if (null !== t)
            if ("function" == typeof r)
              try {
                r();
              } catch (t) {
                wc(e, n, t);
              } finally {
                ((e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                wc(e, n, t);
              }
            else t.current = null;
        }
        function Au(e) {
          var n = e.type,
            t = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t.autoFocus && r.focus();
                break e;
              case "img":
                t.src ? (r.src = t.src) : t.srcSet && (r.srcset = t.srcSet);
            }
          } catch (n) {
            wc(e, e.return, n);
          }
        }
        function wu(e, n, t) {
          try {
            var r = e.stateNode;
            (!(function (e, n, t, r) {
              switch (n) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var l = null,
                    a = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (m in t) {
                    var d = t[m];
                    if (t.hasOwnProperty(m) && null != d)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = d;
                        default:
                          r.hasOwnProperty(m) || cf(e, n, m, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var m = r[p];
                    if (
                      ((d = t[p]),
                      r.hasOwnProperty(p) && (null != m || null != d))
                    )
                      switch (p) {
                        case "type":
                          a = m;
                          break;
                        case "name":
                          l = m;
                          break;
                        case "checked":
                          c = m;
                          break;
                        case "defaultChecked":
                          f = m;
                          break;
                        case "value":
                          i = m;
                          break;
                        case "defaultValue":
                          u = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(o(137, n));
                          break;
                        default:
                          m !== d && cf(e, n, p, m, r, d);
                      }
                  }
                  return void yn(e, i, u, s, c, f, a, l);
                case "select":
                  for (a in ((m = i = u = p = null), t))
                    if (((s = t[a]), t.hasOwnProperty(a) && null != s))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          m = s;
                        default:
                          r.hasOwnProperty(a) || cf(e, n, a, null, r, s);
                      }
                  for (l in r)
                    if (
                      ((a = r[l]),
                      (s = t[l]),
                      r.hasOwnProperty(l) && (null != a || null != s))
                    )
                      switch (l) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          u = a;
                          break;
                        case "multiple":
                          i = a;
                        default:
                          a !== s && cf(e, n, l, a, r, s);
                      }
                  return (
                    (n = u),
                    (t = i),
                    (r = m),
                    void (null != p
                      ? An(e, !!t, p, !1)
                      : !!r != !!t &&
                        (null != n
                          ? An(e, !!t, n, !0)
                          : An(e, !!t, t ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((m = p = null), t))
                    if (
                      ((l = t[u]),
                      t.hasOwnProperty(u) && null != l && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          cf(e, n, u, null, r, l);
                      }
                  for (i in r)
                    if (
                      ((l = r[i]),
                      (a = t[i]),
                      r.hasOwnProperty(i) && (null != l || null != a))
                    )
                      switch (i) {
                        case "value":
                          p = l;
                          break;
                        case "defaultValue":
                          m = l;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != l) throw Error(o(91));
                          break;
                        default:
                          l !== a && cf(e, n, i, l, r, a);
                      }
                  return void wn(e, p, m);
                case "option":
                  for (var h in t)
                    ((p = t[h]),
                      t.hasOwnProperty(h) &&
                        null != p &&
                        !r.hasOwnProperty(h) &&
                        ("selected" === h
                          ? (e.selected = !1)
                          : cf(e, n, h, null, r, p)));
                  for (s in r)
                    ((p = r[s]),
                      (m = t[s]),
                      !r.hasOwnProperty(s) ||
                        p === m ||
                        (null == p && null == m) ||
                        ("selected" === s
                          ? (e.selected =
                              p &&
                              "function" != typeof p &&
                              "symbol" != typeof p)
                          : cf(e, n, s, p, r, m)));
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in t)
                    ((p = t[g]),
                      t.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        cf(e, n, g, null, r, p));
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (m = t[c]),
                      r.hasOwnProperty(c) &&
                        p !== m &&
                        (null != p || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, n));
                          break;
                        default:
                          cf(e, n, c, p, r, m);
                      }
                  return;
                default:
                  if (zn(n)) {
                    for (var v in t)
                      ((p = t[v]),
                        t.hasOwnProperty(v) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(v) &&
                          ff(e, n, v, void 0, r, p));
                    for (f in r)
                      ((p = r[f]),
                        (m = t[f]),
                        !r.hasOwnProperty(f) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          ff(e, n, f, p, r, m));
                    return;
                  }
              }
              for (var y in t)
                ((p = t[y]),
                  t.hasOwnProperty(y) &&
                    null != p &&
                    !r.hasOwnProperty(y) &&
                    cf(e, n, y, null, r, p));
              for (d in r)
                ((p = r[d]),
                  (m = t[d]),
                  !r.hasOwnProperty(d) ||
                    p === m ||
                    (null == p && null == m) ||
                    cf(e, n, d, p, r, m));
            })(r, e.type, t, n),
              (r[Ue] = n));
          } catch (n) {
            wc(e, e.return, n);
          }
        }
        function Eu(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && xf(e.type)) ||
            4 === e.tag
          );
        }
        function Su(e) {
          e: for (;;) {
            for (; null === e.sibling;) {
              if (null === e.return || Eu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (27 === e.tag && xf(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Cu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              n
                ? (9 === t.nodeType
                    ? t.body
                    : "HTML" === t.nodeName
                      ? t.ownerDocument.body
                      : t
                  ).insertBefore(e, n)
                : ((n =
                    9 === t.nodeType
                      ? t.body
                      : "HTML" === t.nodeName
                        ? t.ownerDocument.body
                        : t).appendChild(e),
                  null != (t = t._reactRootContainer) ||
                    null !== n.onclick ||
                    (n.onclick = Tn)));
          else if (
            4 !== r &&
            (27 === r && xf(e.type) && ((t = e.stateNode), (n = null)),
            null !== (e = e.child))
          )
            for (Cu(e, n, t), e = e.sibling; null !== e;)
              (Cu(e, n, t), (e = e.sibling));
        }
        function xu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
          else if (
            4 !== r &&
            (27 === r && xf(e.type) && (t = e.stateNode),
            null !== (e = e.child))
          )
            for (xu(e, n, t), e = e.sibling; null !== e;)
              (xu(e, n, t), (e = e.sibling));
        }
        function _u(e) {
          var n = e.stateNode,
            t = e.memoizedProps;
          try {
            for (var r = e.type, l = n.attributes; l.length;)
              n.removeAttributeNode(l[0]);
            (df(n, r, t), (n[je] = e), (n[Ue] = t));
          } catch (n) {
            wc(e, e.return, n);
          }
        }
        var zu = !1,
          Nu = !1,
          Pu = !1,
          Bu = "function" == typeof WeakSet ? WeakSet : Set,
          Tu = null;
        function Lu(e, n, t) {
          var r = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (qu(e, t), 4 & r && hu(5, t));
              break;
            case 1:
              if ((qu(e, t), 4 & r))
                if (((e = t.stateNode), null === n))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    wc(t, t.return, e);
                  }
                else {
                  var l = wi(t.type, n.memoizedProps);
                  n = n.memoizedState;
                  try {
                    e.componentDidUpdate(
                      l,
                      n,
                      e.__reactInternalSnapshotBeforeUpdate,
                    );
                  } catch (e) {
                    wc(t, t.return, e);
                  }
                }
              (64 & r && vu(t), 512 & r && bu(t, t.return));
              break;
            case 3:
              if ((qu(e, t), 64 & r && null !== (e = t.updateQueue))) {
                if (((n = null), null !== t.child))
                  switch (t.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      n = t.child.stateNode;
                  }
                try {
                  Ca(e, n);
                } catch (e) {
                  wc(t, t.return, e);
                }
              }
              break;
            case 27:
              null === n && 4 & r && _u(t);
            case 26:
            case 5:
              (qu(e, t),
                null === n && 4 & r && Au(t),
                512 & r && bu(t, t.return));
              break;
            case 12:
              qu(e, t);
              break;
            case 31:
              (qu(e, t), 4 & r && Iu(e, t));
              break;
            case 13:
              (qu(e, t),
                4 & r && ju(e, t),
                64 & r &&
                  null !== (e = t.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, n) {
                    var t = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = n;
                    else if ("$?" !== e.data || "loading" !== t.readyState) n();
                    else {
                      var r = function () {
                        (n(), t.removeEventListener("DOMContentLoaded", r));
                      };
                      (t.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r));
                    }
                  })(e, (t = xc.bind(null, t))));
              break;
            case 22:
              if (!(r = null !== t.memoizedState || zu)) {
                ((n = (null !== n && null !== n.memoizedState) || Nu),
                  (l = zu));
                var a = Nu;
                ((zu = r),
                  (Nu = n) && !a
                    ? Ku(e, t, !!(8772 & t.subtreeFlags))
                    : qu(e, t),
                  (zu = l),
                  (Nu = a));
              }
              break;
            case 30:
              break;
            default:
              qu(e, t);
          }
        }
        function Ou(e) {
          var n = e.alternate;
          (null !== n && ((e.alternate = null), Ou(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (n = e.stateNode) && Xe(n),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Fu = null,
          Du = !1;
        function Ru(e, n, t) {
          for (t = t.child; null !== t;) (Mu(e, n, t), (t = t.sibling));
        }
        function Mu(e, n, t) {
          if (ve && "function" == typeof ve.onCommitFiberUnmount)
            try {
              ve.onCommitFiberUnmount(ge, t);
            } catch (e) {}
          switch (t.tag) {
            case 26:
              (Nu || ku(t, n),
                Ru(e, n, t),
                t.memoizedState
                  ? t.memoizedState.count--
                  : t.stateNode && (t = t.stateNode).parentNode.removeChild(t));
              break;
            case 27:
              Nu || ku(t, n);
              var r = Fu,
                l = Du;
              (xf(t.type) && ((Fu = t.stateNode), (Du = !1)),
                Ru(e, n, t),
                Mf(t.stateNode),
                (Fu = r),
                (Du = l));
              break;
            case 5:
              Nu || ku(t, n);
            case 6:
              if (
                ((r = Fu),
                (l = Du),
                (Fu = null),
                Ru(e, n, t),
                (Du = l),
                null !== (Fu = r))
              )
                if (Du)
                  try {
                    (9 === Fu.nodeType
                      ? Fu.body
                      : "HTML" === Fu.nodeName
                        ? Fu.ownerDocument.body
                        : Fu
                    ).removeChild(t.stateNode);
                  } catch (e) {
                    wc(t, n, e);
                  }
                else
                  try {
                    Fu.removeChild(t.stateNode);
                  } catch (e) {
                    wc(t, n, e);
                  }
              break;
            case 18:
              null !== Fu &&
                (Du
                  ? (_f(
                      9 === (e = Fu).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      t.stateNode,
                    ),
                    $d(e))
                  : _f(Fu, t.stateNode));
              break;
            case 4:
              ((r = Fu),
                (l = Du),
                (Fu = t.stateNode.containerInfo),
                (Du = !0),
                Ru(e, n, t),
                (Fu = r),
                (Du = l));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (gu(2, t, n), Nu || gu(4, t, n), Ru(e, n, t));
              break;
            case 1:
              (Nu ||
                (ku(t, n),
                "function" == typeof (r = t.stateNode).componentWillUnmount &&
                  yu(t, n, r)),
                Ru(e, n, t));
              break;
            case 21:
              Ru(e, n, t);
              break;
            case 22:
              ((Nu = (r = Nu) || null !== t.memoizedState),
                Ru(e, n, t),
                (Nu = r));
              break;
            default:
              Ru(e, n, t);
          }
        }
        function Iu(e, n) {
          if (
            null === n.memoizedState &&
            null !== (e = n.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              $d(e);
            } catch (e) {
              wc(n, n.return, e);
            }
          }
        }
        function ju(e, n) {
          if (
            null === n.memoizedState &&
            null !== (e = n.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              $d(e);
            } catch (e) {
              wc(n, n.return, e);
            }
        }
        function Uu(e, n) {
          var t = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var n = e.stateNode;
                return (null === n && (n = e.stateNode = new Bu()), n);
              case 22:
                return (
                  null === (n = (e = e.stateNode)._retryCache) &&
                    (n = e._retryCache = new Bu()),
                  n
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          n.forEach(function (n) {
            if (!t.has(n)) {
              t.add(n);
              var r = _c.bind(null, e, n);
              n.then(r, r);
            }
          });
        }
        function $u(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var l = t[r],
                a = e,
                i = n,
                u = i;
              e: for (; null !== u;) {
                switch (u.tag) {
                  case 27:
                    if (xf(u.type)) {
                      ((Fu = u.stateNode), (Du = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Fu = u.stateNode), (Du = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Fu = u.stateNode.containerInfo), (Du = !0));
                    break e;
                }
                u = u.return;
              }
              if (null === Fu) throw Error(o(160));
              (Mu(a, i, l),
                (Fu = null),
                (Du = !1),
                null !== (a = l.alternate) && (a.return = null),
                (l.return = null));
            }
          if (13886 & n.subtreeFlags)
            for (n = n.child; null !== n;) (Vu(n, e), (n = n.sibling));
        }
        var Hu = null;
        function Vu(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              ($u(n, e),
                Qu(e),
                4 & r && (gu(3, e, e.return), hu(3, e), gu(5, e, e.return)));
              break;
            case 1:
              ($u(n, e),
                Qu(e),
                512 & r && (Nu || null === t || ku(t, t.return)),
                64 & r &&
                  zu &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((t = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === t ? r : t.concat(r))));
              break;
            case 26:
              var l = Hu;
              if (
                ($u(n, e),
                Qu(e),
                512 & r && (Nu || null === t || ku(t, t.return)),
                4 & r)
              ) {
                var a = null !== t ? t.memoizedState : null;
                if (((r = e.memoizedState), null === t))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type),
                          (t = e.memoizedProps),
                          (l = l.ownerDocument || l));
                        n: switch (r) {
                          case "title":
                            ((!(a = l.getElementsByTagName("title")[0]) ||
                              a[qe] ||
                              a[je] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = l.createElement(r)),
                              l.head.insertBefore(
                                a,
                                l.querySelector("head > title"),
                              )),
                              df(a, r, t),
                              (a[je] = e),
                              Je(a),
                              (r = a));
                            break e;
                          case "link":
                            var i = td("link", "href", l).get(
                              r + (t.href || ""),
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (a = i[u]).getAttribute("href") ===
                                    (null == t.href || "" === t.href
                                      ? null
                                      : t.href) &&
                                  a.getAttribute("rel") ===
                                    (null == t.rel ? null : t.rel) &&
                                  a.getAttribute("title") ===
                                    (null == t.title ? null : t.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == t.crossOrigin
                                      ? null
                                      : t.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break n;
                                }
                            (df((a = l.createElement(r)), r, t),
                              l.head.appendChild(a));
                            break;
                          case "meta":
                            if (
                              (i = td("meta", "content", l).get(
                                r + (t.content || ""),
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (a = i[u]).getAttribute("content") ===
                                    (null == t.content
                                      ? null
                                      : "" + t.content) &&
                                  a.getAttribute("name") ===
                                    (null == t.name ? null : t.name) &&
                                  a.getAttribute("property") ===
                                    (null == t.property ? null : t.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == t.httpEquiv
                                      ? null
                                      : t.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == t.charSet ? null : t.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break n;
                                }
                            (df((a = l.createElement(r)), r, t),
                              l.head.appendChild(a));
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        ((a[je] = e), Je(a), (r = a));
                      }
                      e.stateNode = r;
                    } else rd(l, e.type, e.stateNode);
                  else e.stateNode = Gf(l, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== t.stateNode &&
                          (t = t.stateNode).parentNode.removeChild(t)
                        : a.count--,
                      null === r
                        ? rd(l, e.type, e.stateNode)
                        : Gf(l, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      wu(e, e.memoizedProps, t.memoizedProps);
              }
              break;
            case 27:
              ($u(n, e),
                Qu(e),
                512 & r && (Nu || null === t || ku(t, t.return)),
                null !== t && 4 & r && wu(e, e.memoizedProps, t.memoizedProps));
              break;
            case 5:
              if (
                ($u(n, e),
                Qu(e),
                512 & r && (Nu || null === t || ku(t, t.return)),
                32 & e.flags)
              ) {
                l = e.stateNode;
                try {
                  Sn(l, "");
                } catch (n) {
                  wc(e, e.return, n);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                wu(e, (l = e.memoizedProps), null !== t ? t.memoizedProps : l),
                1024 & r && (Pu = !0));
              break;
            case 6:
              if (($u(n, e), Qu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                ((r = e.memoizedProps), (t = e.stateNode));
                try {
                  t.nodeValue = r;
                } catch (n) {
                  wc(e, e.return, n);
                }
              }
              break;
            case 3:
              if (
                ((nd = null),
                (l = Hu),
                (Hu = Uf(n.containerInfo)),
                $u(n, e),
                (Hu = l),
                Qu(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  $d(n.containerInfo);
                } catch (n) {
                  wc(e, e.return, n);
                }
              Pu && ((Pu = !1), Wu(e));
              break;
            case 4:
              ((r = Hu),
                (Hu = Uf(e.stateNode.containerInfo)),
                $u(n, e),
                Qu(e),
                (Hu = r));
              break;
            case 12:
            default:
              ($u(n, e), Qu(e));
              break;
            case 31:
            case 19:
              ($u(n, e),
                Qu(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Uu(e, r)));
              break;
            case 13:
              ($u(n, e),
                Qu(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !=
                    (null !== t && null !== t.memoizedState) &&
                  (Bs = ie()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Uu(e, r)));
              break;
            case 22:
              l = null !== e.memoizedState;
              var s = null !== t && null !== t.memoizedState,
                c = zu,
                f = Nu;
              if (
                ((zu = c || l),
                (Nu = f || s),
                $u(n, e),
                (Nu = f),
                (zu = c),
                Qu(e),
                8192 & r)
              )
                e: for (
                  n = e.stateNode,
                    n._visibility = l ? -2 & n._visibility : 1 | n._visibility,
                    l && (null === t || s || zu || Nu || Xu(e)),
                    t = null,
                    n = e;
                  ;
                ) {
                  if (5 === n.tag || 26 === n.tag) {
                    if (null === t) {
                      s = t = n;
                      try {
                        if (((a = s.stateNode), l))
                          "function" == typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          u = s.stateNode;
                          var d = s.memoizedProps.style,
                            p =
                              null != d && d.hasOwnProperty("display")
                                ? d.display
                                : null;
                          u.style.display =
                            null == p || "boolean" == typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (e) {
                        wc(s, s.return, e);
                      }
                    }
                  } else if (6 === n.tag) {
                    if (null === t) {
                      s = n;
                      try {
                        s.stateNode.nodeValue = l ? "" : s.memoizedProps;
                      } catch (e) {
                        wc(s, s.return, e);
                      }
                    }
                  } else if (18 === n.tag) {
                    if (null === t) {
                      s = n;
                      try {
                        var m = s.stateNode;
                        l ? zf(m, !0) : zf(s.stateNode, !1);
                      } catch (e) {
                        wc(s, s.return, e);
                      }
                    }
                  } else if (
                    ((22 !== n.tag && 23 !== n.tag) ||
                      null === n.memoizedState ||
                      n === e) &&
                    null !== n.child
                  ) {
                    ((n.child.return = n), (n = n.child));
                    continue;
                  }
                  if (n === e) break e;
                  for (; null === n.sibling;) {
                    if (null === n.return || n.return === e) break e;
                    (t === n && (t = null), (n = n.return));
                  }
                  (t === n && (t = null),
                    (n.sibling.return = n.return),
                    (n = n.sibling));
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (t = r.retryQueue) &&
                ((r.retryQueue = null), Uu(e, t));
            case 30:
            case 21:
          }
        }
        function Qu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              for (var t, r = e.return; null !== r;) {
                if (Eu(r)) {
                  t = r;
                  break;
                }
                r = r.return;
              }
              if (null == t) throw Error(o(160));
              switch (t.tag) {
                case 27:
                  var l = t.stateNode;
                  xu(e, Su(e), l);
                  break;
                case 5:
                  var a = t.stateNode;
                  (32 & t.flags && (Sn(a, ""), (t.flags &= -33)),
                    xu(e, Su(e), a));
                  break;
                case 3:
                case 4:
                  var i = t.stateNode.containerInfo;
                  Cu(e, Su(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (n) {
              wc(e, e.return, n);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function Wu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e;) {
              var n = e;
              (Wu(n),
                5 === n.tag && 1024 & n.flags && n.stateNode.reset(),
                (e = e.sibling));
            }
        }
        function qu(e, n) {
          if (8772 & n.subtreeFlags)
            for (n = n.child; null !== n;)
              (Lu(e, n.alternate, n), (n = n.sibling));
        }
        function Xu(e) {
          for (e = e.child; null !== e;) {
            var n = e;
            switch (n.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (gu(4, n, n.return), Xu(n));
                break;
              case 1:
                ku(n, n.return);
                var t = n.stateNode;
                ("function" == typeof t.componentWillUnmount &&
                  yu(n, n.return, t),
                  Xu(n));
                break;
              case 27:
                Mf(n.stateNode);
              case 26:
              case 5:
                (ku(n, n.return), Xu(n));
                break;
              case 22:
                null === n.memoizedState && Xu(n);
                break;
              default:
                Xu(n);
            }
            e = e.sibling;
          }
        }
        function Ku(e, n, t) {
          for (t = t && !!(8772 & n.subtreeFlags), n = n.child; null !== n;) {
            var r = n.alternate,
              l = e,
              a = n,
              o = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (Ku(l, a, t), hu(4, a));
                break;
              case 1:
                if (
                  (Ku(l, a, t),
                  "function" ==
                    typeof (l = (r = a).stateNode).componentDidMount)
                )
                  try {
                    l.componentDidMount();
                  } catch (e) {
                    wc(r, r.return, e);
                  }
                if (null !== (l = (r = a).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = l.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        l.shared.hiddenCallbacks = null, l = 0;
                        l < u.length;
                        l++
                      )
                        Sa(u[l], i);
                  } catch (e) {
                    wc(r, r.return, e);
                  }
                }
                (t && 64 & o && vu(a), bu(a, a.return));
                break;
              case 27:
                _u(a);
              case 26:
              case 5:
                (Ku(l, a, t),
                  t && null === r && 4 & o && Au(a),
                  bu(a, a.return));
                break;
              case 12:
                Ku(l, a, t);
                break;
              case 31:
                (Ku(l, a, t), t && 4 & o && Iu(l, a));
                break;
              case 13:
                (Ku(l, a, t), t && 4 & o && ju(l, a));
                break;
              case 22:
                (null === a.memoizedState && Ku(l, a, t), bu(a, a.return));
                break;
              case 30:
                break;
              default:
                Ku(l, a, t);
            }
            n = n.sibling;
          }
        }
        function Yu(e, n) {
          var t = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (t = e.memoizedState.cachePool.pool),
            (e = null),
            null !== n.memoizedState &&
              null !== n.memoizedState.cachePool &&
              (e = n.memoizedState.cachePool.pool),
            e !== t && (null != e && e.refCount++, null != t && Il(t)));
        }
        function Gu(e, n) {
          ((e = null),
            null !== n.alternate && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache) !== e &&
              (n.refCount++, null != e && Il(e)));
        }
        function Zu(e, n, t, r) {
          if (10256 & n.subtreeFlags)
            for (n = n.child; null !== n;) (Ju(e, n, t, r), (n = n.sibling));
        }
        function Ju(e, n, t, r) {
          var l = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Zu(e, n, t, r), 2048 & l && hu(9, n));
              break;
            case 1:
            case 31:
            case 13:
            default:
              Zu(e, n, t, r);
              break;
            case 3:
              (Zu(e, n, t, r),
                2048 & l &&
                  ((e = null),
                  null !== n.alternate && (e = n.alternate.memoizedState.cache),
                  (n = n.memoizedState.cache) !== e &&
                    (n.refCount++, null != e && Il(e))));
              break;
            case 12:
              if (2048 & l) {
                (Zu(e, n, t, r), (e = n.stateNode));
                try {
                  var a = n.memoizedProps,
                    o = a.id,
                    i = a.onPostCommit;
                  "function" == typeof i &&
                    i(
                      o,
                      null === n.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0,
                    );
                } catch (e) {
                  wc(n, n.return, e);
                }
              } else Zu(e, n, t, r);
              break;
            case 23:
              break;
            case 22:
              ((a = n.stateNode),
                (o = n.alternate),
                null !== n.memoizedState
                  ? 2 & a._visibility
                    ? Zu(e, n, t, r)
                    : ns(e, n)
                  : 2 & a._visibility
                    ? Zu(e, n, t, r)
                    : ((a._visibility |= 2),
                      es(e, n, t, r, !!(10256 & n.subtreeFlags) || !1)),
                2048 & l && Yu(o, n));
              break;
            case 24:
              (Zu(e, n, t, r), 2048 & l && Gu(n.alternate, n));
          }
        }
        function es(e, n, t, r, l) {
          for (
            l = l && (!!(10256 & n.subtreeFlags) || !1), n = n.child;
            null !== n;
          ) {
            var a = e,
              o = n,
              i = t,
              u = r,
              s = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                (es(a, o, i, u, l), hu(8, o));
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                (null !== o.memoizedState
                  ? 2 & c._visibility
                    ? es(a, o, i, u, l)
                    : ns(a, o)
                  : ((c._visibility |= 2), es(a, o, i, u, l)),
                  l && 2048 & s && Yu(o.alternate, o));
                break;
              case 24:
                (es(a, o, i, u, l), l && 2048 & s && Gu(o.alternate, o));
                break;
              default:
                es(a, o, i, u, l);
            }
            n = n.sibling;
          }
        }
        function ns(e, n) {
          if (10256 & n.subtreeFlags)
            for (n = n.child; null !== n;) {
              var t = e,
                r = n,
                l = r.flags;
              switch (r.tag) {
                case 22:
                  (ns(t, r), 2048 & l && Yu(r.alternate, r));
                  break;
                case 24:
                  (ns(t, r), 2048 & l && Gu(r.alternate, r));
                  break;
                default:
                  ns(t, r);
              }
              n = n.sibling;
            }
        }
        var ts = 8192;
        function rs(e, n, t) {
          if (e.subtreeFlags & ts)
            for (e = e.child; null !== e;) (ls(e, n, t), (e = e.sibling));
        }
        function ls(e, n, t) {
          switch (e.tag) {
            case 26:
              (rs(e, n, t),
                e.flags & ts &&
                  null !== e.memoizedState &&
                  (function (e, n, t, r) {
                    if (!(
                      "stylesheet" !== t.type ||
                      ("string" == typeof r.media &&
                        !1 === matchMedia(r.media).matches) ||
                      4 & t.state.loading
                    )) {
                      if (null === t.instance) {
                        var l = Wf(r.href),
                          a = n.querySelector(qf(l));
                        if (a)
                          return (
                            null !== (n = a._p) &&
                              "object" == typeof n &&
                              "function" == typeof n.then &&
                              (e.count++, (e = od.bind(e)), n.then(e, e)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void Je(a)
                          );
                        ((a = n.ownerDocument || n),
                          (r = Xf(r)),
                          (l = If.get(l)) && Jf(r, l),
                          Je((a = a.createElement("link"))));
                        var o = a;
                        ((o._p = new Promise(function (e, n) {
                          ((o.onload = e), (o.onerror = n));
                        })),
                          df(a, "link", r),
                          (t.instance = a));
                      }
                      (null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(t, n),
                        (n = t.state.preload) &&
                          !(3 & t.state.loading) &&
                          (e.count++,
                          (t = od.bind(e)),
                          n.addEventListener("load", t),
                          n.addEventListener("error", t)));
                    }
                  })(t, Hu, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              rs(e, n, t);
              break;
            case 3:
            case 4:
              var r = Hu;
              ((Hu = Uf(e.stateNode.containerInfo)), rs(e, n, t), (Hu = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = ts), (ts = 16777216), rs(e, n, t), (ts = r))
                  : rs(e, n, t));
          }
        }
        function as(e) {
          var n = e.alternate;
          if (null !== n && null !== (e = n.child)) {
            n.child = null;
            do {
              ((n = e.sibling), (e.sibling = null), (e = n));
            } while (null !== e);
          }
        }
        function os(e) {
          var n = e.deletions;
          if (16 & e.flags) {
            if (null !== n)
              for (var t = 0; t < n.length; t++) {
                var r = n[t];
                ((Tu = r), ss(r, e));
              }
            as(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;) (is(e), (e = e.sibling));
        }
        function is(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (os(e), 2048 & e.flags && gu(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              os(e);
              break;
            case 22:
              var n = e.stateNode;
              null !== e.memoizedState &&
              2 & n._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((n._visibility &= -3), us(e))
                : os(e);
          }
        }
        function us(e) {
          var n = e.deletions;
          if (16 & e.flags) {
            if (null !== n)
              for (var t = 0; t < n.length; t++) {
                var r = n[t];
                ((Tu = r), ss(r, e));
              }
            as(e);
          }
          for (e = e.child; null !== e;) {
            switch ((n = e).tag) {
              case 0:
              case 11:
              case 15:
                (gu(8, n, n.return), us(n));
                break;
              case 22:
                2 & (t = n.stateNode)._visibility &&
                  ((t._visibility &= -3), us(n));
                break;
              default:
                us(n);
            }
            e = e.sibling;
          }
        }
        function ss(e, n) {
          for (; null !== Tu;) {
            var t = Tu;
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                gu(8, t, n);
                break;
              case 23:
              case 22:
                if (
                  null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool
                ) {
                  var r = t.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Il(t.memoizedState.cache);
            }
            if (null !== (r = t.child)) ((r.return = t), (Tu = r));
            else
              e: for (t = e; null !== Tu;) {
                var l = (r = Tu).sibling,
                  a = r.return;
                if ((Ou(r), r === t)) {
                  Tu = null;
                  break e;
                }
                if (null !== l) {
                  ((l.return = a), (Tu = l));
                  break e;
                }
                Tu = a;
              }
          }
        }
        var cs = {
            getCacheForType: function (e) {
              var n = Bl(Rl),
                t = n.data.get(e);
              return (void 0 === t && ((t = e()), n.data.set(e, t)), t);
            },
            cacheSignal: function () {
              return Bl(Rl).controller.signal;
            },
          },
          fs = "function" == typeof WeakMap ? WeakMap : Map,
          ds = 0,
          ps = null,
          ms = null,
          hs = 0,
          gs = 0,
          vs = null,
          ys = !1,
          bs = !1,
          ks = !1,
          As = 0,
          ws = 0,
          Es = 0,
          Ss = 0,
          Cs = 0,
          xs = 0,
          _s = 0,
          zs = null,
          Ns = null,
          Ps = !1,
          Bs = 0,
          Ts = 0,
          Ls = 1 / 0,
          Os = null,
          Fs = null,
          Ds = 0,
          Rs = null,
          Ms = null,
          Is = 0,
          js = 0,
          Us = null,
          $s = null,
          Hs = 0,
          Vs = null;
        function Qs() {
          return 2 & ds && 0 !== hs ? hs & -hs : null !== L.T ? Uc() : Re();
        }
        function Ws() {
          if (0 === xs)
            if (536870912 & hs && !cl) xs = 536870912;
            else {
              var e = Ee;
              (!(3932160 & (Ee <<= 1)) && (Ee = 262144), (xs = e));
            }
          return (null !== (e = Ba.current) && (e.flags |= 32), xs);
        }
        function qs(e, n, t) {
          (((e !== ps || (2 !== gs && 9 !== gs)) &&
            null === e.cancelPendingCommit) ||
            (ec(e, 0), Gs(e, hs, xs, !1)),
            Be(e, t),
            (2 & ds && e === ps) ||
              (e === ps &&
                (!(2 & ds) && (Ss |= t), 4 === ws && Gs(e, hs, xs, !1)),
              Oc(e)));
        }
        function Xs(e, n, t) {
          if (6 & ds) throw Error(o(327));
          for (
            var r =
                (!t && !(127 & n) && 0 === (n & e.expiredLanes)) || _e(e, n),
              l = r
                ? (function (e, n) {
                    var t = ds;
                    ds |= 2;
                    var r = rc(),
                      l = lc();
                    ps !== e || hs !== n
                      ? ((Os = null), (Ls = ie() + 500), ec(e, n))
                      : (bs = _e(e, n));
                    e: for (;;)
                      try {
                        if (0 !== gs && null !== ms) {
                          n = ms;
                          var a = vs;
                          n: switch (gs) {
                            case 1:
                              ((gs = 0), (vs = null), fc(e, n, a, 1));
                              break;
                            case 2:
                            case 9:
                              if (ea(a)) {
                                ((gs = 0), (vs = null), cc(n));
                                break;
                              }
                              ((n = function () {
                                ((2 !== gs && 9 !== gs) || ps !== e || (gs = 7),
                                  Oc(e));
                              }),
                                a.then(n, n));
                              break e;
                            case 3:
                              gs = 7;
                              break e;
                            case 4:
                              gs = 5;
                              break e;
                            case 7:
                              ea(a)
                                ? ((gs = 0), (vs = null), cc(n))
                                : ((gs = 0), (vs = null), fc(e, n, a, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (ms.tag) {
                                case 26:
                                  i = ms.memoizedState;
                                case 5:
                                case 27:
                                  var u = ms;
                                  if (i ? ld(i) : u.stateNode.complete) {
                                    ((gs = 0), (vs = null));
                                    var s = u.sibling;
                                    if (null !== s) ms = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((ms = c), dc(c))
                                        : (ms = null);
                                    }
                                    break n;
                                  }
                              }
                              ((gs = 0), (vs = null), fc(e, n, a, 5));
                              break;
                            case 6:
                              ((gs = 0), (vs = null), fc(e, n, a, 6));
                              break;
                            case 8:
                              (Js(), (ws = 6));
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        uc();
                        break;
                      } catch (n) {
                        nc(e, n);
                      }
                    return (
                      (El = wl = null),
                      (L.H = r),
                      (L.A = l),
                      (ds = t),
                      null !== ms ? 0 : ((ps = null), (hs = 0), Nr(), ws)
                    );
                  })(e, n)
                : oc(e, n, !0),
              a = r;
            ;
          ) {
            if (0 === l) {
              bs && !r && Gs(e, n, 0, !1);
              break;
            }
            if (((t = e.current.alternate), !a || Ys(t))) {
              if (2 === l) {
                if (((a = n), e.errorRecoveryDisabledLanes & a)) var i = 0;
                else
                  i =
                    0 != (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                        ? 536870912
                        : 0;
                if (0 !== i) {
                  n = i;
                  e: {
                    var u = e;
                    l = zs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && (ec(u, i).flags |= 256), 2 !== (i = oc(u, i, !1)))
                    ) {
                      if (ks && !s) {
                        ((u.errorRecoveryDisabledLanes |= a),
                          (Ss |= a),
                          (l = 4));
                        break e;
                      }
                      ((a = Ns),
                        (Ns = l),
                        null !== a &&
                          (null === Ns ? (Ns = a) : Ns.push.apply(Ns, a)));
                    }
                    l = i;
                  }
                  if (((a = !1), 2 !== l)) continue;
                }
              }
              if (1 === l) {
                (ec(e, 0), Gs(e, n, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (a = l))) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194048 & n) !== n) break;
                  case 6:
                    Gs(r, n, xs, !ys);
                    break e;
                  case 2:
                    Ns = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if ((62914560 & n) === n && 10 < (l = Bs + 300 - ie())) {
                  if ((Gs(r, n, xs, !ys), 0 !== xe(r, 0, !0))) break e;
                  ((Is = n),
                    (r.timeoutHandle = Af(
                      Ks.bind(
                        null,
                        r,
                        t,
                        Ns,
                        Os,
                        Ps,
                        n,
                        xs,
                        Ss,
                        _s,
                        ys,
                        a,
                        "Throttled",
                        -0,
                        0,
                      ),
                      l,
                    )));
                } else Ks(r, t, Ns, Os, Ps, n, xs, Ss, _s, ys, a, null, -0, 0);
              }
              break;
            }
            ((l = oc(e, n, !1)), (a = !1));
          }
          Oc(e);
        }
        function Ks(e, n, t, r, l, a, o, i, u, s, c, f, d, p) {
          if (
            ((e.timeoutHandle = -1),
            8192 & (f = n.subtreeFlags) || !(16785408 & ~f))
          ) {
            ls(
              n,
              a,
              (f = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Tn,
              }),
            );
            var m =
              (62914560 & a) === a
                ? Bs - ie()
                : (4194048 & a) === a
                  ? Ts - ie()
                  : 0;
            if (
              null !==
              (m = (function (e, n) {
                return (
                  e.stylesheets && 0 === e.count && ud(e, e.stylesheets),
                  0 < e.count || 0 < e.imgCount
                    ? function (t) {
                        var r = setTimeout(function () {
                          if (
                            (e.stylesheets && ud(e, e.stylesheets), e.unsuspend)
                          ) {
                            var n = e.unsuspend;
                            ((e.unsuspend = null), n());
                          }
                        }, 6e4 + n);
                        0 < e.imgBytes &&
                          0 === ad &&
                          (ad =
                            62500 *
                            (function () {
                              if (
                                "function" ==
                                typeof performance.getEntriesByType
                              ) {
                                for (
                                  var e = 0,
                                    n = 0,
                                    t =
                                      performance.getEntriesByType("resource"),
                                    r = 0;
                                  r < t.length;
                                  r++
                                ) {
                                  var l = t[r],
                                    a = l.transferSize,
                                    o = l.initiatorType,
                                    i = l.duration;
                                  if (a && i && pf(o)) {
                                    for (
                                      o = 0, i = l.responseEnd, r += 1;
                                      r < t.length;
                                      r++
                                    ) {
                                      var u = t[r],
                                        s = u.startTime;
                                      if (s > i) break;
                                      var c = u.transferSize,
                                        f = u.initiatorType;
                                      c &&
                                        pf(f) &&
                                        (o +=
                                          c *
                                          ((u = u.responseEnd) < i
                                            ? 1
                                            : (i - s) / (u - s)));
                                    }
                                    if (
                                      (--r,
                                      (n += (8 * (a + o)) / (l.duration / 1e3)),
                                      10 < ++e)
                                    )
                                      break;
                                  }
                                }
                                if (0 < e) return n / e / 1e6;
                              }
                              return navigator.connection &&
                                "number" ==
                                  typeof (e = navigator.connection.downlink)
                                ? e
                                : 5;
                            })());
                        var l = setTimeout(
                          function () {
                            if (
                              ((e.waitingForImages = !1),
                              0 === e.count &&
                                (e.stylesheets && ud(e, e.stylesheets),
                                e.unsuspend))
                            ) {
                              var n = e.unsuspend;
                              ((e.unsuspend = null), n());
                            }
                          },
                          (e.imgBytes > ad ? 50 : 800) + n,
                        );
                        return (
                          (e.unsuspend = t),
                          function () {
                            ((e.unsuspend = null),
                              clearTimeout(r),
                              clearTimeout(l));
                          }
                        );
                      }
                    : null
                );
              })(f, m))
            )
              return (
                (Is = a),
                (e.cancelPendingCommit = m(
                  mc.bind(null, e, n, a, t, r, l, o, i, u, c, f, null, d, p),
                )),
                void Gs(e, a, o, !s)
              );
          }
          mc(e, n, a, t, r, l, o, i, u);
        }
        function Ys(e) {
          for (var n = e; ;) {
            var t = n.tag;
            if (
              (0 === t || 11 === t || 15 === t) &&
              16384 & n.flags &&
              null !== (t = n.updateQueue) &&
              null !== (t = t.stores)
            )
              for (var r = 0; r < t.length; r++) {
                var l = t[r],
                  a = l.getSnapshot;
                l = l.value;
                try {
                  if (!Gt(a(), l)) return !1;
                } catch (e) {
                  return !1;
                }
              }
            if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
              ((t.return = n), (n = t));
            else {
              if (n === e) break;
              for (; null === n.sibling;) {
                if (null === n.return || n.return === e) return !0;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
          }
          return !0;
        }
        function Gs(e, n, t, r) {
          ((n &= ~Cs),
            (n &= ~Ss),
            (e.suspendedLanes |= n),
            (e.pingedLanes &= ~n),
            r && (e.warmLanes |= n),
            (r = e.expirationTimes));
          for (var l = n; 0 < l;) {
            var a = 31 - be(l),
              o = 1 << a;
            ((r[a] = -1), (l &= ~o));
          }
          0 !== t && Te(e, t, n);
        }
        function Zs() {
          return !!(6 & ds) || (Fc(0, !1), !1);
        }
        function Js() {
          if (null !== ms) {
            if (0 === gs) var e = ms.return;
            else
              ((El = wl = null), ao((e = ms)), (oa = null), (ia = 0), (e = ms));
            for (; null !== e;) (mu(e.alternate, e), (e = e.return));
            ms = null;
          }
        }
        function ec(e, n) {
          var t = e.timeoutHandle;
          (-1 !== t && ((e.timeoutHandle = -1), wf(t)),
            null !== (t = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), t()),
            (Is = 0),
            Js(),
            (ps = e),
            (ms = t = Ir(e.current, null)),
            (hs = n),
            (gs = 0),
            (vs = null),
            (ys = !1),
            (bs = _e(e, n)),
            (ks = !1),
            (_s = xs = Cs = Ss = Es = ws = 0),
            (Ns = zs = null),
            (Ps = !1),
            8 & n && (n |= 32 & n));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= n; 0 < r;) {
              var l = 31 - be(r),
                a = 1 << l;
              ((n |= e[l]), (r &= ~a));
            }
          return ((As = n), Nr(), t);
        }
        function nc(e, n) {
          ((Ua = null),
            (L.H = mi),
            n === Yl || n === Zl
              ? ((n = la()), (gs = 3))
              : n === Gl
                ? ((n = la()), (gs = 4))
                : (gs =
                    n === Bi
                      ? 8
                      : null !== n &&
                          "object" == typeof n &&
                          "function" == typeof n.then
                        ? 6
                        : 1),
            (vs = n),
            null === ms && ((ws = 1), xi(e, qr(n, e.current))));
        }
        function tc() {
          var e = Ba.current;
          return (
            null === e ||
            ((4194048 & hs) === hs
              ? null === Ta
              : !!((62914560 & hs) === hs || 536870912 & hs) && e === Ta)
          );
        }
        function rc() {
          var e = L.H;
          return ((L.H = mi), null === e ? mi : e);
        }
        function lc() {
          var e = L.A;
          return ((L.A = cs), e);
        }
        function ac() {
          ((ws = 4),
            ys || ((4194048 & hs) !== hs && null !== Ba.current) || (bs = !0),
            (!(134217727 & Es) && !(134217727 & Ss)) ||
              null === ps ||
              Gs(ps, hs, xs, !1));
        }
        function oc(e, n, t) {
          var r = ds;
          ds |= 2;
          var l = rc(),
            a = lc();
          ((ps === e && hs === n) || ((Os = null), ec(e, n)), (n = !1));
          var o = ws;
          e: for (;;)
            try {
              if (0 !== gs && null !== ms) {
                var i = ms,
                  u = vs;
                switch (gs) {
                  case 8:
                    (Js(), (o = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === Ba.current && (n = !0);
                    var s = gs;
                    if (((gs = 0), (vs = null), fc(e, i, u, s), t && bs)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    ((s = gs), (gs = 0), (vs = null), fc(e, i, u, s));
                }
              }
              (ic(), (o = ws));
              break;
            } catch (n) {
              nc(e, n);
            }
          return (
            n && e.shellSuspendCounter++,
            (El = wl = null),
            (ds = r),
            (L.H = l),
            (L.A = a),
            null === ms && ((ps = null), (hs = 0), Nr()),
            o
          );
        }
        function ic() {
          for (; null !== ms;) sc(ms);
        }
        function uc() {
          for (; null !== ms && !ae();) sc(ms);
        }
        function sc(e) {
          var n = au(e.alternate, e, As);
          ((e.memoizedProps = e.pendingProps), null === n ? dc(e) : (ms = n));
        }
        function cc(e) {
          var n = e,
            t = n.alternate;
          switch (n.tag) {
            case 15:
            case 0:
              n = Vi(t, n, n.pendingProps, n.type, void 0, hs);
              break;
            case 11:
              n = Vi(t, n, n.pendingProps, n.type.render, n.ref, hs);
              break;
            case 5:
              ao(n);
            default:
              (mu(t, n), (n = au(t, (n = ms = jr(n, As)), As)));
          }
          ((e.memoizedProps = e.pendingProps), null === n ? dc(e) : (ms = n));
        }
        function fc(e, n, t, r) {
          ((El = wl = null), ao(n), (oa = null), (ia = 0));
          var l = n.return;
          try {
            if (
              (function (e, n, t, r, l) {
                if (
                  ((t.flags |= 32768),
                  null !== r &&
                    "object" == typeof r &&
                    "function" == typeof r.then)
                ) {
                  if (
                    (null !== (n = t.alternate) && zl(n, t, l, !0),
                    null !== (t = Ba.current))
                  ) {
                    switch (t.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Ta
                            ? ac()
                            : null === t.alternate && 0 === ws && (ws = 3),
                          (t.flags &= -257),
                          (t.flags |= 65536),
                          (t.lanes = l),
                          r === Jl
                            ? (t.flags |= 16384)
                            : (null === (n = t.updateQueue)
                                ? (t.updateQueue = new Set([r]))
                                : n.add(r),
                              Ec(e, r, l)),
                          !1
                        );
                      case 22:
                        return (
                          (t.flags |= 65536),
                          r === Jl
                            ? (t.flags |= 16384)
                            : (null === (n = t.updateQueue)
                                ? ((n = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (t.updateQueue = n))
                                : null === (t = n.retryQueue)
                                  ? (n.retryQueue = new Set([r]))
                                  : t.add(r),
                              Ec(e, r, l)),
                          !1
                        );
                    }
                    throw Error(o(435, t.tag));
                  }
                  return (Ec(e, r, l), ac(), !1);
                }
                if (cl)
                  return (
                    null !== (n = Ba.current)
                      ? (!(65536 & n.flags) && (n.flags |= 256),
                        (n.flags |= 65536),
                        (n.lanes = l),
                        r !== pl &&
                          kl(qr((e = Error(o(422), { cause: r })), t)))
                      : (r !== pl &&
                          kl(qr((n = Error(o(423), { cause: r })), t)),
                        ((e = e.current.alternate).flags |= 65536),
                        (l &= -l),
                        (e.lanes |= l),
                        (r = qr(r, t)),
                        ka(e, (l = zi(e.stateNode, r, l))),
                        4 !== ws && (ws = 2)),
                    !1
                  );
                var a = Error(o(520), { cause: r });
                if (
                  ((a = qr(a, t)),
                  null === zs ? (zs = [a]) : zs.push(a),
                  4 !== ws && (ws = 2),
                  null === n)
                )
                  return !0;
                ((r = qr(r, t)), (t = n));
                do {
                  switch (t.tag) {
                    case 3:
                      return (
                        (t.flags |= 65536),
                        (e = l & -l),
                        (t.lanes |= e),
                        ka(t, (e = zi(t.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((n = t.type),
                        (a = t.stateNode),
                        !(
                          128 & t.flags ||
                          ("function" != typeof n.getDerivedStateFromError &&
                            (null === a ||
                              "function" != typeof a.componentDidCatch ||
                              (null !== Fs && Fs.has(a))))
                        ))
                      )
                        return (
                          (t.flags |= 65536),
                          (l &= -l),
                          (t.lanes |= l),
                          Pi((l = Ni(l)), e, t, r),
                          ka(t, l),
                          !1
                        );
                  }
                  t = t.return;
                } while (null !== t);
                return !1;
              })(e, l, n, t, hs)
            )
              return ((ws = 1), xi(e, qr(t, e.current)), void (ms = null));
          } catch (n) {
            if (null !== l) throw ((ms = l), n);
            return ((ws = 1), xi(e, qr(t, e.current)), void (ms = null));
          }
          32768 & n.flags
            ? (cl || 1 === r
                ? (e = !0)
                : bs || 536870912 & hs
                  ? (e = !1)
                  : ((ys = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = Ba.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              pc(n, e))
            : dc(n);
        }
        function dc(e) {
          var n = e;
          do {
            if (32768 & n.flags) return void pc(n, ys);
            e = n.return;
            var t = du(n.alternate, n, As);
            if (null !== t) return void (ms = t);
            if (null !== (n = n.sibling)) return void (ms = n);
            ms = n = e;
          } while (null !== n);
          0 === ws && (ws = 5);
        }
        function pc(e, n) {
          do {
            var t = pu(e.alternate, e);
            if (null !== t) return ((t.flags &= 32767), void (ms = t));
            if (
              (null !== (t = e.return) &&
                ((t.flags |= 32768),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
              !n && null !== (e = e.sibling))
            )
              return void (ms = e);
            ms = e = t;
          } while (null !== e);
          ((ws = 6), (ms = null));
        }
        function mc(e, n, t, r, l, a, i, u, s) {
          e.cancelPendingCommit = null;
          do {
            bc();
          } while (0 !== Ds);
          if (6 & ds) throw Error(o(327));
          if (null !== n) {
            if (n === e.current) throw Error(o(177));
            if (
              ((a = n.lanes | n.childLanes),
              (function (e, n, t, r, l, a) {
                var o = e.pendingLanes;
                ((e.pendingLanes = t),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= t),
                  (e.entangledLanes &= t),
                  (e.errorRecoveryDisabledLanes &= t),
                  (e.shellSuspendCounter = 0));
                var i = e.entanglements,
                  u = e.expirationTimes,
                  s = e.hiddenUpdates;
                for (t = o & ~t; 0 < t;) {
                  var c = 31 - be(t),
                    f = 1 << c;
                  ((i[c] = 0), (u[c] = -1));
                  var d = s[c];
                  if (null !== d)
                    for (s[c] = null, c = 0; c < d.length; c++) {
                      var p = d[c];
                      null !== p && (p.lane &= -536870913);
                    }
                  t &= ~f;
                }
                (0 !== r && Te(e, r, 0),
                  0 !== a &&
                    0 === l &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= a & ~(o & ~n)));
              })(e, t, (a |= zr), i, u, s),
              e === ps && ((ms = ps = null), (hs = 0)),
              (Ms = n),
              (Rs = e),
              (Is = t),
              (js = a),
              (Us = l),
              ($s = r),
              10256 & n.subtreeFlags || 10256 & n.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  re(fe, function () {
                    return (kc(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = !!(13878 & n.flags)),
              13878 & n.subtreeFlags || r)
            ) {
              ((r = L.T),
                (L.T = null),
                (l = O.p),
                (O.p = 2),
                (i = ds),
                (ds |= 4));
              try {
                !(function (e, n) {
                  if (((e = e.containerInfo), (mf = vd), rr((e = tr(e))))) {
                    if ("selectionStart" in e)
                      var t = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (t =
                            ((t = e.ownerDocument) && t.defaultView) || window)
                            .getSelection && t.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          t = r.anchorNode;
                          var l = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (t.nodeType, a.nodeType);
                          } catch (e) {
                            t = null;
                            break e;
                          }
                          var i = 0,
                            u = -1,
                            s = -1,
                            c = 0,
                            f = 0,
                            d = e,
                            p = null;
                          n: for (;;) {
                            for (
                              var m;
                              d !== t ||
                                (0 !== l && 3 !== d.nodeType) ||
                                (u = i + l),
                                d !== a ||
                                  (0 !== r && 3 !== d.nodeType) ||
                                  (s = i + r),
                                3 === d.nodeType && (i += d.nodeValue.length),
                                null !== (m = d.firstChild);
                            )
                              ((p = d), (d = m));
                            for (;;) {
                              if (d === e) break n;
                              if (
                                (p === t && ++c === l && (u = i),
                                p === a && ++f === r && (s = i),
                                null !== (m = d.nextSibling))
                              )
                                break;
                              p = (d = p).parentNode;
                            }
                            d = m;
                          }
                          t =
                            -1 === u || -1 === s ? null : { start: u, end: s };
                        } else t = null;
                      }
                    t = t || { start: 0, end: 0 };
                  } else t = null;
                  for (
                    hf = { focusedElem: e, selectionRange: t }, vd = !1, Tu = n;
                    null !== Tu;
                  )
                    if (
                      ((e = (n = Tu).child),
                      1028 & n.subtreeFlags && null !== e)
                    )
                      ((e.return = n), (Tu = e));
                    else
                      for (; null !== Tu;) {
                        switch (
                          ((a = (n = Tu).alternate), (e = n.flags), n.tag)
                        ) {
                          case 0:
                            if (
                              4 & e &&
                              null !==
                                (e =
                                  null !== (e = n.updateQueue)
                                    ? e.events
                                    : null)
                            )
                              for (t = 0; t < e.length; t++)
                                (l = e[t]).ref.impl = l.nextImpl;
                            break;
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (1024 & e && null !== a) {
                              ((e = void 0),
                                (t = n),
                                (l = a.memoizedProps),
                                (a = a.memoizedState),
                                (r = t.stateNode));
                              try {
                                var h = wi(t.type, l);
                                ((e = r.getSnapshotBeforeUpdate(h, a)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                wc(t, t.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (
                                9 ===
                                (t = (e = n.stateNode.containerInfo).nodeType)
                              )
                                Nf(e);
                              else if (1 === t)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    Nf(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(o(163));
                        }
                        if (null !== (e = n.sibling)) {
                          ((e.return = n.return), (Tu = e));
                          break;
                        }
                        Tu = n.return;
                      }
                })(e, n);
              } finally {
                ((ds = i), (O.p = l), (L.T = r));
              }
            }
            ((Ds = 1), hc(), gc(), vc());
          }
        }
        function hc() {
          if (1 === Ds) {
            Ds = 0;
            var e = Rs,
              n = Ms,
              t = !!(13878 & n.flags);
            if (13878 & n.subtreeFlags || t) {
              ((t = L.T), (L.T = null));
              var r = O.p;
              O.p = 2;
              var l = ds;
              ds |= 4;
              try {
                Vu(n, e);
                var a = hf,
                  o = tr(e.containerInfo),
                  i = a.focusedElem,
                  u = a.selectionRange;
                if (
                  o !== i &&
                  i &&
                  i.ownerDocument &&
                  nr(i.ownerDocument.documentElement, i)
                ) {
                  if (null !== u && rr(i)) {
                    var s = u.start,
                      c = u.end;
                    if ((void 0 === c && (c = s), "selectionStart" in i))
                      ((i.selectionStart = s),
                        (i.selectionEnd = Math.min(c, i.value.length)));
                    else {
                      var f = i.ownerDocument || document,
                        d = (f && f.defaultView) || window;
                      if (d.getSelection) {
                        var p = d.getSelection(),
                          m = i.textContent.length,
                          h = Math.min(u.start, m),
                          g = void 0 === u.end ? h : Math.min(u.end, m);
                        !p.extend && h > g && ((o = g), (g = h), (h = o));
                        var v = er(i, h),
                          y = er(i, g);
                        if (
                          v &&
                          y &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== v.node ||
                            p.anchorOffset !== v.offset ||
                            p.focusNode !== y.node ||
                            p.focusOffset !== y.offset)
                        ) {
                          var b = f.createRange();
                          (b.setStart(v.node, v.offset),
                            p.removeAllRanges(),
                            h > g
                              ? (p.addRange(b), p.extend(y.node, y.offset))
                              : (b.setEnd(y.node, y.offset), p.addRange(b)));
                        }
                      }
                    }
                  }
                  for (f = [], p = i; (p = p.parentNode);)
                    1 === p.nodeType &&
                      f.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for (
                    "function" == typeof i.focus && i.focus(), i = 0;
                    i < f.length;
                    i++
                  ) {
                    var k = f[i];
                    ((k.element.scrollLeft = k.left),
                      (k.element.scrollTop = k.top));
                  }
                }
                ((vd = !!mf), (hf = mf = null));
              } finally {
                ((ds = l), (O.p = r), (L.T = t));
              }
            }
            ((e.current = n), (Ds = 2));
          }
        }
        function gc() {
          if (2 === Ds) {
            Ds = 0;
            var e = Rs,
              n = Ms,
              t = !!(8772 & n.flags);
            if (8772 & n.subtreeFlags || t) {
              ((t = L.T), (L.T = null));
              var r = O.p;
              O.p = 2;
              var l = ds;
              ds |= 4;
              try {
                Lu(e, n.alternate, n);
              } finally {
                ((ds = l), (O.p = r), (L.T = t));
              }
            }
            Ds = 3;
          }
        }
        function vc() {
          if (4 === Ds || 3 === Ds) {
            ((Ds = 0), oe());
            var e = Rs,
              n = Ms,
              t = Is,
              r = $s;
            10256 & n.subtreeFlags || 10256 & n.flags
              ? (Ds = 5)
              : ((Ds = 0), (Ms = Rs = null), yc(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (
              (0 === l && (Fs = null),
              De(t),
              (n = n.stateNode),
              ve && "function" == typeof ve.onCommitFiberRoot)
            )
              try {
                ve.onCommitFiberRoot(ge, n, void 0, !(128 & ~n.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((n = L.T), (l = O.p), (O.p = 2), (L.T = null));
              try {
                for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                  var i = r[o];
                  a(i.value, { componentStack: i.stack });
                }
              } finally {
                ((L.T = n), (O.p = l));
              }
            }
            (3 & Is && bc(),
              Oc(e),
              (l = e.pendingLanes),
              261930 & t && 42 & l
                ? e === Vs
                  ? Hs++
                  : ((Hs = 0), (Vs = e))
                : (Hs = 0),
              Fc(0, !1));
          }
        }
        function yc(e, n) {
          0 === (e.pooledCacheLanes &= n) &&
            null != (n = e.pooledCache) &&
            ((e.pooledCache = null), Il(n));
        }
        function bc() {
          return (hc(), gc(), vc(), kc());
        }
        function kc() {
          if (5 !== Ds) return !1;
          var e = Rs,
            n = js;
          js = 0;
          var t = De(Is),
            r = L.T,
            l = O.p;
          try {
            ((O.p = 32 > t ? 32 : t), (L.T = null), (t = Us), (Us = null));
            var a = Rs,
              i = Is;
            if (((Ds = 0), (Ms = Rs = null), (Is = 0), 6 & ds))
              throw Error(o(331));
            var u = ds;
            if (
              ((ds |= 4),
              is(a.current),
              Ju(a, a.current, i, t),
              (ds = u),
              Fc(0, !1),
              ve && "function" == typeof ve.onPostCommitFiberRoot)
            )
              try {
                ve.onPostCommitFiberRoot(ge, a);
              } catch (e) {}
            return !0;
          } finally {
            ((O.p = l), (L.T = r), yc(e, n));
          }
        }
        function Ac(e, n, t) {
          ((n = qr(t, n)),
            null !== (e = ya(e, (n = zi(e.stateNode, n, 2)), 2)) &&
              (Be(e, 2), Oc(e)));
        }
        function wc(e, n, t) {
          if (3 === e.tag) Ac(e, e, t);
          else
            for (; null !== n;) {
              if (3 === n.tag) {
                Ac(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Fs || !Fs.has(r)))
                ) {
                  ((e = qr(t, e)),
                    null !== (r = ya(n, (t = Ni(2)), 2)) &&
                      (Pi(t, r, n, e), Be(r, 2), Oc(r)));
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ec(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var l = new Set();
            r.set(n, l);
          } else void 0 === (l = r.get(n)) && ((l = new Set()), r.set(n, l));
          l.has(t) ||
            ((ks = !0), l.add(t), (e = Sc.bind(null, e, n, t)), n.then(e, e));
        }
        function Sc(e, n, t) {
          var r = e.pingCache;
          (null !== r && r.delete(n),
            (e.pingedLanes |= e.suspendedLanes & t),
            (e.warmLanes &= ~t),
            ps === e &&
              (hs & t) === t &&
              (4 === ws ||
              (3 === ws && (62914560 & hs) === hs && 300 > ie() - Bs)
                ? !(2 & ds) && ec(e, 0)
                : (Cs |= t),
              _s === hs && (_s = 0)),
            Oc(e));
        }
        function Cc(e, n) {
          (0 === n && (n = Ne()), null !== (e = Tr(e, n)) && (Be(e, n), Oc(e)));
        }
        function xc(e) {
          var n = e.memoizedState,
            t = 0;
          (null !== n && (t = n.retryLane), Cc(e, t));
        }
        function _c(e, n) {
          var t = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var r = e.stateNode,
                l = e.memoizedState;
              null !== l && (t = l.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          (null !== r && r.delete(n), Cc(e, t));
        }
        var zc = null,
          Nc = null,
          Pc = !1,
          Bc = !1,
          Tc = !1,
          Lc = 0;
        function Oc(e) {
          (e !== Nc &&
            null === e.next &&
            (null === Nc ? (zc = Nc = e) : (Nc = Nc.next = e)),
            (Bc = !0),
            Pc ||
              ((Pc = !0),
              Sf(function () {
                6 & ds ? re(se, Dc) : Rc();
              })));
        }
        function Fc(e, n) {
          if (!Tc && Bc) {
            Tc = !0;
            do {
              for (var t = !1, r = zc; null !== r;) {
                if (!n)
                  if (0 !== e) {
                    var l = r.pendingLanes;
                    if (0 === l) var a = 0;
                    else {
                      var o = r.suspendedLanes,
                        i = r.pingedLanes;
                      ((a = (1 << (31 - be(42 | e) + 1)) - 1),
                        (a =
                          201326741 & (a &= l & ~(o & ~i))
                            ? (201326741 & a) | 1
                            : a
                              ? 2 | a
                              : 0));
                    }
                    0 !== a && ((t = !0), jc(r, a));
                  } else
                    ((a = hs),
                      !(
                        3 &
                        (a = xe(
                          r,
                          r === ps ? a : 0,
                          null !== r.cancelPendingCommit ||
                            -1 !== r.timeoutHandle,
                        ))
                      ) ||
                        _e(r, a) ||
                        ((t = !0), jc(r, a)));
                r = r.next;
              }
            } while (t);
            Tc = !1;
          }
        }
        function Dc() {
          Rc();
        }
        function Rc() {
          Bc = Pc = !1;
          var e,
            n = 0;
          0 !== Lc &&
            ((e = window.event) && "popstate" === e.type
              ? e !== kf && ((kf = e), 1)
              : ((kf = null), 0)) &&
            (n = Lc);
          for (var t = ie(), r = null, l = zc; null !== l;) {
            var a = l.next,
              o = Mc(l, t);
            (0 === o
              ? ((l.next = null),
                null === r ? (zc = a) : (r.next = a),
                null === a && (Nc = r))
              : ((r = l), (0 !== n || 3 & o) && (Bc = !0)),
              (l = a));
          }
          ((0 !== Ds && 5 !== Ds) || Fc(n, !1), 0 !== Lc && (Lc = 0));
        }
        function Mc(e, n) {
          for (
            var t = e.suspendedLanes,
              r = e.pingedLanes,
              l = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;
          ) {
            var o = 31 - be(a),
              i = 1 << o,
              u = l[o];
            (-1 === u
              ? (0 !== (i & t) && 0 === (i & r)) || (l[o] = ze(i, n))
              : u <= n && (e.expiredLanes |= i),
              (a &= ~i));
          }
          if (
            ((t = hs),
            (t = xe(
              e,
              e === (n = ps) ? t : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === t ||
              (e === n && (2 === gs || 9 === gs)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && le(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (!(3 & t) || _e(e, t)) {
            if ((n = t & -t) === e.callbackPriority) return n;
            switch ((null !== r && le(r), De(t))) {
              case 2:
              case 8:
                t = ce;
                break;
              case 32:
              default:
                t = fe;
                break;
              case 268435456:
                t = pe;
            }
            return (
              (r = Ic.bind(null, e)),
              (t = re(t, r)),
              (e.callbackPriority = n),
              (e.callbackNode = t),
              n
            );
          }
          return (
            null !== r && null !== r && le(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Ic(e, n) {
          if (0 !== Ds && 5 !== Ds)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var t = e.callbackNode;
          if (bc() && e.callbackNode !== t) return null;
          var r = hs;
          return 0 ===
            (r = xe(
              e,
              e === ps ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            ))
            ? null
            : (Xs(e, r, n),
              Mc(e, ie()),
              null != e.callbackNode && e.callbackNode === t
                ? Ic.bind(null, e)
                : null);
        }
        function jc(e, n) {
          if (bc()) return null;
          Xs(e, n, !0);
        }
        function Uc() {
          if (0 === Lc) {
            var e = $l;
            (0 === e && ((e = we), !(261888 & (we <<= 1)) && (we = 256)),
              (Lc = e));
          }
          return Lc;
        }
        function $c(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
              ? e
              : Bn("" + e);
        }
        function Hc(e, n) {
          var t = n.ownerDocument.createElement("input");
          return (
            (t.name = n.name),
            (t.value = n.value),
            e.id && t.setAttribute("form", e.id),
            n.parentNode.insertBefore(t, n),
            (e = new FormData(e)),
            t.parentNode.removeChild(t),
            e
          );
        }
        for (var Vc = 0; Vc < Er.length; Vc++) {
          var Qc = Er[Vc];
          Sr(Qc.toLowerCase(), "on" + (Qc[0].toUpperCase() + Qc.slice(1)));
        }
        (Sr(hr, "onAnimationEnd"),
          Sr(gr, "onAnimationIteration"),
          Sr(vr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(yr, "onTransitionRun"),
          Sr(br, "onTransitionStart"),
          Sr(kr, "onTransitionCancel"),
          Sr(Ar, "onTransitionEnd"),
          rn("onMouseEnter", ["mouseout", "mouseover"]),
          rn("onMouseLeave", ["mouseout", "mouseover"]),
          rn("onPointerEnter", ["pointerout", "pointerover"]),
          rn("onPointerLeave", ["pointerout", "pointerover"]),
          tn(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          tn(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          tn("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          tn(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          tn(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          tn(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var Wc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          qc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Wc),
          );
        function Xc(e, n) {
          n = !!(4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              l = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== a && l.isPropagationStopped()))
                    break e;
                  ((a = i), (l.currentTarget = s));
                  try {
                    a(l);
                  } catch (e) {
                    Cr(e);
                  }
                  ((l.currentTarget = null), (a = u));
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== a && l.isPropagationStopped())
                  )
                    break e;
                  ((a = i), (l.currentTarget = s));
                  try {
                    a(l);
                  } catch (e) {
                    Cr(e);
                  }
                  ((l.currentTarget = null), (a = u));
                }
            }
          }
        }
        function Kc(e, n) {
          var t = n[He];
          void 0 === t && (t = n[He] = new Set());
          var r = e + "__bubble";
          t.has(r) || (Jc(n, e, 2, !1), t.add(r));
        }
        function Yc(e, n, t) {
          var r = 0;
          (n && (r |= 4), Jc(t, e, r, n));
        }
        var Gc = "_reactListening" + Math.random().toString(36).slice(2);
        function Zc(e) {
          if (!e[Gc]) {
            ((e[Gc] = !0),
              en.forEach(function (n) {
                "selectionchange" !== n &&
                  (qc.has(n) || Yc(n, !1, e), Yc(n, !0, e));
              }));
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Gc] || ((n[Gc] = !0), Yc("selectionchange", !1, n));
          }
        }
        function Jc(e, n, t, r) {
          switch (Sd(n)) {
            case 2:
              var l = yd;
              break;
            case 8:
              l = bd;
              break;
            default:
              l = kd;
          }
          ((t = l.bind(null, n, t, e)),
            (l = void 0),
            !$n ||
              ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
              (l = !0),
            r
              ? void 0 !== l
                ? e.addEventListener(n, t, { capture: !0, passive: l })
                : e.addEventListener(n, t, !0)
              : void 0 !== l
                ? e.addEventListener(n, t, { passive: l })
                : e.addEventListener(n, t, !1));
        }
        function ef(e, n, t, r, l) {
          var a = r;
          if (!(1 & n || 2 & n || null === r))
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === l) break;
                if (4 === o)
                  for (o = r.return; null !== o;) {
                    var s = o.tag;
                    if ((3 === s || 4 === s) && o.stateNode.containerInfo === l)
                      return;
                    o = o.return;
                  }
                for (; null !== u;) {
                  if (null === (o = Ke(u))) return;
                  if (5 === (s = o.tag) || 6 === s || 26 === s || 27 === s) {
                    r = a = o;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          In(function () {
            var r = a,
              l = On(t),
              o = [];
            e: {
              var u = wr.get(e);
              if (void 0 !== u) {
                var s = tt,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Xn(t)) break e;
                  case "keydown":
                  case "keyup":
                    s = vt;
                    break;
                  case "focusin":
                    ((c = "focus"), (s = ut));
                    break;
                  case "focusout":
                    ((c = "blur"), (s = ut));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = ut;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = ot;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = it;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = bt;
                    break;
                  case hr:
                  case gr:
                  case vr:
                    s = st;
                    break;
                  case Ar:
                    s = kt;
                    break;
                  case "scroll":
                  case "scrollend":
                    s = lt;
                    break;
                  case "wheel":
                    s = At;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = ct;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = yt;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    s = wt;
                }
                var f = !!(4 & n),
                  d = !f && ("scroll" === e || "scrollend" === e),
                  p = f ? (null !== u ? u + "Capture" : null) : u;
                f = [];
                for (var m, h = r; null !== h;) {
                  var g = h;
                  if (
                    ((m = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === m ||
                      null === p ||
                      (null != (g = jn(h, p)) && f.push(nf(h, g, m))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < f.length &&
                  ((u = new s(u, c, null, t, l)),
                  o.push({ event: u, listeners: f }));
              }
            }
            if (!(7 & n)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  t === Ln ||
                  !(c = t.relatedTarget || t.fromElement) ||
                  (!Ke(c) && !c[$e])) &&
                  (s || u) &&
                  ((u =
                    l.window === l
                      ? l
                      : (u = l.ownerDocument)
                        ? u.defaultView || u.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = t.relatedTarget || t.toElement)
                          ? Ke(c)
                          : null) &&
                        ((d = i(c)),
                        (f = c.tag),
                        c !== d || (5 !== f && 27 !== f && 6 !== f)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((f = ot),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((f = yt),
                    (g = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? u : Ge(s)),
                  (m = null == c ? u : Ge(c)),
                  ((u = new f(g, h + "leave", s, t, l)).target = d),
                  (u.relatedTarget = m),
                  (g = null),
                  Ke(l) === r &&
                    (((f = new f(p, h + "enter", c, t, l)).target = m),
                    (f.relatedTarget = d),
                    (g = f)),
                  (d = g),
                  s && c)
                )
                  e: {
                    for (f = rf, h = c, m = 0, g = p = s; g; g = f(g)) m++;
                    g = 0;
                    for (var v = h; v; v = f(v)) g++;
                    for (; 0 < m - g;) ((p = f(p)), m--);
                    for (; 0 < g - m;) ((h = f(h)), g--);
                    for (; m--;) {
                      if (p === h || (null !== h && p === h.alternate)) {
                        f = p;
                        break e;
                      }
                      ((p = f(p)), (h = f(h)));
                    }
                    f = null;
                  }
                else f = null;
                (null !== s && lf(o, u, s, f, !1),
                  null !== c && null !== d && lf(o, d, c, f, !0));
              }
              if (
                "select" ===
                  (s =
                    (u = r ? Ge(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === s && "file" === u.type)
              )
                var y = jt;
              else if (Ot(u))
                if (Ut) y = Yt;
                else {
                  y = Xt;
                  var b = qt;
                }
              else
                !(s = u.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== u.type && "radio" !== u.type)
                  ? r && zn(r.elementType) && (y = jt)
                  : (y = Kt);
              switch (
                (y && (y = y(e, r))
                  ? Ft(o, y, t, l)
                  : (b && b(e, u, r),
                    "focusout" === e &&
                      r &&
                      "number" === u.type &&
                      null != r.memoizedProps.value &&
                      kn(u, "number", u.value)),
                (b = r ? Ge(r) : window),
                e)
              ) {
                case "focusin":
                  (Ot(b) || "true" === b.contentEditable) &&
                    ((ar = b), (or = r), (ir = null));
                  break;
                case "focusout":
                  ir = or = ar = null;
                  break;
                case "mousedown":
                  ur = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((ur = !1), sr(o, t, l));
                  break;
                case "selectionchange":
                  if (lr) break;
                case "keydown":
                case "keyup":
                  sr(o, t, l);
              }
              var k;
              if (St)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var A = "onCompositionStart";
                      break e;
                    case "compositionend":
                      A = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      A = "onCompositionUpdate";
                      break e;
                  }
                  A = void 0;
                }
              else
                Tt
                  ? Pt(e, t) && (A = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === t.keyCode &&
                    (A = "onCompositionStart");
              (A &&
                (_t &&
                  "ko" !== t.locale &&
                  (Tt || "onCompositionStart" !== A
                    ? "onCompositionEnd" === A && Tt && (k = qn())
                    : ((Qn = "value" in (Vn = l) ? Vn.value : Vn.textContent),
                      (Tt = !0))),
                0 < (b = tf(r, A)).length &&
                  ((A = new ft(A, e, null, t, l)),
                  o.push({ event: A, listeners: b }),
                  (k || null !== (k = Bt(t))) && (A.data = k))),
                (k = xt
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return Bt(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((Nt = !0), zt);
                        case "textInput":
                          return (e = n.data) === zt && Nt ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Tt)
                        return "compositionend" === e || (!St && Pt(e, n))
                          ? ((e = qn()), (Wn = Qn = Vn = null), (Tt = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return _t && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (A = tf(r, "onBeforeInput")).length &&
                  ((b = new ft("onBeforeInput", "beforeinput", null, t, l)),
                  o.push({ event: b, listeners: A }),
                  (b.data = k)),
                (function (e, n, t, r, l) {
                  if ("submit" === n && t && t.stateNode === l) {
                    var a = $c((l[Ue] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (n = (n = o[Ue] || null)
                          ? $c(n.formAction)
                          : o.getAttribute("formAction")) &&
                      ((a = n), (o = null));
                    var i = new tt("action", "action", null, r, l);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Lc) {
                                var e = o ? Hc(l, o) : new FormData(l);
                                ei(
                                  t,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: l.method,
                                    action: a,
                                  },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" == typeof a &&
                                (i.preventDefault(),
                                (e = o ? Hc(l, o) : new FormData(l)),
                                ei(
                                  t,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: l.method,
                                    action: a,
                                  },
                                  a,
                                  e,
                                ));
                          },
                          currentTarget: l,
                        },
                      ],
                    });
                  }
                })(o, e, r, t, l));
            }
            Xc(o, n);
          });
        }
        function nf(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function tf(e, n) {
          for (var t = n + "Capture", r = []; null !== e;) {
            var l = e,
              a = l.stateNode;
            if (
              ((5 !== (l = l.tag) && 26 !== l && 27 !== l) ||
                null === a ||
                (null != (l = jn(e, t)) && r.unshift(nf(e, l, a)),
                null != (l = jn(e, n)) && r.push(nf(e, l, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function rf(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function lf(e, n, t, r, l) {
          for (var a = n._reactName, o = []; null !== t && t !== r;) {
            var i = t,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              l
                ? null != (s = jn(t, a)) && o.unshift(nf(t, s, u))
                : l || (null != (s = jn(t, a)) && o.push(nf(t, s, u)))),
              (t = t.return));
          }
          0 !== o.length && e.push({ event: n, listeners: o });
        }
        var af = /\r\n?/g,
          of = /\u0000|\uFFFD/g;
        function uf(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(af, "\n")
            .replace(of, "");
        }
        function sf(e, n) {
          return ((n = uf(n)), uf(e) === n);
        }
        function cf(e, n, t, r, l, a) {
          switch (t) {
            case "children":
              "string" == typeof r
                ? "body" === n || ("textarea" === n && "" === r) || Sn(e, r)
                : ("number" == typeof r || "bigint" == typeof r) &&
                  "body" !== n &&
                  Sn(e, "" + r);
              break;
            case "className":
              sn(e, "class", r);
              break;
            case "tabIndex":
              sn(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              sn(e, t, r);
              break;
            case "style":
              _n(e, r, a);
              break;
            case "data":
              if ("object" !== n) {
                sn(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== n || "href" !== t)) {
                e.removeAttribute(t);
                break;
              }
              if (
                null == r ||
                "function" == typeof r ||
                "symbol" == typeof r ||
                "boolean" == typeof r
              ) {
                e.removeAttribute(t);
                break;
              }
              ((r = Bn("" + r)), e.setAttribute(t, r));
              break;
            case "action":
            case "formAction":
              if ("function" == typeof r) {
                e.setAttribute(
                  t,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ("function" == typeof a &&
                  ("formAction" === t
                    ? ("input" !== n && cf(e, n, "name", l.name, l, null),
                      cf(e, n, "formEncType", l.formEncType, l, null),
                      cf(e, n, "formMethod", l.formMethod, l, null),
                      cf(e, n, "formTarget", l.formTarget, l, null))
                    : (cf(e, n, "encType", l.encType, l, null),
                      cf(e, n, "method", l.method, l, null),
                      cf(e, n, "target", l.target, l, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
              ) {
                e.removeAttribute(t);
                break;
              }
              ((r = Bn("" + r)), e.setAttribute(t, r));
              break;
            case "onClick":
              null != r && (e.onclick = Tn);
              break;
            case "onScroll":
              null != r && Kc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Kc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (t = r.__html)) {
                  if (null != l.children) throw Error(o(60));
                  e.innerHTML = t;
                }
              }
              break;
            case "multiple":
              e.multiple = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "muted":
              e.muted = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" == typeof r ||
                "boolean" == typeof r ||
                "symbol" == typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              ((t = Bn("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  t,
                ));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(t, "" + r)
                : e.removeAttribute(t);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(t, "")
                : e.removeAttribute(t);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(t, "")
                : !1 !== r &&
                    null != r &&
                    "function" != typeof r &&
                    "symbol" != typeof r
                  ? e.setAttribute(t, r)
                  : e.removeAttribute(t);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" != typeof r &&
              "symbol" != typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(t, r)
                : e.removeAttribute(t);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" == typeof r ||
              "symbol" == typeof r ||
              isNaN(r)
                ? e.removeAttribute(t)
                : e.setAttribute(t, r);
              break;
            case "popover":
              (Kc("beforetoggle", e), Kc("toggle", e), un(e, "popover", r));
              break;
            case "xlinkActuate":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              cn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              cn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              cn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              cn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              un(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < t.length) ||
                ("o" !== t[0] && "O" !== t[0]) ||
                ("n" !== t[1] && "N" !== t[1])) &&
                un(e, (t = Nn.get(t) || t), r);
          }
        }
        function ff(e, n, t, r, l, a) {
          switch (t) {
            case "style":
              _n(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (t = r.__html)) {
                  if (null != l.children) throw Error(o(60));
                  e.innerHTML = t;
                }
              }
              break;
            case "children":
              "string" == typeof r
                ? Sn(e, r)
                : ("number" == typeof r || "bigint" == typeof r) &&
                  Sn(e, "" + r);
              break;
            case "onScroll":
              null != r && Kc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Kc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Tn);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              nn.hasOwnProperty(t) ||
                ("o" !== t[0] ||
                "n" !== t[1] ||
                ((l = t.endsWith("Capture")),
                (n = t.slice(2, l ? t.length - 7 : void 0)),
                "function" ==
                  typeof (a = null != (a = e[Ue] || null) ? a[t] : null) &&
                  e.removeEventListener(n, a, l),
                "function" != typeof r)
                  ? t in e
                    ? (e[t] = r)
                    : !0 === r
                      ? e.setAttribute(t, "")
                      : un(e, t, r)
                  : ("function" != typeof a &&
                      null !== a &&
                      (t in e
                        ? (e[t] = null)
                        : e.hasAttribute(t) && e.removeAttribute(t)),
                    e.addEventListener(n, r, l)));
          }
        }
        function df(e, n, t) {
          switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (Kc("error", e), Kc("load", e));
              var r,
                l = !1,
                a = !1;
              for (r in t)
                if (t.hasOwnProperty(r)) {
                  var i = t[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        l = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, n));
                      default:
                        cf(e, n, r, i, t, null);
                    }
                }
              return (
                a && cf(e, n, "srcSet", t.srcSet, t, null),
                void (l && cf(e, n, "src", t.src, t, null))
              );
            case "input":
              Kc("invalid", e);
              var u = (r = i = a = null),
                s = null,
                c = null;
              for (l in t)
                if (t.hasOwnProperty(l)) {
                  var f = t[l];
                  if (null != f)
                    switch (l) {
                      case "name":
                        a = f;
                        break;
                      case "type":
                        i = f;
                        break;
                      case "checked":
                        s = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        u = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(o(137, n));
                        break;
                      default:
                        cf(e, n, l, f, t, null);
                    }
                }
              return void bn(e, r, u, s, c, i, a, !1);
            case "select":
              for (a in (Kc("invalid", e), (l = i = r = null), t))
                if (t.hasOwnProperty(a) && null != (u = t[a]))
                  switch (a) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      l = u;
                    default:
                      cf(e, n, a, u, t, null);
                  }
              return (
                (n = r),
                (t = i),
                (e.multiple = !!l),
                void (null != n
                  ? An(e, !!l, n, !1)
                  : null != t && An(e, !!l, t, !0))
              );
            case "textarea":
              for (i in (Kc("invalid", e), (r = a = l = null), t))
                if (t.hasOwnProperty(i) && null != (u = t[i]))
                  switch (i) {
                    case "value":
                      l = u;
                      break;
                    case "defaultValue":
                      a = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(o(91));
                      break;
                    default:
                      cf(e, n, i, u, t, null);
                  }
              return void En(e, l, a, r);
            case "option":
              for (s in t)
                t.hasOwnProperty(s) &&
                  null != (l = t[s]) &&
                  ("selected" === s
                    ? (e.selected =
                        l && "function" != typeof l && "symbol" != typeof l)
                    : cf(e, n, s, l, t, null));
              return;
            case "dialog":
              (Kc("beforetoggle", e),
                Kc("toggle", e),
                Kc("cancel", e),
                Kc("close", e));
              break;
            case "iframe":
            case "object":
              Kc("load", e);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Wc.length; l++) Kc(Wc[l], e);
              break;
            case "image":
              (Kc("error", e), Kc("load", e));
              break;
            case "details":
              Kc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Kc("error", e), Kc("load", e));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in t)
                if (t.hasOwnProperty(c) && null != (l = t[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, n));
                    default:
                      cf(e, n, c, l, t, null);
                  }
              return;
            default:
              if (zn(n)) {
                for (f in t)
                  t.hasOwnProperty(f) &&
                    void 0 !== (l = t[f]) &&
                    ff(e, n, f, l, t, void 0);
                return;
              }
          }
          for (u in t)
            t.hasOwnProperty(u) &&
              null != (l = t[u]) &&
              cf(e, n, u, l, t, null);
        }
        function pf(e) {
          switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        var mf = null,
          hf = null;
        function gf(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function vf(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function yf(e, n) {
          if (0 === e)
            switch (n) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === n ? 0 : e;
        }
        function bf(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof n.children ||
            "number" == typeof n.children ||
            "bigint" == typeof n.children ||
            ("object" == typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var kf = null,
          Af = "function" == typeof setTimeout ? setTimeout : void 0,
          wf = "function" == typeof clearTimeout ? clearTimeout : void 0,
          Ef = "function" == typeof Promise ? Promise : void 0,
          Sf =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== Ef
                ? function (e) {
                    return Ef.resolve(null).then(e).catch(Cf);
                  }
                : Af;
        function Cf(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function xf(e) {
          return "head" === e;
        }
        function _f(e, n) {
          var t = n,
            r = 0;
          do {
            var l = t.nextSibling;
            if ((e.removeChild(t), l && 8 === l.nodeType))
              if ("/$" === (t = l.data) || "/&" === t) {
                if (0 === r) return (e.removeChild(l), void $d(n));
                r--;
              } else if (
                "$" === t ||
                "$?" === t ||
                "$~" === t ||
                "$!" === t ||
                "&" === t
              )
                r++;
              else if ("html" === t) Mf(e.ownerDocument.documentElement);
              else if ("head" === t) {
                Mf((t = e.ownerDocument.head));
                for (var a = t.firstChild; a;) {
                  var o = a.nextSibling,
                    i = a.nodeName;
                  (a[qe] ||
                    "SCRIPT" === i ||
                    "STYLE" === i ||
                    ("LINK" === i && "stylesheet" === a.rel.toLowerCase()) ||
                    t.removeChild(a),
                    (a = o));
                }
              } else "body" === t && Mf(e.ownerDocument.body);
            t = l;
          } while (t);
          $d(n);
        }
        function zf(e, n) {
          var t = e;
          e = 0;
          do {
            var r = t.nextSibling;
            if (
              (1 === t.nodeType
                ? n
                  ? ((t._stashedDisplay = t.style.display),
                    (t.style.display = "none"))
                  : ((t.style.display = t._stashedDisplay || ""),
                    "" === t.getAttribute("style") &&
                      t.removeAttribute("style"))
                : 3 === t.nodeType &&
                  (n
                    ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
                    : (t.nodeValue = t._stashedText || "")),
              r && 8 === r.nodeType)
            )
              if ("/$" === (t = r.data)) {
                if (0 === e) break;
                e--;
              } else
                ("$" !== t && "$?" !== t && "$~" !== t && "$!" !== t) || e++;
            t = r;
          } while (t);
        }
        function Nf(e) {
          var n = e.firstChild;
          for (n && 10 === n.nodeType && (n = n.nextSibling); n;) {
            var t = n;
            switch (((n = n.nextSibling), t.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (Nf(t), Xe(t));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === t.rel.toLowerCase()) continue;
            }
            e.removeChild(t);
          }
        }
        function Pf(e, n) {
          for (; 8 !== e.nodeType;) {
            if (
              (1 !== e.nodeType ||
                "INPUT" !== e.nodeName ||
                "hidden" !== e.type) &&
              !n
            )
              return null;
            if (null === (e = Lf(e.nextSibling))) return null;
          }
          return e;
        }
        function Bf(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Tf(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
          );
        }
        function Lf(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if (
                "$" === (n = e.data) ||
                "$!" === n ||
                "$?" === n ||
                "$~" === n ||
                "&" === n ||
                "F!" === n ||
                "F" === n
              )
                break;
              if ("/$" === n || "/&" === n) return null;
            }
          }
          return e;
        }
        var Of = null;
        function Ff(e) {
          e = e.nextSibling;
          for (var n = 0; e;) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("/$" === t || "/&" === t) {
                if (0 === n) return Lf(e.nextSibling);
                n--;
              } else
                ("$" !== t &&
                  "$!" !== t &&
                  "$?" !== t &&
                  "$~" !== t &&
                  "&" !== t) ||
                  n++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Df(e) {
          e = e.previousSibling;
          for (var n = 0; e;) {
            if (8 === e.nodeType) {
              var t = e.data;
              if (
                "$" === t ||
                "$!" === t ||
                "$?" === t ||
                "$~" === t ||
                "&" === t
              ) {
                if (0 === n) return e;
                n--;
              } else ("/$" !== t && "/&" !== t) || n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function Rf(e, n, t) {
          switch (((n = gf(t)), e)) {
            case "html":
              if (!(e = n.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = n.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = n.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        function Mf(e) {
          for (var n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
          Xe(e);
        }
        var If = new Map(),
          jf = new Set();
        function Uf(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var $f = O.d;
        O.d = {
          f: function () {
            var e = $f.f(),
              n = Zs();
            return e || n;
          },
          r: function (e) {
            var n = Ye(e);
            null !== n && 5 === n.tag && "form" === n.type ? ti(n) : $f.r(e);
          },
          D: function (e) {
            ($f.D(e), Vf("dns-prefetch", e, null));
          },
          C: function (e, n) {
            ($f.C(e, n), Vf("preconnect", e, n));
          },
          L: function (e, n, t) {
            $f.L(e, n, t);
            var r = Hf;
            if (r && e && n) {
              var l = 'link[rel="preload"][as="' + vn(n) + '"]';
              "image" === n && t && t.imageSrcSet
                ? ((l += '[imagesrcset="' + vn(t.imageSrcSet) + '"]'),
                  "string" == typeof t.imageSizes &&
                    (l += '[imagesizes="' + vn(t.imageSizes) + '"]'))
                : (l += '[href="' + vn(e) + '"]');
              var a = l;
              switch (n) {
                case "style":
                  a = Wf(e);
                  break;
                case "script":
                  a = Kf(e);
              }
              If.has(a) ||
                ((e = d(
                  {
                    rel: "preload",
                    href: "image" === n && t && t.imageSrcSet ? void 0 : e,
                    as: n,
                  },
                  t,
                )),
                If.set(a, e),
                null !== r.querySelector(l) ||
                  ("style" === n && r.querySelector(qf(a))) ||
                  ("script" === n && r.querySelector(Yf(a))) ||
                  (df((n = r.createElement("link")), "link", e),
                  Je(n),
                  r.head.appendChild(n)));
            }
          },
          m: function (e, n) {
            $f.m(e, n);
            var t = Hf;
            if (t && e) {
              var r = n && "string" == typeof n.as ? n.as : "script",
                l =
                  'link[rel="modulepreload"][as="' +
                  vn(r) +
                  '"][href="' +
                  vn(e) +
                  '"]',
                a = l;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = Kf(e);
              }
              if (
                !If.has(a) &&
                ((e = d({ rel: "modulepreload", href: e }, n)),
                If.set(a, e),
                null === t.querySelector(l))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (t.querySelector(Yf(a))) return;
                }
                (df((r = t.createElement("link")), "link", e),
                  Je(r),
                  t.head.appendChild(r));
              }
            }
          },
          X: function (e, n) {
            $f.X(e, n);
            var t = Hf;
            if (t && e) {
              var r = Ze(t).hoistableScripts,
                l = Kf(e),
                a = r.get(l);
              a ||
                ((a = t.querySelector(Yf(l))) ||
                  ((e = d({ src: e, async: !0 }, n)),
                  (n = If.get(l)) && ed(e, n),
                  Je((a = t.createElement("script"))),
                  df(a, "link", e),
                  t.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(l, a));
            }
          },
          S: function (e, n, t) {
            $f.S(e, n, t);
            var r = Hf;
            if (r && e) {
              var l = Ze(r).hoistableStyles,
                a = Wf(e);
              n = n || "default";
              var o = l.get(a);
              if (!o) {
                var i = { loading: 0, preload: null };
                if ((o = r.querySelector(qf(a)))) i.loading = 5;
                else {
                  ((e = d(
                    { rel: "stylesheet", href: e, "data-precedence": n },
                    t,
                  )),
                    (t = If.get(a)) && Jf(e, t));
                  var u = (o = r.createElement("link"));
                  (Je(u),
                    df(u, "link", e),
                    (u._p = new Promise(function (e, n) {
                      ((u.onload = e), (u.onerror = n));
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    Zf(o, n, r));
                }
                ((o = { type: "stylesheet", instance: o, count: 1, state: i }),
                  l.set(a, o));
              }
            }
          },
          M: function (e, n) {
            $f.M(e, n);
            var t = Hf;
            if (t && e) {
              var r = Ze(t).hoistableScripts,
                l = Kf(e),
                a = r.get(l);
              a ||
                ((a = t.querySelector(Yf(l))) ||
                  ((e = d({ src: e, async: !0, type: "module" }, n)),
                  (n = If.get(l)) && ed(e, n),
                  Je((a = t.createElement("script"))),
                  df(a, "link", e),
                  t.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(l, a));
            }
          },
        };
        var Hf = "undefined" == typeof document ? null : document;
        function Vf(e, n, t) {
          var r = Hf;
          if (r && "string" == typeof n && n) {
            var l = vn(n);
            ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
              "string" == typeof t && (l += '[crossorigin="' + t + '"]'),
              jf.has(l) ||
                (jf.add(l),
                (e = { rel: e, crossOrigin: t, href: n }),
                null === r.querySelector(l) &&
                  (df((n = r.createElement("link")), "link", e),
                  Je(n),
                  r.head.appendChild(n))));
          }
        }
        function Qf(e, n, t, r) {
          var l,
            a,
            i,
            u,
            s = (s = Q.current) ? Uf(s) : null;
          if (!s) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" == typeof t.precedence &&
                "string" == typeof t.href
                ? ((n = Wf(t.href)),
                  (r = (t = Ze(s).hoistableStyles).get(n)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    t.set(n, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === t.rel &&
                "string" == typeof t.href &&
                "string" == typeof t.precedence
              ) {
                e = Wf(t.href);
                var c = Ze(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(qf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    If.has(e) ||
                      ((t = {
                        rel: "preload",
                        as: "style",
                        href: t.href,
                        crossOrigin: t.crossOrigin,
                        integrity: t.integrity,
                        media: t.media,
                        hrefLang: t.hrefLang,
                        referrerPolicy: t.referrerPolicy,
                      }),
                      If.set(e, t),
                      c ||
                        ((l = s),
                        (a = e),
                        (i = t),
                        (u = f.state),
                        l.querySelector(
                          'link[rel="preload"][as="style"][' + a + "]",
                        )
                          ? (u.loading = 1)
                          : ((a = l.createElement("link")),
                            (u.preload = a),
                            a.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            a.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            df(a, "link", i),
                            Je(a),
                            l.head.appendChild(a))))),
                  n && null === r)
                )
                  throw Error(o(528, ""));
                return f;
              }
              if (n && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (n = t.async),
                "string" == typeof (t = t.src) &&
                n &&
                "function" != typeof n &&
                "symbol" != typeof n
                  ? ((n = Kf(t)),
                    (r = (t = Ze(s).hoistableScripts).get(n)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      t.set(n, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function Wf(e) {
          return 'href="' + vn(e) + '"';
        }
        function qf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Xf(e) {
          return d({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Kf(e) {
          return '[src="' + vn(e) + '"]';
        }
        function Yf(e) {
          return "script[async]" + e;
        }
        function Gf(e, n, t) {
          if ((n.count++, null === n.instance))
            switch (n.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + vn(t.href) + '"]',
                );
                if (r) return ((n.instance = r), Je(r), r);
                var l = d({}, t, {
                  "data-href": t.href,
                  "data-precedence": t.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Je((r = (e.ownerDocument || e).createElement("style"))),
                  df(r, "style", l),
                  Zf(r, t.precedence, e),
                  (n.instance = r)
                );
              case "stylesheet":
                l = Wf(t.href);
                var a = e.querySelector(qf(l));
                if (a)
                  return ((n.state.loading |= 4), (n.instance = a), Je(a), a);
                ((r = Xf(t)),
                  (l = If.get(l)) && Jf(r, l),
                  Je((a = (e.ownerDocument || e).createElement("link"))));
                var i = a;
                return (
                  (i._p = new Promise(function (e, n) {
                    ((i.onload = e), (i.onerror = n));
                  })),
                  df(a, "link", r),
                  (n.state.loading |= 4),
                  Zf(a, t.precedence, e),
                  (n.instance = a)
                );
              case "script":
                return (
                  (a = Kf(t.src)),
                  (l = e.querySelector(Yf(a)))
                    ? ((n.instance = l), Je(l), l)
                    : ((r = t),
                      (l = If.get(a)) && ed((r = d({}, t)), l),
                      Je(
                        (l = (e = e.ownerDocument || e).createElement(
                          "script",
                        )),
                      ),
                      df(l, "link", r),
                      e.head.appendChild(l),
                      (n.instance = l))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, n.type));
            }
          else
            "stylesheet" === n.type &&
              !(4 & n.state.loading) &&
              ((r = n.instance),
              (n.state.loading |= 4),
              Zf(r, t.precedence, e));
          return n.instance;
        }
        function Zf(e, n, t) {
          for (
            var r = t.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              l = r.length ? r[r.length - 1] : null,
              a = l,
              o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o];
            if (i.dataset.precedence === n) a = i;
            else if (a !== l) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (n = 9 === t.nodeType ? t.head : t).insertBefore(e, n.firstChild);
        }
        function Jf(e, n) {
          (null == e.crossOrigin && (e.crossOrigin = n.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = n.referrerPolicy),
            null == e.title && (e.title = n.title));
        }
        function ed(e, n) {
          (null == e.crossOrigin && (e.crossOrigin = n.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = n.referrerPolicy),
            null == e.integrity && (e.integrity = n.integrity));
        }
        var nd = null;
        function td(e, n, t) {
          if (null === nd) {
            var r = new Map(),
              l = (nd = new Map());
            l.set(t, r);
          } else (r = (l = nd).get(t)) || ((r = new Map()), l.set(t, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), t = t.getElementsByTagName(e), l = 0;
            l < t.length;
            l++
          ) {
            var a = t[l];
            if (
              !(
                a[qe] ||
                a[je] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var o = a.getAttribute(n) || "";
              o = e + o;
              var i = r.get(o);
              i ? i.push(a) : r.set(o, [a]);
            }
          }
          return r;
        }
        function rd(e, n, t) {
          (e = e.ownerDocument || e).head.insertBefore(
            t,
            "title" === n ? e.querySelector("head > title") : null,
          );
        }
        function ld(e) {
          return !!("stylesheet" !== e.type || 3 & e.state.loading);
        }
        var ad = 0;
        function od() {
          if (
            (this.count--,
            0 === this.count && (0 === this.imgCount || !this.waitingForImages))
          )
            if (this.stylesheets) ud(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var id = null;
        function ud(e, n) {
          ((e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (id = new Map()),
              n.forEach(sd, e),
              (id = null),
              od.call(e)));
        }
        function sd(e, n) {
          if (!(4 & n.state.loading)) {
            var t = id.get(e);
            if (t) var r = t.get(null);
            else {
              ((t = new Map()), id.set(e, t));
              for (
                var l = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]",
                  ),
                  a = 0;
                a < l.length;
                a++
              ) {
                var o = l[a];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (t.set(o.dataset.precedence, o), (r = o));
              }
              r && t.set(null, r);
            }
            ((o = (l = n.instance).getAttribute("data-precedence")),
              (a = t.get(o) || r) === r && t.set(null, l),
              t.set(o, l),
              this.count++,
              (r = od.bind(this)),
              l.addEventListener("load", r),
              l.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(l, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    l,
                    e.firstChild,
                  ),
              (n.state.loading |= 4));
          }
        }
        var cd = {
          $$typeof: k,
          Provider: null,
          Consumer: null,
          _currentValue: F,
          _currentValue2: F,
          _threadCount: 0,
        };
        function fd(e, n, t, r, l, a, o, i, u) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Pe(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Pe(0)),
            (this.hiddenUpdates = Pe(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = l),
            (this.onCaughtError = a),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = u),
            (this.incompleteTransitions = new Map()));
        }
        function dd(e, n, t, r, l, a) {
          ((l = (function (e) {
            return e ? (e = Fr) : Fr;
          })(l)),
            null === r.context ? (r.context = l) : (r.pendingContext = l),
            ((r = va(n)).payload = { element: t }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (t = ya(e, r, n)) && (qs(t, 0, n), ba(t, e, n)));
        }
        function pd(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function md(e, n) {
          (pd(e, n), (e = e.alternate) && pd(e, n));
        }
        function hd(e) {
          if (13 === e.tag || 31 === e.tag) {
            var n = Tr(e, 67108864);
            (null !== n && qs(n, 0, 67108864), md(e, 67108864));
          }
        }
        function gd(e) {
          if (13 === e.tag || 31 === e.tag) {
            var n = Qs(),
              t = Tr(e, (n = Fe(n)));
            (null !== t && qs(t, 0, n), md(e, n));
          }
        }
        var vd = !0;
        function yd(e, n, t, r) {
          var l = L.T;
          L.T = null;
          var a = O.p;
          try {
            ((O.p = 2), kd(e, n, t, r));
          } finally {
            ((O.p = a), (L.T = l));
          }
        }
        function bd(e, n, t, r) {
          var l = L.T;
          L.T = null;
          var a = O.p;
          try {
            ((O.p = 8), kd(e, n, t, r));
          } finally {
            ((O.p = a), (L.T = l));
          }
        }
        function kd(e, n, t, r) {
          if (vd) {
            var l = Ad(r);
            if (null === l) (ef(e, n, r, wd, t), Ld(e, r));
            else if (
              (function (e, n, t, r, l) {
                switch (n) {
                  case "focusin":
                    return ((xd = Od(xd, e, n, t, r, l)), !0);
                  case "dragenter":
                    return ((_d = Od(_d, e, n, t, r, l)), !0);
                  case "mouseover":
                    return ((zd = Od(zd, e, n, t, r, l)), !0);
                  case "pointerover":
                    var a = l.pointerId;
                    return (
                      Nd.set(a, Od(Nd.get(a) || null, e, n, t, r, l)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (a = l.pointerId),
                      Pd.set(a, Od(Pd.get(a) || null, e, n, t, r, l)),
                      !0
                    );
                }
                return !1;
              })(l, e, n, t, r)
            )
              r.stopPropagation();
            else if ((Ld(e, r), 4 & n && -1 < Td.indexOf(e))) {
              for (; null !== l;) {
                var a = Ye(l);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ce(a.pendingLanes);
                        if (0 !== o) {
                          var i = a;
                          for (i.pendingLanes |= 2, i.entangledLanes |= 2; o;) {
                            var u = 1 << (31 - be(o));
                            ((i.entanglements[1] |= u), (o &= ~u));
                          }
                          (Oc(a), !(6 & ds) && ((Ls = ie() + 500), Fc(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (i = Tr(a, 2)) && qs(i, 0, 2), Zs(), md(a, 2));
                  }
                if ((null === (a = Ad(r)) && ef(e, n, r, wd, t), a === l))
                  break;
                l = a;
              }
              null !== l && r.stopPropagation();
            } else ef(e, n, r, null, t);
          }
        }
        function Ad(e) {
          return Ed((e = On(e)));
        }
        var wd = null;
        function Ed(e) {
          if (((wd = null), null !== (e = Ke(e)))) {
            var n = i(e);
            if (null === n) e = null;
            else {
              var t = n.tag;
              if (13 === t) {
                if (null !== (e = u(n))) return e;
                e = null;
              } else if (31 === t) {
                if (null !== (e = s(n))) return e;
                e = null;
              } else if (3 === t) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                  return 3 === n.tag ? n.stateNode.containerInfo : null;
                e = null;
              } else n !== e && (e = null);
            }
          }
          return ((wd = e), null);
        }
        function Sd(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case se:
                  return 2;
                case ce:
                  return 8;
                case fe:
                case de:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Cd = !1,
          xd = null,
          _d = null,
          zd = null,
          Nd = new Map(),
          Pd = new Map(),
          Bd = [],
          Td =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function Ld(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              xd = null;
              break;
            case "dragenter":
            case "dragleave":
              _d = null;
              break;
            case "mouseover":
            case "mouseout":
              zd = null;
              break;
            case "pointerover":
            case "pointerout":
              Nd.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pd.delete(n.pointerId);
          }
        }
        function Od(e, n, t, r, l, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [l],
              }),
              null !== n && null !== (n = Ye(n)) && hd(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== l && -1 === n.indexOf(l) && n.push(l),
              e);
        }
        function Fd(e) {
          var n = Ke(e.target);
          if (null !== n) {
            var t = i(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = u(t)))
                  return (
                    (e.blockedOn = n),
                    void Me(e.priority, function () {
                      gd(t);
                    })
                  );
              } else if (31 === n) {
                if (null !== (n = s(t)))
                  return (
                    (e.blockedOn = n),
                    void Me(e.priority, function () {
                      gd(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dd(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length;) {
            var t = Ad(e.nativeEvent);
            if (null !== t)
              return (null !== (n = Ye(t)) && hd(n), (e.blockedOn = t), !1);
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            ((Ln = r), t.target.dispatchEvent(r), (Ln = null), n.shift());
          }
          return !0;
        }
        function Rd(e, n, t) {
          Dd(e) && t.delete(n);
        }
        function Md() {
          ((Cd = !1),
            null !== xd && Dd(xd) && (xd = null),
            null !== _d && Dd(_d) && (_d = null),
            null !== zd && Dd(zd) && (zd = null),
            Nd.forEach(Rd),
            Pd.forEach(Rd));
        }
        function Id(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            Cd ||
              ((Cd = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Md)));
        }
        var jd = null;
        function Ud(e) {
          jd !== e &&
            ((jd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              jd === e && (jd = null);
              for (var n = 0; n < e.length; n += 3) {
                var t = e[n],
                  r = e[n + 1],
                  l = e[n + 2];
                if ("function" != typeof r) {
                  if (null === Ed(r || t)) continue;
                  break;
                }
                var a = Ye(t);
                null !== a &&
                  (e.splice(n, 3),
                  (n -= 3),
                  ei(
                    a,
                    { pending: !0, data: l, method: t.method, action: r },
                    r,
                    l,
                  ));
              }
            }));
        }
        function $d(e) {
          function n(n) {
            return Id(n, e);
          }
          (null !== xd && Id(xd, e),
            null !== _d && Id(_d, e),
            null !== zd && Id(zd, e),
            Nd.forEach(n),
            Pd.forEach(n));
          for (var t = 0; t < Bd.length; t++) {
            var r = Bd[t];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < Bd.length && null === (t = Bd[0]).blockedOn;)
            (Fd(t), null === t.blockedOn && Bd.shift());
          if (null != (t = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < t.length; r += 3) {
              var l = t[r],
                a = t[r + 1],
                o = l[Ue] || null;
              if ("function" == typeof a) o || Ud(t);
              else if (o) {
                var i = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((l = a), (o = a[Ue] || null))) i = o.formAction;
                  else if (null !== Ed(l)) continue;
                } else i = o.action;
                ("function" == typeof i
                  ? (t[r + 1] = i)
                  : (t.splice(r, 3), (r -= 3)),
                  Ud(t));
              }
            }
        }
        function Hd() {
          function e(e) {
            e.canIntercept &&
              "react-transition" === e.info &&
              e.intercept({
                handler: function () {
                  return new Promise(function (e) {
                    return (l = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function n() {
            (null !== l && (l(), (l = null)), r || setTimeout(t, 20));
          }
          function t() {
            if (!r && !navigation.transition) {
              var e = navigation.currentEntry;
              e &&
                null != e.url &&
                navigation.navigate(e.url, {
                  state: e.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if ("object" == typeof navigation) {
            var r = !1,
              l = null;
            return (
              navigation.addEventListener("navigate", e),
              navigation.addEventListener("navigatesuccess", n),
              navigation.addEventListener("navigateerror", n),
              setTimeout(t, 100),
              function () {
                ((r = !0),
                  navigation.removeEventListener("navigate", e),
                  navigation.removeEventListener("navigatesuccess", n),
                  navigation.removeEventListener("navigateerror", n),
                  null !== l && (l(), (l = null)));
              }
            );
          }
        }
        function Vd(e) {
          this._internalRoot = e;
        }
        function Qd(e) {
          this._internalRoot = e;
        }
        ((Qd.prototype.render = Vd.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(o(409));
            dd(n.current, Qs(), e, n, null, null);
          }),
          (Qd.prototype.unmount = Vd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                (dd(e.current, 2, null, e, null, null), Zs(), (n[$e] = null));
              }
            }),
          (Qd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = Re();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < Bd.length && 0 !== n && n < Bd[t].priority;
                t++
              );
              (Bd.splice(t, 0, e), 0 === t && Fd(e));
            }
          }));
        var Wd = l.version;
        if ("19.2.5" !== Wd) throw Error(o(527, Wd, "19.2.5"));
        O.findDOMNode = function (e) {
          var n = e._reactInternals;
          if (void 0 === n) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = i(e))) throw Error(o(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ;) {
                var l = t.return;
                if (null === l) break;
                var a = l.alternate;
                if (null === a) {
                  if (null !== (r = l.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (l.child === a.child) {
                  for (a = l.child; a;) {
                    if (a === t) return (c(l), e);
                    if (a === r) return (c(l), n);
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (t.return !== r.return) ((t = l), (r = a));
                else {
                  for (var u = !1, s = l.child; s;) {
                    if (s === t) {
                      ((u = !0), (t = l), (r = a));
                      break;
                    }
                    if (s === r) {
                      ((u = !0), (r = l), (t = a));
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) {
                    for (s = a.child; s;) {
                      if (s === t) {
                        ((u = !0), (t = a), (r = l));
                        break;
                      }
                      if (s === r) {
                        ((u = !0), (r = a), (t = l));
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (t.alternate !== r) throw Error(o(190));
              }
              if (3 !== t.tag) throw Error(o(188));
              return t.stateNode.current === t ? e : n;
            })(n)),
            null === (e = null !== e ? f(e) : null) ? null : e.stateNode
          );
        };
        var qd = {
          bundleType: 0,
          version: "19.2.5",
          rendererPackageName: "react-dom",
          currentDispatcherRef: L,
          reconcilerVersion: "19.2.5",
        };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Xd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Xd.isDisabled && Xd.supportsFiber)
            try {
              ((ge = Xd.inject(qd)), (ve = Xd));
            } catch (e) {}
        }
        n.createRoot = function (e, n) {
          if (
            !(t = e) ||
            (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
          )
            throw Error(o(299));
          var t,
            r = !1,
            l = "",
            a = Ei,
            i = Si,
            u = Ci;
          return (
            null != n &&
              (!0 === n.unstable_strictMode && (r = !0),
              void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
              void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
              void 0 !== n.onCaughtError && (i = n.onCaughtError),
              void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
            (n = (function (e, n, t, r, l, a, o, i, u, s, c, f) {
              return (
                (e = new fd(e, n, t, o, u, s, c, f, i)),
                (n = 1),
                !0 === a && (n |= 24),
                (a = Rr(3, null, null, n)),
                (e.current = a),
                (a.stateNode = e),
                (n = Ml()).refCount++,
                (e.pooledCache = n),
                n.refCount++,
                (a.memoizedState = { element: r, isDehydrated: t, cache: n }),
                ha(a),
                e
              );
            })(e, 1, !1, null, 0, r, l, null, a, i, u, Hd)),
            (e[$e] = n.current),
            Zc(e),
            new Vd(n)
          );
        };
      },
      31839: function (e, n, t) {
        var r = t(2086);
        function l(e) {
          var n = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
              n += "&args[]=" + encodeURIComponent(arguments[t]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var o = {
            d: {
              f: a,
              r: function () {
                throw Error(l(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal"),
          u = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, n) {
          return "font" === e
            ? ""
            : "string" == typeof n
              ? "use-credentials" === n
                ? n
                : ""
              : void 0;
        }
        ((n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !n ||
              (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)
            )
              throw Error(l(299));
            return (function (e, n, t) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: n,
                implementation: t,
              };
            })(e, n, null, t);
          }),
          (n.flushSync = function (e) {
            var n = u.T,
              t = o.p;
            try {
              if (((u.T = null), (o.p = 2), e)) return e();
            } finally {
              ((u.T = n), (o.p = t), o.d.f());
            }
          }),
          (n.preconnect = function (e, n) {
            "string" == typeof e &&
              ((n = n
                ? "string" == typeof (n = n.crossOrigin)
                  ? "use-credentials" === n
                    ? n
                    : ""
                  : void 0
                : null),
              o.d.C(e, n));
          }),
          (n.prefetchDNS = function (e) {
            "string" == typeof e && o.d.D(e);
          }),
          (n.preinit = function (e, n) {
            if ("string" == typeof e && n && "string" == typeof n.as) {
              var t = n.as,
                r = s(t, n.crossOrigin),
                l = "string" == typeof n.integrity ? n.integrity : void 0,
                a =
                  "string" == typeof n.fetchPriority ? n.fetchPriority : void 0;
              "style" === t
                ? o.d.S(
                    e,
                    "string" == typeof n.precedence ? n.precedence : void 0,
                    { crossOrigin: r, integrity: l, fetchPriority: a },
                  )
                : "script" === t &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: l,
                    fetchPriority: a,
                    nonce: "string" == typeof n.nonce ? n.nonce : void 0,
                  });
            }
          }),
          (n.preinitModule = function (e, n) {
            if ("string" == typeof e)
              if ("object" == typeof n && null !== n) {
                if (null == n.as || "script" === n.as) {
                  var t = s(n.as, n.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: t,
                    integrity:
                      "string" == typeof n.integrity ? n.integrity : void 0,
                    nonce: "string" == typeof n.nonce ? n.nonce : void 0,
                  });
                }
              } else null == n && o.d.M(e);
          }),
          (n.preload = function (e, n) {
            if (
              "string" == typeof e &&
              "object" == typeof n &&
              null !== n &&
              "string" == typeof n.as
            ) {
              var t = n.as,
                r = s(t, n.crossOrigin);
              o.d.L(e, t, {
                crossOrigin: r,
                integrity:
                  "string" == typeof n.integrity ? n.integrity : void 0,
                nonce: "string" == typeof n.nonce ? n.nonce : void 0,
                type: "string" == typeof n.type ? n.type : void 0,
                fetchPriority:
                  "string" == typeof n.fetchPriority ? n.fetchPriority : void 0,
                referrerPolicy:
                  "string" == typeof n.referrerPolicy
                    ? n.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" == typeof n.imageSrcSet ? n.imageSrcSet : void 0,
                imageSizes:
                  "string" == typeof n.imageSizes ? n.imageSizes : void 0,
                media: "string" == typeof n.media ? n.media : void 0,
              });
            }
          }),
          (n.preloadModule = function (e, n) {
            if ("string" == typeof e)
              if (n) {
                var t = s(n.as, n.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" == typeof n.as && "script" !== n.as
                      ? n.as
                      : void 0,
                  crossOrigin: t,
                  integrity:
                    "string" == typeof n.integrity ? n.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (n.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (n.unstable_batchedUpdates = function (e, n) {
            return e(n);
          }),
          (n.useFormState = function (e, n, t) {
            return u.H.useFormState(e, n, t);
          }),
          (n.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (n.version = "19.2.5"));
      },
      84528: function (e, n, t) {
        (!(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = t(82053)));
      },
      90455: function (e, n, t) {
        (!(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = t(31839)));
      },
      15399: function (e, n) {
        var t = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          l = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.for("react.activity"),
          m = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function y(e, n, t) {
          ((this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || h));
        }
        function b() {}
        function k(e, n, t) {
          ((this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || h));
        }
        ((y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, n) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype));
        var A = (k.prototype = new b());
        ((A.constructor = k), g(A, y.prototype), (A.isPureReactComponent = !0));
        var w = Array.isArray;
        function E() {}
        var S = { H: null, A: null, T: null, S: null },
          C = Object.prototype.hasOwnProperty;
        function x(e, n, r) {
          var l = r.ref;
          return {
            $$typeof: t,
            type: e,
            key: n,
            ref: void 0 !== l ? l : null,
            props: r,
          };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === t;
        }
        var z = /\/+/g;
        function N(e, n) {
          return "object" == typeof e && null !== e && null != e.key
            ? ((t = "" + e.key),
              (r = { "=": "=0", ":": "=2" }),
              "$" +
                t.replace(/[=:]/g, function (e) {
                  return r[e];
                }))
            : n.toString(36);
          var t, r;
        }
        function P(e, n, l, a, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return P((c = e._init)(e._payload), n, l, a, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === a ? "." + N(e, 0) : a),
              w(o)
                ? ((l = ""),
                  null != c && (l = c.replace(z, "$&/") + "/"),
                  P(o, n, l, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (_(o) &&
                    ((u = o),
                    (s =
                      l +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(z, "$&/") + "/") +
                      c),
                    (o = x(u.type, s, u.props))),
                  n.push(o)),
              1
            );
          c = 0;
          var f,
            p = "" === a ? "." : a + ":";
          if (w(e))
            for (var h = 0; h < e.length; h++)
              c += P((a = e[h]), n, l, (i = p + N(a, h)), o);
          else if (
            "function" ==
            typeof (h =
              null === (f = e) || "object" != typeof f
                ? null
                : "function" == typeof (f = (m && f[m]) || f["@@iterator"])
                  ? f
                  : null)
          )
            for (e = h.call(e), h = 0; !(a = e.next()).done;)
              c += P((a = a.value), n, l, (i = p + N(a, h++)), o);
          else if ("object" === i) {
            if ("function" == typeof e.then)
              return P(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(E, E)
                          : ((e.status = "pending"),
                            e.then(
                              function (n) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = n));
                              },
                              function (n) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = n));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                n,
                l,
                a,
                o,
              );
            throw (
              (n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          }
          return c;
        }
        function B(e, n, t) {
          if (null == e) return e;
          var r = [],
            l = 0;
          return (
            P(e, r, "", "", function (e) {
              return n.call(t, e, l++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var n = e._result;
            ((n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = n)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" == typeof window &&
                    "function" == typeof window.ErrorEvent
                  ) {
                    var n = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" == typeof e &&
                        null !== e &&
                        "string" == typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(n)) return;
                  } else if (
                    "object" == typeof process &&
                    "function" == typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          O = {
            map: B,
            forEach: function (e, n, t) {
              B(
                e,
                function () {
                  n.apply(this, arguments);
                },
                t,
              );
            },
            count: function (e) {
              var n = 0;
              return (
                B(e, function () {
                  n++;
                }),
                n
              );
            },
            toArray: function (e) {
              return (
                B(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!_(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          };
        ((n.Activity = p),
          (n.Children = O),
          (n.Component = y),
          (n.Fragment = l),
          (n.Profiler = o),
          (n.PureComponent = k),
          (n.StrictMode = a),
          (n.Suspense = c),
          (n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (n.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return S.H.useMemoCache(e);
            },
          }),
          (n.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (n.cacheSignal = function () {
            return null;
          }),
          (n.cloneElement = function (e, n, t) {
            if (null == e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var r = g({}, e.props),
              l = e.key;
            if (null != n)
              for (a in (void 0 !== n.key && (l = "" + n.key), n))
                !C.call(n, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === n.ref) ||
                  (r[a] = n[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = t;
            else if (1 < a) {
              for (var o = Array(a), i = 0; i < a; i++) o[i] = arguments[i + 2];
              r.children = o;
            }
            return x(e.type, l, r);
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (n.createElement = function (e, n, t) {
            var r,
              l = {},
              a = null;
            if (null != n)
              for (r in (void 0 !== n.key && (a = "" + n.key), n))
                C.call(n, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (l[r] = n[r]);
            var o = arguments.length - 2;
            if (1 === o) l.children = t;
            else if (1 < o) {
              for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
              l.children = i;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === l[r] && (l[r] = o[r]);
            return x(e, a, l);
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (n.isValidElement = _),
          (n.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: f, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = S.T,
              t = {};
            S.T = t;
            try {
              var r = e(),
                l = S.S;
              (null !== l && l(t, r),
                "object" == typeof r &&
                  null !== r &&
                  "function" == typeof r.then &&
                  r.then(E, L));
            } catch (e) {
              L(e);
            } finally {
              (null !== n && null !== t.types && (n.types = t.types),
                (S.T = n));
            }
          }),
          (n.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (n.use = function (e) {
            return S.H.use(e);
          }),
          (n.useActionState = function (e, n, t) {
            return S.H.useActionState(e, n, t);
          }),
          (n.useCallback = function (e, n) {
            return S.H.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e, n) {
            return S.H.useDeferredValue(e, n);
          }),
          (n.useEffect = function (e, n) {
            return S.H.useEffect(e, n);
          }),
          (n.useEffectEvent = function (e) {
            return S.H.useEffectEvent(e);
          }),
          (n.useId = function () {
            return S.H.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return S.H.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return S.H.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return S.H.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return S.H.useMemo(e, n);
          }),
          (n.useOptimistic = function (e, n) {
            return S.H.useOptimistic(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return S.H.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (n.useState = function (e) {
            return S.H.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return S.H.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return S.H.useTransition();
          }),
          (n.version = "19.2.5"));
      },
      2086: function (e, n, t) {
        e.exports = t(15399);
      },
      64697: function (e, n) {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t;) {
            var r = (t - 1) >>> 1,
              l = e[r];
            if (!(0 < a(l, n))) break e;
            ((e[r] = n), (e[t] = l), (t = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function l(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, l = e.length, o = l >>> 1; r < o;) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > a(u, t))
                s < l && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = t), (r = s))
                  : ((e[r] = u), (e[i] = t), (r = i));
              else {
                if (!(s < l && 0 > a(c, t))) break e;
                ((e[r] = c), (e[s] = t), (r = s));
              }
            }
          }
          return n;
        }
        function a(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          ((n.unstable_now = void 0),
          "object" == typeof performance &&
            "function" == typeof performance.now)
        ) {
          var o = performance;
          n.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          n.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = !1,
          y = "function" == typeof setTimeout ? setTimeout : null,
          b = "function" == typeof clearTimeout ? clearTimeout : null,
          k = "undefined" != typeof setImmediate ? setImmediate : null;
        function A(e) {
          for (var n = r(c); null !== n;) {
            if (null === n.callback) l(c);
            else {
              if (!(n.startTime <= e)) break;
              (l(c), (n.sortIndex = n.expirationTime), t(s, n));
            }
            n = r(c);
          }
        }
        function w(e) {
          if (((g = !1), A(e), !h))
            if (null !== r(s)) ((h = !0), S || ((S = !0), E()));
            else {
              var n = r(c);
              null !== n && T(w, n.startTime - e);
            }
        }
        var E,
          S = !1,
          C = -1,
          x = 5,
          _ = -1;
        function z() {
          return !(!v && n.unstable_now() - _ < x);
        }
        function N() {
          if (((v = !1), S)) {
            var e = n.unstable_now();
            _ = e;
            var t = !0;
            try {
              e: {
                ((h = !1), g && ((g = !1), b(C), (C = -1)), (m = !0));
                var a = p;
                try {
                  n: {
                    for (
                      A(e), d = r(s);
                      null !== d && !(d.expirationTime > e && z());
                    ) {
                      var o = d.callback;
                      if ("function" == typeof o) {
                        ((d.callback = null), (p = d.priorityLevel));
                        var i = o(d.expirationTime <= e);
                        if (((e = n.unstable_now()), "function" == typeof i)) {
                          ((d.callback = i), A(e), (t = !0));
                          break n;
                        }
                        (d === r(s) && l(s), A(e));
                      } else l(s);
                      d = r(s);
                    }
                    if (null !== d) t = !0;
                    else {
                      var u = r(c);
                      (null !== u && T(w, u.startTime - e), (t = !1));
                    }
                  }
                  break e;
                } finally {
                  ((d = null), (p = a), (m = !1));
                }
                t = void 0;
              }
            } finally {
              t ? E() : (S = !1);
            }
          }
        }
        if ("function" == typeof k)
          E = function () {
            k(N);
          };
        else if ("undefined" != typeof MessageChannel) {
          var P = new MessageChannel(),
            B = P.port2;
          ((P.port1.onmessage = N),
            (E = function () {
              B.postMessage(null);
            }));
        } else
          E = function () {
            y(N, 0);
          };
        function T(e, t) {
          C = y(function () {
            e(n.unstable_now());
          }, t);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (x = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_requestPaint = function () {
            v = !0;
          }),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, l, a) {
            var o = n.unstable_now();
            switch (
              ((a =
                "object" == typeof a &&
                null !== a &&
                "number" == typeof (a = a.delay) &&
                0 < a
                  ? o + a
                  : o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: l,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  t(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (b(C), (C = -1)) : (g = !0), T(w, a - o)))
                : ((e.sortIndex = i),
                  t(s, e),
                  h || m || ((h = !0), S || ((S = !0), E()))),
              e
            );
          }),
          (n.unstable_shouldYield = z),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          }));
      },
      15666: function (e, n, t) {
        e.exports = t(64697);
      },
      42820: function (e, n, t) {
        var r = t(83431),
          l = t.n(r),
          a = t(15588),
          o = t.n(a),
          i = t(4456),
          u = t.n(i),
          s = t(63471),
          c = t.n(s),
          f = t(36579),
          d = t.n(f),
          p = t(31184),
          m = t.n(p),
          h = t(79226),
          g = {};
        ((g.styleTagTransform = m()),
          (g.setAttributes = c()),
          (g.insert = u().bind(null, "head")),
          (g.domAPI = o()),
          (g.insertStyleElement = d()),
          l()(h.A, g),
          h.A && h.A.locals && h.A.locals);
      },
      83431: function (e) {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, o = [], i = 0; i < e.length; i++) {
            var u = e[i],
              s = r.base ? u[0] + r.base : u[0],
              c = a[s] || 0,
              f = "".concat(s, " ").concat(c);
            a[s] = c + 1;
            var d = t(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) (n[d].references++, n[d].updater(p));
            else {
              var m = l(p, r);
              ((r.byIndex = i),
                n.splice(i, 0, { identifier: f, updater: m, references: 1 }));
            }
            o.push(f);
          }
          return o;
        }
        function l(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, l) {
          var a = r((e = e || []), (l = l || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < a.length; o++) {
              var i = t(a[o]);
              n[i].references--;
            }
            for (var u = r(e, l), s = 0; s < a.length; s++) {
              var c = t(a[s]);
              0 === n[c].references && (n[c].updater(), n.splice(c, 1));
            }
            a = u;
          };
        };
      },
      4456: function (e) {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      36579: function (e) {
        e.exports = function (e) {
          var n = document.createElement("style");
          return (e.setAttributes(n, e.attributes), e.insert(n, e.options), n);
        };
      },
      63471: function (e, n, t) {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      15588: function (e) {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                (t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {")));
                var l = void 0 !== t.layer;
                (l &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  l && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}"));
                var a = t.sourceMap;
                (a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options));
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      31184: function (e) {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      1788: function (e, n, t) {
        t.d(n, {
          y: function () {
            return l;
          },
        });
        var r = t(2086);
        const l = ({ className: e = "" }) =>
          r.createElement(
            "div",
            { className: e },
            r.createElement(
              "div",
              { className: "spinner-border", role: "status" },
              r.createElement("span", { className: "sr-only" }, "Loading..."),
            ),
          );
      },
      18972: function (e, n, t) {
        t.d(n, {
          D4: function () {
            return a;
          },
          Ii: function () {
            return i;
          },
          N6: function () {
            return l;
          },
          XP: function () {
            return s;
          },
          _t: function () {
            return r;
          },
          aT: function () {
            return o;
          },
          hN: function () {
            return u;
          },
        });
        const r = "$1,500,000",
          l = 300,
          a = "#6a95a5",
          o = [1, 0, 2],
          i = [
            {
              label: "1ST",
              color: "#f5c518",
              gradient: "linear-gradient(135deg,#f5c518,#c9980f)",
              glow: "rgba(245,197,24,0.32)",
              podiumHeight: 255,
              icon: "fas fa-crown",
            },
            {
              label: "2ND",
              color: "#c9882a",
              gradient: "linear-gradient(135deg,#c9882a,#9a6318)",
              glow: "rgba(201,136,42,0.22)",
              podiumHeight: 210,
              icon: null,
            },
            {
              label: "3RD",
              color: "#5b8db8",
              gradient: "linear-gradient(135deg,#5b8db8,#3a6d96)",
              glow: "rgba(91,141,184,0.22)",
              podiumHeight: 185,
              icon: null,
            },
          ],
          u = ["fas fa-skull", "fas fa-shield-alt", "fas fa-flag"],
          s = [6, 3, 2];
      },
      98255: function (e, n, t) {
        var r = t(2086);
        n.A = ({ value: e, gradient: n, color: t }) =>
          r.createElement(
            "div",
            { className: "turf-control-bar" },
            r.createElement(
              "div",
              { className: "turf-control-bar__track" },
              r.createElement("div", {
                className: "turf-control-bar__fill",
                style: { width: `${e}%`, background: n },
              }),
            ),
            r.createElement(
              "span",
              { className: "turf-control-bar__pct", style: { color: t } },
              e.toFixed(1),
              "%",
            ),
          );
      },
      80656: function (e, n, t) {
        var r = t(55996),
          l = t(2086);
        n.A = ({ rankIndex: e, color: n }) =>
          l.createElement(
            l.Fragment,
            null,
            (0, r.lT)(e).map((e, t) =>
              l.createElement("i", {
                key: t,
                className: `turf-falling-icon ${e.icon}`,
                style: {
                  left: `${e.x}%`,
                  color: n,
                  fontSize: `${e.size}em`,
                  animation: `icon-fall ${e.duration}s ease-in ${e.delay}s infinite`,
                },
              }),
            ),
          );
      },
      10712: function (e, n, t) {
        var r = t(18972),
          l = t(64779),
          a = t(58095),
          o = t(87131),
          i = t(67155),
          u = t(2086);
        n.A = ({ groups: e, resetAt: n }) => {
          var t;
          const s = (0, l.A)(n),
            c = e.slice(0, 3),
            f = e.slice(3);
          return u.createElement(
            "div",
            null,
            u.createElement(o.A, {
              leader: null !== (t = c[0]) && void 0 !== t ? t : null,
              countdown: s,
            }),
            c.length > 0 &&
              u.createElement(
                "div",
                { className: "turf-podium" },
                r.aT.map((e) => {
                  const n = c[e];
                  return n
                    ? u.createElement(a.A, {
                        key: n.group_id,
                        g: n,
                        rankIndex: e,
                      })
                    : null;
                }),
              ),
            f.length > 0 &&
              u.createElement(
                "div",
                { className: "turf-rest-list" },
                f.map((e, n) =>
                  u.createElement(i.A, { key: e.group_id, g: e, rank: n + 4 }),
                ),
              ),
          );
        };
      },
      58095: function (e, n, t) {
        var r = t(18972),
          l = t(98255),
          a = t(80656),
          o = t(38266),
          i = t(2086);
        n.A = ({ g: e, rankIndex: n }) => {
          const t = r.Ii[n],
            u = e.group_color,
            s = 0 === n,
            c = `linear-gradient(135deg, ${u}, ${u}99)`;
          return i.createElement(
            "div",
            {
              className: "turf-podium-card",
              style: {
                minHeight: t.podiumHeight,
                boxShadow: `0 0 0 1px ${u}33, 0 16px 48px ${u}30`,
              },
            },
            i.createElement("div", {
              className: "turf-podium-card__spotlight",
              style: {
                height: s ? 200 : 160,
                background: `radial-gradient(ellipse at 50% 0%, ${u}${s ? "35" : "22"} 0%, transparent 70%)`,
                animation: `card-glow-pulse ${s ? 2.4 : 3}s ease-in-out infinite`,
              },
            }),
            i.createElement("div", {
              className: "turf-podium-card__stripes",
              style: {
                background: `repeating-linear-gradient(55deg, ${u}09 0px, ${u}09 1px, transparent 1px, transparent 18px)`,
                animation: `card-stripe-move ${s ? 2.5 : 3.5}s linear infinite`,
              },
            }),
            i.createElement(a.A, { rankIndex: n, color: u }),
            i.createElement(
              "div",
              {
                className: "turf-podium-card__content",
                style: { padding: s ? "52px 18px 18px" : "46px 16px 16px" },
              },
              i.createElement(
                "div",
                { className: "turf-podium-card__badge-wrap" },
                i.createElement(
                  "div",
                  {
                    className: "turf-podium-card__badge",
                    style: {
                      background: t.gradient,
                      padding: s ? "4px 14px" : "3px 11px",
                      fontSize: s ? "0.75em" : "0.68em",
                    },
                  },
                  t.label,
                ),
                t.icon &&
                  i.createElement("i", {
                    className: t.icon,
                    style: {
                      fontSize: s ? "1.1em" : "0.95em",
                      color: t.color,
                      filter: `drop-shadow(0 0 6px ${t.color}99)`,
                    },
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "turf-podium-card__name",
                  style: {
                    fontSize: s ? "1.1em" : "0.95em",
                    color: u,
                    textShadow: `0 0 20px ${u}55`,
                  },
                },
                e.group_name,
              ),
              i.createElement(
                "div",
                { className: "turf-podium-card__chips" },
                i.createElement(o.A, {
                  icon: "fas fa-flag",
                  value: e.captures,
                  color: u,
                }),
                i.createElement(o.A, {
                  icon: "fas fa-shield-alt",
                  value: e.defenses,
                  color: u,
                }),
                i.createElement(o.A, {
                  icon: "fas fa-skull",
                  value: e.turf_kills,
                  color: u,
                }),
              ),
              i.createElement(l.A, {
                value: e.control_index,
                gradient: c,
                color: u,
              }),
            ),
          );
        };
      },
      87131: function (e, n, t) {
        var r = t(18972),
          l = t(2086);
        n.A = ({ leader: e, countdown: n }) =>
          l.createElement(
            "div",
            {
              className: "turf-prize-banner",
              style: {
                boxShadow:
                  "0 0 0 1px rgba(245,197,24,0.2), 0 16px 48px rgba(245,197,24,0.15)",
              },
            },
            l.createElement("div", {
              className: "turf-prize-banner__spotlight",
            }),
            l.createElement("div", { className: "turf-prize-banner__stripes" }),
            l.createElement(
              "div",
              { className: "turf-prize-banner__content" },
              l.createElement("i", {
                className: "fas fa-trophy turf-prize-banner__icon",
              }),
              l.createElement(
                "div",
                { className: "turf-prize-banner__eyebrow" },
                "Weekly Grand Prize",
              ),
              l.createElement(
                "div",
                { className: "turf-prize-banner__amount" },
                r._t,
              ),
              l.createElement("div", {
                className: "turf-prize-banner__divider",
              }),
              l.createElement(
                "p",
                { className: "turf-prize-banner__sentence" },
                e
                  ? l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "span",
                        { style: { color: e.group_color, fontWeight: 700 } },
                        e.group_name,
                      ),
                      " ",
                      "is currently leading the turf war",
                      n &&
                        l.createElement(
                          l.Fragment,
                          null,
                          " ",
                          "— the prize resets in",
                          " ",
                          l.createElement(
                            "span",
                            { className: "turf-prize-banner__gold" },
                            n,
                          ),
                        ),
                      ".",
                    )
                  : n
                    ? l.createElement(
                        l.Fragment,
                        null,
                        "The prize resets in",
                        " ",
                        l.createElement(
                          "span",
                          { className: "turf-prize-banner__gold" },
                          n,
                        ),
                        ".",
                      )
                    : null,
              ),
            ),
          );
      },
      67155: function (e, n, t) {
        var r = t(98255),
          l = t(38266),
          a = t(2086);
        n.A = ({ g: e, rank: n }) =>
          a.createElement(
            "div",
            {
              className: "turf-rest-row",
              style: {
                boxShadow: `0 0 0 1px ${e.group_color}22, 0 4px 16px ${e.group_color}12`,
                borderLeft: `3px solid ${e.group_color}88`,
              },
            },
            a.createElement("div", {
              className: "turf-rest-row__stripes",
              style: {
                background: `repeating-linear-gradient(55deg, ${e.group_color}04 0px, ${e.group_color}04 1px, transparent 1px, transparent 18px)`,
              },
            }),
            a.createElement(
              "div",
              {
                className: "turf-rest-row__rank",
                style: {
                  background: `${e.group_color}18`,
                  border: `1px solid ${e.group_color}33`,
                  color: e.group_color,
                },
              },
              n,
            ),
            a.createElement(
              "span",
              {
                className: "turf-rest-row__name",
                style: { color: e.group_color },
              },
              e.group_name,
            ),
            a.createElement(
              "div",
              { className: "turf-rest-row__chips" },
              a.createElement(l.A, {
                icon: "fas fa-flag",
                value: e.captures,
                color: e.group_color,
              }),
              a.createElement(l.A, {
                icon: "fas fa-shield-alt",
                value: e.defenses,
                color: e.group_color,
              }),
              a.createElement(l.A, {
                icon: "fas fa-skull",
                value: e.turf_kills,
                color: e.group_color,
              }),
            ),
            a.createElement(
              "div",
              { className: "turf-rest-row__bar" },
              a.createElement(r.A, {
                value: e.control_index,
                gradient: `linear-gradient(90deg,${e.group_color},${e.group_color}66)`,
                color: e.group_color,
              }),
            ),
          );
      },
      38266: function (e, n, t) {
        var r = t(2086);
        n.A = ({ icon: e, value: n, color: t }) =>
          r.createElement(
            "div",
            {
              className: "turf-stat-chip",
              style: {
                background: `${t}18`,
                border: `1px solid ${t}30`,
                color: t,
              },
            },
            r.createElement("i", { className: e }),
            n,
          );
      },
      99321: function (e, n, t) {
        var r = t(2086),
          l = t(1788),
          a = t(88354),
          o = t(18972),
          i = t(55996),
          u = t(10712),
          s = t(2086);
        n.A = () => {
          const [e, n] = (0, r.useState)([]),
            [t, c] = (0, r.useState)(!1),
            [f, d] = (0, r.useState)(!1),
            p = (0, i.uo)();
          return (
            (0, r.useEffect)(() => {
              (0, a.Z)("group/turf_stats/weekly/current")
                .then((e) => n((0, i.hS)((0, i.j7)(e)).slice(0, 6)))
                .catch(() => {})
                .finally(() => {
                  (c(!0), setTimeout(() => d(!0), o.N6));
                });
            }, []),
            s.createElement(
              "div",
              { style: { paddingTop: 10 } },
              !f &&
                s.createElement(
                  "div",
                  { className: t ? "fade-out" : "fade-in" },
                  s.createElement(l.y, {
                    className: "d-flex justify-content-center mt-4 mb-4",
                  }),
                ),
              f &&
                s.createElement(
                  "div",
                  {
                    className: "fade-in",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    },
                  },
                  s.createElement(u.A, { groups: e, resetAt: p }),
                ),
            )
          );
        };
      },
      64779: function (e, n, t) {
        var r = t(2086);
        n.A = (e) => {
          const [n, t] = (0, r.useState)("");
          return (
            (0, r.useEffect)(() => {
              const n = () => {
                if (!e) return;
                const n = e.getTime() - Date.now();
                if (n <= 0) return void t("Resetting...");
                const r = Math.floor(n / 864e5),
                  l = Math.floor((n % 864e5) / 36e5),
                  a = Math.floor((n % 36e5) / 6e4),
                  o = [];
                (r > 0 && o.push(`${r}d`),
                  l > 0 && o.push(`${l}h`),
                  o.push(`${a}m`),
                  t(o.join(" ")));
              };
              n();
              const r = setInterval(n, 6e4);
              return () => clearInterval(r);
            }, [e]),
            n
          );
        };
      },
      55996: function (e, n, t) {
        t.d(n, {
          hS: function () {
            return u;
          },
          j7: function () {
            return i;
          },
          lT: function () {
            return c;
          },
          uo: function () {
            return s;
          },
        });
        var r = t(18972);
        function l(e, n, t) {
          return (
            n in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t),
            e
          );
        }
        const a = (e) => {
            if (!e) return r.D4;
            const n = e.replace(/[{}]/g, "").trim();
            return /^[0-9A-Fa-f]{6}$/.test(n) ? `#${n}` : r.D4;
          },
          o = (e) => 3 * e.captures + 2 * e.defenses + 1 * e.turf_kills,
          i = (e) =>
            e.map((e) => {
              var n;
              return {
                group_id: e.groupId,
                group_name:
                  null !== (n = e.groupName) && void 0 !== n
                    ? n
                    : `Group #${e.groupId}`,
                group_color: a(e.groupColor),
                captures: e.turfStats.captures,
                defenses: e.turfStats.defenses,
                turf_kills: e.turfStats.kills,
              };
            }),
          u = (e) => {
            const n = e.reduce((e, n) => e + o(n), 0);
            return e
              .map((e) => {
                return (
                  (t = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                      ("function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e)
                              .enumerable;
                          }),
                        )),
                        r.forEach(function (n) {
                          l(e, n, t[n]);
                        }));
                    }
                    return e;
                  })({}, e)),
                  (r =
                    null !=
                    (r = { control_index: 0 === n ? 0 : (o(e) / n) * 100 })
                      ? r
                      : {}),
                  Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : (function (e) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                          var t = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, t);
                        }
                        return n;
                      })(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      }),
                  t
                );
                var t, r;
              })
              .sort((e, n) => n.control_index - e.control_index);
          },
          s = () => {
            const e = new Date();
            return (
              e.setUTCHours(0, 0, 0, 0),
              e.setUTCDate(e.getUTCDate() + ((8 - e.getUTCDay()) % 7 || 7)),
              e
            );
          },
          c = (e) =>
            Array.from({ length: r.XP[e] }, (n, t) => ({
              icon: r.hN[(3 * e + 7 * t) % r.hN.length],
              x: ((13 * e + 41 * t) % 76) + 8,
              delay: t * (6 / r.XP[e]),
              duration: 2.8 + (t % 4) * 0.5,
              size: 0.9 + (t % 3) * 0.2,
            }));
      },
      88354: function (e, n, t) {
        function r(e, n, t, r, l, a, o) {
          try {
            var i = e[a](o),
              u = i.value;
          } catch (e) {
            return void t(e);
          }
          i.done ? n(u) : Promise.resolve(u).then(r, l);
        }
        t.d(n, {
          Z: function () {
            return a;
          },
        });
        const l = `${t(35897).A.acpApi.host}/api`,
          a = (e, n) => {
            return ((t = function* () {
              const t =
                  null == n || 0 == n.length
                    ? {}
                    : { Authorization: `Bearer ${n}` },
                r = yield fetch(`${l}/${e}`, { headers: t });
              if (!r.ok) throw r.status;
              return yield r.json();
            }),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (l, a) {
                var o = t.apply(e, n);
                function i(e) {
                  r(o, l, a, i, u, "next", e);
                }
                function u(e) {
                  r(o, l, a, i, u, "throw", e);
                }
                i(void 0);
              });
            })();
            var t;
          };
      },
      80440: function (e, n, t) {
        t.d(n, {
          C: function () {
            return l;
          },
        });
        var r = t(84528);
        const l = (e, n) => {
          const t = document.getElementById(n);
          t && (0, r.createRoot)(t).render(e);
        };
      },
      35897: function (e, n) {
        n.A = {
          api: { host: "https://api.ls-rcr.com/internal" },
          acpApi: { host: "https://acp-api.ls-rcr.com" },
          log: { maxLines: 2e3 },
        };
      },
    },
    n = {};
  function t(r) {
    var l = n[r];
    if (void 0 !== l) return l.exports;
    var a = (n[r] = { id: r, exports: {} });
    return (e[r](a, a.exports, t), a.exports);
  }
  ((t.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return (t.d(n, { a: n }), n);
  }),
    (t.d = function (e, n) {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.nc = void 0),
    t(42820));
  var r = t(99321),
    l = t(80440),
    a = t(2086);
  (0, l.C)(a.createElement(r.A, null), "turf-stats-app");
})();
//# sourceMappingURL=turf_stats.entry.js.map
