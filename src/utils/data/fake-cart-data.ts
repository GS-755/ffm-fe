import fakeProducts from "./fake-products-data";
import FakeCart from "../fake-cart";

const fakeCart: FakeCart[] = [
  {
    id: 0,
    fakeProduct: fakeProducts[0],
    qty: 3, 
    finalPrice: 3 * 27000
  },
  {
    id: 1,
    fakeProduct: fakeProducts[1],
    qty: 4, 
    finalPrice: 4 * 28000
  },
  {
    id: 2,
    fakeProduct: fakeProducts[2],
    qty: 5, 
    finalPrice: 5 * 39000
  },
];

export default fakeCart;