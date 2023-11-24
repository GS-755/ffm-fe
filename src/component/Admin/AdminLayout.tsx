import { useState, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
// import { MouseEvent } from "react";


export default function AdminLayout({children}: {children: ReactNode}) {
  function AdminInfo() {
    alert("You can't logout".toUpperCase());
  }

  // let event: MouseEvent<HTMLButtonElement>
  // const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (
    option: string,

  ) => {
    setSelectedOption(option);
    // navigate("/admin-fc");
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
              className={`p-3 my-3 w-[100%] flex items-center rounded-md cursor-pointer ${
                selectedOption === "option1"
                  ? "bg-orange-100  text-orange-500 hover:bg-orange-100"
                  : "text-slate-500 hover:bg-slate-200"
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
              className={`p-3 my-3 w-[100%] flex items-center rounded-md cursor-pointer ${
                selectedOption === "option2"
                  ? "bg-orange-100  text-orange-500 hover:bg-orange-100"
                  : "text-slate-500 hover:bg-slate-200"
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
              className={`p-3 my-3 w-[100%] flex items-center rounded-md cursor-pointer ${
                selectedOption === "option3"
                  ? "bg-orange-100  text-orange-500 hover:bg-orange-100"
                  : "text-slate-500 hover:bg-slate-200"
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
              className={`p-3 my-3 w-[100%] flex items-center  rounded-md cursor-pointer ${
                selectedOption === "option4"
                  ? "bg-orange-100  text-orange-500 hover:bg-orange-100"
                  : "text-slate-500 hover:bg-slate-200"
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

            {/* CONTENT */}
          <div>
            {children}
          </div>


        </div>
        {/* End Main Dashboard */}
      </main>
    </div>
  );
}
