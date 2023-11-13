import useFetch from "../../../utils/data/json-fetch";
import Food from "../../../utils/interface/Food";
import FoodProps from "../../../utils/model/FoodParams";
import { DetailsView } from "../../../layout/Product/DetailsLayout";
import { useParams } from "react-router-dom";

const Product = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
  const params = useParams();
  return (
    <>
      {
        error && <p>{error}</p>
      }
      {
        isPending && <p>Đang tải sản phẩm...</p>
      }
      {
        foods &&
        foods.map((k: Food) => (
          k.idFood === FoodProps.getId(params)
          && (
            <DetailsView key={k.idFood} food={k} />
          )
        ))
      }
    </>
  );
};

export default Product;