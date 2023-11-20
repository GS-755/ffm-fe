import { MainLayout } from "../../layout/Layout";
import { ProductView } from "../../layout/Product/ProductLayout";
import useFetch from "../../utils/data/food/food-fetch";
import Food from "../../utils/interface/Food";

const ProductAll = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
  return (
    <>
      <MainLayout>
        <hr className="mt-3 mb-3"></hr>
        <h1 className="text-center font-bold text-3xl text-uppercase">DANH SÁCH SẢN PHẨM</h1>
        <hr className="mt-3 mb-3"></hr>
        {
          error &&
          <p className="text-center mt-3 mb-3">{error}</p>
        }
        {
          isPending &&
          <p className="text-center mt-3 mb-3">Đang tải sản phẩm theo danh mục...</p>
        }
        <section className="section">
          <div className="container-fluid">
            <div className="grid grid-cols-4 gap-3 fs-5">
              {
                foods &&
                foods.map((k: Food) => (
                    <ProductView key={k.idFood} food={k} />
                  ))
              }
            </div>
          </div>
        </section>
        <hr className="mt-5 mb-5"></hr>
      </MainLayout>
    </>
  );
};

export default ProductAll;