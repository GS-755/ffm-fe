import { useState, useEffect } from 'react';
import Food from '../interface/Food';

interface UseFetchResult {
  data: Food[] | null;
  isPending: boolean;
  error: string | null;
}
const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<Food[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {  
            throw Error('An error occured :(((');
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
    }, 1000);
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;