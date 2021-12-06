<template>
  <div style="margin: 10px">
    <div v-for="c in list" :key="c.model">
      <div @click="clickHandler(c)">{{ c.brand }}</div>
    </div>

    <div style="border: 1px solid green">
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCars from "@/modules/cars";

export default {
  setup() {
    const router = useRouter();
    const cars = useCars();

    const list = computed(() => cars.state.list);

    const clickHandler = (car) => {
      cars.mutations.setClicked(car);
      router.push({ name: "Car", params: { carId: car.id } });
    };

    console.log("[]...", cars);

    return {
      list,
      clickHandler,
    };
  },
};
</script>
