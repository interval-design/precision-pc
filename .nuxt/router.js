import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _cf33702c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0c321ba6 = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _3fde674c = () => import('../pages/service/child.vue' /* webpackChunkName: "pages/service/child" */).then(m => m.default || m)
const _1e66cb3e = () => import('../pages/service/ecosystem.vue' /* webpackChunkName: "pages/service/ecosystem" */).then(m => m.default || m)
const _2ddb4df6 = () => import('../pages/research/microbiology.vue' /* webpackChunkName: "pages/research/microbiology" */).then(m => m.default || m)
const _4e181760 = () => import('../pages/user/paper.vue' /* webpackChunkName: "pages/user/paper" */).then(m => m.default || m)
const _409e03a6 = () => import('../pages/research/dynamic/index.vue' /* webpackChunkName: "pages/research/dynamic/index" */).then(m => m.default || m)
const _7751442a = () => import('../pages/service/filter.vue' /* webpackChunkName: "pages/service/filter" */).then(m => m.default || m)
const _24fcdc22 = () => import('../pages/user/order.vue' /* webpackChunkName: "pages/user/order" */).then(m => m.default || m)
const _6f91e0ff = () => import('../pages/user/pay/index.vue' /* webpackChunkName: "pages/user/pay/index" */).then(m => m.default || m)
const _678a4d95 = () => import('../pages/user/pay/status.vue' /* webpackChunkName: "pages/user/pay/status" */).then(m => m.default || m)
const _6be0db91 = () => import('../pages/research/dynamic/_id/index.vue' /* webpackChunkName: "pages/research/dynamic/_id/index" */).then(m => m.default || m)



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
			path: "/service/child",
			component: _3fde674c,
			name: "service-child"
		},
		{
			path: "/service/ecosystem",
			component: _1e66cb3e,
			name: "service-ecosystem"
		},
		{
			path: "/research/microbiology",
			component: _2ddb4df6,
			name: "research-microbiology"
		},
		{
			path: "/user/paper",
			component: _4e181760,
			name: "user-paper"
		},
		{
			path: "/research/dynamic",
			component: _409e03a6,
			name: "research-dynamic"
		},
		{
			path: "/service/filter",
			component: _7751442a,
			name: "service-filter"
		},
		{
			path: "/user/order",
			component: _24fcdc22,
			name: "user-order"
		},
		{
			path: "/user/pay",
			component: _6f91e0ff,
			name: "user-pay"
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
		}
    ],
    fallback: false
  })
}
