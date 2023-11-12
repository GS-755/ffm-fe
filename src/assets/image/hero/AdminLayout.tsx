import { useState } from "react";

export default function AdminLayout() {
  function AdminInfo() {
    alert("You can't logout".toUpperCase());
  }

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };


  //  const divClasses = `p-3 my-3 w-[100%] flex items-center hover:bg-slate-200 rounded-md cursor-pointer ${
  //    handleOptionClick() ? "bg-red-400" : ""}`;

  return (
    <div>
      <main className="h-screen w-full flex justify-between overflow-hidden font-sans">
        {/* Sidebar */}
        <div className=" w-[20%] h-full p-10 leading-6 flex flex-col shadow-md sm:rounded-lg shadow-slate-300">
          {/* Logo */}
          <div className=" w-20 h-auto ml-16">
            <img
              className="w-full h-full bg-transparent"
              src="src\assets\image\hero\7309589.jpg"
              alt=""
            />
          </div>

          {/* Admin Info */}
          <div className=" flex items-center rounded-xl  bg-[#e7ebef] py-3 ">
            <div className="w-10 h-10 object-cover ml-4">
              <img
                className="w-full h-full rounded-full"
                src="src\assets\image\hero\1699273069283.png"
                alt="Admin User"
              />
            </div>
            <h6 className="title font-medium ml-6">Duke</h6>
          </div>

          {/* Sidebar Option */}
          <div className="mt-15">
            {/* Option Detail */}
            <div
              onClick={() => handleOptionClick("option1")}
              className={`p-3 my-3 w-[100%] flex items-center text-slate-500 hover:bg-slate-200 rounded-md cursor-pointer ${
                selectedOption === "option1"
                  ? "bg-orange-100  text-orange-500"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h3 className=" ml-6 font-semibold">Món ăn</h3>
            </div>

            <div
              onClick={() => handleOptionClick("option2")}
              className={`p-3 my-3 w-[100%] flex items-center text-slate-500 hover:bg-slate-200 rounded-md cursor-pointer ${
                selectedOption === "option2"
                  ? "bg-orange-100 text-orange-500"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h3 className=" ml-6 font-semibold">Thể loại món ăn</h3>
            </div>
            <div
              onClick={() => handleOptionClick("option3")}
              className={`p-3 my-3 w-[100%] flex items-center text-slate-500 hover:bg-slate-200 rounded-md cursor-pointer ${
                selectedOption === "option3"
                  ? "bg-orange-100 text-orange-500"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h3 className=" ml-6 font-semibold">Khách hàng</h3>
            </div>
            <div
              onClick={() => handleOptionClick("option4")}
              className={`p-3 my-3 w-[100%] flex items-center text-slate-500 hover:bg-slate-200 rounded-md cursor-pointer ${
                selectedOption === "option4"
                  ? "bg-orange-100 text-orange-500"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h3 className=" ml-6 font-semibold">Đơn hàng</h3>
            </div>
          </div>
        </div>
        {/* End sidebar */}

        {/* Main Dashboard */}
        <div className="w-[80%]">
          {/* Navbar */}
          <nav className="flex justify-between items-center p-10">
            <h1 className=" text-3xl font-semibold relative left-1/3 ">
              Quản trị Admin
            </h1>
            <img
              onClick={AdminInfo}
              className=" cursor-pointer"
              src="src\assets\react.svg"
              alt=""
            />
          </nav>

          {/* Main */}
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
              <div className="mt-4 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs bg-orange-400 text-gray-800 uppercase  dark:bg-gray-700 dark:text-gray-400">
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
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Hambuger cá</td>
                      <td className="px-6 py-4">60.000đ</td>
                      <td className="px-6 py-4">10 cái</td>
                      <td className="px-6 py-4">
                        <a href="#">Hambuger</a>
                      </td>
                      <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Hambuger cá</td>
                      <td className="px-6 py-4">60.000đ</td>
                      <td className="px-6 py-4">10 cái</td>
                      <td className="px-6 py-4">
                        <a href="#">Hambuger</a>
                      </td>
                      <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Hambuger cá</td>
                      <td className="px-6 py-4">60.000đ</td>
                      <td className="px-6 py-4">10 cái</td>
                      <td className="px-6 py-4">
                        <a href="#">Hambuger</a>
                      </td>
                      <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Hambuger cá</td>
                      <td className="px-6 py-4">60.000đ</td>
                      <td className="px-6 py-4">10 cái</td>
                      <td className="px-6 py-4">
                        <a href="#">Hambuger</a>
                      </td>
                      <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Hambuger cá</td>
                      <td className="px-6 py-4">60.000đ</td>
                      <td className="px-6 py-4">10 cái</td>
                      <td className="px-6 py-4">
                        <a href="#">Hambuger</a>
                      </td>
                      <td className="px-6 py-4 text-blue-500 font-semibold hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Board */}
            </div>
            {/* End Dashboard */}
          </div>
          {/* End Main */}
        </div>
        {/* End Main Dashboard */}
      </main>
    </div>
  );
}
