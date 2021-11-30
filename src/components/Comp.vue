<template>
  <div class="c">

    {{clicked}}
  </div>
</template>

<script>
import { computed } from "vue";
import useCars from "@/modules/cars";

export default {
  setup() {
    const cars = useCars();

    const clicked = computed(() => cars.state.clicked);
    console.log("[]...", cars);
    return {
      clicked,
    };
  },
};
</script>

<style lang="scss" scoped>
.c {
  color: red;
}
</style>
