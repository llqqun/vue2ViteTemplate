<template>
  <main ref="el">
    <p :data-id="store.userId">{{ store.userId }}</p>
    <div @click="Test" class="test">测试</div>
    <button @click="$router.push('/about')">about</button>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
  </main>
</template>

<script>
import { globalStore } from '@/stores/global'
export default {
  data() {
    return {
      store: globalStore()
    }
  },
  created() {
    console.log(this.$store)
  },
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  methods: {
    Test() {
      this.store.setUser({ name: 'lance', id: 123 })
    }
  }
}
</script>
<style lang="less" scoped>
.test {
  width: 50px;
  height: 50px;
  background-color: red;
  .ellipsis();
}
</style>
