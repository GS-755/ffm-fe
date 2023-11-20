import Food from "./Food";

interface CartInterface {
  id: number; 
  cart: Food;
  qty: number;
  finalPrice: number;
}

export default CartInterface;