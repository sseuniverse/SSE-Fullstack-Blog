import { defineComponent, useSlots, toRef, computed, mergeProps, unref, useSSRContext } from "vue";
import { g as useUI } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Page",
  __ssrInlineRender: true,
  props: {
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
    const config = {
      wrapper: "flex flex-col lg:grid lg:grid-cols-10 lg:gap-8",
      left: "lg:col-span-2",
      center: {
        narrow: "lg:col-span-6",
        base: "lg:col-span-8",
        full: "lg:col-span-10"
      },
      right: "lg:col-span-2 order-first lg:order-last"
    };
    const props = __props;
    const slots = useSlots();
    const { ui, attrs } = useUI("page", toRef(props, "ui"), config, toRef(props, "class"), true);
    const centerClass = computed(() => {
      if (slots.left && slots.right) {
        return ui.value.center.narrow;
      } else if (slots.left || slots.right) {
        return ui.value.center.base;
      }
      return ui.value.center.full;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      if (_ctx.$slots.left) {
        _push(`<div class="${ssrRenderClass(unref(ui).left)}">`);
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(centerClass))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.right) {
        _push(`<div class="${ssrRenderClass(unref(ui).right)}">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@sse-ui/nuxt/components/page/Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Page-Df_iVPP0.js.map
