<template>
  <div>
    <p>{{ text }}</p>
    <button @click='$router.back()'>返回</button>
  </div>
</template>

<script>
export default {
  name: 'aboutView',
  data() {
    return {
      text: 'hello'
    }
  },
  mounted() {
    setTimeout(() => {
      this.text = 'world'
    }, 1000)
  }
}
</script>

<style scoped lang='less'></style>
