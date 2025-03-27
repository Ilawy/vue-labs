import { defineStore } from "pinia";
import { reactive } from "vue";

const trycatch = <V, D>(fn: () => V, def: D): D | V => {
  try {
    return fn();
  } catch {
    return def;
  }
};

interface CartItem {
  quantity: number;
  item: number | string;
}

export const useCartStore = defineStore("cart", () => {
  const items: CartItem[] = reactive(
    "cart" in localStorage
      ? trycatch(() => JSON.parse(localStorage["cart"]), [])
      : []
  );
  function addItem(id: number | string) {
    const foundIndex = this.items.findIndex((item) => item.item == id);
    if (foundIndex >= 0) {
      this.items[foundIndex].quantity++;
    } else {
      this.items.push({
        quantity: 1,
        item: id,
      });
    }
    localStorage["cart"] = JSON.stringify(this.items);
    console.log(localStorage);
  }

  function getItemQuantity(id: number | string){
    return items.find(item=>item.item == id)?.quantity || 0;
  }

  return { items, addItem, getItemQuantity };
});
