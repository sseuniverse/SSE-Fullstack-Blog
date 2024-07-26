import { _ as _sfc_main$5 } from "./Page-Df_iVPP0.js";
import { g as useUI, h as __nuxt_component_0, f as __nuxt_component_0$1, _ as _export_sfc, i as useAppConfig, j as __nuxt_component_1, m as mergeConfig, k as appConfig, Y as Ye, G as Ge, S as Se, l as he, n as l, o as useId, b as useToast, e as useAuth, p as useAuthModal, q as __nuxt_component_11, r as __nuxt_component_2$1, s as __nuxt_component_14, t as __nuxt_component_15, v as __nuxt_component_16 } from "../server.mjs";
import { defineComponent, computed, toRef, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext, resolveComponent, withAsyncContext, ref, watch, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { twJoin, twMerge } from "tailwind-merge";
import { s as slugify, _ as _sfc_main$6, a as __nuxt_component_7, b as _sfc_main$7 } from "./Card-DDO6_CUA.js";
import { c as __nuxt_component_8, _ as __nuxt_component_9, a as _sfc_main$8 } from "./MDCEditor-CWr9Lxgl.js";
import { u as useFetch } from "./fetch-D2cfvx3x.js";
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
import "@iconify/vue";
import "ohash";
import "@iconify/utils/lib/css/icon";
import "./MDCRenderer-wQ-qDIVl.js";
import "destr";
import "scule";
import "property-information";
import "./node-B5VQLu6X.js";
import "unified";
import "remark-parse";
import "remark-rehype";
import "remark-mdc";
import "remark-emoji";
import "remark-gfm";
import "rehype-external-links";
import "rehype-sort-attribute-values";
import "rehype-sort-attributes";
import "rehype-raw";
import "detab";
import "micromark-util-sanitize-uri";
import "hast-util-to-string";
import "github-slugger";
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  height: "h-screen max-h-96",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingHero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const config2 = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.orientation === "vertical" && "flex flex-col",
        props.orientation === "horizontal" && "grid lg:grid-cols-2 lg:items-center"
      );
      const base = props.orientation === "vertical" ? "text-center" : "";
      const links = twJoin(
        "mt-10 flex flex-wrap gap-x-6 gap-y-3",
        props.orientation === "vertical" && "justify-center"
      );
      return {
        wrapper: "py-24 sm:py-32 md:py-40 relative",
        container,
        base,
        headline: "mb-10",
        title: "text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",
        description: "mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",
        links
      };
    });
    const { ui, attrs } = useUI("landing.hero", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
            if (_ctx.$slots.headline) {
              _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "headline", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</h1>`);
            if (__props.description || _ctx.$slots.description) {
              _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
              _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                class: unref(ui).base
              }, [
                _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline")
                ], 2)) : createCommentVNode("", true),
                createVNode("h1", {
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                ((_b = __props.links) == null ? void 0 : _b.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@sse-ui/nuxt/components/landing/LandingHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "405",
    height: "228",
    viewBox: "0 0 405 228",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="1.23706" y="0.668091" width="403" height="226" rx="12" fill="url(#paint0_linear_549_2000)" fill-opacity="0.2" stroke="url(#paint1_linear_549_2000)" stroke-opacity="0.4"></rect><rect opacity="0.08" x="69" y="101" width="43" height="43" rx="5" fill="#F1F5F9" stroke="#F1F5F9"></rect><rect opacity="0.08" x="125" y="101" width="43" height="43" rx="5" fill="#F1F5F9" stroke="#F1F5F9"></rect><rect opacity="0.08" x="181" y="101" width="43" height="43" rx="5" fill="#F1F5F9" stroke="#F1F5F9"></rect><rect opacity="0.08" x="237" y="101" width="43" height="43" rx="5" fill="#F1F5F9" stroke="#F1F5F9"></rect><rect opacity="0.08" x="293" y="101" width="43" height="43" rx="5" fill="#F1F5F9" stroke="#F1F5F9"></rect><g transform="translate(0, 50)"><path d="M204.781 78H212.588C212.836 78 213.079 77.9354 213.294 77.8125C213.509 77.6896 213.687 77.5128 213.811 77.3C213.935 77.0871 214 76.8457 214 76.5999C214 76.3542 213.934 76.1128 213.81 75.9001L208.568 66.9001C208.444 66.6873 208.265 66.5105 208.051 66.3877C207.836 66.2648 207.592 66.2001 207.345 66.2001C207.097 66.2001 206.853 66.2648 206.638 66.3877C206.424 66.5105 206.246 66.6873 206.122 66.9001L204.781 69.2028L202.16 64.6998C202.036 64.487 201.858 64.3104 201.643 64.1875C201.428 64.0647 201.185 64 200.937 64C200.689 64 200.445 64.0647 200.231 64.1875C200.016 64.3104 199.837 64.487 199.713 64.6998L193.19 75.9001C193.066 76.1128 193 76.3542 193 76.5999C193 76.8457 193.065 77.0871 193.189 77.3C193.313 77.5128 193.491 77.6896 193.706 77.8125C193.921 77.9354 194.164 78 194.412 78H199.312C201.254 78 202.686 77.1547 203.671 75.5057L206.063 71.4001L207.344 69.2028L211.189 75.8028H206.063L204.781 78ZM199.233 75.8005L195.813 75.7998L200.939 67.0004L203.497 71.4001L201.784 74.3407C201.13 75.4107 200.387 75.8005 199.233 75.8005Z" fill="white" fill-opacity="0.1"></path></g><g transform="translate(177, 35) scale(1.5)" opacity="0.2" class="animate-pulse"><g transform="translate(0 0) scale(1.4)" fill="none" stroke="#10aa50" stroke-width="1"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4c1.234 0 2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.123C14.227 11.604 13.233 12 12 12c-1.234 0-2.227-.397-4.213-1.191L4.98 9.684Z"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12c0 .493.993.89 2.979 1.685l2.808 1.123C9.773 15.604 10.767 16 12 16c1.234 0 2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12c0-.493-.993-.89-2.979-1.685L18.234 10M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16c0 .494.993.89 2.979 1.685l2.808 1.123C9.773 19.604 10.767 20 12 20c1.234 0 2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" opacity=".5"></path></g><g transform="translate(4.5, -9)"><path fill="#6CE875" d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22c-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z"></path></g></g><defs><linearGradient id="paint0_linear_549_2000" x1="202.737" y1="0.668091" x2="202.737" y2="103.49" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_549_2000" x1="202.737" y1="0.668091" x2="202.764" y2="154.266" gradientUnits="userSpaceOnUse"><stop stop-color="#6CE875"></stop><stop offset="1" stop-color="#6CE875" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Illustration.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "LandingSection",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    headline: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    features: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    },
    slot: {
      type: String,
      default: void 0
    },
    align: {
      type: String,
      default: "center"
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const appConfig2 = useAppConfig();
    const props = __props;
    const config2 = computed(() => {
      const container = twJoin(
        "gap-16 sm:gap-y-24",
        props.align === "center" ? "flex flex-col" : "grid lg:grid-cols-2 lg:items-center"
      );
      const base = twJoin(
        "",
        props.align === "center" && "text-center flex flex-col items-center",
        props.align === "right" && "lg:order-last"
      );
      return {
        wrapper: "py-24 sm:py-32",
        container,
        base,
        icon: {
          wrapper: "flex mb-6",
          base: "w-10 h-10 flex-shrink-0 text-primary"
        },
        headline: "mb-2 text-base/7 font-semibold text-primary",
        title: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
        description: "mt-6 text-lg/8 text-gray-600 dark:text-gray-300",
        links: "mt-8 flex flex-wrap gap-x-3 gap-y-1.5",
        features: {
          wrapper: {
            base: "mt-6 leading-7",
            list: "space-y-4",
            grid: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          },
          base: "relative pl-8",
          name: "font-semibold text-gray-900 dark:text-white",
          description: "text-gray-500 dark:text-gray-400 leading-6",
          icon: {
            base: "absolute left-0 top-1 h-5 w-5 text-primary",
            name: appConfig2.ui.icons.check
          }
        }
      };
    });
    const { ui, attrs } = useUI("landing.section", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UContainer, {
        class: unref(ui).container
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if (__props.icon || _ctx.$slots.icon || (__props.headline || _ctx.$slots.headline) || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description) || (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links)) {
              _push2(`<div class="${ssrRenderClass(unref(ui).base)}"${_scopeId}>`);
              if (__props.icon || _ctx.$slots.icon) {
                _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: __props.icon,
                    class: unref(ui).icon.base
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else if (__props.headline || _ctx.$slots.headline) {
                _push2(`<div class="${ssrRenderClass(unref(ui).headline)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                  _push2(`${ssrInterpolate(__props.headline)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.title || _ctx.$slots.title) {
                _push2(`<h2 class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || _ctx.$slots.description) {
                _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.align !== "center" && ((_b = __props.features) == null ? void 0 : _b.length)) {
                _push2(`<dl class="${ssrRenderClass([unref(ui).features.wrapper.base, unref(ui).features.wrapper.list])}"${_scopeId}><!--[-->`);
                ssrRenderList(__props.features, (feature) => {
                  _push2(`<div class="${ssrRenderClass(unref(ui).features.base)}"${_scopeId}><dt class="${ssrRenderClass(unref(ui).features.name)}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: feature.icon || unref(ui).features.icon.name,
                    class: unref(ui).features.icon.base,
                    "aria-hidden": "true"
                  }, null, _parent2, _scopeId));
                  if (feature.name) {
                    _push2(`<span${_scopeId}>${ssrInterpolate(feature.name)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</dt>`);
                  if (feature.description) {
                    _push2(`<dd class="${ssrRenderClass(unref(ui).features.description)}"${_scopeId}>${ssrInterpolate(feature.description)}</dd>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></dl>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.align !== "center" && (((_c = __props.links) == null ? void 0 : _c.length) || _ctx.$slots.links)) {
                _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.links, (link, index) => {
                    _push2(ssrRenderComponent(_component_UButton, mergeProps({
                      key: index,
                      ref_for: true
                    }, link, {
                      onClick: link.click
                    }), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$slots[__props.slot || "default"]) {
              ssrRenderSlot(_ctx.$slots, __props.slot || "default", {}, null, _push2, _parent2, _scopeId);
            } else if (__props.align === "right") {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.align === "center" && ((_d = __props.features) == null ? void 0 : _d.length)) {
              _push2(`<dl class="${ssrRenderClass([unref(ui).features.wrapper.base, unref(ui).features.wrapper.grid])}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.features, (feature) => {
                _push2(`<div class="${ssrRenderClass(unref(ui).features.base)}"${_scopeId}><dt class="${ssrRenderClass(unref(ui).features.name)}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: feature.icon || unref(ui).features.icon.name,
                  class: unref(ui).features.icon.base,
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
                if (feature.name) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(feature.name)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</dt>`);
                if (feature.description) {
                  _push2(`<dd class="${ssrRenderClass(unref(ui).features.description)}"${_scopeId}>${ssrInterpolate(feature.description)}</dd>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></dl>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.align === "center" && (((_e = __props.links) == null ? void 0 : _e.length) || _ctx.$slots.links)) {
              _push2(`<div class="${ssrRenderClass(unref(twMerge)(unref(ui).links, "mt-0 justify-center"))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(__props.links, (link, index) => {
                  _push2(ssrRenderComponent(_component_UButton, mergeProps({
                    key: index,
                    ref_for: true
                  }, link, {
                    onClick: link.click
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon || _ctx.$slots.icon || (__props.headline || _ctx.$slots.headline) || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description) || (((_f = __props.links) == null ? void 0 : _f.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(ui).base
              }, [
                __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: unref(ui).icon.wrapper
                }, [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(_component_UIcon, {
                      name: __props.icon,
                      class: unref(ui).icon.base
                    }, null, 8, ["name", "class"])
                  ])
                ], 2)) : __props.headline || _ctx.$slots.headline ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: unref(ui).headline
                }, [
                  renderSlot(_ctx.$slots, "headline", {}, () => [
                    createTextVNode(toDisplayString(__props.headline), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.title || _ctx.$slots.title ? (openBlock(), createBlock("h2", {
                  key: 2,
                  class: unref(ui).title
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(__props.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: unref(ui).description
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.align !== "center" && ((_g = __props.features) == null ? void 0 : _g.length) ? (openBlock(), createBlock("dl", {
                  key: 4,
                  class: [unref(ui).features.wrapper.base, unref(ui).features.wrapper.list]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature) => {
                    return openBlock(), createBlock("div", {
                      key: feature.name,
                      class: unref(ui).features.base
                    }, [
                      createVNode("dt", {
                        class: unref(ui).features.name
                      }, [
                        createVNode(_component_UIcon, {
                          name: feature.icon || unref(ui).features.icon.name,
                          class: unref(ui).features.icon.base,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"]),
                        feature.name ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(feature.name), 1)) : createCommentVNode("", true)
                      ], 2),
                      feature.description ? (openBlock(), createBlock("dd", {
                        key: 0,
                        class: unref(ui).features.description
                      }, toDisplayString(feature.description), 3)) : createCommentVNode("", true)
                    ], 2);
                  }), 128))
                ], 2)) : createCommentVNode("", true),
                __props.align !== "center" && (((_h = __props.links) == null ? void 0 : _h.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                  key: 5,
                  class: unref(ui).links
                }, [
                  renderSlot(_ctx.$slots, "links", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return openBlock(), createBlock(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, 16, ["onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              _ctx.$slots[__props.slot || "default"] ? renderSlot(_ctx.$slots, __props.slot || "default", { key: 1 }) : __props.align === "right" ? (openBlock(), createBlock("div", { key: 2 })) : createCommentVNode("", true),
              __props.align === "center" && ((_i = __props.features) == null ? void 0 : _i.length) ? (openBlock(), createBlock("dl", {
                key: 3,
                class: [unref(ui).features.wrapper.base, unref(ui).features.wrapper.grid]
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature) => {
                  return openBlock(), createBlock("div", {
                    key: feature.name,
                    class: unref(ui).features.base
                  }, [
                    createVNode("dt", {
                      class: unref(ui).features.name
                    }, [
                      createVNode(_component_UIcon, {
                        name: feature.icon || unref(ui).features.icon.name,
                        class: unref(ui).features.icon.base,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"]),
                      feature.name ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(feature.name), 1)) : createCommentVNode("", true)
                    ], 2),
                    feature.description ? (openBlock(), createBlock("dd", {
                      key: 0,
                      class: unref(ui).features.description
                    }, toDisplayString(feature.description), 3)) : createCommentVNode("", true)
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true),
              __props.align === "center" && (((_j = __props.links) == null ? void 0 : _j.length) || _ctx.$slots.links) ? (openBlock(), createBlock("div", {
                key: 4,
                class: unref(twMerge)(unref(ui).links, "mt-0 justify-center")
              }, [
                renderSlot(_ctx.$slots, "links", {}, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                    return openBlock(), createBlock(_component_UButton, mergeProps({
                      key: index,
                      ref_for: true
                    }, link, {
                      onClick: link.click
                    }), null, 16, ["onClick"]);
                  }), 128))
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@sse-ui/nuxt/components/landing/LandingSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$1 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right", "top", "bottom"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      let enterFrom, leaveTo;
      switch (props.side) {
        case "left":
          enterFrom = ui.value.translate.left;
          leaveTo = ui.value.translate.left;
          break;
        case "right":
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
          break;
        case "top":
          enterFrom = ui.value.translate.top;
          leaveTo = ui.value.translate.top;
          break;
        case "bottom":
          enterFrom = ui.value.translate.bottom;
          leaveTo = ui.value.translate.bottom;
          break;
        default:
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
      }
      return {
        ...ui.value.transition,
        enterFrom,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo
      };
    });
    const sideType = computed(() => {
      switch (props.side) {
        case "left":
          return "horizontal";
        case "right":
          return "horizontal";
        case "top":
          return "vertical";
        case "bottom":
          return "vertical";
        default:
          return "right";
      }
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    l(() => useId("$zSEivjycv8"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      sideType,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen,
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/posts", "$pqtWcjQkdb")), __temp = await __temp, __restore(), __temp);
    const toast = useToast();
    const { loggedIn } = useAuth();
    const { modal } = useAuthModal();
    const addModal = ref(false);
    const deleteModal = ref(false);
    const selected = ref();
    const loading = ref(false);
    async function deleteItem() {
      var _a;
      loading.value = true;
      await useFetch(`/api/posts/${(_a = selected.value) == null ? void 0 : _a.slug}`, {
        method: "DELETE"
      }, "$cmRBlMwAGX");
      loading.value = false;
      deleteModal.value = false;
      selected.value = void 0;
      await refresh();
      toast.add({
        title: "Success!",
        description: "Post deleted successfully.",
        color: "amber",
        icon: "i-ph-check"
      });
    }
    const form = ref({
      name: "",
      slug: "",
      description: "",
      color: "#10aa50",
      body: ""
    });
    watch(
      () => form.value.name,
      () => {
        if (form.value.name) {
          form.value.slug = slugify(form.value.name);
        }
      },
      { immediate: true }
    );
    async function save() {
      loading.value = true;
      const { data: data2, error: error2 } = await useFetch("/api/posts/create", {
        method: "POST",
        body: form.value
      }, "$P8rApiifAs");
      if (error2.value) {
        loading.value = false;
        return toast.add({
          title: `Error ${error2.value.statusCode}`,
          description: error2.value.statusMessage,
          color: "red",
          icon: "i-ph-warning-duotone"
        });
      }
      form.value = {
        name: "",
        slug: "",
        description: "",
        color: "#10aa50",
        body: ""
      };
      loading.value = false;
      addModal.value = false;
      await refresh();
      toast.add({
        title: "Success!",
        description: "Post added successfully.",
        icon: "i-ph-check"
      });
    }
    const posts = ref();
    function scrollToPosts() {
      if (posts.value) {
        (void 0).scrollTo({
          behavior: "smooth",
          top: posts.value.offsetTop - 77
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5;
      const _component_ULandingHero = _sfc_main$4;
      const _component_Illustration = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$1;
      const _component_ULandingSection = _sfc_main$2;
      const _component_UIcon = __nuxt_component_1;
      const _component_UPageGrid = _sfc_main$6;
      const _component_ULandingCard = __nuxt_component_7;
      const _component_Hachure = __nuxt_component_8;
      const _component_USkeleton = __nuxt_component_9;
      const _component_Card = _sfc_main$7;
      const _component_UModal = __nuxt_component_11;
      const _component_UCard = __nuxt_component_2$1;
      const _component_USlideover = __nuxt_component_13;
      const _component_UForm = __nuxt_component_14;
      const _component_UFormGroup = __nuxt_component_15;
      const _component_UInput = __nuxt_component_16;
      const _component_MDCEditor = _sfc_main$8;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULandingHero, {
              class: "md:text-start text-center",
              orientation: "horizontal",
              ui: { container: "flex lg:gap-12" }
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Full Stack with <span class="text-primary-500"${_scopeId2}> MongoDB </span>`);
                } else {
                  return [
                    createTextVNode(" Full Stack with "),
                    createVNode("span", { class: "text-primary-500" }, " MongoDB ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` learn how to build a blogging website with authentication with Nuxt 3, Nuxt UI and Mongoose `);
                } else {
                  return [
                    createTextVNode(" learn how to build a blogging website with authentication with Nuxt 3, Nuxt UI and Mongoose ")
                  ];
                }
              }),
              links: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xl",
                    color: "primary",
                    variant: "outline",
                    icon: "i-simple-icons-mongodb",
                    onClick: scrollToPosts
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` scroll to Posts `);
                      } else {
                        return [
                          createTextVNode(" scroll to Posts ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xl",
                    color: "white",
                    icon: "i-ph-github-logo-duotone",
                    to: "https://github.com/arashsheyda/nuxt-fullstack",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Source Code `);
                      } else {
                        return [
                          createTextVNode(" Source Code ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      size: "xl",
                      color: "primary",
                      variant: "outline",
                      icon: "i-simple-icons-mongodb",
                      onClick: scrollToPosts
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" scroll to Posts ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      size: "xl",
                      color: "white",
                      icon: "i-ph-github-logo-duotone",
                      to: "https://github.com/arashsheyda/nuxt-fullstack",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Source Code ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Illustration, { class: "mx-auto hidden h-64 lg:block" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Illustration, { class: "mx-auto hidden h-64 lg:block" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ULandingSection, { class: "relative !pt-0" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, { name: "i-logos-mongodb-icon" }, null, _parent3, _scopeId2));
                  _push3(` Posts `);
                } else {
                  return [
                    createVNode(_component_UIcon, { name: "i-logos-mongodb-icon" }),
                    createTextVNode(" Posts ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ULandingCard, {
                          title: "Add",
                          description: "create new post",
                          icon: "i-ph-file-plus-duotone",
                          class: "cursor-pointer border border-primary",
                          onClick: ($event) => unref(loggedIn) ? addModal.value = true : modal.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Hachure, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-40 h-40",
                                name: "i-ph-newspaper-duotone"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Hachure),
                                createVNode(_component_UIcon, {
                                  class: "absolute right-0 top-0 opacity-5 w-40 h-40",
                                  name: "i-ph-newspaper-duotone"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(error)) {
                          _push4(ssrRenderComponent(_component_ULandingCard, {
                            title: `${(_a = unref(error)) == null ? void 0 : _a.statusCode} Error: Click to refresh`,
                            description: (_b = unref(error)) == null ? void 0 : _b.statusMessage,
                            color: "red",
                            icon: "i-ph-warning-duotone",
                            class: "cursor-pointer border border-red-400",
                            onClick: unref(refresh)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Hachure, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UIcon, {
                                  class: "absolute right-0 top-0 opacity-5 w-36 h-36",
                                  name: "i-ph-warning-diamond-duotone"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Hachure),
                                  createVNode(_component_UIcon, {
                                    class: "absolute right-0 top-0 opacity-5 w-36 h-36",
                                    name: "i-ph-warning-diamond-duotone"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(pending)) {
                          _push4(`<!--[-->`);
                          ssrRenderList(8, (i) => {
                            _push4(ssrRenderComponent(_component_ULandingCard, {
                              title: "Fetching...",
                              description: "please wait until fetch.",
                              icon: "i-ph-circle-light",
                              class: "border border-cyan-400",
                              onClick: unref(refresh)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_USkeleton, {
                                    class: "absolute inset-0",
                                    ui: { rounded: "rounded-xl" }
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_USkeleton, {
                                      class: "absolute inset-0",
                                      ui: { rounded: "rounded-xl" }
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(data), (item) => {
                          _push4(ssrRenderComponent(_component_Card, {
                            key: item.name,
                            item,
                            onDelete: ($event) => {
                              deleteModal.value = true;
                              selected.value = item;
                            }
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_ULandingCard, {
                            title: "Add",
                            description: "create new post",
                            icon: "i-ph-file-plus-duotone",
                            class: "cursor-pointer border border-primary",
                            onClick: ($event) => unref(loggedIn) ? addModal.value = true : modal.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-40 h-40",
                                name: "i-ph-newspaper-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          unref(error) ? (openBlock(), createBlock(_component_ULandingCard, {
                            key: 0,
                            title: `${(_c = unref(error)) == null ? void 0 : _c.statusCode} Error: Click to refresh`,
                            description: (_d = unref(error)) == null ? void 0 : _d.statusMessage,
                            color: "red",
                            icon: "i-ph-warning-duotone",
                            class: "cursor-pointer border border-red-400",
                            onClick: unref(refresh)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-36 h-36",
                                name: "i-ph-warning-diamond-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["title", "description", "onClick"])) : createCommentVNode("", true),
                          unref(pending) ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(8, (i) => {
                            return createVNode(_component_ULandingCard, {
                              title: "Fetching...",
                              description: "please wait until fetch.",
                              icon: "i-ph-circle-light",
                              class: "border border-cyan-400",
                              onClick: unref(refresh)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_USkeleton, {
                                  class: "absolute inset-0",
                                  ui: { rounded: "rounded-xl" }
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]);
                          }), 64)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                            return openBlock(), createBlock(_component_Card, {
                              key: item.name,
                              item,
                              onDelete: ($event) => {
                                deleteModal.value = true;
                                selected.value = item;
                              }
                            }, null, 8, ["item", "onDelete"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createVNode(_component_ULandingCard, {
                            title: "Add",
                            description: "create new post",
                            icon: "i-ph-file-plus-duotone",
                            class: "cursor-pointer border border-primary",
                            onClick: ($event) => unref(loggedIn) ? addModal.value = true : modal.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-40 h-40",
                                name: "i-ph-newspaper-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          unref(error) ? (openBlock(), createBlock(_component_ULandingCard, {
                            key: 0,
                            title: `${(_a = unref(error)) == null ? void 0 : _a.statusCode} Error: Click to refresh`,
                            description: (_b = unref(error)) == null ? void 0 : _b.statusMessage,
                            color: "red",
                            icon: "i-ph-warning-duotone",
                            class: "cursor-pointer border border-red-400",
                            onClick: unref(refresh)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-36 h-36",
                                name: "i-ph-warning-diamond-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["title", "description", "onClick"])) : createCommentVNode("", true),
                          unref(pending) ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(8, (i) => {
                            return createVNode(_component_ULandingCard, {
                              title: "Fetching...",
                              description: "please wait until fetch.",
                              icon: "i-ph-circle-light",
                              class: "border border-cyan-400",
                              onClick: unref(refresh)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_USkeleton, {
                                  class: "absolute inset-0",
                                  ui: { rounded: "rounded-xl" }
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]);
                          }), 64)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                            return openBlock(), createBlock(_component_Card, {
                              key: item.name,
                              item,
                              onDelete: ($event) => {
                                deleteModal.value = true;
                                selected.value = item;
                              }
                            }, null, 8, ["item", "onDelete"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UModal, {
              modelValue: unref(deleteModal),
              "onUpdate:modelValue": ($event) => isRef(deleteModal) ? deleteModal.value = $event : null,
              "prevent-close": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div${_scopeId3}>Are you sure you want to delete &quot;${ssrInterpolate((_a = unref(selected)) == null ? void 0 : _a.name)}&quot; ?</div><div class="flex gap-2 mt-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          disabled: unref(loading),
                          color: "gray",
                          onClick: ($event) => {
                            deleteModal.value = false;
                            selected.value = void 0;
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          disabled: unref(loading),
                          color: "red",
                          onClick: deleteItem
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Yes, Delete `);
                            } else {
                              return [
                                createTextVNode(" Yes, Delete ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, 'Are you sure you want to delete "' + toDisplayString((_b = unref(selected)) == null ? void 0 : _b.name) + '" ?', 1),
                          createVNode("div", { class: "flex gap-2 mt-4" }, [
                            createVNode(_component_UButton, {
                              disabled: unref(loading),
                              color: "gray",
                              onClick: ($event) => {
                                deleteModal.value = false;
                                selected.value = void 0;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            createVNode(_component_UButton, {
                              disabled: unref(loading),
                              color: "red",
                              onClick: deleteItem
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Yes, Delete ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCard, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", null, 'Are you sure you want to delete "' + toDisplayString((_a = unref(selected)) == null ? void 0 : _a.name) + '" ?', 1),
                          createVNode("div", { class: "flex gap-2 mt-4" }, [
                            createVNode(_component_UButton, {
                              disabled: unref(loading),
                              color: "gray",
                              onClick: ($event) => {
                                deleteModal.value = false;
                                selected.value = void 0;
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            createVNode(_component_UButton, {
                              disabled: unref(loading),
                              color: "red",
                              onClick: deleteItem
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Yes, Delete ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USlideover, {
              modelValue: unref(addModal),
              "onUpdate:modelValue": ($event) => isRef(addModal) ? addModal.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    class: "p-4",
                    state: unref(form),
                    onSubmit: save
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Name",
                          name: "name",
                          required: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "My First Post",
                                icon: "i-ph-text-h-fill"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  placeholder: "My First Post",
                                  icon: "i-ph-text-h-fill"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "mb-3",
                          label: "URL",
                          name: "slug",
                          required: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(form).slug,
                                "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                placeholder: "my-first-post",
                                icon: "i-ph-link"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(form).slug,
                                  "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                  placeholder: "my-first-post",
                                  icon: "i-ph-link"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Color",
                          name: "color"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(form).color,
                                "onUpdate:modelValue": ($event) => unref(form).color = $event,
                                type: "color",
                                icon: "i-ph-paint-bucket",
                                "input-class": "p-1 pl-10"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(form).color,
                                  "onUpdate:modelValue": ($event) => unref(form).color = $event,
                                  type: "color",
                                  icon: "i-ph-paint-bucket",
                                  "input-class": "p-1 pl-10"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                placeholder: "Nuxt is the greatest thing!",
                                icon: "i-ph-chat-dots-light"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  placeholder: "Nuxt is the greatest thing!",
                                  icon: "i-ph-chat-dots-light"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Body",
                          name: "body"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_MDCEditor, {
                                modelValue: unref(form).body,
                                "onUpdate:modelValue": ($event) => unref(form).body = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_MDCEditor, {
                                  modelValue: unref(form).body,
                                  "onUpdate:modelValue": ($event) => unref(form).body = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          disabled: unref(loading),
                          class: "mt-4",
                          type: "submit"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            class: "mb-3",
                            label: "Name",
                            name: "name",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "My First Post",
                                icon: "i-ph-text-h-fill"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "mb-3",
                            label: "URL",
                            name: "slug",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(form).slug,
                                "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                placeholder: "my-first-post",
                                icon: "i-ph-link"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "mb-3",
                            label: "Color",
                            name: "color"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(form).color,
                                "onUpdate:modelValue": ($event) => unref(form).color = $event,
                                type: "color",
                                icon: "i-ph-paint-bucket",
                                "input-class": "p-1 pl-10"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            class: "mb-3",
                            label: "Description",
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                placeholder: "Nuxt is the greatest thing!",
                                icon: "i-ph-chat-dots-light"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Body",
                            name: "body"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_MDCEditor, {
                                modelValue: unref(form).body,
                                "onUpdate:modelValue": ($event) => unref(form).body = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            disabled: unref(loading),
                            class: "mt-4",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      class: "p-4",
                      state: unref(form),
                      onSubmit: save
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Name",
                          name: "name",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "My First Post",
                              icon: "i-ph-text-h-fill"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "mb-3",
                          label: "URL",
                          name: "slug",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).slug,
                              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                              placeholder: "my-first-post",
                              icon: "i-ph-link"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Color",
                          name: "color"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).color,
                              "onUpdate:modelValue": ($event) => unref(form).color = $event,
                              type: "color",
                              icon: "i-ph-paint-bucket",
                              "input-class": "p-1 pl-10"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          class: "mb-3",
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Nuxt is the greatest thing!",
                              icon: "i-ph-chat-dots-light"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Body",
                          name: "body"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MDCEditor, {
                              modelValue: unref(form).body,
                              "onUpdate:modelValue": ($event) => unref(form).body = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          disabled: unref(loading),
                          class: "mt-4",
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ULandingHero, {
                class: "md:text-start text-center",
                orientation: "horizontal",
                ui: { container: "flex lg:gap-12" }
              }, {
                title: withCtx(() => [
                  createTextVNode(" Full Stack with "),
                  createVNode("span", { class: "text-primary-500" }, " MongoDB ")
                ]),
                description: withCtx(() => [
                  createTextVNode(" learn how to build a blogging website with authentication with Nuxt 3, Nuxt UI and Mongoose ")
                ]),
                links: withCtx(() => [
                  createVNode(_component_UButton, {
                    size: "xl",
                    color: "primary",
                    variant: "outline",
                    icon: "i-simple-icons-mongodb",
                    onClick: scrollToPosts
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" scroll to Posts ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    size: "xl",
                    color: "white",
                    icon: "i-ph-github-logo-duotone",
                    to: "https://github.com/arashsheyda/nuxt-fullstack",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Source Code ")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_Illustration, { class: "mx-auto hidden h-64 lg:block" })
                ]),
                _: 1
              }),
              createVNode("div", {
                ref_key: "posts",
                ref: posts
              }, [
                createVNode(_component_ULandingSection, { class: "relative !pt-0" }, {
                  title: withCtx(() => [
                    createVNode(_component_UIcon, { name: "i-logos-mongodb-icon" }),
                    createTextVNode(" Posts ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createVNode(_component_ULandingCard, {
                            title: "Add",
                            description: "create new post",
                            icon: "i-ph-file-plus-duotone",
                            class: "cursor-pointer border border-primary",
                            onClick: ($event) => unref(loggedIn) ? addModal.value = true : modal.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-40 h-40",
                                name: "i-ph-newspaper-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          unref(error) ? (openBlock(), createBlock(_component_ULandingCard, {
                            key: 0,
                            title: `${(_a = unref(error)) == null ? void 0 : _a.statusCode} Error: Click to refresh`,
                            description: (_b = unref(error)) == null ? void 0 : _b.statusMessage,
                            color: "red",
                            icon: "i-ph-warning-duotone",
                            class: "cursor-pointer border border-red-400",
                            onClick: unref(refresh)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Hachure),
                              createVNode(_component_UIcon, {
                                class: "absolute right-0 top-0 opacity-5 w-36 h-36",
                                name: "i-ph-warning-diamond-duotone"
                              })
                            ]),
                            _: 1
                          }, 8, ["title", "description", "onClick"])) : createCommentVNode("", true),
                          unref(pending) ? (openBlock(), createBlock(Fragment, { key: 1 }, renderList(8, (i) => {
                            return createVNode(_component_ULandingCard, {
                              title: "Fetching...",
                              description: "please wait until fetch.",
                              icon: "i-ph-circle-light",
                              class: "border border-cyan-400",
                              onClick: unref(refresh)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_USkeleton, {
                                  class: "absolute inset-0",
                                  ui: { rounded: "rounded-xl" }
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]);
                          }), 64)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                            return openBlock(), createBlock(_component_Card, {
                              key: item.name,
                              item,
                              onDelete: ($event) => {
                                deleteModal.value = true;
                                selected.value = item;
                              }
                            }, null, 8, ["item", "onDelete"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 512),
              createVNode(_component_UModal, {
                modelValue: unref(deleteModal),
                "onUpdate:modelValue": ($event) => isRef(deleteModal) ? deleteModal.value = $event : null,
                "prevent-close": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UCard, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", null, 'Are you sure you want to delete "' + toDisplayString((_a = unref(selected)) == null ? void 0 : _a.name) + '" ?', 1),
                        createVNode("div", { class: "flex gap-2 mt-4" }, [
                          createVNode(_component_UButton, {
                            disabled: unref(loading),
                            color: "gray",
                            onClick: ($event) => {
                              deleteModal.value = false;
                              selected.value = void 0;
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"]),
                          createVNode(_component_UButton, {
                            disabled: unref(loading),
                            color: "red",
                            onClick: deleteItem
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Yes, Delete ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_USlideover, {
                modelValue: unref(addModal),
                "onUpdate:modelValue": ($event) => isRef(addModal) ? addModal.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    class: "p-4",
                    state: unref(form),
                    onSubmit: save
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        class: "mb-3",
                        label: "Name",
                        name: "name",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "My First Post",
                            icon: "i-ph-text-h-fill"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "mb-3",
                        label: "URL",
                        name: "slug",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            placeholder: "my-first-post",
                            icon: "i-ph-link"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "mb-3",
                        label: "Color",
                        name: "color"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).color,
                            "onUpdate:modelValue": ($event) => unref(form).color = $event,
                            type: "color",
                            icon: "i-ph-paint-bucket",
                            "input-class": "p-1 pl-10"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        class: "mb-3",
                        label: "Description",
                        name: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            placeholder: "Nuxt is the greatest thing!",
                            icon: "i-ph-chat-dots-light"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Body",
                        name: "body"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_MDCEditor, {
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        disabled: unref(loading),
                        class: "mt-4",
                        type: "submit"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["state"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DpH16wkf.js.map
