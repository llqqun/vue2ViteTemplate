<template>
  <main ref="el">
    1
    <div class="test">1235458110111111111111</div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>
<style lang="less" scoped>
.test {
  width: 50px;
  height: 50px;
  background-color: red;
  .ellipsis();
}
</style>
