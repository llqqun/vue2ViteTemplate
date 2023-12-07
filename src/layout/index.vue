<template>
  <section class='layout flex-c'>
    <header class="top">top</header>
    <main class="middle">
      <keep-alive :include="keepAliveInclude">
        <router-view />
      </keep-alive>
    </main>
    <footer class="bottom">bottom</footer>
  </section>
</template>

<script>
import { globalStore } from '@/stores/global';
export default {
  name: 'Layout',
  data() {
    const storeGlobal = globalStore()
    return {
      keepAliveInclude: storeGlobal.keepAlive
    }
  }
};
</script>

<style scoped lang='less'>
  .layout {
    min-height: 100vh;
  }
  .top {
    height: 66px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
  }
  .middle {
    flex: 1;
  }
  .bottom {
    height: 100px;
    background: #eaecf1;
  }
</style>
