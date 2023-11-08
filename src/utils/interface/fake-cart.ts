import FakeProduct from "./fake-product";

interface FakeCart {
  id: number;
  fakeProduct: FakeProduct;
  qty: number; 
  finalPrice: number;
}

export default FakeCart;