import { reactive, readonly } from "vue";

const state = reactive({
  clicked: null,
  list: [
    { brand: "BMW", model: "M3" },
    { brand: "Audi", model: "A3" },
    { brand: "Mercedes", model: "C300" },
  ],
});

const actions = {};

const mutations = {
  setClicked(car) {
    state.clicked = car;
  },
};

export default function useCars() {
  return readonly({
    state,
    actions,
    mutations,
  });
}
