import { ProductView } from "../../layout/Product/ProductLayout";
import useFetch from "../../utils/data/json-fetch";
import Food from "../../utils/interface/Food";

const Product = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
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
                <ProductView key={k.idFood} food={k} />
              ))
            }
          </>
        )
      }
    </>
  );
};

export default Product;