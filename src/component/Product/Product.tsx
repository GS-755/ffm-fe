import { ProductView } from "../../layout/Product/ProductLayout";
import useFetch from "../../utils/data/json-fetch";
import Food from "../../utils/interface/Food";

const Product = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch('http://localhost:8080/api/food');
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
                <ProductView food={k} />
              ))
            }
          </>
        )
      }
    </>
  );
};

export default Product;