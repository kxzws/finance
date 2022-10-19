import { useParams } from 'react-router-dom';

const Currency = () => {
  const { id } = useParams();

  return <section>{id}</section>;
};

export default Currency;
