<script setup lang="ts">
// import { getRootPath } from "@/lib/utils";

useHead({
  link() {
    return [
      // { rel: "icon", type: "image/png", href: `${getRootPath()}favicon.ico` },
      { rel: "icon", type: "image/png", href: "/favicon.ico" },
    ];
  },
  title() {
    return "开发功能展示";
  },
});
</script>
<template>
  <NuxtPage></NuxtPage>
</template>
<style>
html {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
  height: 100%;
}

body {
  height: 100%;
}
</style>
