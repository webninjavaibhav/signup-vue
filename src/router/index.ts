import * as VueRouter from "vue-router";
import Signup from "../page/Signup.vue";
import Signup2 from "../page/Signup2.vue";
import Signup3 from "../page/Signup3.vue";

const routes: VueRouter.RouteRecordRaw[] = [
  { path: "/", name: "signup1", component: Signup },
  { path: "/signup2", name: "Signup2", component: Signup2 },
  { path: "/signup3", name: "Signup3", component: Signup3 },
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  strict: true,
});
export default router;
