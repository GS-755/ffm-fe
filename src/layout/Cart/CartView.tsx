import { formatCurrency } from "../../utils/format-currency";
import { useState } from "react";
import CartInterface from "../../utils/interface/Cart";
import getImageUri from "../../utils/get-image-url";

const CartView = ({ cartItem }) => {
  console.log("dataCart", cartItem);
  const [dataItemCurret, setDataCurrent] = useState(cartItem);
  const handleDeleteClick = (itemId: number) => {
    if (window.confirm('Xác nhận hủy mua món này')) {
      const dataLocal = localStorage.getItem('dataCart');
      if (dataLocal !== null) {
        // Chuyển đổi chuỗi JSON thành mảng
        const dataCartTemp = JSON.parse(dataLocal); console.log("dataLocal", dataLocal)
        const updatedCart = dataCartTemp.filter((item: CartInterface) => item.cart.idFood !== itemId);
        localStorage.setItem('dataCart', JSON.stringify(updatedCart));
        setDataCurrent(updatedCart)
        window.location.reload()
      }
    }
  };

  return (
    <>
      <tbody className="align-content-center">
        {dataItemCurret && dataItemCurret.length > 0 && cartItem.map((item: CartInterface) => (
          <tr key={item.id}>
            <td>
              <img src={getImageUri(item.cart.image)} height="70" width="70" style={{ borderRadius: "16px" }} alt="Food :D" />
            </td>
            <td>{item.cart.name}</td>
            <td>{formatCurrency(item.cart.price)}</td>
            <td>
              <form>
                <input className="bg-white border rounded-lg p-0.5"  type="number - rounded-lg" value={item.qty} name="cartQuantity" />
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