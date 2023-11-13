import FoodCategory from "../../utils/interface/Category";
import useFetch from "../../utils/data/category/category-fetch";
import { CategoryMenu } from "../../layout/Category/CategoryMenu";
import { Link } from "react-router-dom";

const Category = (): JSX.Element => {
  const { data: categories, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/FoodCategory');
  return (
    <>
      {
        error &&
        <li className="nav-li">
          <Link to="#">{error}</Link>
        </li>
      }
      {
        isPending &&
        <li className="nav-li">
          <Link to="#">Đang tải...</Link>
        </li>
      }
      {
        categories &&
        categories.map((k: FoodCategory) => (
          <CategoryMenu
            key={k.idFc}
            foodCategory={k} />
        ))
      }
    </>
  );
}

export default Category;