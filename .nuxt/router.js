import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _575a22b4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _2de76b2c = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _9b8e11d4 = () => import('../pages/service/child.vue' /* webpackChunkName: "pages/service/child" */).then(m => m.default || m)
const _1279900c = () => import('../pages/service/ecosystem.vue' /* webpackChunkName: "pages/service/ecosystem" */).then(m => m.default || m)
const _2ba31e24 = () => import('../pages/service/filter.vue' /* webpackChunkName: "pages/service/filter" */).then(m => m.default || m)
const _2fb207c1 = () => import('../pages/research/microbiology.vue' /* webpackChunkName: "pages/research/microbiology" */).then(m => m.default || m)
const _55ace3fb = () => import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */).then(m => m.default || m)
const _a0c81e1a = () => import('../pages/about/join-us.vue' /* webpackChunkName: "pages/about/join-us" */).then(m => m.default || m)
const _3b21e47a = () => import('../pages/user/pay/index.vue' /* webpackChunkName: "pages/user/pay/index" */).then(m => m.default || m)
const _6417a72c = () => import('../pages/research/dynamic/index.vue' /* webpackChunkName: "pages/research/dynamic/index" */).then(m => m.default || m)
const _93a62590 = () => import('../pages/about/introduction.vue' /* webpackChunkName: "pages/about/introduction" */).then(m => m.default || m)
const _01d70ae6 = () => import('../pages/user/order.vue' /* webpackChunkName: "pages/user/order" */).then(m => m.default || m)
const _2af24624 = () => import('../pages/user/paper.vue' /* webpackChunkName: "pages/user/paper" */).then(m => m.default || m)
const _5052b951 = () => import('../pages/user/pay/status.vue' /* webpackChunkName: "pages/user/pay/status" */).then(m => m.default || m)
const _c6a5fb56 = () => import('../pages/research/dynamic/_id/index.vue' /* webpackChunkName: "pages/research/dynamic/_id/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _575a22b4,
			name: "index"
		},
		{
			path: "/user",
			component: _2de76b2c,
			name: "user"
		},
		{
			path: "/service/child",
			component: _9b8e11d4,
			name: "service-child"
		},
		{
			path: "/service/ecosystem",
			component: _1279900c,
			name: "service-ecosystem"
		},
		{
			path: "/service/filter",
			component: _2ba31e24,
			name: "service-filter"
		},
		{
			path: "/research/microbiology",
			component: _2fb207c1,
			name: "research-microbiology"
		},
		{
			path: "/about/team",
			component: _55ace3fb,
			name: "about-team"
		},
		{
			path: "/about/join-us",
			component: _a0c81e1a,
			name: "about-join-us"
		},
		{
			path: "/user/pay",
			component: _3b21e47a,
			name: "user-pay"
		},
		{
			path: "/research/dynamic",
			component: _6417a72c,
			name: "research-dynamic"
		},
		{
			path: "/about/introduction",
			component: _93a62590,
			name: "about-introduction"
		},
		{
			path: "/user/order",
			component: _01d70ae6,
			name: "user-order"
		},
		{
			path: "/user/paper",
			component: _2af24624,
			name: "user-paper"
		},
		{
			path: "/user/pay/status",
			component: _5052b951,
			name: "user-pay-status"
		},
		{
			path: "/research/dynamic/:id",
			component: _c6a5fb56,
			name: "research-dynamic-id"
		}
    ],
    fallback: false
  })
}
