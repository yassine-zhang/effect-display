<template>
  <section class="min-h-screen bg-gradient-to-b from-indigo-100/20">
    <header class="relative z-50 bg-white border-b">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center gap-x-12">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/favicon.svg" alt="" />
          </NuxtLink>
          <div class="hidden lg:flex lg:gap-x-12">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-sm font-semibold leading-6 text-gray-900"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex">
          <NuxtLink to="/" class="text-sm font-semibold leading-6 text-gray-900"
            >回到主页 <span aria-hidden="true">&rarr;</span></NuxtLink
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/favicon.svg" alt="" />
            </NuxtLink>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <NuxtLink
                  to="/"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >回到主页</NuxtLink
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div
      class="fixed inset-y-0 right-1/2 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      aria-hidden="true"
    />

    <div
      class="md:mt-8 w-auto mx-auto max-w-screen-lg md:rounded-xl overflow-hidden"
    >
      <img
        class="relative w-full h-80 object-cover md:saturate-200"
        src="/user/clock.avif"
      />
    </div>
    <div
      class="flex flex-col gap-3 m-auto max-w-3xl pt-5 pb-16 px-5 relative text-sm"
    >
      <h2 class="text-3xl">迈入IT计算机行业 ~ Present</h2>
      <div class="flex gap-5 text-gray-500 -mt-2">
        <p>编辑：张永鑫/全栈工程师-张工</p>
        <p>最后更新时间：2024-02-13 19:10</p>
      </div>
      <p class="border-l-2 border-red-600 pl-2 text-red-500 font-bold">
        时间线有一定误差，一切以实际为准
      </p>
      <p class="indent-4 hyphens-auto text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, iusto.
        Perferendis minus minima ullam sit fugiat est dolores cum. Facilis at
        quibusdam numquam tempora ullam explicabo. Neque harum quam quibusdam!
        Esse hic voluptate ipsum magnam delectus nemo perspiciatis doloribus
        animi facere reprehenderit omnis amet nostrum distinctio corporis, optio
        quisquam officiis neque aspernatur tempora excepturi rem natus. Aperiam
        quasi eaque neque.
      </p>
      <div class="flex mt-12 gap-5 flex-wrap text-sm">
        <div class="flex items-center gap-2">
          <span
            :class="[
              tlc.school.iconBackground,
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
            ]"
          >
            <component
              :is="tlc.school.icon"
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </span>
          学校 - 物联网经历
        </div>
        <div class="flex items-center gap-2">
          <span
            :class="[
              tlc.failed.iconBackground,
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
            ]"
          >
            <component
              :is="tlc.failed.icon"
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </span>
          放弃 - 游戏开发
        </div>
        <div class="flex items-center gap-2">
          <span
            :class="[
              tlc.up.iconBackground,
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
            ]"
          >
            <component
              :is="tlc.up.icon"
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </span>
          正轨 - 全栈开发
        </div>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-2 text-sm text-gray-500">timeline</span>
        </div>
      </div>
      <ul role="list" class="-mb-8 mt-2">
        <li v-for="(event, eventIdx) in timeline" :key="event.id">
          <div
            class="relative pb-8 rounded-2xl hover:bg-gray-200 hover:scale-105 transition-all"
          >
            <span
              v-if="eventIdx !== timeline.length - 1"
              class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
            <div class="relative flex space-x-3">
              <div>
                <span
                  :class="[
                    event.iconBackground,
                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                  ]"
                >
                  <component
                    :is="event.icon"
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p class="text-sm text-gray-500">
                    {{ event.content }}
                    <a
                      :href="event.href"
                      class="cursor-default font-medium text-gray-900"
                      >{{ event.target }}</a
                    >
                  </p>
                </div>
                <div
                  class="whitespace-nowrap text-right text-sm text-gray-500 pr-2"
                >
                  <time :datetime="event.datetime">{{ event.datetime }}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import {
  AcademicCapIcon as SchoolIcon,
  ExclamationTriangleIcon as FailedIcon,
  ArrowTrendingUpIcon as UpIcon,
  FilmIcon as LifeNotCodeIcon,
} from "@heroicons/vue/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [{ name: "演示中心", href: "/dashboard" }];

const mobileMenuOpen = ref(false);

const tlcGlobalBasic = {
  target: "",
  href: "#",
  date: "",
};

const tlc = {
  school: {
    ...tlcGlobalBasic,
    icon: SchoolIcon,
    iconBackground: "bg-green-500",
  },
  failed: {
    ...tlcGlobalBasic,
    icon: FailedIcon,
    iconBackground: "bg-red-500",
  },
  up: {
    ...tlcGlobalBasic,
    icon: UpIcon,
    iconBackground: "bg-blue-500",
  },
  lifeNotCode: {
    ...tlcGlobalBasic,
    icon: LifeNotCodeIcon,
    iconBackground: "bg-gray-500",
  },
};

