<template>
  <div>
    <div>header</div>
    <div><router-view /></div>
    <div>footer</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    router.push({ name: "Login" });
  },
};
</script>

<style lang="scss">
</style>
