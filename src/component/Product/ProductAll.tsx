import { MainLayout } from "../../layout/Layout";
import { ProductView } from "../../layout/Product/ProductLayout";
import useFetch from "../../utils/data/food/food-fetch";
import Food from "../../utils/interface/Food";
import { useState } from "react";

const ProductAll = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState(-1);
  const [maxPrice, setMaxPrice] = useState(99999999999);
  const [inputMinPrice, setInputMinPrice] = useState("");
  const [inputMaxPrice, setInputMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setInputMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setInputMaxPrice(e.target.value);
  };

  const handleClickFilter = () => {
      const minPriceValue = Number(inputMinPrice);
      const maxPriceValue = Number(inputMaxPrice);
      setMinPrice(minPriceValue)
      setMaxPrice(maxPriceValue)
  }

  let {
    data: foods,
    isPending,
    error,
  } = useFetch(
    `${
      import.meta.env.VITE_API_PATH
    }/food/findByPrice?min=${minPrice}&max=${maxPrice}` ??
      import.meta.env.VITE_API_PATH + "/food"
  );

  // const handleClickFilter = () => {
  //   console.log('Hello World');
  //   let {data, error, isPending } = useFetch(
  //     `${
  //       import.meta.env.VITE_API_PATH
  //     }/food/findByPrice?min=${minPrice}&max=${maxPrice}`
  //   );
  // }

  return (
    <>
      <MainLayout>
        <hr className="mt-3 mb-3"></hr>
        <h1 className="text-center font-bold text-3xl text-uppercase">
          DANH SÁCH SẢN PHẨM
        </h1>
        <hr className="mt-3 mb-3"></hr>
        {error && <p className="text-center mt-3 mb-3">{error}</p>}
        {isPending && (
          <p className="text-center mt-3 mb-3">
            Đang tải sản phẩm theo danh mục...
          </p>
        )}
        <div className="input-filter flex justify-center font-semibold">
          <input
            pattern="[0-9]"
            placeholder="Giá từ"
            type="text"
            className="border-2 p-1 border-orange-200"
            value={inputMinPrice}
            onChange={handleMinPriceChange}
          />
          <span>----</span>
          <input
            pattern="[0-9]"
            placeholder="Giá đến"
            type="text"
            className="border-2 p-1 border-orange-200"
            value={inputMaxPrice}
            onChange={handleMaxPriceChange}
          />
          <button
            type="submit"
            className="mx-3 px-3 border-2 text-black border-slate-700 rounded-lg"
            onClick={() => handleClickFilter()}
          >
            Lọc theo giá
          </button>
        </div>

        <section className="section">
          <div className="container-fluid">
            <div className="grid grid-cols-4 gap-3 fs-5">
              {foods &&
                foods.map((k: Food) => <ProductView key={k.idFood} food={k} />)}
            </div>
          </div>
        </section>
        <hr className="mt-5 mb-5"></hr>
      </MainLayout>
    </>
  );
};

export default ProductAll;
