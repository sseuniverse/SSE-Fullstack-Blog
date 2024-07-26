import { ao as defineNuxtRouteMiddleware, e as useAuth, ap as navigateTo } from "../server.mjs";
import { watch } from "vue";
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
import "vue/server-renderer";
import "ohash";
import "@iconify/utils/lib/css/icon";
const auth = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useAuth();
  watch(loggedIn, () => {
    if (!loggedIn.value) return navigateTo("/");
  });
  if (!loggedIn.value) return navigateTo("/");
});
export {
  auth as default
};
//# sourceMappingURL=auth-Bnz4sS76.js.map
