import { MainLayout } from "../layout/Layout";
import "../style/thuyen/LayoutCart.css";
import "../style/thuyen/inline.css";

const Cart = () => {
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
                      <tr className="table-title">
                        <th>Hình sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng sản phẩm</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="#" height="60" width="60" alt="Food :D" />
                        </td>
                        <td>Gà rán</td>
                        <td>100.000 đ</td>
                        <td>
                          <form>
                            <input type="number" value="1" name="cartQuantity" />
                            <input type="submit" value="Cập nhật" name="submitBtn" />
                            <p>(Còn lại: 999)</p>
                          </form>
                        </td>
                        <td>100.000 đ</td>
                        <td>
                          <a href="#" className="csw-btn-button">Xóa</a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="flex justify-end">
                          Tổng tiền: <span className="fs-4 font-bold text-danger">100.000 đ</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Cart;