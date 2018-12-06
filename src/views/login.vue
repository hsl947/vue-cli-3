<template>
  <div>
      <router-link :to="{ name: 'register'}">注册</router-link>
      <router-link :to="{ name: 'index'}">主页</router-link>
  </div>
</template>

<script>
export default {
  name: "login",
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
