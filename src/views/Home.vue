<template>
  <div>
      <router-link :to="{ name: 'login'}">登录</router-link>
      <router-link :to="{ name: 'register'}">注册</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped>

</style>
