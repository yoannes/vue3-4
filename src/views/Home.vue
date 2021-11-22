<template>
{{list}}
  <comp :car="list[0]" />
  <comp :car="list[1]" />
  <comp :car="list[2]" />
</template>

<script>
import Comp from "../components/Comp.vue";

export default {
  components: { Comp },
  name: "Home",

  setup() {
    const list = [
      { brand: "BMW", model: "M3" },
      { brand: "Audi", model: "A3" },
      { brand: "Mercedes", model: "C300" },
    ];

    const clickHandler = () => {
      console.log("sou o pai e recebi esse evento");
    };

    return {
      clickHandler,
      list,
    };
  },

};
</script>
