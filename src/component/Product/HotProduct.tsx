import FakeProduct from "../../utils/fake-products";
import { ProductView } from "./ProductView";

const fakeHotProducts: FakeProduct[] = [
  {
    proId: 0,
    proTitle: "Gà rán 1",
    proDescription: "Mô tả #1",
    proPrice: 27000
  },
  {
    proId: 1,
    proTitle: "Gà rán 2",
    proDescription: "Mô tả #2",
    proPrice: 28000
  },
  {
    proId: 2,
    proTitle: "Gà rán 3",
    proDescription: "Mô tả #3",
    proPrice: 29000
  }
];
const HotProduct = () => {
  return (
    <>
      { fakeHotProducts.map(product => (
        <ProductView 
          key={ product.proId }
          product={ product }
        />  
      ))}
    </>
  )
}

export { HotProduct };