export default defineNuxtRouteMiddleware((to, from) => {
  // 如果访问 /dashboard 默认导流到此面板第一页
  if (to.path === "/dashboard") {
    return navigateTo("/dashboard/behaviorVerification");
  }
});
