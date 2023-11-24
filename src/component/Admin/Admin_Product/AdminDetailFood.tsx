import { useParams } from "react-router-dom";
import ProductSample from "../../../assets/image/product/unsplash-product-sample.jpg";
import useFetch from "../../../utils/data/food/food-fetch";
import AdminLayout from "../AdminLayout";
import getImageUri from "../../../utils/get-image-url";
import { formatCurrency } from "../../../utils/format-currency";

export default function FoodDetail() {
  const { id } = useParams();
  const {
    data: food,
    isPending,
    error,
  } = useFetch(import.meta.env.VITE_API_PATH + `/food/${id}`);
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <AdminLayout>
      {food && (
        <>
          <div className="container mx-auto p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Chi tiết sản phẩm</h1>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">{food.name}</h2>

              <div className="mb-4 w-52 h-auto">
                <img
                  src={getImageUri(food.image)}
                  alt="Product Image"
                  className="w-full h-auto rounded-md"
                />
              </div>

              <div>
                <p className="text-gray-600">{food.des}</p>
                <p className="text-gray-600">{formatCurrency(food.price)}</p>
                <p className="text-gray-600">{food.quantity}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-500 text-white ml-4 px-4 py-2 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
