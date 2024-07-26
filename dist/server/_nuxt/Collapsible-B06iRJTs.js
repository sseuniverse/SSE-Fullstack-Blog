import { L as I, A as u, z as o, E as t, F as i, K as A, M as s, P as l, O as N$1, V as o$1, i as useAppConfig, g as useUI, n as l$1, o as useId, j as __nuxt_component_1 } from "../server.mjs";
import "./MDCSlot-BfojrWUk.js";
import { defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, inject, renderSlot as renderSlot$1, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-CuPAWByl.js";
import { f as flatUnwrap } from "./node-B5VQLu6X.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "klona";
import "tailwind-merge";
import "@iconify/vue";
import "ohash";
import "@iconify/utils/lib/css/icon";
var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s2 = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i$1 = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${I()}`), panelId: ref(`headlessui-disclosure-panel-${I()}`), disclosureState: s2, panel: e, button: i$1, toggleDisclosure() {
    s2.value = u(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o(l2) : o(n.button) : o(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), t(computed(() => u(s2.value, { [0]: i.Open, [1]: i.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c = { open: s2.value === 0, close: n.close };
    return A({ theirProps: a, ourProps: {}, slot: c, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2, expose: s$1 }) {
  let e = O("DisclosureButton"), i2 = U(), n = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$1({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled) if (n.value) switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o(e.button)) == null || S.focus();
        break;
    }
    else switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
        break;
    }
  }
  function v(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v };
    return A({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i$1 = l(), n = computed(() => i$1 !== null ? (i$1.value & i.Open) === i.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return A({ ourProps: D, theirProps: c, slot: l2, attrs: r, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "properties"
    },
    openText: {
      type: String,
      default: "Show"
    },
    closeText: {
      type: String,
      default: "Hide"
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const config = computed(() => ({
      button: {
        base: "flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
        icon: {
          name: appConfig.ui.icons.chevron,
          base: "w-4 h-4 transform transition-transform duration-200",
          active: "",
          inactive: "-rotate-90"
        }
      },
      panel: "mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"
    }));
    const { ui } = useUI("content.collapsible", void 0, config, void 0, true);
    l$1(() => useId("$6MEHIvVlsV"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(N), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Q), {
              class: unref(ui).button.base
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(open ? __props.closeText : __props.openText)} ${ssrInterpolate(__props.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: unref(ui).button.icon.name,
                      class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                    }, null, 8, ["name", "class"]),
                    createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(V), {
              class: unref(ui).panel
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Q), {
                class: unref(ui).button.base
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: unref(ui).button.icon.name,
                    class: [unref(ui).button.icon.base, open ? unref(ui).button.icon.active : unref(ui).button.icon.inactive]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", null, toDisplayString(open ? __props.closeText : __props.openText) + " " + toDisplayString(__props.name), 1)
                ]),
                _: 2
              }, 1032, ["class"]),
              createVNode(unref(V), {
                class: unref(ui).panel
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { unwrap: "p" })
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@sse-ui/nuxt/modules/pro/runtime/components/global/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Collapsible-B06iRJTs.js.map
