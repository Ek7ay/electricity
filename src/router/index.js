import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/pages/login/Login";
import Home from "../pages/home/Home";
import Navigation from "../pages/navigation/Navigation"
import Category from "../pages/category/Category"
import Eat from "../pages/eat/Eat"
import Cart from "../pages/cart/Cart"
import Mine from "../pages/mine/Mine"
import Map from "../pages/home/components/Map";


// 解决多次点击重复路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
  // !!注意: 二级路由不需要加 '/'
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: "/navigation",
      name: "navigation",
      component: Navigation,
      children: [{
        path: "/navigation",
        redirect: '/navigation/home'
      },{
        path: "home",
        name: "home",
        component: Home,
        children: [{
          path: 'map',
          name: 'map',
          component: Map,
        }]
      },{
        path: "category",
        name: "category",
        component: Category
      },{
        path: "eat",
        name: "eat",
        component: Eat
      },{
        path: "cart",
        name: "cart",
        component: Cart
      },{
        path: "mine",
        name: "mine",
        component: Mine
      }]
    }
  ]
})
