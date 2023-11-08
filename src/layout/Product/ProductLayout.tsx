import Food from "../../utils/interface/Food";
import { BtnBuy } from "../../ui/ButtonBuy";
import ProductSample from "../../assets/image/product/unsplash-product-sample.jpg";
import { formatCurrency } from "../../utils/format-currency";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface ProductViewProps {
  food: Food;
}
const ProductView = ({ food }: ProductViewProps) => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (food: Food) => {
    navigate(`/details/${food.idFood}`);
  }
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4" onClick={() => handleClick(food)}>
        <img className="w-full" src={ProductSample} alt="Sample product"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {food.name}
          </div>
          <p className="text-gray-700 text-base">
            {food.des}
          </p>
          <div className="font-bold text-3xl mt-2 text-danger">
            {formatCurrency(food.price)}
          </div>
        </div>
        <BtnBuy></BtnBuy>
      </div>
    </>
  );
}

export { ProductView };