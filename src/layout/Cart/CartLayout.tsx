import { MainLayout } from "../Layout";
import "../../style/thuyen/LayoutCart.css";
//import Cart from "../../component/Cart/Cart";
import { formatCurrency } from "../../utils/format-currency";
import { BtnCheckout } from "../../ui/ButtonCheckout";
import { CartView } from "../Product/CartLayout";

const CartMain = () => {
  const dataCartString = localStorage.getItem('dataCart');
  let dataCart;
  let totalPrice = 0;
  if (dataCartString !== null) {
    // Chuyển đổi chuỗi JSON thành mảng
    dataCart = JSON.parse(dataCartString);
    dataCart.forEach(item => {
      totalPrice += item.finalPrice;
    });
  }

  return (
    <>
      <MainLayout>
        <section className="section fs-5">
          <h1 className="text-center text-uppercase fs-2 font-bold mb-3" style={{ color: "#D65D26" }}>Giỏ hàng</h1>
          <div className="container-fluid mx-auto">
            <div className="col">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <table className="table">
                    <thead>
                      <tr className="table-title text-uppercase">
                        <th>Hình sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    {/* Sử dụng thông tin sản phẩm đã thêm vào giỏ hàng */}
                    <CartView cartItem={dataCart} />
                    {/* <CartView /> */}
                  </table>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row text-end">
                <div className="col-md-4 fs-3">
                  <p>
                    Tổng tiền:
                    <span className="fs-4 font-bold text-danger">
                      &ensp;{formatCurrency(totalPrice)}
                    </span>
                  </p>
                </div>
                <div className="col-md-4 text-end">
                  <BtnCheckout />
                </div>
              </div>

            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export { CartMain };