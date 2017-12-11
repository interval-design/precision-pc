import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _cf33702c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0c321ba6 = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _1e66cb3e = () => import('../pages/service/ecosystem.vue' /* webpackChunkName: "pages/service/ecosystem" */).then(m => m.default || m)
const _78d2b537 = () => import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */).then(m => m.default || m)
const _797107e0 = () => import('../pages/user/report.vue' /* webpackChunkName: "pages/user/report" */).then(m => m.default || m)
const _45187392 = () => import('../pages/about/join-us.vue' /* webpackChunkName: "pages/about/join-us" */).then(m => m.default || m)
const _2ddb4df6 = () => import('../pages/research/microbiology.vue' /* webpackChunkName: "pages/research/microbiology" */).then(m => m.default || m)
const _6f91e0ff = () => import('../pages/user/pay/index.vue' /* webpackChunkName: "pages/user/pay/index" */).then(m => m.default || m)
const _fa087b18 = () => import('../pages/about/introduction.vue' /* webpackChunkName: "pages/about/introduction" */).then(m => m.default || m)
const _7751442a = () => import('../pages/service/filter.vue' /* webpackChunkName: "pages/service/filter" */).then(m => m.default || m)
const _409e03a6 = () => import('../pages/research/dynamic/index.vue' /* webpackChunkName: "pages/research/dynamic/index" */).then(m => m.default || m)
const _3fde674c = () => import('../pages/service/child.vue' /* webpackChunkName: "pages/service/child" */).then(m => m.default || m)
const _678a4d95 = () => import('../pages/user/pay/status.vue' /* webpackChunkName: "pages/user/pay/status" */).then(m => m.default || m)
const _6be0db91 = () => import('../pages/research/dynamic/_id/index.vue' /* webpackChunkName: "pages/research/dynamic/_id/index" */).then(m => m.default || m)
const _10636e66 = () => import('../pages/user/order/_id.vue' /* webpackChunkName: "pages/user/order/_id" */).then(m => m.default || m)



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
			component: _cf33702c,
			name: "index"
		},
		{
			path: "/user",
			component: _0c321ba6,
			name: "user"
		},
		{
			path: "/service/ecosystem",
			component: _1e66cb3e,
			name: "service-ecosystem"
		},
		{
			path: "/about/team",
			component: _78d2b537,
			name: "about-team"
		},
		{
			path: "/user/report",
			component: _797107e0,
			name: "user-report"
		},
		{
			path: "/about/join-us",
			component: _45187392,
			name: "about-join-us"
		},
		{
			path: "/research/microbiology",
			component: _2ddb4df6,
			name: "research-microbiology"
		},
		{
			path: "/user/pay",
			component: _6f91e0ff,
			name: "user-pay"
		},
		{
			path: "/about/introduction",
			component: _fa087b18,
			name: "about-introduction"
		},
		{
			path: "/service/filter",
			component: _7751442a,
			name: "service-filter"
		},
		{
			path: "/research/dynamic",
			component: _409e03a6,
			name: "research-dynamic"
		},
		{
			path: "/service/child",
			component: _3fde674c,
			name: "service-child"
		},
		{
			path: "/user/pay/status",
			component: _678a4d95,
			name: "user-pay-status"
		},
		{
			path: "/research/dynamic/:id",
			component: _6be0db91,
			name: "research-dynamic-id"
		},
		{
			path: "/user/order/:id?",
			component: _10636e66,
			name: "user-order-id"
		}
    ],
    fallback: false
  })
}
