<template>
  <main ref="el">
    <p :data-id="store.userId">{{ store.userId }}</p>
    <div @click="Test" class="test">测试</div>
    <button @click="$router.push('/about')">about</button>
    <el-button type="primary" @click="handleInfo">消息按钮</el-button>
    <svg-icon name="close" color="red"></svg-icon>
    <svg-icon name="close"></svg-icon>

  </main>
</template>

<script>
import { globalStore } from '@/stores/global'
export default {
  name: 'HomeView',
  components: {},
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
    console.log(this.$axios.user.getUserInfo)
  },
  activated() {
    console.log('activated')
  },
  methods: {
    handleInfo () {
      this.$message('这是一条消息提示')
    },
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
