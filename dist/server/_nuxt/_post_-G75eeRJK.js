import { _ as _sfc_main$1 } from "./Page-Df_iVPP0.js";
import { _ as __nuxt_component_9, a as _sfc_main$2, b as _sfc_main$3 } from "./MDCEditor-CWr9Lxgl.js";
import { b as useToast, c as useRoute, d as useRouter, e as useAuth, f as __nuxt_component_0 } from "../server.mjs";
import { u as useFetch } from "./fetch-D2cfvx3x.js";
import { defineComponent, withAsyncContext, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "tailwind-merge";
import "./MDCRenderer-wQ-qDIVl.js";
import "destr";
import "scule";
import "property-information";
import "./node-B5VQLu6X.js";
import "ohash";
import "hookable";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
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
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[post]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    useAuth();
    const url = `/api/posts/${route.params.post}`;
    const { data, pending } = ([__temp, __restore] = withAsyncContext(async () => useFetch(url, "$W6dR4D6mwF").then(async (res) => {
      if (res.data.value) await $fetch(url, { method: "PATCH" });
      return res;
    })), __temp = await __temp, __restore(), __temp);
    const editable = ref(false);
    const editing = ref(false);
    function toggleEdit() {
      if (editing.value) {
        editing.value = false;
        router.replace({ query: { edit: void 0 } });
      } else {
        editing.value = true;
        router.replace({ query: { edit: "true" } });
      }
    }
    async function update() {
      var _a, _b;
      await $fetch(url, {
        method: "PUT",
        body: {
          name: (_a = data.value) == null ? void 0 : _a.name,
          body: (_b = data.value) == null ? void 0 : _b.body
        }
      });
      toast.add({
        icon: "i-ph-floppy-disk-duotone",
        color: "green",
        title: "Updated!"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$1;
      const _component_USkeleton = __nuxt_component_9;
      const _component_MDCEditor = _sfc_main$2;
      const _component_MDC = _sfc_main$3;
      const _component_UButton = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UPage, mergeProps({ class: "relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([
              unref(editing) ? "border border-cyan-400" : "p-4 bg-gray-100 dark:bg-gray-950 min-h-screen",
              "post relative m-4 rounded-lg"
            ])}"${_scopeId}>`);
            if (unref(pending)) {
              _push2(`<div class="flex flex-col gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(16, (i) => {
                _push2(ssrRenderComponent(_component_USkeleton, {
                  key: i,
                  class: "w-full",
                  style: {
                    height: `${Math.floor(Math.random() * (3 - 1 + 1) + 1)}rem`
                  },
                  ui: { rounded: "rounded-lg" }
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else if (unref(data)) {
              _push2(`<!--[-->`);
              if (unref(editable) && unref(editing)) {
                _push2(ssrRenderComponent(_component_MDCEditor, {
                  modelValue: unref(data).body,
                  "onUpdate:modelValue": ($event) => unref(data).body = $event,
                  class: "min-h-screen"
                }, null, _parent2, _scopeId));
              } else if (unref(data).body) {
                _push2(ssrRenderComponent(_component_MDC, {
                  value: unref(data).body
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<div class="flex justify-center p-10 text-center"${_scopeId}><h1${_scopeId}> no content! <br${_scopeId}>`);
                if (unref(editable) && !unref(editing)) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "cyan",
                    icon: unref(editing) ? "i-ph-x" : "i-ph-pen-duotone",
                    onClick: toggleEdit
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Start writing... `);
                      } else {
                        return [
                          createTextVNode(" Start writing... ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</h1></div>`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(editable)) {
              _push2(`<div class="absolute right-0 top-1 flex gap-2"${_scopeId}>`);
              if (unref(editing)) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "green",
                  icon: "i-ph-floppy-disk-duotone",
                  onClick: update
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "cyan",
                icon: unref(editing) ? "i-ph-x" : "i-ph-pen-duotone",
                onClick: toggleEdit
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: [
                  "post relative m-4 rounded-lg",
                  unref(editing) ? "border border-cyan-400" : "p-4 bg-gray-100 dark:bg-gray-950 min-h-screen"
                ]
              }, [
                unref(pending) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col gap-8"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(16, (i) => {
                    return createVNode(_component_USkeleton, {
                      key: i,
                      class: "w-full",
                      style: {
                        height: `${Math.floor(Math.random() * (3 - 1 + 1) + 1)}rem`
                      },
                      ui: { rounded: "rounded-lg" }
                    }, null, 8, ["style"]);
                  }), 64))
                ])) : unref(data) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  unref(editable) && unref(editing) ? (openBlock(), createBlock(_component_MDCEditor, {
                    key: 0,
                    modelValue: unref(data).body,
                    "onUpdate:modelValue": ($event) => unref(data).body = $event,
                    class: "min-h-screen"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : unref(data).body ? (openBlock(), createBlock(_component_MDC, {
                    key: 1,
                    value: unref(data).body
                  }, null, 8, ["value"])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "flex justify-center p-10 text-center"
                  }, [
                    createVNode("h1", null, [
                      createTextVNode(" no content! "),
                      createVNode("br"),
                      unref(editable) && !unref(editing) ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "cyan",
                        icon: unref(editing) ? "i-ph-x" : "i-ph-pen-duotone",
                        onClick: toggleEdit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Start writing... ")
                        ]),
                        _: 1
                      }, 8, ["icon"])) : createCommentVNode("", true)
                    ])
                  ]))
                ], 64)) : createCommentVNode("", true)
              ], 2),
              unref(editable) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute right-0 top-1 flex gap-2"
              }, [
                unref(editing) ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  color: "green",
                  icon: "i-ph-floppy-disk-duotone",
                  onClick: update
                })) : createCommentVNode("", true),
                createVNode(_component_UButton, {
                  color: "cyan",
                  icon: unref(editing) ? "i-ph-x" : "i-ph-pen-duotone",
                  onClick: toggleEdit
                }, null, 8, ["icon"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[post].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_post_-G75eeRJK.js.map
