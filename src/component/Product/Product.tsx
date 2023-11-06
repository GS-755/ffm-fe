import { ProductView } from "../../layout/ProductLayout";
import fakeProducts from "../../utils/data/fake-products-data";

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