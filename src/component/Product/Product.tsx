import FakeProduct from "../../utils/fake-products";
import { ProductView } from "./ProductView";

const fakeProducts: FakeProduct[] = [
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
    proPrice: 39000
  },
  {
    proId: 3,
    proTitle: "Gà rán 4",
    proDescription: "Mô tả #4",
    proPrice: 49000
  },
  {
    proId: 4,
    proTitle: "Gà rán 5",
    proDescription: "Mô tả #5",
    proPrice: 29000
  },
  {
    proId: 5,
    proTitle: "Gà rán 3",
    proDescription: "Mô tả #3",
    proPrice: 42000
  },
  
];
const Product = () => {
  return (
    <>
      { fakeProducts.map(product => (
        <ProductView 
          key={ product.proId }
          product={ product }
        />  
      ))}
    </>
  )
}

export { Product };