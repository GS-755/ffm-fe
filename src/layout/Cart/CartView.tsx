import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";

const CartView = () => {
  return (
    <>
      <tbody className="align-content-center">
      <tr key={1}>
            <td>
              <img src={ProductSample} height="70" width="70" style={{ borderRadius: "16px" }} alt="Food :D" />
            </td>
            <td>Decoy 1</td>
            <td>{formatCurrency(99999)}</td>
            <td>
              <form>
                <input className="bg-gray-200" type="number" value={1} name="cartQuantity" />
                <input type="submit" value="Cập nhật" name="submitBtn" />
                <p>(Còn lại: 999)</p>
              </form>
            </td>
            <td>{formatCurrency(99999)}</td>
            <td>
              <a href="#" className="csw-btn-button">Xóa</a>
            </td>
          </tr>
      </tbody>
    </>
  );
}

export { CartView };