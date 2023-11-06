import fakeCart from "../../utils/data/fake-cart-data";
import { CartView } from "./CartView";

const Cart = () => {
  return (
    <>
      {fakeCart.map(cartItem => (
        <CartView
          key={cartItem.fakeProduct.proId}
          cartItem={cartItem}
        />
      ))}
    </>
  )
}

export default Cart;