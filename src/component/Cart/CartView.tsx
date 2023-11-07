import FakeCart from "../../utils/interface/fake-cart";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";

interface CartViewProps {
  cartItem: FakeCart;
}
const CartView = ({ cartItem }: CartViewProps) => {
  return (
    <>
      <tbody className="align-content-center">
        <tr>
          <td>
            <img src={ProductSample} height="70" width="70" style={{ borderRadius: "16px" }} alt="Food :D" />
          </td>
          <td>{cartItem.fakeProduct.proTitle}</td>
          <td>{formatCurrency(cartItem.fakeProduct.proPrice)}</td>
          <td>
            <form>
              <input type="number" value={cartItem.qty} name="cartQuantity" />
              <input type="submit" value="Cập nhật" name="submitBtn" />
              <p>(Còn lại: 999)</p>
            </form>
          </td>
          <td>{formatCurrency(cartItem.finalPrice)}</td>
          <td>
            <a href="#" className="csw-btn-button">Xóa</a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export { CartView };