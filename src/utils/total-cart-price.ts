import CartInterface from "./interface/Cart";

const dataCartString = localStorage.getItem('dataCart');
let dataCart;
let totalPrice = 0;
if (dataCartString !== null) {
  // Chuyển đổi chuỗi JSON thành mảng
  dataCart = JSON.parse(dataCartString);
  dataCart.forEach((item: CartInterface) => {
    totalPrice += item.finalPrice;
  });
}

export default totalPrice;