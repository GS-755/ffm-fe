import useFetch from "../../../utils/data/food/food-fetch";
import Food from "../../../utils/interface/Food";
import ToParams from "../../../utils/model/Params";
import { DetailsView } from "../../../layout/Product/DetailsLayout";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../../layout/Layout";

<<<<<<< HEAD
const Details = () => {
  const { id } = useParams();
  const { data: foods, error, isPending } = useFetch(import.meta.env.VITE_API_PATH + '/food/' + id);
  const food: Food = foods?.find((k: Food) => k.idFood === Number(id))!;
=======
const Details = (): JSX.Element => {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');
  const params = useParams();
>>>>>>> beaec070f2ab6f499d9c7626cb372ce79a84967e
  return (
    <>
      <MainLayout>
        {
          error && <p className="text-center">{error}</p>
        }
        {
          isPending && <p className="text-center fold-bold mt-5 mb-5">Đang tải sản phẩm...</p>
        }
        {
          foods &&
          foods.map((k: Food) => (
            k.idFood === ToParams.getId(params)
            && (
              <DetailsView key={k.idFood} food={k} />
            )
          ))
        }
      </MainLayout>
    </>
  );
};

export default Details;