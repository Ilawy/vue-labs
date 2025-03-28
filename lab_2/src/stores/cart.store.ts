import { defineStore } from "pinia";
import { reactive } from "vue";
import { toast } from "vue-sonner";

const trycatch = <V, D>(fn: () => V, def: D): D | V => {
  try {
    return fn();
  } catch {
    return def;
  }
};

interface CartItem {
  quantity: number;
  item: { id: string | number; instock: number };
}

export const useCartStore = defineStore("cart", () => {
  const items: CartItem[] = reactive(
    "cart" in localStorage
      ? trycatch(() => JSON.parse(localStorage["cart"]), [])
      : []
  );
  console.log(items[0]);

  function addItem(item: CartItem["item"]) {
    const foundIndex = items.findIndex((it) => it.item.id == item.id);
    if (foundIndex >= 0) {
      if (items[foundIndex].quantity >= item.instock) {
        toast.error("instock quantity is not enough");
        return;
      }
      items[foundIndex].quantity++;
    } else {
      items.push({
        quantity: 1,
        item,
      });
    }
    toast.success("Item added")
    localStorage["cart"] = JSON.stringify(items);
  }

  function removeItem(item: CartItem["item"], completely = false) {
    const foundIndex = items.findIndex((it) => it.item.id == item.id);
    if (foundIndex < 0) return;

    if (completely || items[foundIndex].quantity <= 1) items.splice(foundIndex, 1);
    else {
      items[foundIndex].quantity--;
    }
    toast.info("Item removed")

    localStorage["cart"] = JSON.stringify(items);
  }

  function getItemQuantity(id: number | string) {
    return items.find((item) => item.item.id == id)?.quantity || 0;
  }

  function getProductInfo(id: number | string) {
    return fetch(`http://localhost:3000/products/${id}`).then((d) => d.json());
  }

  return { items, addItem, removeItem, getItemQuantity, getProductInfo };
});
