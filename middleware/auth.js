export default async function({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.userData;
  const urlRequiresAuth = /^\/account(\/|$)/.test(route.fullPath);

  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/login');
  }

  return;
}
