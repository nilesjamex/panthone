<template>
  <section
    class="home"
    :style="{ backgroundColor: bg }"
    @click.self="getContactBackgroundColor"
  >
    <div class="home__top">
      <div class="home__top__info">
        <div class="item" v-for="item in studio" :key="item.id">
          <span @click="item.active = !item.active">
            {{ item.title }}
            <img :src="item.img" alt="" v-show="item.active" />
            <img :src="item.img2" alt="" v-show="!item.active" />
          </span>
          <div class="item__collapsible" v-show="item.active">
            <p>
              {{ item.content }}
            </p>
            <p v-if="item.content2">
              {{ item.content2 }}
            </p>
          </div>
        </div>
      </div>
      <h4>{{ time }}<span>:</span>{{ minute }} {{ timeZone }}</h4>
    </div>
    <div class="home__bottom" :style="{ backgroundColor: bg }">
      <h1>PANTHONE STUDIO</h1>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

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
    id: 1,
    img: require("@/assets/svg/minus.svg"),
    img2: require("@/assets/svg/add.svg"),
    active: true,
    content: "Coming Soon",
  },
  {
    title: "Contact",
    id: 1,
    img: require("@/assets/svg/minus.svg"),
    img2: require("@/assets/svg/add.svg"),
    active: true,
    content: "hello@panthone.design",
    content2: "+234 816 994 5591",
  },
]);
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
    @include flex(space-between, flex-start, row nowrap);
    // height: 100%;
    // scrollbar-width: none;
    // &::-webkit-scrollbar {
    //   appearance: none;
    //   display: none;
    // }
    @media screen and (max-width: 1150px) {
      flex-direction: column-reverse;
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
      }
      span {
        animation: blink 1s infinite;
      }
    }
    &__info {
      @include flex(flex-start, flex-start, row nowrap);
      @media screen and (max-width: 1150px) {
        flex-direction: column;
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
        &__collapsible {
          margin-top: 1.5rem 0;
          p {
            font-family: Hk-Grotesk, "sans-serif";
            font-style: normal;
            font-weight: 400;
            font-size: Max(0.875rem, 14px);
            line-height: Max(24px, 1.5rem);
            letter-spacing: 0.02em;
            color: $black;
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
  &__bottom {
    position: fixed;
    bottom: 0;
    right: 1rem;
    z-index: 2;
    @media screen and (max-width: 1150px) {
      right: 100%;
      left: 1rem;
    }
    cursor: text;
    h1 {
      font-family: Binaria, "sans-serif";
      font-style: normal;
      font-weight: 400;
      font-size: Max(48px, 11.688rem);
      line-height: Max(11.688rem, 32px);
      text-align: right;
      letter-spacing: -0.05em;
      color: $text;
      @include respondMax(tablet) {
        font-size: Max(68px, 6rem);
        line-height: Max(32px, 6rem);
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
