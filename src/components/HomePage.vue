<template>
  <section
    class="home"
    @click.self="getContactBackgroundColor"
    :style="{ backgroundColor: bg }"
  >
    <div
      class="home__top"
      @click.self="getContactBackgroundColor"
      :style="{ backgroundColor: bg }"
    >
      <div class="home__top__info">
        <div class="item" v-for="item in studio" :key="item.id">
          <span @click="handleCollapse(item.id)">
            {{ item.title }}
            <img :src="item.img" alt="" v-show="item.id === id" />
            <img :src="item.img2" alt="" v-show="item.id != id" />
          </span>
          <div class="item__collapsible" v-show="id === item.id">
            <p v-if="item.content">
              {{ item.content }}
            </p>
            <p v-if="item.content2">
              {{ item.content2 }}
            </p>
            <a :href="`mailto:${item.link}`" v-if="item.link">{{
              item.link
            }}</a>
            <a :href="`tel:${item.link2}`" v-if="item.link2">{{
              item.link2
            }}</a>
          </div>
        </div>
      </div>
      <h4>{{ time }}<span>:</span>{{ minute }} Lagos/NG</h4>
    </div>
    <div class="home__bottom" :style="{ backgroundColor: bg }">
      <h1>PANTHONE STUDIO</h1>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const id = ref();
const time = ref<unknown>();
const minute = ref<unknown>();
const timeZone = ref<any>();
const bg = ref<string>("#EDE7E2");
onMounted(() => {
  setInterval(() => {
    const d = new Date();
    time.value = d.getHours();
    minute.value = d.getMinutes().toString().padStart(2, "0");
    timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }, 1000);
  // time.value = `${d.getHours()}:${d.getMinutes()}${d.getTimezoneOffset()}`;
});

// function to change color
const getContactBackgroundColor = () => {
  const colors = [
    "#4B70F7",
    "#638E41",
    "#EB4132",
    "#61A24F",
    "#91B84D",
    "#d9d9d9",
    "#EDE7E2",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  bg.value = randomColor;
};

// array of collapsible content
const studio = ref([
  {
    title: "Studio",
    id: 1,
    img: require("@/assets/svg/minus.svg"),
    img2: require("@/assets/svg/add.svg"),
    active: true,
    content:
      "Panthone is a web experience studio that works with clients to produce quality products and services that meet the demands of the market. We find great satisfaction in solving users problems, and want to share it with you.",
    content2:
      "For brands that want to explore Africa, we always enjoys incorporating African culture and tradition into our works in order to benefit both our clients and the communities in which they live.",
  },
  {
    title: "Works",
    id: 2,
    img: require("@/assets/svg/minus.svg"),
    img2: require("@/assets/svg/add.svg"),
    active: true,
    content: "Coming Soon",
  },
  {
    title: "Contact",
    id: 3,
    img: require("@/assets/svg/minus.svg"),
    img2: require("@/assets/svg/add.svg"),
    active: true,
    link: "hello@panthone.design",
    link2: "+2348169945591",
  },
]);

// handle collapsible
const handleCollapse = (index: any) => {
  if (id.value === index) {
    id.value = null;
  } else {
    id.value = index;
  }
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  background-color: $bg;
  position: relative;
  padding: 1rem;
  transition: all 0.6s cubic-bezier(0.97, 0.98, 0.65, 0.9);
  cursor: crosshair;
  &__top {
    height: calc(100vh - 140px);
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      appearance: none;
      display: none;
    }
    transition: all 0.6s cubic-bezier(0.97, 0.98, 0.65, 0.9);
    @include flex(space-between, flex-start, row nowrap);
    position: relative;
    @media screen and (max-width: 1150px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1.5rem;
    }
    h4 {
      font-family: Binaria, "sans-serif";
      font-style: normal;
      font-weight: 400;
      font-size: Max(1rem, 16px);
      line-height: Max(24px, 1.5rem);
      text-align: right;
      letter-spacing: 0.02em;
      color: $text;
      flex-shrink: 0;
      @media screen and (max-width: 1150px) {
        align-self: flex-end;
        order: 1;
      }
      span {
        animation: blink 1s infinite;
      }
    }
    &__info {
      @include flex(flex-start, flex-start, row nowrap);
      @media screen and (max-width: 1150px) {
        flex-direction: column;
        order: 2;
      }
      gap: 1rem;
      width: 100%;
      .item {
        border-bottom: 1px solid $black;
        padding: 0.75rem 0rem;
        width: 300px;
        @media screen and (max-width: 1150px) {
          width: 100%;
        }
        span {
          @extend %flex-ac-jb;
          font-family: Hk-Grotesk, "sans-serif";
          font-style: normal;
          font-weight: 400;
          font-size: Max(0.875rem, 14px);
          line-height: Max(24px, 1.5rem);
          letter-spacing: 0.02em;
          color: $black;
          cursor: pointer;
        }
        &__collapsible :where(p, a) {
          margin-top: 1.5rem 0;
          font-family: Hk-Grotesk, "sans-serif";
          font-style: normal;
          font-weight: 400;
          font-size: Max(0.875rem, 14px);
          line-height: Max(24px, 1.5rem);
          letter-spacing: 0.02em;
          color: $black;
          margin: 0.5rem 0;
          display: block;
        }
        &__collapsible :is(a) {
          text-decoration: underline;
          // position: relative;
          // &::after {
          //   content: "";
          //   position: absolute;
          //   width: 50%;
          //   height: 1px;
          //   background-color: $black;
          //   top: 80%;
          //   left: 0;
          // }
        }
      }
    }
  }
  &__bottom {
    position: fixed;
    bottom: 0;
    right: 1rem;
    z-index: 2;
    width: 100%;
    @media screen and (max-width: 1150px) {
      left: 1rem;
    }
    transition: all 0.6s cubic-bezier(0.97, 0.98, 0.65, 0.9);
    cursor: text;
    h1 {
      font-family: Binaria, "sans-serif";
      font-style: normal;
      font-weight: 400;
      font-size: Max(48px, 8rem);
      line-height: Max(8rem, 32px);
      text-align: right;
      letter-spacing: -0.05em;
      color: $text;
      @include respondMax(tablet) {
        font-size: Max(68px, 6rem);
        line-height: Max(32px, 6rem);
        text-align: left;
      }
    }
  }
  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
