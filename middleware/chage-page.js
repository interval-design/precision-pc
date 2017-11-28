/**
 * 中间件，每次路由切换时调用
 * @authors Pony <mycnj123@gmail.com>
 */

export default function ({ route, store }, next) {
  const fullPageNames = ['index', 'service-child', 'service-ecosystem','service-filter','research-microbiology'];
  const full = fullPageNames.includes(route.name);

  // set full
  if (!Object.is(store.state.layoutsFull, full)) {
    store.commit('SET_LAYOUTS_FULL', full)
  }
  next()
}
