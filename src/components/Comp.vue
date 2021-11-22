<template>
  <div @click="$emit('on-click')" class="c">
    <span>
      {{ car.brand }}
    </span>
    <span>
      {{ car.model }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    car: { type: Object, default: null },
    brand: { type: String, default: "" },
    model: { type: String, default: "" },
  },

  setup(props) {
    const clickHandler = () => {
      console.log("hey", props.color);
    };

    return {
      clickHandler,
    };
  },
};
</script>

<style lang="scss" scoped>
.c {
  color: red;
}
</style>
