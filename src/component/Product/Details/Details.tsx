import { DetailsView } from '../../../layout/Product/DetailsLayout';
import { useParams } from 'react-router-dom';
import useFetch from '../../../utils/data/json-fetch';
import Food from '../../../utils/interface/Food';

const Details = () => {
  const { id } = useParams();
  const { data: foods, error, isPending } = useFetch(import.meta.env.VITE_API_PATH + '/food/' + id);
  const food: Food = foods?.find((k: Food) => k.idFood === Number(id));
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
            <DetailsView key={food.idFood} food={food} />
          </>
        )
      }
    </>
  );
}

export default Details;