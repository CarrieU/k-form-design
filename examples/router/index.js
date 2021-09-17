import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "myForm"
    },
    {
      path: "/myForm",
      name: "myForm",
      //D:\GitHub\k-form-design\examples\views\myForm\index.vue
      component: () => import("../views/myForm/index.vue")
    },
    {
      path: "/formDesign",
      name: "formDesign",
      component: () => import("../views/formDesign/index.vue")
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("../views/demo/index.vue")
    }
  ]
});
