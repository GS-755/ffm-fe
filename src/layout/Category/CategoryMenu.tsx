import { Link } from "react-router-dom";
import FoodCategory from "../../utils/interface/Category";

interface CategoryProps {
  foodCategory: FoodCategory;
}
const CategoryMenu: React.FC<CategoryProps> = ({ foodCategory }) => {
  return (
    <>
      <li className="nav-li">
        <Link to={'/product/' + String(foodCategory.idFc)}>{foodCategory.name}</Link>
      </li>
    </>
  );
}

export { CategoryMenu };