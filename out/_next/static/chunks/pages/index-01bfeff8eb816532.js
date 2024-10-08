(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(5012);
        },
      ]);
    },
    5012: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return tw;
          },
        });
      var i = r(5893),
        n = r(8128),
        o = r(2699),
        s = r(508);
      let a = {
          auto: 'auto',
          none: '0px',
          xxs: '4px',
          xs: '8px',
          sm: '16px',
          md: '24px',
          lg: '32px',
          xl: '48px',
          xxl: '64px',
        },
        l = (e) => a[e],
        d = (e) => (0, o.gh)('padding', e, l),
        c = (e) => (0, o.gh)('padding-top', e, l),
        x = (e) => (0, o.gh)('padding-bottom', e, l),
        h = (e) => (0, o.gh)('padding-left', e, l),
        p = (e) => (0, o.gh)('padding-right', e, l),
        g = (e) =>
          (0, s.iv)(
            ['', ' ', ''],
            (0, o.gh)('padding-left', e, l),
            (0, o.gh)('padding-right', e, l),
          ),
        m = (e) =>
          (0, s.iv)(
            ['', ' ', ''],
            (0, o.gh)('padding-top', e, l),
            (0, o.gh)('padding-bottom', e, l),
          ),
        $ = (e) => (0, o.gh)('margin', e, l),
        f = (e) => (0, o.gh)('margin-top', e, l),
        u = (e) => (0, o.gh)('margin-bottom', e, l),
        j = (e) => (0, o.gh)('margin-left', e, l),
        b = (e) => (0, o.gh)('margin-right', e, l),
        k = (e) =>
          (0, s.iv)(
            ['', ' ', ''],
            (0, o.gh)('margin-left', e, l),
            (0, o.gh)('margin-right', e, l),
          ),
        v = (e) =>
          (0, s.iv)(
            ['', ' ', ''],
            (0, o.gh)('margin-top', e, l),
            (0, o.gh)('margin-bottom', e, l),
          ),
        w = (e) => (0, o.gh)('border-radius', e, l),
        y = (e) => (0, o.gh)('display', e),
        C = (e) => (0, o.gh)('flex', e),
        L = (e) => (0, o.gh)('flex-wrap', e),
        M = (e) => (0, o.gh)('flex-direction', e),
        I = (e) => (0, o.gh)('align-items', e),
        _ = (e) => (0, o.gh)('justify-content', e),
        S = (e) => ('number' == typeof e ? ''.concat(e, 'px') : e),
        z = (e) => (0, o.gh)('width', e, S),
        Z = (e) => (0, o.gh)('min-width', e, S),
        T = (e) => (0, o.gh)('max-width', e, S),
        P = (e) => (0, o.gh)('height', e, S),
        F = (e) => (0, o.gh)('min-height', e, S),
        N = (e) => (0, o.gh)('max-height', e, S),
        D = (e) => (0, o.gh)('opacity', e),
        R = (e) => (0, o.gh)('overflow', e),
        A = (e) => (0, o.gh)('position', e),
        O = (e) => (0, o.gh)('text-align', e),
        E = s.ZP.div.withConfig({ componentId: 'sc-c066f7db-0' })(
          ['box-sizing:border-box;', ''],
          (e) => {
            let t = (0, s.iv)(['']);
            return (
              e.$backgroundColor &&
                (t = (0, s.iv)(['', '', ''], t, (0, n.Cz)(e.$backgroundColor))),
              e.$borderRadius &&
                (t = (0, s.iv)(['', '', ''], t, w(e.$borderRadius))),
              e.$color && (t = (0, s.iv)(['', '', ''], t, (0, n.$_)(e.$color))),
              e.$display && (t = (0, s.iv)(['', '', ''], t, y(e.$display))),
              e.$flex && (t = (0, s.iv)(['', '', ''], t, C(e.$flex))),
              e.$flexDirection &&
                (t = (0, s.iv)(['', '', ''], t, M(e.$flexDirection))),
              e.$flexWrap && (t = (0, s.iv)(['', '', ''], t, L(e.$flexWrap))),
              e.$alignItems &&
                (t = (0, s.iv)(['', '', ''], t, I(e.$alignItems))),
              e.$justifyContent &&
                (t = (0, s.iv)(['', '', ''], t, _(e.$justifyContent))),
              void 0 !== e.$width &&
                (t = (0, s.iv)(['', '', ''], t, z(e.$width))),
              void 0 !== e.$maxWidth &&
                (t = (0, s.iv)(['', '', ''], t, T(e.$maxWidth))),
              void 0 !== e.$minWidth &&
                (t = (0, s.iv)(['', '', ''], t, Z(e.$minWidth))),
              void 0 !== e.$height &&
                (t = (0, s.iv)(['', '', ''], t, P(e.$height))),
              void 0 !== e.$maxHeight &&
                (t = (0, s.iv)(['', '', ''], t, N(e.$maxHeight))),
              void 0 !== e.$minHeight &&
                (t = (0, s.iv)(['', '', ''], t, F(e.$minHeight))),
              e.$margin && (t = (0, s.iv)(['', '', ''], t, $(e.$margin))),
              e.$marginBottom &&
                (t = (0, s.iv)(['', '', ''], t, u(e.$marginBottom))),
              e.$marginLeft &&
                (t = (0, s.iv)(['', '', ''], t, j(e.$marginLeft))),
              e.$marginRight &&
                (t = (0, s.iv)(['', '', ''], t, b(e.$marginRight))),
              e.$marginTop && (t = (0, s.iv)(['', '', ''], t, f(e.$marginTop))),
              e.$marginX && (t = (0, s.iv)(['', '', ''], t, k(e.$marginX))),
              e.$marginY && (t = (0, s.iv)(['', '', ''], t, v(e.$marginY))),
              e.$padding && (t = (0, s.iv)(['', '', ''], t, d(e.$padding))),
              e.$paddingBottom &&
                (t = (0, s.iv)(['', '', ''], t, x(e.$paddingBottom))),
              e.$paddingLeft &&
                (t = (0, s.iv)(['', '', ''], t, h(e.$paddingLeft))),
              e.$paddingRight &&
                (t = (0, s.iv)(['', '', ''], t, p(e.$paddingRight))),
              e.$paddingTop &&
                (t = (0, s.iv)(['', '', ''], t, c(e.$paddingTop))),
              e.$paddingX && (t = (0, s.iv)(['', '', ''], t, g(e.$paddingX))),
              e.$paddingY && (t = (0, s.iv)(['', '', ''], t, m(e.$paddingY))),
              e.$opacity && (t = (0, s.iv)(['', '', ''], t, D(e.$opacity))),
              e.$overflow && (t = (0, s.iv)(['', '', ''], t, R(e.$overflow))),
              e.$position && (t = (0, s.iv)(['', '', ''], t, A(e.$position))),
              t
            );
          },
        ),
        q = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return e.toLocaleString('en-UK', { minimumIntegerDigits: t });
        },
        W = [
          'START',
          'JOIN_MEETING',
          'INTRO_1',
          'INTRO_2',
          'INTRO_3',
          'INTRO_4',
          'INTRO_5',
          'INTRO_6',
          'INTRO_7',
          'INTRO_8',
          'SLIDES_1',
          'SLIDES_2',
          'SLIDES_3',
          'SLIDES_4',
          'SLIDES_5',
          'END_1',
          'END_2',
          'END_3',
          'END_4',
        ],
        B = {
          INTRO_1: 'Hi there! \uD83D\uDC4B',
          INTRO_2: 'Thanks for joining me here today.',
          INTRO_3: 'My name is Mary',
          INTRO_4: "and I'm a front-end engineer.",
          INTRO_5: "I'll only take a few minutes of your time",
          INTRO_6: 'to showcase a few things that',
          INTRO_7: "I've been up to until today.",
          INTRO_8: "If you're ready, shall we start?",
          END_1: "And that's it!",
          END_2: 'If you have any questions',
          END_3: 'feel free to drop me a message.',
          END_4: 'Otherwise, see you next time! \uD83D\uDC4B',
        };
      var Y = r(7294),
        X = r(7248),
        H = r(6817),
        G = r(2758),
        J = r(5720),
        U = r(245),
        K = r(4868);
      let V = {
          meeting: "'Fredoka', sans-serif",
          heading: "'Merriweather', serif",
          text: "'Fredoka', sans-serif",
        },
        Q = (e) => V[e],
        ee = (e) => 'font-family: '.concat(Q(e), ';'),
        et = (e) => {
          let {
            $color: t,
            $size: r,
            $variant: n,
            $fontWeight: o,
            $opacity: s,
            $align: a,
            ...l
          } = e;
          return (0, i.jsx)(es, {
            $color: t,
            $opacity: s,
            $size: r,
            $variant: n,
            $fontWeight: o,
            $align: a,
            ...l,
          });
        },
        er = {
          xxl: '48px',
          xl: '28px',
          lg: '20px',
          md: '16px',
          sm: '14px',
          xs: '12px',
        },
        ei = {
          xxl: '64px',
          xl: '36px',
          lg: '30px',
          md: '26px',
          sm: '22px',
          xs: '18px',
        },
        en = (e) => er[e],
        eo = (e) => ei[e],
        es = s.ZP.p.withConfig({ componentId: 'sc-cb013ad-0' })(
          [
            'margin:0;padding:0;',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' strong{font-weight:500;}',
          ],
          (e) => {
            let { $color: t = 'dark', $opacity: r } = e;
            return void 0 !== r
              ? (0, s.iv)(['color:', ';'], (0, n.m4)(t, r))
              : (0, n.$_)(t);
          },
          (e) => {
            let { $size: t } = e;
            return (0, o.gh)('font-size', t, en);
          },
          (e) => {
            let { $size: t } = e;
            return (0, o.gh)('line-height', t, eo);
          },
          (e) => {
            let { $variant: t } = e;
            return ee(t);
          },
          (e) => {
            let { $align: t = 'left' } = e;
            return O(t);
          },
          (e) => {
            let { $fontWeight: t } = e;
            switch (t) {
              case 'light':
                return 'font-weight: 300;';
              case 'bold':
                return 'font-weight: 500;';
              default:
                return 'font-weight: 400;';
            }
          },
        );
      var ea = r(6637);
      let el = (e) => {
          let {
            label: t,
            isImportantAction: r,
            needsAttention: n,
            children: o,
            ...s
          } = e;
          return (0, i.jsxs)(ex, {
            $isImportantAction: r,
            ...s,
            children: [
              o,
              (0, i.jsx)(ec, {
                $needsAttention: n,
                children: (0, i.jsx)(et, {
                  $variant: 'meeting',
                  $size: 'xs',
                  $color: 'dark',
                  $fontWeight: 'bold',
                  $align: 'center',
                  as: 'span',
                  children: t,
                }),
              }),
            ],
          });
        },
        ed = (0, s.F4)([
          '0%{transform:rotate(0deg) scale(1);}20%{transform:rotate(-10deg) scale(1.15);}40%{transform:rotate(15deg) scale(1.2);}60%{transform:rotate(-5deg) scale(1.15);}80%{transform:rotate(3deg) scale(1);}100%{transform:rotate(0deg) scale(1);}',
        ]),
        ec = s.ZP.span.withConfig({ componentId: 'sc-c643a1b4-0' })(
          [
            'letter-spacing:0.1em;text-transform:uppercase;position:absolute;top:calc(100% + ',
            ');opacity:',
            ';transition:0.25s ease-in;',
            '',
          ],
          l('xxs'),
          (e) => {
            let { $needsAttention: t } = e;
            return t ? 1 : 0;
          },
          (e) => {
            let { $needsAttention: t } = e;
            return t
              ? (0, s.iv)(['animation:', ' 1.2s ease-in 3s 3;'], ed)
              : '';
          },
        ),
        ex = s.ZP.button.withConfig({ componentId: 'sc-c643a1b4-1' })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' ',
            ' border:2px solid ',
            ';outline:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;position:relative;transition:0.25s ease-in;&:disabled{cursor:not-allowed;}&:not(:disabled):hover{background-color:',
            ';}&:not(:disabled):hover ',
            '{opacity:1;transform:scale(1.15);}',
          ],
          (e) => {
            let { $isImportantAction: t } = e;
            return t ? (0, n.Cz)('pink') : 'background-color: transparent;';
          },
          (0, n.$_)('dark'),
          w('md'),
          P(l('xl')),
          z(l('xl')),
          (0, n.Lq)('dark'),
          (e) => {
            let { $isImportantAction: t } = e;
            return t
              ? (0, ea._j)(0.05, (0, n.Lq)('pink'))
              : (0, n.Lq)('yellow');
          },
          ec,
        ),
        eh = s.ZP.div.withConfig({ componentId: 'sc-2e8b6bae-0' })(
          [
            'display:inline-flex;flex-wrap:wrap;',
            ' > *:not(:first-child){',
            '}',
          ],
          (e) => {
            let { $alignY: t = 'center' } = e;
            return I(t);
          },
          (e) => {
            let { $space: t } = e;
            return j(t);
          },
        );
      var ep = r(5124);
      let eg = () =>
          (0, i.jsx)(et, {
            $variant: 'meeting',
            $color: 'dark',
            $size: 'md',
            children: (0, i.jsxs)(eh, {
              $space: 'xs',
              $alignY: 'center',
              as: 'span',
              children: [
                (0, i.jsx)('span', { children: '1:1 Intro' }),
                (0, i.jsx)(ep.Z, {}),
              ],
            }),
          }),
        em = (0, s.F4)(['from{opacity:0;}to{opacity:1;}']),
        e$ = (e) => {
          let {
            currentStepIndex: t,
            onStepIndexChange: r,
            onToggleChatWindow: n,
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(ew, {}),
              (0, i.jsx)(ev, {
                children: (0, i.jsxs)(E, {
                  $display: 'flex',
                  $alignItems: 'center',
                  $width: '100%',
                  children: [
                    (0, i.jsxs)(E, {
                      $display: 'flex',
                      $alignItems: 'center',
                      $flex: { xs: 1, lg: 3 / 4 },
                      children: [
                        (0, i.jsx)(E, {
                          $display: { xs: 'none', lg: 'block' },
                          $flex: 1 / 3,
                          children: (0, i.jsxs)(eh, {
                            $space: 'sm',
                            children: [
                              (0, i.jsx)(ef, {}),
                              (0, i.jsx)(et, {
                                $variant: 'meeting',
                                $color: 'dark',
                                $size: 'md',
                                $opacity: 0.6,
                                children: '|',
                              }),
                              (0, i.jsx)(eg, {}),
                            ],
                          }),
                        }),
                        (0, i.jsx)(E, {
                          $flex: { xs: 1, lg: 2 / 3 },
                          $display: 'flex',
                          $justifyContent: 'center',
                          children: (0, i.jsx)(eu, {
                            currentStepIndex: t,
                            onBack: () => {
                              t > 2 ? r(t - 1) : r(0), n(!1);
                            },
                            onNext: t < W.length - 1 ? () => r(t + 1) : void 0,
                            onOpenChatWindow: () => n(!0),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(E, {
                      $display: { xs: 'none', lg: 'flex' },
                      $flex: 1 / 4,
                      $justifyContent: 'flex-end',
                      children: (0, i.jsx)(ej, { onStepIndexChange: r }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ef = () => {
          let [e, t] = (0, Y.useState)(new Date()),
            r = () => {
              t(new Date());
            };
          return (
            (0, Y.useEffect)(() => {
              let e = setInterval(r, 2e4);
              return () => {
                clearInterval(e);
              };
            }, []),
            (0, i.jsxs)(et, {
              $variant: 'meeting',
              $color: 'dark',
              $size: 'md',
              children: [q(e.getHours()), ':', q(e.getMinutes())],
            })
          );
        },
        eu = (e) => {
          let {
              currentStepIndex: t,
              onBack: r,
              onNext: n,
              onOpenChatWindow: o,
            } = e,
            s = W[t];
          return (0, i.jsxs)(eh, {
            $space: 'sm',
            children: [
              (0, i.jsx)(ey, {
                $delay: 0,
                children: (0, i.jsx)(el, {
                  isImportantAction: !0,
                  disabled: !0,
                  label: 'Nope',
                  children: (0, i.jsx)(X.Z, {}),
                }),
              }),
              (0, i.jsx)(ey, {
                $delay: 0.1,
                children: (0, i.jsx)(el, {
                  isImportantAction: !0,
                  disabled: !0,
                  label: 'Nope',
                  children: (0, i.jsx)(H.Z, {}),
                }),
              }),
              (0, i.jsx)(ey, {
                $delay: 0.2,
                children: (0, i.jsx)(el, {
                  onClick: r,
                  disabled: !r,
                  label: 'Back',
                  children: (0, i.jsx)(G.Z, {}),
                }),
              }),
              (0, i.jsx)(ey, {
                $delay: 0.3,
                children: (0, i.jsx)(el, {
                  onClick: n,
                  disabled: !n,
                  label: 'Next',
                  needsAttention: 'INTRO_1' === s,
                  children: (0, i.jsx)(J.Z, {}),
                }),
              }),
              (0, i.jsx)(ey, {
                $delay: 0.4,
                children: (0, i.jsx)(el, {
                  onClick: o,
                  label: 'Message',
                  needsAttention: 'END_3' === s,
                  children: (0, i.jsx)(U.Z, {}),
                }),
              }),
            ],
          });
        },
        ej = (e) => {
          let { onStepIndexChange: t } = e;
          return (0, i.jsx)(el, {
            isImportantAction: !0,
            onClick: () => t(0),
            label: 'Exit',
            children: (0, i.jsx)(eC, { children: (0, i.jsx)(K.Z, {}) }),
          });
        },
        eb = (0, s.F4)(['from{bottom:-', 'px;}to{bottom:0;}'], 120),
        ek = (0, s.F4)([
          '0%{transform:translateY(200px);}28%{transform:translateY(-100px);}65%{transform:translateY(20px);}80%{transform:translateY(-10px);}100%{transform:translateY(0);}',
        ]),
        ev = (0, s.ZP)(E)
          .attrs({
            $padding: { xs: 'sm', lg: 'md' },
            $display: 'flex',
            $alignItems: 'center',
            $height: 120,
          })
          .withConfig({ componentId: 'sc-5258e137-0' })([
          'position:absolute;left:0;right:0;',
        ]),
        ew = (0, s.ZP)(E)
          .attrs({ $height: 120 })
          .withConfig({ componentId: 'sc-5258e137-1' })(
          [
            'animation:',
            ' 0.3s ease-in;border:3px solid ',
            ';border-bottom:none;',
            ' background-color:#fef9ec;border-bottom-left-radius:0;border-bottom-right-radius:0;position:absolute;left:0;right:0;',
          ],
          eb,
          (0, n.Lq)('dark'),
          w('md'),
        ),
        ey = s.ZP.div.withConfig({ componentId: 'sc-5258e137-2' })(
          [
            'animation:',
            ' 1.3s ease-out ',
            's forwards;transform:translateY(200px);',
          ],
          ek,
          (e) => {
            let { $delay: t } = e;
            return t;
          },
        ),
        eC = s.ZP.div.withConfig({ componentId: 'sc-5258e137-3' })(
          ['animation:', ' 0.2s ease-in;'],
          em,
        );
      var eL = r(8268),
        eM = r(2774),
        eI = r(1414);
      let e_ = (e) => {
          let {
            $color: t,
            $size: r,
            $variant: n,
            $opacity: o,
            $align: s,
            ...a
          } = e;
          return (0, i.jsx)(eP, {
            $color: t,
            $opacity: o,
            $size: r,
            $variant: n,
            $align: s,
            ...a,
          });
        },
        eS = { lg: '48px', md: '32px', sm: '28px', xs: '20px', xxs: '16px' },
        ez = { lg: '64px', md: '46px', sm: '42px', xs: '24px', xxs: '18px' },
        eZ = (e) => eS[e],
        eT = (e) => ez[e],
        eP = s.ZP.h1.withConfig({ componentId: 'sc-45e39ea9-0' })(
          ['margin:0;padding:0;', ' ', ' ', ' ', ' ', ' ', ''],
          (e) => {
            let { $color: t = 'dark', $opacity: r } = e;
            return void 0 !== r
              ? (0, s.iv)(['color:', ';'], (0, n.m4)(t, r))
              : (0, n.$_)(t);
          },
          (e) => {
            let { $size: t } = e;
            return (0, o.gh)('font-size', t, eZ);
          },
          (e) => {
            let { $size: t } = e;
            return (0, o.gh)('line-height', t, eT);
          },
          (e) => {
            let { $variant: t } = e;
            return ee(t);
          },
          (e) => {
            let { $align: t = 'left' } = e;
            return O(t);
          },
          (e) => {
            let { $variant: t } = e;
            return 'meeting' === t
              ? (0, s.iv)(['font-weight:600;'])
              : (0, s.iv)(['font-weight:900;letter-spacing:0.05em;']);
          },
        ),
        eF = s.ZP.div.withConfig({ componentId: 'sc-da7cadeb-0' })(
          [
            'display:flex;flex-direction:column;',
            ' > *:not(:first-child){',
            '}',
          ],
          (e) => {
            let { $alignX: t } = e;
            return t ? I(t) : '';
          },
          (e) => {
            let { $space: t } = e;
            return f(t);
          },
        ),
        eN = Y.forwardRef(function (e, t) {
          let r = (0, Y.useRef)(null),
            o = (0, Y.useRef)(null),
            [s, a] = (0, Y.useState)(!1),
            [l, d] = (0, Y.useState)(!1),
            c = () => {
              var e;
              null == r ||
                null === (e = r.current) ||
                void 0 === e ||
                e.close(),
                a(!1),
                d(!1);
            };
          return (
            (0, Y.useImperativeHandle)(t, () => ({
              open: () => {
                var e;
                null == r ||
                  null === (e = r.current) ||
                  void 0 === e ||
                  e.showModal();
              },
              close: c,
            })),
            (0, i.jsx)(eE, {
              ref: r,
              onCancel: c,
              children: (0, i.jsx)('form', {
                ref: o,
                onSubmit: async (e) => {
                  e.preventDefault();
                  try {
                    a(!0),
                      await fetch('https://submit-form.com/bUhPVZqrG', {
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: 'POST',
                        mode: 'no-cors',
                        referrerPolicy: 'no-referrer',
                        body: new URLSearchParams(
                          new FormData(e.currentTarget),
                        ),
                      }),
                      d(!0),
                      setTimeout(() => {
                        var e;
                        c(),
                          null === (e = o.current) || void 0 === e || e.reset();
                      }, 3e3);
                  } catch (e) {
                    d(!1);
                  } finally {
                    a(!1);
                  }
                },
                style: { height: '100%' },
                children: (0, i.jsxs)(E, {
                  $height: '100%',
                  $padding: { xs: 'md', md: 'lg' },
                  children: [
                    (0, i.jsx)(eK, {
                      children: (0, i.jsx)(el, {
                        onClick: c,
                        disabled: s,
                        label: 'Close',
                        type: 'button',
                        children: (0, i.jsx)(eL.Z, {}),
                      }),
                    }),
                    (0, i.jsxs)(E, {
                      $display: 'flex',
                      $flexDirection: 'column',
                      $justifyContent: 'center',
                      $height: '100%',
                      children: [
                        (0, i.jsx)(E, {
                          $display: 'flex',
                          $justifyContent: 'center',
                          children: (0, i.jsx)(eM.Z, {
                            color: (0, n.Lq)('dark'),
                            size: 56,
                            strokeWidth: 1.5,
                          }),
                        }),
                        (0, i.jsx)(e_, {
                          as: 'h3',
                          $variant: 'meeting',
                          $size: 'sm',
                          $color: 'dark',
                          $align: 'center',
                          children: 'Leave a message',
                        }),
                        (0, i.jsx)(E, {
                          $marginTop: 'lg',
                          children: (0, i.jsxs)(eF, {
                            $space: 'md',
                            children: [
                              (0, i.jsxs)(eF, {
                                $space: 'xxs',
                                children: [
                                  (0, i.jsx)('label', {
                                    htmlFor: 'name',
                                    children: (0, i.jsx)(et, {
                                      $size: 'md',
                                      $variant: 'meeting',
                                      $color: 'black',
                                      $fontWeight: 'bold',
                                      children: 'Name',
                                    }),
                                  }),
                                  (0, i.jsx)(eH, {
                                    type: 'text',
                                    id: 'name',
                                    name: 'name',
                                    placeholder: 'Rachel Green',
                                    required: !0,
                                    disabled: s,
                                  }),
                                ],
                              }),
                              (0, i.jsxs)(eF, {
                                $space: 'xxs',
                                children: [
                                  (0, i.jsx)('label', {
                                    htmlFor: 'email',
                                    children: (0, i.jsx)(et, {
                                      $size: 'md',
                                      $variant: 'meeting',
                                      $color: 'black',
                                      $fontWeight: 'bold',
                                      children: 'E-mail address',
                                    }),
                                  }),
                                  (0, i.jsx)(eH, {
                                    type: 'email',
                                    id: 'email',
                                    name: 'email',
                                    placeholder: 'your@email.com',
                                    required: !0,
                                    disabled: s,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsxs)(E, {
                          $display: 'flex',
                          $flexDirection: 'column',
                          $flex: 1,
                          $marginTop: 'md',
                          children: [
                            (0, i.jsx)('label', {
                              htmlFor: 'message',
                              children: (0, i.jsx)(et, {
                                $size: 'md',
                                $variant: 'meeting',
                                $color: 'black',
                                $fontWeight: 'bold',
                                children: 'Message',
                              }),
                            }),
                            (0, i.jsx)(E, {
                              $marginTop: 'xxs',
                              $flex: 1,
                              children: (0, i.jsx)(eG, {
                                id: 'message',
                                name: 'message',
                                placeholder: 'Write something nice here',
                                required: !0,
                                disabled: s,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(E, {
                          $display: 'flex',
                          $justifyContent: 'center',
                          $marginTop: 'lg',
                          $marginBottom: 'md',
                          children: (0, i.jsx)(eJ, {
                            type: 'submit',
                            disabled: s,
                            'aria-label': 'Send',
                            children: (0, i.jsx)(eU, {
                              children: s
                                ? (0, i.jsx)(E, {
                                    $height: 36,
                                    children: (0, i.jsx)(eY, {
                                      children: (0, i.jsx)(eI.Z, {}),
                                    }),
                                  })
                                : (0, i.jsx)(et, {
                                    $variant: 'meeting',
                                    $size: 'xl',
                                    $color: 'dark',
                                    as: 'span',
                                    children: l ? 'Sent!' : 'Send',
                                  }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l &&
                      (0, i.jsxs)(eW, {
                        children: [
                          (0, i.jsx)(E, {
                            $display: 'flex',
                            $justifyContent: 'center',
                            children: (0, i.jsx)(eI.Z, {
                              color: (0, n.Lq)('dark'),
                              size: 56,
                              strokeWidth: 1.5,
                            }),
                          }),
                          (0, i.jsx)(e_, {
                            $variant: 'meeting',
                            as: 'h3',
                            $size: 'md',
                            $color: 'dark',
                            $align: 'center',
                            children: 'Sent!',
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            })
          );
        }),
        eD = (0, s.F4)([
          'from{transform:translateX(-50%) translateY(110%);}to{transform:translateX(-50%) translateY(0%);}',
        ]),
        eR = (0, s.F4)([
          'from{transform:translateX(-50%) translateY(0%);}to{transform:translateX(-50%) translateY(110%);}',
        ]),
        eA = (0, s.F4)(
          [
            'from{background-color:',
            ';backdrop-filter:blur(0);}to{background-color:',
            ';backdrop-filter:blur(3px);}',
          ],
          (0, n.m4)('white', 0),
          (0, n.m4)('white', 0.3),
        ),
        eO = (0, s.F4)(
          [
            'from{background-color:',
            ';backdrop-filter:blur(3px);}to{background-color:',
            ';backdrop-filter:blur(0);}',
          ],
          (0, n.m4)('white', 0.3),
          (0, n.m4)('white', 0),
        ),
        eE = s.ZP.dialog.withConfig({ componentId: 'sc-cd1a19fb-0' })(
          [
            'animation:',
            ' 0.3s ease-in forwards;',
            ' ',
            ' box-sizing:border-box;border:16px solid ',
            ';border-bottom:none;outline:3px solid ',
            ';border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:0 0 12px 4px ',
            ';padding:0;margin:0;max-height:none;height:auto;width:calc(100% - ',
            ' * 2);max-width:600px;left:50%;bottom:0;transform:translateX(-50%) translateY(110%);transition:0.3s allow-discrete;',
            ' &[open]{animation:',
            ' 0.3s ease-in forwards;}&::backdrop{animation:',
            ' 0.3s ease-in forwards;position:fixed;top:0;bottom:0;left:0;right:0;backdrop-filter:blur(0);background-color:',
            ';transition:0.3s allow-discrete;}&[open]::backdrop{animation:',
            ' 0.3s ease-in forwards;}',
          ],
          eR,
          w('lg'),
          (0, n.Cz)('white'),
          (0, ea.$n)(0.2, (0, n.Lq)('blue')),
          (0, n.Lq)('dark'),
          (0, n.m4)('black', 0.2),
          l('sm'),
          (0, o.uq)({
            xs: (0, s.iv)(['top:', ';'], l('sm')),
            md: (0, s.iv)(['top:', ';'], l('xl')),
          }),
          eD,
          eO,
          (0, n.m4)('white', 0),
          eA,
        ),
        eq = (0, s.F4)(['from{transform:scale(0);}to{transform:scale(1);}']),
        eW = s.ZP.div.withConfig({ componentId: 'sc-cd1a19fb-1' })(
          [
            'animation:',
            ' 0.2s ease-in forwards;background-color:',
            ";backdrop-filter:blur(3px);display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:0;left:0;height:100%;width:100%;transform:scale(0);&::before{content:'';height:200px;width:200px;border-radius:50%;",
            ' border:3px solid ',
            ';box-shadow:0 0 12px 4px ',
            ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;}',
          ],
          eq,
          (0, n.m4)('white', 0.3),
          (0, n.Cz)('white'),
          (0, n.Lq)('dark'),
          (0, n.m4)('black', 0.2),
        ),
        eB = (0, s.F4)([
          '0%{left:4px;opacity:0;}10%{opacity:1;}80%{opacity:1;}90%{left:calc(100% - 28px);opacity:0;}100%{opacity:0;}',
        ]),
        eY = s.ZP.span.withConfig({ componentId: 'sc-cd1a19fb-2' })(
          [
            'animation:',
            ' 3s ease-in infinite;display:flex;align-items:center;position:absolute;left:4px;height:36px;transform:rotate(45deg);',
          ],
          eB,
        ),
        eX = (0, s.iv)(
          [
            '',
            ' ',
            ';',
            ' ',
            ' ',
            ' box-sizing:border-box;font-size:16px;line-height:24px;border:3px solid ',
            ';outline:none;width:100%;transition:0.2s ease-in;&::placeholder{color:',
            ';}&:focus,&:not(:disabled):hover{background-color:',
            ';}&:disabled{background-color:',
            ' !important;border-color:',
            ';cursor:not-allowed;}',
          ],
          w('sm'),
          ee('meeting'),
          (0, n.$_)('dark'),
          m('sm'),
          g('sm'),
          (0, n.Lq)('dark'),
          (0, n.m4)('dark', 0.4),
          (0, n.m4)('blue', 0.1),
          (0, n.m4)('dark', 0.05),
          (0, n.m4)('dark', 0.1),
        ),
        eH = s.ZP.input.withConfig({ componentId: 'sc-cd1a19fb-3' })(
          ['', ''],
          eX,
        ),
        eG = s.ZP.textarea.withConfig({ componentId: 'sc-cd1a19fb-4' })(
          ['', ' height:100%;resize:none;'],
          eX,
        ),
        eJ = s.ZP.button.withConfig({ componentId: 'sc-cd1a19fb-5' })(
          [
            "background:none;border:none;outline:none;padding:0;margin:0;width:200px;min-width:max-content;position:relative;transition:0.45s 0.3s ease-in;&::after{content:'';",
            ' background-color:',
            ';border:3px solid ',
            ';position:absolute;top:8px;bottom:-8px;left:16px;right:16px;z-index:-1;transition:0.1s ease-in;}',
          ],
          w('sm'),
          (0, ea.CD)(0.6, (0, n.Lq)('background'), (0, n.Lq)('pink')),
          (0, n.Lq)('dark'),
        ),
        eU = s.ZP.span.withConfig({ componentId: 'sc-cd1a19fb-6' })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' cursor:pointer;display:inline-block;border:3px solid ',
            ';transition:0.2s ease-in;box-sizing:border-box;width:100%;',
            ':hover &{background-color:',
            ';transform:translateY(-4px);}',
          ],
          w('sm'),
          (0, n.Cz)('pink'),
          g('md'),
          m('xs'),
          (0, n.Lq)('dark'),
          eJ,
          (0, ea._j)(0.05, (0, n.Lq)('pink')),
        ),
        eK = (0, s.ZP)(E)
          .attrs({ $position: 'absolute' })
          .withConfig({ componentId: 'sc-cd1a19fb-7' })(
          ['top:', ';right:', ';'],
          l('sm'),
          l('sm'),
        );
      var eV = r(51);
      let eQ = (e) => {
          let { step: t, onRestart: r } = e,
            n = B[t];
          return n
            ? (0, i.jsxs)(E, {
                $display: 'flex',
                $flexDirection: 'column',
                $alignItems: 'center',
                children: [
                  (0, i.jsx)(
                    e1,
                    {
                      children: (0, i.jsx)(E, {
                        $paddingX: 'sm',
                        $paddingY: 'xxs',
                        children: (0, i.jsx)(et, {
                          $variant: 'meeting',
                          $size: { xs: 'lg', lg: 'xxl' },
                          $color: 'white',
                          $align: 'center',
                          children: n,
                        }),
                      }),
                    },
                    t,
                  ),
                  W.indexOf(t) === W.length - 1 &&
                    (0, i.jsx)(E, {
                      $marginTop: 'xs',
                      children: (0, i.jsx)(el, {
                        isImportantAction: !0,
                        label: 'Again',
                        onClick: r,
                        children: (0, i.jsx)(eV.Z, {}),
                      }),
                    }),
                ],
              })
            : null;
        },
        e0 = (0, s.F4)(['0%{max-width:0px;}100%{max-width:3000px;}']),
        e1 = (0, s.ZP)(E)
          .attrs({ $borderRadius: 'sm' })
          .withConfig({ componentId: 'sc-46ee4eca-0' })(
          ['background-color:', ';', ''],
          (0, n.m4)('dark', 0.5),
          (0, o.uq)({
            lg: (0, s.iv)(
              [
                'white-space:nowrap;overflow:hidden;animation:',
                ' 4s ease-in forwards;',
              ],
              e0,
            ),
          }),
        );
      var e2 = r(2006),
        e5 = r(7811),
        e8 = r(6702),
        e3 = r(9046),
        e9 = r(7327),
        e7 = r(9318),
        e4 = { src: '/_next/static/media/sydney-opera-house.42558573.svg' },
        e6 = { src: '/_next/static/media/hk.f0b91905.svg' },
        te = { src: '/_next/static/media/jp.d11e2922.svg' },
        tt = { src: '/_next/static/media/kr.6358a3d4.svg' };
      let tr = (0, s.ZP)(E)
        .attrs({
          as: 'span',
          $borderRadius: 'xs',
          $paddingX: 'xs',
          $paddingY: 'xxs',
        })
        .withConfig({ componentId: 'sc-1f762ae5-0' })(
        ['display:inline-block;background-color:', ';'],
        (e) => {
          let { $backgroundColor: t } = e;
          return (0, n.m4)(t, 0.2);
        },
      );
      var ti = { src: '/_next/static/media/spaceship.2c814fc4.svg' },
        tn = { src: '/_next/static/media/oneflare.1313ca4a.svg' };
      let to = (e) => {
          let { step: t } = e;
          return (0, i.jsxs)(ta, {
            children: [
              'SLIDES_1' === t &&
                (0, i.jsx)(ts, {
                  heading: 'About me',
                  children: (0, i.jsxs)(eF, {
                    $space: { xs: 'sm', md: 'xl' },
                    $alignX: 'center',
                    children: [
                      (0, i.jsxs)(eF, {
                        $space: 'xs',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)(e2.Z, {
                            stroke: (0, n.Lq)('dark'),
                            height: 32,
                            width: 32,
                          }),
                          (0, i.jsxs)(et, {
                            $variant: 'text',
                            $size: 'lg',
                            $color: 'dark',
                            $align: 'center',
                            children: [
                              (0, i.jsx)('strong', {
                                children: 'Front-end engineer',
                              }),
                              ' with over',
                              ' ',
                              (0, i.jsx)(tr, {
                                $backgroundColor: 'pink',
                                children: '13 years',
                              }),
                              ' ',
                              'experience',
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(eF, {
                        $space: 'xs',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)('div', {
                            children: (0, i.jsx)('img', {
                              src: e4.src,
                              alt: 'Sydney',
                              height: 56,
                              width: 56,
                            }),
                          }),
                          (0, i.jsxs)(et, {
                            $variant: 'text',
                            $size: 'lg',
                            $color: 'dark',
                            $align: 'center',
                            children: [
                              'Based in',
                              ' ',
                              (0, i.jsx)(tr, {
                                $backgroundColor: 'blue',
                                children: 'Sydney, Australia',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(eF, {
                        $space: 'xs',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)(U.Z, {
                            stroke: (0, n.Lq)('dark'),
                            fill: (0, n.m4)('yellow', 0.5),
                            height: 32,
                            width: 32,
                          }),
                          (0, i.jsx)(et, {
                            $variant: 'text',
                            $size: 'lg',
                            $color: 'dark',
                            $align: 'center',
                            children:
                              'Speaks English and Cantonese, writes English only',
                          }),
                        ],
                      }),
                      (0, i.jsxs)(eF, {
                        $space: 'xs',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)(e5.Z, {
                            stroke: (0, n.Lq)('dark'),
                            fill: (0, n.Lq)('red'),
                            height: 32,
                            width: 32,
                          }),
                          (0, i.jsx)(et, {
                            $variant: 'text',
                            $size: 'lg',
                            $color: 'dark',
                            $align: 'center',
                            children: 'Loving remote work',
                          }),
                        ],
                      }),
                      (0, i.jsxs)(eF, {
                        $space: 'xs',
                        $alignX: 'center',
                        children: [
                          (0, i.jsxs)(eh, {
                            $space: 'sm',
                            children: [
                              (0, i.jsx)('div', {
                                children: (0, i.jsx)('img', {
                                  src: e6.src,
                                  alt: 'Hong Kong',
                                  height: 48,
                                  width: 48,
                                }),
                              }),
                              (0, i.jsx)('div', {
                                children: (0, i.jsx)('img', {
                                  src: tt.src,
                                  alt: 'South Korea',
                                  height: 48,
                                  width: 48,
                                }),
                              }),
                              (0, i.jsx)('div', {
                                children: (0, i.jsx)('img', {
                                  src: te.src,
                                  alt: 'Japan',
                                  height: 48,
                                  width: 48,
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)(et, {
                            $variant: 'text',
                            $size: 'lg',
                            $color: 'dark',
                            $align: 'center',
                            children:
                              'Travels annually to my favourite destinations',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              'SLIDES_2' === t &&
                (0, i.jsx)(ts, {
                  heading: 'Tech skills',
                  children: (0, i.jsxs)(E, {
                    $display: 'inline-flex',
                    $flexWrap: 'wrap',
                    $alignItems: 'center',
                    $justifyContent: 'center',
                    $maxWidth: { lg: 900 },
                    children: [
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'pink',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'React',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'React Native',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'yellow',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'HTML',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'blue',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'CSS',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'JavaScript',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'CSS animations',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'SASS',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'pink',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'Styled Components',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'SVG',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'blue',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'TypeScript',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'NextJS',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'GatsbyJS',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'prismic.io',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'yellow',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'Design Systems',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'Jest',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'NodeJS',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'JQuery',
                        }),
                      }),
                    ],
                  }),
                }),
              'SLIDES_3' === t &&
                (0, i.jsx)(ts, {
                  heading: 'Portfolio',
                  children: (0, i.jsxs)(eF, {
                    $space: 'xxl',
                    $alignX: 'center',
                    children: [
                      (0, i.jsxs)(eF, {
                        $space: 'md',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)(e_, {
                            $variant: 'heading',
                            $size: { xs: 'xxs', lg: 'md' },
                            as: 'h2',
                            $color: 'dark',
                            $align: 'center',
                            children: 'Personal work',
                          }),
                          (0, i.jsxs)(E, {
                            $display: 'flex',
                            $flexDirection: { xs: 'column', lg: 'row' },
                            $alignItems: 'center',
                            $justifyContent: 'center',
                            children: [
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)(tl, {
                                  $borderColor: 'blue',
                                  href: 'https://github.com/merrybottle',
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: (0, i.jsxs)(eh, {
                                    $space: 'md',
                                    $alignY: 'flex-start',
                                    as: 'span',
                                    children: [
                                      (0, i.jsxs)(eh, {
                                        $space: 'xs',
                                        as: 'span',
                                        children: [
                                          (0, i.jsx)(e8.Z, {
                                            stroke: (0, n.Lq)('blue'),
                                            height: 32,
                                            width: 32,
                                          }),
                                          (0, i.jsx)(et, {
                                            $size: 'lg',
                                            $variant: 'text',
                                            $color: 'dark',
                                            children: 'GitHub',
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(e3.Z, {
                                        stroke: (0, n.m4)('dark', 0.75),
                                        height: 16,
                                        width: 16,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)(tl, {
                                  $borderColor: 'pink',
                                  href: 'https://codepen.io/merrybottle',
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: (0, i.jsxs)(eh, {
                                    $space: 'md',
                                    $alignY: 'flex-start',
                                    as: 'span',
                                    children: [
                                      (0, i.jsxs)(eh, {
                                        $space: 'xs',
                                        as: 'span',
                                        children: [
                                          (0, i.jsx)(e9.Z, {
                                            stroke: (0, n.Lq)('pink'),
                                            height: 32,
                                            width: 32,
                                          }),
                                          (0, i.jsx)(et, {
                                            $size: 'lg',
                                            $variant: 'text',
                                            $color: 'dark',
                                            children: 'CodePen',
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(e3.Z, {
                                        stroke: (0, n.m4)('dark', 0.75),
                                        height: 16,
                                        width: 16,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsxs)(E, {
                            $display: 'flex',
                            $flexDirection: { xs: 'column', lg: 'row' },
                            children: [
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)('div', {
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      '<iframe height="200" style="width: 100%;" scrolling="no" title="Close button" src="https://codepen.io/merrybottle/embed/PdwXYO?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/PdwXYO">Close button</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>',
                                  },
                                }),
                              }),
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)('div', {
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      '<iframe height="200" style="width: 100%;" scrolling="no" title="Hamburger menu + close button animation" src="https://codepen.io/merrybottle/embed/MZZEqM?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/MZZEqM">Hamburger menu + close button animation</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>',
                                  },
                                }),
                              }),
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)('div', {
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      '<iframe height="200" style="width: 100%;" scrolling="no" title="Money transfer: number input form" src="https://codepen.io/merrybottle/embed/KKPaqZX?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/merrybottle/pen/KKPaqZX">Money transfer: number input form</a> by merrybottle (<a href="https://codepen.io/merrybottle">@merrybottle</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>',
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(eF, {
                        $space: 'md',
                        $alignX: 'center',
                        children: [
                          (0, i.jsx)(e_, {
                            $variant: 'heading',
                            $size: { xs: 'xxs', lg: 'md' },
                            as: 'h2',
                            $color: 'dark',
                            $align: 'center',
                            children: 'Most recent professional work',
                          }),
                          (0, i.jsxs)(E, {
                            $display: 'flex',
                            $flexDirection: { xs: 'column', lg: 'row' },
                            $alignItems: 'center',
                            $justifyContent: 'center',
                            children: [
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)(tl, {
                                  $borderColor: 'spaceship',
                                  href: 'https://www.spaceship.com.au',
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: (0, i.jsxs)(eh, {
                                    $space: 'md',
                                    $alignY: 'flex-start',
                                    as: 'span',
                                    children: [
                                      (0, i.jsxs)(eh, {
                                        $space: 'xs',
                                        as: 'span',
                                        children: [
                                          (0, i.jsx)('div', {
                                            children: (0, i.jsx)('img', {
                                              src: ti.src,
                                              alt: 'Spaceship',
                                              height: 32,
                                              width: 32,
                                            }),
                                          }),
                                          (0, i.jsx)(et, {
                                            $size: 'lg',
                                            $variant: 'text',
                                            $color: 'dark',
                                            children: 'Spaceship',
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(e3.Z, {
                                        stroke: (0, n.m4)('dark', 0.75),
                                        height: 16,
                                        width: 16,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, i.jsx)(E, {
                                $margin: 'xs',
                                children: (0, i.jsx)(tl, {
                                  $borderColor: 'oneflare',
                                  href: 'https://www.oneflare.com.au',
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: (0, i.jsxs)(eh, {
                                    $space: 'md',
                                    $alignY: 'flex-start',
                                    as: 'span',
                                    children: [
                                      (0, i.jsxs)(eh, {
                                        $space: 'xs',
                                        as: 'span',
                                        children: [
                                          (0, i.jsx)('div', {
                                            children: (0, i.jsx)('img', {
                                              src: tn.src,
                                              alt: 'Oneflare',
                                              height: 32,
                                              width: 32,
                                            }),
                                          }),
                                          (0, i.jsx)(et, {
                                            $size: 'lg',
                                            $variant: 'text',
                                            $color: 'dark',
                                            children: 'Oneflare',
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)(e3.Z, {
                                        stroke: (0, n.m4)('dark', 0.75),
                                        height: 16,
                                        width: 16,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              'SLIDES_4' === t &&
                (0, i.jsx)(ts, {
                  heading: 'Irrelevant skills',
                  children: (0, i.jsxs)(E, {
                    $display: 'inline-flex',
                    $flexWrap: 'wrap',
                    $alignItems: 'center',
                    $justifyContent: 'center',
                    $maxWidth: { lg: 400 },
                    children: [
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'pink',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'Baking',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'blue',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'Making jewellery',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'yellow',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          $fontWeight: 'bold',
                          as: 'span',
                          children: 'Crochet',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'Sudoku',
                        }),
                      }),
                      (0, i.jsx)(tr, {
                        $backgroundColor: 'white',
                        $margin: 'xs',
                        children: (0, i.jsx)(et, {
                          $variant: 'text',
                          $size: { xs: 'lg', xl: 'xl' },
                          $color: 'dark',
                          as: 'span',
                          children: 'Eating heaps of desserts',
                        }),
                      }),
                    ],
                  }),
                }),
              'SLIDES_5' === t &&
                (0, i.jsx)(ts, {
                  heading: 'Where to find me',
                  children: (0, i.jsx)(tl, {
                    $borderColor: 'blue',
                    href: 'https://www.linkedin.com/in/merrybottle',
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    children: (0, i.jsxs)(eh, {
                      $space: 'md',
                      $alignY: 'flex-start',
                      as: 'span',
                      children: [
                        (0, i.jsxs)(eh, {
                          $space: 'xs',
                          as: 'span',
                          children: [
                            (0, i.jsx)(e7.Z, {
                              stroke: (0, n.Lq)('blue'),
                              height: 32,
                              width: 32,
                            }),
                            (0, i.jsx)(et, {
                              $size: 'lg',
                              $variant: 'text',
                              $color: 'dark',
                              children: 'LinkedIn',
                            }),
                          ],
                        }),
                        (0, i.jsx)(e3.Z, {
                          stroke: (0, n.m4)('dark', 0.75),
                          height: 16,
                          width: 16,
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        },
        ts = (e) => {
          let { children: t, heading: r } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(e_, {
                as: 'h1',
                $size: { xs: 'xs', md: 'md', lg: 'lg' },
                $color: 'dark',
                $variant: 'heading',
                $align: 'center',
                children: r.toUpperCase(),
              }),
              (0, i.jsx)(E, {
                $borderRadius: 'xxs',
                $height: l('xxs'),
                $backgroundColor: 'dark',
                $opacity: 0.75,
                $marginY: 'xs',
              }),
              (0, i.jsx)(E, {
                $flex: 1,
                $overflow: 'auto',
                $paddingY: 'md',
                children: (0, i.jsx)(E, {
                  $display: 'flex',
                  $flexDirection: 'column',
                  $alignItems: 'center',
                  $justifyContent: { lg: 'center' },
                  $minHeight: '100%',
                  children: t,
                }),
              }),
            ],
          });
        },
        ta = (0, s.ZP)(E)
          .attrs({
            $display: 'flex',
            $flexDirection: 'column',
            $height: '100%',
            $width: '100%',
            $paddingX: { xs: 'md', lg: 'xl' },
            $paddingY: { xs: 'lg', sm: 'xl', md: 'xxl' },
          })
          .withConfig({ componentId: 'sc-75534214-0' })(
          [
            "position:relative;&::before,&::after{content:'';background:repeating-linear-gradient( -40deg,",
            ',',
            ' 32px,',
            ' 32px,',
            ' 64px,',
            ' 64px,',
            ' 96px );display:block;height:',
            ';width:100%;position:absolute;left:0;}&::before{top:0;}&::after{bottom:0;}',
          ],
          (0, n.m4)('blue', 0.6),
          (0, n.m4)('blue', 0.6),
          (0, n.m4)('yellow', 0.3),
          (0, n.m4)('yellow', 0.3),
          (0, n.m4)('pink', 0.6),
          (0, n.m4)('pink', 0.6),
          l('md'),
        ),
        tl = s.ZP.a.withConfig({ componentId: 'sc-75534214-1' })(
          [
            'transition:0.2s ease-in;&,&:active,&:visited{',
            ' ',
            ' ',
            ' display:inline-block;border:4px solid ',
            ';line-height:0;text-decoration:none;}&:hover{box-shadow:0 0 0 4px ',
            ',inset 0 0 0 4px ',
            ';border:4px solid ',
            ';}',
          ],
          w('sm'),
          g('sm'),
          m('xs'),
          (e) => {
            let { $borderColor: t } = e;
            return (0, n.m4)(t, 0.6);
          },
          (e) => {
            let { $borderColor: t } = e;
            return (0, n.m4)(t, 0.2);
          },
          (e) => {
            let { $borderColor: t } = e;
            return (0, n.m4)(t, 0.2);
          },
          (e) => {
            let { $borderColor: t } = e;
            return (0, n.m4)(t, 1);
          },
        ),
        td = (e) => {
          var t, r;
          let { step: n } = e,
            o = (0, Y.useRef)(null),
            s =
              null !==
                (r =
                  null === (t = B[n]) || void 0 === t
                    ? void 0
                    : t.split(' ').length) && void 0 !== r
                ? r
                : 0,
            a = 'INTRO_1' === n || 'END_1' === n ? 3 : 0;
          return (
            (0, Y.useEffect)(() => {
              if (n && s > 0) {
                var e;
                null === (e = o.current) || void 0 === e || e.beginElement();
              }
            }, [n, s]),
            (0, i.jsxs)('svg', {
              height: '100%',
              width: '100%',
              viewBox: '0 0 230 230',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, i.jsx)('g', {
                  filter: 'url(#filter0_d_1_3)',
                  children: (0, i.jsx)('path', {
                    d: 'M202.36 97.6212C202.36 121.111 215.365 193.693 201.878 210.021C185.995 229.249 137.233 223.046 111.343 223.046C85.4532 223.046 44.8777 229.249 28.9943 210.021C15.5072 193.693 28.9943 121.111 28.9943 97.6212C28.9943 46.4679 67.8035 5 115.677 5C163.551 5 202.36 46.4679 202.36 97.6212Z',
                    fill: '#393939',
                  }),
                }),
                (0, i.jsx)('path', {
                  d: 'M182 224C182 252.719 190 276 115 276C40 276 48 252.719 48 224C48 195.281 77.9969 172 115 172C152.003 172 182 195.281 182 224Z',
                  fill: '#2868E1',
                }),
                (0, i.jsx)('path', {
                  d: 'M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828',
                  stroke: 'white',
                  strokeOpacity: '0.5',
                  strokeLinecap: 'round',
                }),
                (0, i.jsx)('path', {
                  d: 'M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828',
                  stroke: 'white',
                  strokeOpacity: '0.5',
                  strokeLinecap: 'round',
                }),
                (0, i.jsx)('path', {
                  d: 'M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828',
                  stroke: 'white',
                  strokeOpacity: '0.5',
                  strokeLinecap: 'round',
                }),
                (0, i.jsx)('path', {
                  d: 'M146.591 215.889L148.712 213.768M148.773 215.95L146.652 213.828M146.591 219.889L148.712 217.768M148.773 219.95L146.652 217.828M138.591 219.889L140.712 217.768M140.773 219.95L138.652 217.828M138.591 215.889L140.712 213.768M140.773 215.95L138.652 213.828M134.591 215.889L136.712 213.768M136.773 215.95L134.652 213.828M150.591 215.889L152.712 213.768M152.773 215.95L150.652 213.828M138.591 211.889L140.712 209.768M140.773 211.95L138.652 209.828M146.591 211.889L148.712 209.768M148.773 211.95L146.652 209.828M150.591 211.889L152.712 209.768M152.773 211.95L150.652 209.828M134.591 211.889L136.712 209.768M136.773 211.95L134.652 209.828M136.884 207.828L139.005 205.707M139.066 207.889L136.945 205.768M148.884 207.828L151.005 205.707M151.066 207.889L148.945 205.768M142.591 219.889L144.712 217.768M144.773 219.95L142.652 217.828M142.591 223.889L144.712 221.768M144.773 223.95L142.652 221.828M142.591 215.889L144.712 213.768M144.773 215.95L142.652 213.828',
                  stroke: '#A3C3FF',
                  strokeLinecap: 'round',
                }),
                (0, i.jsx)('path', {
                  d: 'M151.5 180.5C151.5 185.671 131.5 192.5 128.5 191C126.783 190.141 118.5 179.5 114.5 179.5C110.5 179.5 101.5 190 99.1754 190.9C96 192.131 76.5 186.671 76.5 181.5C76.5 179.023 97.2599 165.5 113 165.5C128.74 165.5 151.5 178.5 151.5 180.5Z',
                  fill: '#002A73',
                }),
                (0, i.jsx)('path', {
                  d: 'M132 158C132 168.283 124.985 177.253 114 177.379C103.015 177.506 96 168.283 96 158C96 158 104.059 162.381 114 162.381C123.941 162.381 132 158 132 158Z',
                  fill: '#FFE6BF',
                }),
                (0, i.jsx)('g', {
                  filter: 'url(#filter1_d_1_3)',
                  children: (0, i.jsx)('path', {
                    d: 'M183 92.5C183 133.093 156.5 168.5 115 169C73.5 169.5 47 133.093 47 92.5C47 51.9071 77.4446 19 115 19C152.555 19 183 51.9071 183 92.5Z',
                    fill: '#FFE6BF',
                  }),
                }),
                (0, i.jsx)('path', {
                  d: 'M108.5 149.283C110.487 150.796 112.309 151.5 115 151.5C117.468 151.5 119.626 150.724 121.5 149.283',
                  stroke: '#FF8C73',
                  strokeWidth: '3',
                  strokeLinecap: 'round',
                }),
                (0, i.jsxs)('ellipse', {
                  cx: '115',
                  cy: '150',
                  rx: '8',
                  ry: '1',
                  fill: '#646464',
                  stroke: '#FF8C73',
                  strokeWidth: '2',
                  opacity: 0,
                  children: [
                    (0, i.jsx)('animate', {
                      id: 'startAnimate',
                      attributeName: 'opacity',
                      values: '0;1;',
                      dur: ''.concat(0.1, 's'),
                      begin: ''.concat(a, 's'),
                      repeatCount: 1,
                      ref: o,
                      fill: 'freeze',
                    }),
                    (0, i.jsx)('animate', {
                      id: 'initSpeakAnimate',
                      attributeName: 'ry',
                      values: '1;3;',
                      dur: ''.concat(0.1, 's'),
                      begin: 'startAnimate.end',
                      repeatCount: 1,
                    }),
                    (0, i.jsx)('animate', {
                      id: 'speakAnimate',
                      attributeName: 'ry',
                      values: '3;7;3;',
                      dur: ''.concat(0.3, 's'),
                      begin: 'initSpeakAnimate.end',
                      repeatCount: s,
                    }),
                    (0, i.jsx)('animate', {
                      id: 'endSpeakAnimate',
                      attributeName: 'ry',
                      values: '3;1;',
                      dur: ''.concat(0.1, 's'),
                      begin: 'speakAnimate.end',
                      repeatCount: 1,
                    }),
                    (0, i.jsx)('animate', {
                      id: 'endAnimate',
                      attributeName: 'opacity',
                      values: '1;0;',
                      dur: ''.concat(0.1, 's'),
                      begin: 'endSpeakAnimate.end',
                      repeatCount: 1,
                      fill: 'freeze',
                    }),
                  ],
                }),
                (0, i.jsx)('g', {
                  filter: 'url(#filter2_d_1_3)',
                  children: (0, i.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M193.851 93.9395C191.317 51.0091 156.759 17 114.5 17C70.5934 17 35 53.7127 35 99C35 100.684 35.0492 102.356 35.1462 104.015C54.4132 99.9072 80.3879 78.0718 90.1119 50.9557C107.112 75.3639 146.929 92.7897 193.851 93.9395Z',
                    fill: '#393939',
                  }),
                }),
                (0, i.jsx)('circle', {
                  cx: '73.5',
                  cy: '136.5',
                  r: '11.5',
                  fill: '#FFAABE',
                  fillOpacity: '0.5',
                }),
                (0, i.jsx)('circle', {
                  cx: '157.5',
                  cy: '136.5',
                  r: '11.5',
                  fill: '#FFAABE',
                  fillOpacity: '0.5',
                }),
                (0, i.jsx)('ellipse', {
                  cx: '73.098',
                  cy: '109.731',
                  rx: '11.5',
                  ry: '14.5',
                  transform: 'rotate(-6.63361 73.098 109.731)',
                  fill: '#333333',
                }),
                (0, i.jsx)('ellipse', {
                  cx: '73.098',
                  cy: '109.731',
                  rx: '11.5',
                  ry: '14.5',
                  transform: 'rotate(-6.63361 73.098 109.731)',
                  fill: '#333333',
                }),
                (0, i.jsx)('ellipse', {
                  cx: '73.098',
                  cy: '109.731',
                  rx: '11.5',
                  ry: '14.5',
                  transform: 'rotate(-6.63361 73.098 109.731)',
                  fill: '#333333',
                }),
                (0, i.jsx)('path', {
                  d: 'M62 94C61.5 94.5 62.5 97.5 63.5 98.5C59.3333 98.5 59 94 58 94.7435C56.5 106 70.6666 106.157 72 99.5C66 98 62.5 93.5 62 94Z',
                  fill: '#333333',
                }),
                (0, i.jsx)('circle', {
                  cx: '68',
                  cy: '104',
                  r: '4',
                  fill: 'white',
                }),
                (0, i.jsx)('ellipse', {
                  rx: '11.5',
                  ry: '14.5',
                  transform:
                    'matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)',
                  fill: '#333333',
                }),
                (0, i.jsx)('ellipse', {
                  rx: '11.5',
                  ry: '14.5',
                  transform:
                    'matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)',
                  fill: '#333333',
                }),
                (0, i.jsx)('ellipse', {
                  rx: '11.5',
                  ry: '14.5',
                  transform:
                    'matrix(-0.993305 -0.11552 -0.11552 0.993305 157.294 109.77)',
                  fill: '#333333',
                }),
                (0, i.jsx)('path', {
                  d: 'M168.392 94.0386C168.892 94.5386 167.892 97.5386 166.892 98.5386C171.059 98.5386 171.392 94.0386 172.392 94.7821C173.892 106.039 159.726 106.196 158.392 99.5386C164.392 98.0386 167.892 93.5386 168.392 94.0386Z',
                  fill: '#333333',
                }),
                (0, i.jsx)('circle', {
                  r: '4',
                  transform: 'matrix(-1 0 0 1 162.392 104.039)',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  d: 'M111 130C111.359 130.75 112.992 132 114.5 132C116.008 132 117.731 130.75 118 130',
                  stroke: '#FAD8A3',
                  strokeWidth: '3',
                  strokeLinecap: 'round',
                }),
                (0, i.jsx)('circle', {
                  cx: '155.5',
                  cy: '107.5',
                  r: '26.5',
                  stroke: '#945B19',
                  strokeWidth: '4',
                }),
                (0, i.jsx)('circle', {
                  cx: '155.5',
                  cy: '107.5',
                  r: '26.5',
                  stroke: '#945B19',
                  strokeWidth: '4',
                }),
                (0, i.jsx)('circle', {
                  cx: '73.5',
                  cy: '107.5',
                  r: '26.5',
                  stroke: '#945B19',
                  strokeWidth: '4',
                }),
                (0, i.jsx)('circle', {
                  cx: '73.5',
                  cy: '107.5',
                  r: '26.5',
                  stroke: '#945B19',
                  strokeWidth: '4',
                }),
                (0, i.jsx)('path', {
                  d: 'M100 112.5C100 112.5 107.5 108 114 108C120.5 108 128.5 112.5 128.5 112.5',
                  stroke: '#945B19',
                  strokeWidth: '4',
                  strokeLinecap: 'round',
                }),
                (0, i.jsxs)('defs', {
                  children: [
                    (0, i.jsxs)('filter', {
                      id: 'filter0_d_1_3',
                      x: '19',
                      y: '3',
                      width: '193',
                      height: '227',
                      filterUnits: 'userSpaceOnUse',
                      colorInterpolationFilters: 'sRGB',
                      children: [
                        (0, i.jsx)('feFlood', {
                          floodOpacity: '0',
                          result: 'BackgroundImageFix',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          in: 'SourceAlpha',
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                          result: 'hardAlpha',
                        }),
                        (0, i.jsx)('feOffset', { dy: '2' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '2' }),
                        (0, i.jsx)('feComposite', {
                          in2: 'hardAlpha',
                          operator: 'out',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          type: 'matrix',
                          values:
                            '0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in2: 'BackgroundImageFix',
                          result: 'effect1_dropShadow_1_3',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in: 'SourceGraphic',
                          in2: 'effect1_dropShadow_1_3',
                          result: 'shape',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('filter', {
                      id: 'filter1_d_1_3',
                      x: '44',
                      y: '17',
                      width: '142',
                      height: '156.005',
                      filterUnits: 'userSpaceOnUse',
                      colorInterpolationFilters: 'sRGB',
                      children: [
                        (0, i.jsx)('feFlood', {
                          floodOpacity: '0',
                          result: 'BackgroundImageFix',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          in: 'SourceAlpha',
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                          result: 'hardAlpha',
                        }),
                        (0, i.jsx)('feOffset', { dy: '1' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '1.5' }),
                        (0, i.jsx)('feComposite', {
                          in2: 'hardAlpha',
                          operator: 'out',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          type: 'matrix',
                          values:
                            '0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in2: 'BackgroundImageFix',
                          result: 'effect1_dropShadow_1_3',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in: 'SourceGraphic',
                          in2: 'effect1_dropShadow_1_3',
                          result: 'shape',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('filter', {
                      id: 'filter2_d_1_3',
                      x: '31',
                      y: '16',
                      width: '166.851',
                      height: '95.0145',
                      filterUnits: 'userSpaceOnUse',
                      colorInterpolationFilters: 'sRGB',
                      children: [
                        (0, i.jsx)('feFlood', {
                          floodOpacity: '0',
                          result: 'BackgroundImageFix',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          in: 'SourceAlpha',
                          type: 'matrix',
                          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                          result: 'hardAlpha',
                        }),
                        (0, i.jsx)('feOffset', { dy: '3' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '2' }),
                        (0, i.jsx)('feComposite', {
                          in2: 'hardAlpha',
                          operator: 'out',
                        }),
                        (0, i.jsx)('feColorMatrix', {
                          type: 'matrix',
                          values:
                            '0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 0.2 0',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in2: 'BackgroundImageFix',
                          result: 'effect1_dropShadow_1_3',
                        }),
                        (0, i.jsx)('feBlend', {
                          mode: 'normal',
                          in: 'SourceGraphic',
                          in2: 'effect1_dropShadow_1_3',
                          result: 'shape',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        tc = (e) => {
          let { currentStepIndex: t, onStepIndexChange: r } = e,
            n = W[t];
          return (0, i.jsxs)(tp, {
            children: [
              (0, i.jsx)(tg, {
                children: (0, i.jsxs)(E, {
                  $position: 'relative',
                  $height: '100%',
                  $borderRadius: 'sm',
                  $overflow: 'hidden',
                  children: [
                    t >= W.indexOf('INTRO_8') && (0, i.jsx)(to, { step: n }),
                    (0, i.jsx)(tm, {
                      step: n,
                      children: (0, i.jsx)(t$, {
                        children: (0, i.jsx)(td, { step: n }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(tf, {
                children: (0, i.jsx)(eQ, { step: n, onRestart: () => r(0) }),
              }),
            ],
          });
        },
        tx = (0, s.F4)(
          [
            '0%{height:0;width:0;border-color:',
            ';}40%,60%{height:',
            ';width:100%;border-color:',
            ';}100%{height:100%;width:100%;border-color:',
            ';}',
          ],
          (0, n.m4)('dark', 0),
          l('xs'),
          (0, n.m4)('dark', 1),
          (0, n.m4)('dark', 1),
        ),
        th = (0, s.F4)(
          [
            '0%{top:16px;bottom:0px;opacity:0;border-color:',
            ';}100%{top:16px;bottom:-16px;opacity:1;border-color:',
            ';}',
          ],
          (0, n.m4)('dark', 0),
          (0, n.m4)('dark', 1),
        ),
        tp = s.ZP.div.withConfig({ componentId: 'sc-62d668f3-0' })([
          'position:absolute;top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;',
        ]),
        tg = s.ZP.div.withConfig({ componentId: 'sc-62d668f3-1' })(
          [
            'animation:',
            ' 1.1s linear 0.5s forwards;',
            ' ',
            ' ',
            ' box-sizing:border-box;border:3px solid ',
            ';&::after{animation:',
            " 0.5s linear 1.6s forwards;content:'';",
            ' background-color:',
            ';border:3px solid ',
            ';opacity:0;position:absolute;left:24px;right:24px;z-index:-1;}',
          ],
          tx,
          (0, n.Cz)('background'),
          w('md'),
          d('sm'),
          (0, n.m4)('dark', 0),
          th,
          w('sm'),
          (0, ea.CD)(0.6, (0, n.Lq)('background'), (0, n.Lq)('yellow')),
          (0, n.m4)('dark', 0),
        ),
        tm = s.ZP.div.withConfig({ componentId: 'sc-62d668f3-2' })(
          [
            'animation:',
            " 0.5s linear 1.5s forwards;opacity:0;position:absolute;height:100%;width:100%;display:flex;align-items:flex-end;justify-content:center;transition:0.5s ease-in;top:100%;transform:translateY(-100%);left:0;overflow:hidden;&::before{content:'';background:url('",
            "') no-repeat;background-size:cover;background-position:center;",
            ' position:absolute;height:100%;width:100%;top:0;left:0;filter:brightness(1.3) contrast(0.7) opacity(0.9);z-index:-1;}',
            '',
          ],
          em,
          '/_next/static/media/background.eb66a129.jpg',
          w('sm'),
          (e) => {
            let { step: t } = e;
            return t.includes('SLIDES')
              ? (0, s.iv)(
                  [
                    'border-radius:50%;',
                    ' ',
                    ' overflow:hidden;top:calc(100% - ',
                    ');left:',
                    ';',
                  ],
                  P({ xs: 100, md: 150, lg: 200 }),
                  z({ xs: 100, md: 150, lg: 200 }),
                  l('xs'),
                  l('xs'),
                )
              : '';
          },
        ),
        t$ = (0, s.ZP)(E)
          .attrs({ $height: { xs: '80%', lg: '85%' } })
          .withConfig({ componentId: 'sc-62d668f3-3' })([
          'line-height:0;aspect-ratio:1 / 1;',
        ]),
        tf = s.ZP.div.withConfig({ componentId: 'sc-62d668f3-4' })(
          [
            'animation:',
            ' 0.2s linear 2.5s forwards;opacity:0;position:absolute;',
            '',
          ],
          em,
          (0, o.uq)({
            xs: (0, s.iv)(['top:', ';'], l('lg')),
            lg: (0, s.iv)(['top:auto;bottom:', ';'], l('lg')),
          }),
        ),
        tu = (0, s.ZP)(E)
          .attrs({ $width: '100%' })
          .withConfig({ componentId: 'sc-144283ae-0' })([
          'position:relative;height:100%;',
        ]),
        tj = (0, s.ZP)(E)
          .attrs({ $height: '100vh', $overflow: 'hidden' })
          .withConfig({ componentId: 'sc-144283ae-1' })(
          ['padding-bottom:', 'px;'],
          120,
        ),
        tb = s.ZP.button.withConfig({ componentId: 'sc-144283ae-2' })(
          [
            "background:none;border:none;outline:none;position:absolute;padding:0;margin:0;width:max-content;transition:0.45s 0.3s ease-in;left:50%;top:50%;transform:translate(-50%,-50%);&::after{content:'';",
            ' background-color:',
            ';border:3px solid ',
            ';position:absolute;top:10px;bottom:-10px;left:16px;right:16px;z-index:-1;transition:0.1s ease-in;}',
            '',
          ],
          w('sm'),
          (0, ea.CD)(0.6, (0, n.Lq)('background'), (0, n.Lq)('pink')),
          (0, n.Lq)('dark'),
          (e) => {
            let { $showJoin: t } = e;
            return t
              ? ''
              : (0, s.iv)(
                  [
                    'transform:translate(-100%,-50%);',
                    ' & ',
                    '{',
                    ' ',
                    ' ',
                    ' border-width:2px;box-sizing:border-box;padding:0;&:hover{transform:none;}}& ',
                    ' span{display:inline-block;height:0;width:0;overflow:hidden;}&::after{top:0;bottom:0;}',
                  ],
                  (0, o.uq)({
                    xs: (0, s.iv)(
                      ['left:calc(100% - ', ' - 3px);top:calc(', 'px + ', ');'],
                      l('sm'),
                      40,
                      l('sm'),
                    ),
                    md: (0, s.iv)(
                      ['left:calc(100% - 24px);top:calc(100% - ', 'px);'],
                      60,
                    ),
                  }),
                  tk,
                  w('lg'),
                  P(l('xl')),
                  z(l('xl')),
                  tk,
                );
          },
        ),
        tk = s.ZP.span.withConfig({ componentId: 'sc-144283ae-3' })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' cursor:pointer;display:inline-block;border:3px solid ',
            ';transition:0.2s ease-in;&:hover{background-color:',
            ';transform:translateY(-4px);}&:active{transform:translateY(4px);}',
          ],
          w('sm'),
          (0, n.Cz)('pink'),
          g('xl'),
          m('md'),
          (0, n.Lq)('dark'),
          (0, ea._j)(0.05, (0, n.Lq)('pink')),
        ),
        tv = (0, s.ZP)(E).withConfig({ componentId: 'sc-144283ae-4' })(
          [
            'border:3px solid ',
            ';',
            ' background-color:#fef9ec;box-sizing:border-box;',
          ],
          (0, n.Lq)('dark'),
          w('md'),
        );
      var tw = () => {
        let e = (0, Y.useRef)(null),
          [t, r] = (0, Y.useState)(0);
        return (0, i.jsx)(E, {
          $maxWidth: { xl: 1200 },
          $marginX: { xs: 'sm', xl: 'auto' },
          $position: 'relative',
          $overflow: 'hidden',
          children:
            'START' === W[t] || 'JOIN_MEETING' === W[t]
              ? (0, i.jsx)(E, {
                  $display: 'flex',
                  $alignItems: 'center',
                  $justifyContent: 'center',
                  $minHeight: '100vh',
                  children: (0, i.jsx)(tb, {
                    $showJoin: 'START' === W[t],
                    onClick: () => {
                      'START' === W[t]
                        ? (r(t + 1),
                          setTimeout(() => {
                            r(t + 2);
                          }, 900))
                        : r(0);
                    },
                    children: (0, i.jsx)(tk, {
                      children: (0, i.jsx)(et, {
                        $variant: 'meeting',
                        $size: 'xl',
                        $color: 'dark',
                        as: 'span',
                        children: 'Ready to join?',
                      }),
                    }),
                  }),
                })
              : (0, i.jsxs)(tj, {
                  children: [
                    (0, i.jsxs)(tv, {
                      $display: { xs: 'flex', lg: 'none' },
                      $height: 80,
                      $alignItems: 'center',
                      $justifyContent: 'space-between',
                      $padding: 'sm',
                      $marginY: { xs: 'sm', lg: 'none' },
                      children: [
                        (0, i.jsx)(eg, {}),
                        (0, i.jsx)(ej, { onStepIndexChange: r }),
                      ],
                    }),
                    (0, i.jsx)(E, {
                      $display: 'flex',
                      $alignItems: 'center',
                      $justifyContent: 'center',
                      $height: {
                        xs: 'calc(100% - '
                          .concat(80, 'px - (')
                          .concat(l('sm'), ' * 2))'),
                        lg: '100%',
                      },
                      $paddingTop: { lg: 'md' },
                      $paddingBottom: { xs: 'lg', lg: 'xl' },
                      children: (0, i.jsx)(tu, {
                        children: (0, i.jsx)(tc, {
                          currentStepIndex: t,
                          onStepIndexChange: r,
                        }),
                      }),
                    }),
                    (0, i.jsx)(e$, {
                      currentStepIndex: t,
                      onStepIndexChange: r,
                      onToggleChatWindow: (t) => {
                        var r, i;
                        t
                          ? null == e ||
                            null === (r = e.current) ||
                            void 0 === r ||
                            r.open()
                          : null == e ||
                            null === (i = e.current) ||
                            void 0 === i ||
                            i.close();
                      },
                    }),
                    (0, i.jsx)(eN, { ref: e }),
                  ],
                }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [325, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
