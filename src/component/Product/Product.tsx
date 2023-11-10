import { ProductView } from "../../layout/Product/ProductLayout";
import useFetch from "../../utils/data/json-fetch";

const Product = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
  return (
    <section>
      {
        error
        && <p>{error}</p>
      }
      {
        isPending
        && <p className="text-center">Đang tải sản phẩm...</p>
      }
      {
        foods &&
        <ProductView foods={foods} />
      }
    </section>
  );
};

export default Product;