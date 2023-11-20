import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";
import { useState } from "react";

const CartView = ({ cartItem }) => {
  const [dataItemCurret, setDataCurrent] = useState(cartItem)
  const handleDeleteClick = (itemId: number) => {
    if (window.confirm('Xác nhận hủy mua món này')) {
      const dataLocal = localStorage.getItem('dataCart');
      // localStorage.setItem('dataCart', JSON.stringify(updatedCart));
      if (dataLocal !== null) {
        // Chuyển đổi chuỗi JSON thành mảng
        const dataCartTemp = JSON.parse(dataLocal); console.log("dataLocal", dataLocal)
        const updatedCart = dataCartTemp.filter(item => item.cart.idFood !== itemId);
        localStorage.setItem('dataCart', JSON.stringify(updatedCart));
        setDataCurrent(updatedCart)

        window.location.reload()
      }
    }
  };

  return (
    <>
      <tbody className="align-content-center">
        {dataItemCurret && dataItemCurret.length > 0 && cartItem.map(item => (
          <tr key={item.id}>
            <td>
              <img src={ProductSample} height="70" width="70" style={{ borderRadius: "16px" }} alt="Food :D" />
            </td>
            <td>{item.cart.name}</td>
            <td>{formatCurrency(item.cart.price)}</td>
            <td>
              <form>
                <input className="bg-gray-200" type="number" value={item.qty} name="cartQuantity" />
                <input type="submit" value="Cập nhật" name="submitBtn" />
                <p>(Còn lại: 999)</p>
              </form>
            </td>
            <td>{formatCurrency(item.finalPrice)}</td>
            <td>
              <a href="#" className="csw-btn-button" onClick={() => handleDeleteClick(item.cart.idFood)}>Xóa</a>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export { CartView };