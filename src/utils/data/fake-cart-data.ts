import fakeProducts from "./fake-products-data";
import FakeCart from "../interface/fake-cart";

const fakeCart: FakeCart[] = [
  {
    id: 0,
    fakeProduct: fakeProducts[0],
    qty: 3, 
    finalPrice: 3 * fakeProducts[0].proPrice
  },
  {
    id: 1,
    fakeProduct: fakeProducts[1],
    qty: fakeProducts[1].proQty, 
    finalPrice: 4 * fakeProducts[1].proPrice
  },
  {
    id: 2,
    fakeProduct: fakeProducts[2],
    qty: 5, 
    finalPrice: 5 * fakeProducts[2].proPrice
  },
];

export default fakeCart;