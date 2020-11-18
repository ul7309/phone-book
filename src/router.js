import Vue from "vue";
import Router from "vue-router";
import Contacts from "@/components/Contacts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Contacts
    },
    {
      path: "/addContacts",
      component: () => import("@/components/addContacts.vue")
    }
  ]
});
