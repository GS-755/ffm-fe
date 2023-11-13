import cartItems from "./data/cart/CartItem";

const totalCartQty = (): number => {
  return cartItems.getItemCount();
}

export { totalCartQty };