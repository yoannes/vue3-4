<template>
  <div style="margin: 10px">
    <router-link :to="{ name: 'Cars' }">Voltar</router-link>

    <div>
      {{ car }}
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import useCars from "@/modules/cars";

export default {
  setup() {
    const route = useRoute();
    const cars = useCars();

    const car = computed(() => {
      const x = cars.state.list.find((c) => c.id === Math.floor(route.params.carId));
      return x;
    });

    console.log("[route]...", route.params.carId);

    return {
      car,
    };
  },
};
</script>
