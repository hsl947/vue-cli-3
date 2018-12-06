<template>
  <div>
      <router-link :to="{ name: 'login'}">登录</router-link>
      <router-link :to="{ name: 'index'}">主页</router-link>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped>

</style>
