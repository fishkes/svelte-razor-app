import { writable } from "svelte/store";
import localProducts from "../localProducts";
const store = writable(flattenProducts([...localProducts]));

function flattenProducts(data) {
  return data.map((item) => {
    return {
      ...item,
      image: item.image.url
    };
  });
}
export default store;
