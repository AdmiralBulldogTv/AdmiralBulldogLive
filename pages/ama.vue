<template>
<v-container class="mt-5" fluid>  
  <div :class="isTop">
   <a v-if="!isTop" @click.prevent="scrollTop" class="back-to-top page-scroll"
      >Back to Top</a
    >
    </div>
  <FileReader />
</v-container>
</template>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTop: false,
      showNavBar: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },

  beforeDestroy() {
    document.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      this.isTop = window.scrollY < 180;
    },

    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
});
</script>


<style lang="scss" scoped>
a.back-to-top {
  position: fixed;
  z-index: 999;
  right: 0.75rem;
  bottom: 0.75rem;
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 1.875rem;
  background: #0b6636  no-repeat center 47%;
  background-size: 1.125rem 1.125rem;
  text-indent: -9999px;
  opacity: 1;
  transition: opacity 200ms ease;
}

a:hover.back-to-top {
    background: #36A9E1 url("@/static/emotes/SecretEmote.png") no-repeat center 47%;
    transform: scale(1.9);
}

.isTop {
  .back-to-top {
    pointer-events: none;
    opacity: 0;
  }
}

</style>
