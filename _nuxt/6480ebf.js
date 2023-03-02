(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    164: function (t, e, n) {
      var content = n(166);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(23).default)("76571ac2", content, !0, { sourceMap: !1 });
    },
    165: function (t, e, n) {
      "use strict";
      var o = n(164);
      n.n(o).a;
    },
    166: function (t, e, n) {
      (e = n(22)(!1)).push([
        t.i,
        ".navigation[data-v-fb5b1488]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-items:stretch;align-content:flex-start}.navigation--logo[data-v-fb5b1488]{position:fixed;bottom:6%;z-index:1;left:2%}.navigation--logo img[data-v-fb5b1488]{width:47px}@media screen and (max-width:950px){.navigation--logo[data-v-fb5b1488]{bottom:3%}.navigation--logo img[data-v-fb5b1488]{width:36px}}.navigation #navigation--toggle[data-v-fb5b1488]{display:block;position:fixed;top:6%;left:3%;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:950px){.navigation #navigation--toggle[data-v-fb5b1488]{top:3%}}#navigation--toggle input[data-v-fb5b1488]{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}#navigation--toggle span[data-v-fb5b1488]{display:block;width:40px;height:5px;margin-bottom:6px;position:relative;background:#000;border-radius:3px;z-index:1;transform-origin:4px 0;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}@media screen and (max-width:950px){#navigation--toggle span[data-v-fb5b1488]{width:32px;height:3px}}#navigation--toggle span[data-v-fb5b1488]:first-child{transform-origin:0 0}#navigation--toggle span[data-v-fb5b1488]:nth-last-child(2){transform-origin:0 100%}#navigation--toggle input:checked~span[data-v-fb5b1488]{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#fff}#navigation--toggle input:checked~span[data-v-fb5b1488]:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(.2)}#navigation--toggle input:checked~span[data-v-fb5b1488]:nth-last-child(2){transform:rotate(-45deg) translateY(-1px)}#menu[data-v-fb5b1488]{position:fixed;width:100vw;height:100vh;top:0;left:0;padding:125px 50px 50px;text-align:center;background-color:rgba(34,33,26,.8);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0 0;transform:translate(-100%);transition:transform .5s cubic-bezier(.77,.2,.05,1)}#menu a[data-v-fb5b1488]{text-decoration:none;color:#fff}#menu li[data-v-fb5b1488]{padding:10px 0;font-size:22px}#menu li svg[data-v-fb5b1488]{color:rgba(34,33,26,.8);font-size:1.5rem}#navigation--toggle input:checked~ul[data-v-fb5b1488]{transform:none;top:0;left:0}",
        "",
      ]),
        (t.exports = e);
    },
    167: function (t, e, n) {
      var content = n(173);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(23).default)("0c6c5b24", content, !0, { sourceMap: !1 });
    },
    171: function (t, e, n) {
      "use strict";
      n(165);
      var o = n(24),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "nav",
              { staticClass: "navigation", attrs: { role: "navigation" } },
              [
                n(
                  "div",
                  {
                    staticClass: "navigation--menu",
                    attrs: { id: "navigation--toggle" },
                  },
                  [
                    n("input", { attrs: { type: "checkbox" } }),
                    t._v(" "),
                    n("span"),
                    t._v(" "),
                    n("span"),
                    t._v(" "),
                    n("span"),
                    t._v(" "),
                    n(
                      "ul",
                      { attrs: { id: "menu" } },
                      [
                        n("nuxt-link", { attrs: { to: "/" } }, [
                          n("li", [t._v("Home")]),
                        ]),
                        t._v(" "),
                        n("nuxt-link", { attrs: { to: "/about" } }, [
                          n("li", [t._v("About")]),
                        ]),
                        t._v(" "),
                        n("nuxt-link", { attrs: { to: "/gallery" } }, [
                          n("li", [t._v("Gallery")]),
                        ]),
                        t._v(" "),
                        n(
                          "li",
                          [
                            n(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  href: "http://fb.me/mosaiquetahlaos",
                                  target: "_blank",
                                  fab: "",
                                  dark: "",
                                  small: "",
                                  color: "white",
                                },
                              },
                              [
                                n("font-awesome-icon", {
                                  attrs: { icon: ["fab", "facebook-f"] },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            n(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  href: "mailto:soalhat.jp@gmail.com",
                                  target: "_blank",
                                  fab: "",
                                  dark: "",
                                  small: "",
                                  color: "white",
                                },
                              },
                              [
                                n("font-awesome-icon", {
                                  attrs: { icon: ["fas", "at"] },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            n(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  href: "tel:+33490751171",
                                  target: "_blank",
                                  fab: "",
                                  dark: "",
                                  small: "",
                                  color: "white",
                                },
                              },
                              [
                                n("font-awesome-icon", {
                                  attrs: { icon: ["fas", "phone"] },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "navigation--logo" },
                  [
                    n("nuxt-link", { attrs: { to: "/" } }, [
                      n("img", {
                        attrs: {
                          src: "https://studionoisette.com/mt/images/small-logo-black.png",
                          alt: "logo",
                        },
                      }),
                    ]),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "fb5b1488",
          null
        );
      e.a = component.exports;
    },
    172: function (t, e, n) {
      "use strict";
      var o = n(167);
      n.n(o).a;
    },
    173: function (t, e, n) {
      (e = n(22)(!1)).push([
        t.i,
        "body[data-v-c0679ae4]{margin:0;padding:0}.block[data-v-c0679ae4]{position:relative;width:100%;float:right}.block .section[data-v-c0679ae4]{overflow:hidden}.block .section .main[data-v-c0679ae4]{display:flex;height:880px;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.block .section .main__container[data-v-c0679ae4]{width:90%;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center}@media screen and (max-width:959px){.block .section .main__container[data-v-c0679ae4]{width:80%}}.block .section .main__box[data-v-c0679ae4]{width:100%;height:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:flex-start;align-content:space-between}@media screen and (max-width:959px){.block .section .main__box[data-v-c0679ae4]{flex-direction:column}.block .section .main__box--reverse[data-v-c0679ae4]{flex-direction:column-reverse}}.block .section .main__box--row[data-v-c0679ae4]{display:inline-block}.block .section .main__box--full[data-v-c0679ae4]{width:100%;display:flex;height:50%}@media screen and (max-width:959px){.block .section .main__box--full[data-v-c0679ae4]{display:inline-block;flex-direction:row}}.block .section .main__box--full .text[data-v-c0679ae4]{width:50%}@media screen and (max-width:959px){.block .section .main__box--full .text[data-v-c0679ae4]{width:100%;height:50%}}.block .section .main__box--full .main__box--img[data-v-c0679ae4]{width:50%;height:100%}@media screen and (max-width:959px){.block .section .main__box--full .main__box--img[data-v-c0679ae4]{width:100%;height:50%;background-size:contain;background-position:unset}}.block .section .main__box--half[data-v-c0679ae4]{height:100%;display:flex;flex-direction:column;justify-content:space-between;width:50vw}@media screen and (max-width:959px){.block .section .main__box--half[data-v-c0679ae4]{display:contents;flex-direction:row;width:100%;text-align:left}}.block .section .main__box--img[data-v-c0679ae4]{background-size:cover;height:50%}.block .section .main__box--imgFull[data-v-c0679ae4]{background-size:cover;height:100%}@media screen and (max-width:959px){.block .section .main__box--imgFull[data-v-c0679ae4]{width:100%;background-size:contain;height:inherit}}.block .section .main__box .img-1[data-v-c0679ae4]{background-image:url(https://studionoisette.com/mt/images/mosaique-tahlaos-img-1.jpg);background-position:100%}@media screen and (max-width:959px){.block .section .main__box .img-1[data-v-c0679ae4]{background-size:cover}}.block .section .main__box .img-2[data-v-c0679ae4]{background-image:url(https://studionoisette.com/mt/images/mosaique-tahlaos-img-2.jpg);background-position:bottom}@media screen and (max-width:959px){.block .section .main__box .img-2[data-v-c0679ae4]{background-position:50%;background-size:cover}}.block .section .main__box .img-3[data-v-c0679ae4]{background-image:url(https://studionoisette.com/mt/images/mosaique-tahlaos-img-3.jpg);background-position:bottom}@media screen and (max-width:959px){.block .section .main__box .img-3[data-v-c0679ae4]{background-position:50%;width:100%;background-size:cover}}.block .section .main__box .img-4[data-v-c0679ae4]{background-image:url(https://studionoisette.com/mt/images/mosaique-tahlaos-img-4.jpg);background-position:bottom}@media screen and (max-width:959px){.block .section .main__box .img-4[data-v-c0679ae4]{background-position:50%;width:100%;background-size:cover}}.block .section .main__box .img-5[data-v-c0679ae4]{background-image:url(https://studionoisette.com/mt/images/mosaique-tahlaos-img-5.jpg);background-position:100%}@media screen and (max-width:959px){.block .section .main__box .img-5[data-v-c0679ae4]{background-position:50%;width:100%;background-size:cover}}.block .section .main__box .text[data-v-c0679ae4]{margin:auto 0;display:flex;flex-direction:column;justify-content:space-evenly;height:90%}@media screen and (max-width:959px){.block .section .main__box .text[data-v-c0679ae4]{height:auto}}.block .section .main__box .text--left[data-v-c0679ae4]{padding-right:3rem}@media screen and (max-width:959px){.block .section .main__box .text--left[data-v-c0679ae4]{padding:0 0 2rem}}.block .section .main__box .text--right[data-v-c0679ae4]{padding:3rem}@media screen and (max-width:959px){.block .section .main__box .text--right[data-v-c0679ae4]{padding:0 0 2rem}}.block .section .main__box .text h2[data-v-c0679ae4]{font-size:1.6rem}@media screen and (max-width:959px){.block .section .main__box .text h2[data-v-c0679ae4]{font-size:1rem;padding:2rem 2rem 0 0}}.block .section .main__box .text p[data-v-c0679ae4]{font-size:1rem}@media screen and (max-width:959px){.block .section .main__box .text p[data-v-c0679ae4]{font-size:.8rem;padding:2rem 2rem 0 0}}.block .section .main__box .text--mobile[data-v-c0679ae4]{height:100%}.block .section .main__box .text--mobile h2[data-v-c0679ae4],.block .section .main__box .text--mobile p[data-v-c0679ae4]{padding:2rem 0;margin-bottom:0}",
        "",
      ]),
        (t.exports = e);
    },
    182: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          components: { NavigationBlack: n(171).a },
          transition: "intro",
        },
        c = (n(172), n(24)),
        component = Object(c.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              [e("NavigationBlack"), this._v(" "), this._m(0)],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "block" }, [
                n("div", { staticClass: "section" }, [
                  n("div", { staticClass: "main" }, [
                    n("div", { staticClass: "main__container" }, [
                      n(
                        "div",
                        {
                          staticClass:
                            "main__box main__box--row hidden-sm-and-down",
                        },
                        [
                          n("div", { staticClass: "main__box--full" }, [
                            n("div", { staticClass: "text text--left" }, [
                              n("h2", [
                                t._v(
                                  "“I have the privilege of making contacts across the centuries”"
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "main__box--img img-1" }),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "main__box--full" }, [
                            n("div", { staticClass: "main__box--img img-2" }),
                            t._v(" "),
                            n("div", { staticClass: "text text--right" }, [
                              n("p", [
                                t._v(
                                  "\n                  Jean-Pierre describes his art as collaborative, continuing, interpreting, and transforming the work started by former artisans, sculptors, or builders of times-past.\n                  "
                                ),
                                n("br"),
                                t._v(" "),
                                n("br"),
                                t._v(
                                  "Recently he found the handprints of a Roman potter in one of his broken terracotta jars and he used it, intact, in one of his mosaics.\n                "
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "main__box main__box hidden-md-and-up" },
                        [
                          n("div", { staticClass: "main__box--half" }, [
                            n(
                              "div",
                              { staticClass: "text text--left text--mobile" },
                              [
                                n("h2", [
                                  t._v(
                                    "“I have the privilege of making contacts across the centuries”"
                                  ),
                                ]),
                                t._v(" "),
                                n("div", {
                                  staticClass: "main__box--imgFull img-2",
                                }),
                                t._v(" "),
                                n("p", [
                                  t._v(
                                    "Jean-Pierre describes his art as collaborative, continuing, interpreting, and transforming the work started by former artisans, sculptors, or builders of times-past."
                                  ),
                                ]),
                                t._v(" "),
                                n("div", {
                                  staticClass: "main__box--imgFull img-1",
                                }),
                                t._v(" "),
                                n("p", [
                                  t._v(
                                    "Recently he found the handprints of a Roman potter in one of his broken terracotta jars and he used it, intact, in one of his mosaics."
                                  ),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "section" }, [
                  n("div", { staticClass: "main" }, [
                    n("div", { staticClass: "main__container" }, [
                      n(
                        "div",
                        { staticClass: "main__box main__box--reverse" },
                        [
                          n("div", { staticClass: "main__box--half" }, [
                            n("div", { staticClass: "text text--left" }, [
                              n("h2", [
                                t._v(
                                  "Jean-Pierre’s creations are just as much treasures from the past as they are contemporary artworks."
                                ),
                              ]),
                              t._v(" "),
                              n("p", [
                                t._v(
                                  "\n                  “Yesterday, as I was cutting through some broken remains of marble that originated from a church of the time of the French Revolution, my studio was suddenly filled with the intense perfume of incense.\n                  "
                                ),
                                n("br"),
                                t._v(" "),
                                n("br"),
                                t._v(
                                  "This marble, porous and absorbent, was releasing the smells of the past right there for me to relive”\n                "
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "main__box--half" }, [
                            n("div", {
                              staticClass: "main__box--imgFull img-3",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "section" }, [
                  n("div", { staticClass: "main" }, [
                    n("div", { staticClass: "main__container" }, [
                      n("div", { staticClass: "main__box" }, [
                        n("div", { staticClass: "main__box--half" }, [
                          n("div", { staticClass: "main__box--imgFull img-4" }),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "main__box--half" }, [
                          n("div", { staticClass: "text text--right" }, [
                            n("h2", [
                              t._v(
                                "Jean Pierre works with noble and antique raw materials found in the surrounding ruins of Provence, most more than 2,000 years old."
                              ),
                            ]),
                            t._v(" "),
                            n("p", [
                              t._v(
                                "\n                  Jean Pierre works with noble and antique raw materials found in the surrounding ruins of Provence, most more than 2,000 years old.\n                  This is what characterizes his creations and makes them so unique and precious.\n                  "
                              ),
                              n("br"),
                              t._v(" "),
                              n("br"),
                              t._v(
                                "He uses pieces of Roman tile, broken terra cotta jugs, and scatted pieces of antique marble for his work.\n                  "
                              ),
                              n("br"),
                              t._v(" "),
                              n("br"),
                              t._v(
                                "The tools are exactly the same ones used two thousand five hundred years ago.\n                "
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "section" }, [
                  n("div", { staticClass: "main" }, [
                    n("div", { staticClass: "main__container" }, [
                      n(
                        "div",
                        { staticClass: "main__box main__box--reverse" },
                        [
                          n("div", { staticClass: "main__box--half" }, [
                            n("div", { staticClass: "text text--left" }, [
                              n("p", [
                                t._v(
                                  "The creation, unchanged since the Romans times, is a long process cutting of the rough marble, reducing it to morsels, drawing of the illustration whose shadows will express the depth of the piece, positioning of minuscule pieces, pouring of the cement, unmodoling, and finally polished. This is the extensive time it takes for a stone face to come to life."
                                ),
                              ]),
                              t._v(" "),
                              n("h2", [
                                t._v(
                                  "Jean Pierre often says that the expression of every face that hangs on the walls of his atelier seems to change upon each visit."
                                ),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "main__box--half" }, [
                            n("div", {
                              staticClass: "main__box--imgFull img-5",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "c0679ae4",
          null
        );
      e.default = component.exports;
    },
  },
]);
