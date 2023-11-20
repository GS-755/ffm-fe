import React from "react";
import "../style/tuan/form.css";

const BtnCheckout = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="mb-4 text-center" role="button" onClick={() => setShowModal(true)}>
        <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 h-12 rounded inline-flex items-center">
          <i className="fa-solid fa-credit-card fill-current w-4 h-4 mr-2"></i>
          <span>&ensp;Thanh toán</span>
        </button>
      </div>
      {
        showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-center">
                      Kiểm tra thông tin
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 text-start">
                    <form>
                      <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="email" style={{ display: "block", color: "#333" }}>Tên khách hàng</label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                        />
                      </div>
                      <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="password" style={{ display: "block", color: "#333" }}>Số điện thoại</label>
                        <input
                          type="password"
                          id="password"
                          className="form-input"
                        />
                      </div>
                      <div style={{ marginBottom: "1rem" }}>
                        <label htmlFor="confirmPassword" style={{ display: "block", color: "#333" }}>Địa chỉ giao hàng</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Đóng
                    </button>
                    <button
                      className="bg-orange-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
      }
    </>
  );
}


export { BtnCheckout };