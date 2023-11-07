const BtnCheckout = () => {
  return (
    <div className="mb-4 text-center">
      <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 h-12 rounded inline-flex items-center">
        <i className="fa-solid fa-credit-card fill-current w-4 h-4 mr-2"></i>
        <span>&ensp;Thanh toán</span>
      </button>
    </div>
  );
}

export { BtnCheckout };