import useFetch from "../../../utils/data/json-fetch";
import Food from "../../../utils/interface/Food";
import { DetailsView } from "../../../layout/Product/DetailsLayout";
import { useParams } from "react-router-dom";

const Product = (): JSX.Element => {
  const id: number = Number(useParams());
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food/' + id);
  return (
    <>
      {
        error
        && <p>{error}</p>
      }
      {
        isPending
        && <p className="text-center">Đang tải sản phẩm...</p>
      }
      {
        foods && (
          <>
            {
              foods.map((k: Food) => (
                <DetailsView key={k.idFood} food={k} />
              ))
            }
          </>
        )
      }
    </>
  );
};

export default Product;