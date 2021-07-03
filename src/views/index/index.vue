<template>
  <div id="container">
    <div class="header"><Nav></Nav></div>
    <div class="main"><Home></Home></div>
  </div>
</template>

<script>
import Nav from "../../components/nav";
import Home from "../../components/home";
export default {
  components: {
    Nav,
    Home,
  },
};
</script>

<style scoped>
#id{
    width: 100%;
}
</style>