import { useEffect, useState } from "react";
import VNPayStatus from "../../utils/interface/VNPayStatus";

interface VNPayResultProps {
  data: VNPayStatus;
  isPending: boolean;
  error: string | null;
}
const useFetch = (url: string): VNPayResultProps => {
  const [data, setData] = useState<VNPayStatus>({ status: 0, message: 0 });
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
    }, 1000)
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;