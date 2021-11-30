<template>
  <div>
    <div v-for="c in list" :key="c.model">
      <div @click="clickHandler(c)">{{c.brand}}</div>
    </div>

    <div style="margin-top: 10px">
      <comp />
    </div>

  </div>
</template>

<script>
import { computed } from "vue";
import useCars from "@/modules/cars";
import Comp from "@/components/Comp.vue";

export default {
  components: {
    Comp,
  },

  setup() {
    const cars = useCars();

    const list = computed(() => cars.state.list);

    const clickHandler = (car) => {
      cars.mutations.setClicked(car);
    };

    console.log("[]...", cars);

    return {
      list,
      clickHandler,
    };
  },
};
</script>
