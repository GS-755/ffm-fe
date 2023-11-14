import FoodCategory from '../../interface/Category';
import { useState, useEffect } from 'react';

interface UseFetchResult {
  data: FoodCategory[];
  isPending: boolean;
  error: string | null;
}
const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<FoodCategory[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {  
            throw Error('sKiLl IsSuE :))))');
          }
          
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        });
    }, 200);
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;