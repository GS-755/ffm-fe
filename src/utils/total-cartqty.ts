import FakeCart from "./interface/fake-cart";

const totalCartQty = (fakeCart: FakeCart[]): number => {
  return fakeCart.length;
}

export { totalCartQty };