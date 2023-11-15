// import FakeCart from "../../utils/interface/fake-cart";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";

// interface CartViewProps {
  // cartItem: FakeCart;
// }
// const CartView = ({ cartItem }: CartViewProps) => {
const CartView = ( {cartItem} ) => {

  console.log("dataCart", cartItem)
  
  return (
    <>
      <tbody className="align-content-center">
      {cartItem && cartItem.length > 0 && cartItem.map(item => (
  <tr key={item.id}>
    <td>
      <img src={ProductSample} height="70" width="70" style={{ borderRadius: "16px" }} alt="Food :D" />
    </td>
    <td>{item.cart.name}</td>
    <td>{item.cart.price + "đ"}</td>
    <td>
      <form>
        <input className="bg-gray-200" type="number" value={item.qty} name="cartQuantity" />
        <input type="submit" value="Cập nhật" name="submitBtn" />
        <p>(Còn lại: 999)</p>
      </form>
    </td>
    <td>{item.finalPrice + "đ"}</td>
    <td>
      <a href="#" className="csw-btn-button">Xóa</a>
    </td>
  </tr>
))}
      </tbody>
    </>
  );
}

export { CartView };