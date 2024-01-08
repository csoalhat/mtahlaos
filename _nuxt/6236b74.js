(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    164: function (t, e, o) {
      var content = o(166);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(23).default)("76571ac2", content, !0, { sourceMap: !1 });
    },
    165: function (t, e, o) {
      "use strict";
      var l = o(164);
      o.n(l).a;
    },
    166: function (t, e, o) {
      (e = o(22)(!1)).push([
        t.i,
        ".navigation[data-v-fb5b1488]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;align-items:stretch;align-content:flex-start}.navigation--logo[data-v-fb5b1488]{position:fixed;bottom:6%;z-index:1;left:2%}.navigation--logo img[data-v-fb5b1488]{width:47px}@media screen and (max-width:950px){.navigation--logo[data-v-fb5b1488]{bottom:3%}.navigation--logo img[data-v-fb5b1488]{width:36px}}.navigation #navigation--toggle[data-v-fb5b1488]{display:block;position:fixed;top:6%;left:3%;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:950px){.navigation #navigation--toggle[data-v-fb5b1488]{top:3%}}#navigation--toggle input[data-v-fb5b1488]{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}#navigation--toggle span[data-v-fb5b1488]{display:block;width:40px;height:5px;margin-bottom:6px;position:relative;background:#000;border-radius:3px;z-index:1;transform-origin:4px 0;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}@media screen and (max-width:950px){#navigation--toggle span[data-v-fb5b1488]{width:32px;height:3px}}#navigation--toggle span[data-v-fb5b1488]:first-child{transform-origin:0 0}#navigation--toggle span[data-v-fb5b1488]:nth-last-child(2){transform-origin:0 100%}#navigation--toggle input:checked~span[data-v-fb5b1488]{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#fff}#navigation--toggle input:checked~span[data-v-fb5b1488]:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(.2)}#navigation--toggle input:checked~span[data-v-fb5b1488]:nth-last-child(2){transform:rotate(-45deg) translateY(-1px)}#menu[data-v-fb5b1488]{position:fixed;width:100vw;height:100vh;top:0;left:0;padding:125px 50px 50px;text-align:center;background-color:rgba(34,33,26,.8);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0 0;transform:translate(-100%);transition:transform .5s cubic-bezier(.77,.2,.05,1)}#menu a[data-v-fb5b1488]{text-decoration:none;color:#fff}#menu li[data-v-fb5b1488]{padding:10px 0;font-size:22px}#menu li svg[data-v-fb5b1488]{color:rgba(34,33,26,.8);font-size:1.5rem}#navigation--toggle input:checked~ul[data-v-fb5b1488]{transform:none;top:0;left:0}",
        "",
      ]),
        (t.exports = e);
    },
    168: function (t, e, o) {
      var content = o(175);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(23).default)("4ef91139", content, !0, { sourceMap: !1 });
    },
    171: function (t, e, o) {
      "use strict";
      o(165);
      var l = o(24),
        component = Object(l.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "nav",
              { staticClass: "navigation", attrs: { role: "navigation" } },
              [
                o(
                  "div",
                  {
                    staticClass: "navigation--menu",
                    attrs: { id: "navigation--toggle" },
                  },
                  [
                    o("input", { attrs: { type: "checkbox" } }),
                    t._v(" "),
                    o("span"),
                    t._v(" "),
                    o("span"),
                    t._v(" "),
                    o("span"),
                    t._v(" "),
                    o(
                      "ul",
                      { attrs: { id: "menu" } },
                      [
                        o("nuxt-link", { attrs: { to: "/" } }, [
                          o("li", [t._v("Home")]),
                        ]),
                        t._v(" "),
                        o("nuxt-link", { attrs: { to: "/about" } }, [
                          o("li", [t._v("About")]),
                        ]),
                        t._v(" "),
                        o("nuxt-link", { attrs: { to: "/gallery" } }, [
                          o("li", [t._v("Gallery")]),
                        ]),
                        t._v(" "),
                        o(
                          "li",
                          [
                            o(
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
                                o("font-awesome-icon", {
                                  attrs: { icon: ["fab", "facebook-f"] },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            o(
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
                                o("font-awesome-icon", {
                                  attrs: { icon: ["fas", "at"] },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            o(
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
                                o("font-awesome-icon", {
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
                o(
                  "div",
                  { staticClass: "navigation--logo" },
                  [
                    o("nuxt-link", { attrs: { to: "/" } }, [
                      o("img", {
                        attrs: {
                          src: "https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/small-logo-black.png",
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
    174: function (t, e, o) {
      "use strict";
      var l = o(168);
      o.n(l).a;
    },
    175: function (t, e, o) {
      (e = o(22)(!1)).push([
        t.i,
        "body[data-v-0a5988c2]{margin:0;padding:0}.gallery-1[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-1.jpg)}.gallery-1[data-v-0a5988c2],.gallery-2[data-v-0a5988c2]{background-position:50%}.gallery-2[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-2.jpg)}.gallery-3[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-3.jpg)}.gallery-3[data-v-0a5988c2],.gallery-4[data-v-0a5988c2]{background-position:50%}.gallery-4[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-4.jpg)}.gallery-5[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-5.jpg)}.gallery-5[data-v-0a5988c2],.gallery-6[data-v-0a5988c2]{width:100%;height:auto;background-position:50%}.gallery-6[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-6.jpg)}.gallery-7[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-7.jpg);width:100%;height:auto;background-position:50%}.gallery-8[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-8.jpg);background-position:100% 100%;background-size:cover}.gallery-9[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-9.jpg)}.gallery-9[data-v-0a5988c2],.gallery-10[data-v-0a5988c2]{background-size:cover;background-position:50%}.gallery-10[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-10.jpg);width:100%;margin:0}.gallery-11[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-11.jpg);width:100%;background-size:cover;margin:0}.gallery-12[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-12.jpg);background-position:50%;background-size:cover}.gallery-13[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-13.jpg);background-position:50%}.gallery-14[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-14.jpg);height:100%;background-size:cover}.gallery-15[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-15.jpg);background-size:auto}.gallery-15[data-v-0a5988c2],.gallery-16[data-v-0a5988c2]{width:100%;height:auto;background-position:50%}.gallery-16[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-16.jpg)}.gallery-17[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-17.jpg);background-size:auto}.gallery-17[data-v-0a5988c2],.gallery-19[data-v-0a5988c2]{width:100%;height:auto;background-position:50%}.gallery-19[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-19.jpg)}.gallery-20[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-20.jpg)}.gallery-20[data-v-0a5988c2],.gallery-21[data-v-0a5988c2]{width:100%;height:auto;background-position:50%}.gallery-21[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-21.jpg)}.gallery-22[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-22.jpg);width:100%;height:auto;background-position:50%}.gallery-23[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-23.jpg)}.gallery-23[data-v-0a5988c2],.gallery-24[data-v-0a5988c2]{background-position:50%;background-size:cover}.gallery-24[data-v-0a5988c2]{background-image:url(https://mosaiquetahlaos.s3.eu-north-1.amazonaws.com/mosaique-tahlaos-gallery-24.jpg)}.block[data-v-0a5988c2]{position:relative;scroll-behavior:smooth;overflow:auto;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;float:right}.block[data-v-0a5988c2],.block .section[data-v-0a5988c2]{width:100%;height:100vh}.block .section[data-v-0a5988c2]{scroll-snap-align:start;overflow:hidden}.block .section .main[data-v-0a5988c2]{display:flex;height:100vh;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.block .section .main__container[data-v-0a5988c2]{width:90%;height:100vh;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center}@media screen and (max-width:959px){.block .section .main__container[data-v-0a5988c2]{width:100%}}.block .section .main__box[data-v-0a5988c2]{width:100%;height:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:flex-start;align-content:space-between}.block .section .main__box--half[data-v-0a5988c2]{height:100%;display:flex;flex-direction:column;justify-content:space-between;width:50vw;padding:2rem 0;justify-content:center}.block .section .main__box--full[data-v-0a5988c2]{height:100%;display:flex;flex-direction:row;justify-content:space-evenly;width:100%}.block .section .main__box--mobile[data-v-0a5988c2]{height:100%;width:80%}.block .section .main__box--mobile .main__box-image[data-v-0a5988c2]{height:22%;width:100%;background-position:50%;background-size:cover}.block .section .main__box--mobile .main__box-image.gallery-15[data-v-0a5988c2]{background-size:auto}.block .section .main__box-image[data-v-0a5988c2]{background-size:cover;height:100%;background-repeat:no-repeat;margin:1rem;display:flex}.block .section .main__box-image .gallery-10[data-v-0a5988c2],.block .section .main__box-image .gallery-11[data-v-0a5988c2]{margin:0;background-size:cover}.block .section .main__box-image .gallery-11[data-v-0a5988c2]{margin-left:1rem}.block .section .main__box-image.gallery-8[data-v-0a5988c2],.block .section .main__box-image.gallery-9[data-v-0a5988c2],.block .section .main__box-image.gallery-12[data-v-0a5988c2]{background-size:cover}",
        "",
      ]),
        (t.exports = e);
    },
    181: function (t, e, o) {
      "use strict";
      o.r(e);
      var l = {
          components: { NavigationBlack: o(171).a },
          transition: "intro",
        },
        n = (o(174), o(24)),
        component = Object(n.a)(
          l,
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
                o = t._self._c || e;
              return o("div", { staticClass: "block" }, [
                o("div", { staticClass: "section" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o(
                        "div",
                        { staticClass: "main__box hidden-sm-and-down" },
                        [
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-1",
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "main__box-image gallery-3",
                            }),
                          ]),
                          t._v(" "),
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-4",
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "main__box-image gallery-2",
                            }),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "main__box hidden-md-and-up" }, [
                        o("div", { staticClass: "main__box--mobile" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-1",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-3",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-4",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-2",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o(
                        "div",
                        { staticClass: "main__box hidden-sm-and-down" },
                        [
                          o("div", { staticClass: "main__box--full" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-5",
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "main__box-image gallery-6",
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "main__box-image gallery-7",
                            }),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "main__box hidden-md-and-up" }, [
                        o("div", { staticClass: "main__box--mobile" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-5",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-6",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-7",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-19",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o(
                        "div",
                        { staticClass: "main__box hidden-sm-and-down" },
                        [
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-13",
                            }),
                          ]),
                          t._v(" "),
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-14",
                            }),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "main__box hidden-md-and-up" }, [
                        o("div", { staticClass: "main__box--mobile" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-14",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-10",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-11",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-20",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o(
                        "div",
                        { staticClass: "main__box hidden-sm-and-down" },
                        [
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-8",
                            }),
                            t._v(" "),
                            o("div", { staticClass: "main__box-image" }, [
                              o("div", {
                                staticClass: "main__box-image gallery-10",
                              }),
                              t._v(" "),
                              o("div", {
                                staticClass: "main__box-image gallery-11",
                              }),
                            ]),
                          ]),
                          t._v(" "),
                          o("div", { staticClass: "main__box--half" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-9",
                            }),
                            t._v(" "),
                            o("div", {
                              staticClass: "main__box-image gallery-12",
                            }),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "main__box hidden-md-and-up" }, [
                        o("div", { staticClass: "main__box--mobile" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-13",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-12",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-8",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-9",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o(
                        "div",
                        { staticClass: "main__box hidden-sm-and-down" },
                        [
                          o("div", { staticClass: "main__box--full" }, [
                            o("div", {
                              staticClass: "main__box-image gallery-19",
                            }),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "main__box hidden-md-and-up" }, [
                        o("div", { staticClass: "main__box--mobile" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-15",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-17",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-23",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-24",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section hidden-sm-and-down" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o("div", { staticClass: "main__box" }, [
                        o("div", { staticClass: "main__box--full" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-15",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-16",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-17",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section hidden-sm-and-down" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o("div", { staticClass: "main__box" }, [
                        o("div", { staticClass: "main__box--full" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-20",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-21",
                          }),
                          t._v(" "),
                          o("div", {
                            staticClass: "main__box-image gallery-22",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("div", { staticClass: "section hidden-sm-and-down" }, [
                  o("div", { staticClass: "main" }, [
                    o("div", { staticClass: "main__container" }, [
                      o("div", { staticClass: "main__box" }, [
                        o("div", { staticClass: "main__box--half" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-23",
                          }),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "main__box--half" }, [
                          o("div", {
                            staticClass: "main__box-image gallery-24",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "0a5988c2",
          null
        );
      e.default = component.exports;
    },
  },
]);
