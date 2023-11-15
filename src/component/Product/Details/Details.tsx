import useFetch from "../../../utils/data/food/food-fetch";
// import Food from "../../../utils/interface/Food";
// import ToParams from "../../../utils/model/Params";
import { DetailsView } from "../../../layout/Product/DetailsLayout";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../../layout/Layout";
//import { useState } from "react";
//import { CartMain } from "../../../layout/Cart/CartLayout";
// import {}

const Details = (): JSX.Element => {
  const params = useParams();
  // console.log("params API", params.id)

  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + `/food/${params.id}`);

  // console.log("DAta API", foods)

  //const [cart, setCart] = useState<Food[]>([]); // thêm state cho giỏ hàng

  //const addToCart = (food: Food) => {
  //  setCart([...cart,  {...food,  quantity: 1}]);
  //};
  return (
    <>
      <MainLayout>
        {
          error && <p className="text-center">{error}</p>
        }
        {
          isPending && <p className="text-center fold-bold mt-5 mb-5">Đang tải sản phẩm...</p>
        }
        {foods !== null && (
          <DetailsView food={foods} />
        )}
        {/* {
          <DetailsView key={foods.idFood} food={foods} />
          // foods &&
          // foods.map((k: Food) => (
          //   k.idFood === ToParams.getId(params)
          //   && (
          //     <DetailsView key={k.idFood} food={k} />
              
          //   )
          // ))
        } */}
      </MainLayout>
    </>
  );
};

export default Details;