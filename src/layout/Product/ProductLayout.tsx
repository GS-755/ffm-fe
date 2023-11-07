import FakeProduct from "../../utils/interface/fake-product";
import { BtnBuy } from "../../ui/ButtonBuy";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";

interface ProductViewProps {
  product: FakeProduct;
}
const ProductView = ({ product }: ProductViewProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={ProductSample} alt="Sample product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {product.proTitle}
          </div>
          <p className="text-gray-700 text-base">
            {product.proDescription}
          </p>
          <div className="font-bold text-3xl mt-2 text-danger">
            {formatCurrency(product.proPrice)}
          </div>
        </div>
        <BtnBuy></BtnBuy>
      </div>
    </>
  );
}

export { ProductView };