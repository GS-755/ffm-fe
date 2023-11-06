import FakeProduct from "./fake-products";

interface FakeCart {
  id: number;
  fakeProduct: FakeProduct;
  qty: number; 
  finalPrice: number;
}

export default FakeCart;