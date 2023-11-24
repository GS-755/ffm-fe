import useFetch from "../../component/Payment/FetchStatus";

interface VNPayProps {
  [k: string]: string;
}
const paramsToString = (params: VNPayProps): string => {
  return Object.entries(params)
    .map(entry => {
      return `${entry[0]}=${entry[1]}`;
    }).join('&');
}

const PaymentStatus = (): JSX.Element => {
  const searchParams = new URLSearchParams(location.search);
  const params: VNPayProps = Object.fromEntries(searchParams.entries());
  const queryString = paramsToString(params);

  const { data, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/api/vnpay/vnpay_return?' + queryString);

  return (
    <>
      <div className="container">
        <div className="mb-3 text-center">
          {
            error && (
              <p className="text-center text-red-500 text-3xl">{error}</p>
            )
          }
          {
            isPending && (
              <p className="text-center text-3xl">Đang tải kết quả giao dịch...</p>
            )
          }
          {
            data && (
              <>
                <h1 className="text-center text-red-500 mb-3">Status: {data.status}</h1>
                <h1 className="text-center text-red-500 mb-3">Transaction message: {data.message}</h1>
                <br></br>
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export { PaymentStatus };