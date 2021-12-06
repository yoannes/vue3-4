import { reactive, readonly } from "vue";

const state = reactive({
  clicked: null,
  list: [
    { id: 1, brand: "BMW", model: "M3" },
    { id: 2, brand: "Audi", model: "A3" },
    { id: 3, brand: "Mercedes", model: "C300" },
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
