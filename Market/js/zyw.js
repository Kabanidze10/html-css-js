// This is just a sample script. Paste your real code (javascript or HTML) here.
(function() {
    try {
        (function() {
            function Ue(a, c, b, d) {
                var e = this;
                return C(window, "c.i", function() {
                    function f(x) {
                        (x = Ve(k, l, "", x)(k, l)) && (S(x.then) ? x.then(g) : g(x));
                        return x
                    }

                    function g(x) {
                        x && (S(x) ? m.push(x) : Ma(x) && z(function(I) {
                            var Z = I[0];
                            I = I[1];
                            S(I) && ("u" === Z ? m.push(I) : h(I, Z))
                        }, ya(x)))
                    }

                    function h(x, I, Z) {
                        e[I] = wl(k, l, Z || p, I, x)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && We();
                    var l = xl(a, Xe, c, b, d),
                        m = [],
                        p = [lh, Ve, mh];
                    p.unshift(yl);
                    var q = A(O, zb),
                        r = M(l);
                    l.id || Wa(gc("Invalid Metrika id: " + l.id, !0));
                    var t = Xc.o("counters", {});
                    if (t[r]) return Ab(k,
                        r, "Duplicate counter " + r + " initialization"), t[r];
                    t[r] = e;
                    Xc.C("counters", t);
                    Xc.Sa("counter", e);
                    z(function(x) {
                        x(k, l)
                    }, Td);
                    z(f, zc);
                    f(zl);
                    h(Al(k, l, m), "destruct", [lh, mh]);
                    Hb(k, F([k, q, f, 1, "a.i"], nh));
                    z(f, X)
                })()
            }

            function Bl(a, c) {
                var b = Cl(a),
                    d = [Dl(a) || El(a)];
                oh(a) && d.push(b);
                var e = ha(a);
                b = Qa(a);
                var f = b.o("synced", {});
                d = Y(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(jb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.C("synced", f);
                return A(function(g) {
                    return {
                        Fj: c[g],
                        Ri: g
                    }
                }, d)
            }

            function El(a) {
                a = Fl(a);
                return Gl[a] || a
            }

            function Cl(a) {
                a =
                    ph(a);
                return Hl[a] || "ru"
            }

            function Il(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ca: "0"
                    },
                    e = Jl(b);
                e ? d.id = e : -1 === b.indexOf(":") ? (b = Ga(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ga(b[0]), d.ca = Ye(e) ? "1" : "0");
                return [Ha(a, d), d]
            }

            function Kl(a, c) {
                Yc[a] || (Yc[a] = []);
                Yc[a].push(c)
            }

            function Ll(a, c, b, d) {
                var e = b.H;
                if (c.ak || !e) d();
                else {
                    var f = Ud(a),
                        g = Ac(a, "");
                    e = function() {
                        var t = qh(f);
                        t = "" + t + Ml(t, g);
                        Vd(b, "gdpr", t);
                        d()
                    };
                    if (3 === c.id) e();
                    else {
                        var h = H(a),
                            k = h.o("f1");
                        if (k) k(e);
                        else if (k = (k = qh(f)) ? A(v(Wd, n), k.split(",")) : [], rh(k)) e();
                        else {
                            var l =
                                Xd(a),
                                m = R(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                Qf: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "),
                                Zf: "_inversed_buttons"
                            } : void 0;
                            var q = (l = l || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", Bc, 525600)) : l ? G(m, Vb) ? m === Ze ? k.push("12") : k.push("3") : $e(a) || Nl(a) ? k.push("17") : Ol(a) && k.push("28") : k.push("14");
                            var r = v(f, Pl);
                            rh(k) ? (z(r, k), e()) : (Yd.push(e), h.C("f1", function(t, x) {
                                var I = 0;
                                if (x) {
                                    var Z = kb(a, x) || "";
                                    I += Z.length
                                }
                                Yd.push(t);
                                1E6 >= I && Yd.push(t)
                            }), (0, af[0])(a).then(T("params.eu")).then(function(t) {
                                if (t || q) {
                                    g.C("gdpr_popup", Ze);
                                    Ql(a, c);
                                    if (cb(a)) return Rl(a, r, c);
                                    var x = sh(a, f);
                                    if (x) return t = Sl(a, r, x, c, p), t.then(F([a, c], Tl)), t
                                }
                                t || r("8");
                                return K.resolve({
                                    value: Bc,
                                    Yd: !0
                                })
                            }).then(function(t) {
                                g.Pb("gdpr_popup");
                                if (t) {
                                    var x = t.value;
                                    t = t.Yd;
                                    G(x, Vb) && g.C("gdpr", x, t ? void 0 : 525600)
                                }
                                x = hc(Yd, ia);
                                ic(a, x, 20)(Ra(C(a,
                                    "gdr"), B));
                                h.C("f1", ia)
                            })["catch"](C(a, "gdp.a")))
                        }
                    }
                }
            }

            function Tl(a, c) {
                if (Xd(a)) {
                    var b = Ud(a),
                        d = Ha(a, c);
                    d = d && d.params;
                    b = A(v(Ul, n), bf(b));
                    d && b.length && d("gdpr", Y(Boolean, b))
                }
            }

            function Rl(a, c, b) {
                var d = Zd(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.ba,
                            h = u(v("4", c), v(null, e)),
                            k = W(a, h, 2E3, "gdp.f.t");
                        d.qg((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.D(wa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], cf), function(m) {
                                e({
                                    value: th(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(F([a,
                            k
                        ], ma))
                    } else e({
                        value: Ze,
                        Yd: !0
                    })
                })
            }

            function Ql(a, c) {
                var b = Zd(a, c);
                b && b.ba.D(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = Xd(a), d
                });
                return b
            }

            function Sl(a, c, b, d, e) {
                var f = void 0 === e ? Vl : e;
                e = f.url;
                var g = f.Zf;
                f = Wl(a, f.Qf, d.bk);
                var h = Zd(a, d);
                if (!h) return K.resolve({
                    value: Bc,
                    Yd: !0
                });
                var k = jc(a, {
                    src: "" + e + f + g + ".js"
                });
                return new K(function(l, m) {
                    k ? (c("7"), k.onerror = function() {
                        var p;
                        c("9");
                        h.pg((p = {}, p.type = "GDPR-ok-view-default", p));
                        l(null)
                    }, k.onload = function() {
                        c("10");
                        b.D(wa(["GDPR-ok-view-default",
                            "GDPR-ok-view-detailed"
                        ], cf), function(p) {
                            var q;
                            p = p.type;
                            h.pg((q = {}, q.type = p, q));
                            l({
                                value: th(p)
                            })
                        })
                    }) : (c("9"), m(Sa("gdp.e")))
                })
            }

            function Wl(a, c, b) {
                a = b || ph(a);
                return G(a, c) ? a : "en"
            }

            function th(a) {
                if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Bc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return G(a, Vb) ? a : Bc
            }

            function uh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    E(e, d)(kb(a, c))
                } catch (f) {} else vh = W(a, F([a, c, 2 * b], uh), b, "ai.d");
                return function() {
                    return ma(a, vh)
                }
            }

            function Xl(a) {
                var c =
                    n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = E(c, a.speechSynthesis);
                return kc(function(b) {
                    return A(v(b, n), Yl)
                }, a())
            }

            function Zl(a, c, b) {
                return L("x", A(u(O, pa("concat", "" + a), v(b, n)), c))
            }

            function $l(a, c) {
                var b = c.oh;
                if (!am(a, b)) return "";
                var d = [];
                a: {
                    var e = bm(a, b);
                    try {
                        var f = F(e, u)()();
                        break a
                    } catch (I) {
                        if ("ccf" === I.message) {
                            f = null;
                            break a
                        }
                        Wa(I)
                    }
                    f = void 0
                }
                if (Ta(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (I) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = Ka(b.getSupportedExtensions, "getSupportedExtensions") ?
                        b.getSupportedExtensions() || [] : []
                } catch (I) {
                    k = []
                }
                k = L(";", k);
                f = df(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = df(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    vk: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": df(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                ef(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var x = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (I) {}
                    x = {}
                }
                ef(d, x);
                if (!b.getShaderPrecisionFormat) return L("~", d);
                ef(d, cm(b));
                return L("~", d)
            }

            function ef(a, c, b) {
                void 0 === b && (b = ":");
                z(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, ya(c))
            }

            function dm(a, c, b, d) {
                c = d.o("cc");
                d = F(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ga(e)) && 1440 < ha(a)(jb) - e) return d();
                    b.C("cc", c)
                } else la(0)(c) || d()
            }

            function em(a, c, b, d) {
                return qa(c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !Zc(a))
                        if (e = d.o("zzlc"), U(e) || Ta(e) || "na" === e) {
                            e = "ru";
                            var f = ff(a, 68),
                                g = gf(a, 79);
                            if (f || g) e = "md";
                            if (f = $a(a)) {
                                var h = f("iframe");
                                y(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + wh("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Wb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ja(a).D(a, ["message"], C(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (lc(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), ma(a, k))
                                        }));
                                    k = W(a, u(l, v(h, lc)), 3E3)
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function fm(a, c, b) {
                var d, e;
                c = db(v(a, n), gm);
                c = U(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") &&
                    c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    S(a) && (E(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) && !a.length && (a = E(a, f)(), d = n(a, "then"), S(d) && E(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        S(h) && E(h, f, g, B, B)()
                    })(), y(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (S(h)) {
                            h = E(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = B;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = mc(k[1]), b.C("pp", g));
                            f.onicecandidate = B;
                            h()
                        }
                    }, e))))
                }
            }

            function hm(a, c, b) {
                var d, e = $c(a, c);
                if (e) {
                    e.ba.D(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = W(a, F([a, c, b], xh), 200, "pu.m");
                        e.Fe(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ma(a, g), b.C("pu", l))
                        })
                    } else xh(a, c, b)
                }
            }

            function xh(a, c, b) {
                var d = n(a, "location.host");
                a = $d(a, c);
                b.C("pu", "" + mc(d) + a)
            }

            function yh(a, c, b) {
                c = Ac(a, void 0, c);
                c = zh(a, c.o("phc_settings") ||
                    "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? im(a, b.sc, {
                    Eg: jm
                }).dg(g).then(function(h) {
                    return km(b, {
                        Nb: d,
                        Xb: e,
                        ug: f
                    }, h.oa, g, h.za)
                })["catch"](function() {}) : K.resolve()
            }

            function jm(a, c, b) {
                a = lm(b.$c);
                if ("href" === b.Ce) {
                    var d = b.Ab;
                    c = d.href;
                    b = c.replace(a, b.fb);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.Ab.textContent) || void 0 === d ? void 0 : d.replace(a, b.fb)) && a !== b.Ab.textContent) return b.Ab.textContent = a, !0;
                return !1
            }

            function km(a, c, b, d, e) {
                var f;
                c.Nb && c.Xb && (c.Nb === a.Nb && c.Xb === a.Xb || y(a, c, {
                    oa: {},
                    kb: !0
                }), 0 < e && Na(a.za, [e]), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.oa[l] && a.oa[l][g] ? a.oa[l][g] : 0);
                    y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.oa[l] ? a.oa[l][g] : 0);
                    y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Nf && (a.kb || b.length) && ((c = Ha(a.l, a.sc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Nb, f.orderId = a.Xb, f.service_id = a.ug, f.phones = a.oa, f.performance = a.za, f)), a.kb = !1))
            }

            function mm(a) {
                a = $a(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = pa("canPlayType", a),
                        b = kc(function(d) {
                            return A(u(O, pa("concat", d + "; codecs=")), nm)
                        }, Ah);
                    return A(c, [].concat(Ah, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function om(a) {
                var c = n(a, "matchMedia");
                if (c && Ea("matchMedia", c)) {
                    var b = pa("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, pm)
                }
            }

            function cm(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") ||
                        "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
                    ],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function bm(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Ea("getParameter", c.getParameter) || hf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(qm);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Ni = 3;
                    b.Zi = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || hf();
                    return {
                        Ae: d,
                        Zj: e,
                        Yj: b
                    }
                }, function(b) {
                    var d = b.Ae,
                        e = b.Zj;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || hf();
                    return y(b, {
                        Wh: d
                    })
                }, function(b) {
                    var d = b.Ae,
                        e = b.Wh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.Ae;
                    b = b.Yj;
                    d.Xj = c.getAttribLocation(d, "attrVertex");
                    d.aj = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Uk);
                    c.vertexAttribPointer(d.Xj,
                        b.Ni, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.aj, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.Zi);
                    return c.canvas
                }]
            }

            function am(a, c) {
                if (!S(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ea("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function df(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function rm(a, c, b) {
                function d(q) {
                    return function() {
                        var r = b.o("scip", "") + q;
                        b.C("scip", r)
                    }
                }
                var e, f = ad(a, "ci");
                f = Bb(a, f);
                var g = jf(a),
                    h = ha(a)(jb),
                    k = ["sync.cook.int"],
                    l = Bh(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"),
                        p = Cc(a, c);
                    return f({
                        Y: {
                            Da: k,
                            Fb: 1500,
                            ld: !0
                        },
                        G: (e = {}, e.duid = p, e.hid = "" + Ib(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"]).then(function(q) {
                        q = n(q.bd, "CookieMatchUrls");
                        ea(q) || (q = []);
                        Oa(q) ? d("1")() : m();
                        var r = ad(a, "c"),
                            t = Bb(a, r);
                        q = A(function(x, I) {
                                var Z = "" + x + (nc(x, "?") ? "&" : "?") + "duid=" + p;
                                return t({
                                    Y: {
                                        Da: k,
                                        Fb: 1500
                                    }
                                }, ["https://" + Z]).then(B, u(d("b"), d("" + I)))
                            },
                            Y(za, q));
                        return K.all(q)
                    }, m).then(function() {
                        var q = b.o("scip");
                        !q || nc(q, "a") || nc(q, "b") || (g.C("sci", h), d("2")())
                    }, B)
                }
                return K.resolve()
            }

            function Ch(a) {
                return {
                    aa: function(c, b) {
                        if (!c.H) return b();
                        var d = H(a).o("fid");
                        !Dh && d && (Vd(c, "fid", d), Dh = !0);
                        return b()
                    }
                }
            }

            function sm(a, c) {
                var b = a.document;
                if (G(b.readyState, ["interactive", "complete"])) Hb(a, c);
                else {
                    var d = ja(a),
                        e = d.D,
                        f = d.fc,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function kf(a) {
                return {
                    aa: function(c,
                        b) {
                        var d = c.H;
                        if (d) {
                            var e = H(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            }

            function tm(a) {
                var c = C(a, "i.clch", um);
                ja(a).D(a.document, ["click"], E(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = ra.Va,
                        e = a.Ya[ra.pc],
                        f = !!e._informer;
                    e._informer = y({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || jc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Dc(a, c) {
                return {
                    aa: function(b, d) {
                        lf(b) ? d() : qa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.G = y(b.G || {}, e);
                            d()
                        })
                    }
                }
            }

            function vm(a,
                c) {
                var b = Qa(a);
                if ("" === b.o("cc")) {
                    var d = v("cc", b.C);
                    d(0);
                    var e = ha(a),
                        f = H(a);
                    f = u(T(bd({
                        bd: 1
                    }) + ".c"), cd(function(g) {
                        d(g + "&" + e(jb))
                    }), v("cc", f.C));
                    Aa(a, "6", c)({
                        Y: {
                            ld: !0,
                            Ng: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](u(cd(function() {
                        var g = e(jb);
                        b.C("cc", "&" + g)
                    }), C(a, "cc")))
                }
            }

            function ae(a, c) {
                if (!c) return !1;
                var b = R(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function wm(a, c) {
                return qa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Eh: xm(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function zm(a, c, b, d, e) {
                b = mf(a.document.body, b);
                d = mf(a.document.body, d);
                G(e.target, [b, d]) && nf(a, c)
            }

            function Eh(a, c, b, d) {
                (b = Am(a, d, b)) && nf(a, c, b)
            }

            function Fh(a, c) {
                var b = Gh(a, c);
                return Bm(a, b)
            }

            function Gh(a, c) {
                var b = mf(a.document.body, c);
                return b ? Cm(a, b) : ""
            }

            function nf(a, c, b) {
                if (c = Ha(a, c)) a = Ec(["dr", b || "" + Ua(a, 10, 99)]), c.params(Ec(["__ym", a]))
            }

            function mf(a, c) {
                var b = null;
                try {
                    b = c ? Fc(c, a) : b
                } catch (d) {}
                return b
            }

            function Hh(a) {
                a = sa(wh(a));
                return A(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Ih("0", 8,
                        c)
                }, a)
            }

            function Cm(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                of(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function Dm(a, c, b) {
                a = Ba(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    yc: b
                })
            }

            function Em(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Fm, d + "." + b.yc)) && (c && G(b, Gm) || a("ym-" + b + "-" + d))
                }
            }

            function Hm(a, c, b) {
                var d, e = Jh(a, c),
                    f = R(a);
                f = be(f.protocol +
                    "//" + f.hostname + f.pathname);
                c = $d(a, c);
                var g = "";
                do g += Ua(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function Im(a, c, b) {
                var d = n(b, "data");
                if (za(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" +
                        a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function Jm(a, c) {
                var b = Qa(a),
                    d = "wv2rf:" + M(c),
                    e = c.nc,
                    f = pf(a),
                    g = b.o(d),
                    h = c.Qj;
                return U(f) || Ta(g) ? xa(function(k, l) {
                    qa(c, function(m) {
                        var p = n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = pf(a) || n(m, "settings.eu");
                        b.C(d, dd(p));
                        l({
                            nc: e,
                            Lf: !!f,
                            bg: p,
                            Gg: h
                        })
                    })
                }) : qf({
                    nc: e,
                    Lf: f,
                    bg: !!Ga(g),
                    Gg: h
                })
            }

            function Km() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        rd: 0,
                        lh: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove",
                        .5132
                    ],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    eh: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.rd * e.lh)
                            }, 0, ba(a))
                        }
                    },
                    bj: function(c) {
                        c && (c = a[c.data.type]) && (c.rd += 1)
                    }
                }
            }

            function Lm(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c = a.data,
                            b = c.Ia,
                            d = c.gd,
                            e = c.content;
                        delete c.Ia;
                        delete c.gd;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                M: a.M || 0,
                                content: e,
                                Ia: b,
                                gd: d,
                                $: c
                            }
                        };
                        a.L && (c.L = a.L);
                        return c;
                    case "event":
                        a: {
                            c = {
                                type: "event",
                                L: a.L,
                                data: {
                                    M: a.M,
                                    type: a.event,
                                    $: {}
                                }
                            };b = y({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    c.data.$ = {
                                        Og: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        Qg: b,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    c.data.$ = b.Oc;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    c.data.$ = b;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    c.data.target = b.target;
                                    c.data.$ = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    c.data.target =
                                        b.target;
                                    delete b.target;
                                    c.data.$ = b;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        L: a.L,
                                        data: {
                                            M: a.M,
                                            $: {
                                                Ma: [{
                                                    qd: [{
                                                        id: b.target,
                                                        Mb: {
                                                            src: {
                                                                Sc: "",
                                                                n: b.value,
                                                                r: !1
                                                            }
                                                        },
                                                        Fa: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = c
                        }
                        break;
                    case "mutation":
                        return Mm(a)
                }
                return a
            }

            function Mm(a) {
                var c = y({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                vc: {
                                    Sc: "",
                                    n: c.value
                                },
                                Fa: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            qd: [{
                                id: c.target,
                                Mb: N(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        Sc: "",
                                        n: f,
                                        r: na(f)
                                    };
                                    return d
                                }, {}, ya(c.attributes)),
                                Fa: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            $e: A(function(d) {
                                return {
                                    id: d,
                                    Fa: c.index
                                }
                            }, c.ma)
                        }];
                        break;
                    case "ad":
                        b = [{
                            df: A(function(d) {
                                return {
                                    id: d.id,
                                    Uf: d.name,
                                    Vf: d.Tf,
                                    pe: d.parent,
                                    te: d.ve,
                                    je: d.next,
                                    Mb: d.attributes,
                                    Fa: c.index,
                                    vc: d.content,
                                    Xa: d.hidden
                                }
                            }, c.ma)
                        }]
                }
                return {
                    type: "mutation",
                    L: a.L,
                    data: {
                        M: a.M,
                        $: {
                            Ma: b,
                            index: c.index
                        }
                    }
                }
            }

            function Nm(a) {
                return {
                    Yh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    $h: function() {
                        if (a.document.doctype) {
                            var c = y({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + L("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    },
                    mi: function() {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"),
                                b = !1;
                            try {
                                var d = a.opener ? a.opener.sessionStorage : null;
                                b = !!d && c === d.getItem("__vw_tab_guid")
                            } catch (e) {
                                b = !0
                            }
                            if (!c || b) c = Kh(), a.sessionStorage.setItem("__vw_tab_guid", c);
                            return c
                        } catch (e) {
                            return null
                        }
                    }
                }
            }

            function Om(a, c, b) {
                var d = ed(a),
                    e = ja(a),
                    f = cb(a),
                    g = c.Kd(),
                    h = !n(a, "postMessage") ||
                    f && !n(a, "parent.postMessage"),
                    k = v(d, O);
                if (h) {
                    if (!g) return W(a, E(d.O, d, "i", {
                        wa: !1
                    }), 10), {
                        Jd: k,
                        ng: B,
                        stop: B
                    };
                    Wa(Sa())
                }
                d.D(["sr"], function(r) {
                    var t, x = Lh(a, r.source);
                    x && rf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ua().Z(x), t))
                });
                d.D(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || Lh(a, r)) && d.O("sdr", {
                        data: t.data,
                        M: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            rf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = W(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.na(["\u043d"], q);
                        ma(a, m);
                        var t = Gc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== R(a).host && !G(t, b) || (l = !0, d.O("i", {
                            M: r.data.frameId,
                            wa: !0
                        }))
                    };
                    d.D(["\u043d"], q);
                    W(a, function() {
                        d.na(["\u043d"], q);
                        ma(a, m);
                        l || (l = !0, d.O("i", {
                            wa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.D(a, ["message"], function(r) {
                    var t = rb(a, r.data);
                    t && t.type && G(t.type, Pm) && d.O(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    Jd: k,
                    ng: function(r) {
                        var t;
                        return rf(a, a.parent, (t = {}, t.frameId = c.Kd(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function Lh(a, c) {
                try {
                    return db(u(T("contentWindow"),
                        la(c)), sa(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function rf(a, c, b) {
                a = kb(a, b);
                c.postMessage(a, "*")
            }

            function Kh() {
                return Xb() + Xb() + "-" + Xb() + "-" + Xb() + "-" + Xb() + "-" + Xb() + Xb() + Xb()
            }

            function Xb() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function Qm(a, c) {
                if (za(c)) return c;
                var b = a.textContent;
                if (za(b)) return b;
                b = a.data;
                if (za(b)) return b;
                b = a.nodeValue;
                return za(b) ? b : ""
            }

            function Rm(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ia(c));
                var f = y(N(function(h, k) {
                    h[k.name] =
                        k.value;
                    return h
                }, {}, sa(c.attributes)), d);
                y(f, Sm(c, e, f));
                var g = (d = N(function(h, k) {
                    var l = k[0],
                        m = ce(a, c, l, k[1], b, e),
                        p = m.value;
                    na(p) ? delete f[l] : f[l] = p;
                    return h || m.rb
                }, !1, ya(f))) && fd(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    rb: d,
                    hh: f
                }
            }

            function Sm(a, c, b) {
                var d = {};
                sf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function ce(a, c, b, d, e, f) {
                void 0 === f && (f = Ia(c));
                var g = {
                    rb: !1,
                    value: d
                };
                if (sf(c)) "value" === b ? !na(d) && "" !== d && (b = e.Lf, f = e.bg, e = gd(a, c), f ? (b = hd(a, c, b), a = b.Xd, c = b.Gd, b = b.vb,
                    g.rb = !c && (e || a)) : (g.rb = e, b = !de(c)), b || e) && (g.value = L("", A(v("\u2022", O), ("" + d).split("")))) : "checked" === b && G((c.getAttribute("type") || "").toLowerCase(), Tm) ? g.value = c.checked ? "checked" : null : Um.test(b) && tf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = gd(a, c)) ? (g.rb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (G(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === ee(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && G(b, ["src", "type"])) g.value = null;
                return g
            }

            function uf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    J: function(e, f) {
                        return C(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function Vm(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.Ib) return K.resolve(B);
                var g = Aa(a, "4", c),
                    h = {
                        H: Ca()
                    };
                b = new Wm(a, b, function(l, m, p) {
                    var q;
                    if (!g) return K.resolve();
                    m = "wv-data=" + Mh(l, !0);
                    return g(y({}, h, {
                        Y: {
                            fa: m
                        },
                        G: (q = {}, q["wv-check"] =
                            "" + Xm(l), q["wv-type"] = "0", q)
                    }), c, p)["catch"](C(a, "m.n.m.s"))
                });
                var k = Ym(a, b, d, e);
                return qa(c, function(l) {
                    l && H(a).C("isEU", n(l, "settings.eu"));
                    H(a).o("oo") || k && Nh(a, l) && k.start();
                    return f
                })
            }

            function Ym(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ja(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = E(c.flush, c),
                    m = ka(function(r, t) {
                        C(a, "hfv." + r, function() {
                            try {
                                var x = t.type
                            } catch (I) {
                                return
                            }
                            x = G(x, d);
                            c.push(t, {
                                type: r
                            });
                            x && l()
                        })()
                    }),
                    p = C(a, "sfv", function() {
                        var r = b(a),
                            t = Zm(a);
                        z(function(x) {
                                f.push(g.D(x.target, [x.event], m(x.type)))
                            },
                            r);
                        z(function(x) {
                            f.push(g.D(x.target, [x.event], C(a, "hff." + x.type + "." + x.event, function(I) {
                                z(xa({
                                    l: a,
                                    sa: I,
                                    flush: l
                                }), x.N)
                            })))
                        }, t);
                        k = Oh(a, "form", e);
                        e.attachEvent && (r = Oh(a, "form *", e), z(function(x) {
                            f.push(g.D(x, ["submit"], m("form")))
                        }, k), z(function(x) {
                            vf(x) && f.push(g.D(x, ["change"], m("formInput")))
                        }, r));
                        z(function(x) {
                            var I = x.submit;
                            if (S(I) || "object" === typeof I && $m.test("" + I)) x[h] = I, x.submit = C(a, "fv", function() {
                                var Z = {
                                    target: x,
                                    type: "submit"
                                };
                                m("document")(Z);
                                return x[h]()
                            })
                        }, k)
                    }),
                    q = C(a, "ufv", function() {
                        z(ia,
                            f);
                        z(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function an(a, c) {
                var b = Y(function(e) {
                        return 0 < e.N.length
                    }, c),
                    d = Ph({
                        target: a.document,
                        type: "document"
                    });
                return A(u(O, d, bn(a)), b)
            }

            function Qh(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Va] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        fe(h) && !h[Va] && Na(d, oc(b, h))
                    }
                } else Na(d, oc(b, c));
                return d
            }

            function wf(a) {
                if (id) {
                    id = !1;
                    var c = sb(a.l),
                        b = [];
                    eb(a.l, b, 15) ? a = [] : (Q(b, c), a = b);
                    return a
                }
            }

            function Rh(a) {
                if (!id) {
                    id = !0;
                    a = sb(a.l);
                    var c = [];
                    Jb(c, 14);
                    Q(c, a);
                    return c
                }
            }

            function cn(a, c, b) {
                var d = c[Va];
                if (d) {
                    a: {
                        var e = sb(a),
                            f = c[Va];
                        if (0 < f) {
                            var g = [];
                            c = xf(a, c);
                            var h = pc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Yf) {
                                h.Yf = k;
                                if (eb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[0]);
                                Q(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (eb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[2]);
                                Q(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Na(b, a)
                }
                return d
            }

            function hd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {
                    vb: !1,
                    Gd: !1,
                    Xd: !1
                };
                var d = de(c),
                    e = yf(c);
                a = zf(a, c) || b && e;
                return {
                    vb: !(d || !a),
                    Gd: d,
                    Xd: e
                }
            }

            function zf(a, c) {
                return tf(a, c) || jd(a, c) ? !0 : gd(a, c)
            }

            function yf(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = Y(Sh, [a.className, a.id, a.name]);
                return b && G(b, dn) || La(Xa(en), a) || Sh(c) && fn.test(c)
            }

            function Sh(a) {
                return !!(a && 2 < a.length)
            }

            function sf(a) {
                try {
                    var c = Ia(a);
                    if (G(c, Af)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || G(b.toLocaleLowerCase(), gn)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function Th(a, c) {
                return c && qc("(ym-disable-submit|-metrika-noform)", c)
            }

            function de(a) {
                return a &&
                    qc("ym-record-keys", a)
            }

            function hn(a, c) {
                return L("", A(function(b) {
                    return a.isNaN(b) ? jn.test(b) ? (b = b.toUpperCase() === b ? kn : ln, String.fromCharCode(Ua(a, b[0], b[1]))) : b : "" + Ua(a, 0, 9)
                }, c.split("")))
            }

            function gd(a, c) {
                if (na(c)) return !1;
                if (Bf(c)) {
                    var b = c.parentNode;
                    return (na(b) ? 0 : 11 === b.nodeType) ? !1 : gd(a, c.parentNode)
                }
                if (mn.test(c.className)) return !0;
                b = Uh(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (nn.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Nh(a,
                c) {
                var b = Yb(a),
                    d = b.o("visorc");
                G(d, ["w", "b"]) || (d = "");
                Vh(a) && Wh(a, ge, "visorc") && !on.test(lb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = H(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.C("visorc", d, 30);
                return "w" === d
            }

            function Xh(a) {
                var c = Cf(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return Df(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
            }

            function Ef(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return hc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function he(a, c, b) {
                a = c(b);
                c = [B, 0, 0];
                var d = [0, c, c, void 0];
                return hc(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) rc(d, mb(l)), h = k(h), l & 2 && rc(d, mb(h[1])), rc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Ff]);
                            m.push([0, mb(l), rc]);
                            m.unshift([0, 0, Gf]);
                            f.push.apply(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ba(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Gf],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, Ff],
                                [0, mb(l), rc]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Ff]), m.push([0, mb(l), rc]), m.unshift([0, 0, Gf]), f.push.apply(f, m);
                    return d
                })
            }

            function Gf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [B, 0, 0], a[2] = a[1]);
                rc(a, mb(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Ff(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [B, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function rc(a, c) {
                a[0] +=
                    c[1];
                a[2][3] = c;
                a[2] = c
            }

            function Hf(a) {
                return [
                    [385, a.dh, mb],
                    [336, a.qj, pn],
                    [272, a.fh, qn],
                    [208, a.event, rn],
                    [144, a.Vi, sn],
                    [80, a.page, tn]
                ]
            }

            function un(a) {
                return [
                    [321, a.end, Kb],
                    [273, a.uh, vn],
                    [193, a.page, J],
                    [144, a.data, Hf],
                    [65, a.L, J]
                ]
            }

            function Yh(a) {
                return [
                    [84, a.buffer, un]
                ]
            }

            function wn(a) {
                return [
                    [129, a.position, J],
                    [81, a.name, P]
                ]
            }

            function xn(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function yn(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function qn(a) {
                return [
                    [593, a.Uj, P],
                    [532, a.vj, wn],
                    [449, a.gf, J],
                    [401, a.pj, P],
                    [340, a.Jj, xn],
                    [276, a.ih, yn],
                    [209,
                        a.lj, P
                    ],
                    [145, a.mj, P],
                    [65, a.id, mb]
                ]
            }

            function zn(a) {
                return [
                    [513, a.gf, J],
                    [489, a.Si, kd],
                    [385, a.Oa, J],
                    [321, a.height, J],
                    [257, a.width, J],
                    [193, a.y, J],
                    [129, a.x, J],
                    [65, a.id, mb]
                ]
            }

            function pn(a) {
                return [
                    [129, a.Oa, J],
                    [84, a.gh, zn]
                ]
            }

            function An(a) {
                return [
                    [81, a.hash, P]
                ]
            }

            function Bn(a) {
                return [
                    [209, a.stack, P],
                    [145, a.Jh, P],
                    [81, a.code, P]
                ]
            }

            function Cn(a) {
                return [
                    [193, a.orientation, J],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function Dn(a) {
                return [
                    [84, a.Oc, En]
                ]
            }

            function En(a) {
                return [
                    [273, a.Pc, P],
                    [193, a.Mf, Kb],
                    [145, a.key, P],
                    [65, a.id,
                        J
                    ]
                ]
            }

            function Fn(a) {
                return [
                    [145, a.value, P],
                    [81, a.Jk, P]
                ]
            }

            function Gn(a) {
                return [
                    [149, a.Lb, P],
                    [81, a.method, P]
                ]
            }

            function Hn(a) {
                return [
                    [257, a.xb, J],
                    [193, a.yb, J],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function In(a) {
                return [
                    [144, a.Qg, Zh],
                    [80, a.Og, Zh]
                ]
            }

            function Zh(a) {
                return [
                    [193, a.y, J],
                    [129, a.x, J],
                    [105, a.level, kd]
                ]
            }

            function Jn(a) {
                return [
                    [84, a.touches, Kn]
                ]
            }

            function Kn(a) {
                return [
                    [297, a.force, kd],
                    [233, a.y, kd],
                    [169, a.x, kd],
                    [81, a.id, P]
                ]
            }

            function Ln(a) {
                return [
                    [193, a.hidden, Kb],
                    [129, a.checked, Kb],
                    [81, a.value, P]
                ]
            }

            function Mn(a) {
                return [
                    [257,
                        a.kf, J
                    ],
                    [193, a.wg, J],
                    [129, a.end, J],
                    [65, a.start, J]
                ]
            }

            function Nn() {
                return []
            }

            function On(a) {
                return [
                    [193, a.page, Kb],
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function Pn(a) {
                return [
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function Qn(a) {
                return [
                    [84, a.Ma, Rn]
                ]
            }

            function Rn(a) {
                return [
                    [257, a.index, J],
                    [209, a.oe, P],
                    [145, a.style, P],
                    [65, a.target, J]
                ]
            }

            function rn(a) {
                return [
                    [1168, a.Cj, Qn],
                    [1104, a.Ai, An],
                    [1040, a.Mh, Bn],
                    [976, a.Ch, Cn],
                    [912, a.Pi, Dn],
                    [848, a.sj, Hn],
                    [784, a.ck, In],
                    [720, a.Kk, Fn],
                    [656, a.Gk, Gn],
                    [592, a.Kj, Jn],
                    [528, a.ph, Ln],
                    [464, a.yj, Mn],
                    [400, a.$j,
                        Nn
                    ],
                    [336, a.wj, On],
                    [272, a.Ti, Pn],
                    [193, a.M, ie],
                    [129, a.target, ie],
                    [65, a.type, mb]
                ]
            }

            function sn(a) {
                return [
                    [257, a.M, ie],
                    [208, a.$, Sn],
                    [129, a.L, J],
                    [65, a.target, J]
                ]
            }

            function Sn(a) {
                return [
                    [148, a.Ma, Tn],
                    [65, a.index, J]
                ]
            }

            function Tn(a) {
                return [
                    [276, a.d, Un],
                    [212, a.qd, Vn],
                    [148, a.df, Wn],
                    [84, a.$e, Xn]
                ]
            }

            function Un(a) {
                return [
                    [193, a.Fa, J],
                    [144, a.vc, $h],
                    [65, a.id, J]
                ]
            }

            function Vn(a) {
                return [
                    [193, a.Fa, J],
                    [146, a.Mb, 81, P, 144, $h],
                    [65, a.id, J]
                ]
            }

            function $h(a) {
                return [
                    [193, a.r, Kb],
                    [145, a.n, P],
                    [81, a.Sc, P]
                ]
            }

            function Wn(a) {
                return [
                    [641,
                        a.Xa, Kb
                    ],
                    [577, a.Fa, J],
                    [513, a.je, J],
                    [465, a.vc, P],
                    [402, a.Mb, 81, P, 145, P],
                    [321, a.te, J],
                    [273, a.Vf, P],
                    [193, a.pe, J],
                    [145, a.Uf, P],
                    [65, a.id, J]
                ]
            }

            function Xn(a) {
                return [
                    [321, a.Fa, J],
                    [257, a.pe, J],
                    [193, a.je, J],
                    [129, a.te, J],
                    [65, a.id, J]
                ]
            }

            function tn(a) {
                return [
                    [321, a.Ia, Yn],
                    [273, a.gd, P],
                    [193, a.M, ie],
                    [148, a.content, Zn],
                    [80, a.$, $n]
                ]
            }

            function Zn(a) {
                return [
                    [513, a.hidden, Kb],
                    [449, a.ve, J],
                    [385, a.next, J],
                    [337, a.content, P],
                    [257, a.parent, J],
                    [210, a.attributes, 81, P, 145, P],
                    [145, a.name, P],
                    [65, a.id, J]
                ]
            }

            function $n(a) {
                return [
                    [724,
                        a.Ck, ao
                    ],
                    [656, a.location, bo],
                    [592, a.viewport, ai],
                    [528, a.screen, ai],
                    [449, a.Gf, Kb],
                    [401, a.ef, P],
                    [337, a.referrer, P],
                    [273, a.Hg, P],
                    [209, a.bf, P],
                    [145, a.title, P],
                    [81, a.doctype, P]
                ]
            }

            function ao(a) {
                return [
                    [133, a.scroll, J],
                    [65, a.target, J]
                ]
            }

            function bo(a) {
                return [
                    [209, a.path, P],
                    [145, a.protocol, P],
                    [81, a.host, P]
                ]
            }

            function ai(a) {
                return [
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function P(a) {
                var c = co({}, a, [], 0);
                return c ? [eo, c, a] : [bi, 0, 0]
            }

            function vn(a) {
                return [fo, a.length, a]
            }

            function Kb(a) {
                return [bi, 1, a ? 1 : 0]
            }

            function Yn(a) {
                a =
                    ci(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [di, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function kd(a) {
                return [go, 4, a]
            }

            function ie(a) {
                return mb((a << 1 ^ a >> 31) >>> 0)
            }

            function J(a) {
                return 0 > a ? [di, 10, ci(a)] : mb(a)
            }

            function mb(a) {
                return [ho, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function ho(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function bi(a, c, b, d) {
                b[d] = c
            }

            function fo(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function ei(a) {
                return function(c,
                    b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        } return a ? g : e
                }
            }

            function go(a, c, b, d) {
                return io(a)(a, c, b, d)
            }

            function jo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) ld(0 < 1 / c ? 0 : 2147483648,
                    b, d);
                else if (a.isNaN(c)) ld(2143289344, b, d);
                else if (3.4028234663852886E38 < c) ld((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) ld((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    ld((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function ld(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function di(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] =
                    c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function ci(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function je(a) {
                return ea(a) ? A(je, a) : na(a) || "object" !== typeof a ? a : N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = ko[d];
                    U(f) && (f = d);
                    e = G(f, lo) ? e : je(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, ya(a))
            }

            function fi(a, c, b) {
                return function(d, e, f) {
                    var g;
                    d = y({
                        H: Ca()
                    }, d);
                    d.H.cc("we", Cb(e.Ib));
                    d.G || (d.G = {});
                    var h = d.G,
                        k = d.Qa;
                    k = void 0 === k ? {} : k;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" + Ib(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Ua(a);
                    h["wv-type"] || (h["wv-type"] = k.Vd ? "3" : "2");
                    f = {
                        ra: {
                            Ja: "webvisor/" + e.id
                        },
                        Y: y(d.Y, {
                            zb: (g = {}, g["Content-Type"] = "text/plain", g),
                            Ve: "POST"
                        }),
                        G: h
                    };
                    e = Na(If(a, "wv", e), b);
                    return ke(a, c, e)(y(d, f))
                }
            }

            function mo(a, c) {
                return qa(c, function(b) {
                    var d = H(a);
                    M(c);
                    if (!d.o("dSync", !1)) return d.C("dSync", !0), gi(a, b, {
                        hb: c,
                        Yc: "s",
                        ce: "ds",
                        Ej: function(e, f, g) {
                            var h = e.bd;
                            e = e.host;
                            if (n(h, "settings")) return Wa(Sa("ds.e"));
                            f = f(aa) - g;
                            g = e[1];
                            var k, l;
                            h = Ca((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = R(a).href, l);
                            return Aa(a, "S", hi)({
                                H: h,
                                G: k
                            }, hi)["catch"](C(a, "ds.rs"))
                        }
                    })
                })
            }

            function gi(a, c, b) {
                var d = b.hb,
                    e = ha(a),
                    f = no(a, c.userData, d),
                    g = oo(a);
                return g.length ? po(a, e, f, c, b).then(function() {
                    return qo(a, g, f, e, b)
                }, B) : K.resolve()
            }

            function oo(a) {
                var c = md(a);
                a = u(Jf, sc(["iPhone", "iPad"]))(a);
                return c ? ro : a ? so : []
            }

            function qo(a, c, b, d, e) {
                var f = e.Ej,
                    g = void 0 === f ? B : f,
                    h = e.ce,
                    k = d(aa);
                return to(a, c, e)(Ra(function(l) {
                    z(function(m) {
                        m &&
                            le(a, h + ".s", m)
                    }, l);
                    l = d(jb);
                    b.C(h, l)
                }, function(l) {
                    b.C(h, d(jb));
                    g(l, d, k)
                }))
            }

            function po(a, c, b, d, e) {
                var f = e.ce,
                    g = e.hb;
                return new K(function(h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(jb) - l ? k() : uo(a) ? h(void 0) : ii(d) ? k() : h(vo(a, g))
                })
            }

            function to(a, c, b) {
                var d = b.Yc,
                    e = b.data,
                    f = Aa(a, d, b.hb);
                a = y({}, ji);
                e && y(a.G, e);
                return wo(A(function(g) {
                    return xo(f(y({
                        Y: {
                            Ng: !1,
                            uj: !0
                        }
                    }, ji), A(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = L("", A(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" +
                            (l ? "s" : "") + "://" + h + ":" + k + "/" + yo[d]
                    }, g)).then(function(h) {
                        return y({}, h, {
                            host: g[h.Jg]
                        })
                    }))
                }, c))
            }

            function no(a, c, b) {
                var d = c || {},
                    e = Aa(a, "u", b),
                    f = Qa(a);
                return {
                    o: function(g, h) {
                        return U(d[g]) ? f.o(g, h) : d[g]
                    },
                    C: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({
                            G: (k = {}, k.key = g, k.value = l, k)
                        }, [ra.Va + "//" + Zb + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s"))
                    }
                }
            }

            function zo(a) {
                return {
                    aa: function(c, b) {
                        H(a).o("oo") || b()
                    }
                }
            }

            function Ao(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return K.resolve()
                    }
                }
                return function(e) {
                    var f,
                        g = (f = {}, f["browser-info"] = Bo, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = kb(a, e)) ? d(Co, {
                        Zb: g,
                        Da: [],
                        fa: "site-info=" + be(e)
                    })["catch"](B) : K.resolve()
                }
            }

            function Do(a, c) {
                if (a["disableYaCounter" + c.id]) {
                    var b = M(c);
                    delete H(a).o("counters", {})[b];
                    Wa(Sa("oo.e"))
                }
            }

            function Eo(a) {
                if (nd(a)) return null;
                var c = Fo(a),
                    b = c.ag;
                U(b) && (c.ag = null, Go(a).then(function(d) {
                    c.ag = d
                }));
                return b ? 1 : null
            }

            function Ho(a, c, b) {
                b = b.G;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Kf(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") &&
                    (d = n(a.getEntriesByType("navigation"), "0")) && (b = Io);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Jo, d = e)
                }
                if (!b) return null;
                a = Ko(a, d, b);
                c = M(c);
                c = Lo(c);
                return (c = Mo(c, a)) && L(",", c)
            }

            function Mo(a, c) {
                var b = a.length ? A(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                z(u(O, pa("push", a)), c);
                return Y(la(null), b).length === a.length ? null : b
            }

            function Ko(a, c, b) {
                return A(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (S(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] &&
                        0 === c[f]) && (g = d[1], g = !(ki[d[0]] || ki[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Mh(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g &
                        63
                    ])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ?
                    li(e, !0) : e
            }

            function wh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = li(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f ||
                        0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function li(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return No[b] || b
                }) : ""
            }

            function Oo(a) {
                try {
                    var c = Oa(a) ? a : [];
                    return L(",", [a.name, a.description, u(sa, Hc(Boolean), fb(Po), od(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Po(a) {
                return L(",", [a.description, a.suffixes, a.type])
            }

            function Qo(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Ro(a, c, b, d, e, f, g, h) {
                var k = b.o(f);
                na(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g));
                U(h) || h.cc(f, "" + k);
                return k
            }

            function So(a, c) {
                if (pd(a)) {
                    var b = lb(a).match(To);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function me(a, c, b) {
                return function(d) {
                    var e, f, g = Ha(c, b);
                    g && Uo(a, d, c) && (g = E(g.params, g), (d = Lf({
                        event: a,
                        Gb: "products",
                        sb: Ic,
                        si: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Uo(a, c, b) {
                var d = !1,
                    e = "";
                if (!Ma(c)) return Ab(b, "",
                    "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ea(f) && f.length ? (d = Df(function(g) {
                            return Ma(g) && (za(g.id) || ne(b, g.id) || za(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        ne(b, c.id) || za(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                Ab(b, "", e);
                return d
            }

            function Vo(a, c) {
                function b() {
                    q.hidden ? y(k.style,
                        qd(["top", "right", "left", "background"], "initial")) : y(k.style, qd(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    x.parentNode || (r.appendChild(p), r.appendChild(x));
                    q.hidden = !q.hidden;
                    r.hidden = !r.hidden;
                    t.hidden = !t.hidden
                }

                function d(V) {
                    var oa = g();
                    y(oa.style, tc("2px", "18px"), Jc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    oa.style.transform = "rotate(" + V + "deg)";
                    return oa
                }

                function e(V, oa, ta, tb, rd) {
                    var oe = g();
                    y(oe.style, tc(oa + "px", ta + "px"), Jc, {
                        left: V + "px",
                        bottom: 0,
                        background: tb,
                        borderTopLeftRadius: rd
                    });
                    return oe
                }
                var f = $a(a);
                if (!f) return B;
                var g = v("div", f),
                    h = v("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                y(k.style, mi, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                y(m.style, tc("24px"), Jc, Mf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                y(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Mf, Jc, tc("48px"), qd(["top",
                    "left"
                ], "calc(50% - 24px)"), qd(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var q = g();
                q.id = "__ym_wv_ign__opener";
                y(q.style, tc("46px", "48px"), mi, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var r = g();
                y(r.style, Jc, qd(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                y(t.style, tc("32px"), Jc, Mf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var x = h();
                y(x.style, tc("100%"), {
                    border: "none"
                });
                x.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                r.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                r.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                q.appendChild(m);
                l.appendChild(r);
                l.appendChild(t);
                var I = ["click", "touchstart"];
                h = ja(a);
                m = a.document.body;
                l = [h.D(q, I, b), h.D(t, I, b), h.D(f, ["load"], F([ia, [E(r.removeChild, r, f), E(l.appendChild, l, q)]], z)), h.D(x, ["load"], E(r.removeChild, r, p)), E(m.removeChild, m, k)];
                var Z = F([ia, l], z);
                l.push(h.D(a, ["securitypolicyviolation"], function(V) {
                    (V = n(V, "blockedURI")) && 0 <= V.indexOf("https://metrika.yandex.ru") && Z()
                }));
                m.appendChild(k);
                return Z
            }

            function qd(a, c) {
                return N(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function tc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function Wo(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && La(u(Xa, xa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = rb(a, c.data), "appendremote" === n(b, "action") && Xo(a, c, b))
            }

            function ni(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = H(a),
                    l = {};
                l.getCachedTags = Nf;
                l.form = (e = {}, e.closest = v(a,
                    oi), e.select = Yo, e.getData = v(a, pi), e);
                l.button = (f = {}, f.closest = v(a, Of), f.select = Pf, f.getData = v(a, Qf), f);
                l.phone = (g = {}, g.hidePhones = F([a, null, [d]], qi), g);
                l.status = (h = {}, h.checkStatus = F([a, Ga(b)], Zo), h);
                k.C("_u", l);
                c && jc(a, {
                    src: c
                })
            }

            function ri(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = L(".", u(fb(u(O, Ga)), Hc(Boolean))(b.split(".")));
                if (!G(d, $o) || !G(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" :
                    "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return si(c) ? c : ""
            }

            function ap(a, c) {
                var b = $a(a);
                if (b) {
                    var d = b("div"),
                        e = Wb(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            jc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function Zo(a) {
                var c, b = ti(a);
                a = H(a).o("getCounters", sd)();
                a = A(T("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && G(b, a), c
            }

            function qi(a, c, b) {
                var d;
                c = ui(a, c, {
                    Eg: bp,
                    Xi: (d = {}, d.href = !0, d)
                });
                b = Y(Boolean,
                    A(function(f) {
                        return "*" === f ? f : Lb(f)
                    }, b));
                var e = A(u(O, pa("concat", [""]), vi("reverse"), ia), b);
                b = td(a);
                d = wi(a, b, 1E3);
                c = E(c.dg, c, e);
                d.D(c);
                cp(a, b);
                xi(a, b);
                c()
            }

            function bp(a, c, b) {
                var d = $a(a),
                    e = b.Ab,
                    f = b.$c,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.Ce && h && d && g) {
                    b = d("small");
                    yi(b);
                    var k = h.split(""),
                        l = zi(h).length;
                    z(pa("appendChild", b), N(function(m, p) {
                        var q = m.ma,
                            r = m.Mg,
                            t = d("small");
                        t.innerHTML = p;
                        var x = dp.test(p);
                        yi(t);
                        x && (t.style.opacity = "" + (l - r - 1) / l);
                        q.push(t);
                        return {
                            ma: q,
                            Mg: r + (x ? 1 : 0)
                        }
                    }, {
                        ma: [],
                        Mg: 0
                    }, k).ma);
                    ep(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function ep(a, c, b, d) {
                function e() {
                    z(v(["style", "opacity", ""], Ec), sa(b.childNodes));
                    if (c) {
                        var k = Ha(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ja(a),
                    g = B,
                    h = B;
                g = f.D(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = W(a, e, 200, "ph.h.e");
                        (h || B)();
                        h = f.D(b, ["mouseleave"], function(m) {
                            m.target === b && ma(a, l)
                        })
                    }
                })
            }

            function xi(a, c) {
                $b(a)(Ra(B, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Ea("MutationObserver",
                        a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
                }))
            }

            function cp(a, c) {
                return ja(a).D(a, ["load"], c.O)
            }

            function ui(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.$c]) || void 0 === l ? void 0 : l.jd : null
                }
                var e, f = b.Eg;
                b = b.Xi;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    dg: function(k) {
                        return new K(function(l, m) {
                            k && k.length || m();
                            h = Ai()(k);
                            $b(a)(Ra(v({
                                oa: [],
                                za: 0
                            }, l), function() {
                                var p = ha(a),
                                    q = p(aa),
                                    r = g.href ? fp(a, h) : [],
                                    t = g.text ? Bi(a, h) : [];
                                l({
                                    oa: Y(ea, Y(Boolean, A(d, r.concat(t)))),
                                    za: p(aa) -
                                        q
                                })
                            }))
                        })
                    }
                }
            }

            function fp(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Ci(c);
                return N(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Lb(k) : "",
                            m = c[l];
                        U(m) || !l && "*" !== m.jd[0] || (e.push({
                            Ce: "href",
                            Ab: f,
                            $c: l,
                            fb: Di(k, c[l].fb),
                            Gj: g
                        }), g = Lb(h.slice(4)), l = Ai()([l ? m.jd : [g, ""]]), e.push.apply(e, Bi(a, l, f)))
                    }
                    return e
                }, [], sa(b.querySelectorAll("a")))
            }

            function Bi(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = Ci(c);
                of(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = Y(Boolean, e.exec(f.textContent || "") || []);
                        z(function(h) {
                            var k = Lb(h);
                            U(c[k]) || d.push({
                                Ce: "text",
                                Ab: f,
                                $c: k,
                                fb: Di(h, c[k].fb),
                                Gj: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Ai() {
                return ud(function(a, c) {
                    var b = A(Lb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        fb: b,
                        jd: c
                    };
                    var e = Ei(d);
                    e !== d && (a[e] = {
                        fb: Ei(b),
                        jd: c
                    });
                    return a
                }, {})
            }

            function Di(a, c) {
                for (var b = [], d = a.split(""),
                        e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return L("", b) + c.slice(f + 1)
            }

            function Ei(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Ci(a) {
                return new RegExp("(?:" + L("|", A(Fi, ba(a))) + ")")
            }

            function Gi(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? of(a, c, pa("push", e), d) : Na(e, Hi(a, c, d)));
                    z(b, e)
                }
            }

            function of(a, c, b, d, e) {
                function f(g) {
                    return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT :
                        a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Bf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Hi(a, c, b) {
                var d = [],
                    e = u(O, pa("push", d));
                S(b) ? (b = b(c), (na(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Hi(a, c[b]);
                        z(e, g)
                    }
                }
                return d
            }

            function Ii(a, c, b) {
                var d;
                a = [Ji(a,
                    c,
                    function(e) {
                        d = e;
                        e.ya.D(b)
                    }), function() {
                    d && d.unsubscribe()
                }];
                return F([Ki, a], z)
            }

            function gp(a, c, b, d) {
                var e, f;
                if (b) {
                    var g = n(d, "ecommerce") || {};
                    var h = n(d, "event") || "";
                    g = Ma(g) && za(h) ? Lf(h, g) : void 0;
                    if (!g) a: {
                        var k = d;!ea(d) && ne(a, Oa(d)) && (k = Ba(k));
                        if (ea(k) && (g = k[0], h = k[1], k = k[2], za(h) && Ma(k) && "event" === g)) {
                            g = Lf(h, k);
                            break a
                        }
                        g = void 0
                    }
                    if (d = g || hp(d)) gb(a, {
                        da: c,
                        name: "ecommerce",
                        data: d
                    }), b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
                }
            }

            function hp(a) {
                var c = n(a, "ecommerce");
                if (Ma(c)) return a = Y(sc(ip), ba(c)), a =
                    N(function(b, d) {
                        b[d] = c[d];
                        return b
                    }, {}, a), 0 === ba(a).length ? void 0 : a
            }

            function Lf(a, c) {
                var b, d, e = za(a) ? jp[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Gb,
                        h = e.si,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(v(e.sb, kp), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ba(l);
                        g && 1 < b.length && (m[f].actionField = N(function(p, q) {
                            if (q === k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[lp[q] || Rf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function kp(a, c) {
                var b = {};
                z(function(d) {
                    var e = a[d] || Rf[d] || d; - 1 !== d.indexOf("item_category") ?
                        (e = Rf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ba(c));
                return b
            }

            function mp(a, c, b) {
                if (b && (b = Of(a, b), b = Qf(a, b))) {
                    b = "?" + vd(b);
                    var d = Db(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    pe(a, c, "btn", d).reachGoal(b)
                }
            }

            function np(a, c, b, d) {
                d = n(d, "target");
                (d = ac("button,input", a, d)) && "submit" === d.type && (d = oi(a, d)) && (b.push(d), W(a, F([!1, a, c, b, d], Li), 300))
            }

            function Li(a, c, b, d, e) {
                var f = Mb(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = pi(c, e), a = "?" + vd(a), d = F([c, b, "Form goal. Counter " + b.id + ". Form: " +
                    a + "."
                ], Mi), pe(c, b, "form", d).reachGoal(a)
            }

            function Mi(a, c, b) {
                return op(a, c).then(function(d) {
                    d && Db(a, c, b)()
                })
            }

            function pi(a, c, b) {
                return Ni(a, c, ["i", "n", "p"], void 0, b)
            }

            function pp(a, c) {
                var b;
                a((b = {}, b.clickmap = U(c) ? !0 : c, b))
            }

            function qp(a, c, b, d, e) {
                var f;
                c = {
                    H: Ca(),
                    G: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f),
                    ra: {
                        Ja: "clmap/" + e.id
                    }
                };
                d(c, e)["catch"](C(a, "c.s.c"))
            }

            function rp(a, c, b, d, e) {
                if (wd(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ia(c.element);
                if (e && !e(c.element, a) || G(c.button, [2, 3]) && "A" !==
                    a || La(la(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (sp(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function tp(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function up(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 ===
                    a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function Oi(a, c) {
                var b = Wb(a),
                    d = Sf(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Tf(a, c) {
                return {
                    aa: function(b, d) {
                        var e, f = b.H,
                            g = b.Ka,
                            h = b.G,
                            k = b.Y;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ha(a);
                            f.cc("rqnl", 1);
                            for (var m = xd(a), p = 1; m[p];) p += 1;
                            b.V || (b.V = {});
                            b.V.$b = p;
                            m[p] = (e = {}, e.protocol = ra.Va, e.host = Zb, e.resource = b.ra.Ja, e.postParams = k.fa, e.time = l(aa), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid =
                                Ib(a), e);
                            g && (m[p].telemetry = g.l());
                            Uf(a)
                        }
                        d()
                    },
                    Ca: function(b, d) {
                        Pi(a, b);
                        d()
                    }
                }
            }

            function Pi(a, c) {
                var b = xd(a);
                c.H && !Ta(b) && c.V && (delete b[c.V.$b], Uf(a))
            }

            function Uf(a) {
                var c = xd(a);
                Qa(a).C("retryReqs", c)
            }

            function vp(a, c) {
                if (a.Oj()) {
                    var b = Qi(c);
                    if (b && !qc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.zh,
                            f = a.hb,
                            g = a.sender,
                            h = a.Nh,
                            k = f.Cc,
                            l = b.href;
                        var m = nb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? nb(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        if (qc("ym-external-link",
                                b)) qe(d, f, {
                            url: l,
                            qb: !0,
                            title: m,
                            sender: g
                        });
                        else {
                            k = k ? Gc(d, k).hostname : R(d).hostname;
                            h = RegExp("\\.(" + L("|", A(wp, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = Ri.test(p) || Ri.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            re(k) === re(b) ? h ? qe(d, f, {
                                url: l,
                                Lc: !0,
                                title: m,
                                sender: g
                            }) : m && e.C("il", nb(m).slice(0, 100)) : l && xp.test(l) || qe(d, f, {
                                url: l,
                                Qc: !0,
                                qb: !0,
                                Lc: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function qe(a, c, b) {
                var d, e = Ca();
                b.Lc && e.C("dl", 1);
                b.qb && e.C("ln", 1);
                var f = b.Lg || {};
                e = {
                    H: e,
                    V: {
                        title: f.title || b.title,
                        Qc: !!b.Qc,
                        ea: f.params
                    },
                    G: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.Cc || R(a).href, d)
                };
                d = "Link";
                b.Lc ? d = b.qb ? "Ext link - File" : "File" : b.qb && (d = "Ext link");
                gb(a, {
                    da: M(c),
                    name: "event",
                    data: {
                        Bb: "Link click",
                        name: (b.qb ? "external" : "interlal") + " url: " + b.url
                    }
                });
                c = b.sender(e, c).then(Db(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.Lg));
                return Kc(a, "cl.p.s", c, f.callback || B, f.ctx)
            }

            function yp(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function zp(a, c, b, d) {
                var e =
                    R(a),
                    f = e.hostname;
                e = e.href;
                if (c = yd(c).url) a = Gc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Si(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Ap(a, c, b, d) {
                var e;
                if (a = Ha(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    G(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.qg((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function sh(a, c, b) {
                void 0 === b && (b = O);
                var d = ed(a);
                b(d);
                var e = v(d, Bp);
                se(a,
                    c,
                    function(f) {
                        f.ya.D(e)
                    });
                return d
            }

            function Bp(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.O(n(b, "type"), b)
            }

            function se(a, c, b, d) {
                void 0 === b && (b = B);
                void 0 === d && (d = !1);
                var e = td(a);
                if (c && S(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Ba(arguments),
                            h = g[0];
                        d && e.O(h);
                        g = f.apply(c, g);
                        d || e.O(h);
                        return g
                    };
                    a = {
                        ya: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    z(e.O, c);
                    return a
                }
            }

            function Ud(a) {
                a = H(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function Pl(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c,
                    d), b))
            }

            function Ti(a, c) {
                var b = $c(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = F([a, b.Fe], Cp),
                    g = v(f, Dp);
                b.ba.D(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).D(["parentConnect"], function(h) {
                    g(e, b.Ha[h[1].counterId])
                });
                return {
                    ba: b.ba,
                    Ok: function(h, k) {
                        return new K(function(l, m) {
                            b.Fe(h, k, function(p, q) {
                                l([p, q])
                            });
                            W(a, v(Sa(), m), 5100, "is.o")
                        })
                    },
                    pg: function(h) {
                        var k = {
                            sg: [],
                            Qe: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    qg: function(h) {
                        var k = {
                            sg: [],
                            Qe: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ha, k, h)
                    }
                }
            }

            function Dp(a, c, b) {
                c = Y(function(d) {
                    return !G(b.info.counterId, d.Qe)
                }, c);
                z(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function Cp(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = ba(b),
                        k = u(d.resolve ? d.resolve : O, cd(f)),
                        l = u(d.reject ? d.reject : O, cd(g));
                    d.resolve = k;
                    d.reject = l;
                    z(function(m) {
                        var p;
                        d.Qe.push(+m);
                        var q = b[m],
                            r = W(a, v(Sa(), l), 5100, "is.m");
                        c(q.window, y(e, (p = {}, p.toCounter = Ga(m), p)), function(t, x) {
                            ma(a, r);
                            d.sg.push(m);
                            d.resolve && d.resolve(x)
                        })
                    }, h)
                }))["catch"](C(a,
                    "if.b"))
            }

            function Ep(a) {
                var c = B,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    S(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    S(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Ah: b,
                        jc: c,
                        ea: 1 === d.length ? a[0] : Ec(d)
                    }
                }
            }

            function Kc(a, c, b, d, e) {
                var f = F([a, d, e], Vf);
                return b.then(f, function(g) {
                    f();
                    le(a, c, g)
                })
            }

            function Ui(a, c) {
                return {
                    aa: function(b, d) {
                        var e = (b.V || {}).ea,
                            f = b.Y;
                        f = void 0 === f ? {} : f;
                        if (e && (Vi(c, e), !f.fa && b.H && b.G)) {
                            var g = kb(a, e),
                                h = Wi(a),
                                k = b.H.o("pv");
                            g && !b.G.nohit && (gb(a, {
                                da: M(c),
                                name: "params",
                                data: {
                                    Tk: e
                                }
                            }), k ? encodeURIComponent(g).length > ra.Ug ? h.push([b.H, e]) : b.G["site-info"] = g : (f.fa = g, b.Y = f, b.Qa || (b.Qa = {}), b.Qa.Yi = !0))
                        }
                        d()
                    },
                    Ca: function(b, d) {
                        var e = Wi(a),
                            f = Ha(a, c),
                            g = f && f.params;
                        g && (f = Y(u(Lc, la(b.H)), e), z(function(h) {
                            g(h[1]);
                            h = te(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function ue(a, c) {
                return function(b) {
                    Wf(a, c, b)
                }
            }

            function Fp(a, c) {
                Xf(a)(function(b) {
                    delete b[c]
                })
            }

            function Wf(a, c, b) {
                Xf(a)(function(d) {
                    d[c] = y(d[c] || {}, b)
                })
            }

            function Xf(a) {
                a = H(a);
                var c = a.o("dsjf") || xa({});
                a.Sa("dsjf", c);
                return c
            }

            function Gp(a, c) {
                return function(b) {
                    var d, e, f = Ha(a, c);
                    f && (Ma(b) ? Oa(ba(b)) ? (b = Xi(b)) && Oa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : Db(a, c, "First party params error. Empty object.")() : Db(a, c, "First party params error. Not an object.")())
                }
            }

            function Xi(a) {
                a = ya(a);
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Ma(e);
                    if (!za(e) && !f) return c;
                    e = f ? Xi(e) : e;
                    Oa(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function Yi(a, c, b) {
                void 0 === b && (b = 0);
                c = ya(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = Ma(g);
                    if (!za(g) && !h) return d;
                    h ? g = Yi(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Hp(g) : "email" === f && (g = Ip(g)), g = Zi(a, g)) : g = K.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function Ip(a) {
                var c = nb(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                $i(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(Yf, "-") : "gmail.com" === c && (b = b.replace(Yf, ""));
                a = ee(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function Hp(a) {
                a = Lb(a);
                return "8" === a[0] ? "7" +
                    a.slice(1) : a
            }

            function Zi(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(gc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Ha(a, c) {
                var b = H(a).o("counters", {}),
                    d = M(c);
                return b[d]
            }

            function aj(a, c) {
                H(a).C("dce:" + c, !0);
                var b = H(a).o("dclq:" + c);
                b && (z(function(d) {
                    var e =
                        d[0];
                    d = d[1];
                    ia.apply(void 0, wa([zd(a, c)[e]], d))
                }, b), Ad(b))
            }

            function Db(a, c, b, d) {
                return Zf(c) ? B : v(F(wa([a, M(c)], d ? [b + ". Params:", d] : [b]), Ab), ia)
            }

            function Ab() {
                var a = Ba(arguments),
                    c = a.slice(2);
                zd(a[0], a[1]).log.apply(Ab, c)
            }

            function Cf(a) {
                var c = "1" === Yb(a).o("debug"),
                    b = $f(a, "1");
                a = a._ym_debug;
                return {
                    yi: c,
                    Ii: a || b,
                    isEnabled: La(Boolean, [c, a, b])
                }
            }

            function $f(a, c) {
                return -1 < R(a).href.indexOf("_ym_debug=" + c)
            }

            function Jp(a, c) {
                return {
                    log: Mc(a, "log", c, B),
                    warn: Mc(a, "log", c, B),
                    error: Mc(a, "log", c, B)
                }
            }

            function Mc(a,
                c, b, d) {
                return function() {
                    var e = Ba(arguments);
                    gb(a, {
                        da: b,
                        name: "log",
                        data: {
                            Lb: e,
                            type: c
                        }
                    });
                    return d.apply(void 0, e)
                }
            }

            function qa(a, c) {
                var b = M(a);
                return bj()(Kp(b)).then(c)
            }

            function Lp(a, c, b) {
                c = M(c);
                var d = ag(a);
                b = y({
                    Ph: d(aa)
                }, b);
                gb(a, {
                    da: c,
                    name: "counterSettings",
                    data: {
                        Qk: b
                    }
                });
                return bj()(Mp(c, b))
            }

            function Mp(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.rj = c, d.gg = !0, d.fg ? d.fg(c) : d.cb = K.resolve(c)) : b[a] = {
                        cb: K.resolve(c),
                        rj: c,
                        gg: !0
                    }
                }
            }

            function Eb(a) {
                return A(function(c) {
                    return !c || G(c, a) ? c : 0
                }, bc)
            }

            function cj(a) {
                return !nd(a) &&
                    dj(a)
            }

            function bg(a) {
                return $a(a) ? v(a, Np) : !1
            }

            function dj(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ea("sendBeacon", c) ? F([a, E(c, n(a, "navigator"))], Op) : !1
            }

            function Op(a, c, b, d) {
                return new K(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = y(d.Zb, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + vd(h) + (d.fa ? "&" + d.fa : "");
                    return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Np(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Ua(a),
                        k = y((f = {}, f.callback = h, f), b.Zb),
                        l = F([a, h], Pp);
                    a[h] = function(p) {
                        try {
                            l(), lc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = jc(a, (g = {}, g.src = ej(c, b, k), g));
                    if (!m) return l(), e(gc("jp.s"));
                    f = v(m, lc);
                    f = u(f, v(Sa(b.Da), e));
                    g = ve(a, f, b.Fb || 1E4);
                    g = F([a, g], ma);
                    m.onload = g;
                    m.onerror = u(l, g, f)
                })
            }

            function Pp(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Bd(a) {
                var c = $a(a);
                return c ? F([a, c], Qp) : !1
            }

            function Qp(a, c, b, d) {
                return new K(function(e, f) {
                    var g = Wb(a),
                        h = c("img"),
                        k = u(v(h, lc), v(Sa(d.Da), f)),
                        l = ve(a, k, d.Fb || 3E3);
                    h.onerror = k;
                    h.onload = u(v(h, lc), v(null, e), F([a, l],
                        ma));
                    k = y({}, d.Zb);
                    delete k.wmode;
                    h.src = ej(b, d, k);
                    pd(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Nb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Rp.test(a.location.host) && a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    } return c ? v(a, Sp) : !1
            }

            function Sp(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.fa,
                    g = y(b.ld ? (d = {}, d.wmode = "7",
                        d) : {}, b.Zb);
                return new K(function(h, k) {
                    e.open(b.Ve || "GET", c + "?" + vd(g), !0);
                    e.withCredentials = !1 !== b.Ng;
                    b.Fb && (e.timeout = b.Fb);
                    fj(ya, fb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.zb);
                    var l = F([a, e, Sa(b.Da), b.ld, b.uj, h, k], Tp);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function Tp(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(gc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = rb(a,
                                c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    } return h
            }

            function ej(a, c, b) {
                (b = vd(b)) && (a += "?" + b);
                c.fa && (a += (b ? "&" : "?") + c.fa);
                return a
            }

            function Up(a, c, b) {
                var d = A(Lc, Ob[c] || Pb);
                z(function(e) {
                    return d.unshift(e)
                }, we);
                return A(u(Nc([a, b]), ia), d)
            }

            function gj(a, c) {
                var b = R(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!za(c) || U(c)) return d;
                b = c.replace(hj, "");
                if (-1 !== b.search(Vp)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" ===
                    g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, L("/", d);
                return ""
            }

            function xe(a, c) {
                return {
                    aa: function(b, d) {
                        var e = ij(c);
                        e = F([b, e, d], Wp);
                        Xp(a, c, e)
                    },
                    Ca: function(b, d) {
                        var e = b.H,
                            f = ij(c);
                        if (e) {
                            var g = f.va;
                            f.sf === e && g && (z(ia, g), f.va = null)
                        }
                        d()
                    }
                }
            }

            function Wp(a, c, b) {
                var d = a.H;
                d ? lf(a) ? (c.sf = d, b()) : c.va ? c.va.push(b) : b() : b()
            }

            function lf(a) {
                return (a = a.H) && a.o("pv") && !a.o("ar")
            }

            function Xp(a, c, b) {
                if (cg(a) && cb(a)) {
                    var d = Yp(c);
                    if (!d.Ki) {
                        d.Ki = !0;
                        c = $c(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.va = [];
                        var e = function() {
                            d.va && (z(ia, d.va), d.va = null)
                        };
                        W(a, e, 3E3);
                        c.ba.D(["initToChild"], e)
                    }
                    d.va ? d.va.push(b) : b()
                } else b()
            }

            function jj(a, c) {
                return {
                    aa: function(b, d) {
                        var e = b.H;
                        if (e && (!c || c.og)) {
                            var f = a.document.title;
                            b.V && b.V.title && (f = b.V.title);
                            var g = cc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, ra.Vg);
                            e.C("t", f)
                        }
                        d()
                    }
                }
            }

            function Fb(a) {
                return function(c, b) {
                    return {
                        aa: function(d, e) {
                            var f = d.H,
                                g = d.G;
                            f && g && z(function(h) {
                                var k =
                                    dg[h],
                                    l = "bi",
                                    m = f;
                                k || (k = eg[h], l = "tel", m = Vd(d));
                                k && (k = D(l + ":" + h, k, null)(c, b, d), m.cc(h, k))
                            }, a || Zp());
                            e()
                        }
                    }
                }
            }

            function $p(a, c) {
                var b = Cd(a);
                c.D(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).D(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.O("parentConnect", [e, d])
                }).D(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ha[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function aq(a) {
                if (Ea("MutationObserver", a.MutationObserver)) {
                    var c =
                        Cd(a).children,
                        b = new a.MutationObserver(function() {
                            z(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ba(c))
                        });
                    $b(a)(Ra(B, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function bq(a, c) {
                return function(b, d) {
                    var e, f = {
                        wc: ha(a)(aa),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.wc = Ga(b[0]), f.key = parseFloat(b[1]), f.dir = Ga(b[2]));
                    y(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = L(":", ["__yminfo", f.wc, f.key, f.dir]), e);
                    return {
                        $: f,
                        yg: kb(a, g) || ""
                    }
                }
            }

            function $b(a, c) {
                function b(e) {
                    n(c, d) ? e() : W(a, v(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return xa(function(e, f) {
                    b(f)
                })
            }

            function Cc(a, c) {
                var b = c.de,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Yb(a),
                    f = Qa(a),
                    g = ha(a)(fg),
                    h = kj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.o("d");
                lj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = L("", [g, Ua(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ga(l)) m = !0;
                m && !c.tb && (e.C(d, h, 525600, b), e.C("d", "" + g, 525600, b));
                f.C(d, h);
                return h
            }

            function cq(a, c) {
                return !c.tb && lj(a, c)
            }

            function kj(a, c) {
                var b = Qa(a),
                    d = Yb(a),
                    e = c.de || "uid";
                return [b.o(e), d.o(e)]
            }

            function Vh(a, c, b) {
                gg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = mj(a);
                (d = d && d.metrika_enabled) && nj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function gg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Wh(a, ge, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + dq(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(eq, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (oj(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ge(a, c) {
                var b =
                    oj(a);
                return b ? b[c] || null : null
            }

            function mj(a) {
                try {
                    var c = a.document.cookie;
                    if (!na(c)) {
                        var b = {};
                        z(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[nb(d[0])] = nb(pj(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function Wh(a, c, b) {
                return !hg.length || G(b, ig) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, hg)
            }

            function Ib(a) {
                var c = H(a),
                    b = c.o("hitId");
                b || (b = Ua(a), c.C("hitId", b));
                return b
            }

            function $i(a) {
                var c = a.match(qj);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return G(c, jg) ? c : !1;
                    if (a) return jg[0]
                }
                return !1
            }

            function R(a) {
                return N(function(c,
                    b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, fq)
            }

            function Qf(a, c, b) {
                var d = Ia(c);
                return d && Ni(a, c, Y(Boolean, ["p", gq[d], "c"]), Pf, b)
            }

            function Of(a, c) {
                var b = ac(kg, a, c);
                if (!b) {
                    var d = ac("div", a, c);
                    d && (ub(kg + ",div", d).length || (b = d))
                }
                return b
            }

            function Ni(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in rj ? h = c.getAttribute && c.getAttribute(rj[g]) : g in Oc && (h = "p" === g ? Oc[g](a, c, e) : "c" === g ? Oc[g](a, c, d) : Oc[g](a, c));
                    h && (h = h.slice(0, sj[g] || 100), f[g] = lg[g] ? "" + mc(h) : h);
                    return f
                }, {}, b)
            }

            function Oh(a, c, b) {
                if (Dd(a)) return sa(b.querySelectorAll(c));
                var d = tj(c.split(" "), b);
                return Y(function(e, f) {
                    return Mb(a)(e, d) === f
                }, d)
            }

            function tj(a, c) {
                var b = wa(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? kc(v(b, tj), sa(d)) : sa(d)
            }

            function Fc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = ub(a, c);
                return b && b.length ? b[0] : null
            }

            function ub(a, c) {
                if (!c) return [];
                var b = c.querySelectorAll(a);
                return b ? sa(b) : []
            }

            function Qi(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName &&
                        ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function jc(a, c) {
                var b = a.document,
                    d = y({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = $a(a);
                if (e) {
                    var f = e("script");
                    fj(ya, fb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = cc("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function hq(a, c, b) {
                var d = uj(c);
                G(b, d.wb) || d.wb.push(b);
                if (Ta(d.lb)) {
                    b = $a(a);
                    if (!b) return null;
                    b = b("iframe");
                    y(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Wb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.lb = b
                } else(a = n(d.lb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.lb
            }

            function iq(a, c) {
                var b = ea(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = L(", ", A(function(e) {
                            return "." + e
                        },
                        b));
                    return sa(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return kc(u(pa("getElementsByClassName", c), sa), b);
                d = c.getElementsByTagName("*");
                b = "(" + L("|", b) + ")";
                return Y(v(b, qc), sa(d))
            }

            function mg(a, c, b) {
                for (var d = "", e = Nf(), f = Ia(c) || "*"; c && c.parentNode && !G(f, ["BODY", "HTML"]);) d += e[f] || "*", d += vj(a, c, b) || "", c = c.parentElement, f = Ia(c) || "*";
                return nb(d, 128)
            }

            function vj(a, c, b) {
                if (a = ye(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function ye(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === uc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function xf(a, c) {
                var b = ng(a, c),
                    d = b.left;
                b = b.top;
                var e = ze(a, c);
                return [d, b, e[0], e[1]]
            }

            function ze(a, c) {
                var b = n(a, "document");
                if (c === uc(a) || c === b.documentElement) {
                    b = Wb(a);
                    var d = Ed(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = fd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function ng(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ia(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === uc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = fd(b)) return b = Sf(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function nb(a, c) {
                if (a) {
                    var b = wj ? wj.call(a) : ("" + a).replace(hj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function ac(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Ea("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Uh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Dd(c)) {
                    for (a = sa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Mb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Dd(a) {
                return !(!Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function xj(a) {
                return Ae(a) && !La(la(a.type), jq) ? Be(a) ? !a.checked : !a.value : kq(a) ? !a.value : lq(a) ? 0 > a.selectedIndex : !0
            }

            function Ia(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (za(c)) return c;
                    c = a.tagName;
                    if (za(c)) return c
                } catch (b) {}
            }

            function yj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Mb(a)(c, sa(b))
            }

            function mq(a, c, b) {
                b = cc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Ea("(Event|Object|constructor)", e) || og(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a =
                            cc("createEvent", n(a, "document"))) && S(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function fd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Wf && c.Wf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Sf(a) {
                var c = uc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop ||
                        c && c.scrollTop || 0
                }
            }

            function Ed(a) {
                var c = pg(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Wb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function pg(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return na(c) || na(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Wb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : uc(a) || b
            }

            function uc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function qc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function vc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function lc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Qb(a) {
                return a ? a.innerText || "" : ""
            }

            function Bf(a) {
                if (na(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function jf(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Wd: nq(a),
                    o: function(e, f) {
                        var g = zj(a, "" + d + e);
                        return Ta(g) && !U(f) ? f : g
                    },
                    C: function(e, f) {
                        Aj(a, "" + d + e, f);
                        return this
                    },
                    Pb: function(e) {
                        Bj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Aj(a, c, b) {
                var d = qg(a);
                a = kb(a, b);
                if (!Ta(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function zj(a, c) {
                var b = qg(a);
                try {
                    return rb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Bj(a, c) {
                var b = qg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function qg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function kb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function Vd(a, c, b) {
                void 0 === b && (b = null);
                a.Ka || (a.Ka = rg());
                c && a.Ka.cc(c, b);
                return a.Ka
            }

            function Ce(a) {
                return {
                    aa: function(c, b) {
                        var d = a.document,
                            e = c.H;
                        if (e && sg(a)) {
                            var f = ja(a),
                                g = function(h) {
                                    sg(a) || (f.fc(d, Cj, g), b());
                                    return h
                                };
                            f.D(d, Cj, g);
                            e.C("pr", "1")
                        } else b()
                    }
                }
            }

            function tg(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = Na(If(c, a, f), d);
                        return ke(c, b, g)(e)
                    }
                }
            }

            function ke(a, c, b) {
                var d = Bb(a, c);
                return function(e) {
                    return Dj(b,
                        e, !0).then(function() {
                        var f = e.ra || {},
                            g = f.Bi,
                            h = void 0 === g ? "" : g;
                        g = f.Ja;
                        var k = void 0 === g ? "" : g;
                        f = f.Ci;
                        f = A(function(l) {
                            return ra.Va + "//" + ("" + h + l || Zb) + "/" + k
                        }, void 0 === f ? [Zb] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.bd;
                        f = f.Jg;
                        e.tj = g;
                        e.Nk = f;
                        return Dj(b, e).then(v(g, O))
                    })
                }
            }

            function Bb(a, c) {
                return function(b, d) {
                    return Ej(a, c, d, b)
                }
            }

            function Ej(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({
                        Da: []
                    }, d.Y),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.zb && h.zb["Content-Type"] || !h.fa || (h.zb = y({}, h.zb, (g = {},
                    g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.fa = "site-info=" + be(h.fa));
                h.Ve = h.fa ? "POST" : "GET";
                h.Zb = oq(a, d, l);
                h.Da.push(l);
                y(d.Y, h);
                g = "" + m + (d.Qa && d.Qa.Yi ? "/1" : "");
                var p = 0;
                p = pq(a, g, h);
                return k(g, h).then(function(q) {
                    gb(a, {
                        name: "requestSuccess",
                        data: {
                            body: q,
                            requestId: p
                        }
                    });
                    return {
                        bd: q,
                        Jg: e
                    }
                })["catch"](function(q) {
                    gb(a, {
                        name: "requestFail",
                        data: {
                            error: q,
                            requestId: p
                        }
                    });
                    var r = f + 1 >= c.length,
                        t = e + 1 >= b.length;
                    r && t && Wa(q);
                    return Ej(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function oq(a, c, b) {
                var d = y({}, c.G);
                a = ha(a);
                c.H && (d["browser-info"] = Ca(c.H.l()).C("st", a(fg)).Aa());
                !d.t && (c = c.Ka) && (c.C("ti", b), d.t = c.Aa());
                return d
            }

            function pq(a, c, b) {
                var d = Ua(a);
                gb(a, {
                    name: "request",
                    data: {
                        url: c,
                        requestId: d,
                        Pk: b
                    }
                });
                return d
            }

            function vd(a) {
                return a ? u(ya, ud(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    U(e) || na(e) || c.push(d + "=" + be(e));
                    return c
                }, []), od("&"))(a) : ""
            }

            function qq(a) {
                return a ? u(fb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], na(b) ? void 0 : pj(b)]
                }), ud(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function pj(a) {
                var c =
                    "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function be(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = L("", Y(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function If(a, c, b) {
                return A(u(Lc, Nc([a, b]), ia), Fj[c] || [])
            }

            function Gj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !na(d) && Hj(a[c], b, d)
            }

            function Hj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function dc(a) {
                z(function(c) {
                    var b =
                        c[1];
                    Xe[c[0]] = {
                        ia: b.ia,
                        $a: b.$a
                    }
                }, ya(a))
            }

            function Dj(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        aa: f,
                        Ca: f
                    });
                    var h = hc(g, function(k, l) {
                        var m = b ? k.aa : k.Ca;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(rq), e(p)
                        } else l()
                    });
                    h(Ij)
                })
            }

            function Hb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ja(a);
                    var e = "__ym__promise_" + Ua(a) + "_" + Ua(a),
                        f = B;
                    d = C(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.D(a, ["message"],
                        d);
                    a.postMessage(e, "*")
                } else W(a, c, 0, d)
            }

            function nh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = hc(c, b);
                ic(a, c, d)(Ra(C(a, e), B))
            }

            function ic(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Jj);
                ug = Infinity === b;
                return xa(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(sq);
                        if (c(Fd)) return f(h), Kj(a);
                        ug ? (c(d(a, 1E4)), f(h), Kj(a)) : W(a, g, 100)
                    }
                    var h = [];
                    tq(g)
                })
            }

            function Kj(a) {
                if (vg.length) {
                    var c = vg.shift();
                    ug ? c() : W(a, c, 100)
                } else wg = !1
            }

            function tq(a) {
                wg ? vg.push(a) : (wg = !0,
                    a())
            }

            function qf(a) {
                return xa(function(c, b) {
                    b(a)
                })
            }

            function xo(a) {
                return xa(function(c, b) {
                    a.then(b, c)
                })
            }

            function uq(a) {
                var c = [],
                    b = 0;
                return xa(function(d, e) {
                    z(function(f, g) {
                        f(Ra(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function wo(a) {
                var c = [],
                    b = !1;
                return xa(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    z(function(g) {
                        g(Ra(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ra(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function hc(a, c) {
                void 0 === c &&
                    (c = O);
                return xa({
                    Za: a,
                    Zd: c,
                    Ke: !1,
                    xa: 0
                })
            }

            function Ij(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.xa += 1
                    }
                    b = !1;
                    a.Zd(a.Za[a.xa], function() {
                        d()
                    });
                    b || (a.xa += 1, d = v(a, Ij))
                }
                for (var b = !0; !Fd(a) && b;) c()
            }

            function Jj(a, c) {
                return function(b) {
                    var d = ha(a),
                        e = d(aa);
                    return Lj(function(f, g) {
                        d(aa) - e >= c && g(Mj)
                    })(b)
                }
            }

            function De(a, c) {
                return function(b) {
                    var d = ha(a),
                        e = d(aa);
                    return Ee(function(f) {
                        d(aa) - e >= c && Mj(f)
                    })(b)
                }
            }

            function Ee(a) {
                return function(c) {
                    for (var b; c.Za.length && !Fd(c);) b = c.Za.pop(), b = c.Zd(b, c.Za), a(c);
                    return b
                }
            }

            function vq(a) {
                Fd(a) &&
                    Wa(gc("i"));
                var c = a.Zd(a.Za[a.xa]);
                a.xa += 1;
                return c
            }

            function sq(a) {
                a.Ke = !1
            }

            function Mj(a) {
                a.Ke = !0
            }

            function rq(a) {
                a.xa = a.Za.length
            }

            function Fd(a) {
                return a.Ke || a.Za.length <= a.xa
            }

            function sb(a) {
                a = ha(a);
                return Math.round(a(xg) / 50)
            }

            function xg(a) {
                var c = a.za,
                    b = c[1];
                a = c[0] && b ? b() : aa(a) - a.Di;
                return Math.round(a)
            }

            function fg(a) {
                return Math.round(aa(a) / 1E3)
            }

            function jb(a) {
                return Math.floor(aa(a) / 1E3 / 60)
            }

            function aa(a) {
                var c = a.Se;
                return 0 !== c ? c : yg(a.l, a.za)
            }

            function ag(a) {
                var c = ja(a),
                    b = Nj(a),
                    d = {
                        l: a,
                        Se: 0,
                        za: b,
                        Di: yg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                    0 === d.Se && (d.Se = yg(a, d.za))
                });
                return xa(d)
            }

            function wq(a) {
                return (10 > a ? "0" : "") + a
            }

            function wi(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = W(a, d, b), e.O(h))
                }
                var e = td(a),
                    f, g = !1,
                    h;
                c.D(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return B
                });
                return e
            }

            function xq(a, c) {
                return a.clearInterval(c)
            }

            function yq(a, c, b, d) {
                return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
            }

            function W(a, c, b, d) {
                return ve(a, C(a, "d.err." + (d || "def"), c), b)
            }

            function ed(a) {
                var c = {};
                return {
                    D: function(b,
                        d) {
                        z(function(e) {
                            n(c, e) || (c[e] = td(a));
                            c[e].D(d)
                        }, b);
                        return this
                    },
                    na: function(b, d) {
                        z(function(e) {
                            n(c, e) && c[e].na(d)
                        }, b);
                        return this
                    },
                    O: function(b, d) {
                        return n(c, b) ? C(a, "e." + d, c[b].O)(d) : []
                    }
                }
            }

            function td(a) {
                var c = [],
                    b = {};
                b.Fk = c;
                b.D = u(pa("push", c), v(b, O));
                b.na = u(Gb(Mb(a))(c), Gb(pa("splice", c))(1), v(b, O));
                b.O = u(O, Gb(ia), zq(c));
                return b
            }

            function Oj(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" :
                        "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function D(a, c, b) {
                return function() {
                    return C(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function C(a, c, b, d, e) {
                var f = Wa,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        le(a, c, k)
                    }
                    return h
                }
            }

            function yg(a, c) {
                var b = c || Nj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Nj(a) {
                a = Kf(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = E(b, a));
                return [c, b]
            }

            function Kf(a) {
                return n(a,
                    "performance") || n(a, "webkitPerformance")
            }

            function le(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                Aq(d) || La(u(pa("indexOf", d), la(-1), Rb), Bq) || Cq(d) && .1 <= a.Math.random() || z(u(O, Nc(["jserrs", d, c, e]), ia), Pj)
            }

            function We() {
                var a = Ba(arguments);
                return Wa(Sa(a))
            }

            function Sa(a) {
                var c = "";
                ea(a) ? c = L(".", a) : za(a) && (c = a);
                return gc("err.kn(" + ra.gb + ")" + c)
            }

            function Dq(a) {
                this.message = a
            }

            function gb(a, c) {
                var b =
                    c.da;
                if (b) {
                    var d = b.split(":");
                    b = d[1];
                    d = Qj(Bh(d[0]));
                    if ("1" === b || d) return
                }
                b = Eq(a);
                1E3 === b.length && b.shift();
                b.push(c)
            }

            function xl(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    ca: d,
                    rc: e,
                    ea: b
                };
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.$a;
                    k = f[k.ia];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, ya(c));
                Vi(a, a.ea || {});
                return a
            }

            function Fq(a, c) {
                return N(function(b, d) {
                    b[c[d[0]].ia] = d[1];
                    return b
                }, {}, ya(a))
            }

            function Rj(a) {
                a = M(a);
                return ec[a] && ec[a].Mj
            }

            function Vi(a, c) {
                var b = M(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                ec[b] || (ec[b] = {});
                if (d || e) ec[b].Mj = d, ec[b].Nj = e
            }

            function Sj(a) {
                return Fe(a) || md(a) || /mobile/i.test(lb(a)) || !U(n(a, "orientation"))
            }

            function ff(a, c) {
                if (Gd(a) && c) {
                    var b = lb(a).match(Gq);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function gf(a, c) {
                var b = lb(a);
                return b && (b = b.match(Hq)) && 1 < b.length ? Ga(b[1]) >= c : !1
            }

            function sg(a) {
                return G("prerender", A(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Ua(a, c, b) {
                var d = U(b);
                U(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() *
                    (c - d)) + d
            }

            function Iq() {
                var a = Ba(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) wd(b, d) && (c[d] = b[d]);
                    wd(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Tj(a) {
                return U(a) ? [] : Hd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Uj(a))
            }

            function Uj(a) {
                var c = [],
                    b;
                for (b in a) wd(a, b) && c.push(b);
                return c
            }

            function Bh(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function ne(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === zg(c)
            }

            function Jq(a) {
                for (var c = [], b = a.length -
                        1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Na(a, c) {
                z(u(O, pa("push", a)), c);
                return a
            }

            function Ag(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Ad(a) {
                return a.splice(0, a.length)
            }

            function sa(a) {
                return a ? ea(a) ? a : Ge ? Ge(a) : "number" === typeof a.length && 0 <= a.length ? Vj(a) : [] : []
            }

            function Bg(a, c, b) {
                return b ? a : c
            }

            function Kq(a, c) {
                return Hd(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ea(d) ? d : [d])
                }, [], c)
            }

            function Wj(a, c) {
                return Hd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Lq(a, c) {
                if (!Gd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function ea(a) {
                if (Id) return Id(a);
                (Id = Ka(Array.isArray, "isArray")) || (Id = Mq);
                return Id(a)
            }

            function Nq(a, c) {
                return 1 <= Xj(la(a), c).length
            }

            function Oq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function Xj(a, c) {
                return Hd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Vf(a, c, b) {
                try {
                    if (S(c)) {
                        var d = Ba(arguments).slice(3);
                        na(b) ? c.apply(void 0, d) : E.apply(void 0, wa([c, b], d))()
                    }
                } catch (e) {
                    ve(a,
                        v(e, Wa), 0)
                }
            }

            function Wa(a) {
                throw a;
            }

            function ve(a, c, b) {
                return cc("setTimeout", a)(c, b)
            }

            function ma(a, c) {
                return cc("clearTimeout", a)(c)
            }

            function sd() {
                return []
            }

            function wc() {
                return {}
            }

            function cc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function vb(a, c, b) {
                return function() {
                    var d = Ba(arguments),
                        e = d[0];
                    d = d.slice(1);
                    var f = H(e),
                        g = b ? "global" : "m991",
                        h = f.o(g, {}),
                        k = n(h, a);
                    k || (k = w(c), h[a] = k, f.C(g, h));
                    return k.apply(void 0,
                        wa([e], d))
                }
            }

            function Ec(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                N(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (na(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Jd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Sa: function(b, d) {
                        Cg.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return Cg.call(c,
                            b) || U(d) ? e : d
                    }
                }
            }

            function wd(a, c) {
                return na(a) ? !1 : Cg.call(a, c)
            }

            function w(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : O;
                return function() {
                    var f = Ba(arguments),
                        g = e.apply(void 0, f),
                        h = Yj(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Mb(a) {
                if (Dg) return Dg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && Ka(a.Array.prototype.indexOf, "indexOf");
                return Dg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : Pq
            }

            function Pq(a, c) {
                for (var b = 0; b < c.length; b +=
                    1)
                    if (c[b] === a) return b;
                return -1
            }

            function ia(a, c) {
                return c ? a(c) : a()
            }

            function u() {
                var a = Ba(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return N(Zj, b, a)
                }
            }

            function ud(a, c) {
                return F([a, c], N)
            }

            function Hd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function Xa(a) {
                return pa("test", a)
            }

            function pa(a, c) {
                return E(c[a], c)
            }

            function v(a, c) {
                return E(c, null, a)
            }

            function F(a, c) {
                return E.apply(void 0, wa([c, null], a))
            }

            function Qq() {
                var a = Ba(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = wa(d, Ba(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, wa([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && ak(f, e, b);
                        delete b[f];
                        return e
                    }
                    return ak(c, e)
                }
            }

            function ak(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                S(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Ba(a) {
                if (Ge) try {
                    return Ge(a)
                } catch (c) {}
                return Vj(a)
            }

            function Vj(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Ma(a) {
                return !Ta(a) && !U(a) && "[object Object]" === zg(a)
            }

            function na(a) {
                return U(a) || Ta(a)
            }

            function S(a) {
                return "function" === typeof a
            }

            function Gb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function ka(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function Zj(a, c) {
                return c(a)
            }

            function Rq(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function wp(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g,
                    "\\$").replace(Yf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Sq(a) {
                return "" + a
            }

            function nc(a, c) {
                return !(!a || -1 === ee(a, c))
            }

            function ee(a, c) {
                if (bk) var b = bk.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function za(a) {
                return "string" ===
                    typeof a
            }

            function zg(a) {
                return Object.prototype.toString.call(a)
            }

            function Eg(a, c) {
                Eg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Eg(a, c)
            }

            function Ka(a, c) {
                return Ea(c, a) && a
            }

            function Ea(a, c) {
                var b = He(a, c);
                c && !b && Fg.push([a, c]);
                return b
            }

            function He(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g +=
                    1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function B() {}

            function Rb(a) {
                return !a
            }

            function wb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function Ja(a, c) {
                function b() {
                    this.constructor = a
                }
                Eg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function wa() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function Tq() {}

            function Uq(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Fa(a) {
                if (!(this instanceof Fa)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.La = 0;
                this.Ye = !1;
                this.Ua = void 0;
                this.Jb = [];
                ck(a, this)
            }

            function dk(a, c) {
                for (; 3 === a.La;) a = a.Ua;
                0 === a.La ? a.Jb.push(c) : (a.Ye = !0, Fa.Ze(function() {
                    var b = 1 === a.La ? c.cj : c.gj;
                    if (null === b)(1 === a.La ? Gg : Kd)(c.cb, a.Ua);
                    else {
                        try {
                            var d = b(a.Ua)
                        } catch (e) {
                            Kd(c.cb, e);
                            return
                        }
                        Gg(c.cb, d)
                    }
                }))
            }

            function Gg(a,
                c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof Fa) {
                            a.La = 3;
                            a.Ua = c;
                            Hg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            ck(Uq(b, c), a);
                            return
                        }
                    }
                    a.La = 1;
                    a.Ua = c;
                    Hg(a)
                } catch (d) {
                    Kd(a, d)
                }
            }

            function Kd(a, c) {
                a.La = 2;
                a.Ua = c;
                Hg(a)
            }

            function Hg(a) {
                2 === a.La && 0 === a.Jb.length && Fa.Ze(function() {
                    a.Ye || Fa.bh(a.Ua)
                });
                for (var c = 0, b = a.Jb.length; c < b; c++) dk(a, a.Jb[c]);
                a.Jb = null
            }

            function Vq(a, c, b) {
                this.cj = "function" === typeof a ?
                    a : null;
                this.gj = "function" === typeof c ? c : null;
                this.cb = b
            }

            function ck(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Gg(c, d))
                    }, function(d) {
                        b || (b = !0, Kd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Kd(c, d))
                }
            }

            function Xm(a) {
                for (var c = a.length, b = 0, d = 255, e = 255, f, g, h; c;) {
                    f = 21 < c ? 21 : c;
                    c -= f;
                    do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
                    d = (d & 255) + (d >> 8);
                    e = (e & 255) + (e >> 8)
                }
                a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
                return 65535 === a ? 0 : a
            }

            function rb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function mc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function nj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return gg(a, c, "", -100, b, d, e)
            }

            function Ac(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Wq(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Pb: function(g, h, k) {
                        nj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    o: function(g) {
                        return ge(a, "" + c + g + f)
                    },
                    C: function(g, h, k, l, m) {
                        gg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function yl(a,
                c, b, d) {
                var e = ek[b];
                return e ? function() {
                    var f = Ba(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = H(a);
                        h.Sa("mt", {});
                        var k = h.o("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Wa(m)
                    }
                    return g
                } : d
            }

            function Gc(a, c) {
                var b = Xq(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function fk(a) {
                return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Yq(a,
                c) {
                var b = fk(a);
                gk = yq(a, function() {
                    var d = fk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return E(xq, null, a, gk)
            }

            function Zq(a, c, b) {
                var d, e, f = c.ca,
                    g = c.Ue,
                    h = c.Cc,
                    k = H(a),
                    l = Ca((d = {}, d.wh = 1, d.pv = 1, d));
                Ye(f) && a.ah && a.ah.dk && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = R(a).href;
                h = {
                    G: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    H: l
                };
                b(h, c)["catch"](C(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function $q(a, c, b) {
                function d() {
                    ma(a, h);
                    g(!1)
                }

                function e() {
                    k = !0;
                    g(!1);
                    c()
                }

                function f() {
                    ma(a, h);
                    if (k) g(!1);
                    else {
                        var Z = Math.max(0,
                            b - (q ? r : r + l(aa) - t));
                        Z ? h = W(a, e, Z, "u.t.d.c") : e()
                    }
                }

                function g(Z) {
                    z(function(V) {
                        var oa = V[0],
                            ta = V[1];
                        V = V[2];
                        Z ? x.D(oa, ta, V) : x.fc(oa, ta, V)
                    }, I)
                }
                var h = 0,
                    k = !1;
                if (og(a)) return h = W(a, c, b, "u.t.d"), d;
                var l = ha(a),
                    m = !1,
                    p = !1,
                    q = !0,
                    r = 0,
                    t = l(aa),
                    x = ja(a),
                    I = [
                        [a, ["blur"], function() {
                            q = m = p = !0;
                            r += l(aa) - t;
                            t = l(aa);
                            f()
                        }],
                        [a, ["focus"], function() {
                            m || p || (r = 0);
                            t = l(aa);
                            m = p = !0;
                            q = !1;
                            f()
                        }],
                        [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                            p || (m = !0, q = !1, p = !0, f())
                        }]
                    ];
                g(!0);
                f();
                return d
            }

            function Ve(a, c, b, d) {
                return function() {
                    if (Ha(a,
                            c)) {
                        var e = Ba(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function ob(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] <<
                    16 | b[1], b[2] << 16 | b[3]
                ]
            }

            function fc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Pc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 -
                    c
                ]
            }

            function hb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ua(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function hk(a) {
                a = ua(a, [0, a[0] >>> 1]);
                a = ob(a, [4283543511, 3981806797]);
                a = ua(a, [0, a[0] >>> 1]);
                a = ob(a, [3301882366, 444984403]);
                return a = ua(a, [0, a[0] >>> 1])
            }

            function ar(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    R: [0, d],
                    T: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f +
                            7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = ob(h, Ie);
                    h = Pc(h, 31);
                    h = ob(h, Je);
                    g.R = ua(g.R, h);
                    g.R = Pc(g.R, 27);
                    g.R = fc(g.R, g.T);
                    g.R = fc(ob(g.R, [0, 5]), [0, 1390208809]);
                    k = ob(k, Je);
                    k = Pc(k, 33);
                    k = ob(k, Ie);
                    g.T = ua(g.T, k);
                    g.T =
                        Pc(g.T, 31);
                    g.T = fc(g.T, g.R);
                    g.T = fc(ob(g.T, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ua(h, hb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ua(h, hb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ua(h, hb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ua(h, hb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ua(h, hb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ua(h, hb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ua(h, [0, b.charCodeAt(f + 8)]), h = ob(h, Je), h = Pc(h, 33), h = ob(h, Ie), d.T = ua(d.T, h);
                    case 8:
                        g = ua(g, hb([0, b.charCodeAt(f +
                            7)], 56));
                    case 7:
                        g = ua(g, hb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ua(g, hb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ua(g, hb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ua(g, hb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ua(g, hb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ua(g, hb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ua(g, [0, b.charCodeAt(f)]), g = ob(g, Ie), g = Pc(g, 31), g = ob(g, Je), d.R = ua(d.R, g)
                }
                d.R = ua(d.R, [0, b.length]);
                d.T = ua(d.T, [0, b.length]);
                d.R = fc(d.R, d.T);
                d.T = fc(d.T, d.R);
                d.R = hk(d.R);
                d.T = hk(d.T);
                d.R = fc(d.R, d.T);
                d.T = fc(d.T, d.R);
                return ("00000000" +
                    (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
            }

            function Ld(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = ub('[itemprop~="' + b + '"]', c);
                return d ? Y(function(e) {
                    return e.parentNode && ac("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function ab(a, c, b) {
                return (a = Ld(a, c, b)) && a.length ? a[0] : null
            }

            function Ya(a) {
                if (!a) return "";
                a = ea(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") ||
                    Qb(a[0]) : ""
            }

            function ik(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ya(a) : ""
            }

            function jd(a, c, b) {
                a = c && (nc(c.className, "ym-disable-keys") || nc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!iq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function tf(a, c) {
                return Ae(c) ? "password" === c.type || c.name && G(c.name.toLowerCase(), jk) || c.id && G(c.id.toLowerCase(), jk) : !1
            }

            function kk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Na(a, [b >> 8, b & 255])
            }

            function Jb(a, c) {
                Na(a, [c & 255])
            }

            function eb(a, c, b) {
                return -1 !== Mb(a)(b, br) ? (Jb(c, b), !1) : !0
            }

            function Q(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Na(a, [b & 127 | 128]), b >>= 7;
                Na(a, [b])
            }

            function Ig(a, c) {
                Q(a, c.length);
                for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b))
            }

            function Jg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) kk(a, b.charCodeAt(d))
            }

            function cr(a, c) {
                var b = [];
                if (eb(a, b, 27)) return [];
                Q(b, c);
                return b
            }

            function dr(a, c) {
                var b = Ia(c);
                if (!b) return c[Va] = -1, null;
                var d = +c[Va];
                if (!isFinite(d) || 0 >=
                    d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.jk) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = ye(a, c),
                    g = f && f[Va] ? f[Va] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = er()[b];
                h || (e |= 2);
                var k = vj(a, c);
                k || (e |= 4);
                var l = xf(a, c);
                (f = f ? xf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                pc[d].Yf = l[0] + "x" + l[1];
                pc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (eb(a, f, 1)) return null;
                Q(f, d);
                Jb(f, e);
                Q(f, g);
                h ? Jb(f, h) : Jg(f, b);
                k && Q(f, k);
                e & 8 || (Q(f, l[0]), Q(f, l[1]),
                    Q(f, l[2]), Q(f, l[3]));
                e & 32 && Jg(f, c.id);
                Jb(f, 0);
                return f
            }

            function fr(a, c) {
                var b = c[Va];
                if (!b || 0 > b || !vf(c) || !c.form || Th(a, c.form)) return [];
                var d = yj(a, c.form);
                if (0 > d) return [];
                if (Ae(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        wc: 0,
                        rk: 0,
                        "datetime-local": 0,
                        email: 0,
                        Wf: 0,
                        Mk: 0,
                        search: 0,
                        Sk: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Vk: 0,
                        password: 2,
                        Lk: 3,
                        nk: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        gk: 1,
                        hk: 5
                    };
                    var f = Ia(c);
                    e = U(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] ===
                            c) {
                            f = l;
                            break
                        }
                        l += 1
                    } if (0 > f) return [];
                g = [];
                if (eb(a, g, 7)) return [];
                Q(g, b);
                Q(g, d);
                Q(g, e);
                Ig(g, c.name || "");
                Q(g, f);
                return g
            }

            function gr(a, c, b) {
                var d = yj(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!xj(e[g])) {
                        var h = e[g][Va];
                        h && 0 < h && b.push(h)
                    } e = [];
                if (eb(a, e, 11)) return [];
                Q(e, c);
                Q(e, d);
                Q(e, b.length);
                for (a = 0; a < b.length; a += 1) Q(e, b[a]);
                return e
            }

            function oc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !cn(a, c, b); c = ye(a, c)) d.push(c);
                z(function(e) {
                    pc.wd += 1;
                    var f = pc.wd;
                    e[Va] = f;
                    pc[f] = {};
                    f = dr(a, e);
                    e = fr(a, e);
                    f && e && (Na(b, f), Na(b, e))
                }, hr(d));
                return b
            }

            function ir(a) {
                var c = a.sa;
                if (!id || c && !c.fromElement) return Rh(a)
            }

            function jr(a) {
                var c = a.sa;
                if (c && !c.toElement) return wf(a)
            }

            function lk(a) {
                var c = vc(a.sa);
                if (c && fe(c)) {
                    var b = Qh(a, c);
                    var d = sb(a.l),
                        e = [];
                    eb(a.l, e, 17) ? a = [] : (Q(e, d), Q(e, c[Va]), a = e);
                    return wa(b, a)
                }
            }

            function mk(a) {
                var c = a.l,
                    b = a.sa.target;
                if (b && fe(b)) {
                    c = oc(c, b);
                    var d = sb(a.l),
                        e = [];
                    eb(a.l, e, 18) ? a = [] : (Q(e, d), Q(e, b[Va]), a = e);
                    return wa(c, a)
                }
            }

            function nk(a) {
                var c = a.l,
                    b = vc(a.sa);
                if (!b || tf(c,
                        b) || jd(c, b)) return [];
                if (vf(b)) {
                    var d = H(c).o("isEU"),
                        e = hd(c, b, d),
                        f = e.vb;
                    d = e.Xd;
                    e = e.Gd;
                    if (Be(b)) var g = b.checked;
                    else g = b.value, g = f ? L("", ok(g.split(""))) : g;
                    c = oc(c, b);
                    f = sb(a.l);
                    d = d && !e;
                    e = [];
                    eb(a.l, e, 39) ? a = [] : (Q(e, f), Q(e, b[Va]), Jg(e, String(g)), Jb(e, d ? 1 : 0), a = e);
                    return wa(c, a)
                }
            }

            function Ke(a) {
                var c = a.l,
                    b = a.sa,
                    d = vc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = v(e, Na);
                d && fe(d) ? f(Qh(a, d)) : f(oc(c, d));
                var g = Oi(c, b);
                a = sb(a.l);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = ze(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = ye(c, d)) l = ze(c, d), m = l[0], l = l[1];
                d ? (m = d[Va], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = ng(c, d), eb(c, k, l) ? c = [] : (Q(k, a), Q(k, m), Q(k, Math.max(0, h[0] - d.left)), Q(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Jb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return wa(e, c)
            }

            function kr(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ta(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = hd(b, c).vb || jd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = hd(b, d).vb || jd(b, d, !0), f += 1;
                if (e !== Kg) return Kg = e, d = d ? L("", ok(e.split(""))) : e, e = sb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) :
                    (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], eb(a.l, c, 29) ? a = [] : (Q(c, e), Ig(c, b), Ig(c, d), a = c), a
            }

            function lr(a) {
                return wa(Ke(a), kr(a) || [])
            }

            function pk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function qk(a) {
                var c = [];
                Lg || (Lg = !0, Kg && c.push.apply(c, cr(a.l, sb(a.l))), Hb(a.l, function() {
                    Lg = !1
                }, "fv.c"));
                return c
            }

            function rk(a, c, b, d) {
                var e = vc(c);
                if (!e || zf(a, e)) return [];
                var f = de(e),
                    g = yf(e);
                c = hd(a, e).vb;
                var h = H(a);
                if (!f && (g && h.o("isEU") || jd(a, e))) a = [];
                else {
                    f = oc(a, e);
                    h = sb(a);
                    g = [];
                    if (eb(a, g, 38)) a = [];
                    else {
                        Q(g, h);
                        kk(g, b);
                        Jb(g, d);
                        a = e[Va];
                        if (!a || 0 > a) a = 0;
                        Q(g, a);
                        Jb(g, c ? 1 : 0);
                        a = g
                    }
                    a = wa(f, a)
                }
                return a
            }

            function mr(a) {
                var c = a.l,
                    b = a.sa,
                    d = b.keyCode,
                    e = pk(b),
                    f = [],
                    g = v(f, Na);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    } [d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(rk(c, b, d, e | 16)), Mg = !1, Hb(c, function() {
                        Mg = !0
                    }, "fv.kd"), !(67 === d && e & 4) || e & 1 ||
                    e & 2 || g(qk(a));
                return f
            }

            function nr(a) {
                var c = a.l;
                a = a.sa;
                var b = [];
                Mg && !Ng && 0 !== a.which && (b.push.apply(b, rk(c, a, a.charCode || a.keyCode, pk(a))), Ng = !0, Hb(c, function() {
                    Ng = !1
                }, "fv.kp"));
                return b
            }

            function sk(a) {
                var c = a.l,
                    b = vc(a.sa);
                if (!b || Th(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) xj(e[f]) || d.push.apply(d, oc(c, e[f]));
                    d.push.apply(d, gr(c, sb(a.l), b))
                }
                return d
            }

            function or(a) {
                var c = a.flush;
                a = vc(a.sa);
                "BODY" === Ia(a) && c()
            }

            function um(a, c) {
                var b, d = vc(c),
                    e = ra.pc,
                    f = Jd(a);
                if (d && qc("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ga(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function mh(a, c, b, d) {
                return function() {
                    var e = Ba(arguments);
                    e = d.apply(void 0, e);
                    return U(e) ? Ha(a, c) : e
                }
            }

            function lh(a, c, b, d) {
                return C(a, "cm." + b, d)
            }

            function wl(a, c, b, d, e) {
                return b.length && e ? F(N(function(f,
                    g, h) {
                    return b[h] ? f.concat(F([a, c, d], g)) : f
                }, [], b), u)()(e) : e
            }
            var Qc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "3ue65zhww2f2brt35wtqzj",
                    host: "mc.yandex.ru"
                },
                Fg = [],
                Yf = /\./g,
                bk = Ka(String.prototype.indexOf, "indexOf"),
                tk = Ka(Array.prototype.join, "join"),
                L = tk ? function(a, c) {
                    return tk.call(c, a)
                } : Rq,
                la = ka(function(a, c) {
                    return a === c
                }),
                cd = ka(function(a, c) {
                    a(c);
                    return c
                }),
                od = ka(L),
                xa = ka(Zj),
                Ta = la(null),
                U = la(void 0),
                Ge = Ka(Array.from, "from"),
                uk = Ka(Function.prototype.bind, "bind"),
                E = uk ? function() {
                    var a = Ba(arguments);
                    return uk.apply(a[0], wa([a[1]], a.slice(2)))
                } : Qq,
                Nc = ka(F),
                vi = ka(pa),
                vk = Ka(Array.prototype.reduce, "reduce"),
                N = vk ? function(a, c, b) {
                    return vk.call(b, a, c)
                } : Hd,
                fj = u,
                Ki = u(O, ia),
                Dg, Yj = Mb(window),
                pr = Gb(Yj),
                Cg = Object.prototype.hasOwnProperty,
                H = w(Jd),
                T = Gb(n),
                Oa = T("length"),
                Df = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return N(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                wk = Ka(Array.prototype.filter, "filter"),
                Y = wk ? function(a, c) {
                    return wk.call(c, a)
                } : Xj,
                Hc = ka(Y),
                db = Ea("find",
                    Array.prototype.find) ? function(a, c) {
                    return Array.prototype.find.call(c, a)
                } : Oq,
                G = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : Nq,
                sc = Gb(G),
                xk = w(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        Kf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        Kg: c
                    }
                }),
                lb = w(T("navigator.userAgent")),
                Gd = w(function(a) {
                    var c = n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || na(a))
                }),
                Id, Mq = u(zg, la("[object Array]")),
                yk = Ka(Array.prototype.map,
                    "map"),
                A = yk && Lq(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? yk.call(c, a) : []
                } : Wj,
                z = A,
                kc = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : Kq,
                fb = ka(A),
                zq = Gb(A),
                La = Bg(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, Ea("some", Array.prototype.some)),
                te = w(Mb),
                Lc = T("0"),
                qr = ka(Ag),
                zk = Ka(Array.prototype.reverse, "reverse"),
                hr = zk ? function(a) {
                    return zk.call(a)
                } : Jq,
                Ak =
                Gb(parseInt),
                Ga = Ak(10),
                Og = Ak(2),
                ya = Object.entries ? function(a) {
                    return a ? Object.entries(a) : []
                } : Tj,
                ba = Object.keys ? Object.keys : Uj,
                rr = u(Tj, v(T("1"), Wj)),
                sr = Object.values ? Object.values : rr,
                y = Object.assign || Iq,
                Ph = ka(function(a, c) {
                    return y({}, a, c)
                }),
                Zc = w(u(T("String.fromCharCode"), v("fromCharCode", Ea), Rb)),
                Fe = w(u(lb, Xa(/ipad|iphone|ipod/i))),
                Jf = w(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                pd = w(function(a) {
                    a = xk(a);
                    var c = a.Kg;
                    return a.Kf && !c.match("CriOS")
                }),
                tr = Xa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                ur = Xa(/; wv\)/),
                nd = w(function(a) {
                    a = lb(a);
                    return ur(a) || tr(a)
                }),
                vr = /Chrome\/(\d+)\./,
                wr = w(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(vr)) && a.length ? 76 <= Ga(a[1]) : !1
                }),
                md = w(function(a) {
                    var c = (lb(a) || "").toLowerCase();
                    a = Jf(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                xr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                yr = w(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (U(c)) return null;
                    a = te(a)(c,
                        xr);
                    return -1 === a ? c : "" + a
                }),
                og = w(u(T("document.addEventListener"), Rb)),
                Bk = w(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                ph = w(function(a) {
                    var c = n(a, "navigator") || {};
                    a = Bk(a);
                    za(a) || (a = "", c = n(c, "languages.0"), za(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                cb = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                zr = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                Ar =
                w(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Br = w(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(La(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || La(v(n(a, "document"), n), c) || b || d && La(E(d.getAttribute, d), e))
                }),
                Cr = w(function(a) {
                    return !!(La(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Dr = w(function(a) {
                    return Df(v(a, n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                Er = new RegExp(L("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                Ol = w(u(T("navigator.userAgent"), Xa(Er))),
                Md = w(function(a) {
                    var c = lb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Fe(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && pd(a)
                }),
                Hq = /Edg\/(\d+)\./,
                Gq = /Firefox\/([0-9]+)/,
                cg = w(function(a) {
                    return Md(a) || ff(a, 68) || gf(a, 79)
                }),
                Fr = Qc.construct,
                Zb = Qc.host,
                Pg = og(window),
                ra = {
                    Xg: 24226447,
                    Rg: 26302566,
                    $g: 51533966,
                    ek: 65446441,
                    Va: "https:",
                    gb: "991",
                    pc: Fr,
                    Wg: Pg ? 512 : 2048,
                    Ug: Pg ? 512 : 2048,
                    Vg: Pg ? 100 : 400,
                    fk: 100,
                    Yg: "noindex"
                },
                ec = {},
                M = w(function(a) {
                    return a.id + ":" + a.ca
                }),
                Ye = la("1"),
                Gr = setTimeout;
            Fa.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Fa.prototype.then = function(a, c) {
                var b = new this.constructor(Tq);
                dk(this, new Vq(a, c, b));
                return b
            };
            Fa.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Fa.all = function(a) {
                return new Fa(function(c,
                    b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Fa.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Fa ? a : new Fa(function(c) {
                    c(a)
                })
            };
            Fa.reject = function(a) {
                return new Fa(function(c, b) {
                    b(a)
                })
            };
            Fa.race = function(a) {
                return new Fa(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Fa.resolve(a[d]).then(c, b)
                })
            };
            Fa.Ze = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Gr(a, 0)
            };
            Fa.bh = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                Hr = Ka(K, "Promise"),
                Ck = Ka(n(K, "resolve"), "resolve"),
                Dk = Ka(n(K, "reject"), "reject"),
                Ek = Ka(n(K, "all"), "all");
            if (G(!1, [Hr, Ck, Dk, Ek])) K = Fa;
            else {
                var Le = function(a) {
                    return new Promise(a)
                };
                Le.resolve = E(Ck, K);
                Le.reject = E(Dk, K);
                Le.all = E(Ek, K);
                K = Le
            }
            var Qj = sc([26812653]),
                Zf = w(u(T("id"), Qj), M),
                zb = [],
                X = [],
                zc = [],
                Td = [],
                Qg = [],
                Me = [],
                Eq = vb("debuggerEvents", sd),
                Bq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Nd, gc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (Nd) var d = new Nd(c);
                        else Ea("Error", a.Error) ? (Nd = a.Error, d = new a.Error(c)) : (Nd = Dq, d = new Nd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                Cq = Xa(/^http./),
                Aq = Xa(/^err.kn/),
                Pj = [],
                Ir = w(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", B, b)
                    } catch (d) {}
                    return c
                }),
                Jr = ka(function(a, c) {
                    return a ? y({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ja = w(function(a) {
                    a = Ir(a);
                    var c = Jr(a),
                        b = {};
                    return y(b, {
                        D: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Oj(d, h, f, k, !1)
                            }, e);
                            return E(b.fc, b, d, e, f, g)
                        },
                        fc: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Oj(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                ha = w(ag),
                Lj = ka(function(a, c) {
                    for (var b = []; !Fd(c);) {
                        var d = vq(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Rg = ka(function(a, c) {
                    return xa(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Ne = ka(function(a, c) {
                    return xa(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ra(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                vg = [],
                wg = !1,
                ug = !1,
                Sb = {
                    id: "id",
                    Ue: "ut",
                    ca: "type",
                    de: "ldc",
                    tb: "nck",
                    Cc: "url",
                    Vh: "referrer"
                },
                Kr = /^\d+$/,
                Rc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Kr.test(a) || (a = "0");
                        try {
                            var c = Ga(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ca: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    tb: Boolean,
                    Ue: Boolean
                };
            Sb.rc = "defer";
            Rc.rc = Boolean;
            Sb.ea = "params";
            Rc.ea = function(a) {
                return Ma(a) || ea(a) ? a : null
            };
            Sb.Te = "userParams";
            Sb.Fg = "triggerEvent";
            Rc.Fg = Boolean;
            Sb.og = "sendTitle";
            Rc.og = function(a) {
                return !!a || U(a)
            };
            Sb.Pe = "trackHash";
            Rc.Pe = Boolean;
            Sb.Dg = "trackLinks";
            Sb.Fh = "enableAll";
            var Xe = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ia: c[1],
                        $a: Rc[b]
                    };
                    return a
                }, {}, ya(Sb)),
                Fk = ka(function(a, c) {
                    var b = c || {};
                    return {
                        l: v(b, O),
                        o: function(d, e) {
                            var f = b[d];
                            return U(f) && !U(e) ? e : f
                        },
                        C: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        cc: function(d, e) {
                            return "" === e || na(e) ? this : this.C(d, e)
                        },
                        Aa: v(b, a)
                    }
                }),
                Ca = Fk(function(a) {
                    var c = "";
                    a = N(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], ya(a));
                    c && a.push(c);
                    return L(":", a)
                }),
                Sg, Fj = (Sg = {}, Sg.w = [
                    [function(a, c) {
                        return {
                            aa: function(b, d) {
                                var e, f = b.G;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset =
                                    "utf-8", e);
                                "0" !== c.ca && (f["cnt-class"] = c.ca);
                                b.H || (b.H = Ca());
                                e = b.H;
                                var g = b.Y;
                                f = {
                                    ra: {
                                        Ja: "watch/" + c.id
                                    },
                                    Y: y(void 0 === g ? {} : g, {
                                        ld: !(!e.o("pv") || e.o("ar") || e.o("wh"))
                                    }),
                                    G: y(b.G || {}, f)
                                };
                                y(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Sg),
                Gk = v(Fj, Gj),
                ib = tg("w"),
                Cj = ["webkitvisibilitychange", "visibilitychange"],
                rg = Fk(function(a) {
                    a = ya(a);
                    return L("", A(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Ta(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Hk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                xp = /^ *(data|javascript):/i,
                Ri = new RegExp(L("", ["\\.(" + L("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Pa, ek = (Pa = {}, Pa.hit = "h", Pa.params = "p", Pa.reachGoal = "g", Pa.userParams = "up",
                    Pa.trackHash = "th", Pa.accurateTrackBounce = "atb", Pa.notBounce = "nb", Pa.addFileExtension = "fe", Pa.extLink = "el", Pa.file = "fc", Pa.trackLinks = "tl", Pa.destruct = "d", Pa.setUserID = "ui", Pa.getClientID = "ci", Pa.clickmap = "cm", Pa.enableAll = "ea", Pa),
                Lr = w(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Mr = u(M, Lr, ia),
                eg = {
                    mc: function(a) {
                        a = Jd(a).o("mt", {});
                        a = ya(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = H(a).o("cls", {
                                oc: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.oc,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.G;
                        return !a || a.nohit ? null : Mr(c)
                    }
                },
                Cb = F([1, null], Bg),
                dd = F([1, 0], Bg),
                nq = w(function(a) {
                    Aj(a, "_ymBRC", "1");
                    var c = "1" !== zj(a, "_ymBRC");
                    c || Bj(a, "_ymBRC");
                    return c
                }),
                Qa = w(jf),
                Sc = w(jf, function(a, c, b) {
                    return "" + c + b
                }),
                Nr = w(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                $a = w(u(T("document"), v("createElement", cc))),
                Uh = w(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = db(function(b) {
                            return Ea(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                Or = la("INPUT"),
                Ae = u(Ia, Or),
                Pr = la("TEXTAREA"),
                kq = u(Ia, Pr),
                Qr = la("SELECT"),
                lq = u(Ia, Qr),
                Be = u(T("type"), Xa(/^(checkbox|radio)$/)),
                vf = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA$/)),
                fe = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Af = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                jq = ["submit", "image", "hidden"],
                hj = /^\s+|\s+$/g,
                wj = Ka(String.prototype.trim, "trim"),
                Ik = ka(function(a, c) {
                    return c.replace(a, "")
                }),
                zi = Ik(/\s/g),
                Lb = Ik(/\D/g),
                Nf = w(function() {
                    for (var a = 59, c = {}, b = 0; b < Hk.length; b += 1) c[Hk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                uj = w(function(a) {
                    return {
                        xk: a,
                        lb: null,
                        wb: []
                    }
                }),
                sj = {},
                lg = {};
            sj.p = 500;
            var rj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            lg.h = !0;
            lg.c = !0;
            var Oc = {};
            Oc.p = mg;
            Oc.c = function(a, c, b) {
                (a = nb(n(c, "textContent"))) && b && (b = b(c), b.length && La(u(T("textContent"), nb, la(a)), b) && (a = ""));
                Ae(c) && (a = nb(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var Tc, kg = "button," + A(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") + ",a",
                Pf = v(kg, ub),
                gq = (Tc = {}, Tc.A = "h", Tc.BUTTON = "i", Tc.DIV = "i", Tc.INPUT = "ty", Tc),
                fq = "hash host hostname href pathname port protocol search".split(" "),
                jg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                qj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                re = w(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Rr = w(function(a) {
                    a =
                        R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(qj));
                    return c
                }),
                Jk = u(R, T("protocol"), la("https:")),
                Kk = /\/$/,
                Sr = w(u(ha, xa(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Tr = u(ha, xa(function(a) {
                    a = new a.l.Date;
                    return L("", A(wq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Ur = u(ha, xa(fg)),
                Lk = w(u(ha, xa(function(a) {
                    return a.za[0]
                }))),
                Vr = w(wc),
                dq = w(function(a) {
                    return wr(a) && Jk(a) ? "SameSite=None;Secure;" : ""
                }),
                ig = ["metrika_enabled"],
                hg = [],
                oj = vb("gsc", mj),
                eq = /:\d+$/,
                Wq = w(function(a) {
                    var c = (R(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = L(".", c.slice(-e)), Vh(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Yb = w(Ac),
                lj = vb("r", function(a, c) {
                    var b = kj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Cd = w(function() {
                    return {
                        Ha: {},
                        pending: {},
                        children: {}
                    }
                }),
                Tg = T("postMessage"),
                Wr = D("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Cd(a),
                        g = L(":", [c.$.wc, c.$.key]);
                    if (Tg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.yg, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        W(a, function() {
                                delete f.pending[g]
                            },
                            5E3, "if.s")
                    }
                }),
                Xr = D("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Cd(a),
                        l = null;
                    try {
                        g = rb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!na(h) && h.substring && "__yminfo" === h.substring(0, 8) && !na(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ea(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Ta(k) && Tg(k) && (f = d.O(l.type, [f, l]), e = A(u(O, Ph(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.yg, "*"))
                            }
                        } else g === "" + h && ea(l) &&
                            Y(function(m) {
                                return !(!m.hid || !m.counterId)
                            }, l).length === l.length && (b = k.pending[L(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                $c = w(function(a, c) {
                    var b, d = cc("getElementsByTagName", n(a, "document")),
                        e = Cd(a),
                        f = Tg(a),
                        g = ed(a),
                        h = ja(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Ib(a), b);
                    cg(a) && (f.duid = Cc(a, c));
                    $p(a, g);
                    aq(a);
                    b = bq(a, f);
                    var k = F([a, v([], b)], Wr);
                    z(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.O("initToParent",
                                [p, q])
                        })
                    }, d);
                    cb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.O("parentConnect", [l, m])
                    });
                    h.D(a, ["message"], F([a, c, b, g, f], Xr));
                    return {
                        ba: g,
                        Ha: e.Ha,
                        children: e.children,
                        Fe: k
                    }
                }, u(wb, M)),
                $d = w(function(a, c) {
                    if (!cg(a) || !cb(a)) return Cc(a, c);
                    var b = $c(a, c);
                    return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Cc(a, c) : Cc(a, c)
                }, function(a, c) {
                    return "{" + c.de + c.tb
                }),
                Yr = w(function(a) {
                    a = H(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, u(wb, M)),
                fa, dg = (fa = {}, fa.vf = v(Qc.version, O), fa.nt = yr, fa.fp = function(a,
                    c, b) {
                    if (b.G && b.G.nohit) return null;
                    c = M(c);
                    b = Vr(a);
                    if (b[c]) return null;
                    a: {
                        var d = Lk(a),
                            e = n(a, "performance.getEntriesByType");
                        if (S(e)) {
                            if (a = Y(u(O, T("name"), la("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) : null
                }, fa.fu = function(a, c, b) {
                    var d = b.G;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Kk, "");
                    b = (d["page-ref"] || "").replace(Kk, "");
                    d = d["page-url"];
                    a = R(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, fa.en = Nr, fa.la = Bk, fa.ut = function(a, c, b) {
                    var d = b.V;
                    b = b.G;
                    d = d && d.Qc;
                    b && (Rr(a) || c.Ue || d) && (b.ut = ra.Yg);
                    return null
                }, fa.v = v(ra.gb, O), fa.cn = Yr, fa.dp = function(a) {
                    var c = H(a),
                        b = c.o("bt", {});
                    if (U(c.o("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.C("bt", b);
                        b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function(e) {
                            b.Wj =
                                n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return dd(b.Wj)
                }, fa.ls = w(function(a, c) {
                    var b = Sc(a, c.id),
                        d = ha(a),
                        e = b.o("lsid");
                    return +e ? e : (d = Ua(a, 0, d(aa)), b.C("lsid", d), d)
                }, wb), fa.hid = Ib, fa.phid = function(a, c) {
                    if (!cb(a)) return null;
                    var b = $c(a, c);
                    if (!b) return null;
                    var d = ba(b.Ha);
                    return d.length ? b.Ha[d[0]].info.hid : null
                }, fa.z = Sr, fa.i = Tr, fa.et = Ur, fa.c = u(T("navigator.cookieEnabled"), Cb), fa.rn = u(O, Ua), fa.rqn = function(a, c, b) {
                    b = b.G;
                    if (!b || b.nohit) return null;
                    c = M(c);
                    a = Sc(a, c);
                    c = (a.o("reqNum", 0) || 0) + 1;
                    a.C("reqNum",
                        c);
                    if (a.o("reqNum") === c) return c;
                    a.Pb("reqNum");
                    return null
                }, fa.u = $d, fa.tp = u(wb, Rj, Cb), fa.tpid = u(wb, function(a) {
                    a = M(a);
                    return ec[a] && ec[a].Nj || null
                }), fa.w = function(a) {
                    a = Ed(a);
                    return a[0] + "x" + a[1]
                }, fa.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return L("x", [a, b, c])
                    }
                    return null
                }, fa.sk = T("devicePixelRatio"), fa.ifr = u(cb, Cb), fa.j = u(Ar, Cb), fa.sti = function(a) {
                    return cb(a) ? zr(a) ? "1" : null : null
                }, fa),
                Zp = w(function() {
                    return Na(ba(dg), ba(eg))
                }),
                Yp = w(wc, M),
                ij = w(function() {
                    return {
                        sf: null,
                        va: []
                    }
                }, M),
                Vp = /^[a-z][\w.+-]+:/i,
                Ug, Pb = [
                    [Ce, 1],
                    [xe, 2],
                    [Fb(), 3],
                    [jj, 4]
                ],
                we = [],
                xb = v(Pb, Hj),
                Ob = (Ug = {}, Ug.h = Pb, Ug),
                ca = v(Ob, Gj);
            xb(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.G;
                        if (!c.H || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = gj(a, e) : delete d["page-ref"];
                        d["page-url"] = gj(a, f).slice(0, ra.Wg);
                        return b()
                    }
                }
            }, -100);
            var Rp = /[^a-z0-9.:-]/,
                Vg, bc = [],
                Wg = {};
            bc.push(cj, 0, Nb, bg, Bd);
            var Mk = [Nb];
            Mk.push(bg);
            var Nk = Eb(Mk),
                Uc = Eb([Bd]),
                Zr = Eb([cj,
                    Bd
                ]),
                Oe = Eb([0, Nb, bg, Bd]),
                va = (Vg = {}, Vg.h = Nk, Vg),
                ad = w(function(a, c) {
                    var b = Wg["*"] ? Wg["*"] : c && Wg[c];
                    b || (b = c ? va[c] || [] : bc);
                    b = N(function(d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || We();
                    return b
                }, wb),
                Xg, $r = E(K.reject, K, Sa()),
                Da = (Xg = {}, Xg.h = ib, Xg),
                Aa = D("g.sen", function(a, c, b) {
                    var d = ad(a, c);
                    b = b ? Up(a, c, b) : [];
                    var e = Da[c],
                        f = e ? e(a, d, b) : ib(a, d, b);
                    return function() {
                        var g = Ba(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.Y;
                        h = y(h, {
                            Y: y(void 0 === k ? {} : k, {
                                Da: [c]
                            })
                        });
                        return f.apply(void 0, wa([h], g))
                    }
                }, $r),
                Kp =
                ka(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            fg: b,
                            cb: d,
                            gg: !1
                        }
                    }
                    return c[a].cb
                }),
                bj = w(u(wc, xa)),
                Od = w(function(a, c) {
                    var b = n(a, "console"),
                        d = n(b, "log");
                    d = He("log", d) ? E(d, b) : B;
                    var e = n(b, "warn");
                    e = He("warn", e) ? E(e, b) : d;
                    var f = n(b, "error");
                    b = He("error", f) ? E(f, b) : d;
                    return {
                        log: Mc(a, "log", c, d),
                        error: Mc(a, "error", c, b),
                        warn: Mc(a, "warn", c, e)
                    }
                }),
                as = D("dc.init", function(a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m - 1] = arguments[m];
                        H(a).o("dce:" + c, !1) && e[k].apply(e, l);
                        H(a).o("dclq:" +
                            c).push([k, l])
                    }
                    var d = R(a),
                        e = Od(a, c);
                    H(a).Sa("dclq:" + c, []);
                    var f = Yb(a),
                        g = Cf(a),
                        h = g.Ii;
                    g = g.yi;
                    h && !g && f.C("debug", "1", void 0, d.host);
                    return h || g ? {
                        log: v("log", b),
                        warn: v("warn", b),
                        error: v("error", b)
                    } : Jp(a, c)
                }),
                zd = w(as, wb),
                bs = D("p.dc", function(a, c) {
                    var b = M(c);
                    aj(a, "");
                    aj(a, b)
                }),
                zl = C(window, "h.p", function(a, c) {
                    var b, d, e = Aa(a, "h", c),
                        f = c.Cc || "" + R(a).href,
                        g = c.Vh || a.document.referrer,
                        h = {
                            H: Ca((b = {}, b.pv = 1, b)),
                            G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            V: {}
                        };
                    h.V.ea = c.ea;
                    h.V.Te = c.Te;
                    c.rc && h.G && (h.G.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.rc || Db(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.ea)(), Hb(a, F([a, c, k], Lp)))
                    })["catch"](C(a, "h.g.s"))
                }),
                Yg = ["yandex_metrika_callback" + Qc.callbackPostfix, "yandex_metrika_callbacks" + Qc.callbackPostfix],
                cs = D("cb.i", function(a) {
                    var c = Yg[0],
                        b = Yg[1];
                    if (S(a[c])) a[c]();
                    "object" === typeof a[b] && z(function(d, e) {
                        a[b][e] = null;
                        Vf(a, d)
                    }, a[b]);
                    z(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Yg)
                }),
                Ok = w(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a,
                        "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                ds = D("fpm", function(a, c) {
                    if (!Jk(a)) return B;
                    var b = M(c);
                    if (!Ok(a)) return Ab(a, b, "Not supported"), B;
                    var d = Ha(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return Ma(e) ? ba(e).length ? f(Yi(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, B)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                        }))["catch"](C(a, "fpm.en"))
                    } : B
                }),
                Pe = ka(function(a, c) {
                    var b = {};
                    Xf(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                es = D("c.c.cc", function(a) {
                    var c = H(a),
                        b = u(Pe(a), function(d) {
                            var e;
                            return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                        });
                    return C(a, "g.c.cc", u(E(c.o, c, "counters", {}), ba, fb(b)))
                }),
                fs = D("gt.c.rs", function(a, c) {
                    var b, d = M(c),
                        e = c.id,
                        f = c.ca,
                        g = c.vh,
                        h = c.Pe,
                        k = F([a, d], Fp);
                    Wf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                Wi = w(sd),
                yd = w(wc, M),
                gs = ["ecommerce", "user_id", "fpp"],
                hs = D("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f = Ba(arguments),
                            g = Ep(f);
                        if (!g) return null;
                        f = g.Ah;
                        var h = g.ea;
                        g = g.jc;
                        if (!Ma(h) && !ea(h)) return null;
                        var k = Aa(a, "1", c),
                            l = yd(c).url,
                            m = n(h, "__ym.user_id"),
                            p = ba(h),
                            q = G("__ymu", p),
                            r = G("__ym", p) && m;
                        p = !Zf(c);
                        var t = h;
                        t.__ym && (t = y({}, h), t.__ym = N(function(x, I) {
                            var Z = n(h, "__ym." + I);
                            Z && (x[I] = Z);
                            return x
                        }, {}, gs), ba(t.__ym).length || delete t.__ym, p = !!ba(t).length);
                        m = Db(a, c, r ? "Set user id " + m : (q ? "User p" : "P") + "arams. Counter " + c.id, r ? void 0 : JSON.stringify(t));
                        k = k({
                            V: {
                                ea: h
                            },
                            H: Ca((d = {}, d.pa = 1, d.ar = 1, d)),
                            G: (e = {}, e["page-url"] = l || R(a).href, e)
                        }, c).then(p ? m : B);
                        return Kc(a, "p.s", k,
                            g, f)
                    }, b
                }),
                Zd = w(Ti, u(wb, M)),
                is = D("y.p", function(a, c) {
                    var b = Ti(a, c);
                    if (b) {
                        var d = Ud(a),
                            e = F([a, b, c], Ap);
                        sh(a, d, function(f) {
                            f.D(["params"], e)
                        });
                        b.ba.D(["params"], u(T("1"), e))
                    }
                }),
                Xq = w(function(a) {
                    if (a = $a(a)) return a("a")
                }),
                Pk = {
                    Ak: Xa(/[/&=?#]/)
                },
                pe = D("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m;
                        if (!f || Pk[b] && Pk[b](f)) return null;
                        var p = g,
                            q = h || B;
                        S(g) && (q = g, p = void 0, k = h);
                        var r = Db(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                            t = "goal" === b;
                        g = Aa(a,
                            "g", c);
                        var x = zp(a, c, f, b);
                        h = x[0];
                        x = x[1];
                        p = g({
                            V: {
                                ea: p
                            },
                            H: Ca((l = {}, l.ar = 1, l)),
                            G: (m = {}, m["page-url"] = h, m["page-ref"] = x, m)
                        }, c).then(function() {
                            t && r();
                            gb(a, {
                                da: M(c),
                                name: "event",
                                data: {
                                    Bb: b,
                                    name: f
                                }
                            });
                            d && d()
                        });
                        return Kc(a, "g.s", p, q, k)
                    }, e
                }),
                js = D("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Cc(a, c);
                        d && Vf(a, d, null, e);
                        return e
                    }, b
                }),
                gk, ks = D("th.e", function(a, c) {
                    function b() {
                        g || (k = wd(a, "onhashchange") ? ja(a).D(a, ["hashchange"], h) : Yq(a, h))
                    }
                    var d, e = Aa(a, "t", c),
                        f = ue(a, M(c)),
                        g = !1,
                        h = C(a,
                            "h.h.ch", E(Zq, null, a, c, e)),
                        k = B;
                    c.Pe && (b(), g = !0);
                    e = C(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                ls = ka(function(a, c) {
                    za(c) ? a.push(c) : z(u(O, pa("push", a)), c)
                }),
                ms = D("cl.p", function(a, c) {
                    function b(p, q, r, t) {
                        void 0 === t && (t = {});
                        r ? qe(a, c, {
                            url: r,
                            qb: !0,
                            Lc: p,
                            Qc: q,
                            sender: e,
                            Lg: t
                        }) : g.warn("Empty link")
                    }
                    var d, e = Aa(a, "2", c),
                        f = [],
                        g = Od(a, M(c)),
                        h = M(c),
                        k = C(a, "s.s.tr", v(ue(a, h), yp));
                    h = {
                        l: a,
                        hb: c,
                        Nh: f,
                        sender: e,
                        globalStorage: H(a),
                        zh: Sc(a, c.id),
                        Bk: Ib(a),
                        Oj: v(v(h,
                            Pe(a)), u(ia, T("trackLinks")))
                    };
                    h = C(a, "cl.p.c", v(h, vp));
                    h = ja(a).D(a, ["click"], h);
                    c.Dg && k(c.Dg);
                    var l = C(a, "file.clc", F([!0, !1], b)),
                        m = C(a, "e.l.l.clc", F([!1, !0], b));
                    f = C(a, "add.f.e.clc", ls(f));
                    return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                }),
                xd = vb("retryReqs", function(a) {
                    return Qa(a).o("retryReqs", {})
                }, !0),
                Qk = Gb(u(ee, la(0))),
                ns = [Qk("watch"), Qk("clmap")],
                os = D("g.r", function(a) {
                    var c = ha(a),
                        b = xd(a),
                        d = c(aa),
                        e = Ib(a);
                    return N(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && La(xa(k.resource),
                            ns) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ja: k.resource,
                            nj: k.postParams,
                            ea: k.params,
                            kh: k.browserInfo,
                            zk: k.ghid,
                            time: k.time,
                            $b: Ga(h),
                            yh: k.counterId,
                            ca: k.counterType
                        }, k.telemetry && (h.Ka = k.telemetry), f.push(h));
                        return f
                    }, [], ya(b))
                }),
                ps = D("nb.p", function(a, c) {
                    function b(I) {
                        l() || (I = "number" === typeof I ? I : 15E3, x = $q(a, d(!1), I), m())
                    }

                    function d(I) {
                        return function(Z) {
                            var V, oa, ta;
                            void 0 === Z && (Z = (V = {}, V.ctx = {}, V.callback =
                                B, V));
                            if (I || !r && !k.Wd) {
                                r = !0;
                                m();
                                x && x();
                                var tb = p(aa);
                                V = (Ga(k.o("lastHit")) || 0) < tb - 18E5;
                                var rd = .1 > Math.random();
                                k.C("lastHit", tb);
                                tb = Ca((oa = {}, oa.nb = 1, oa.cl = t, oa.ar = 1, oa));
                                oa = yd(c);
                                oa = {
                                    G: (ta = {}, ta["page-url"] = oa.url || R(a).href, ta),
                                    H: tb,
                                    V: {
                                        force: I
                                    }
                                };
                                ta = Od(a, M(c)).warn;
                                !Z.callback && Z.ctx && ta('"callback" argument missing');
                                (ta = I || V || rd) || (ta = a.location.href, V = a.document.referrer, ta = !(ta && V ? Si(ta) === Si(V) : !ta && !V));
                                if (ta) return ta = g(oa, c), Kc(a, "l.o.l", ta, Z.callback, Z.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = Aa(a, "n",
                            c),
                        h = M(c),
                        k = Sc(a, c.id),
                        l = v(v(h, Pe(a)), u(ia, T("accurateTrackBounce"))),
                        m = v((e = {}, e.accurateTrackBounce = !0, e), ue(a, h)),
                        p = ha(a),
                        q = p(aa),
                        r = !1,
                        t = 0,
                        x;
                    qa(c, function(I) {
                        t = I.Ph - q
                    });
                    c.af && b(c.af);
                    e = (f = {}, f.notBounce = d(!0), f.u = x, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                sp = ka(qc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                qs = D("clm.p", function(a, c) {
                    if (Zc(a)) return B;
                    var b = Aa(a, "m", c),
                        d = M(c),
                        e = ha(a),
                        f = e(aa),
                        g = v(v(d, Pe(a)), u(ia, T("clickmap"))),
                        h, k = null;
                    d = C(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = H(a),
                                q = p.o("cls", {
                                    oc: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.C("cls", {
                                oc: q.oc + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function(x) {
                                return ("" + x).toUpperCase()
                            }, p.ignoreTags || []);
                            U(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: tp(a, l),
                                position: Oi(a, l),
                                button: up(l),
                                time: e(aa)
                            };
                            p = R(a).href;
                            if (rp(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = ze(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = ng(a, l.element);
                                q = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) /
                                    (r || 1)), "t", Math.floor((l.time - f) / 100), "p", mg(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = L(":", q);
                                m && (q += ":wh:1");
                                qp(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ja(a).D(n(a, "document"), ["click"], d)
                }),
                rs = D("trigger.in", function(a, c) {
                    c.Fg && Hb(a, F([a, "yacounter" + c.id + "inited"], mq), "t.i")
                }),
                ss = D("c.m.p", function(a, c) {
                    var b, d = M(c);
                    return b = {}, b.clickmap = v(ue(a, d), pp), b
                }),
                oi = v("form", ac),
                Yo = v("form", ub),
                op = w(function(a, c) {
                    return qa(c, T("settings.form_goals"))
                }, wb),
                ts = v(!0, Li),
                us = D("s.f.i", function(a, c) {
                    var b = [];
                    ja(a).D(a,
                        ["click"], C(a, "s.f.c", F([a, c, b], np)));
                    ja(a).D(a, ["submit"], C(a, "s.f.e", u(T("target"), F([a, c, b], ts))));
                    Mi(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                vs = D("s.f.i", function(a, c) {
                    return qa(c, function(b) {
                        if (n(b, "settings.button_goals") || -1 !== R(a).href.indexOf("yagoalsbuttons=1")) ja(a).D(a, ["click"], C(a, "c.t.c", u(T("target"), F([a, c], Ve(a, c, "", mp))))), Db(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }),
                Tb, Pd, Zg, xc, Rf = (Tb = {}, Tb.transaction_id = "id", Tb.item_brand = "brand", Tb.index = "position", Tb.item_variant =
                    "variant", Tb.value = "revenue", Tb.item_category = "category", Tb.item_list_name = "list", Tb),
                Ic = (Pd = {}, Pd.item_id = "id", Pd.item_name = "name", Pd.promotion_name = "coupon", Pd),
                lp = (Zg = {}, Zg.promotion_name = "name", Zg),
                ip = "currencyCode add delete remove purchase checkout detail".split(" "),
                jp = (xc = {}, xc.view_item = {
                    event: "detail",
                    sb: Ic,
                    Gb: "products"
                }, xc.add_to_cart = {
                    event: "add",
                    sb: Ic,
                    Gb: "products"
                }, xc.remove_from_cart = {
                    event: "remove",
                    sb: Ic,
                    Gb: "products"
                }, xc.begin_checkout = {
                    event: "checkout",
                    sb: Ic,
                    Gb: "products"
                }, xc.purchase = {
                    event: "purchase",
                    sb: Ic,
                    Gb: "products"
                }, xc),
                Ji = D("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = ea(g) && se(a, g, b)) || (f = W(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return ma(a, f)
                    }
                }),
                ws = D("p.e", function(a, c) {
                    var b = Ha(a, c);
                    if (b) {
                        var d = H(a);
                        b = b.params;
                        var e = C(a, "h.ee", F([a, M(c), b], gp));
                        return c.Cd ? (d.C("ecs", 0), Ii(a, c.Cd, e)) : qa(c, function(f) {
                            if (f = n(f, "settings.ecommerce")) return d.C("ecs", 1), Ii(a, f, e)
                        })
                    }
                }),
                Fi = w(function(a) {
                    return L("[^\\d<>]*", a.split(""))
                }),
                lm = w(function(a) {
                    return new RegExp(Fi(a),
                        "g")
                }),
                dp = /\S/,
                yi = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ec),
                Rk = w(function(a) {
                    return Zc(a) || !Dd(a)
                }),
                xs = D("phc.h", function(a, c) {
                    return Sj(a) || Rk(a) ? null : qa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Ac(a, "").o("yaHidePhones");
                            d = d ? rb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && qi(a, c, b)
                        }
                    })
                }),
                Sk = w(function(a) {
                    a = R(a);
                    a = qq(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                ti = u(Sk,
                    T("_ym_status-check"), Ga),
                ys = u(Sk, T("_ym_lang")),
                si = Xa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                $o = ["form", "button", "phone", "status"],
                $g = [],
                Xo = w(function(a, c, b) {
                    z(u(Nc([a, c, b]), ia), $g);
                    if (b.inline) {
                        c = ri(b);
                        var d = b.data;
                        b = b.id;
                        ni(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && si(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage =
                        b.initMessage, ap(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                zs = D("cs.init", function(a, c) {
                    var b, d = ti(a);
                    if (d && c.id === d && "0" === c.ca) {
                        var e = ri((b = {}, b.lang = ys(a), b.fileId = "status", b));
                        W(a, F([a, e, "" + d], ni), 0, "cs")
                    }
                }),
                As = D("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (za(d) || ne(a, d)) {
                            var g = Ha(a, c);
                            d = Ec(["__ym", "user_id", d]);
                            g.params(d, e || B, f)
                        } else Od(a, M(c)).error("Incorrect user ID")
                    }, b
                }),
                Jc = {
                    position: "absolute"
                },
                mi = {
                    position: "fixed"
                },
                Mf = {
                    borderRadius: "50%"
                },
                Bs = u(T("settings.sm"),
                    la(1)),
                Cs = vb("siteStatistics", function(a, c) {
                    if (!Sj(a)) return $b(a)(Ra(B, F([c, function(b) {
                        return Bs(b) ? Vo(a, c.id) : B
                    }], qa)))
                }),
                Ds = D("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = C(a, "up.c", function(d, e, f) {
                        var g, h = Ha(a, c),
                            k = zd(a, M(c)).warn;
                        h ? Ma(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || B, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                Es = /[\*\.\?\(\)]/g,
                Fs = w(function(a, c, b) {
                        try {
                            var d = b.replace("\\s", " ").replace(Es, "");
                            zd(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                        } catch (e) {}
                    },
                    wb),
                Gs = D("r.nn", function(a) {
                    Cf(a).isEnabled && se(a, Fg, function(c) {
                        c.ya.D(function(b) {
                            Fs(a, b[1], b[0]);
                            Fg.splice(100)
                        })
                    })
                }),
                Hs = D("e.a.p", function(a, c) {
                    var b, d = Ha(a, c);
                    d = F([u(O, xa(!0)), Y(Boolean, A(v(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A);
                    c.Fh && d();
                    return b = {}, b.enableAll = d, b
                }),
                Is = v("add", me),
                Js = v("remove", me),
                Ks = v("detail", me),
                Ls = v("purchase", me),
                Ms = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                $e = w(function(a) {
                    var c = xk(a);
                    a = c.Kg;
                    if (!c.Kf) return !1;
                    c = pa("indexOf", a);
                    c = La(u(c, la(-1), Rb), Ms);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                Ns = ["YangoEats"],
                Nl = w(function(a) {
                    var c = lb(a);
                    if (!c) return !1;
                    c = pa("indexOf", c);
                    return La(u(c, la(-1), Rb), Ns) || nd(a)
                }),
                To = /([0-9\\.]+) Safari/,
                Os = /\sYptp\/\d\.(\d+)\s/,
                Tk = w(function(a) {
                    var c;
                    a: {
                        if ((c = lb(a)) && (c = Os.exec(c)) && 1 < c.length) {
                            c = Ga(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || gf(a,
                        79) ? !1 : !Md(a) || $e(a)
                }),
                Uk = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Ps = w(function(a) {
                    a = $a(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = E(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Vk = Ka(String.prototype.repeat, "repeat"),
                Qs = Vk ? function(a, c) {
                    return Vk.call(a, c)
                } : Qo,
                Ih = v(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = Qs(c, b);
                    return a ? c + d : d + c
                }),
                Ie = [2277735313, 289559509],
                Je = [1291169091,
                    658871167
                ],
                Rs = D("p.cd", function(a, c) {
                    if (md(a) || Fe(a)) {
                        var b = Qa(a);
                        if (na(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.pk || pd(a) ? function() {} : /./,
                                e = Od(a, M(c));
                            d.toString = function() {
                                b.C("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                Ss = w(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Oa(a) && La(u(T("name"), Xa(/Chrome PDF Viewer/)), a))
                }),
                No = {
                    "*": "+",
                    "-": "/",
                    ik: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                yc = ka(function(a, c) {
                    return H(c).o(a, null)
                }),
                Ts = w(function(a) {
                    return S(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                Jo = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                pb, Io = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                ki = (pb = {}, pb.responseEnd = 1, pb.domInteractive = 1, pb.domContentLoadedEventStart =
                    1, pb.domContentLoadedEventEnd = 1, pb.domComplete = 1, pb.loadEventStart = 1, pb.loadEventEnd = 1, pb.unloadEventStart = 1, pb.unloadEventEnd = 1, pb.secureConnectionStart = 1, pb),
                Lo = w(sd),
                Fo = w(wc),
                Go = w(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (S(c) && !md(a)) return (new K(E(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](v(!0, O));
                    if (Gd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(U(c));
                    c = n(a,
                        "openDatabase");
                    if (pd(a) && S(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Us = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Vs = w(function(a, c) {
                    var b = Yb(a),
                        d = R(a).search.match(Us);
                    return d && 2 <= d.length ? (d = d[2], c.tb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Ws = D("pa.plgn", function(a, c) {
                    var b = Zd(a, c);
                    b && b.ba.D(["pluginInfo"], C(a, "c.plgn", function() {
                        var d = H(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return Fq(c,
                            Xe)
                    }))
                }),
                Wk = Zb.split("."),
                Xs = Wk.pop(),
                Xk = L(".", Wk),
                Fl = w(function(a) {
                    a = R(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                oh = w(function(a) {
                    return -1 !== R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                Ys = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site|band\.link)$/,
                Xd = w(function(a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Ys));
                    return c
                }),
                Zs = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                uo = w(function(a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Zs));
                    return c
                }),
                Yk = ra.Va + "//" + Zb + "/metrika",
                Zk = Yk + "/metrika_match.html",
                qb, bb, Gl = (qb = {}, qb.am = "com.am", qb.tr = "com.tr", qb.ge = "com.ge", qb.il = "co.il", qb["\u0440\u0444"] = "ru", qb["xn--p1ai"] = "ru", qb["\u0443\u043a\u0440"] = "ua", qb["xn--j1amh"] = "ua", qb["\u0431\u0435\u043b"] = "by", qb["xn--90ais"] = "by", qb),
                $k = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Hl = (bb = {}, bb.ka = "ge", bb.ro = "md", bb.tg = "tj", bb.tk = "tm", bb.et = "ee", bb.hy = "com.am", bb.he = "co.li", bb.ky = "kg", bb.uk = "ua", bb.be = "by", bb.tr = "com.tr", bb.kk = "kz", bb),
                Bo = "ar:1:pv:1:v:" + ra.gb + ":vf:" + Qc.version,
                Co = ra.Va + "//" + Zb + "/watch/" + ra.Rg,
                al = {},
                $s = D("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        void 0 === e && (e = B);
                        if (d && 0 < d.length) {
                            var k =
                                Aa(a, "e", c),
                                l = yd(c).url;
                            d = k({
                                H: Ca((g = {}, g.ex = 1, g.ar = 1, g)),
                                G: (h = {}, h["page-url"] = l || R(a).href, h.exp = d, h)
                            }, c);
                            return Kc(a, "exps.s", d, e, f)
                        }
                    }, b
                }),
                af = [],
                at = D("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Qa(a),
                        f = ha(a),
                        g = e.o("wasSynced"),
                        h = {
                            id: 3,
                            ca: "0"
                        };
                    return c && g && g.time + 864E5 > f(aa) ? K.resolve(g) : Aa(a, "f", h)({
                        H: Ca((b = {}, b.pv = 1, b)),
                        G: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(aa), l.params = n(k, "settings"), l.bkParams = n(k, "userData"),
                            l);
                        e.C("wasSynced", k);
                        return k
                    })["catch"](C(a, "f.h"))
                }),
                bt = ka(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.ee.C("ymoo" + a.da, a.Cg(jb)), a.xd && a.xd.destruct && a.xd.destruct())
                }),
                ii = u(T("settings.pcs"), la("1")),
                ro = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                so = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                ji = {
                    G: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                hi = {
                    id: 42822899,
                    ca: "0"
                },
                Qe, yo = (Qe = {}, Qe.s = "p", Qe["8"] =
                    "i", Qe),
                vo = vb("csp", function(a, c) {
                    return Aa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                ah = "et w v z i u vf".split(" "),
                ko = {
                    L: "stamp",
                    M: "frameId",
                    $: "meta",
                    ef: "base",
                    Gf: "hasBase",
                    bf: "address",
                    Hg: "ua",
                    ve: "prev",
                    Tf: "namespace",
                    Oc: "keystrokes",
                    Mf: "isMeta",
                    Pc: "modifier",
                    yb: "pageWidth",
                    xb: "pageHeight",
                    wg: "startNode",
                    kf: "endNode",
                    Og: "zoomFrom",
                    Qg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    Fa: "i",
                    Sc: "o",
                    n: "n",
                    r: "r",
                    vc: "ct",
                    Mb: "at",
                    Uf: "nm",
                    Vf: "ns",
                    pe: "pa",
                    te: "pr",
                    je: "nx",
                    Xa: "h",
                    Ma: "changes",
                    $e: "a",
                    df: "b",
                    qd: "c",
                    oe: "op"
                },
                lo = ["attributes", "attrs"],
                Re = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.prototype.Aa = function(c) {
                        var b = je(c);
                        c = A(E(this.Ra, this), b);
                        return qf(kb(this.l, A(function(d, e) {
                            var f;
                            return y({}, b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.Ra = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = kb(this.l, je(c.data)));
                        return b
                    };
                    a.prototype.Wa = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.fd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.l.JSON
                    };
                    return a
                }(),
                io = w(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return jo;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                eo = ei(!1),
                co = ei(!0),
                ct = {
                    Jj: "topics",
                    pj: "publicationDate",
                    mj: "pageUrlCanonical",
                    Uj: "updateDate",
                    ih: "authors",
                    fh: "articleInfo",
                    vj: "rubric",
                    qj: "publishersHeader",
                    Oa: "involvedTime",
                    lj: "pageTitle",
                    Si: "maxScrolled",
                    gf: "chars",
                    gh: "articleMeta"
                },
                dt = function() {
                    function a(c) {
                        this.l = c;
                        this.Ub = u(ya, ud(function(b, d) {
                            b[d[1]] = d[0];
                            return b
                        }, {}))(ct)
                    }
                    a.prototype.Ag = function(c) {
                        var b, d = this.ue(c.data);
                        return {
                            L: ha(this.l)(xg),
                            data: (b = {}, b[this.Ub[c.type]] = d, b)
                        }
                    };
                    a.prototype.ue = function(c) {
                        var b = this;
                        return ea(c) ? A(E(this.ue, this), c) : Ma(c) ? u(ya, ud(function(d, e) {
                            var f = e[0];
                            d[b.Ub[f] || f] = b.ue(e[1]);
                            return d
                        }, {}))(c) : c
                    };
                    a.prototype.Ra =
                        function(c) {
                            return he(this.l, Hf, this.Ag(c))(Ee(B))
                        };
                    a.prototype.Wa = function(c) {
                        return c[0]
                    };
                    a.prototype.fd = function(c) {
                        return [c]
                    };
                    a.prototype.Aa = function(c) {
                        var b = this;
                        c = he(this.l, Yh, {
                            buffer: A(E(this.Ag, this), c)
                        });
                        return ic(this.l, c, 20, De)(Ne(function(d) {
                            d = Ef(b.l, d.slice(-4));
                            return ic(b.l, d, 20, De)
                        }))(Rg(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    a.prototype.isEnabled = function() {
                        return Xh(this.l)
                    };
                    return a
                }(),
                Qd, bh = (Qd = {}, Qd[1] = 500, Qd[2] = 500, Qd[3] = 0, Qd),
                ch = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id =
                            "a";
                        this.Ud = !1;
                        this.Qb = {};
                        this.Cb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Xf: ["article"]
                        };
                        this.Re = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.xh = w(function(f, g) {
                            Ab(e.l, e.da, "Warning: content has only " + g.chars + " chars. Required " + bh[g.type], g)
                        });
                        this.l = c;
                        this.root = Wb(c);
                        this.da = b
                    }
                    a.prototype.Na = function(c) {
                        return c.element
                    };
                    a.prototype.zf = function(c, b) {
                        var d = this,
                            e;
                        C(this.l, "P.s." + b, function() {
                            e = d.Qb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.oj = function(c) {
                        var b =
                            y({}, c);
                        this.Ud && !b.id && G(c.type, [3, 2]) && (c = L(", ", A(T("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.ni(b.qc));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.ki());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ea = function(c) {
                        var b = this,
                            d = {},
                            e = this.Na(c);
                        if (!e) return null;
                        d.type = c.type;
                        z(function(g) {
                            d[g] = b.zf(c, g)
                        }, ba(this.Qb));
                        var f = ha(this.l);
                        d.stamp = f(xg);
                        d.element = c.element;
                        d.qc = e;
                        d = this.oj(d);
                        d.id = d.id ? mc(d.id) : 1;
                        d.update = function(g) {
                            return b.Na(c) ? b.zf(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.ni = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Ya(Fc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.ki = function() {
                        var c = Fc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.Ef = function() {
                        return 1
                    };
                    a.prototype.Bc = function() {
                        return []
                    };
                    a.prototype.Oh = function() {
                        var c = this,
                            b = this.Bc(),
                            d = 1;
                        return N(function(e, f) {
                            var g = c.Ea({
                                element: f,
                                type: c.Ef(f)
                            }) || [];
                            ea(g) || (g = [g]);
                            g = N(function(h, k) {
                                var l =
                                    h.values,
                                    m = h.Hf;
                                k && k.chars > bh[k.type] && !G(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= bh[k.type] && c.xh(k.id, k);
                                return {
                                    values: l,
                                    Hf: m
                                }
                            }, {
                                values: [],
                                Hf: A(T("id"), e)
                            }, g).values;
                            return e.concat(A(function(h) {
                                var k;
                                h = y((k = {
                                    index: d,
                                    rg: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                bl = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Ud = !0;
                        d.hf = L(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Qb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" === typeof e.data.text ? e.data.text.length : Qb(this.Na(e)).length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.Ac(e.data, "author"));
                            f = f.concat(this.Ac(e.data.mainEntity, "author"));
                            return f.concat(this.Ac(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.lk && (f += " " + e.data.alternativeHeadline);
                            "" === f &&
                                (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.Ac(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.Na(e);
                            e = Y(Boolean, A(function(h) {
                                if (h = rb(f.l, Qb(h))) {
                                    var k = f.Af(h);
                                    if (k) return N(function(l,
                                        m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(ub(this.hf, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, ea(e)) ? Y(Boolean, A(function(h) {
                                return Ma(h) && h.item && Ma(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.Ac = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ea(b[d]) ? b[d] : [b[d]];
                        b = Y(O, A(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return A(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Na = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.rf(f));
                        !b && e && "string" === typeof e && (b = this.rf(e));
                        b || (b = e = d.parentNode, !ac("head", this.l, d) && e && 0 !== Qb(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.rf = function(b) {
                        try {
                            var d = Gc(this.l, b).hash;
                            if (d) {
                                var e = Fc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.qe = function(b) {
                        return this.Re[b["@type"]] || 1
                    };
                    c.prototype.Ea = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = rb(this.l, Qb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ea(b.data))) return null;
                        var f = this.Af(b.data);
                        if (f) return A(function(h) {
                            if (!G(h["@type"], d.Cb["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.qe(h)
                            };
                            return a.prototype.Ea.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = kc(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), A(function(h) {
                            var k;
                            if (!h || !G(h["@type"], d.Cb["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.qe(h),
                                data: y((k = {}, k.parentItem = g, k), h)
                            };
                            return a.prototype.Ea.call(d, h)
                        }, b)) : G(b.data["@type"], this.Cb["schema.org"]) ? a.prototype.Ea.call(this, y(b, {
                            type: this.qe(b.data)
                        })) : null
                    };
                    c.prototype.Bc = function() {
                        return ub(this.hf, this.root)
                    };
                    c.prototype.Af = function(b) {
                        return ea(b) && b || b && ea(b["@graph"]) &&
                            b["@graph"]
                    };
                    return c
                }(ch),
                dh = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Ud = !0;
                        d.Rj = pa("exec", new RegExp("schema.org\\/(" + L("|", ba(d.Re)) + ")$"));
                        d.Qb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = ab(this.l, e, "identifier");
                            return f ? Ya(f) : (f = ab(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h +=
                                1) {
                                var k = ab(this.l, e, g[h]);
                                if (k) {
                                    f = Ya(k).length;
                                    break
                                }
                            }
                            e = Qb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Ld(this.l, e.element, "about");
                            return A(function(h) {
                                var k = {
                                    name: Ya(h)
                                };
                                if (g = ab(f.l, h, "name")) k.name = Ya(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = Fc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Fc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? A(function(g) {
                                return {
                                    name: Ya(ab(f.l, g, "name")),
                                    position: Ya(ab(f.l, g, "position"))
                                }
                            }, Ld(this.l,
                                e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = ab(this.l, e.element, "dateModified")) ? ik(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = ab(this.l, e.element, "datePublished")) ? ik(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Ld(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Ya(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = ab(this.l, g, "headline");
                            h && (f += Ya(h));
                            (h = ab(this.l, g, "alternativeHeadline")) && (f += " " + Ya(h));
                            "" === f && ((h = ab(this.l, g, "name")) || (h = ab(this.l,
                                g, "itemReviewed")), h && (f += Ya(h)));
                            3 === e.type && (e = ac('[itemtype$="schema.org/Question"]', this.l, g)) && (e = ab(this.l, e, "text")) && (f += Ya(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Ld(this.l, e.element, "author");
                            return A(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = ab(f.l, g, "name")) && (k.name = Ya(h));
                                k.name || (k.name = g.getAttribute("content") || Qb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.Ef = function(b) {
                        b =
                            b.getAttribute("itemtype") || "";
                        return (b = this.Rj(b)) ? this.Re[b[1]] : 1
                    };
                    c.prototype.Ea = function(b) {
                        return b.element && Qb(b.element).length ? a.prototype.Ea.call(this, b) : null
                    };
                    c.prototype.Bc = function() {
                        var b = L(",", A(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.Cb["schema.org"]));
                        return ub(b, this.root)
                    };
                    return c
                }(ch),
                cl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Qb = (e = {}, e.chars = function(g) {
                                g = this.Na(g);
                                return Qb(g).length
                            }, e.authors = function(g) {
                                return this.Id(g.data.author)
                            },
                            e.pageTitle = function(g) {
                                return this.Gc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.Gc(g.data.modified_time)
                            }, e.publicationDate = function(g) {
                                return this.Gc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.Gc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.Id(g.data.section)
                            }, e.topics = function(g) {
                                return this.Id(g.data.tag)
                            }, e);
                        f.Gh = new RegExp("^(og:)?((" + L("|", f.Cb.Xf) + "):)?");
                        return f
                    }
                    Ja(c, a);
                    c.prototype.Id = function(b) {
                        var d;
                        return b ? ea(b) ? A(function(e) {
                            var f;
                            return f = {},
                                f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.Gc = function(b) {
                        return ea(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.Bc = function() {
                        var b = ub('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.ai = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Na(b);
                        e = ub("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) z(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Gh, ""),
                                        l = Ya(h);
                                    f[k] ? ea(f[k]) ?
                                        f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                le(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return G(f.type, this.Cb.Xf) ? y(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Na = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ea = function(b) {
                        return (b = this.ai(b)) ? a.prototype.Ea.call(this, b) : null
                    };
                    return c
                }(ch),
                dl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                et = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                ft = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Mc = !1;
                        this.$ = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Oa = this.Rf = 0;
                        this.fe = this.$f = "";
                        this.ha = [];
                        this.Ge = this.Ta = 0;
                        this.Hb = {
                            Xa: 0,
                            We: 0
                        };
                        this.buffer = [];
                        this.Sg = et;
                        this.flush = function() {
                            g.Ge = W(g.l, g.flush, 2500);
                            var h = g.Md();
                            if (g.buffer.length || h) {
                                var k = Ad(g.buffer);
                                h && k.push(h);
                                g.$f = g.fe;
                                g.qa.Aa(k)(Ra(C(g.l, "p.b.st"), function(l) {
                                    l && g.bc(l)
                                }))
                            }
                        };
                        this.bc = e;
                        this.qa = d;
                        this.ic = E(this.ic, this);
                        this.Md = E(this.Md, this);
                        this.flush = E(this.flush, this);
                        this.l = c;
                        this.da = f;
                        this.Bb = b;
                        this.$d = "pai" + b.id;
                        this.Rb();
                        this.nf = ja(this.l);
                        this.time = ha(this.l);
                        this.Ig();
                        this.Pd = H(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Ge = W(this.l, this.flush, 2500);
                        if (!this.Mc) {
                            this.Dj();
                            var b = this.Pd.o(this.$d, []),
                                d = !b.length;
                            b.push(E(this.Oi, this));
                            this.Pd.Sa(this.$d, b);
                            d && this.ig();
                            var e = function(f, g) {
                                return (f.De || 0) <= (g.De || 0) ? g : f
                            };
                            ja(this.l).D(this.l, ["click"], function(f) {
                                if (c.ha.length) {
                                    f = Qi(f);
                                    var g = R(c.l).hostname,
                                        h;
                                    if (h = f) h = re(f.hostname) === re(g);
                                    h && (f = N(e, c.ha[0], c.ha).id,
                                        g = Ib(c.l), Sc(c.l, c.da.split(":")[0]).C("pai", f + "-" + g))
                                }
                            });
                            this.ic({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Sj();
                        this.Mc = !0;
                        this.flush();
                        ma(this.l, this.Ge)
                    };
                    a.prototype.Of = function(c) {
                        return ac("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.ig = function() {
                        var c = this;
                        C(this.l, "p.ic" + this.Bb.id, function() {
                            if (!c.Mc) {
                                var b = c.Pd.o(c.$d),
                                    d = c.Bb.Oh();
                                z(function(e) {
                                    var f = A(function(g) {
                                        return y({}, g)
                                    }, d);
                                    S(e) && e(f)
                                }, b);
                                c.Ta = W(c.l, E(c.ig, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Oi =
                        function(c) {
                            this.Mc || (this.Tj(c), this.Vj(), this.qh())
                        };
                    a.prototype.ic = function(c) {
                        var b = this;
                        C(this.l, "p.ec." + this.Bb.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, uc(b.l)];
                                G(e, g) && b.Rb()
                            }("resize" === d || f) && b.Ig();
                            d = b.time(aa);
                            var h = Math.min(d - b.Rf, 5E3);
                            b.Oa += Math.round(h);
                            b.Rf = d;
                            if (b.$ && b.scroll && b.Hb) {
                                var k = b.Hb.Xa * b.Hb.We;
                                b.ha = A(function(l) {
                                    var m = y({}, l),
                                        p = b.$[m.id],
                                        q = fd(l.qc);
                                    if (!p || b.Of(m.element) ||
                                        !q) return m;
                                    l = b.l.Math;
                                    p = l.max((b.scroll.y + b.Hb.Xa - p.y) / p.height, 0);
                                    var r = q.height * q.width;
                                    q = b.mh(q);
                                    m.De = q / k;
                                    m.visibility = q / r;
                                    if (.9 <= m.visibility || .1 <= m.De) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.ha);
                                gb(b.l, {
                                    name: "publishers",
                                    da: b.da,
                                    data: {
                                        Oa: b.Oa,
                                        ha: b.ha
                                    }
                                })
                            }
                        })()
                    };
                    a.prototype.mh = function(c) {
                        var b = c.top,
                            d = c.bottom,
                            e = c.left,
                            f = this.Hb,
                            g = f.We;
                        f = f.Xa;
                        var h = this.l.Math;
                        c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                        return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
                    };
                    a.prototype.Tj =
                        function(c) {
                            var b = A(function(d) {
                                return d.id
                            }, this.ha);
                            this.ha = this.ha.concat(Y(function(d) {
                                return !G(d.id, b)
                            }, c))
                        };
                    a.prototype.Ig = function() {
                        var c = pg(this.l) || Ed(this.l);
                        this.Hb = {
                            We: c[0],
                            Xa: c[1]
                        }
                    };
                    a.prototype.Vj = function() {
                        var c = this;
                        C(this.l, "p.um." + this.Bb.id, function() {
                            var b = [];
                            c.Rb();
                            c.$ = N(function(d, e) {
                                var f;
                                if (c.Of(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.qc && (f = fd(e.qc)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.ha);
                            z(function(d) {
                                d = te(c.l)(d, c.ha);
                                c.ha.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Md = function() {
                        var c, b, d = A(v(this.$, n), ba(this.$));
                        return d.length && (this.fe = kb(this.l, d), this.$f !== this.fe) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Oa, b), c) : null
                    };
                    a.prototype.qh = function() {
                        var c =
                            this;
                        if (this.ha.length) {
                            var b = A(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.Sg);
                                d.rg = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, Y(function(d) {
                                return !d.rg
                            }, this.ha));
                            b.length && (this.buffer = this.buffer.concat(b), Ab(this.l, this.da, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.Dj = function() {
                        this.nf.D(this.l, dl, this.ic)
                    };
                    a.prototype.Sj = function() {
                        this.nf.fc(this.l, dl, this.ic)
                    };
                    a.prototype.Rb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") ||
                                0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Rd = {};
            bl && (Rd.json_ld = bl);
            dh && (Rd.schema = dh, Rd.microdata = dh);
            cl && (Rd.opengraph = cl);
            var gt = D("p.p", function(a, c) {
                    function b(l) {
                        var m = y({}, k);
                        m.Y.fa = l;
                        return e(m, c)["catch"](C(a, "s.ww.p"))
                    }
                    if (!Ea("querySelectorAll", a.document.querySelectorAll)) return K.resolve();
                    var d = [new Re(a)];
                    d.unshift(new dt(a));
                    var e = Aa(a, "p", c),
                        f = db(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = Ca();
                    var g = Sc(a, c.id),
                        h = g.o("pai");
                    h && (g.Pb("pai"),
                        d.C("pai", h));
                    var k = {
                        G: {},
                        H: d,
                        Qa: {
                            Vd: !(f instanceof Re)
                        },
                        Y: {}
                    };
                    return qa(c, C(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Rj(c) ? "microdata" : l;
                            var m = Rd[l];
                            if (m && f) {
                                var p = M(c);
                                m = new m(a, p);
                                (new ft(a, m, f, b, p)).start();
                                Ab(a, p, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                ht = function() {
                    function a(c, b) {
                        this.l = c;
                        this.Zh = b
                    }
                    a.prototype.Aa = function(c) {
                        return qf(kc(E(this.Ra, this), c))
                    };
                    a.prototype.Ra = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Zh(this.l, b && b.type, c.type);
                        f && (e = kc(function(g) {
                            return g({
                                l: d.l,
                                sa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Wa = function(c) {
                        return c.length
                    };
                    a.prototype.fd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                el = function() {
                    function a(c, b, d) {
                        this.jf = 0;
                        this.se = 1;
                        this.md = 5E3;
                        this.l = c;
                        this.qa = b;
                        this.bc = d
                    }
                    a.prototype.ed = function() {
                        this.jf = W(this.l, u(E(this.flush, this), E(this.ed, this)), this.md, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.bc(c, b || [], this.se);
                        this.se += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                Wm = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.Tg = 7500;
                        b.md = 3E4;
                        b.ed();
                        return b
                    }
                    Ja(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.qa.Ra(b, d);
                        Na(this.buffer, e);
                        this.qa.Wa(this.buffer) > this.Tg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(el),
                on = /opera mini/i,
                fl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                dn = ["email", "tel"],
                mn = /ym-hide-content/,
                nn = /ym-show-content/,
                jn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                kn = [65, 90],
                ln = [97, 122],
                gn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                en = new RegExp("(" + L("|", fl) + ")", "i"),
                jk = ["password", "passwd", "pswd"],
                fn = new RegExp("(" + L("|", fl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Va = "metrikaId_" + Math.random(),
                pc = {
                    wd: 0
                },
                er = w(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                br = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                it = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        yk: new RegExp("(" + L("|", a) + ")", "i"),
                        Ik: new RegExp("(" + L("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        wk: /ym-record-keys/i,
                        $i: "\u2022",
                        Hk: 88
                    }
                }(),
                ok = fb(v(it.$i, O)),
                id = !0,
                Kg = "",
                Lg = !1,
                Mg = !0,
                Ng = !1,
                bn = ka(function(a, c) {
                    var b = F([a, "efv." + c.event], C);
                    c.N = A(u(O, b), c.N);
                    return c
                }),
                gl = w(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(wf), b.push(ir), b.push(jr));
                    a.document.addEventListener ? c.push(mk) : (b.push(lk), d.push(mk));
                    c = wa([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [B]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [B]
                    }, {
                        event: "click",
                        N: [Ke]
                    }, {
                        event: "dblclick",
                        N: [Ke]
                    }, {
                        event: "mousedown",
                        N: [Ke]
                    }, {
                        event: "mouseup",
                        N: [lr]
                    }, {
                        event: "keydown",
                        N: [mr]
                    }, {
                        event: "keypress",
                        N: [nr]
                    }, {
                        event: "copy",
                        N: [qk]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [Rh]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [wf]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        N: [lk]
                    }, {
                        event: "change",
                        N: [nk]
                    }, {
                        event: "submit",
                        N: [sk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [nk]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [sk]
                    }]);
                    return an(a, c)
                }),
                Zm =
                w(function(a) {
                    return wa(uc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [or]
                    }] : [])
                }),
                jt = ["submit", "beforeunload", "unload"],
                kt = w(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                lt = v(gl, function(a, c, b, d) {
                    return kt(c, a)[b + ":" + d] || []
                }),
                $m = /^\s*function submit\(\)/,
                mt = D("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Dh || !c.Ib)) {
                        var d = H(a),
                            e = !1;
                        b = d.o("hitParam", {});
                        var f = M(c);
                        b[f] && (d = d.o("counters", {}), e = !(!Ye(c.ca) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(B);
                    b = new ht(a,
                        lt);
                    return Vm(a, c, b, gl, jt)
                }),
                eh, hl = (eh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Oe = 0;
                        d.Kb = 0;
                        d.Ne = 0;
                        d.buffer = [];
                        d.md = 2E3;
                        d.ba = ed(b);
                        d.ed();
                        d.Ne = f;
                        return d
                    }
                    Ja(c, a);
                    c.prototype.xf = function(b) {
                        return Y(Boolean, this.ba.O("ag", b))
                    };
                    c.prototype.wf = function(b, d) {
                        var e = this;
                        b(Ra(C(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Bj = function(b, d) {
                        var e = this;
                        ma(this.l, this.jf);
                        var f = Math.ceil(this.qa.Wa(d) / 63E4),
                            g = this.qa.fd(d, f);
                        z(function(h, k) {
                            var l, m = y({}, b,
                                (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.qa.Aa([m], !1);
                            e.wf(l, [m])
                        }, g);
                        this.ed()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.ba.O("se", d);
                        return a.prototype.send.call(this, b, d).then(O, function() {
                            e.ba.O("see", d)
                        })
                    };
                    c.yf = function(b, d, e, f, g) {
                        c.od["" + b + d] || (this.od[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.od[d]
                    };
                    c.prototype.Mi = function() {
                        return this.Ne && this.Oe >= this.Ne
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Mi()) {
                            this.ba.O("p", b);
                            var e = this.qa.Ra(b),
                                f = this.qa.Wa(e);
                            7E5 <
                                f ? this.Bj(b, e) : (e = this.xf(this.buffer.concat([b])), e = N(function(g, h) {
                                    return g + d.qa.Wa(d.qa.Ra(h))
                                }, 0, e), this.Kb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Kb += f)
                        }
                    };
                    c.prototype.D = function(b, d) {
                        this.ba.D([b], d)
                    };
                    c.prototype.na = function(b, d) {
                        this.ba.na([b], d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.xf(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.Oe += this.Kb;
                            this.Kb = 0;
                            var d = this.qa.Aa(b);
                            this.wf(d, b)
                        }
                    };
                    return c
                }(el), eh.od = {}, eh),
                Za = function() {
                    function a(c, b, d) {
                        this.Qi = "wv2.c";
                        this.Wb = [];
                        this.ja = [];
                        this.l = c;
                        this.K = uf(c, this, d, this.Qi);
                        this.F = b;
                        this.ib = this.F.ei();
                        this.start = this.K.J(this.start, "st");
                        this.stop = this.K.J(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Wb = A(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = E(c.K.J(b[1], d[0]), c);
                            return c.ib.D(e || c.l, d, b)
                        }, this.ja)
                    };
                    a.prototype.stop = function() {
                        z(ia, this.Wb)
                    };
                    a.prototype.Z = function(c) {
                        return this.F.ua().Z(c)
                    };
                    return a
                }(),
                Tm = ["checkbox", "radio"],
                Um = /pwd|value|password/i,
                fh = T("location.href"),
                nt = function(a) {
                    function c(b,
                        d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ta = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.ke = d.K.J(d.ke, "o");
                        d.yd = d.K.J(d.yd, "io");
                        d.nd = d.K.J(d.nd, "ao");
                        d.ye = d.K.J(d.ye, "a");
                        d.we = d.K.J(d.we, "at");
                        d.ze = d.K.J(d.ze, "r");
                        d.xe = d.K.J(d.xe, "c");
                        d.ya = new b.MutationObserver(d.ke);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.ya.disconnect()
                    };
                    c.prototype.nd = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.ta.elements.indexOf(d); - 1 === e && (e = this.ta.elements.push(d) - 1, this.ta.attributes[e] = {});
                        this.ta.attributes[e] || (this.ta.attributes[e] = {});
                        e = this.ta.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = ce(this.l, d, b, f, this.F.Ec()).value
                    };
                    c.prototype.yd = function(b) {
                        function d(k) {
                            var l = Mb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                Fd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        z(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.nd(k);
                                    var x = d(q);
                                    x.Fd[l] || (x.Fd[l] = ce(e.l, q, l, p, e.F.Ec()).value);
                                    break;
                                case "childList":
                                    m && z(function(I) {
                                        x = d(I);
                                        x.tf || y(x, {
                                            tf: q,
                                            Th: r ? r : void 0,
                                            Uh: t ? t : void 0
                                        })
                                    }, sa(m));
                                    break;
                                case "characterData":
                                    x = d(q), x.uf || (x.uf = p)
                            }
                        }, b);
                        var h = this.F.ua();
                        z(function(k, l) {
                            h.He(k, g[l])
                        }, f)
                    };
                    c.prototype.ke = function(b) {
                        var d = this;
                        if (fh(this.l)) {
                            var e = this.F.L();
                            this.yd(b);
                            z(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h &&
                                            h.length && d.ze(sa(h), e);
                                        g && g.length && d.ye(sa(g), e);
                                        break;
                                    case "characterData":
                                        d.xe(k, e)
                                }
                            }, b);
                            this.we(e)
                        } else this.stop()
                    };
                    c.prototype.we = function(b) {
                        var d = this;
                        z(function(e, f) {
                            var g = d.Dc();
                            d.F.X("mutation", {
                                index: g,
                                attributes: d.ta.attributes[f],
                                target: d.Z(e)
                            }, "ac", b)
                        }, this.ta.elements);
                        this.ta.elements = [];
                        this.ta.attributes = []
                    };
                    c.prototype.ye = function(b, d) {
                        var e = this,
                            f = this.Dc();
                        this.F.ua().Ic({
                            ma: b,
                            dd: function(g) {
                                g = A(function(h) {
                                    h = y({}, h);
                                    delete h.node;
                                    return h
                                }, g);
                                e.F.X("mutation", {
                                        index: f,
                                        ma: g
                                    },
                                    "ad", d)
                            }
                        })
                    };
                    c.prototype.ze = function(b, d) {
                        var e = this,
                            f = this.Dc(),
                            g = this.F.ua(),
                            h = A(function(k) {
                                var l = g.removeNode(k);
                                Gi(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.F.X("mutation", {
                            index: f,
                            ma: h
                        }, "re", d)
                    };
                    c.prototype.xe = function(b, d) {
                        var e = this.Dc();
                        this.F.X("mutation", {
                            value: b.textContent,
                            target: this.Z(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.Dc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Za),
                ot = function() {
                    function a(c, b) {
                        var d = this;
                        this.zc = [];
                        this.jb = [];
                        this.ie = 1;
                        this.Ta = 0;
                        this.ub = {};
                        this.Kc = {};
                        this.Rd = function(f) {
                            return d.jb.length ? G(f, d.jb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Z(f),
                                h = Ia(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Rd(h) && d.ba.O(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.ob = function(f) {
                            var g = Ia(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                h || (h = d.ie, f.__ym_indexer = h, d.ie += 1, g = "NA:" + g.toLowerCase(), d.Rd(g) && d.ba.O(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }));
                                return h
                            }
                            return null
                        };
                        this.l = c;
                        var e = uf(c, this, "i");
                        this.ba = ed(c);
                        this.options = b;
                        this.start = e.J(this.start, "st");
                        this.stop = e.J(this.stop, "sp");
                        this.Z =
                            e.J(this.Z, "i");
                        this.He = e.J(this.He, "o");
                        this.Ic = e.J(this.Ic, "a");
                        this.removeNode = e.J(this.removeNode, "r");
                        this.ga = e.J(this.ga, "s")
                    }
                    a.prototype.He = function(c, b) {
                        var d = this.ob(c);
                        Ta(d) || (this.Kc[d] && this.Z(c), this.Kc[d] = b)
                    };
                    a.prototype.D = function(c, b, d) {
                        c = "" + b + c;
                        this.jb.push(c);
                        this.Rd(c) || this.jb.push(c);
                        this.ba.D([c], d)
                    };
                    a.prototype.na = function(c, b, d) {
                        var e = "" + b + c;
                        this.jb = Y(function(f) {
                            return f !== e
                        }, this.jb);
                        this.ba.na([e], d)
                    };
                    a.prototype.start = function() {
                        this.Ta = W(this.l, u(E(this.ga, this, !1), this.start),
                            50, "i.s")
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ma(this.l, this.Ta);
                        this.zc = []
                    };
                    a.prototype.Ic = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                dd: c.dd,
                                result: [],
                                Jc: 0,
                                ma: d
                            };
                        this.zc.push(f);
                        z(function(g) {
                            Gi(b.l, g, function(h) {
                                var k = b.ob(h);
                                Ta(k) || (d.push(h), b.ub[k] && b.Z(h), b.ub[k] = {
                                    node: h,
                                    event: f,
                                    Pj: e
                                }, e += 1)
                            })
                        }, c.ma)
                    };
                    a.prototype.Z = function(c) {
                        if (c === this.l) return 0;
                        var b = this.ob(c),
                            d = this.ub[b],
                            e = this.Xh(b),
                            f = e.tf,
                            g = e.Fd,
                            h = e.uf,
                            k = e.Th,
                            l = e.Uh;
                        if (d) {
                            e = d.event;
                            d = d.Pj;
                            var m = this.l.document.documentElement === c;
                            k =
                                k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ob(k) : null;
                            p = !m && p ? this.ob(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.ob(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ia(c));
                            if (U(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    ve: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Bf(c)) {
                                    if (h = Qm(c, h), g.attributes = {}, g.content = h)
                                        if (c = gd(m, c)) g.content = "" !== h.trim() ? hn(m, h) : h, g.hidden = c
                                } else h = Rm(m, c, k, q, r), m = h.rb,
                                    g.attributes = h.hh, m && (g.hidden = m), c.namespaceURI && nc(c.namespaceURI, "svg") && (g.Tf = c.namespaceURI);
                                c = g
                            }
                            if (U(c)) return;
                            delete this.ub[b];
                            e.result[d] = c;
                            e.Jc += 1;
                            e.ma.length === e.Jc && e.dd(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.ga(!0)
                    };
                    a.prototype.ga = function(c) {
                        var b = this;
                        if (fh(this.l)) {
                            var d = ba(this.ub);
                            d = A(function(e) {
                                return b.ub[e].node
                            }, d);
                            d = hc(d, this.Z);
                            c = c ? Lj(B) : Jj(this.l, 20);
                            d(c);
                            this.zc = Y(function(e) {
                                return e.Jc !== e.result.length
                            }, this.zc)
                        }
                    };
                    a.prototype.Xh = function(c) {
                        if (Ta(c)) return {};
                        var b = this.Kc[c];
                        return b ? (delete this.Kc[c], b) : {}
                    };
                    return a
                }(),
                pt = ["input", "change", "keyup", "paste", "cut"],
                qt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.Bd = !1;
                        b.Tc = b.K.J(b.Tc, "ii");
                        b.Uc = b.K.J(b.Uc, "ir");
                        b.Zc = b.K.J(b.Zc, "ri");
                        b.kd = b.K.J(b.kd, "ur");
                        b.Qd = b.K.J(b.Qd, "ce");
                        b.Hc = b.K.J(b.Hc, "vc");
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.F.ua();
                        this.Bd = this.rh();
                        z(function(e) {
                            e = e.toLowerCase();
                            d.D(e, "NA:", E(b.Tc, b));
                            d.D(e, "NR:", E(b.Uc, b))
                        }, Af);
                        this.Wb = [this.ib.D(this.l.document,
                            pt, E(this.Qd, this)), function() {
                            z(function(e) {
                                e = e.toLowerCase();
                                d.na(e, "NA:", b.Tc);
                                d.na(e, "NR:", b.Uc)
                            }, Af);
                            z(b.kd, ba(b.inputs))
                        }]
                    };
                    c.prototype.kd = function(b) {
                        if (this.Bd) {
                            var d = this.inputs[b];
                            d && (b = d.jj, d = d.element, b && this.l.Object.defineProperty(d, this.Fc(d), b))
                        }
                    };
                    c.prototype.Uc = function(b) {
                        b && this.kd(b.data.id)
                    };
                    c.prototype.Tc = function(b) {
                        b && (b = b.data, this.Zc(b.node, b.id))
                    };
                    c.prototype.Fc = function(b) {
                        return Be(b) ? "checked" : "value"
                    };
                    c.prototype.Qd = function(b) {
                        if (b = b.target) {
                            var d = this.Fc(b);
                            this.Hc(b[d],
                                b)
                        }
                    };
                    c.prototype.Hc = function(b, d) {
                        var e = this.Z(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Zc(f, e), !f)) return;
                        e = f.th;
                        var g = f.value,
                            h = this.Fc(d);
                        b && !G(typeof b, ["string", "boolean", "number"]) || b === g || (g = ce(this.l, d, h, b, this.F.Ec()).value, e ? this.F.X("event", {
                            target: this.Z(d),
                            checked: !!b
                        }, "change") : (e = de(d), h = yf(d), this.F.X("event", {
                            value: g,
                            hidden: h && !e,
                            target: this.Z(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Zc = function(b, d) {
                        var e = this;
                        if (!sf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Be(b),
                            g = this.Fc(b),
                            h = {
                                element: b,
                                th: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.Bd && Hb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = y({}, k, l);
                            if (Ea("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, y({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.Hc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.jj = m
                            }
                        });
                        return h
                    };
                    c.prototype.rh = function() {
                        var b = !0,
                            d = $a(this.l)("input");
                        try {
                            d = $a(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = y({}, e, f);
                            this.l.Object.defineProperty(d, "value", y({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(Za),
                rt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.bb = {
                            width: 0,
                            height: 0,
                            xb: 0,
                            yb: 0,
                            orientation: 0
                        };
                        b.ja.push([
                            ["resize"], b.hj
                        ]);
                        b.ja.push([
                            ["orientationchange"], b.fj
                        ]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.lg()
                    };
                    c.prototype.hj = function() {
                        var b = this.Od();
                        this.zi(b) && (this.bb = b, this.mg(b))
                    };
                    c.prototype.fj = function() {
                        var b = this.Od();
                        this.bb.orientation !== b.orientation && (this.bb = b, this.zj(b))
                    };
                    c.prototype.Pf = function(b) {
                        return !b.height ||
                            !b.width || !b.yb || !b.xb
                    };
                    c.prototype.zi = function(b) {
                        return b.height !== this.bb.height || b.width !== this.bb.width
                    };
                    c.prototype.Od = function() {
                        var b = this.F.mb(),
                            d = Ed(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Nd();
                        return {
                            width: e,
                            height: d,
                            yb: b ? b.scrollWidth : 0,
                            xb: b ? b.scrollHeight : 0,
                            orientation: this.F.mb().hi()
                        }
                    };
                    c.prototype.zj = function(b) {
                        var d;
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.mg = function(b, d) {
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            yb: b.yb,
                            xb: b.xb
                        }, "resize", d)
                    };
                    c.prototype.lg = function() {
                        var b = this.Od();
                        this.Pf(b) ? W(this.l, E(this.lg, this), 300) : (this.Pf(this.bb) && (this.bb = b), this.mg(b, 0))
                    };
                    return c
                }(Za),
                Se = function() {
                    function a(c) {
                        this.index = 0;
                        this.Eb = {};
                        this.l = c
                    }
                    a.prototype.uc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ha(this.l),
                            f = this.index;
                        this.index += 1;
                        this.Eb[f] = {
                            Ta: 0,
                            ac: !1,
                            Rh: c,
                            Lb: [],
                            ae: e(aa)
                        };
                        var g = this;
                        return function() {
                            var h = Ba(arguments),
                                k = d.kb && !g.Eb[f].ac,
                                l = g.Eb[f];
                            ma(g.l, l.Ta);
                            l.Lb = h;
                            l.ac = !0;
                            var m = e(aa);
                            if (k || m - l.ae >= b) c.apply(void 0, h), l.ae = m;
                            l.Ta = W(g.l, function() {
                                k || (c.apply(void 0, h), l.ae = e(aa));
                                l.ac = !1;
                                l.Lb = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        z(function(b) {
                            var d = c.Eb[b],
                                e = d.Ta,
                                f = d.Rh,
                                g = d.Lb;
                            d.ac && (c.Eb[b].ac = !1, f.apply(void 0, g), ma(c.l, e))
                        }, ba(this.Eb))
                    };
                    return a
                }(),
                st = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Bg = [];
                        d.Xe = {
                            x: 0,
                            y: 0
                        };
                        d.Ba = new Se(b);
                        d.Xc = d.K.J(d.Xc, "o");
                        d.ja.push([
                            ["scroll"], d.ij
                        ]);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.X("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.ij = function(b) {
                        if (this.F.mb().Jf()) this.Xc(b);
                        else {
                            var d = b.target,
                                e = Y(function(f) {
                                    return f[0] === d
                                }, this.Bg).pop();
                            e ? e = e[1] : (e = this.Ba.uc(E(this.Xc, this), 100, {
                                kb: !0
                            }), this.Bg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Xc = function(b) {
                        var d = this.F.mb().Nd();
                        b = b.target;
                        var e = this.Rb(b);
                        d = La(la(b), [d, this.l, this.l.document]);
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Xe.x === f && this.Xe.y === e) return;
                            this.Xe = {
                                x: f,
                                y: e
                            }
                        }
                        this.F.X("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Z(b)
                        }, "scroll")
                    };
                    c.prototype.Rb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.F.mb().Nd(), b) ? G(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop ||
                                0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Za),
                tt = ["mousemove", "mousedown", "mouseup", "click"],
                ut = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ja.push([tt, d.ej]);
                        d.Ba = new Se(b);
                        d.Rc = d.K.J(d.Rc, "n");
                        d.Hj = d.K.J(d.Ba.uc(E(d.Rc, d), 100), "t");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.ej = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Hj(b) : this.Rc(b)
                    };
                    c.prototype.Rc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 ===
                            e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.F.X("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Z(b)
                        }, d)
                    };
                    return c
                }(Za),
                vt = ["focus", "blur"],
                wt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ja.push([vt, b.Sh]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.Sh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.F.X("event", {
                            target: this.Z(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(Za),
                xt = w(function(a) {
                    var c = Ka(a.getSelection, "getSelection");
                    return c ? E(c, a) :
                        B
                }),
                yt = u(xt, ia),
                zt = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                At = /text|search|password|tel|url/,
                Bt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Sd = !1;
                        b.ja.push([zt, b.wi]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.wi = function(b) {
                        var d = this.F,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.li(b) : this.ji()) && e.start !== e.end ? (this.Sd = !0, d.X("event", e, "selection")) : this.Sd && (this.Sd = !1, d.X("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.ji = function() {
                        var b =
                            yt(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Z(b.startContainer),
                                e = this.Z(b.endContainer);
                            if (!U(d) && !U(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                wg: d,
                                kf: e
                            }
                        }
                    };
                    c.prototype.li = function(b) {
                        if (At.test(b.type || "")) {
                            var d = this.Z(b);
                            if (!U(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Za),
                Ct = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Dt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        U(b.l.document.hidden) ?
                            U(b.l.document.msHidden) ? U(b.l.document.webkitHidden) || (b.visibility = {
                                hidden: "webkitHidden",
                                event: "webkitvisibilitychange"
                            }) : b.visibility = {
                                hidden: "msHidden",
                                event: "msvisibilitychange"
                            } : b.visibility = {
                                hidden: "hidden",
                                event: "visibilitychange"
                            };
                        b.handleEvent = b.K.J(b.handleEvent, "e");
                        return b
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        this.Wb = [this.ib.D(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], E(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.F.X("event", {}, Ct[this.visibility ?
                            this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Za),
                Et = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Ft = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.hd = {};
                        d.scrolling = !1;
                        d.jg = 0;
                        d.ja.push([
                            ["scroll"], d.xj, d.l.document
                        ]);
                        d.ja.push([Et, d.Lj, d.l.document]);
                        d.Ba = new Se(b);
                        d.Vb = d.K.J(d.Vb, "nh");
                        d.Ij = d.K.J(d.Ba.uc(d.Vb, d.F.mb().Jf() ? 0 : 50, {
                            kb: !0
                        }), "th");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.xj = function() {
                        var b = this;
                        this.scrolling = !0;
                        ma(this.l, this.jg);
                        this.jg = W(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Lj = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && z(function(f) {
                            var g = d.oi(f);
                            f.__ym_touch_id = g;
                            e && delete d.hd[f.identifier]
                        }, sa(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Vb(b) : this.Ij(b, this.F.L()) : this.Vb(b)
                    };
                    c.prototype.oi = function(b) {
                        this.hd[b.identifier] || (this.hd[b.identifier] = Kh());
                        return this.hd[b.identifier]
                    };
                    c.prototype.Vb = function(b, d) {
                        void 0 ===
                            d && (d = this.F.L());
                        var e = b.type,
                            f = A(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, sa(b.changedTouches));
                        0 < f.length && this.F.X("event", {
                            touches: f,
                            target: this.Z(b.target)
                        }, e, d)
                    };
                    return c
                }(Za),
                Gt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ja.push([
                            ["load"], b.dj, b.l.document
                        ]);
                        return b
                    }
                    Ja(c, a);
                    c.prototype.dj = function(b) {
                        b = b.target;
                        "IMG" === Ia(b) && b.getAttribute("srcset") && this.F.X("event", {
                            target: this.Z(b),
                            value: b.currentSrc
                        }, "srcset")
                    };
                    return c
                }(Za),
                Ht = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Pg = 1;
                        d.Ba = new Se(b);
                        d.lc = d.K.J(d.lc, "z");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        if (this.Ff()) {
                            a.prototype.start.call(this);
                            this.lc();
                            var b = this.ib.D(n(this.l, "visualViewport"), ["resize"], this.Ba.uc(this.lc, 10));
                            this.Wb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Ba.flush()
                    };
                    c.prototype.lc = function() {
                        var b = this.Ff();
                        b && b !== this.Pg && (this.Pg = b, this.Aj(b))
                    };
                    c.prototype.Ff = function() {
                        var b = pg(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.Aj = function(b) {
                        var d = Sf(this.l);
                        this.F.X("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(Za),
                Sd, Te = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                il = {
                    "super": 1,
                    qk: 2,
                    alt: 3,
                    shift: 4,
                    Rk: 5,
                    "delete": 6,
                    mk: 6
                },
                It = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                jl = (Sd = {}, Sd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Sd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Sd.Ui = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Sd),
                Jt = /flash/,
                Kt = /ym-disable-keys/,
                Lt = /^&#/,
                Mt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.pb = {};
                        d.Pa = 0;
                        d.Ga = [];
                        d.zg = [];
                        d.xc = 0;
                        d.eg = 0;
                        d.ja.push([
                            ["keydown"], d.ti
                        ]);
                        d.ja.push([
                            ["keyup"], d.ui
                        ]);
                        d.Zg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                        d.Nc = d.K.J(d.Nc, "v");
                        d.Dd = d.K.J(d.Dd, "ec");
                        d.cd = d.K.J(d.cd, "sk");
                        d.Ld = d.K.J(d.Ld, "gk");
                        d.Ie =
                            d.K.J(d.Ie, "sc");
                        d.kc = d.K.J(d.kc, "cc");
                        d.reset = d.K.J(d.reset, "r");
                        d.ad = d.K.J(d.ad, "rs");
                        return d
                    }
                    Ja(c, a);
                    c.prototype.ti = function(b) {
                        if (this.Nc(b) && !this.Li(b)) {
                            var d = b.keyCode;
                            b.repeat || this.pb[d] || (this.pb[b.keyCode] = !0, Te[b.keyCode] && !this.Pa ? (this.Pa += 1, this.Ie(b), this.reset(300)) : this.Pa ? (this.nh(), this.Be(b), this.Dd()) : (this.reset(), this.Be(b)))
                        }
                    };
                    c.prototype.ui = function(b) {
                        if (this.Nc(b)) {
                            var d = b.keyCode,
                                e = Te[b.keyCode];
                            this.pb[b.keyCode] && (this.pb[d] = !1);
                            e && this.Pa && (this.Pa = 0, this.pb = {});
                            1 ===
                                this.Ga.length && (b = this.Ga[0], G(b.keyCode, It) && (this.cd([b], !0), this.reset()));
                            this.Ga = Y(u(la(d), Rb), this.Ga);
                            ma(this.l, this.xc)
                        }
                    };
                    c.prototype.Nc = function(b) {
                        var d = this.l.document.activeElement;
                        b = b.target;
                        return !La(Boolean, [d && "OBJECT" === d.nodeName && Jt.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Kt.test(b.className)])
                    };
                    c.prototype.Dd = function() {
                        this.zg = this.Ga.slice(0);
                        ma(this.l, this.xc);
                        this.xc = W(this.l, v(this.zg, E(this.cd, this)), 0, "e.c")
                    };
                    c.prototype.cd =
                        function(b, d) {
                            void 0 === d && (d = !1);
                            if (1 < b.length || d) {
                                var e = this.Ld(b);
                                this.F.X("event", {
                                    Oc: e
                                }, "keystroke")
                            }
                        };
                    c.prototype.Ld = function(b) {
                        var d = this;
                        b = A(function(e) {
                            e = e.keyCode;
                            var f = Te[e],
                                g = d.gi(e);
                            return {
                                id: e,
                                key: g,
                                Mf: !!f && Lt.test(g),
                                Pc: f
                            }
                        }, b);
                        return Ag(function(e, f) {
                            return (il[e.Pc] || 100) - (il[f.Pc] || 100)
                        }, b)
                    };
                    c.prototype.gi = function(b) {
                        return jl[this.Zg][b] || jl.Ui[b] || String.fromCharCode(b)
                    };
                    c.prototype.Be = function(b) {
                        G(b, this.Ga) || this.Ga.push(b)
                    };
                    c.prototype.Ie = function(b) {
                        this.Be(b);
                        this.kc()
                    };
                    c.prototype.kc =
                        function() {
                            this.Pa ? W(this.l, this.kc, 100) : this.Ga = []
                        };
                    c.prototype.nh = function() {
                        ma(this.l, this.eg)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.eg = W(this.l, E(this.ad, this), b) : this.ad()
                    };
                    c.prototype.ad = function() {
                        this.Pa = 0;
                        this.Ga = [];
                        this.pb = {};
                        ma(this.l, this.xc)
                    };
                    c.prototype.Li = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Te[b.keyCode] : !1
                    };
                    return c
                }(Za),
                Pm = ["sr", "sd", "\u043d"],
                Nt = /allow-same-origin/,
                Ot = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.dc = [];
                        d.Hd = {};
                        d.le = d.K.J(d.le, "fi");
                        d.me = d.K.J(d.me, "sd");
                        d.ne = d.K.J(d.ne, "src");
                        d.ya = new b.MutationObserver(d.ne);
                        return d
                    }
                    Ja(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.Ec().nc && this.F.ua().D("iframe", "NA:", E(this.le, this));
                        this.F.Bf().Jd().D(["sdr"], E(this.me, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        z(function(b) {
                            b.F.stop()
                        }, this.dc)
                    };
                    c.prototype.ne = function(b) {
                        var d = b.pop().target;
                        if (b = db(function(f) {
                                return f.If === d
                            }, this.dc)) {
                            this.dc = Y(function(f) {
                                return f.If !==
                                    d
                            }, this.dc);
                            var e = b.F.Kd();
                            try {
                                b.F.stop()
                            } catch (f) {}
                            this.tc(d, e)
                        }
                    };
                    c.prototype.le = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.tc(d, b.data.id)
                        }
                    };
                    c.prototype.tc = function(b, d) {
                        var e = this;
                        this.Hi(b) && $b(this.l, b)(Ra(B, function() {
                            var f = e.F.tc(b.contentWindow, d);
                            e.dc.push({
                                F: f,
                                If: b
                            })
                        }))
                    };
                    c.prototype.me = function(b) {
                        var d = this,
                            e = b.M;
                        b = b.data;
                        this.Hd[e] || (this.Hd[e] = {
                            data: []
                        });
                        var f = this.Hd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.Ad) && z(function(g) {
                            "page" ===
                            g.type && (f.Ad = g.data.Ia - d.F.Cf())
                        }, f.data);
                        this.l.isNaN(f.Ad) || (this.F.ga(A(function(g) {
                            g.L += f.Ad;
                            g.L = d.l.Math.max(0, g.L);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Hi = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(Nt) || d && "about:blank" !== d && (d = Gc(this.l, d).host) && R(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(Za),
                Pt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Ee = b.K.J(b.Ee, "ps");
                        return b
                    }
                    Ja(c,
                        a);
                    c.prototype.start = function() {
                        this.F.ua().Ic({
                            ma: [this.l.document.documentElement],
                            dd: this.Ee
                        })
                    };
                    c.prototype.Ee = function(b) {
                        var d = this.F.ii(),
                            e = d.Yh(),
                            f = R(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Ed(this.l),
                            l = k[0];
                        k = k[1];
                        this.F.X("page", {
                            content: A(function(m) {
                                m = y({}, m);
                                delete m.node;
                                return m
                            }, b),
                            ef: e || "",
                            Gf: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.$h() || "",
                            bf: this.l.location.href,
                            Hg: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            Ia: this.F.Cf(),
                            gd: d.mi()
                        }, "page", 0)
                    };
                    return c
                }(Za),
                Qt = ["addRule", "removeRule", "insertRule", "deleteRule"],
                gh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.eb = {};
                            b.ec = {};
                            b.cf = 0;
                            b.Vc = b.K.J(b.Vc, "a");
                            b.Db = b.K.J(b.Db, "sr");
                            b.Wc = b.K.J(b.Wc, "r");
                            b.ga = b.K.J(b.ga, "d");
                            return b
                        }
                        Ja(c, a);
                        c.prototype.start = function() {
                            var b = this.F.ua();
                            b.D("style", "NA:", this.Vc);
                            b.D("style", "NR:", this.Wc);
                            this.ga()
                        };
                        c.prototype.stop = function() {
                            var b =
                                this;
                            a.prototype.stop.call(this);
                            var d = this.F.ua();
                            d.na("style", "NA:", this.Vc);
                            d.na("style", "NR:", this.Wc);
                            this.ga();
                            ma(this.l, this.cf);
                            z(function(e) {
                                b.eb[e].sheet && b.hg(b.eb[e].sheet)
                            }, ba(this.eb));
                            this.eb = {}
                        };
                        c.prototype.ga = function() {
                            var b = this;
                            z(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.L;
                                        delete l.L;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && z(function(p) {
                                        b.F.X("event", {
                                                target: Ga(e),
                                                Ma: p
                                            }, "stylechange",
                                            g)
                                    }, h);
                                    delete b.ec[e]
                                }
                            }, ya(this.ec));
                            this.cf = W(this.l, this.ga, 100)
                        };
                        c.prototype.Db = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.ec[b] || (this.ec[b] = []);
                            this.ec[b].push({
                                oe: d,
                                style: f,
                                index: g,
                                L: e
                            })
                        };
                        c.prototype.kj = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            S(f) && (b.addRule = function(l, m, p) {
                                e.Db(d, "a", e.F.L(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            S(g) && (b.removeRule = function(l) {
                                e.Db(d, "r", e.F.L(), "", l);
                                return g.call(b, l)
                            });
                            S(h) && (b.insertRule =
                                function(l, m) {
                                    e.Db(d, "a", e.F.L(), l, m);
                                    return h.call(b, l, m)
                                });
                            S(k) && (b.deleteRule = function(l) {
                                e.Db(d, "r", e.F.L(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.hg = function(b) {
                            var d = this;
                            z(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                S(f) && (b[e] = E(f, b))
                            }, Qt)
                        };
                        c.prototype.Kh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Vc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Kh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h <
                                        f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        oe: "a"
                                    });
                                    this.F.X("event", {
                                        Ma: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.kj(e, b);
                                this.eb[b] = d
                            }
                        };
                        c.prototype.Wc = function(b) {
                            b = b.data.id;
                            var d = this.eb[b];
                            d && (delete this.eb[b], d.sheet && this.hg(d.sheet))
                        };
                        return c
                    }(Za), "ss"],
                    [qt, "in"],
                    [nt, "mu"],
                    [rt, "r"],
                    [st, "sc"],
                    [ut, "mo"],
                    [wt, "f"],
                    [Bt, "se"],
                    [Dt, "wf"],
                    [Ft, "t"],
                    [Gt, "src"],
                    [Ht, "z"],
                    [Mt, "ks"]
                ];
            gh.push([Ot, "if"]);
            gh.push([Pt, "pa"]);
            var Rt = w(function(a) {
                    var c = a.document;
                    return {
                        Nd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        hi: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = db(v(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Ek: v(a, cb),
                        Jf: v(a, md),
                        Dk: v(a, Fe)
                    }
                }),
                St = function() {
                    function a(c, b) {
                        var d = this;
                        this.Tb = 0;
                        this.zd = [];
                        this.Sb = null;
                        this.wa = this.hc = this.xg = !1;
                        this.Ia = 0;
                        this.ii = function() {
                            return d.page
                        };
                        this.Kd = function() {
                            return d.Tb
                        };
                        this.Cf = function() {
                            return d.Ia
                        };
                        this.ei = function() {
                            return d.ib
                        };
                        this.Bf = function() {
                            return d.Sb
                        };
                        this.ua = function() {
                            return d.Td
                        };
                        this.L = function() {
                            return d.Me ? d.l.Math.max(d.Me(aa) - d.Ia, 0) : 0
                        };
                        this.Ec = function() {
                            return d.options
                        };
                        this.mb = function() {
                            return d.jh
                        };
                        this.X = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            f = d.bi(f, g, h, k);
                            d.ga(f)
                        };
                        this.bi = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            return {
                                type: f,
                                data: g,
                                L: k,
                                M: d.Tb,
                                event: h
                            }
                        };
                        this.ga = function(f) {
                            f = ea(f) ? f : [f];
                            d.xg && !d.hc ? d.wa ? (f = A(function(g) {
                                    return g.M ? g : y(g, {
                                        M: d.Tb
                                    })
                                }, f), d.Bf().ng(f)) :
                                (z(function(g) {
                                    gb(d.l, {
                                        name: "webvisorData",
                                        data: g
                                    })
                                }, f), f = A(Lm, f), d.bc(f)) : d.zd = d.zd.concat(f)
                        };
                        this.l = c;
                        var e = uf(c, this, "R");
                        this.Je = e.J(this.Je, "s");
                        this.ga = e.J(this.ga, "sd");
                        e = H(c);
                        e.o("wv2e") && We();
                        e.C("wv2e", !0);
                        this.options = b;
                        this.ib = ja(c);
                        this.Td = new ot(this.l, b);
                        this.jh = Rt(c);
                        this.ff = A(function(f) {
                            return new f[0](c, d, f[1])
                        }, gh);
                        this.Fi();
                        this.page = Nm(this.l);
                        this.Je()
                    }
                    a.prototype.start = function(c) {
                        this.xg = !0;
                        this.bc = c;
                        this.kg()
                    };
                    a.prototype.stop = function() {
                        fh(this.l) && (z(function(c) {
                                return c.stop()
                            },
                            this.ff), this.Td.stop(), this.Sb && this.Sb.stop(), this.wa || this.X("event", {}, "eof"))
                    };
                    a.prototype.tc = function(c, b) {
                        var d = new a(c, y({}, this.options, {
                            M: b
                        }));
                        d.start(B);
                        return d
                    };
                    a.prototype.Fi = function() {
                        var c = this;
                        this.wa = !!this.options.M;
                        this.Tb = this.options.M || 0;
                        this.hc = !this.wa;
                        var b = this.options.Gg || [];
                        b.push(R(this.l).host);
                        this.Sb = Om(this.l, this, b);
                        b = this.Sb.Jd();
                        cb(this.l) ? this.hc && b.D(["i"], function(d) {
                            c.wa = d.wa;
                            c.hc = !1;
                            d.M && (c.Tb = d.M);
                            c.kg()
                        }) : this.hc = this.wa = !1
                    };
                    a.prototype.kg = function() {
                        var c =
                            Ad(this.zd);
                        this.ga(c)
                    };
                    a.prototype.Je = function() {
                        this.Me = ag(this.l);
                        this.Ia = this.Me(aa);
                        z(function(c) {
                            c.start()
                        }, this.ff);
                        this.Td.start()
                    };
                    return a
                }(),
                bd = u(ba, Lc),
                da, Tt = (da = {}, da.mousemove = 0, da.mouseup = 1, da.mousedown = 2, da.click = 3, da.scroll = 4, da.windowblur = 5, da.windowfocus = 6, da.focus = 7, da.blur = 8, da.eof = 9, da.selection = 10, da.change = 11, da.input = 12, da.touchmove = 13, da.touchstart = 14, da.touchend = 15, da.touchcancel = 16, da.touchforcechange = 17, da.canvasMethod = 18, da.canvasProperty = 19, da.zoom = 20, da.resize = 21, da.mediaMethod =
                    22, da.mediaProperty = 23, da.keystroke = 24, da.deviceRotation = 25, da.fatalError = 26, da.hashchange = 27, da.stylechange = 28, da),
                hh = ka(function(a, c) {
                    var b;
                    return b = {}, b[bd(a)] = c, b
                }),
                Ut = function() {
                    function a(c) {
                        var b;
                        this.isSync = !1;
                        this.Ob = [];
                        this.pf = [];
                        this.l = c;
                        this.Ub = (b = {}, b.event = E(this.Hh, this), b.page = hh({
                            page: 1
                        }), b.mutation = hh({
                            Vi: 1
                        }), b.activity = hh({
                            dh: 1
                        }), b);
                        this.pf = [
                            [
                                ["scroll"], {
                                    wj: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    yj: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    ph: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Pi: 1
                                }, {
                                    Oc: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    ck: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    sj: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    $j: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Ti: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    Ch: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    Mh: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                                    Kj: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    Ai: 1
                                }
                            ],
                            [
                                ["stylechange"], {
                                    Cj: 1
                                }, {
                                    Ma: 1
                                }, {
                                    Ma: 1
                                }
                            ]
                        ]
                    }
                    a.prototype.Hh = function(c) {
                        var b, d, e = c.type,
                            f = db(u(Lc, v(e, G)), this.pf);
                        f || Wa(gc("vem." + e));
                        "eof" === e && (this.isSync = !0);
                        var g = f[1],
                            h = f[2];
                        f = f[3];
                        var k = c.$;
                        return {
                            event: (b = {
                                type: Tt[e],
                                target: c.target,
                                M: c.M
                            }, b[bd(g)] = h ? (d = {}, d[bd(h)] = f ? k[bd(f)] : k, d) : k, b)
                        }
                    };
                    a.prototype.Aa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = hc(c, function(h) {
                                var k = !U(h.partNum);
                                return {
                                    data: k ? void 0 : d.Ub[h.type](h.data),
                                    uh: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    L: h.L
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = ic(this.l, e, f);
                        var g = [e];
                        this.Ob.push(e);
                        return e(Ne(function(h) {
                            h = he(d.l, Yh, {
                                buffer: h
                            });
                            h = ic(d.l, h, f, De);
                            g.push(h);
                            d.Ob.push(h);
                            return h
                        }))(Ne(function(h) {
                            h = Ef(d.l, h.slice(-4));
                            h = ic(d.l, h,
                                f, De);
                            g.push(h);
                            d.Ob.push(h);
                            return h
                        }))(Rg(function(h) {
                            h = h[h.length - 1];
                            z(function(k) {
                                k = te(d.l)(k, d.Ob);
                                d.Ob.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.Ra = function(c) {
                        return he(this.l, Hf, this.Ub[c.type](c.data))(Ee(B))
                    };
                    a.prototype.Wa = function(c) {
                        return c[0]
                    };
                    a.prototype.fd = function(c, b) {
                        for (var d = Ef(this.l, c)(Ee(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.prototype.isEnabled = function() {
                        return Xh(this.l)
                    };
                    return a
                }(),
                Vt = function() {
                    return function(a, c, b, d) {
                        var e =
                            this;
                        this.pd = this.Yb = !1;
                        this.ab = [];
                        this.Sf = [];
                        this.lf = [];
                        this.send = function(f, g, h, k) {
                            f = e.sender(f, e.sc, g);
                            h && k && f.then(h, k);
                            return f
                        };
                        this.Le = function(f, g, h, k) {
                            return new K(function(l, m) {
                                f.push([g, h, l, m, k])
                            })
                        };
                        this.xi = function() {
                            e.ab = Ag(function(h, k) {
                                return h[4].partNum - k[4].partNum
                            }, e.ab);
                            var f = N(function(h, k, l) {
                                    k = k[4];
                                    return h && l + 1 === k.partNum
                                }, !0, e.ab),
                                g = !!e.ab[e.ab.length - 1][4].end;
                            return f && g
                        };
                        this.Ed = function(f) {
                            nh(e.l, f.slice(), function(g) {
                                e.send(g[0], g[1], g[2], g[3])
                            }, 20, "s.w2.sf.fes");
                            Ad(f)
                        };
                        this.Qh = function() {
                            e.pd || (e.pd = !0, e.Ed(e.Sf), e.Ed(e.lf))
                        };
                        this.sh = function(f) {
                            return N(function(g, h) {
                                var k = "page" === h.type && !h.M,
                                    l = "eof" === h.data.type,
                                    m = k && !!h.partNum;
                                return {
                                    vd: g.vd || m,
                                    ud: g.ud || k,
                                    sd: g.sd || l
                                }
                            }, {
                                ud: !1,
                                sd: !1,
                                vd: !1
                            }, f)
                        };
                        this.vi = function(f, g, h, k) {
                            k ? (f = e.Le(e.ab, f, g, h[0]), e.xi() && (e.Ed(e.ab), e.Yb = !0)) : (e.Yb = !0, f = e.send(f, g));
                            return f
                        };
                        this.ri = function(f) {
                            var g;
                            return e.Ji ? (g = {}, g["wv-type"] = La(function(h) {
                                return "eof" === n(h, "data.type")
                            }, f) ? "2" : "8", g) : {}
                        };
                        this.Df = function(f, g, h) {
                            g = {
                                G: e.ri(h),
                                H: Ca(),
                                Y: {
                                    fa: g
                                },
                                Qa: {
                                    Vd: e.Gi
                                }
                            };
                            f && g.H.C("bt", 1);
                            return g
                        };
                        this.Ih = function(f, g, h) {
                            f = e.Df(!1, f, g);
                            return e.Yb ? e.send(f, h) : e.Le(e.lf, f, h, g)
                        };
                        this.Wi = function(f, g, h) {
                            f = e.Df(!0, f, g);
                            if (e.Yb) return e.send(f, h);
                            var k = e.sh(g),
                                l = k.ud,
                                m = k.sd;
                            k = k.vd;
                            var p;
                            l && (p = e.vi(f, h, g, k));
                            e.pd ? l || (p = e.send(f, h)) : (l || (p = e.Le(e.Sf, f, h, g)), (e.Yb || m) && e.Qh());
                            return p
                        };
                        this.Ji = d;
                        this.l = a;
                        this.Gi = b;
                        this.sender = Aa(a, "W", c);
                        this.sc = c
                    }
                }(),
                kl = w(function(a) {
                    var c = H(a),
                        b = c.o("isEU");
                    if (U(b)) {
                        var d = Ga(ge(a, "is_gdpr") || "");
                        if (G(d, [0,
                                1
                            ])) c.C("isEU", d), b = !!d;
                        else if (a = Qa(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return H(a).o("isEU")
                }),
                pf = D("i.e", kl),
                Wt = D("i.ep", function(a) {
                    kl(a)
                }),
                Xt = D("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = H(a),
                        e = M(c);
                    if (!c.Ib || Zc(a) || !a.MutationObserver || !Ea("Element", a.Element)) return B;
                    Ea("MutationObserver", a.MutationObserver) || zd(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                    var f = xa(function(k, l) {
                            qa(c, l)["catch"](k)
                        }),
                        g = $b(a)(Ne(F([a, c], Jm)))(Rg(function(k) {
                            return new St(a, k)
                        })),
                        h = !1;
                    uq([g, f])(Ra(C(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.o("wv2Counter");
                            if (!Nh(a, k) || m) b();
                            else if (ja(a).D(a, ["beforeunload", "unload"], b), d.C("wv2Counter", e), d.C("stopRecorder", b), k = [new Re(a)], k.unshift(new Ut(a)), k = db(function(t) {
                                    return t.isEnabled()
                                }, k)) {
                                m = new Vt(a, c, !(k instanceof Re), 0);
                                var p = hl.yf(e, "m", E(m.Wi, m), k, a),
                                    q = hl.yf(e, "e", E(m.Ih, m), k, a);
                                k = Km();
                                m = k.bj;
                                q.D("ag", k.eh);
                                q.D("p", m);
                                p.D("see", function(t) {
                                    var x = !1;
                                    z(function(I) {
                                        "page" === I.type && (x = !0)
                                    }, t);
                                    x && (h || q.push({
                                        type: "event",
                                        data: {
                                            type: "fatalError",
                                            $: {
                                                code: "invalid-snapshot",
                                                Jh: "p.s.f",
                                                stack: ""
                                            }
                                        }
                                    }), b())
                                });
                                var r = fb(function(t) {
                                    "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t)
                                });
                                W(a, b, 864E5);
                                Hb(a, function() {
                                    gb(a, {
                                        da: e,
                                        name: "webvisor",
                                        data: {
                                            version: 2
                                        }
                                    });
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                Yt = D("w2.cs", function(a, c) {
                    var b, d = M(c);
                    Wf(a, d, (b = {}, b.webvisor = !!c.Ib, b))
                }),
                ll = w(wc, M),
                Jh = u($d, mc),
                ml = B,
                Zt = vb("isp.stat", function(a, c) {
                    return new K(function(b, d) {
                        if (hq(a, Zk, "isp")) {
                            var e = function(f) {
                                ("1" === f ? b : d)();
                                ml();
                                f = uj(Zk);
                                G("isp", f.wb) && (f.wb = Y(u(la("isp"), Rb), f.wb), f.wb.length || (lc(f.lb), f.lb = null))
                            };
                            ml = ja(a).D(a, ["message"], F([c, e], C(a, "isp.stat.m", Im)));
                            W(a, e, 1500)
                        } else d()
                    })
                }),
                $t = vb("isp", function(a, c) {
                    qa(c, function(b) {
                        var d = db(function(g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && Md(a)) {
                            var e = ii(b) && !Xd(a),
                                f = ll(c);
                            y(f, {
                                Yc: d,
                                status: e ? 3 : 4
                            });
                            if (!e) return d =
                                Hm(a, c, d), e = function(g) {
                                    f.status = g
                                }, Zt(a, d).then(v(1, e))["catch"](v(2, e))
                        }
                    })["catch"](C(a, "l.isp"))
                }),
                nl = D("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Ba(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        y(e, d);
                        b && z(c, b);
                        a.fbq = e
                    } else var f = W(a, F([a, c, wa(sa(d && d.queue))], nl), 1E3, "fbq.d");
                    return E(ma, null, a, f)
                }),
                Vc, yb, Wc, ih = (Vc = {}, Vc.add_to_wishlist = "add-to-wishlist", Vc.begin_checkout = "begin-checkout", Vc.generate_lead = "submit-lead", Vc.add_payment_info = "add-payment-info",
                    Vc),
                jh = (yb = {}, yb.AddToCart = "add-to-cart", yb.Lead = "submit-lead", yb.InitiateCheckout = "begin-checkout", yb.Purchase = "purchase", yb.CompleteRegistration = "register", yb.Contact = "submit-contact", yb.AddPaymentInfo = "add-payment-info", yb.AddToWishlist = "add-to-wishlist", yb.Subscribe = "subscribe", yb),
                Fm = (Wc = {}, Wc["1"] = ih, Wc["2"] = ih, Wc["3"] = ih, Wc["0"] = jh, Wc),
                Gm = [jh.AddToCart, jh.Purchase],
                au = ka(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            yc: d
                        })) a: {
                        if (ea(c) || Oa(c))
                            if (b = Ba(c), d =
                                b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    yc: d
                                };
                                break a
                            } b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        yc: L(",", ba(b))
                    });
                    b && a(b)
                }),
                bu = D("ag.e", function(a, c) {
                    var b = [],
                        d = C(a, "ag.s", F([ia, b], z));
                    "0" === c.ca && qa(c, function(e) {
                        if (n(e, "settings.auto_goals") && Ha(a, c) && (e = pe(a, c, "autogoal").reachGoal)) {
                            e = F([e, c.Cd], Em);
                            var f = au(e);
                            e = F([a, e], Dm);
                            b.push(nl(a, e));
                            b.push(Ji(a, "dataLayer", function(g) {
                                g.ya.D(f)
                            }))
                        }
                    });
                    return d
                }),
                cu = /[^\d.,]/g,
                du = /[.,]$/,
                Bm = D("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(cu,
                            "").replace(du, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (G(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Lb(b[0]) + "." + Lb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                eu = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                        "398"
                    ],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                fu = w(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                gu = D("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = zi(a);
                    return (a = db(function(b) {
                        return fu(b[0]).test(c)
                    }, eu)) ? a[1] : "643"
                }),
                hu = w(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h +
                            "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = Hh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                xm = D("ep.dec", function(a, c) {
                    if (!c || Zc(a)) return [];
                    var b = Hh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Og(b[0])) return [];
                    b = hu();
                    f = f.join("");
                    e = Og(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Og(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = rb(a, b);
                    return ea(d) ? A(Sq, d) : []
                }),
                Am = D("ep.ent", function(a, c, b) {
                    a = "" + Ua(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Oa(b)) return "";
                    b = Ih("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                ol = u(Gh, gu),
                pl = D("ep.ctp", function(a, c, b, d) {
                    var e = ol(a, b),
                        f = Fh(a, d);
                    Eh(a, c, e, f);
                    Ea("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = ol(a, b),
                            h = Fh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Eh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                iu = D("ep.chp", function(a, c, b, d, e) {
                    b && nf(a, c);
                    return d || e ? ja(a).D(a.document, ["click"], C(a, "ep.chp.cl", F([a, c, d, e], zm))) : B
                }),
                mu = D("ep.i", function(a, c) {
                    return Dd(a) ? wm(a, c).then(function(b) {
                        var d = b.Eh,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            x = d[11],
                            I = d[12],
                            Z = d[13],
                            V = d[14],
                            oa = d[15];
                        if (!b.isEnabled) return K.resolve(B);
                        var ta = ae(a, e),
                            tb = ae(a, h),
                            rd = ae(a, m),
                            oe = ae(a, q),
                            ju = "" + e + f + g === "" + h + k + l;
                        return new K(function(ku,
                            lu) {
                            $b(a)(Ra(lu, function() {
                                ta && pl(a, c, f, g, t, x, I);
                                tb && !ju && pl(a, c, k, l, Z, V, oa);
                                ku(iu(a, c, rd || oe, p, r))
                            }))
                        })
                    }) : K.resolve(B)
                }),
                gm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                nu = D("cc.i", function(a, c) {
                    var b = F([a, c], vm);
                    b = F([a, b, 300, void 0], W);
                    qa(c, b)
                }),
                ou = v("9-d5ve+.r%7", O),
                pu = D("ad", function(a, c) {
                    if (!c.tb) {
                        var b = H(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function(m) {
                                    G(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                                },
                                e = Yb(a),
                                f = e.o("isad");
                            if (f) d(f);
                            else {
                                var g = v("adStatus", b.C),
                                    h = function(m) {
                                        m =
                                            m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.C("isad", m, 1200);
                                        return m
                                    },
                                    k = Aa(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + ou().replace(/[^a-v]+/g, "") + "t.gif";
                                    sm(a, function() {
                                        return k({
                                            ra: {
                                                Ja: l
                                            }
                                        }).then(v(!1, h))["catch"](v(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                qu = D("pr.p", function(a, c) {
                    var b, d;
                    if (sg(a)) {
                        var e = Aa(a, "5", c),
                            f = Ca((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            H: f,
                            G: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](C(a, "pr.p.s"))
                    }
                }),
                Dh = !1,
                ru = D("fid", function(a) {
                    var c, b = B;
                    if (!S(a.PerformanceObserver)) return b;
                    var d = H(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(C(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                ql = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                su = w(function() {
                    return N(function(a, c) {
                        var b = mc(c + "/tag.js");
                        ql[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                tu = D("p.sci", function(a, c) {
                    var b = H(a);
                    return b.o("scip") ? K.resolve() : qa(c, O).then(function(d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? rm(a, c, b) : null
                    }, C(a, "ins.cs"))
                }),
                uu = D("lt.p", vb("lt.p", function(a) {
                    var c;
                    if (Ea("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(C(a,
                                "lt.o",
                                function(e) {
                                    e && e.getEntries && (e = e.getEntries(), b = N(function(f, g) {
                                        return f + g.duration
                                    }, b, e), Jd(a).C("lt", b))
                                }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return B
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return B
                })),
                vu = w(u(T("performance.memory.jsHeapSizeLimit"), pa("concat", ""))),
                wu = ["availWidth", "availHeight", "availTop"],
                xu = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                yu = ["webgl", "experimental-webgl"],
                qm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                hf = v(Sa("ccf"), Wa),
                pm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Ah = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                nm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                im = w(ui),
                zh = w(rb, wb),
                zu = D("phc.p", function(a, c) {
                    return Rk(a) ? B : qa(c, function(b) {
                        var d = c.id,
                            e = Ac(a, void 0, d),
                            f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = kb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = zh(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Nb: "",
                            Xb: "",
                            ug: 0,
                            oa: {},
                            za: [],
                            Nf: !1,
                            kb: !0,
                            l: a,
                            sc: c
                        }, y(f, {
                            Nf: !0
                        }), yh(a, d, f), b = td(a), e = wi(a, b, 1E3), d = E(yh, null, a, d, f), e.D(d), xi(a,
                            b))
                    })
                }),
                kh = w(function(a, c) {
                    var b = H(a),
                        d = Qa(a),
                        e = [],
                        f = F([a, c, b, d], Ro);
                    nd(a) || So(a, "14.1") || e.push(F([fm, "pp", ""], f));
                    var g = Tk(a) && !ff(a, 68);
                    g || e.push(F([hm, "pu", ""], f));
                    g || d.Wd || Md(a) || (e.push(F([em, "zzlc", "na"], f)), e.push(F([dm, "cc", ""], f)));
                    return e.length ? {
                        Ca: function(h, k) {
                            if (0 === b.o("isEU")) try {
                                z(Ki, e)
                            } catch (l) {}
                            k()
                        },
                        aa: function(h, k) {
                            var l = h.H;
                            if (l && 0 === b.o("isEU")) try {
                                z(xa(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return M(c)
                }),
                Au = u(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Oa(a) ? u(sa, Hc(Boolean),
                        qr(function(c, b) {
                            return c.name > b.name ? 1 : 2
                        }), fb(Oo))(a) : ""
                }, od(",")),
                Bu = function(a) {
                    return function(c) {
                        var b = $a(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Lh;
                        e = e.Bh;
                        try {
                            var g = pa("getContext", b);
                            d = A(u(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = db(O, d)) ? f(c, {
                            canvas: b,
                            oh: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Bh: yu,
                        Lh: $l
                    }
                }),
                Yl = ["name", "lang", "localService", "voiceURI", "default"],
                Cu = D("p.tfs", function(a) {
                    var c = H(a);
                    if (!c.o("tfs")) {
                        c.C("tfs", !0);
                        c = ja(a);
                        var b = B;
                        b = c.D(a, ["message"], function(d) {
                            try {
                                var e = d.origin
                            } catch (h) {}
                            if (e &&
                                "https://iframe-toloka.com" === e && (d = rb(a, d.data), Ma(d) && "appendremote" === d.action))
                                if (d = Qa(a), d.o("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.C("tfsc",
                                        1);
                                    var f, g;
                                    H(a).C("_u", (f = {}, f.getCachedTags = Nf, f.button = (g = {}, g.closest = v(a, Of), g.select = Pf, g.getData = v(a, Qf), g), f));
                                    jc(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                Du = Xa(/[a-z\u0430-\u044f,.]/gi),
                Eu = D("ice", function(a, c, b) {
                    var d = Ha(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = nb(c)) && !(100 <= Oa(c)))) {
                            b = Lb(c);
                            var f = 0 < c.indexOf("@"),
                                g = "tel" === n(e, "type") || !f && Oa(b);
                            if (f || g) {
                                if (g) {
                                    if (Du(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h &&
                                        "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[Oa(c) - 1];
                                    g = b[Oa(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                Oa(c) < b || Oa(c) > g || Zi(a, c).then(function(l) {
                                    var m, p, q, r = mg(a, e);
                                    d.params((m = {}, m.__ym = (p = {}, p.fi = rg((q = {}, q.a = f ? 1 : 0, q.b = r, q.c = l, q)).Aa(), p), m))
                                }, C(a, "ice.s"))
                            }
                        }
                    }
                }),
                Fu = ["text", "email", "tel"],
                Gu = ["cc-", "name", "shipping"],
                Hu = D("icei", function(a, c) {
                    if (Dd(a) && Ok(a)) {
                        var b = !1,
                            d = [];
                        $b(a)(Ra(B, F([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = pf(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = ja(a);
                                f =
                                    ub("input", a.document.body);
                                z(function(h) {
                                    zf(a, h) || !G(h.type, Fu) || La(O, A(v(h.autocomplete, nc), Gu)) || d.push(g.D(h, ["blur"], F([a, c], Eu)))
                                }, sa(f))
                            }
                        }], qa)));
                        return function() {
                            z(ia, d);
                            b = !0
                        }
                    }
                }),
                Iu = vb("gic", Hu),
                vh, Ju = D("p.ai", function(a, c) {
                    return new K(function(b) {
                        (nd(a) || $e(a)) && b(qa(c, function(d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? uh(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : B
                        }));
                        b(B)
                    })
                }),
                Vb = ["0", "1", "2", "3"],
                Bc = Vb[0],
                Ze = Vb[1],
                Ku = Vb[2],
                cf = A(u(O, pa("concat", "GDPR-ok-view-detailed-")), Vb),
                Wd = wa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "),
                    cf, ["28", "29", "30"]),
                Lu = "3 13 14 15 16 17 28".split(" "),
                bf = u(fb(T("ymetrikaEvent.type")), Hc(sc(Wd))),
                Vl = {
                    url: "https://yastatic.net/s3/gdpr/popup/v2/",
                    Qf: "ru en et fi lt lv pl fr no sr".split(" "),
                    Zf: "_two_main_buttons"
                },
                Ub, Ul = (Ub = {}, Ub["GDPR-ok"] = "ok", Ub["GDPR-ok-view-default"] = "ok-default", Ub["GDPR-ok-view-detailed"] = "ok-detailed", Ub["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Ub["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Ub["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Ub["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Ub),
                Yd = [],
                qh = u(bf, fb(pr(Wd)), od(",")),
                rh = u(Hc(sc(Wd)), Oa, Boolean),
                Ml = w(function(a, c) {
                    var b = c.o("gdpr");
                    return G(b, Vb) ? "-" + b : ""
                }),
                Yc = {},
                rl = w(wc),
                Jl = u(pa("exec", /counterID=(\d+)/), T("1")),
                sl = ka(function(a, c) {
                    var b = rl(a),
                        d = sa(c),
                        e = d[0],
                        f = d[1],
                        g = d.slice(2);
                    if (f) {
                        d = Il(a, e);
                        var h = d[0],
                            k = d[1];
                        d = M(k);
                        b[d] || (b[d] = {});
                        b = b[d];
                        c.qf || Yc[f] && N(function(l, m) {
                            return l || !!m(a, k, g, h)
                        }, !1, Yc[f]) || ("init" === f ? (c.qf = !0, h ? Ab(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] =
                            new a.Ya[ra.pc](y({}, g[0], k))) : h && h[f] && b.Ei ? (h[f].apply(h, g), c.qf = !0) : (d = b.vg, d || (d = [], b.vg = d), d.push(wa([e, f], g))))
                    }
                }),
                Mu = vb("is", function(a) {
                    var c = Yb(a);
                    if ($f(a, "0")) c.Pb("debug_build");
                    else {
                        var b = $f(a, "200500"),
                            d = c.o("debug_build") === ra.gb;
                        if (b || d) return c.C("debug_build", ra.gb), jc(a, {
                            src: Yk + "/tag_debug.js"
                        })
                    }
                });
            "function" == typeof Promise && Promise.resolve();
            var tl = w(sd),
                Nu = w(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Xk + "." + b);
                        return c
                    }, {}, jg);
                    z(function(c) {
                        a[c] = c
                    }, ba($k));
                    return a
                }),
                Dl =
                w(function(a) {
                    a = R(a).hostname;
                    return (a = db(u(T("1"), vi("test"), Gb(ia)(a)), ya($k))) && a[0]
                }),
                ul = function(a, c) {
                    return function(b, d) {
                        var e = M(d);
                        e = Nu(e);
                        var f = Bl(b, e),
                            g = H(b),
                            h = cb(b);
                        return Md(b) || Gd(b) ? {} : {
                            aa: function(k, l) {
                                var m = k.H,
                                    p = oh(b);
                                m = !(m && m.o("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.o("startSync")) tl(b).push(l);
                                else {
                                    g.C("startSync", !0);
                                    p = F([b, f, B, !1], a);
                                    m = af[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, u(cd(l), C(b, c)))["catch"](B)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ha(a),
                        f = H(a),
                        g = Qa(a);
                    b = ad(a, "c");
                    var h =
                        Bb(a, b);
                    return N(function(k, l) {
                        function m() {
                            var r = g.o("synced");
                            f.C("startSync", !1);
                            r && (r[l.Ri] = p, g.C("synced", r));
                            r = tl(a);
                            z(ia, r);
                            Ad(r)
                        }
                        var p, q = h({
                            Y: {
                                Da: ["sync.cook"],
                                Fb: 1500
                            }
                        }, [ra.Va + "//" + l.Fj + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(jb);
                            m()
                        })["catch"](function() {
                            p = e(jb) - 1435;
                            m()
                        });
                        q = v(q, O);
                        return k.then(q)
                    }, K.resolve(), c)["catch"](C(a, "ctl"))
                }, "sy.c"),
                Al = D("destruct.e", function(a, c, b) {
                    return function() {
                        var d = H(a),
                            e = c.id;
                        z(function(f, g) {
                            return S(f) && C(a, "dest.fr." + g,
                                f)()
                        }, b);
                        delete d.o("counters")[M(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Xc = H(window);
            Xc.Sa("hitParam", {});
            Xc.Sa("lastReferrer", window.location.href);
            (function() {
                X.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = ds(a, c), b.firstPartyParamsHashed = Gp(a, c), b
                })
            })();
            (function() {
                var a = H(window);
                a.Sa("getCounters", es(window));
                zc.push(fs);
                Qg.push(function(c, b) {
                    b.counters = a.o("getCounters")
                })
            })();
            (function() {
                X.push(function(a, c) {
                    gb(a, {
                        da: M(c),
                        name: "counter",
                        data: c
                    })
                })
            })();
            Da["1"] = ib;
            X.push(hs);
            va["1"] = Oe;
            xb(Ui,
                -1);
            Ob["1"] = [
                [Ui, -1],
                [Ce, 1],
                [xe, 2],
                [Fb(), 3]
            ];
            X.push(is);
            X.push(function(a, c) {
                var b, d = Aa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, q = {
                        G: {},
                        H: Ca((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = Ma(f) ? {
                        title: f.title,
                        cg: f.referer,
                        ea: f.params,
                        jc: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        cg: g,
                        ea: h,
                        jc: k,
                        l: l
                    }, g = yd(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || R(a).href, g = f.cg || g.ref || a.document.referrer, h = Db(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.ea), k = y(q.V || {}, {
                        ea: f.ea,
                        title: f.title
                    }), q = d(y(q, {
                        V: k,
                        G: y(q.G || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), Kc(a, "p.ar.s", q, f.jc || B, f.l)
                }, b
            });
            Da.a = ib;
            Ob.a = Pb;
            va.a = Oe;
            X.push(pe);
            Da.g = ib;
            va.g = Oe;
            Ob.g = Pb;
            X.push(js);
            X.push(ks);
            Ob.t = Pb;
            Da.t = ib;
            va.t = bc;
            X.push(ms);
            Ob["2"] = Pb;
            Da["2"] = ib;
            va["2"] = bc;
            Da.r = tg("r");
            va.r = Oe;
            zb.push(function(a, c) {
                var b = os(a),
                    d = Aa(a, "r", c),
                    e = C(a, "rts.p");
                return qa(c, F([function(f, g) {
                    var h = {
                            id: g.yh,
                            ca: g.ca
                        },
                        k = {
                            Y: {
                                fa: g.nj
                            },
                            H: Ca(g.kh),
                            G: g.ea,
                            V: {
                                $b: g.$b
                            },
                            ra: {
                                Ja: g.Ja
                            }
                        };
                    g.Ka && (k.Ka = rg(g.Ka));
                    h = d(k, h)["catch"](e);
                    return f.then(v(h,
                        O))
                }, K.resolve(), b], N))["catch"](e)
            });
            ca("r", function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.H,
                            e = void 0 === d ? Ca() : d,
                            f = c.V.$b,
                            g = xd(a);
                        d = e.o("rqnl", 0) + 1;
                        e.C("rqnl", d);
                        if (e = n(g, L(".", [f, "browserInfo"]))) e.rqnl = d, Uf(a);
                        b()
                    },
                    Ca: function(c, b) {
                        Pi(a, c);
                        b()
                    }
                }
            }, 1);
            xb(Tf, 100);
            X.push(ps);
            ca("n", Ce, 1);
            ca("n", xe, 2);
            ca("n", Fb(), 3);
            ca("n", Tf, 100);
            Da.n = ib;
            va.n = bc;
            dc({
                af: {
                    ia: "accurateTrackBounce"
                }
            });
            X.push(qs);
            Da.m = tg("cm");
            va.m = Zr;
            ca("m", Fb(["u", "v", "vf"]), 1);
            ca("m", Tf, 2);
            dc({
                vh: {
                    ia: "clickmap"
                }
            });
            X.push(rs);
            X.push(ss);
            X.push(us);
            X.push(vs);
            (function() {
                X.push(ws);
                dc({
                    Cd: {
                        ia: "ecommerce",
                        $a: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            X.push(xs);
            zb.push(zs);
            X.push(As);
            zc.push(Cs);
            X.push(Ds);
            xb(function(a, c) {
                return {
                    Ca: function(b, d) {
                        var e = Ha(a, c);
                        e = e && e.userParams;
                        var f = (b.V || {}).Te;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Td.push(bs);
            X.push(Gs);
            X.push(Hs);
            Me.push(function(a) {
                var c = H(a);
                c.o("i") || (c.C("i", !0), ja(a).D(a, ["message"], v(a, Wo)))
            });
            X.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = D("ecm.a", Is(a, c)), b.ecommerceRemove =
                    D("ecm.r", Js(a, c)), b.ecommerceDetail = D("ecm.d", Ks(a, c)), b.ecommercePurchase = D("ecm.p", Ls(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = Ts;
                c.pri = Eo;
                c.wv = v(2, O);
                c.ds = Ho;
                c.co = function(b) {
                    return dd(H(b).o("jn"))
                };
                c.td = Vs;
                y(c, (a = {}, a.iss = u(Br, Cb), a.hdl = u(Cr, Cb), a.iia = u(Dr, Cb), a.cpf = u(Ss, Cb), a.ntf = w(function(b) {
                    a: switch (n(b, "Notification.permission")) {
                        case "denied":
                            b = !1;
                            break a;
                        case "granted":
                            b = !0;
                            break a;
                        default:
                            b = null
                    }
                    return Ta(b) ? null : b ? 2 : 1
                }), a.eu = yc("isEU"), a.ns = Lk, a.np = function(b) {
                    if (Ua(b, 0, 100)) b = null;
                    else {
                        b =
                            nb(Jf(b), 100);
                        for (var d = [], e = 0; e < b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                        }
                        b = Mh(d)
                    }
                    return b
                }, a));
                y(dg, c)
            })();
            (function() {
                var a = {};
                a.oo = yc("oo");
                a.pmc = yc("cmc");
                a.lt = function(c) {
                    var b = Jd(c).o("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.yu = function(c) {
                    var b = R(c);
                    return G(b.hostname, ["dzen.ru", "ya.ru"]) ? (Ac(c, "").o("yandexuid") || "").substring(0, 25) : null
                };
                a.re = u(cq, Cb);
                a.aw = function(c) {
                    c = db(u(na, Rb), [c.document.hidden,
                        c.document.msHidden, c.document.webkitHidden
                    ]);
                    return na(c) ? null : dd(!c)
                };
                a.ifc = yc("ifc");
                a.ifb = yc("ifb");
                a.ecs = yc("ecs");
                a.csi = yc("scip");
                y(eg, a)
            })();
            va.er = Uc;
            (function(a) {
                try {
                    var c = ad(a, "er"),
                        b = Ao(a, c);
                    Pj.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ra.gb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                Td.push(Do);
                we.unshift(zo);
                $g.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    H(a).C("oo",
                        c)
                })
            })();
            xb(function(a, c) {
                return {
                    aa: function(b, d) {
                        var e = b.G,
                            f = b.H;
                        !al[c.id] && f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, al[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push($s);
            Ob.e = Pb;
            Da.e = ib;
            va.e = bc;
            dc({
                exp: {
                    ia: "experiments"
                }
            });
            ek.experiments = "ex";
            (function() {
                var a;
                af.push(at);
                Da.f = ib;
                y(va, (a = {}, a.f = Nk, a));
                ca("f", Fb(), 1);
                ca("f", jj, 2)
            })();
            Td.push(function(a, c) {
                var b = {
                        da: M(c),
                        xd: Ha(a, c),
                        Cg: ha(a),
                        ee: Qa(a)
                    },
                    d = b.Cg(jb);
                if (!b.ee.Wd) {
                    var e = b.ee.o("ymoo" + b.da);
                    if (e && 30 > d - e) b = b.da, delete H(a).o("counters", {})[b], Wa(Sa("uws"));
                    else qa(c, bt(b))["catch"](C(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = Eb([Nb]);
                y(va, (a = {}, a.s = b, a.S = b, a.u = Uc, a));
                y(Da, (c = {}, c.s = Bb, c.S = ib, c.u = Bb, c));
                ca("s");
                ca("u");
                ca("S", Fb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(D("s", mo))
            })();
            Da["8"] = Bb;
            va["8"] = [dj];
            X.push(function(a, c) {
                return qa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    return e && gi(a, b, {
                        hb: c,
                        Yc: "8",
                        data: y({}, e, (d = {}, d.c = c.id, d)),
                        ce: "cs"
                    })
                })
            });
            ca("p", Fb(ah), 1);
            Da.p = function(a, c, b) {
                return function(d, e) {
                    var f, g = y({
                        H: Ca()
                    }, d);
                    g.G || (g.G = {});
                    var h = g.G,
                        k = g.Qa;
                    k = void 0 === k ? {} : k;
                    h["wv-hit"] = h["wv-hit"] || "" + Ib(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.wmode = "0";
                    h["wv-part"] = "0";
                    h["page-url"] = h["page-url"] || a.location.href;
                    h["wv-type"] || (h["wv-type"] = k.Vd ? "5" : "4");
                    h = {
                        ra: {
                            Ja: "webvisor/" + e.id
                        },
                        Y: y(g.Y, {
                            zb: (f = {}, f["Content-Type"] = "text/plain", f),
                            Ve: "POST"
                        }),
                        G: h
                    };
                    f = Na(If(a, "pub", e), b);
                    return ke(a, c, f)(y(g, h))
                }
            };
            va.p = Eb([0, Nb]);
            zb.push(gt);
            dc({
                Ib: {
                    ia: "webvisor",
                    $a: Boolean
                },
                Dh: {
                    ia: "disableFormAnalytics",
                    $a: Boolean
                }
            });
            ca("4", Fb(ah), 1);
            Da["4"] = fi;
            va["4"] =
                Eb([0, Nb, Bd]);
            zb.push(mt);
            (function() {
                ca("W", Fb(ah), 1);
                va.W = Eb([0, Nb]);
                Da.W = fi;
                zb.push(Xt);
                X.push(Yt);
                dc({
                    Ib: {
                        ia: "webvisor"
                    }
                });
                dc({
                    Qj: {
                        ia: "trustedDomains"
                    },
                    nc: {
                        ia: "childIframe",
                        $a: Boolean
                    }
                });
                $g.push(function(a) {
                    H(a).o("stopRecorder", B)()
                });
                Gk("wv")
            })();
            X.push($t);
            ca("pi");
            Da.pi = Bb;
            va.pi = Uc;
            Gk("w", function(a, c) {
                return {
                    aa: function(b, d) {
                        if (b.H) {
                            var e = ll(c),
                                f = e.status;
                            "rt" === e.Yc && f && (b.H.C("rt", f), b.ra || (b.ra = {}), b.ra.Bi = 1 === f ? Jh(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            X.push(bu);
            X.push(mu);
            va["6"] = Eb([0, Nb]);
            Da["6"] =
                Bb;
            X.push(nu);
            xb(Dc, 20);
            ca("f", Dc, 20);
            ca("n", Dc, 20);
            ca("1", Dc, 20);
            ca("d", Dc, 20);
            ca("5", Dc, 20);
            X.push(Ws);
            (function() {
                Qg.push(function(a, c) {
                    c.informer = tm(a)
                })
            })();
            xb(kf, 6);
            ca("1", kf, 6);
            ca("adb");
            ca("n", kf, 4);
            va.adb = Uc;
            Da.adb = ke;
            zc.push(pu);
            va["5"] = bc;
            Da["5"] = ib;
            Ob["5"] = Y(u(Lc, sc([Ce, xe]), Rb), Pb);
            X.push(qu);
            xb(Ch, 7);
            ca("n", Ch, 6);
            zb.push(ru);
            Da.d = ib;
            ca("d", Fb(["hid", "u", "v", "vf"]), 1);
            va.d = Uc;
            ca("n", function(a, c) {
                return {
                    Ca: function(b, d) {
                        if (!b.V || !b.V.force) {
                            var e = .002,
                                f = c.id === ra.Xg ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Kf(a);
                            if (p && S(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, x = su(a), I = R(a).href, Z = 0; Z < p.length; Z += 1) {
                                    var V = p[Z],
                                        oa = V.name.replace(/^https?:\/\//, "").split("?")[0],
                                        ta = mc(oa),
                                        tb = (g = {}, g.dns = Math.round(V.domainLookupEnd - V.domainLookupStart), g.tcp = Math.round(V.connectEnd - V.connectStart), g.duration = Math.round(V.duration), g.response = Math.round(V.responseEnd - V.requestStart), g);
                                    "script" !==
                                    V.initiatorType || e || (r[oa] = y(tb, (h = {}, h.name = V.name, h.decodedBodySize = V.decodedBodySize, h)));
                                    !ql[ta] && !x[ta] || q[oa] || f || (q[oa] = y(tb, (k = {}, k.pages = I, k)))
                                }
                                ba(q).length && (t.timings8 = q);
                                ba(r).length && (t.scripts = r);
                                if (ba(t).length) Aa(a, "d", c)({
                                    H: Ca((l = {}, l.ar = 1, l.pv = 1, l)),
                                    Y: {
                                        fa: kb(a, t) || void 0
                                    },
                                    G: (m = {}, m["page-url"] = I, m)
                                }, {
                                    id: ra.$g,
                                    ca: "0"
                                })["catch"](C(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            va.ci = Eb([Nb]);
            zb.push(tu);
            X.push(uu);
            zb.push(Rs);
            X.push(zu);
            xb(kh, 8);
            ca("f", kh, 3);
            ca("n", kh, 5);
            zc.push(function(a) {
                return D("fip",
                    function(c) {
                        if (!Tk(c) || Gd(c)) {
                            var b = Qa(c);
                            if (!b.o("fip")) {
                                var d = u(fb(u(function(e, f) {
                                    return D("fip." + f, e)(c)
                                }, E(ar, null))), od("-"))(a);
                                b.C("fip", d)
                            }
                        }
                    })
            }([Bu, Au, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = R(a).protocol;
                a = c && "https:" === b && !cb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (S(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a =
                    Ps(a)) try {
                    for (var c = [], b = 0; b < Uk.length; b += 1) {
                        var d = a(Uk[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? L("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = xu);
                var b = n(a, "navigator") || {};
                c = A(v(b, n), c);
                c = L("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = Ka(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Oa(e)
            }, vu, function(a) {
                a = n(a, "screen") || {};
                return L("x", A(v(a, n), wu))
            }, function(a) {
                return L("x", Xl(a) || [])
            }, function(a) {
                a = mm(a);
                return ea(a) ? L("x", a) : a
            }, function(a) {
                return (a =
                    om(a)) ? u(sr, Hc(O), fb(F(["", ["matches", "media"]], Zl)), v("x", L))(a) : ""
            }]));
            xb(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.H,
                            e = Qa(a).o("fip");
                        e && d && (d.C("fip", e), Vd(c, "fip", dd(e)));
                        b()
                    }
                }
            }, 9);
            ca("h", function(a) {
                return {
                    Ca: function(c, b) {
                        var d = c.tj;
                        lf(c) && d && H(a).C("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            zc.push(Wt);
            Me.push(Cu);
            zb.push(Iu);
            X.push(Ju);
            dc({
                ak: {
                    ia: "yaDisableGDPR"
                },
                bk: {
                    ia: "yaGDPRLang"
                }
            });
            we.push(function(a, c) {
                return {
                    aa: F([a, c], Ll)
                }
            });
            ig.push("gdpr", "gdpr_popup");
            hg.push(function(a, c) {
                var b = Ud(a);
                b = bf(b);
                if (Y(sc(Lu), b).length) return !0;
                b = c(a, "gdpr");
                return G(b, [Bc, Ku])
            });
            we.push(function(a) {
                return {
                    aa: function(c, b) {
                        var d = c.ra || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Gc(a, e).host, e = $i(e), e = Xk + "." + (e || Xs)) : e = Zb;
                        c.ra = y(d, {
                            Ci: [e]
                        });
                        b()
                    }
                }
            });
            (function() {
                ig.push("_ym_debug_build");
                Kl("init", function(a, c) {
                    var b = "1" === c.ca,
                        d = Zf(c);
                    return cb(a) || b || d || !Mu(a) ? !1 : !0
                })
            })();
            xb(ul, 5);
            ca("1", ul, 6);
            va.c = Uc;
            Da.c = Bb;
            X.push(function(a, c) {
                var b = rl(a),
                    d = M(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Ei = !0;
                if (b = e.vg) d = sl(a), z(d, b)
            });
            Me.push(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = sl(a);
                    se(a, b, function(e) {
                        e.ya.D(d)
                    }, !0)
                }
            });
            if (window.Ya && Ue) {
                var vl = ra.pc;
                window.Ya[vl] = Ue;
                cs(window);
                z(u(Nc([window, window.Ya[vl]]), ia), Qg)
            }
            z(u(Nc([window]), ia), Me)
        })()
    } catch (Ue) {};
}).call(this)