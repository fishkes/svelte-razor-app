import { writable } from "svelte/store";

const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: false
});

const store = {
  subscribe: globalStore.subscribe,
  toggle: (key, value) => {
    globalStore.update((storeValues) => {
      return {
        ...storeValues,
        [key]: value
      };
    });
  }
};

export default store;
