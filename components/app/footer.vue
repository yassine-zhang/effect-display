<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-7" src="/favicon.svg" alt="Company name" />
          <p class="text-sm leading-6 text-gray-600">
            一本书、一杯咖啡和一台电脑足矣。
          </p>
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">
                博文
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.blogs" :key="item.name">
                  <a
                    v-if="item.href !== '#'"
                    target="_blank"
                    :href="item.href"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                  <span v-else class="text-sm leading-6 text-gray-600">{{
                    item.name
                  }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">
                联系方式
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.concat" :key="item.name">
                  <a
                    v-if="item.href !== '#'"
                    target="_blank"
                    :href="item.href"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >{{ item.name }}</a
                  >
                  <span v-else class="text-sm leading-6 text-gray-600">{{
                    item.name
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-500">
          &copy; 2024 张永鑫版权所有.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import bili from "/components/icons/bili.vue";
import yuque from "/components/icons/yuque.vue";
import csdn from "/components/icons/csdn.vue";
import ownBlog from "/components/icons/own-blog.vue";
import github from "/components/icons/github.vue";

const navigation = {
  blogs: [
    { name: "ZDOC博客网站", href: "https://reports.org.cn/" },
    { name: "语雀大赛笔记花园", href: "https://www.yuque.com/newlandiot" },
    {
      name: "早期博客园文章",
      href: "https://blog.csdn.net/weixin_46679824?spm=1000.2115.3001.5343",
    },
  ],
  concat: [
    { name: "QQ：57878778", href: "#" },
    { name: "Tel: 16599999215", href: "#" },
  ],
  social: [
    {
      name: "Bilibili",
      href: "https://space.bilibili.com/483711690?spm_id_from=333.1007.0.0",
      icon: bili,
    },
    {
      name: "Yuque",
      href: "https://www.yuque.com/newlandiot",
      icon: yuque,
    },
    {
      name: "Own Blog",
      href: "https://reports.org.cn/",
      icon: ownBlog,
    },
    {
      name: "CSDN",
      href: "https://blog.csdn.net/weixin_46679824?spm=1000.2115.3001.5343",
      icon: csdn,
    },
    {
      name: "GitHub",
      href: "https://github.com/yassine-zhang",
      icon: github,
    },
  ],
};
</script>
