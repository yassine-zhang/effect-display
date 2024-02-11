<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          近期更新视频
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          以下均为我在B站发的视频内容，感兴趣可以前去观看。你的喜欢是我最大的动力❤️
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
          <img
            :src="post.imageUrl"
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
          />
          <div
            class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
          />

          <div
            class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
          >
            <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg
                viewBox="0 0 2 2"
                class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="flex gap-x-2.5">
                <img
                  :src="post.author.imageUrl"
                  alt=""
                  class="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                {{ post.author.name }}
              </div>
            </div>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "组织结构纵向横向树形图-原生JS实现",
    href: "https://www.bilibili.com/video/BV18z4y137Nv/?spm_id_from=333.999.0.0&vd_source=409a76ad81e6b342b8027e8bfdbd31d4",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/user/video/8b91d697250057525c825f68356553041f87f9f5.jpg",
    date: "Aug 14, 2023",
    datetime: "2023-8-14",
    author: {
      name: "全栈工程师-张工",
      imageUrl:
        "/user/c4cfa12257f23b676b304a78570f9a77f5cd1ff3.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
    },
  },
  {
    id: 2,
    title: "原生HTTPConnection对接新大陆API开发案例",
    href: "https://www.bilibili.com/video/BV1i14y1d7uu/?spm_id_from=333.999.0.0&vd_source=409a76ad81e6b342b8027e8bfdbd31d4",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/user/video/d0b93475af2c069ac3373f957bdf8a64e2678332.jpg",
    date: "Jul 01, 2023",
    datetime: "2023-07-01",
    author: {
      name: "全栈工程师-张工",
      imageUrl:
        "/user/c4cfa12257f23b676b304a78570f9a77f5cd1ff3.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
    },
  },
  {
    id: 3,
    title: "新大陆物联网技能大赛Python-钻井深度检测功能开发",
    href: "https://www.bilibili.com/video/BV1Bh411P7Kv/?spm_id_from=333.999.0.0&vd_source=409a76ad81e6b342b8027e8bfdbd31d4",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/user/video/ad6661f9f7c8d9c25f7ee0e2c3560f01ef2d390f.jpg",
    date: "Jun 28, 2023",
    datetime: "2023-6-28",
    author: {
      name: "全栈工程师-张工",
      imageUrl:
        "/user/c4cfa12257f23b676b304a78570f9a77f5cd1ff3.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
    },
  },
  // More posts...
];
</script>
