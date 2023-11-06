import fakeCart from "./data/fake-cart-data";

const totalCartPrice = (): number => {
  let sum: number = 0;
  for(const item of fakeCart) {
    sum += item.finalPrice;
  }

  return sum;
}

export default totalCartPrice;