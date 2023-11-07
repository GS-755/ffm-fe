import FakeProduct from "../../utils/interface/fake-product";
import { BtnBuy } from "../../ui/ButtonBuy";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface ProductViewProps {
  product: FakeProduct;
}
const ProductView = ({ product }: ProductViewProps) => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (product: FakeProduct) => {
    navigate(`/details/${product.proId}`);
  }
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4" onClick={() => handleClick(product)}>
        <img className="w-full" src={ProductSample} alt="Sample product"/>
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