<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Clock></Clock>
    asd
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Clock from "./components/Clock.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Clock,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