let timeline = [
  {
    ...tlc.up,
    content: "因为疫情网课让我认识了你，正式向世界说",
    target: "`Hello, World`",
    datetime: "2020-01-17",
  },
  {
    ...tlc.up,
    content: "沉迷前端页面特效，尝试学习。",
    datetime: "2020-02-10",
  },
  {
    ...tlc.up,
    content:
      "在两个月时间里努力学习HTML、CSS、JavaScript，最终因实力不济没有灵感也无法独自编写出好看的特效而放弃前端。",
    target: "(那段时间真的很失落也很迷茫",
    datetime: "2020-04-07",
  },
  {
    ...tlc.failed,
    content: "发现更热爱游戏，上网查询相关资料。认识了Cocos Creator",
    datetime: "2020-04-14",
  },
  {
    ...tlc.failed,
    content:
      "放了有史以来最长的寒假（模糊记得有大约6,7个月），我也算是真正入门CC游戏开发并在今天发布了一款微信小游戏",
    datetime: "2020-10-05",
  },
  {
    ...tlc.failed,
    content:
      "使用Unity开发2D游戏，但为此我还在担心初中毕业后是在家一个人做游戏还是继续考大专找个志同道合的朋友一起开发游戏。",
    target: "（注：这里说的是初中毕业",
    datetime: "2021-01-01",
  },
  {
    ...tlc.failed,
    content: "目前自学Unity已经开发了多个小游戏DEMO，也买了好多纸质书籍学习",
    datetime: "2021-02-28",
  },
  {
    ...tlc.failed,
    content: "积极投入b站大环境，上传许多开发效果演示视频及教程",
    datetime: "2021-07-01",
  },
  {
    ...tlc.school,
    content: "毫无准备参加全省工业互联网大赛，获得三等奖",
    datetime: "2021-11-06",
  },
  {
    ...tlc.failed,
    content: "帮助开发毕业设计 -> ",
    target: "Unity APP，挣到 1000 元",
    datetime: "2022-03-19",
  },
  {
    ...tlc.school,
    content: "全力备赛物联网技能大赛，全天练习",
    datetime: "2022-03-27",
  },
  {
    ...tlc.school,
    content: "有幸跟随学校外出参加物联网技术培训一周",
    datetime: "2022-05-12",
  },
  {
    ...tlc.school,
    content: "参加全省物联网技能大赛，获得三等奖",
    datetime: "2022-12-15",
  },
  {
    ...tlc.school,
    content: "已准备好完整系列大赛笔记，向全网付费分享",
    datetime: "2022-12-21",
  },
  {
    ...tlc.failed,
    content: "深思熟虑，放弃游戏开发。",
    target: "一个不玩游戏的人何来开发游戏无稽之谈",
    datetime: "2023-01-11",
  },
  {
    ...tlc.up,
    content: "拥抱大前端，跟随黑马学习基础课",
    datetime: "2023-01-14",
  },
  {
    ...tlc.up,
    content: "复习完 HTML5、CSS3、ES6",
    datetime: "2023-02-01",
  },
  {
    ...tlc.up,
    content: "学习 NodeJS、Jquery、Ajax、Axios",
    datetime: "2023-03-15",
  },
  {
    ...tlc.up,
    content: "陆续学习 Vue3、Pinia、Vue-Router、Vite、BootStrap5、ElementPlus",
    datetime: "2023-06-04",
  },
  {
    ...tlc.school,
    content:
      "统计：学习我分享大赛笔记获奖人员不下 100 人，不论中高职，省级国级。总共购买师生超过 300 人。",
    target: "官方网站：https://www.yuque.com/newlandiot",
    datetime: "2023-11-20",
  },
  {
    ...tlc.up,
    content:
      "学习前后端流行相关技术架构，插件，库（TailwindCSS、DaisyUI、AntDesignVue、Lodash、Docker、Nginx、etc） ",
    target: "对于前后端整个体系有更清晰的概念",
    datetime: "2023-11-20",
  },
  {
    ...tlc.up,
    content:
      "已将开发的《新大陆技能大赛技术分享》官网部署至生产环境，包含前后端技术服务。",
    datetime: "2023-11-28",
  },
  {
    ...tlc.lifeNotCode,
    content:
      "今天突然意识到自己头发越来越稀薄，头顶发际线都差点遮不住，以后一定不要再熬夜了。最近压力好大，哎。",
    datetime: "2024-01-01",
  },
  {
    ...tlc.up,
    content: "开发部署小功能演示网站，之后发现有趣的功能在此展示。",
    target: "临时站点地址：https://effect-display.vercel.app/",
    datetime: "2024-02-13",
  },
];

let autoId = 1;
timeline.forEach((val) => (val.id = autoId++));
timeline = timeline.reverse();
</script>
