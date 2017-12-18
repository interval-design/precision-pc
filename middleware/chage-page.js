/**
 * 中间件，每次路由切换时调用
 * @authors Pony <mycnj123@gmail.com>
 */

export default function ({isServer, route, store, redirect }, next) {
  // 判断页面是否需要登录访问
  const limitAccessPages = ['user','user-report','user-pay','user-order'];
  const limit = limitAccessPages.includes(route.name);
  if (!isServer) {
    store.dispatch('setUser', res => {}).then(res => {
      if (limit && !store.state.user) {
        return redirect('/');
      }
    });
  }


  const fullPageNames = ['index', 'service-child', 'service-ecosystem','service-filter','research-microbiology'];
  const full = fullPageNames.includes(route.name);

  // set full
  if (!Object.is(store.state.layoutsFull, full)) {
    store.commit('SET_LAYOUTS_FULL', full)
  }

  next()
}
