import { _ as _sfc_main$1 } from "./Page-Df_iVPP0.js";
import { _ as _sfc_main$2 } from "./PageBody-DYSsaakw.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UPage = _sfc_main$1;
  const _component_UPageBody = _sfc_main$2;
  _push(ssrRenderComponent(_component_UPage, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UPageBody, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` used stack: <br${_scopeId2}><div class="flex flex-col ml-4"${_scopeId2}><span${_scopeId2}> - Frontend: Nuxt 3 </span><span${_scopeId2}> - Backend: Nitro </span><span${_scopeId2}> - Database: MongoDB </span><span${_scopeId2}> - ORM: Mongoose </span><span${_scopeId2}> - hosting: Vercel </span></div>`);
            } else {
              return [
                createTextVNode(" used stack: "),
                createVNode("br"),
                createVNode("div", { class: "flex flex-col ml-4" }, [
                  createVNode("span", null, " - Frontend: Nuxt 3 "),
                  createVNode("span", null, " - Backend: Nitro "),
                  createVNode("span", null, " - Database: MongoDB "),
                  createVNode("span", null, " - ORM: Mongoose "),
                  createVNode("span", null, " - hosting: Vercel ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UPageBody, null, {
            default: withCtx(() => [
              createTextVNode(" used stack: "),
              createVNode("br"),
              createVNode("div", { class: "flex flex-col ml-4" }, [
                createVNode("span", null, " - Frontend: Nuxt 3 "),
                createVNode("span", null, " - Backend: Nitro "),
                createVNode("span", null, " - Database: MongoDB "),
                createVNode("span", null, " - ORM: Mongoose "),
                createVNode("span", null, " - hosting: Vercel ")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-BtL9oTXr.js.map
