import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import useFetch from "../../../utils/data/food/food-fetch";


export default function AdminFood() {
  const { data: foods, isPending, error } = useFetch(import.meta.env.VITE_API_PATH + '/food');

  if (error) {
    return <p>Error: {error}</p>;
  }

  if(isPending) { return }

  return (
    <AdminLayout>
      <div className=" leading-6 px-6 ">
        {/* Title */}
        <div className="flex items-center justify-between leading-6 mb-10">
          <h4 className="ml-6 font-bold text-2xl leading-9">Món ăn</h4>
          <button className="flex items-center bg-[#212b36] text-white py-2 px-4 rounded-lg text-sm font-bold">
            + Thêm món ăn
          </button>
        </div>
        {/* End Title */}

        {/* DashBoard */}
        <div className=" shadow-xl p-6 mb-5 bg-white border-[0.1px] border-slate-200 rounded-2xl border-1">
          {/* Search bar */}
          <div className="flex items-center justify-between leading-6">
            <div className="flex items-center rounded-lg leading-6 pr-4 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="ml-4 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                className="leading-6 p-3"
                type="text"
                placeholder="Search bar"
                style={{
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-slate-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </div>
          {/* End search bar */}

          {/* Board */}
          <div className="mt-4 relative max-h-[400px] overflow-y-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs bg-[#f1962e] text-gray-800 uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Mã món ăn
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên món ăn
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Số lượng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thể loại
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chỉnh sửa
                  </th>
                </tr>
              </thead>
              <tbody>
                {foods && (
                  <>
                    {foods.map((food) => (
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {food.idFood}
                        </th>
                        <td className="px-6 py-4">{food.name}</td>
                        <td className="px-6 py-4">{food.price}</td>
                        <td className="px-6 py-4">{food.quantity}</td>
                        <td className="px-6 py-4">
                          <a href="#">{food.idFc}</a>
                        </td>
                        <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                          <Link to={`/admin/${food.idFood}`}>Edit</Link>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {/* End Board */}
        </div>
        {/* End Dashboard */}
      </div>
    </AdminLayout>
  );
}