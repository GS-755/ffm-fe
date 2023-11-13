import { useParams } from "react-router-dom"
import useFetch from "../../../utils/data/food/food-fetch";
import Food from "../../../utils/interface/Food";
import { ProductView } from "../../../layout/Product/ProductLayout";
import ToParams from "../../../utils/model/Params";

const FoodByCate = () => {
  const idFc = useParams();
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
  return (
    <>
      {
        error &&
        <p className="text-center mt-3 mb-3">{error}</p>
      }
      {
        isPending &&
        <p className="text-center mt-3 mb-3">Đang tải sản phẩm theo danh mục...</p>
      }
      {
        foods && 
        foods.map((k: Food) => 
          k.idFc === ToParams.getId(idFc)
          && (
            <ProductView key={k.idFood} food={k}/>
          )
        )
      }
    </>
  );
}

export { FoodByCate };