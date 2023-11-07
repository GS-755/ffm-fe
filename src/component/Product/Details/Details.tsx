import { DetailsView } from '../../../layout/Product/DetailsLayout';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <DetailsView id={Number(id)} />
  )
}

export default Details;