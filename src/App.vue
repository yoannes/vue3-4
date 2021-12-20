<template>
  <div>
    <div>header</div>
    <div><router-view /></div>
    <div>footer</div>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";
import useAuth from "@/modules/auth";

export default {
  setup() {
    const router = useRouter();
    const auth = useAuth();

    auth.loadData();
    console.log("[]...", auth.state);

    watch(
      () => auth.state.token,
      () => {
        if (auth.state.token) {
          router.push({ name: "Home" });
        } else {
          router.push({ name: "Login" });
        }
      },
    );

    if (!auth.state.token) {
      router.push({ name: "Login" });
    }
  },
};
</script>

<style lang="scss">
</style>
