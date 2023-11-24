  import Food from "../../utils/interface/Food";
import { BtnBuy } from "../../ui/ButtonBuy";
import { formatCurrency } from "../../utils/format-currency";
import { NavigateFunction, useNavigate } from "react-router-dom";
import getImageUri from "../../utils/get-image-url";

interface ProductListProps {
  food: Food;
}
const ProductView: React.FC<ProductListProps> = ({ food }) => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (food: Food) => {
    navigate(`/details/${food.idFood}`);
  }
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4" onClick={() => handleClick(food)}>
        <img className="w-full" src={getImageUri(food.image)} alt={food.des} />
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